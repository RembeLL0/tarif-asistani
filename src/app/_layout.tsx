import { Stack } from 'expo-router';
import { SQLiteProvider } from 'expo-sqlite';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, View } from 'react-native';

import { Renk } from '@/constants/renkler';
import { MenuProvider } from '@/context/menu';
import { initDb } from '@/db/database';

const web = Platform.OS === 'web';

export default function RootLayout() {
  return (
    <SQLiteProvider databaseName="tarif-asistani.db" onInit={initDb}>
      <MenuProvider>
        <StatusBar style="light" />
        {/* Web'de: geniş ekranda ortalanmış telefon genişliği kolon.
            Telefon/emülatörde: tam genişlik (bu sarmalayıcılar şeffaf geçer). */}
        <View style={[s.disKap, web && s.disKapWeb]}>
          <View style={[s.kolon, web && s.kolonWeb]}>
          <Stack
            screenOptions={{
              headerStyle: { backgroundColor: Renk.arka },
              headerTintColor: Renk.yazi,
              headerTitleStyle: { fontWeight: '800' },
              headerShadowVisible: false,
              contentStyle: { backgroundColor: Renk.arka },
            }}
          >
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="mutfak/[id]" options={{ title: 'Mutfak' }} />
            <Stack.Screen name="tarif/[id]" options={{ title: '', headerTransparent: true, headerTintColor: '#fff' }} />
            <Stack.Screen name="malzeme-sec" options={{ title: 'Evde Ne Var?' }} />
            <Stack.Screen name="menu-olustur" options={{ title: 'Menü Oluştur' }} />
            <Stack.Screen name="sonuclar" options={{ title: 'Bulunan Tarifler' }} />
            <Stack.Screen name="admin/index" options={{ title: 'Veri Girişi' }} />
            <Stack.Screen name="admin/mutfak-ekle" options={{ title: 'Mutfak Ekle' }} />
            <Stack.Screen name="admin/malzeme-ekle" options={{ title: 'Malzeme Ekle' }} />
            <Stack.Screen name="admin/tarif-ekle" options={{ title: 'Tarif Ekle' }} />
          </Stack>
          </View>
        </View>
      </MenuProvider>
    </SQLiteProvider>
  );
}

const s = StyleSheet.create({
  disKap: { flex: 1, backgroundColor: Renk.arka },
  disKapWeb: { backgroundColor: '#0C0F0E', alignItems: 'center' },
  kolon: { flex: 1, width: '100%', backgroundColor: Renk.arka },
  kolonWeb: {
    maxWidth: 440,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: Renk.cizgi,
  },
});
