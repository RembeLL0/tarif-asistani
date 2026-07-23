import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

// Menüye eklenen tarifin gösterim için gereken alanları.
export interface MenuTarif {
  id: number;
  isim: string;
  mutfak: string;
  kategori: string;
  sure_dk: number;
  tur: 'yemek' | 'kokteyl';
}

const DEPO_ANAHTAR = 'tarif-asistani-menu';

// Web'de localStorage'dan başlangıç menüsünü yükler (sayfa yenilense de korunur).
function baslangicMenu(): MenuTarif[] {
  try {
    if (typeof localStorage !== 'undefined') {
      const kayit = localStorage.getItem(DEPO_ANAHTAR);
      if (kayit) return JSON.parse(kayit) as MenuTarif[];
    }
  } catch {
    // yok say
  }
  return [];
}

interface MenuDeger {
  menu: MenuTarif[];
  iceriyorMu: (id: number) => boolean;
  degistir: (t: MenuTarif) => void; // varsa çıkar, yoksa ekle
  cikar: (id: number) => void;
  temizle: () => void;
}

const MenuContext = createContext<MenuDeger | null>(null);

// Kullanıcının oluşturduğu menü, ekranlar arası paylaşılsın diye kökte tutulur.
export function MenuProvider({ children }: { children: ReactNode }) {
  const [menu, setMenu] = useState<MenuTarif[]>(baslangicMenu);

  // Menü değiştikçe web'de kalıcı olarak sakla.
  useEffect(() => {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(DEPO_ANAHTAR, JSON.stringify(menu));
      }
    } catch {
      // yok say
    }
  }, [menu]);

  const deger = useMemo<MenuDeger>(
    () => ({
      menu,
      iceriyorMu: (id) => menu.some((t) => t.id === id),
      degistir: (t) =>
        setMenu((o) =>
          o.some((x) => x.id === t.id) ? o.filter((x) => x.id !== t.id) : [...o, t]
        ),
      cikar: (id) => setMenu((o) => o.filter((t) => t.id !== id)),
      temizle: () => setMenu([]),
    }),
    [menu]
  );

  return <MenuContext.Provider value={deger}>{children}</MenuContext.Provider>;
}

export function useMenu() {
  const c = useContext(MenuContext);
  if (!c) throw new Error('useMenu, MenuProvider içinde kullanılmalı');
  return c;
}
