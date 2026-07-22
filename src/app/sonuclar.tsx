import { Image } from 'expo-image';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';

import { golge, Renk } from '@/constants/renkler';
import { malzemeyeGoreTarifBul, type EslesenTarif } from '@/db/database';
import { YEREL_RESIM } from '@/db/yerel-resimler';

export default function Sonuclar() {
  const { ids } = useLocalSearchParams<{ ids: string }>();
  const db = useSQLiteContext();
  const router = useRouter();
  const [sonuclar, setSonuclar] = useState<EslesenTarif[] | null>(null);

  useEffect(() => {
    const malzemeIds = (ids ?? '')
      .split(',')
      .map((x) => Number(x))
      .filter((x) => Number.isFinite(x) && x > 0);
    malzemeyeGoreTarifBul(db, malzemeIds).then(setSonuclar);
  }, [db, ids]);

  if (sonuclar === null) return null;

  const tamSayisi = sonuclar.filter((t) => t.eksikler.length === 0).length;

  return (
    <View style={s.kap}>
      <FlatList
        data={sonuclar}
        keyExtractor={(t) => String(t.id)}
        contentContainerStyle={s.liste}
        ListHeaderComponent={
          sonuclar.length > 0 ? (
            <Text style={s.ozet}>
              <Text style={s.ozetVurgu}>{sonuclar.length} tarif</Text> bulundu
              {tamSayisi > 0 && (
                <Text>
                  {' '}
                  — <Text style={s.ozetYesil}>{tamSayisi} tanesi için her şey hazır ✓</Text>
                </Text>
              )}
            </Text>
          ) : null
        }
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
          return (
            <Pressable onPress={() => router.push(`/tarif/${item.id}`)}>
              {({ pressed }) => (
                <View style={[s.kart, golge, pressed && s.basili]}>
                  <View style={s.kartUst}>
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
    </View>
  );
}

const s = StyleSheet.create({
  kap: { flex: 1, backgroundColor: Renk.arka },
  liste: { padding: 20, flexGrow: 1 },
  ozet: { fontSize: 15, color: Renk.soluk, marginBottom: 14, fontWeight: '500' },
  ozetVurgu: { color: Renk.yazi, fontWeight: '800' },
  ozetYesil: { color: Renk.yesil, fontWeight: '700' },
  kart: {
    backgroundColor: Renk.kart,
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
  },
  basili: { opacity: 0.85, transform: [{ scale: 0.98 }] },
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
});
