// Ortak tarif tipi ve Türk Mutfağı tariflerinin birleştirilmiş listesi.
// Tarifler üç bölüm dosyasına ayrılmıştır:
//   seed-turk-1: Çorbalar, Kahvaltılık, Salatalar & Mezeler
//   seed-turk-2: Et Yemekleri, Tavuk Yemekleri, Balık & Deniz Ürünleri
//   seed-turk-3: Zeytinyağlılar & Sebze, Pilav & Makarna, Hamur İşi, Tatlılar

export interface SeedTarif {
  isim: string;
  mutfak: string;
  kategori: string;
  sure: number;
  tur: 'yemek' | 'kokteyl';
  adimlar: string[];
  /** [malzeme adı, miktar] — örn. ['Kıyma', '500 g'] */
  malzemeler: [string, string][];
  /** Kaç kişilik/porsiyon. Belirtilmezse kategoriye göre otomatik atanır. */
  porsiyon?: number;
}

import { TURK_1 } from './seed-turk-1';
import { TURK_2 } from './seed-turk-2';
import { TURK_3 } from './seed-turk-3';

export const TURK_TARIFLERI: SeedTarif[] = [...TURK_1, ...TURK_2, ...TURK_3];
