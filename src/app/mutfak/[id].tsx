import { Stack, useFocusEffect, useLocalSearchParams, useRouter } from 'expo-router';
import { useCallback, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';

import { golge, Renk } from '@/constants/renkler';
import { getTariflerByMutfak, type Tarif } from '@/db/database';

export default function MutfakDetay() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const db = useSQLiteContext();
  const router = useRouter();
  const [tarifler, setTarifler] = useState<Tarif[]>([]);

  useFocusEffect(
    useCallback(() => {
      getTariflerByMutfak(db, Number(id)).then(setTarifler);
    }, [db, id])
  );

  return (
    <View style={s.kap}>
      <Stack.Screen options={{ title: tarifler[0]?.mutfak ?? 'Mutfak' }} />
      <FlatList
        data={tarifler}
        keyExtractor={(t) => String(t.id)}
        contentContainerStyle={s.liste}
        ListEmptyComponent={
          <View style={s.bos}>
            <Text style={s.bosEmoji}>🍳</Text>
            <Text style={s.bosYazi}>Bu mutfakta henüz tarif yok.</Text>
            <Text style={s.bosAlt}>Admin ekranından yeni tarif ekleyebilirsin.</Text>
          </View>
        }
        renderItem={({ item }) => (
          <Pressable onPress={() => router.push(`/tarif/${item.id}`)}>
            {({ pressed }) => (
              <View style={[s.kart, golge, pressed && s.basili]}>
                <View style={[s.emojiKutu, item.tur === 'kokteyl' && s.emojiKutuKokteyl]}>
                  <Text style={s.kartEmoji}>{item.tur === 'kokteyl' ? '🍹' : '🍽️'}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={s.kartBaslik}>{item.isim}</Text>
                  <View style={s.rozetSatir}>
                    <View style={s.surePil}>
                      <Text style={s.surePilYazi}>⏱ {item.sure_dk} dk</Text>
                    </View>
                    <View style={[s.turPil, item.tur === 'kokteyl' && s.turPilKokteyl]}>
                      <Text style={[s.turPilYazi, item.tur === 'kokteyl' && s.turPilYaziKokteyl]}>
                        {item.tur === 'kokteyl' ? 'Kokteyl' : 'Yemek'}
                      </Text>
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
  liste: { padding: 20, flexGrow: 1 },
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
    width: 54,
    height: 54,
    borderRadius: 18,
    backgroundColor: Renk.anaSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emojiKutuKokteyl: { backgroundColor: Renk.morSoft },
  kartEmoji: { fontSize: 26 },
  kartBaslik: { fontSize: 16, fontWeight: '700', color: Renk.yazi },
  rozetSatir: { flexDirection: 'row', gap: 6, marginTop: 6 },
  surePil: { backgroundColor: Renk.sariAcik, borderRadius: 20, paddingHorizontal: 9, paddingVertical: 3 },
  surePilYazi: { fontSize: 12, fontWeight: '700', color: Renk.sari },
  turPil: { backgroundColor: Renk.anaSoft, borderRadius: 20, paddingHorizontal: 9, paddingVertical: 3 },
  turPilKokteyl: { backgroundColor: Renk.morSoft },
  turPilYazi: { fontSize: 12, fontWeight: '700', color: Renk.ana },
  turPilYaziKokteyl: { color: Renk.patlican },
  kartOk: { fontSize: 26, color: Renk.soluk, fontWeight: '300', marginRight: 4 },
  bos: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 8 },
  bosEmoji: { fontSize: 48 },
  bosYazi: { fontSize: 16, fontWeight: '700', color: Renk.yazi },
  bosAlt: { fontSize: 13, color: Renk.soluk },
});
