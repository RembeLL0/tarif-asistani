import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Renk } from '@/constants/renkler';
import { useMenu } from '@/context/menu';
import { kursGrubu, type KursAnahtar } from '@/db/database';
import { YEREL_RESIM } from '@/db/yerel-resimler';

const KURS_SIRA: { anahtar: KursAnahtar; etiket: string }[] = [
  { anahtar: 'corba', etiket: 'Çorba' },
  { anahtar: 'arasicak', etiket: 'Ara Sıcak' },
  { anahtar: 'ana', etiket: 'Ana Yemek' },
  { anahtar: 'meze', etiket: 'Meze' },
  { anahtar: 'tatli', etiket: 'Tatlı' },
  { anahtar: 'icecek', etiket: 'İçecek' },
];

export function MenuModal({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  const router = useRouter();
  const { menu, cikar, temizle } = useMenu();

  // Menü tamamen boşalınca (son tarif çıkarılınca) pencereyi kapat.
  useEffect(() => {
    if (visible && menu.length === 0) onClose();
  }, [visible, menu.length, onClose]);

  // react-native-web'de Modal, visible=false olunca içeriği DOM'dan kaldırmıyor;
  // bu yüzden görünmezken hiç render etmiyoruz (kesin kapanma garantisi).
  if (!visible) return null;

  const toplamSure = menu.reduce((a, t) => a + (t.sure_dk ?? 0), 0);
  const gruplar = KURS_SIRA.map((k) => ({
    ...k,
    tarifler: menu.filter((t) => kursGrubu(t.kategori, t.tur) === k.anahtar),
  })).filter((g) => g.tarifler.length > 0);

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={s.arka}>
        <View style={s.kart}>
          <View style={s.ust}>
            <Text style={s.baslik}>🍽️ Menüm</Text>
            <Pressable onPress={onClose} hitSlop={10}>
              <Text style={s.kapat}>✕</Text>
            </Pressable>
          </View>
          <Text style={s.ozet}>
            {menu.length} tarif · toplam ⏱ {toplamSure} dk
          </Text>

          <ScrollView style={s.liste} contentContainerStyle={{ gap: 16 }}>
            {gruplar.map((g) => (
              <View key={g.anahtar} style={{ gap: 8 }}>
                <Text style={s.kursBaslik}>{g.etiket}</Text>
                {g.tarifler.map((t) => (
                  <Pressable
                    key={t.id}
                    style={s.satir}
                    onPress={() => {
                      onClose();
                      router.push(`/tarif/${t.id}`);
                    }}
                  >
                    {YEREL_RESIM[t.isim] ? (
                      <Image source={YEREL_RESIM[t.isim]} style={s.resim} contentFit="cover" />
                    ) : (
                      <View style={[s.resim, s.resimBos]}>
                        <Text style={{ fontSize: 18 }}>{t.tur === 'kokteyl' ? '🍹' : '🍽️'}</Text>
                      </View>
                    )}
                    <View style={{ flex: 1 }}>
                      <Text style={s.satirBaslik}>{t.isim}</Text>
                      <Text style={s.satirAlt}>
                        {t.mutfak} · ⏱ {t.sure_dk} dk
                      </Text>
                    </View>
                    <Pressable onPress={() => cikar(t.id)} hitSlop={10}>
                      <Text style={s.cikar}>✕</Text>
                    </Pressable>
                  </Pressable>
                ))}
              </View>
            ))}
          </ScrollView>

          <View style={s.altButonlar}>
            <Pressable
              style={s.temizle}
              onPress={() => {
                temizle();
                onClose();
              }}
            >
              <Text style={s.temizleYazi}>Menüyü temizle</Text>
            </Pressable>
            <Pressable style={s.bitir} onPress={onClose}>
              <Text style={s.bitirYazi}>Tamam</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const s = StyleSheet.create({
  arka: { flex: 1, backgroundColor: 'rgba(0,0,0,0.55)', justifyContent: 'flex-end' },
  kart: {
    backgroundColor: Renk.arka,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 24,
    maxHeight: '85%',
    borderTopWidth: 1,
    borderColor: Renk.cizgi,
  },
  ust: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  baslik: { fontSize: 20, fontWeight: '900', color: Renk.yazi },
  kapat: { fontSize: 20, color: Renk.soluk, fontWeight: '700' },
  ozet: { fontSize: 13, color: Renk.soluk, marginTop: 4, marginBottom: 14 },
  liste: { flexGrow: 0 },
  kursBaslik: {
    fontSize: 12,
    fontWeight: '800',
    color: Renk.ana,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  satir: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: Renk.kart,
    borderRadius: 16,
    padding: 10,
  },
  resim: { width: 44, height: 44, borderRadius: 12, backgroundColor: Renk.anaSoft },
  resimBos: { alignItems: 'center', justifyContent: 'center' },
  satirBaslik: { fontSize: 15, fontWeight: '700', color: Renk.yazi },
  satirAlt: { fontSize: 12, color: Renk.soluk, marginTop: 2 },
  cikar: { fontSize: 16, color: Renk.soluk, fontWeight: '700', paddingHorizontal: 4 },
  altButonlar: { flexDirection: 'row', gap: 12, marginTop: 18 },
  temizle: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Renk.cizgi,
  },
  temizleYazi: { fontSize: 14, fontWeight: '700', color: Renk.soluk },
  bitir: { flex: 1, alignItems: 'center', paddingVertical: 14, borderRadius: 16, backgroundColor: Renk.ana },
  bitirYazi: { fontSize: 14, fontWeight: '800', color: Renk.arka },
});
