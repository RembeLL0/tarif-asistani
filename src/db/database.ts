import { type SQLiteDatabase } from 'expo-sqlite';

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
  sure_dk: number;
  adimlar: string;
  tur: 'yemek' | 'kokteyl';
}

export interface EslesenTarif extends Tarif {
  toplam: number;
  eslesen: number;
  eksikler: string[];
}

export async function initDb(db: SQLiteDatabase) {
  await db.execAsync(`
    PRAGMA journal_mode = WAL;
    PRAGMA foreign_keys = ON;
    CREATE TABLE IF NOT EXISTS mutfaklar (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      isim TEXT NOT NULL UNIQUE
    );
    CREATE TABLE IF NOT EXISTS malzemeler (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      isim TEXT NOT NULL UNIQUE,
      kategori TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS tarifler (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      isim TEXT NOT NULL,
      mutfak_id INTEGER NOT NULL REFERENCES mutfaklar(id),
      sure_dk INTEGER NOT NULL,
      adimlar TEXT NOT NULL,
      tur TEXT NOT NULL DEFAULT 'yemek'
    );
    CREATE TABLE IF NOT EXISTS tarif_malzeme (
      tarif_id INTEGER NOT NULL REFERENCES tarifler(id) ON DELETE CASCADE,
      malzeme_id INTEGER NOT NULL REFERENCES malzemeler(id) ON DELETE CASCADE,
      PRIMARY KEY (tarif_id, malzeme_id)
    );
  `);

  const row = await db.getFirstAsync<{ c: number }>('SELECT COUNT(*) AS c FROM mutfaklar');
  if (row && row.c === 0) {
    await seed(db);
  }
}

async function seed(db: SQLiteDatabase) {
  const mutfaklar = ['Türk Mutfağı', 'İtalyan Mutfağı', 'Meksika Mutfağı', 'Uzak Doğu Mutfağı', 'Kokteyller'];

  const malzemeler: [string, string][] = [
    ['Domates', 'Sebze & Meyve'],
    ['Soğan', 'Sebze & Meyve'],
    ['Sarımsak', 'Sebze & Meyve'],
    ['Biber', 'Sebze & Meyve'],
    ['Patlıcan', 'Sebze & Meyve'],
    ['Patates', 'Sebze & Meyve'],
    ['Limon', 'Sebze & Meyve'],
    ['Misket Limonu', 'Sebze & Meyve'],
    ['Avokado', 'Sebze & Meyve'],
    ['Nane', 'Sebze & Meyve'],
    ['Maydanoz', 'Sebze & Meyve'],
    ['Kıyma', 'Et & Tavuk'],
    ['Tavuk Göğsü', 'Et & Tavuk'],
    ['Yumurta', 'Süt Ürünleri & Yumurta'],
    ['Peynir', 'Süt Ürünleri & Yumurta'],
    ['Tereyağı', 'Süt Ürünleri & Yumurta'],
    ['Süt', 'Süt Ürünleri & Yumurta'],
    ['Krema', 'Süt Ürünleri & Yumurta'],
    ['Yoğurt', 'Süt Ürünleri & Yumurta'],
    ['Kırmızı Mercimek', 'Bakliyat & Tahıl'],
    ['Pirinç', 'Bakliyat & Tahıl'],
    ['Un', 'Bakliyat & Tahıl'],
    ['Makarna', 'Bakliyat & Tahıl'],
    ['Noodle', 'Bakliyat & Tahıl'],
    ['Tortilla', 'Bakliyat & Tahıl'],
    ['Tuz', 'Baharat & Sos'],
    ['Karabiber', 'Baharat & Sos'],
    ['Pul Biber', 'Baharat & Sos'],
    ['Zeytinyağı', 'Baharat & Sos'],
    ['Salça', 'Baharat & Sos'],
    ['Soya Sosu', 'Baharat & Sos'],
    ['Şeker', 'Baharat & Sos'],
    ['Rom', 'İçecek'],
    ['Soda', 'İçecek'],
    ['Kola', 'İçecek'],
  ];

  interface SeedTarif {
    isim: string;
    mutfak: string;
    sure: number;
    tur: 'yemek' | 'kokteyl';
    adimlar: string[];
    malzemeler: string[];
  }

  const tarifler: SeedTarif[] = [
    {
      isim: 'Menemen',
      mutfak: 'Türk Mutfağı',
      sure: 20,
      tur: 'yemek',
      adimlar: [
        'Biberleri doğrayıp tereyağında soteleyin.',
        'Doğranmış domatesleri ekleyip suyunu çekene kadar pişirin.',
        'Yumurtaları kırıp karıştırın, tuz ve karabiber ekleyin.',
        'Yumurtalar hafif akışkanken ocaktan alıp sıcak servis edin.',
      ],
      malzemeler: ['Domates', 'Biber', 'Yumurta', 'Soğan', 'Tereyağı', 'Tuz', 'Karabiber'],
    },
    {
      isim: 'Kırmızı Mercimek Çorbası',
      mutfak: 'Türk Mutfağı',
      sure: 35,
      tur: 'yemek',
      adimlar: [
        'Soğanı doğrayıp tereyağında kavurun.',
        'Salçayı ekleyip 1 dakika daha kavurun.',
        'Yıkanmış mercimek ve patatesi ekleyip üzerini geçecek kadar su koyun.',
        'Mercimekler yumuşayınca blenderdan geçirin, tuz ve pul biberle tatlandırın.',
      ],
      malzemeler: ['Kırmızı Mercimek', 'Soğan', 'Patates', 'Salça', 'Tereyağı', 'Tuz', 'Pul Biber'],
    },
    {
      isim: 'Karnıyarık',
      mutfak: 'Türk Mutfağı',
      sure: 50,
      tur: 'yemek',
      adimlar: [
        'Patlıcanları alacalı soyup kızartın.',
        'Kıymayı soğan ve sarımsakla kavurun, doğranmış domates ve salçayı ekleyin.',
        'Patlıcanların ortasını yarıp iç harcı doldurun.',
        'Üzerine biber dizip fırında 25 dakika pişirin.',
      ],
      malzemeler: ['Patlıcan', 'Kıyma', 'Soğan', 'Sarımsak', 'Domates', 'Biber', 'Salça', 'Zeytinyağı', 'Tuz'],
    },
    {
      isim: 'Fırın Sütlaç',
      mutfak: 'Türk Mutfağı',
      sure: 60,
      tur: 'yemek',
      adimlar: [
        'Pirinci az suda haşlayın.',
        'Süt ve şekeri ekleyip karıştırarak pişirin.',
        'Az su ile açtığınız unu ekleyip koyulaşana kadar karıştırın.',
        'Kaselere paylaştırıp fırında üzeri kızarana kadar pişirin.',
      ],
      malzemeler: ['Süt', 'Pirinç', 'Şeker', 'Un'],
    },
    {
      isim: 'Spaghetti Pomodoro',
      mutfak: 'İtalyan Mutfağı',
      sure: 30,
      tur: 'yemek',
      adimlar: [
        'Makarnayı tuzlu suda haşlayın.',
        'Zeytinyağında sarımsağı kokusu çıkana kadar soteleyin.',
        'Doğranmış domatesleri ekleyip sos kıvamına gelene kadar pişirin.',
        'Makarnayı sosla karıştırıp karabiber serperek servis edin.',
      ],
      malzemeler: ['Makarna', 'Domates', 'Sarımsak', 'Zeytinyağı', 'Tuz', 'Karabiber'],
    },
    {
      isim: 'Kremalı Tavuklu Makarna',
      mutfak: 'İtalyan Mutfağı',
      sure: 35,
      tur: 'yemek',
      adimlar: [
        'Tavukları kuşbaşı doğrayıp soteleyin.',
        'Sarımsağı ekleyip 1 dakika çevirin.',
        'Kremayı ekleyip hafif kaynatın, tuzla tatlandırın.',
        'Haşlanmış makarnayı sosa ekleyin, rendelenmiş peynirle servis edin.',
      ],
      malzemeler: ['Makarna', 'Tavuk Göğsü', 'Krema', 'Sarımsak', 'Peynir', 'Tuz'],
    },
    {
      isim: 'Taco',
      mutfak: 'Meksika Mutfağı',
      sure: 30,
      tur: 'yemek',
      adimlar: [
        'Kıymayı soğanla kavurun, tuz ve baharatları ekleyin.',
        'Domates ve biberi küçük doğrayın.',
        'Tortillaları tavada ısıtın.',
        'Tortillanın içine kıyma, sebzeler ve peyniri koyup katlayın.',
      ],
      malzemeler: ['Tortilla', 'Kıyma', 'Soğan', 'Domates', 'Biber', 'Peynir', 'Tuz'],
    },
    {
      isim: 'Guacamole',
      mutfak: 'Meksika Mutfağı',
      sure: 15,
      tur: 'yemek',
      adimlar: [
        'Avokadoları çatalla ezin.',
        'Domates ve soğanı çok küçük doğrayıp ekleyin.',
        'Misket limonu suyu ve tuzu ekleyip karıştırın.',
        'Cips veya ekmekle servis edin.',
      ],
      malzemeler: ['Avokado', 'Domates', 'Soğan', 'Misket Limonu', 'Tuz'],
    },
    {
      isim: 'Tavuklu Noodle',
      mutfak: 'Uzak Doğu Mutfağı',
      sure: 25,
      tur: 'yemek',
      adimlar: [
        'Noodle\'ı paket talimatına göre haşlayın.',
        'Tavukları ince şeritler halinde soteleyin.',
        'Biber ve sarımsağı ekleyip yüksek ateşte karıştırın.',
        'Noodle ve soya sosunu ekleyip 2 dakika daha pişirin.',
      ],
      malzemeler: ['Noodle', 'Tavuk Göğsü', 'Biber', 'Sarımsak', 'Soya Sosu'],
    },
    {
      isim: 'Yumurtalı Çin Pilavı',
      mutfak: 'Uzak Doğu Mutfağı',
      sure: 20,
      tur: 'yemek',
      adimlar: [
        'Pirinci haşlayıp soğutun.',
        'Yumurtaları tavada çırparak pişirin.',
        'Sarımsağı ekleyip pirinci tavaya alın.',
        'Soya sosunu ekleyip yüksek ateşte karıştırarak pişirin.',
      ],
      malzemeler: ['Pirinç', 'Yumurta', 'Soya Sosu', 'Sarımsak'],
    },
    {
      isim: 'Mojito',
      mutfak: 'Kokteyller',
      sure: 10,
      tur: 'kokteyl',
      adimlar: [
        'Bardakta nane yapraklarını şeker ve misket limonu ile hafifçe ezin.',
        'Buz ekleyin.',
        'Romu ekleyip karıştırın.',
        'Üzerini soda ile tamamlayıp nane ile süsleyin.',
      ],
      malzemeler: ['Rom', 'Misket Limonu', 'Nane', 'Şeker', 'Soda'],
    },
    {
      isim: 'Cuba Libre',
      mutfak: 'Kokteyller',
      sure: 5,
      tur: 'kokteyl',
      adimlar: [
        'Bardağı buzla doldurun.',
        'Romu ekleyin.',
        'Üzerini kola ile tamamlayın.',
        'Misket limonu dilimi sıkıp bardağa atın.',
      ],
      malzemeler: ['Rom', 'Kola', 'Misket Limonu'],
    },
    {
      isim: 'Naneli Ev Limonatası',
      mutfak: 'Kokteyller',
      sure: 15,
      tur: 'kokteyl',
      adimlar: [
        'Limonların suyunu sıkın.',
        'Şekeri az sıcak suda eritip limon suyuna ekleyin.',
        'Soğuk su ve soda ile tamamlayın.',
        'Nane yaprakları ve buzla servis edin.',
      ],
      malzemeler: ['Limon', 'Şeker', 'Nane', 'Soda'],
    },
  ];

  await db.withTransactionAsync(async () => {
    const mutfakId = new Map<string, number>();
    for (const isim of mutfaklar) {
      const r = await db.runAsync('INSERT INTO mutfaklar (isim) VALUES (?)', isim);
      mutfakId.set(isim, r.lastInsertRowId);
    }

    const malzemeId = new Map<string, number>();
    for (const [isim, kategori] of malzemeler) {
      const r = await db.runAsync('INSERT INTO malzemeler (isim, kategori) VALUES (?, ?)', isim, kategori);
      malzemeId.set(isim, r.lastInsertRowId);
    }

    for (const t of tarifler) {
      const r = await db.runAsync(
        'INSERT INTO tarifler (isim, mutfak_id, sure_dk, adimlar, tur) VALUES (?, ?, ?, ?, ?)',
        t.isim,
        mutfakId.get(t.mutfak)!,
        t.sure,
        t.adimlar.join('\n'),
        t.tur
      );
      for (const m of t.malzemeler) {
        await db.runAsync('INSERT INTO tarif_malzeme (tarif_id, malzeme_id) VALUES (?, ?)', r.lastInsertRowId, malzemeId.get(m)!);
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
    ORDER BY m.isim
  `);
}

export async function getMalzemeler(db: SQLiteDatabase): Promise<Malzeme[]> {
  return db.getAllAsync<Malzeme>('SELECT id, isim, kategori FROM malzemeler ORDER BY kategori, isim');
}

export async function getTariflerByMutfak(db: SQLiteDatabase, mutfakId: number): Promise<Tarif[]> {
  return db.getAllAsync<Tarif>(
    `SELECT t.*, m.isim AS mutfak FROM tarifler t JOIN mutfaklar m ON m.id = t.mutfak_id
     WHERE t.mutfak_id = ? ORDER BY t.isim`,
    mutfakId
  );
}

export async function getTarif(db: SQLiteDatabase, id: number): Promise<Tarif | null> {
  return db.getFirstAsync<Tarif>(
    `SELECT t.*, m.isim AS mutfak FROM tarifler t JOIN mutfaklar m ON m.id = t.mutfak_id WHERE t.id = ?`,
    id
  );
}

export async function getTarifMalzemeleri(db: SQLiteDatabase, tarifId: number): Promise<Malzeme[]> {
  return db.getAllAsync<Malzeme>(
    `SELECT m.id, m.isim, m.kategori FROM tarif_malzeme tm
     JOIN malzemeler m ON m.id = tm.malzeme_id WHERE tm.tarif_id = ? ORDER BY m.isim`,
    tarifId
  );
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
     ORDER BY (toplam - eslesen) ASC, eslesen DESC, t.isim`,
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
  tarif: { isim: string; mutfakId: number; sureDk: number; adimlar: string; tur: 'yemek' | 'kokteyl' },
  malzemeIds: number[]
): Promise<void> {
  await db.withTransactionAsync(async () => {
    const r = await db.runAsync(
      'INSERT INTO tarifler (isim, mutfak_id, sure_dk, adimlar, tur) VALUES (?, ?, ?, ?, ?)',
      tarif.isim.trim(),
      tarif.mutfakId,
      tarif.sureDk,
      tarif.adimlar.trim(),
      tarif.tur
    );
    for (const mid of malzemeIds) {
      await db.runAsync('INSERT INTO tarif_malzeme (tarif_id, malzeme_id) VALUES (?, ?)', r.lastInsertRowId, mid);
    }
  });
}
