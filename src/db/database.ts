import { type SQLiteDatabase } from 'expo-sqlite';

import { MALZEMELER, MUTFAKLAR } from './seed-malzemeler';
import { TURK_TARIFLERI, type SeedTarif } from './seed-tarifler-turk';
import { ITALYAN_TARIFLERI, MEKSIKA_TARIFLERI, UZAKDOGU_TARIFLERI } from './seed-tarifler-dunya';
import { KOKTEYL_TARIFLERI } from './seed-kokteyller';

// Seed verisi değiştiğinde bu sürümü artırın; uygulama açılışta
// veritabanını yeni veriyle baştan kurar.
const SEMA_SURUMU = 7;

export interface Mutfak {
  id: number;
  isim: string;
  tarifSayisi: number;
}

export interface Malzeme {
  id: number;
  isim: string;
  kategori: string;
}

export interface Tarif {
  id: number;
  isim: string;
  mutfak_id: number;
  mutfak: string;
  kategori: string;
  sure_dk: number;
  adimlar: string;
  tur: 'yemek' | 'kokteyl';
  porsiyon: number;
}

export interface TarifMalzemesi extends Malzeme {
  miktar: string;
}

export interface EslesenTarif extends Tarif {
  toplam: number;
  eslesen: number;
  eksikler: string[];
}

// Şemanın güncel olup olmadığını hem sürüm numarası hem de gerçek yapı
// üzerinden doğrular. Eski bir veritabanı dosyası (ör. "miktar" kolonu
// eklenmeden önce oluşmuş) sürüm numarası ne olursa olsun yenilenir.
async function semaGuncelMi(db: SQLiteDatabase): Promise<boolean> {
  const surum = await db.getFirstAsync<{ user_version: number }>('PRAGMA user_version');
  if ((surum?.user_version ?? 0) < SEMA_SURUMU) return false;
  try {
    const kolonlar = await db.getAllAsync<{ name: string }>('PRAGMA table_info(tarif_malzeme)');
    if (!kolonlar.some((k) => k.name === 'miktar')) return false;
    const tarifKolonlar = await db.getAllAsync<{ name: string }>('PRAGMA table_info(tarifler)');
    if (!tarifKolonlar.some((k) => k.name === 'kategori')) return false;
    if (!tarifKolonlar.some((k) => k.name === 'porsiyon')) return false;
  } catch {
    return false;
  }
  return true;
}

export async function initDb(db: SQLiteDatabase) {
  if (await semaGuncelMi(db)) return;

  await db.execAsync(`
    PRAGMA journal_mode = WAL;
    DROP TABLE IF EXISTS tarif_malzeme;
    DROP TABLE IF EXISTS tarifler;
    DROP TABLE IF EXISTS malzemeler;
    DROP TABLE IF EXISTS mutfaklar;
    CREATE TABLE mutfaklar (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      isim TEXT NOT NULL UNIQUE
    );
    CREATE TABLE malzemeler (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      isim TEXT NOT NULL UNIQUE,
      kategori TEXT NOT NULL
    );
    CREATE TABLE tarifler (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      isim TEXT NOT NULL,
      mutfak_id INTEGER NOT NULL REFERENCES mutfaklar(id),
      kategori TEXT NOT NULL DEFAULT 'Diğer',
      sure_dk INTEGER NOT NULL,
      adimlar TEXT NOT NULL,
      tur TEXT NOT NULL DEFAULT 'yemek',
      porsiyon INTEGER NOT NULL DEFAULT 4
    );
    CREATE TABLE tarif_malzeme (
      tarif_id INTEGER NOT NULL REFERENCES tarifler(id) ON DELETE CASCADE,
      malzeme_id INTEGER NOT NULL REFERENCES malzemeler(id) ON DELETE CASCADE,
      miktar TEXT NOT NULL DEFAULT '',
      PRIMARY KEY (tarif_id, malzeme_id)
    );
  `);

  await seedYukle(db);
  await db.execAsync(`PRAGMA user_version = ${SEMA_SURUMU}`);
}

// Tarif için porsiyon sayısı: elle belirtilmişse onu, yoksa kategoriye göre
// makul bir varsayılan kullanır.
function porsiyonHesapla(t: SeedTarif): number {
  if (t.porsiyon && t.porsiyon > 0) return t.porsiyon;
  if (t.tur === 'kokteyl') return 1;
  const k = t.kategori.toLocaleLowerCase('tr');
  if (k.includes('tatlı')) return 6;
  if (k.includes('çorba')) return 4;
  if (k.includes('meze') || k.includes('salata')) return 4;
  if (k.includes('hamur')) return 6;
  return 4;
}

async function seedYukle(db: SQLiteDatabase) {
  const tumTarifler: SeedTarif[] = [
    ...TURK_TARIFLERI,
    ...ITALYAN_TARIFLERI,
    ...MEKSIKA_TARIFLERI,
    ...UZAKDOGU_TARIFLERI,
    ...KOKTEYL_TARIFLERI,
  ];

  await db.withTransactionAsync(async () => {
    const mutfakId = new Map<string, number>();
    for (const isim of MUTFAKLAR) {
      const r = await db.runAsync('INSERT INTO mutfaklar (isim) VALUES (?)', isim);
      mutfakId.set(isim, r.lastInsertRowId);
    }

    const malzemeId = new Map<string, number>();
    for (const [isim, kategori] of MALZEMELER) {
      const r = await db.runAsync('INSERT OR IGNORE INTO malzemeler (isim, kategori) VALUES (?, ?)', isim, kategori);
      if (r.changes > 0) malzemeId.set(isim, r.lastInsertRowId);
    }

    // Tarif içinde geçen ama sözlükte olmayan malzemeyi otomatik ekler.
    const malzemeBul = async (isim: string): Promise<number> => {
      const mevcut = malzemeId.get(isim);
      if (mevcut !== undefined) return mevcut;
      const r = await db.runAsync('INSERT OR IGNORE INTO malzemeler (isim, kategori) VALUES (?, ?)', isim, 'Diğer');
      const id = r.changes > 0
        ? r.lastInsertRowId
        : (await db.getFirstAsync<{ id: number }>('SELECT id FROM malzemeler WHERE isim = ?', isim))!.id;
      malzemeId.set(isim, id);
      return id;
    };

    for (const t of tumTarifler) {
      const mid = mutfakId.get(t.mutfak);
      if (mid === undefined) continue;
      const r = await db.runAsync(
        'INSERT INTO tarifler (isim, mutfak_id, kategori, sure_dk, adimlar, tur, porsiyon) VALUES (?, ?, ?, ?, ?, ?, ?)',
        t.isim, mid, t.kategori, t.sure, t.adimlar.join('\n'), t.tur, porsiyonHesapla(t)
      );
      for (const [mIsim, miktar] of t.malzemeler) {
        const malzId = await malzemeBul(mIsim);
        await db.runAsync(
          'INSERT OR IGNORE INTO tarif_malzeme (tarif_id, malzeme_id, miktar) VALUES (?, ?, ?)',
          r.lastInsertRowId, malzId, miktar
        );
      }
    }
  });
}

export async function getMutfaklar(db: SQLiteDatabase): Promise<Mutfak[]> {
  return db.getAllAsync<Mutfak>(`
    SELECT m.id, m.isim, COUNT(t.id) AS tarifSayisi
    FROM mutfaklar m
    LEFT JOIN tarifler t ON t.mutfak_id = m.id
    GROUP BY m.id
    ORDER BY tarifSayisi DESC, m.isim
  `);
}

export async function getMalzemeler(db: SQLiteDatabase): Promise<Malzeme[]> {
  return db.getAllAsync<Malzeme>('SELECT id, isim, kategori FROM malzemeler ORDER BY kategori, isim');
}

export async function getTariflerByMutfak(db: SQLiteDatabase, mutfakId: number): Promise<Tarif[]> {
  return db.getAllAsync<Tarif>(
    `SELECT t.*, m.isim AS mutfak FROM tarifler t JOIN mutfaklar m ON m.id = t.mutfak_id
     WHERE t.mutfak_id = ? ORDER BY t.kategori, t.isim`,
    mutfakId
  );
}

export async function getTarif(db: SQLiteDatabase, id: number): Promise<Tarif | null> {
  return db.getFirstAsync<Tarif>(
    `SELECT t.*, m.isim AS mutfak FROM tarifler t JOIN mutfaklar m ON m.id = t.mutfak_id WHERE t.id = ?`,
    id
  );
}

export async function getTarifMalzemeleri(db: SQLiteDatabase, tarifId: number): Promise<TarifMalzemesi[]> {
  return db.getAllAsync<TarifMalzemesi>(
    `SELECT m.id, m.isim, m.kategori, tm.miktar FROM tarif_malzeme tm
     JOIN malzemeler m ON m.id = tm.malzeme_id WHERE tm.tarif_id = ? ORDER BY m.isim`,
    tarifId
  );
}

export async function getTarifKategorileri(db: SQLiteDatabase): Promise<string[]> {
  const satirlar = await db.getAllAsync<{ kategori: string }>(
    'SELECT DISTINCT kategori FROM tarifler ORDER BY kategori'
  );
  return satirlar.map((s) => s.kategori);
}

// Seçilen malzemelere göre tarifleri bulur: tam eşleşenler önce,
// ardından eksik malzeme sayısı en az olanlar gelir.
export async function malzemeyeGoreTarifBul(db: SQLiteDatabase, malzemeIds: number[]): Promise<EslesenTarif[]> {
  if (malzemeIds.length === 0) return [];
  const placeholders = malzemeIds.map(() => '?').join(',');

  const tarifler = await db.getAllAsync<EslesenTarif & { eksikler: never }>(
    `SELECT t.*, m.isim AS mutfak,
            COUNT(tm.malzeme_id) AS toplam,
            SUM(CASE WHEN tm.malzeme_id IN (${placeholders}) THEN 1 ELSE 0 END) AS eslesen
     FROM tarifler t
     JOIN mutfaklar m ON m.id = t.mutfak_id
     JOIN tarif_malzeme tm ON tm.tarif_id = t.id
     GROUP BY t.id
     HAVING eslesen > 0
     ORDER BY (CAST(eslesen AS REAL) / toplam) DESC, (toplam - eslesen) ASC, t.isim
     LIMIT 60`,
    ...malzemeIds
  );

  const sonuc: EslesenTarif[] = [];
  for (const t of tarifler) {
    const eksik = await db.getAllAsync<{ isim: string }>(
      `SELECT m.isim FROM tarif_malzeme tm JOIN malzemeler m ON m.id = tm.malzeme_id
       WHERE tm.tarif_id = ? AND tm.malzeme_id NOT IN (${placeholders}) ORDER BY m.isim`,
      t.id,
      ...malzemeIds
    );
    sonuc.push({ ...t, eksikler: eksik.map((e) => e.isim) });
  }
  return sonuc;
}

export async function ekleMutfak(db: SQLiteDatabase, isim: string): Promise<void> {
  await db.runAsync('INSERT INTO mutfaklar (isim) VALUES (?)', isim.trim());
}

export async function ekleMalzeme(db: SQLiteDatabase, isim: string, kategori: string): Promise<void> {
  await db.runAsync('INSERT INTO malzemeler (isim, kategori) VALUES (?, ?)', isim.trim(), kategori.trim());
}

export async function ekleTarif(
  db: SQLiteDatabase,
  tarif: { isim: string; mutfakId: number; kategori: string; sureDk: number; adimlar: string; tur: 'yemek' | 'kokteyl'; porsiyon?: number },
  malzemeIds: number[]
): Promise<void> {
  await db.withTransactionAsync(async () => {
    const r = await db.runAsync(
      'INSERT INTO tarifler (isim, mutfak_id, kategori, sure_dk, adimlar, tur, porsiyon) VALUES (?, ?, ?, ?, ?, ?, ?)',
      tarif.isim.trim(),
      tarif.mutfakId,
      tarif.kategori.trim(),
      tarif.sureDk,
      tarif.adimlar.trim(),
      tarif.tur,
      tarif.porsiyon && tarif.porsiyon > 0 ? tarif.porsiyon : 4
    );
    for (const mid of malzemeIds) {
      await db.runAsync('INSERT INTO tarif_malzeme (tarif_id, malzeme_id) VALUES (?, ?)', r.lastInsertRowId, mid);
    }
  });
}
