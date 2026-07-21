import { useFocusEffect } from 'expo-router';
import { useCallback, useMemo, useState } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';

import { Renk } from '@/constants/renkler';
import { ekleMalzeme, getMalzemeler, type Malzeme } from '@/db/database';

export default function MalzemeEkle() {
  const db = useSQLiteContext();
  const [isim, setIsim] = useState('');
  const [kategori, setKategori] = useState('');
  const [malzemeler, setMalzemeler] = useState<Malzeme[]>([]);

  const yenile = useCallback(() => {
    getMalzemeler(db).then(setMalzemeler);
  }, [db]);

  useFocusEffect(yenile);

  const kategoriler = useMemo(() => [...new Set(malzemeler.map((m) => m.kategori))], [malzemeler]);
  const gecerli = isim.trim().length > 0 && kategori.trim().length > 0;

  const kaydet = async () => {
    if (!gecerli) return;
    try {
      await ekleMalzeme(db, isim, kategori);
      Alert.alert('Eklendi ✓', `"${isim.trim()}" malzemesi eklendi.`);
      setIsim('');
      yenile();
    } catch {
      Alert.alert('Hata', 'Bu isimde bir malzeme zaten var.');
    }
  };

  return (
    <ScrollView style={s.kap} contentContainerStyle={s.icerik}>
      <Text style={s.etiket}>Malzeme Adı</Text>
      <TextInput
        style={s.girdi}
        value={isim}
        onChangeText={setIsim}
        placeholder="ör. Mantar"
        placeholderTextColor={Renk.soluk}
      />

      <Text style={s.etiket}>Kategori</Text>
      <View style={s.cipler}>
        {kategoriler.map((k) => (
          <Pressable
            key={k}
            style={[s.cip, kategori === k && s.cipSecili]}
            onPress={() => setKategori(k)}
          >
            <Text style={[s.cipYazi, kategori === k && s.cipYaziSecili]}>{k}</Text>
          </Pressable>
        ))}
      </View>
      <TextInput
        style={s.girdi}
        value={kategori}
        onChangeText={setKategori}
        placeholder="veya yeni kategori yaz"
        placeholderTextColor={Renk.soluk}
      />

      <Pressable style={[s.buton, !gecerli && s.butonPasif]} disabled={!gecerli} onPress={kaydet}>
        <Text style={s.butonYazi}>Kaydet</Text>
      </Pressable>

      <Text style={s.bolumBaslik}>Mevcut Malzemeler ({malzemeler.length})</Text>
      <View style={s.kart}>
        {kategoriler.map((k) => (
          <Text key={k} style={s.satir}>
            <Text style={s.kategoriBaslik}>{k}: </Text>
            {malzemeler.filter((m) => m.kategori === k).map((m) => m.isim).join(', ')}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  kap: { flex: 1, backgroundColor: Renk.arka },
  icerik: { padding: 16, paddingBottom: 40 },
  etiket: { fontSize: 14, fontWeight: '700', color: Renk.yazi, marginBottom: 8, marginTop: 6 },
  girdi: {
    backgroundColor: Renk.kart,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Renk.cizgi,
    padding: 14,
    fontSize: 16,
    color: Renk.yazi,
    marginBottom: 14,
  },
  cipler: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 10 },
  cip: {
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: Renk.kart,
    borderWidth: 1,
    borderColor: Renk.cizgi,
  },
  cipSecili: { backgroundColor: Renk.ana, borderColor: Renk.ana },
  cipYazi: { fontSize: 13, color: Renk.yazi, fontWeight: '600' },
  cipYaziSecili: { color: '#fff' },
  buton: { backgroundColor: Renk.ana, borderRadius: 12, padding: 15, alignItems: 'center', marginTop: 4 },
  butonPasif: { backgroundColor: '#39423E' },
  butonYazi: { color: '#fff', fontSize: 16, fontWeight: '700' },
  bolumBaslik: {
    fontSize: 14,
    fontWeight: '700',
    color: Renk.soluk,
    marginTop: 28,
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  kart: {
    backgroundColor: Renk.kart,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Renk.cizgi,
    padding: 14,
    gap: 10,
  },
  satir: { fontSize: 14, color: Renk.yazi, lineHeight: 20 },
  kategoriBaslik: { fontWeight: '700', color: Renk.ana },
});
