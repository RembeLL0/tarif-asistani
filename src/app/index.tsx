import { LinearGradient } from 'expo-linear-gradient';
import { useFocusEffect, useRouter } from 'expo-router';
import { useCallback, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSQLiteContext } from 'expo-sqlite';

import { MenuModal } from '@/components/MenuModal';
import { golge, Gradyan, MutfakGradyanlari, Renk } from '@/constants/renkler';
import { useMenu } from '@/context/menu';
import { getMutfaklar, type Mutfak } from '@/db/database';

function mutfakEmoji(isim: string): string {
  const ad = isim.toLocaleLowerCase('tr');
  if (ad.includes('kokteyl') || ad.includes('içecek')) return '🍹';
  if (ad.includes('türk')) return '🥘';
  if (ad.includes('italyan')) return '🍝';
  if (ad.includes('meksika')) return '🌮';
  if (ad.includes('uzak doğu') || ad.includes('asya')) return '🍜';
  if (ad.includes('tatlı')) return '🍰';
  if (ad.includes('fransız')) return '🥐';
  return '🍽️';
}

// Mutfağın kimliğine uygun degrade; tanınmayanlar sırayla döner.
function mutfakGradyani(isim: string, index: number) {
  const ad = isim.toLocaleLowerCase('tr');
  if (ad.includes('kokteyl') || ad.includes('içecek')) return Gradyan.patlican;
  if (ad.includes('türk')) return Gradyan.ana;
  if (ad.includes('italyan')) return Gradyan.nane;
  if (ad.includes('meksika')) return Gradyan.safran;
  if (ad.includes('uzak doğu') || ad.includes('asya')) return Gradyan.kakao;
  return MutfakGradyanlari[index % MutfakGradyanlari.length];
}

export default function AnaEkran() {
  const db = useSQLiteContext();
  const router = useRouter();
  const { menu } = useMenu();
  const [mutfaklar, setMutfaklar] = useState<Mutfak[]>([]);
  const [menuAcik, setMenuAcik] = useState(false);

  useFocusEffect(
    useCallback(() => {
      getMutfaklar(db).then(setMutfaklar);
    }, [db])
  );

  return (
    <SafeAreaView style={s.kap} edges={['top']}>
      <FlatList
        data={mutfaklar}
        keyExtractor={(m) => String(m.id)}
        numColumns={2}
        columnWrapperStyle={s.sutunlar}
        contentContainerStyle={s.liste}
        ListHeaderComponent={
          <>
            <Text style={s.ustYazi}>TARİF ASİSTANI</Text>
            <View style={s.baslikSatir}>
              <Text style={s.baslik}>
                Bugün ne{'\n'}pişiriyoruz? <Text style={s.baslikEmoji}>🍳</Text>
              </Text>
              <Pressable
                style={s.menuBtn}
                onPress={() => (menu.length > 0 ? setMenuAcik(true) : router.push('/malzeme-sec'))}
              >
                {menu.length > 0 ? (
                  <>
                    <Text style={s.menuBtnYazi}>🍽️ Menüm</Text>
                    <View style={s.menuRozet}>
                      <Text style={s.menuRozetYazi}>{menu.length}</Text>
                    </View>
                  </>
                ) : (
                  <Text style={s.menuBtnYazi}>＋ Menü oluştur</Text>
                )}
              </Pressable>
            </View>

            <Pressable onPress={() => router.push('/malzeme-sec')}>
              {({ pressed }) => (
                <LinearGradient
                  colors={Gradyan.ana}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={[s.hero, golge, pressed && s.basili]}
                >
                  <View style={s.heroEmojiKutu}>
                    <Text style={s.heroEmoji}>🧺</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={s.heroBaslik}>Evde Ne Var?</Text>
                    <Text style={s.heroAlt}>Malzemelerini seç, tarifini bulalım</Text>
                  </View>
                  <Text style={s.heroOk}>›</Text>
                </LinearGradient>
              )}
            </Pressable>

            <Text style={s.bolumBaslik}>Mutfaklar & Kategoriler</Text>
          </>
        }
        renderItem={({ item, index }) => (
          <Pressable style={s.karoKap} onPress={() => router.push(`/mutfak/${item.id}`)}>
            {({ pressed }) => (
              <LinearGradient
                colors={mutfakGradyani(item.isim, index)}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[s.karo, golge, pressed && s.basili]}
              >
                <Text style={s.karoEmoji}>{mutfakEmoji(item.isim)}</Text>
                <Text style={s.karoBaslik} numberOfLines={2}>
                  {item.isim}
                </Text>
                <View style={s.karoRozet}>
                  <Text style={s.karoRozetYazi}>{item.tarifSayisi} tarif</Text>
                </View>
              </LinearGradient>
            )}
          </Pressable>
        )}
        ListFooterComponent={
          <Pressable style={s.adminButon} onPress={() => router.push('/admin')}>
            <Text style={s.adminYazi}>⚙️  Veri Girişi (Admin)</Text>
          </Pressable>
        }
      />
      <MenuModal visible={menuAcik} onClose={() => setMenuAcik(false)} />
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  kap: { flex: 1, backgroundColor: Renk.arka },
  liste: { padding: 20, paddingBottom: 36 },
  sutunlar: { gap: 14 },
  ustYazi: { fontSize: 13, fontWeight: '800', letterSpacing: 3, color: Renk.ana, marginTop: 8 },
  baslikSatir: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: 6,
    marginBottom: 20,
    gap: 10,
  },
  baslik: { fontSize: 34, fontWeight: '800', color: Renk.yazi, lineHeight: 40, flex: 1 },
  baslikEmoji: { fontSize: 30 },
  menuBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: Renk.anaSoft,
    borderWidth: 1,
    borderColor: Renk.ana,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 6,
  },
  menuBtnYazi: { fontSize: 13, fontWeight: '800', color: Renk.ana },
  menuRozet: {
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Renk.ana,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  menuRozetYazi: { fontSize: 12, fontWeight: '900', color: Renk.arka },
  hero: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    borderRadius: 22,
    padding: 18,
    marginBottom: 28,
  },
  basili: { opacity: 0.85, transform: [{ scale: 0.98 }] },
  heroEmojiKutu: {
    width: 54,
    height: 54,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroEmoji: { fontSize: 30 },
  heroBaslik: { color: '#fff', fontSize: 20, fontWeight: '800' },
  heroAlt: { color: 'rgba(255,255,255,0.9)', fontSize: 13, marginTop: 3, fontWeight: '500' },
  heroOk: { color: '#fff', fontSize: 32, fontWeight: '300', marginRight: 4 },
  bolumBaslik: {
    fontSize: 13,
    fontWeight: '800',
    color: Renk.soluk,
    marginBottom: 14,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  karoKap: { flex: 1, maxWidth: '48.2%', marginBottom: 14 },
  karo: { borderRadius: 22, padding: 16, minHeight: 128, justifyContent: 'space-between' },
  karoEmoji: { fontSize: 32 },
  karoBaslik: { color: '#fff', fontSize: 16, fontWeight: '800', marginTop: 8 },
  karoRozet: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginTop: 8,
  },
  karoRozetYazi: { color: '#fff', fontSize: 12, fontWeight: '700' },
  adminButon: { marginTop: 12, alignItems: 'center', padding: 12 },
  adminYazi: { color: Renk.soluk, fontSize: 14, fontWeight: '600' },
});
