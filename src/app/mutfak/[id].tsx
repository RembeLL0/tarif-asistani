import { Image } from 'expo-image';
import { Stack, useFocusEffect, useLocalSearchParams, useRouter } from 'expo-router';
import { YEREL_RESIM } from '@/db/yerel-resimler';
import { useCallback, useMemo, useState } from 'react';
import { Pressable, ScrollView, SectionList, StyleSheet, Text, View } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';

import { golge, Renk } from '@/constants/renkler';
import { getTariflerByMutfak, type Tarif } from '@/db/database';

// Menü mantığına uygun bölüm sırası; listede olmayan kategoriler sona eklenir.
const KATEGORI_SIRASI = [
  'Çorbalar',
  'Çorba & Başlangıç',
  'Kahvaltılık',
  'Salatalar & Mezeler',
  'Meze & Sos',
  'Zeytinyağlılar & Sebze',
  'Et Yemekleri',
  'Tavuk Yemekleri',
  'Ana Yemekler',
  'Makarnalar',
  'Noodle & Pilav',
  'Pilav & Makarna',
  'Fırın & Ana Yemek',
  'Hamur İşi',
  'Tatlılar',
  'Alkollü Kokteyller',
  'Alkolsüz İçecekler',
];

function kategoriSira(k: string): number {
  const i = KATEGORI_SIRASI.indexOf(k);
  return i === -1 ? KATEGORI_SIRASI.length : i;
}

const KATEGORI_EMOJI: Record<string, string> = {
  'Çorbalar': '🍲',
  'Et Yemekleri': '🥩',
  'Tavuk Yemekleri': '🍗',
  'Zeytinyağlılar & Sebze': '🫒',
  'Salatalar & Mezeler': '🥗',
  'Pilav & Makarna': '🍚',
  'Kahvaltılık': '🍳',
  'Hamur İşi': '🥟',
  'Tatlılar': '🍮',
  'Makarnalar': '🍝',
  'Fırın & Ana Yemek': '🍕',
  'Ana Yemekler': '🍽️',
  'Meze & Sos': '🥑',
  'Noodle & Pilav': '🍜',
  'Çorba & Başlangıç': '🍲',
  'Alkollü Kokteyller': '🍸',
  'Alkolsüz İçecekler': '🧃',
};

export default function MutfakDetay() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const db = useSQLiteContext();
  const router = useRouter();
  const [tarifler, setTarifler] = useState<Tarif[]>([]);
  const [filtre, setFiltre] = useState<string | null>(null);

  useFocusEffect(
    useCallback(() => {
      getTariflerByMutfak(db, Number(id)).then(setTarifler);
    }, [db, id])
  );

  const kategoriler = useMemo(
    () => [...new Set(tarifler.map((t) => t.kategori))].sort((a, b) => kategoriSira(a) - kategoriSira(b)),
    [tarifler]
  );

  const bolumler = useMemo(() => {
    const grup = new Map<string, Tarif[]>();
    for (const t of tarifler) {
      if (filtre && t.kategori !== filtre) continue;
      if (!grup.has(t.kategori)) grup.set(t.kategori, []);
      grup.get(t.kategori)!.push(t);
    }
    return [...grup.entries()]
      .sort(([a], [b]) => kategoriSira(a) - kategoriSira(b))
      .map(([title, data]) => ({ title, data }));
  }, [tarifler, filtre]);

  return (
    <View style={s.kap}>
      <Stack.Screen options={{ title: tarifler[0]?.mutfak ?? 'Mutfak' }} />

      {kategoriler.length > 1 && (
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={s.cipBar}>
            <Pressable style={[s.cip, filtre === null && s.cipSecili]} onPress={() => setFiltre(null)}>
              <Text style={[s.cipYazi, filtre === null && s.cipYaziSecili]}>Tümü ({tarifler.length})</Text>
            </Pressable>
            {kategoriler.map((k) => (
              <Pressable
                key={k}
                style={[s.cip, filtre === k && s.cipSecili]}
                onPress={() => setFiltre(filtre === k ? null : k)}
              >
                <Text style={[s.cipYazi, filtre === k && s.cipYaziSecili]}>
                  {KATEGORI_EMOJI[k] ?? '🍴'} {k}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      )}

      <SectionList
        sections={bolumler}
        keyExtractor={(t) => String(t.id)}
        contentContainerStyle={s.liste}
        stickySectionHeadersEnabled={false}
        ListEmptyComponent={
          <View style={s.bos}>
            <Text style={s.bosEmoji}>🍳</Text>
            <Text style={s.bosYazi}>Bu mutfakta henüz tarif yok.</Text>
            <Text style={s.bosAlt}>Admin ekranından yeni tarif ekleyebilirsin.</Text>
          </View>
        }
        renderSectionHeader={({ section }) => (
          <Text style={s.bolumBaslik}>
            {KATEGORI_EMOJI[section.title] ?? '🍴'}  {section.title}
          </Text>
        )}
        renderItem={({ item }) => (
          <Pressable onPress={() => router.push(`/tarif/${item.id}`)}>
            {({ pressed }) => (
              <View style={[s.kart, golge, pressed && s.basili]}>
                {YEREL_RESIM[item.isim] ? (
                  <Image source={YEREL_RESIM[item.isim]} style={s.kartResim} contentFit="cover" transition={200} />
                ) : (
                  <View style={[s.emojiKutu, item.tur === 'kokteyl' && s.emojiKutuKokteyl]}>
                    <Text style={s.kartEmoji}>{item.tur === 'kokteyl' ? '🍹' : '🍽️'}</Text>
                  </View>
                )}
                <View style={{ flex: 1 }}>
                  <Text style={s.kartBaslik}>{item.isim}</Text>
                  <View style={s.rozetSatir}>
                    <View style={s.surePil}>
                      <Text style={s.surePilYazi}>⏱ {item.sure_dk} dk</Text>
                    </View>
                  </View>
                </View>
                <Text style={s.kartOk}>›</Text>
              </View>
            )}
          </Pressable>
        )}
      />
    </View>
  );
}

const s = StyleSheet.create({
  kap: { flex: 1, backgroundColor: Renk.arka },
  cipBar: { paddingHorizontal: 20, paddingVertical: 10, gap: 8 },
  cip: {
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: Renk.kart,
    borderWidth: 1.5,
    borderColor: Renk.cizgi,
  },
  cipSecili: { backgroundColor: Renk.ana, borderColor: Renk.ana },
  cipYazi: { fontSize: 13, color: Renk.yazi, fontWeight: '600' },
  cipYaziSecili: { color: '#fff' },
  liste: { padding: 20, paddingTop: 6, flexGrow: 1 },
  bolumBaslik: {
    fontSize: 15,
    fontWeight: '800',
    color: Renk.soluk,
    marginTop: 14,
    marginBottom: 10,
  },
  kart: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    backgroundColor: Renk.kart,
    borderRadius: 20,
    padding: 14,
    marginBottom: 12,
  },
  basili: { opacity: 0.85, transform: [{ scale: 0.98 }] },
  emojiKutu: {
    width: 50,
    height: 50,
    borderRadius: 16,
    backgroundColor: Renk.anaSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emojiKutuKokteyl: { backgroundColor: Renk.morSoft },
  kartResim: { width: 50, height: 50, borderRadius: 16, backgroundColor: Renk.anaSoft },
  kartEmoji: { fontSize: 24 },
  kartBaslik: { fontSize: 16, fontWeight: '700', color: Renk.yazi },
  rozetSatir: { flexDirection: 'row', gap: 6, marginTop: 6 },
  surePil: { backgroundColor: Renk.sariAcik, borderRadius: 20, paddingHorizontal: 9, paddingVertical: 3 },
  surePilYazi: { fontSize: 12, fontWeight: '700', color: Renk.sari },
  kartOk: { fontSize: 26, color: Renk.soluk, fontWeight: '300', marginRight: 4 },
  bos: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 8 },
  bosEmoji: { fontSize: 48 },
  bosYazi: { fontSize: 16, fontWeight: '700', color: Renk.yazi },
  bosAlt: { fontSize: 13, color: Renk.soluk },
});
