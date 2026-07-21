import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Renk } from '@/constants/renkler';

const SECENEKLER = [
  { yol: '/admin/mutfak-ekle', emoji: '🌍', baslik: 'Mutfak / Kategori Ekle', alt: 'Yeni bir mutfak kültürü veya kategori tanımla' },
  { yol: '/admin/malzeme-ekle', emoji: '🥕', baslik: 'Malzeme Ekle', alt: 'Sisteme yeni malzeme ve kategorisini ekle' },
  { yol: '/admin/tarif-ekle', emoji: '📖', baslik: 'Tarif Ekle', alt: 'Yeni tarif oluştur ve malzemelerini bağla' },
] as const;

export default function AdminMenu() {
  const router = useRouter();
  return (
    <View style={s.kap}>
      {SECENEKLER.map((sec) => (
        <Pressable key={sec.yol} style={s.kart} onPress={() => router.push(sec.yol)}>
          <Text style={s.emoji}>{sec.emoji}</Text>
          <View style={{ flex: 1 }}>
            <Text style={s.baslik}>{sec.baslik}</Text>
            <Text style={s.alt}>{sec.alt}</Text>
          </View>
          <Text style={s.ok}>›</Text>
        </Pressable>
      ))}
    </View>
  );
}

const s = StyleSheet.create({
  kap: { flex: 1, backgroundColor: Renk.arka, padding: 16 },
  kart: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    backgroundColor: Renk.kart,
    borderRadius: 14,
    padding: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Renk.cizgi,
  },
  emoji: { fontSize: 30 },
  baslik: { fontSize: 16, fontWeight: '700', color: Renk.yazi },
  alt: { fontSize: 13, color: Renk.soluk, marginTop: 3 },
  ok: { fontSize: 24, color: Renk.soluk, fontWeight: '300' },
});
