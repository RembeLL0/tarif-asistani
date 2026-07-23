import { Image } from 'expo-image';
import { useEffect, useMemo, useState } from 'react';
import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';

import { MenuModal } from '@/components/MenuModal';
import { golge, Renk } from '@/constants/renkler';
import { useMenu } from '@/context/menu';
import { getTumTarifler, kursGrubu, type OneriTarif } from '@/db/database';
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

export default function MenuOlustur() {
  const db = useSQLiteContext();
  const { menu, iceriyorMu, degistir } = useMenu();
  const [tarifler, setTarifler] = useState<OneriTarif[] | null>(null);
  const [filtre, setFiltre] = useState<FiltreAnahtar>('hepsi');
  const [menuAcik, setMenuAcik] = useState(false);

  useEffect(() => {
    getTumTarifler(db).then(setTarifler);
  }, [db]);

  const mevcutGruplar = useMemo(() => {
    const set = new Set<FiltreAnahtar>();
    (tarifler ?? []).forEach((t) => set.add(kursGrubu(t.kategori, t.tur)));
    return set;
  }, [tarifler]);

  if (tarifler === null) return null;

  const listelenen =
    filtre === 'hepsi' ? tarifler : tarifler.filter((t) => kursGrubu(t.kategori, t.tur) === filtre);
  const cipler = FILTRELER.filter((f) => f.anahtar === 'hepsi' || mevcutGruplar.has(f.anahtar));
  const menuSure = menu.reduce((a, t) => a + (t.sure_dk ?? 0), 0);

  return (
    <View style={s.kap}>
      <View style={s.baslikAlan}>
        <Text style={s.giris}>Beğendiğin tarifleri seç, menünü oluştur.</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={s.cipSerit}>
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

      <FlatList
        data={listelenen}
        keyExtractor={(t) => String(t.id)}
        style={s.fl}
        contentContainerStyle={[s.liste, menu.length > 0 && s.listeBarli]}
        renderItem={({ item }) => {
          const secildi = iceriyorMu(item.id);
          return (
            <Pressable onPress={() => degistir(item)}>
              {({ pressed }) => (
                <View style={[s.kart, golge, pressed && s.basili, secildi && s.kartSecili]}>
                  <View style={[s.kutucuk, secildi && s.kutucukDolu]}>
                    {secildi && <Text style={s.kutucukTik}>✓</Text>}
                  </View>
                  {YEREL_RESIM[item.isim] ? (
                    <Image source={YEREL_RESIM[item.isim]} style={s.resim} contentFit="cover" transition={200} />
                  ) : (
                    <View style={[s.resim, s.resimBos]}>
                      <Text style={{ fontSize: 22 }}>{item.tur === 'kokteyl' ? '🍹' : '🍽️'}</Text>
                    </View>
                  )}
                  <View style={{ flex: 1 }}>
                    <Text style={s.isim}>{item.isim}</Text>
                    <Text style={s.alt}>
                      {item.mutfak} · ⏱ {item.sure_dk} dk
                    </Text>
                  </View>
                </View>
              )}
            </Pressable>
          );
        }}
      />

      {menu.length > 0 && (
        <View style={s.altBar}>
          <View>
            <Text style={s.altBarBaslik}>Menüm</Text>
            <Text style={s.altBarAlt}>
              {menu.length} tarif · toplam ⏱ {menuSure} dk
            </Text>
          </View>
          <Pressable style={s.altBarBtn} onPress={() => setMenuAcik(true)}>
            <Text style={s.altBarBtnYazi}>Görüntüle</Text>
          </Pressable>
        </View>
      )}

      <MenuModal visible={menuAcik} onClose={() => setMenuAcik(false)} />
    </View>
  );
}

const s = StyleSheet.create({
  kap: { flex: 1, backgroundColor: Renk.arka },
  fl: { flex: 1 },
  baslikAlan: { paddingTop: 16, paddingHorizontal: 20 },
  giris: { fontSize: 14, color: Renk.soluk, marginBottom: 12, fontWeight: '500' },
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
  liste: { padding: 20, paddingTop: 14 },
  listeBarli: { paddingBottom: 96 },
  kart: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: Renk.kart,
    borderRadius: 18,
    padding: 12,
    marginBottom: 10,
  },
  basili: { opacity: 0.85, transform: [{ scale: 0.99 }] },
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
  resim: { width: 52, height: 52, borderRadius: 14, backgroundColor: Renk.anaSoft },
  resimBos: { alignItems: 'center', justifyContent: 'center' },
  isim: { fontSize: 15, fontWeight: '700', color: Renk.yazi },
  alt: { fontSize: 12, color: Renk.soluk, marginTop: 3 },
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
});
