import { Image } from 'expo-image';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useMemo, useState } from 'react';
import { FlatList, Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';

import { golge, Renk } from '@/constants/renkler';
import { malzemeyeGoreTarifBul, type EslesenTarif } from '@/db/database';
import { YEREL_RESIM } from '@/db/yerel-resimler';

type FiltreAnahtar = 'hepsi' | 'corba' | 'arasicak' | 'ana' | 'meze' | 'tatli' | 'icecek';

const FILTRELER: { anahtar: FiltreAnahtar; etiket: string }[] = [
  { anahtar: 'hepsi', etiket: 'Tümü' },
  { anahtar: 'corba', etiket: 'Çorba' },
  { anahtar: 'arasicak', etiket: 'Ara Sıcak' },
  { anahtar: 'ana', etiket: 'Ana Yemek' },
  { anahtar: 'meze', etiket: 'Meze' },
  { anahtar: 'tatli', etiket: 'Tatlı' },
  { anahtar: 'icecek', etiket: 'İçecek' },
];

// Tarifin kategorisini kullanıcıya gösterilen 6 gruptan birine eşler.
function tarifGrubu(t: EslesenTarif): Exclude<FiltreAnahtar, 'hepsi'> {
  if (t.tur === 'kokteyl') return 'icecek';
  const k = t.kategori.toLocaleLowerCase('tr');
  if (k.includes('içecek') || k.includes('kokteyl')) return 'icecek';
  if (k.includes('çorba')) return 'corba';
  if (k.includes('tatlı')) return 'tatli';
  if (k.includes('meze') || k.includes('salata') || k.includes('zeytinyağ') || k.includes('kahvalt'))
    return 'meze';
  if (k.includes('hamur') || k.includes('börek') || k.includes('poğaça')) return 'arasicak';
  return 'ana';
}

// Menüde kursların gösterim sırası ve etiketleri.
const KURS_SIRA: { anahtar: Exclude<FiltreAnahtar, 'hepsi'>; etiket: string }[] = [
  { anahtar: 'corba', etiket: 'Çorba' },
  { anahtar: 'arasicak', etiket: 'Ara Sıcak' },
  { anahtar: 'ana', etiket: 'Ana Yemek' },
  { anahtar: 'meze', etiket: 'Meze' },
  { anahtar: 'tatli', etiket: 'Tatlı' },
  { anahtar: 'icecek', etiket: 'İçecek' },
];

export default function Sonuclar() {
  const { ids } = useLocalSearchParams<{ ids: string }>();
  const db = useSQLiteContext();
  const router = useRouter();
  const [sonuclar, setSonuclar] = useState<EslesenTarif[] | null>(null);
  const [filtre, setFiltre] = useState<FiltreAnahtar>('hepsi');
  const [menuModu, setMenuModu] = useState(false);
  const [secili, setSecili] = useState<Set<number>>(new Set());
  const [menuAcik, setMenuAcik] = useState(false);

  useEffect(() => {
    const malzemeIds = (ids ?? '')
      .split(',')
      .map((x) => Number(x))
      .filter((x) => Number.isFinite(x) && x > 0);
    malzemeyeGoreTarifBul(db, malzemeIds).then(setSonuclar);
  }, [db, ids]);

  // Hangi grupların sonuçta gerçekten karşılığı var? Sadece onları çip olarak göster.
  const mevcutGruplar = useMemo(() => {
    const set = new Set<FiltreAnahtar>();
    (sonuclar ?? []).forEach((t) => set.add(tarifGrubu(t)));
    return set;
  }, [sonuclar]);

  const tarifSec = (id: number) =>
    setSecili((onceki) => {
      const yeni = new Set(onceki);
      if (yeni.has(id)) yeni.delete(id);
      else yeni.add(id);
      return yeni;
    });

  const menuKapat = () => {
    setMenuModu(false);
    setMenuAcik(false);
    setSecili(new Set());
  };

  if (sonuclar === null) return null;

  const listelenen =
    filtre === 'hepsi' ? sonuclar : sonuclar.filter((t) => tarifGrubu(t) === filtre);
  const tamSayisi = listelenen.filter((t) => t.eksikler.length === 0).length;
  const cipler = FILTRELER.filter((f) => f.anahtar === 'hepsi' || mevcutGruplar.has(f.anahtar));

  // Seçilen tarifleri kurslara göre grupla (menü penceresi için).
  const seciliTarifler = sonuclar.filter((t) => secili.has(t.id));
  const toplamSure = seciliTarifler.reduce((a, t) => a + (t.sure_dk ?? 0), 0);
  const menuGruplari = KURS_SIRA.map((k) => ({
    ...k,
    tarifler: seciliTarifler.filter((t) => tarifGrubu(t) === k.anahtar),
  })).filter((g) => g.tarifler.length > 0);

  return (
    <View style={s.kap}>
      {sonuclar.length > 0 && (
        <View style={s.baslikAlan}>
          <View style={s.ozetSatir}>
            <Text style={s.ozet}>
              <Text style={s.ozetVurgu}>{listelenen.length} tarif</Text> bulundu
              {tamSayisi > 0 && (
                <Text>
                  {' '}
                  — <Text style={s.ozetYesil}>{tamSayisi} hazır ✓</Text>
                </Text>
              )}
            </Text>
            <Pressable
              onPress={() => (menuModu ? menuKapat() : setMenuModu(true))}
              style={[s.menuBtn, menuModu && s.menuBtnAktif]}
            >
              <Text style={[s.menuBtnYazi, menuModu && s.menuBtnYaziAktif]}>
                {menuModu ? '✕ Vazgeç' : '＋ Menü oluştur'}
              </Text>
            </Pressable>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={s.cipSerit}
          >
            {cipler.map((f) => {
              const aktif = filtre === f.anahtar;
              return (
                <Pressable
                  key={f.anahtar}
                  onPress={() => setFiltre(f.anahtar)}
                  style={[s.cip, aktif && s.cipAktif]}
                >
                  <Text style={[s.cipYazi, aktif && s.cipYaziAktif]}>{f.etiket}</Text>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>
      )}
      <FlatList
        data={listelenen}
        keyExtractor={(t) => String(t.id)}
        style={s.fl}
        contentContainerStyle={[s.liste, menuModu && secili.size > 0 && s.listeBarli]}
        ListEmptyComponent={
          <View style={s.bos}>
            <Text style={s.bosEmoji}>🤷</Text>
            <Text style={s.bosYazi}>Seçtiğin malzemelerle eşleşen tarif bulunamadı.</Text>
            <Text style={s.bosAlt}>Birkaç malzeme daha eklemeyi dene.</Text>
          </View>
        }
        renderItem={({ item }) => {
          const tam = item.eksikler.length === 0;
          const oran = item.eslesen / item.toplam;
          const secildi = secili.has(item.id);
          return (
            <Pressable
              onPress={() => (menuModu ? tarifSec(item.id) : router.push(`/tarif/${item.id}`))}
            >
              {({ pressed }) => (
                <View
                  style={[s.kart, golge, pressed && s.basili, menuModu && secildi && s.kartSecili]}
                >
                  <View style={s.kartUst}>
                    {menuModu && (
                      <View style={[s.kutucuk, secildi && s.kutucukDolu]}>
                        {secildi && <Text style={s.kutucukTik}>✓</Text>}
                      </View>
                    )}
                    {YEREL_RESIM[item.isim] ? (
                      <Image source={YEREL_RESIM[item.isim]} style={s.kartResim} contentFit="cover" transition={200} />
                    ) : (
                      <View style={[s.emojiKutu, item.tur === 'kokteyl' && s.emojiKutuKokteyl]}>
                        <Text style={s.kartEmoji}>{item.tur === 'kokteyl' ? '🍹' : '🍽️'}</Text>
                      </View>
                    )}
                    <View style={{ flex: 1 }}>
                      <Text style={s.kartBaslik}>{item.isim}</Text>
                      <Text style={s.kartAlt}>
                        {item.mutfak} · ⏱ {item.sure_dk} dk
                      </Text>
                    </View>
                    <View style={[s.rozet, tam ? s.rozetTam : s.rozetEksik]}>
                      <Text style={[s.rozetYazi, tam ? s.rozetYaziTam : s.rozetYaziEksik]}>
                        {tam ? 'Hepsi var ✓' : `${item.eslesen}/${item.toplam}`}
                      </Text>
                    </View>
                  </View>

                  <View style={s.cubukArka}>
                    <View
                      style={[
                        s.cubukDolu,
                        { width: `${Math.round(oran * 100)}%` },
                        tam ? s.cubukYesil : s.cubukSari,
                      ]}
                    />
                  </View>

                  {!tam && (
                    <Text style={s.eksikYazi}>
                      Eksik: <Text style={s.eksikListe}>{item.eksikler.join(', ')}</Text>
                    </Text>
                  )}
                </View>
              )}
            </Pressable>
          );
        }}
      />

      {menuModu && secili.size > 0 && (
        <View style={s.altBar}>
          <View>
            <Text style={s.altBarBaslik}>Menüm</Text>
            <Text style={s.altBarAlt}>
              {secili.size} tarif · toplam ⏱ {toplamSure} dk
            </Text>
          </View>
          <Pressable style={s.altBarBtn} onPress={() => setMenuAcik(true)}>
            <Text style={s.altBarBtnYazi}>Görüntüle</Text>
          </Pressable>
        </View>
      )}

      <Modal visible={menuAcik} transparent animationType="slide" onRequestClose={() => setMenuAcik(false)}>
        <View style={s.modalArka}>
          <View style={s.modalKart}>
            <View style={s.modalUst}>
              <Text style={s.modalBaslik}>🍽️ Menüm</Text>
              <Pressable onPress={() => setMenuAcik(false)} hitSlop={10}>
                <Text style={s.modalKapat}>✕</Text>
              </Pressable>
            </View>
            <Text style={s.modalOzet}>
              {secili.size} tarif · toplam ⏱ {toplamSure} dk
            </Text>

            <ScrollView style={s.modalListe} contentContainerStyle={{ gap: 16 }}>
              {menuGruplari.map((g) => (
                <View key={g.anahtar} style={{ gap: 8 }}>
                  <Text style={s.kursBaslik}>{g.etiket}</Text>
                  {g.tarifler.map((t) => (
                    <Pressable
                      key={t.id}
                      style={s.menuSatir}
                      onPress={() => {
                        setMenuAcik(false);
                        router.push(`/tarif/${t.id}`);
                      }}
                    >
                      {YEREL_RESIM[t.isim] ? (
                        <Image source={YEREL_RESIM[t.isim]} style={s.menuResim} contentFit="cover" />
                      ) : (
                        <View style={[s.menuResim, s.menuResimBos]}>
                          <Text style={{ fontSize: 18 }}>{t.tur === 'kokteyl' ? '🍹' : '🍽️'}</Text>
                        </View>
                      )}
                      <View style={{ flex: 1 }}>
                        <Text style={s.menuSatirBaslik}>{t.isim}</Text>
                        <Text style={s.menuSatirAlt}>
                          {t.mutfak} · ⏱ {t.sure_dk} dk
                        </Text>
                      </View>
                      <Pressable onPress={() => tarifSec(t.id)} hitSlop={10}>
                        <Text style={s.menuCikar}>✕</Text>
                      </Pressable>
                    </Pressable>
                  ))}
                </View>
              ))}
            </ScrollView>

            <View style={s.modalAltButonlar}>
              <Pressable style={s.modalTemizle} onPress={() => setSecili(new Set())}>
                <Text style={s.modalTemizleYazi}>Menüyü temizle</Text>
              </Pressable>
              <Pressable style={s.modalBitir} onPress={menuKapat}>
                <Text style={s.modalBitirYazi}>Tamam</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const s = StyleSheet.create({
  kap: { flex: 1, backgroundColor: Renk.arka },
  fl: { flex: 1 },
  baslikAlan: { paddingTop: 20, paddingHorizontal: 20 },
  liste: { padding: 20, paddingTop: 14, flexGrow: 1 },
  listeBarli: { paddingBottom: 96 },
  ozetSatir: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 14,
  },
  ozet: { fontSize: 15, color: Renk.soluk, fontWeight: '500', flexShrink: 1 },
  menuBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: Renk.anaSoft,
    borderWidth: 1,
    borderColor: Renk.ana,
  },
  menuBtnAktif: { backgroundColor: Renk.kart, borderColor: Renk.cizgi },
  menuBtnYazi: { fontSize: 13, fontWeight: '800', color: Renk.ana },
  menuBtnYaziAktif: { color: Renk.soluk },
  cipSerit: { gap: 8, paddingRight: 20 },
  cip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: Renk.kart,
    borderWidth: 1,
    borderColor: Renk.cizgi,
  },
  cipAktif: { backgroundColor: Renk.ana, borderColor: Renk.ana },
  cipYazi: { fontSize: 13, fontWeight: '700', color: Renk.soluk },
  cipYaziAktif: { color: Renk.arka },
  ozetVurgu: { color: Renk.yazi, fontWeight: '800' },
  ozetYesil: { color: Renk.yesil, fontWeight: '700' },
  kart: {
    backgroundColor: Renk.kart,
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
  },
  basili: { opacity: 0.85, transform: [{ scale: 0.98 }] },
  kartSecili: { borderWidth: 2, borderColor: Renk.ana },
  kutucuk: {
    width: 24,
    height: 24,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: Renk.cizgi,
    alignItems: 'center',
    justifyContent: 'center',
  },
  kutucukDolu: { backgroundColor: Renk.ana, borderColor: Renk.ana },
  kutucukTik: { fontSize: 14, fontWeight: '900', color: Renk.arka },
  kartUst: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  emojiKutu: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: Renk.anaSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emojiKutuKokteyl: { backgroundColor: Renk.morSoft },
  kartResim: { width: 48, height: 48, borderRadius: 16, backgroundColor: Renk.anaSoft },
  kartEmoji: { fontSize: 24 },
  kartBaslik: { fontSize: 16, fontWeight: '700', color: Renk.yazi },
  kartAlt: { fontSize: 13, color: Renk.soluk, marginTop: 2 },
  rozet: { borderRadius: 20, paddingHorizontal: 10, paddingVertical: 5 },
  rozetTam: { backgroundColor: Renk.yesilAcik },
  rozetEksik: { backgroundColor: Renk.sariAcik },
  rozetYazi: { fontSize: 12, fontWeight: '800' },
  rozetYaziTam: { color: Renk.yesil },
  rozetYaziEksik: { color: Renk.sari },
  cubukArka: {
    height: 6,
    borderRadius: 3,
    backgroundColor: Renk.cizgi,
    marginTop: 12,
    overflow: 'hidden',
  },
  cubukDolu: { height: '100%', borderRadius: 3 },
  cubukYesil: { backgroundColor: Renk.yesil },
  cubukSari: { backgroundColor: Renk.safran },
  eksikYazi: { marginTop: 10, fontSize: 13, color: Renk.soluk },
  eksikListe: { fontWeight: '700', color: Renk.sari },
  bos: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 8, padding: 24 },
  bosEmoji: { fontSize: 48 },
  bosYazi: { fontSize: 16, fontWeight: '700', color: Renk.yazi, textAlign: 'center' },
  bosAlt: { fontSize: 13, color: Renk.soluk },

  altBar: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Renk.kart,
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: Renk.cizgi,
    ...golge,
  },
  altBarBaslik: { fontSize: 15, fontWeight: '800', color: Renk.yazi },
  altBarAlt: { fontSize: 12, color: Renk.soluk, marginTop: 2 },
  altBarBtn: { backgroundColor: Renk.ana, borderRadius: 14, paddingVertical: 10, paddingHorizontal: 18 },
  altBarBtnYazi: { fontSize: 14, fontWeight: '800', color: Renk.arka },

  modalArka: { flex: 1, backgroundColor: 'rgba(0,0,0,0.55)', justifyContent: 'flex-end' },
  modalKart: {
    backgroundColor: Renk.arka,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 24,
    maxHeight: '85%',
    borderTopWidth: 1,
    borderColor: Renk.cizgi,
  },
  modalUst: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  modalBaslik: { fontSize: 20, fontWeight: '900', color: Renk.yazi },
  modalKapat: { fontSize: 20, color: Renk.soluk, fontWeight: '700' },
  modalOzet: { fontSize: 13, color: Renk.soluk, marginTop: 4, marginBottom: 14 },
  modalListe: { flexGrow: 0 },
  kursBaslik: {
    fontSize: 12,
    fontWeight: '800',
    color: Renk.ana,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  menuSatir: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: Renk.kart,
    borderRadius: 16,
    padding: 10,
  },
  menuResim: { width: 44, height: 44, borderRadius: 12, backgroundColor: Renk.anaSoft },
  menuResimBos: { alignItems: 'center', justifyContent: 'center' },
  menuSatirBaslik: { fontSize: 15, fontWeight: '700', color: Renk.yazi },
  menuSatirAlt: { fontSize: 12, color: Renk.soluk, marginTop: 2 },
  menuCikar: { fontSize: 16, color: Renk.soluk, fontWeight: '700', paddingHorizontal: 4 },
  modalAltButonlar: { flexDirection: 'row', gap: 12, marginTop: 18 },
  modalTemizle: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Renk.cizgi,
  },
  modalTemizleYazi: { fontSize: 14, fontWeight: '700', color: Renk.soluk },
  modalBitir: { flex: 1, alignItems: 'center', paddingVertical: 14, borderRadius: 16, backgroundColor: Renk.ana },
  modalBitirYazi: { fontSize: 14, fontWeight: '800', color: Renk.arka },
});
