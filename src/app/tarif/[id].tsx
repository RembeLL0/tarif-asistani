import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';

import { golge, Gradyan, Renk } from '@/constants/renkler';
import { getTarif, getTarifMalzemeleri, type Tarif, type TarifMalzemesi } from '@/db/database';
import { miktarOlcekle } from '@/db/olcek';

const MIN_PORSIYON = 1;
const MAX_PORSIYON = 5;

export default function TarifDetay() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const db = useSQLiteContext();
  const [tarif, setTarif] = useState<Tarif | null>(null);
  const [malzemeler, setMalzemeler] = useState<TarifMalzemesi[]>([]);
  // Kullanıcının seçtiği kişi sayısı. Tarif yüklenince tabanına eşitlenir.
  const [porsiyon, setPorsiyon] = useState<number | null>(null);

  useEffect(() => {
    getTarif(db, Number(id)).then((t) => {
      setTarif(t);
      setPorsiyon(t?.porsiyon ?? null);
    });
    getTarifMalzemeleri(db, Number(id)).then(setMalzemeler);
  }, [db, id]);

  if (!tarif || porsiyon === null) return null;

  const kokteyl = tarif.tur === 'kokteyl';
  const adimlar = tarif.adimlar.split('\n').filter((a) => a.trim().length > 0);
  const oran = porsiyon / tarif.porsiyon;
  const azalt = () => setPorsiyon((p) => Math.max(MIN_PORSIYON, (p ?? tarif.porsiyon) - 1));
  const artir = () => setPorsiyon((p) => Math.min(MAX_PORSIYON, (p ?? tarif.porsiyon) + 1));

  return (
    <ScrollView style={s.kap} contentContainerStyle={s.icerik}>
      <Stack.Screen options={{ title: '' }} />

      <View style={[s.kapak, golge]}>
        {tarif.resim_url ? (
          <>
            <Image
              source={{ uri: tarif.resim_url }}
              style={StyleSheet.absoluteFill}
              contentFit="cover"
              transition={250}
            />
            <LinearGradient
              colors={['rgba(0,0,0,0.05)', 'rgba(0,0,0,0.78)']}
              style={StyleSheet.absoluteFill}
            />
          </>
        ) : (
          <LinearGradient
            colors={kokteyl ? Gradyan.patlican : Gradyan.ana}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={StyleSheet.absoluteFill}
          />
        )}
        {!tarif.resim_url && <Text style={s.kapakEmoji}>{kokteyl ? '🍹' : '🥘'}</Text>}
        <Text style={s.kapakBaslik}>{tarif.isim}</Text>
        <View style={s.etiketler}>
          <View style={s.etiket}>
            <Text style={s.etiketYazi}>{tarif.mutfak}</Text>
          </View>
          <View style={s.etiket}>
            <Text style={s.etiketYazi}>⏱ {tarif.sure_dk} dk</Text>
          </View>
          <View style={s.etiket}>
            <Text style={s.etiketYazi}>{tarif.kategori}</Text>
          </View>
        </View>
      </View>

      <View style={s.malzemeBaslikSatir}>
        <Text style={s.bolumBaslik}>🧾 Malzemeler</Text>
        <View style={s.porsiyonKontrol}>
          <Pressable
            onPress={azalt}
            disabled={porsiyon <= MIN_PORSIYON}
            hitSlop={8}
            style={[s.porsiyonButon, porsiyon <= MIN_PORSIYON && s.porsiyonButonPasif]}
          >
            <Text style={s.porsiyonButonYazi}>−</Text>
          </Pressable>
          <Text style={s.porsiyonYazi}>👥 {porsiyon} kişilik</Text>
          <Pressable
            onPress={artir}
            disabled={porsiyon >= MAX_PORSIYON}
            hitSlop={8}
            style={[s.porsiyonButon, porsiyon >= MAX_PORSIYON && s.porsiyonButonPasif]}
          >
            <Text style={s.porsiyonButonYazi}>＋</Text>
          </Pressable>
        </View>
      </View>
      {oran !== 1 && (
        <Text style={s.olcekNot}>Miktarlar {porsiyon} kişiye göre ayarlandı</Text>
      )}
      <View style={[s.kart, golge]}>
        {malzemeler.map((m, i) => (
          <View key={m.id} style={[s.malzemeSatir, i > 0 && s.ustCizgi]}>
            <View style={s.nokta} />
            <Text style={s.malzemeYazi}>{m.isim}</Text>
            <Text style={s.malzemeMiktar}>
              {m.miktar ? miktarOlcekle(m.miktar, oran) : m.kategori}
            </Text>
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
    minHeight: 280,
    alignItems: 'center',
    justifyContent: 'flex-end',
    overflow: 'hidden',
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
  malzemeBaslikSatir: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  porsiyonKontrol: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: Renk.anaSoft,
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 22,
    marginBottom: 10,
  },
  porsiyonButon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: Renk.ana,
    alignItems: 'center',
    justifyContent: 'center',
  },
  porsiyonButonPasif: { backgroundColor: Renk.cizgi },
  porsiyonButonYazi: { color: '#fff', fontSize: 18, fontWeight: '800', lineHeight: 20 },
  porsiyonYazi: { color: Renk.ana, fontSize: 13, fontWeight: '800', minWidth: 78, textAlign: 'center' },
  olcekNot: { color: Renk.soluk, fontSize: 12, fontStyle: 'italic', marginTop: -4, marginBottom: 10 },
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
  malzemeMiktar: { fontSize: 13, color: Renk.sari, fontWeight: '600' },
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
