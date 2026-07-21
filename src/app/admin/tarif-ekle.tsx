import { useFocusEffect, useRouter } from 'expo-router';
import { useCallback, useMemo, useState } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';

import { Renk } from '@/constants/renkler';
import { ekleTarif, getMalzemeler, getMutfaklar, type Malzeme, type Mutfak } from '@/db/database';

export default function TarifEkle() {
  const db = useSQLiteContext();
  const router = useRouter();
  const [mutfaklar, setMutfaklar] = useState<Mutfak[]>([]);
  const [malzemeler, setMalzemeler] = useState<Malzeme[]>([]);

  const [isim, setIsim] = useState('');
  const [mutfakId, setMutfakId] = useState<number | null>(null);
  const [sure, setSure] = useState('');
  const [tur, setTur] = useState<'yemek' | 'kokteyl'>('yemek');
  const [adimlar, setAdimlar] = useState('');
  const [seciliMalzeme, setSeciliMalzeme] = useState<Set<number>>(new Set());

  useFocusEffect(
    useCallback(() => {
      getMutfaklar(db).then(setMutfaklar);
      getMalzemeler(db).then(setMalzemeler);
    }, [db])
  );

  const kategoriler = useMemo(() => {
    const grup = new Map<string, Malzeme[]>();
    for (const m of malzemeler) {
      if (!grup.has(m.kategori)) grup.set(m.kategori, []);
      grup.get(m.kategori)!.push(m);
    }
    return [...grup.entries()];
  }, [malzemeler]);

  const toggleMalzeme = (id: number) => {
    setSeciliMalzeme((eski) => {
      const yeni = new Set(eski);
      if (yeni.has(id)) yeni.delete(id);
      else yeni.add(id);
      return yeni;
    });
  };

  const gecerli =
    isim.trim().length > 0 &&
    mutfakId !== null &&
    Number(sure) > 0 &&
    adimlar.trim().length > 0 &&
    seciliMalzeme.size > 0;

  const kaydet = async () => {
    if (!gecerli || mutfakId === null) return;
    await ekleTarif(
      db,
      { isim, mutfakId, sureDk: Number(sure), adimlar, tur },
      [...seciliMalzeme]
    );
    Alert.alert('Eklendi ✓', `"${isim.trim()}" tarifi ${seciliMalzeme.size} malzemesiyle kaydedildi.`, [
      { text: 'Tamam', onPress: () => router.back() },
    ]);
  };

  return (
    <ScrollView style={s.kap} contentContainerStyle={s.icerik}>
      <Text style={s.etiket}>Tarif Adı</Text>
      <TextInput
        style={s.girdi}
        value={isim}
        onChangeText={setIsim}
        placeholder="ör. Mantarlı Risotto"
        placeholderTextColor={Renk.soluk}
      />

      <Text style={s.etiket}>Mutfak / Kategori</Text>
      <View style={s.cipler}>
        {mutfaklar.map((m) => (
          <Pressable
            key={m.id}
            style={[s.cip, mutfakId === m.id && s.cipSecili]}
            onPress={() => setMutfakId(m.id)}
          >
            <Text style={[s.cipYazi, mutfakId === m.id && s.cipYaziSecili]}>{m.isim}</Text>
          </Pressable>
        ))}
      </View>

      <View style={s.yanYana}>
        <View style={{ flex: 1 }}>
          <Text style={s.etiket}>Süre (dakika)</Text>
          <TextInput
            style={s.girdi}
            value={sure}
            onChangeText={setSure}
            keyboardType="number-pad"
            placeholder="30"
            placeholderTextColor={Renk.soluk}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={s.etiket}>Tür</Text>
          <View style={s.cipler}>
            {(['yemek', 'kokteyl'] as const).map((t) => (
              <Pressable key={t} style={[s.cip, tur === t && s.cipSecili]} onPress={() => setTur(t)}>
                <Text style={[s.cipYazi, tur === t && s.cipYaziSecili]}>
                  {t === 'yemek' ? '🍽️ Yemek' : '🍹 Kokteyl'}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      </View>

      <Text style={s.etiket}>Hazırlanış Adımları</Text>
      <Text style={s.ipucu}>Her adımı yeni bir satıra yaz.</Text>
      <TextInput
        style={[s.girdi, s.cokSatir]}
        value={adimlar}
        onChangeText={setAdimlar}
        multiline
        placeholder={'Soğanı doğrayın.\nTavada kavurun.\n...'}
        placeholderTextColor={Renk.soluk}
      />

      <Text style={s.etiket}>Malzemeler ({seciliMalzeme.size} seçili)</Text>
      {kategoriler.map(([kategori, liste]) => (
        <View key={kategori}>
          <Text style={s.kategoriBaslik}>{kategori}</Text>
          <View style={s.cipler}>
            {liste.map((m) => (
              <Pressable
                key={m.id}
                style={[s.cip, seciliMalzeme.has(m.id) && s.cipSecili]}
                onPress={() => toggleMalzeme(m.id)}
              >
                <Text style={[s.cipYazi, seciliMalzeme.has(m.id) && s.cipYaziSecili]}>{m.isim}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      ))}

      <Pressable style={[s.buton, !gecerli && s.butonPasif]} disabled={!gecerli} onPress={kaydet}>
        <Text style={s.butonYazi}>Tarifi Kaydet</Text>
      </Pressable>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  kap: { flex: 1, backgroundColor: Renk.arka },
  icerik: { padding: 16, paddingBottom: 48 },
  etiket: { fontSize: 14, fontWeight: '700', color: Renk.yazi, marginBottom: 8, marginTop: 8 },
  ipucu: { fontSize: 12, color: Renk.soluk, marginBottom: 6, marginTop: -4 },
  girdi: {
    backgroundColor: Renk.kart,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Renk.cizgi,
    padding: 14,
    fontSize: 16,
    color: Renk.yazi,
    marginBottom: 12,
  },
  cokSatir: { minHeight: 110, textAlignVertical: 'top' },
  yanYana: { flexDirection: 'row', gap: 12 },
  cipler: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 10 },
  cip: {
    borderRadius: 20,
    paddingHorizontal: 13,
    paddingVertical: 8,
    backgroundColor: Renk.kart,
    borderWidth: 1,
    borderColor: Renk.cizgi,
  },
  cipSecili: { backgroundColor: Renk.ana, borderColor: Renk.ana },
  cipYazi: { fontSize: 13, color: Renk.yazi, fontWeight: '600' },
  cipYaziSecili: { color: '#fff' },
  kategoriBaslik: { fontSize: 12, fontWeight: '700', color: Renk.soluk, marginBottom: 6, marginTop: 4, textTransform: 'uppercase' },
  buton: { backgroundColor: Renk.ana, borderRadius: 12, padding: 16, alignItems: 'center', marginTop: 16 },
  butonPasif: { backgroundColor: '#39423E' },
  butonYazi: { color: '#fff', fontSize: 16, fontWeight: '700' },
});
