import { LinearGradient } from 'expo-linear-gradient';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';

import { golge, Gradyan, Renk } from '@/constants/renkler';
import { getTarif, getTarifMalzemeleri, type Malzeme, type Tarif } from '@/db/database';

export default function TarifDetay() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const db = useSQLiteContext();
  const [tarif, setTarif] = useState<Tarif | null>(null);
  const [malzemeler, setMalzemeler] = useState<Malzeme[]>([]);

  useEffect(() => {
    getTarif(db, Number(id)).then(setTarif);
    getTarifMalzemeleri(db, Number(id)).then(setMalzemeler);
  }, [db, id]);

  if (!tarif) return null;

  const kokteyl = tarif.tur === 'kokteyl';
  const adimlar = tarif.adimlar.split('\n').filter((a) => a.trim().length > 0);

  return (
    <ScrollView style={s.kap} contentContainerStyle={s.icerik}>
      <Stack.Screen options={{ title: '' }} />

      <LinearGradient
        colors={kokteyl ? Gradyan.patlican : Gradyan.ana}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[s.kapak, golge]}
      >
        <Text style={s.kapakEmoji}>{kokteyl ? '🍹' : '🥘'}</Text>
        <Text style={s.kapakBaslik}>{tarif.isim}</Text>
        <View style={s.etiketler}>
          <View style={s.etiket}>
            <Text style={s.etiketYazi}>{tarif.mutfak}</Text>
          </View>
          <View style={s.etiket}>
            <Text style={s.etiketYazi}>⏱ {tarif.sure_dk} dk</Text>
          </View>
          <View style={s.etiket}>
            <Text style={s.etiketYazi}>{kokteyl ? 'Kokteyl' : 'Yemek'}</Text>
          </View>
        </View>
      </LinearGradient>

      <Text style={s.bolumBaslik}>🧾 Malzemeler</Text>
      <View style={[s.kart, golge]}>
        {malzemeler.map((m, i) => (
          <View key={m.id} style={[s.malzemeSatir, i > 0 && s.ustCizgi]}>
            <View style={s.nokta} />
            <Text style={s.malzemeYazi}>{m.isim}</Text>
            <Text style={s.malzemeKategori}>{m.kategori}</Text>
          </View>
        ))}
      </View>

      <Text style={s.bolumBaslik}>👨‍🍳 Hazırlanışı</Text>
      <View style={[s.kart, golge]}>
        {adimlar.map((adim, i) => (
          <View key={i} style={[s.adimSatir, i > 0 && s.ustCizgi]}>
            <LinearGradient colors={Gradyan.safran} style={s.adimNo}>
              <Text style={s.adimNoYazi}>{i + 1}</Text>
            </LinearGradient>
            <Text style={s.adimYazi}>{adim.trim()}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  kap: { flex: 1, backgroundColor: Renk.arka },
  icerik: { padding: 20, paddingBottom: 48 },
  kapak: {
    borderRadius: 26,
    padding: 24,
    paddingTop: 84,
    alignItems: 'center',
    marginBottom: 24,
  },
  kapakEmoji: { fontSize: 64 },
  kapakBaslik: { fontSize: 26, fontWeight: '800', color: '#fff', marginTop: 10, textAlign: 'center' },
  etiketler: { flexDirection: 'row', gap: 8, marginTop: 14, flexWrap: 'wrap', justifyContent: 'center' },
  etiket: {
    backgroundColor: 'rgba(255,255,255,0.22)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  etiketYazi: { color: '#fff', fontSize: 13, fontWeight: '700' },
  bolumBaslik: { fontSize: 17, fontWeight: '800', color: Renk.yazi, marginBottom: 10 },
  kart: {
    backgroundColor: Renk.kart,
    borderRadius: 20,
    paddingHorizontal: 18,
    marginBottom: 24,
  },
  ustCizgi: { borderTopWidth: 1, borderTopColor: Renk.cizgi },
  malzemeSatir: { flexDirection: 'row', gap: 10, alignItems: 'center', paddingVertical: 13 },
  nokta: { width: 8, height: 8, borderRadius: 4, backgroundColor: Renk.ana },
  malzemeYazi: { flex: 1, fontSize: 15, color: Renk.yazi, fontWeight: '600' },
  malzemeKategori: { fontSize: 12, color: Renk.soluk },
  adimSatir: { flexDirection: 'row', gap: 12, alignItems: 'flex-start', paddingVertical: 14 },
  adimNo: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },
  adimNoYazi: { color: '#fff', fontWeight: '800', fontSize: 13 },
  adimYazi: { flex: 1, fontSize: 15, color: Renk.yazi, lineHeight: 23 },
});
