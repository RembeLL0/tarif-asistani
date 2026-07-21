import { Stack } from 'expo-router';
import { SQLiteProvider } from 'expo-sqlite';
import { StatusBar } from 'expo-status-bar';

import { Renk } from '@/constants/renkler';
import { initDb } from '@/db/database';

export default function RootLayout() {
  return (
    <SQLiteProvider databaseName="tarif-asistani.db" onInit={initDb}>
      <StatusBar style="light" />
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
        <Stack.Screen name="sonuclar" options={{ title: 'Bulunan Tarifler' }} />
        <Stack.Screen name="admin/index" options={{ title: 'Veri Girişi' }} />
        <Stack.Screen name="admin/mutfak-ekle" options={{ title: 'Mutfak Ekle' }} />
        <Stack.Screen name="admin/malzeme-ekle" options={{ title: 'Malzeme Ekle' }} />
        <Stack.Screen name="admin/tarif-ekle" options={{ title: 'Tarif Ekle' }} />
      </Stack>
    </SQLiteProvider>
  );
}
