import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';

import { Renk } from '@/constants/renkler';
import { ekleMutfak, getMutfaklar, type Mutfak } from '@/db/database';

export default function MutfakEkle() {
  const db = useSQLiteContext();
  const [isim, setIsim] = useState('');
  const [mutfaklar, setMutfaklar] = useState<Mutfak[]>([]);

  const yenile = useCallback(() => {
    getMutfaklar(db).then(setMutfaklar);
  }, [db]);

  useFocusEffect(yenile);

  const kaydet = async () => {
    if (!isim.trim()) return;
    try {
      await ekleMutfak(db, isim);
      setIsim('');
      yenile();
      Alert.alert('Eklendi ✓', `"${isim.trim()}" mutfağı sisteme eklendi.`);
    } catch {
      Alert.alert('Hata', 'Bu isimde bir mutfak zaten var.');
    }
  };

  return (
    <ScrollView style={s.kap} contentContainerStyle={s.icerik}>
      <Text style={s.etiket}>Mutfak / Kategori Adı</Text>
      <TextInput
        style={s.girdi}
        value={isim}
        onChangeText={setIsim}
        placeholder="ör. Fransız Mutfağı"
        placeholderTextColor={Renk.soluk}
      />
      <Pressable style={[s.buton, !isim.trim() && s.butonPasif]} disabled={!isim.trim()} onPress={kaydet}>
        <Text style={s.butonYazi}>Kaydet</Text>
      </Pressable>

      <Text style={s.bolumBaslik}>Mevcut Mutfaklar</Text>
      <View style={s.kart}>
        {mutfaklar.map((m) => (
          <Text key={m.id} style={s.satir}>
            • {m.isim} <Text style={s.soluk}>({m.tarifSayisi} tarif)</Text>
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  kap: { flex: 1, backgroundColor: Renk.arka },
  icerik: { padding: 16, paddingBottom: 40 },
  etiket: { fontSize: 14, fontWeight: '700', color: Renk.yazi, marginBottom: 8 },
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
  buton: { backgroundColor: Renk.ana, borderRadius: 12, padding: 15, alignItems: 'center' },
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
    gap: 8,
  },
  satir: { fontSize: 15, color: Renk.yazi },
  soluk: { color: Renk.soluk, fontSize: 13 },
});
