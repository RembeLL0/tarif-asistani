import { LinearGradient } from 'expo-linear-gradient';
import { useFocusEffect, useRouter } from 'expo-router';
import { useCallback, useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';

import { golge, Gradyan, Renk } from '@/constants/renkler';
import { getMalzemeler, type Malzeme } from '@/db/database';

const KATEGORI_EMOJI: Record<string, string> = {
  'Sebze & Meyve': '🥬',
  'Et & Tavuk': '🍗',
  'Süt Ürünleri & Yumurta': '🥚',
  'Bakliyat & Tahıl': '🌾',
  'Baharat & Sos': '🧂',
  'İçecek': '🥤',
};

export default function MalzemeSec() {
  const db = useSQLiteContext();
  const router = useRouter();
  const [malzemeler, setMalzemeler] = useState<Malzeme[]>([]);
  const [secili, setSecili] = useState<Set<number>>(new Set());

  useFocusEffect(
    useCallback(() => {
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

  const toggle = (id: number) => {
    setSecili((eski) => {
      const yeni = new Set(eski);
      if (yeni.has(id)) yeni.delete(id);
      else yeni.add(id);
      return yeni;
    });
  };

  const ara = () => {
    router.push({ pathname: '/sonuclar', params: { ids: [...secili].join(',') } });
  };

  return (
    <View style={s.kap}>
      <ScrollView contentContainerStyle={s.liste}>
        <Text style={s.aciklama}>Evindeki malzemelere dokun, sana uygun tarifleri bulalım.</Text>
        {kategoriler.map(([kategori, liste]) => (
          <View key={kategori} style={[s.kart, golge]}>
            <Text style={s.bolumBaslik}>
              {KATEGORI_EMOJI[kategori] ?? '🍴'}  {kategori}
            </Text>
            <View style={s.cipler}>
              {liste.map((m) => {
                const acik = secili.has(m.id);
                return (
                  <Pressable
                    key={m.id}
                    style={[s.cip, acik && s.cipSecili]}
                    onPress={() => toggle(m.id)}
                  >
                    <Text style={[s.cipYazi, acik && s.cipYaziSecili]}>
                      {acik ? '✓ ' : ''}
                      {m.isim}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={s.altBar}>
        <Pressable disabled={secili.size === 0} onPress={ara}>
          {({ pressed }) => (
            <LinearGradient
              colors={secili.size === 0 ? (['#39423E', '#2A312E'] as const) : Gradyan.ana}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={[s.araButon, golge, pressed && secili.size > 0 && s.basili]}
            >
              <Text style={s.araYazi}>
                {secili.size === 0 ? 'Önce malzeme seç' : `🔍  Tarifleri Bul (${secili.size})`}
              </Text>
            </LinearGradient>
          )}
        </Pressable>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  kap: { flex: 1, backgroundColor: Renk.arka },
  liste: { padding: 20, paddingBottom: 120 },
  aciklama: { fontSize: 14, color: Renk.soluk, marginBottom: 16, fontWeight: '500' },
  kart: {
    backgroundColor: Renk.kart,
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
  },
  bolumBaslik: { fontSize: 15, fontWeight: '800', color: Renk.yazi, marginBottom: 12 },
  cipler: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  cip: {
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 9,
    backgroundColor: Renk.arka,
    borderWidth: 1.5,
    borderColor: Renk.cizgi,
  },
  cipSecili: { backgroundColor: Renk.ana, borderColor: Renk.ana },
  cipYazi: { fontSize: 14, color: Renk.yazi, fontWeight: '600' },
  cipYaziSecili: { color: '#fff' },
  altBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    paddingBottom: 26,
  },
  araButon: { borderRadius: 18, padding: 17, alignItems: 'center' },
  basili: { opacity: 0.85, transform: [{ scale: 0.98 }] },
  araYazi: { color: '#fff', fontSize: 16, fontWeight: '800' },
});
