// Kokteyller & İçecekler — alkollü ve alkolsüz.
import { type SeedTarif } from './seed-tarifler-turk';

const K = 'Kokteyller & İçecekler';

export const KOKTEYL_TARIFLERI: SeedTarif[] = [
  // ─── ALKOLLÜ ───
  {
    isim: 'Mojito', mutfak: K, kategori: 'Alkollü Kokteyller', sure: 10, tur: 'kokteyl',
    adimlar: [
      'Bardakta nane yapraklarını şeker ve misket limonu dilimleriyle hafifçe ezin.',
      'Bardağı buzla doldurun.',
      '50 ml romu ekleyip karıştırın.',
      'Üzerini soda ile tamamlayıp nane yaprağıyla süsleyin.',
    ],
    malzemeler: ['Rom', 'Misket Limonu', 'Taze Nane', 'Şeker', 'Soda', 'Buz'],
  },
  {
    isim: 'Cuba Libre', mutfak: K, kategori: 'Alkollü Kokteyller', sure: 5, tur: 'kokteyl',
    adimlar: [
      'Uzun bardağı buzla doldurun.',
      '50 ml romu ekleyin.',
      'Üzerini kola ile tamamlayın.',
      'Misket limonu dilimi sıkıp bardağa atın ve karıştırın.',
    ],
    malzemeler: ['Rom', 'Kola', 'Misket Limonu', 'Buz'],
  },
  {
    isim: 'Margarita', mutfak: K, kategori: 'Alkollü Kokteyller', sure: 10, tur: 'kokteyl',
    adimlar: [
      'Bardağın kenarını misket limonuyla ıslatıp tuza batırın.',
      'Shaker\'a 50 ml tekila, 25 ml misket limonu suyu ve 2 çay kaşığı şeker koyun.',
      'Buzla birlikte iyice çalkalayın.',
      'Buzlu bardağa süzerek servis edin.',
    ],
    malzemeler: ['Tekila', 'Misket Limonu', 'Şeker', 'Tuz', 'Buz'],
  },
  {
    isim: 'Gin Tonic', mutfak: K, kategori: 'Alkollü Kokteyller', sure: 5, tur: 'kokteyl',
    adimlar: [
      'Balon bardağı buzla doldurun.',
      '50 ml cini ekleyin.',
      'Üzerini tonikle tamamlayın.',
      'Limon dilimi veya salatalık şeridiyle süsleyin.',
    ],
    malzemeler: ['Cin', 'Tonik', 'Limon', 'Salatalık', 'Buz'],
  },
  {
    isim: 'Whiskey Sour', mutfak: K, kategori: 'Alkollü Kokteyller', sure: 10, tur: 'kokteyl',
    adimlar: [
      'Shaker\'a 50 ml viski, 25 ml limon suyu ve 2 çay kaşığı şeker koyun.',
      'İsteğe göre yarım yumurta akı ekleyin (köpük için).',
      'Buzla iyice çalkalayın.',
      'Buzlu bardağa süzüp vişneyle süsleyin.',
    ],
    malzemeler: ['Viski', 'Limon', 'Şeker', 'Yumurta', 'Buz'],
  },
  {
    isim: 'Piña Colada', mutfak: K, kategori: 'Alkollü Kokteyller', sure: 10, tur: 'kokteyl',
    adimlar: [
      'Blender\'a 50 ml rom, 100 ml ananas suyu ve 50 ml hindistan cevizi sütü koyun.',
      'Bir avuç buzla birlikte pürüzsüz olana kadar çekin.',
      'Soğutulmuş bardağa dökün.',
      'Ananas dilimiyle süsleyip pipetle servis edin.',
    ],
    malzemeler: ['Rom', 'Ananas Suyu', 'Hindistan Cevizi Sütü', 'Buz'],
  },
  {
    isim: 'Tequila Sunrise', mutfak: K, kategori: 'Alkollü Kokteyller', sure: 5, tur: 'kokteyl',
    adimlar: [
      'Uzun bardağı buzla doldurup 50 ml tekila ekleyin.',
      'Üzerini portakal suyuyla tamamlayın.',
      'Nar şurubunu bardağın kenarından yavaşça dökün; dibe çökerek gün doğumu efekti verir.',
      'Karıştırmadan, portakal dilimiyle servis edin.',
    ],
    malzemeler: ['Tekila', 'Portakal Suyu', 'Nar Şurubu', 'Buz', 'Portakal'],
  },
  {
    isim: 'Moscow Mule', mutfak: K, kategori: 'Alkollü Kokteyller', sure: 5, tur: 'kokteyl',
    adimlar: [
      'Bardağı buzla doldurun.',
      '50 ml votka ve yarım misket limonunun suyunu ekleyin.',
      'Üzerini zencefilli soda ile (soda + rendelenmiş taze zencefil) tamamlayın.',
      'Nane ve misket limonu dilimiyle süsleyin.',
    ],
    malzemeler: ['Votka', 'Misket Limonu', 'Soda', 'Zencefil', 'Taze Nane', 'Buz'],
  },
  {
    isim: 'Espresso Martini', mutfak: K, kategori: 'Alkollü Kokteyller', sure: 10, tur: 'kokteyl',
    adimlar: [
      'Bir shot espresso hazırlayıp soğutun.',
      'Shaker\'a 50 ml votka, espresso ve 2 çay kaşığı şeker koyun.',
      'Buzla sertçe çalkalayın (köpük oluşur).',
      'Soğutulmuş kadehe süzüp üzerine 3 kahve çekirdeği koyun.',
    ],
    malzemeler: ['Votka', 'Espresso', 'Şeker', 'Buz'],
  },
  {
    isim: 'Screwdriver', mutfak: K, kategori: 'Alkollü Kokteyller', sure: 5, tur: 'kokteyl',
    adimlar: [
      'Uzun bardağı buzla doldurun.',
      '50 ml votkayı ekleyin.',
      'Üzerini taze sıkılmış portakal suyuyla tamamlayın.',
      'Karıştırıp portakal dilimiyle servis edin.',
    ],
    malzemeler: ['Votka', 'Portakal Suyu', 'Buz', 'Portakal'],
  },

  // ─── ALKOLSÜZ ───
  {
    isim: 'Virgin Mojito', mutfak: K, kategori: 'Alkolsüz İçecekler', sure: 10, tur: 'kokteyl',
    adimlar: [
      'Bardakta nane yapraklarını şeker ve misket limonuyla hafifçe ezin.',
      'Bardağı buzla doldurun.',
      'Üzerini soda ile tamamlayın.',
      'Karıştırıp nane yaprağıyla süsleyin.',
    ],
    malzemeler: ['Misket Limonu', 'Taze Nane', 'Şeker', 'Soda', 'Buz'],
  },
  {
    isim: 'Naneli Ev Limonatası', mutfak: K, kategori: 'Alkolsüz İçecekler', sure: 15, tur: 'kokteyl',
    adimlar: [
      '4 limonun suyunu sıkın; kabuklarını acılaşmaması için beyaz kısmına inmeden rendeleyin.',
      'Şekeri az sıcak suda eritip limon suyu ve rendeyle karıştırın.',
      '1 litre soğuk su ekleyip süzün.',
      'Nane yaprakları ve bol buzla servis edin.',
    ],
    malzemeler: ['Limon', 'Şeker', 'Taze Nane', 'Buz'],
  },
  {
    isim: 'Çilekli Milkshake', mutfak: K, kategori: 'Alkolsüz İçecekler', sure: 10, tur: 'kokteyl',
    adimlar: [
      'Blender\'a 1 su bardağı süt, 1 kase çilek ve 2 yemek kaşığı şeker koyun.',
      'İsteğe göre 1 top dondurma veya 2 kaşık krema ekleyin.',
      'Pürüzsüz olana kadar çekin.',
      'Soğuk bardakta, çilek dilimiyle servis edin.',
    ],
    malzemeler: ['Süt', 'Çilek', 'Şeker', 'Krema', 'Buz'],
  },
  {
    isim: 'Muzlu Smoothie', mutfak: K, kategori: 'Alkolsüz İçecekler', sure: 10, tur: 'kokteyl',
    adimlar: [
      'Blender\'a muz, yoğurt, süt ve balı koyun.',
      'İsteğe göre bir avuç yulaf ekleyin.',
      'Pürüzsüz olana kadar çekin.',
      'Tarçın serperek servis edin.',
    ],
    malzemeler: ['Muz', 'Yoğurt', 'Süt', 'Bal', 'Yulaf', 'Tarçın', 'Buz'],
  },
  {
    isim: 'Ev Yapımı Ayran', mutfak: K, kategori: 'Alkolsüz İçecekler', sure: 5, tur: 'kokteyl',
    adimlar: [
      '2 kase yoğurdu blender\'a alın.',
      '2 su bardağı soğuk su ve tuz ekleyin.',
      'Köpürene kadar çırpın.',
      'İsteğe göre kuru nane serperek buzlu servis edin.',
    ],
    malzemeler: ['Yoğurt', 'Tuz', 'Kuru Nane', 'Buz'],
  },
  {
    isim: 'Osmanlı Şerbeti', mutfak: K, kategori: 'Alkolsüz İçecekler', sure: 20, tur: 'kokteyl',
    adimlar: [
      'Vişne suyu, nar şurubu ve az şekeri karıştırın.',
      'Tarçın ve karanfille 10 dakika kaynatın.',
      'Soğutup süzün.',
      'Bol buzla ve limon dilimiyle servis edin.',
    ],
    malzemeler: ['Vişne Suyu', 'Nar Şurubu', 'Şeker', 'Tarçın', 'Limon', 'Buz'],
  },
];
