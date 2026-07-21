// İtalyan, Meksika ve Uzak Doğu mutfağı tarifleri.
import { type SeedTarif } from './seed-tarifler-turk';

const IT = 'İtalyan Mutfağı';
const MX = 'Meksika Mutfağı';
const UD = 'Uzak Doğu Mutfağı';

export const ITALYAN_TARIFLERI: SeedTarif[] = [
  // ─── MAKARNALAR ───
  {
    isim: 'Spaghetti Pomodoro', mutfak: IT, kategori: 'Makarnalar', sure: 30, tur: 'yemek',
    adimlar: [
      'Spagettiyi bol tuzlu suda al dente haşlayın.',
      'Zeytinyağında sarımsağı ve fesleğen saplarını kokusu çıkana kadar soteleyin.',
      'Rendelenmiş domatesi ekleyip sos kıvamına gelene kadar 15 dakika pişirin.',
      'Makarnayı sosa alıp taze fesleğen ve parmesanla servis edin.',
    ],
    malzemeler: ['Spagetti', 'Domates', 'Sarımsak', 'Fesleğen', 'Zeytinyağı', 'Parmesan', 'Tuz'],
  },
  {
    isim: 'Spaghetti Bolognese', mutfak: IT, kategori: 'Makarnalar', sure: 60, tur: 'yemek',
    adimlar: [
      'Soğan, havuç ve sarımsağı zeytinyağında yumuşatın.',
      'Kıymayı ekleyip suyunu çekene kadar kavurun.',
      'Domates, salça ve kekiği ekleyip kısık ateşte 35 dakika pişirin.',
      'Haşlanmış spagettinin üzerine sosu ve rendelenmiş parmesanı koyarak servis edin.',
    ],
    malzemeler: ['Spagetti', 'Kıyma', 'Soğan', 'Havuç', 'Sarımsak', 'Domates', 'Salça', 'Zeytinyağı', 'Kekik', 'Parmesan', 'Tuz', 'Karabiber'],
  },
  {
    isim: 'Fettuccine Alfredo', mutfak: IT, kategori: 'Makarnalar', sure: 25, tur: 'yemek',
    adimlar: [
      'Makarnayı al dente haşlayın, bir kepçe haşlama suyunu ayırın.',
      'Tereyağını eritip sarımsağı hafifçe soteleyin.',
      'Krema ve rendelenmiş parmesanı ekleyip sos koyulaşana kadar karıştırın.',
      'Makarnayı ve haşlama suyunu ekleyip karıştırın; karabiberle servis edin.',
    ],
    malzemeler: ['Makarna', 'Tereyağı', 'Krema', 'Parmesan', 'Sarımsak', 'Tuz', 'Karabiber'],
  },
  {
    isim: 'Penne Arrabbiata', mutfak: IT, kategori: 'Makarnalar', sure: 30, tur: 'yemek',
    adimlar: [
      'Penneyi al dente haşlayın.',
      'Zeytinyağında bol sarımsak ve pul biberi soteleyin.',
      'Rendelenmiş domatesi ekleyip 15 dakika pişirin.',
      'Makarnayı sosa alıp maydanozla servis edin.',
    ],
    malzemeler: ['Makarna', 'Domates', 'Sarımsak', 'Pul Biber', 'Zeytinyağı', 'Maydanoz', 'Tuz'],
  },
  {
    isim: 'Kremalı Mantarlı Makarna', mutfak: IT, kategori: 'Makarnalar', sure: 30, tur: 'yemek',
    adimlar: [
      'Makarnayı al dente haşlayın.',
      'Dilimlenmiş mantarları tereyağında suyunu çekene kadar soteleyin.',
      'Sarımsak ve kremayı ekleyip 5 dakika pişirin.',
      'Makarnayı ve parmesanı ekleyip karıştırın; karabiberle servis edin.',
    ],
    malzemeler: ['Makarna', 'Mantar', 'Krema', 'Sarımsak', 'Tereyağı', 'Parmesan', 'Tuz', 'Karabiber'],
  },
  {
    isim: 'Pesto Soslu Makarna', mutfak: IT, kategori: 'Makarnalar', sure: 25, tur: 'yemek',
    adimlar: [
      'Fesleğen, çam fıstığı, sarımsak, parmesan ve zeytinyağını blenderdan geçirip pesto yapın.',
      'Makarnayı al dente haşlayın, bir kepçe suyunu ayırın.',
      'Pestoyu makarnayla ve bir miktar haşlama suyuyla karıştırın (ocak kapalı).',
      'Ekstra parmesanla servis edin.',
    ],
    malzemeler: ['Makarna', 'Fesleğen', 'Çam Fıstığı', 'Sarımsak', 'Parmesan', 'Zeytinyağı', 'Tuz'],
  },

  // ─── FIRIN & ANA YEMEK ───
  {
    isim: 'Lazanya', mutfak: IT, kategori: 'Fırın & Ana Yemek', sure: 80, tur: 'yemek',
    adimlar: [
      'Kıymayı soğan, sarımsak, domates ve salçayla kavurup ragù sosunu hazırlayın.',
      'Tereyağı, un ve sütle beşamel sosu pişirin.',
      'Fırın kabına sırayla lazanya yaprağı, ragù ve beşamel dizin, katları tekrarlayın.',
      'En üste bol mozzarella serpip 180 derece fırında 35 dakika pişirin.',
    ],
    malzemeler: ['Lazanya Yaprağı', 'Kıyma', 'Soğan', 'Sarımsak', 'Domates', 'Salça', 'Un', 'Süt', 'Tereyağı', 'Mozzarella', 'Parmesan', 'Tuz', 'Karabiber'],
  },
  {
    isim: 'Margherita Pizza', mutfak: IT, kategori: 'Fırın & Ana Yemek', sure: 70, tur: 'yemek',
    adimlar: [
      'Un, maya, şeker, tuz, zeytinyağı ve ılık suyla hamur yoğurup 1 saat mayalandırın.',
      'Hamuru ince açıp üzerine domates sosu sürün.',
      'Dilimlenmiş mozzarellayı yerleştirin.',
      '250 derece fırında kenarları kızarana kadar pişirin; taze fesleğenle servis edin.',
    ],
    malzemeler: ['Un', 'Maya', 'Domates', 'Mozzarella', 'Fesleğen', 'Zeytinyağı', 'Şeker', 'Tuz'],
  },
  {
    isim: 'Risotto', mutfak: IT, kategori: 'Fırın & Ana Yemek', sure: 40, tur: 'yemek',
    adimlar: [
      'Soğanı tereyağında yumuşatıp pirinci ekleyin ve 2 dakika kavurun.',
      'Sıcak sebze suyunu azar azar ekleyip her seferinde karıştırarak emmesini bekleyin.',
      'Pirinç kremamsı ve al dente olana kadar 20 dakika pişirin.',
      'Parmesan ve bir parça tereyağı ekleyip karıştırın; dinlendirip servis edin.',
    ],
    malzemeler: ['Pirinç', 'Soğan', 'Mantar', 'Tereyağı', 'Parmesan', 'Tuz', 'Karabiber'],
  },
  {
    isim: 'Tavuklu Parmesan (Parmigiana)', mutfak: IT, kategori: 'Fırın & Ana Yemek', sure: 50, tur: 'yemek',
    adimlar: [
      'İnceltilmiş tavuk göğsünü una, çırpılmış yumurtaya ve galeta ununa bulayın.',
      'Tavada iki yüzünü kızartın.',
      'Fırın kabına dizip üzerlerine domates sosu ve mozzarella koyun.',
      '190 derece fırında peynir eriyene kadar 20 dakika pişirin.',
    ],
    malzemeler: ['Tavuk Göğsü', 'Un', 'Yumurta', 'Galeta Unu', 'Domates', 'Mozzarella', 'Parmesan', 'Zeytinyağı', 'Tuz', 'Karabiber'],
  },
  {
    isim: 'Minestrone Çorbası', mutfak: IT, kategori: 'Fırın & Ana Yemek', sure: 45, tur: 'yemek',
    adimlar: [
      'Soğan, havuç, kereviz ve sarımsağı zeytinyağında soteleyin.',
      'Küp patates, kabak ve domatesi ekleyip çevirin.',
      'Sebze suyu, haşlanmış barbunya ve küçük makarnayı ekleyin.',
      'Sebzeler yumuşayana kadar 20 dakika pişirin; parmesanla servis edin.',
    ],
    malzemeler: ['Soğan', 'Havuç', 'Kereviz', 'Patates', 'Kabak', 'Domates', 'Barbunya', 'Makarna', 'Sarımsak', 'Zeytinyağı', 'Parmesan', 'Tuz'],
  },

  // ─── TATLILAR ───
  {
    isim: 'Tiramisu', mutfak: IT, kategori: 'Tatlılar', sure: 40, tur: 'yemek',
    adimlar: [
      'Yumurta sarısı ve şekeri koyulaşana kadar çırpın, labneyi ekleyin.',
      'Çırpılmış kremayı katıp hafif bir krema elde edin.',
      'Kedi dili bisküvileri soğuk espressoya batırıp kabın dibine dizin.',
      'Kremayı yayın, katları tekrarlayın; üzerine kakao eleyip 4 saat soğutun.',
    ],
    malzemeler: ['Kedi Dili Bisküvi', 'Espresso', 'Labne', 'Krema', 'Yumurta', 'Şeker', 'Kakao'],
  },
  {
    isim: 'Panna Cotta', mutfak: IT, kategori: 'Tatlılar', sure: 25, tur: 'yemek',
    adimlar: [
      'Krema, süt, şeker ve vanilyayı kaynama noktasına getirin.',
      'Suda yumuşatılmış jelatini ekleyip eritin (veya nişastayla koyulaştırın).',
      'Karışımı kaselere paylaştırın.',
      'Buzdolabında 4 saat donmaya bırakın; çilek sosuyla servis edin.',
    ],
    malzemeler: ['Krema', 'Süt', 'Şeker', 'Vanilya', 'Çilek', 'Nişasta'],
  },
];

export const MEKSIKA_TARIFLERI: SeedTarif[] = [
  {
    isim: 'Taco', mutfak: MX, kategori: 'Ana Yemekler', sure: 30, tur: 'yemek',
    adimlar: [
      'Kıymayı soğanla kavurun; kimyon, pul biber ve tuzu ekleyin.',
      'Domates ve biberi küçük doğrayın.',
      'Tortillaları tavada ısıtın.',
      'İçlerine kıyma, sebzeler ve rendelenmiş kaşarı koyup katlayın.',
    ],
    malzemeler: ['Tortilla', 'Kıyma', 'Soğan', 'Domates', 'Dolmalık Biber', 'Kaşar Peyniri', 'Kimyon', 'Pul Biber', 'Tuz'],
  },
  {
    isim: 'Tavuklu Quesadilla', mutfak: MX, kategori: 'Ana Yemekler', sure: 25, tur: 'yemek',
    adimlar: [
      'Tavuğu baharatlarla soteleyip didikleyin.',
      'Tortillanın yarısına tavuk, mısır, biber ve bol rendelenmiş kaşar koyun.',
      'İkiye katlayıp tavada iki yüzünü kızartın.',
      'Üçgen kesip guacamole veya yoğurtla servis edin.',
    ],
    malzemeler: ['Tortilla', 'Tavuk Göğsü', 'Kaşar Peyniri', 'Mısır', 'Dolmalık Biber', 'Kimyon', 'Pul Biber', 'Tuz'],
  },
  {
    isim: 'Burrito', mutfak: MX, kategori: 'Ana Yemekler', sure: 35, tur: 'yemek',
    adimlar: [
      'Kıymayı soğan ve baharatlarla kavurun; haşlanmış barbunyayı ekleyin.',
      'Pirinci haşlayıp hazırlayın.',
      'Büyük tortillanın ortasına pirinç, etli fasulye, mısır ve kaşar koyun.',
      'Kenarları katlayıp sıkıca rulo yapın; tavada mühürleyin.',
    ],
    malzemeler: ['Tortilla', 'Kıyma', 'Barbunya', 'Pirinç', 'Mısır', 'Soğan', 'Kaşar Peyniri', 'Kimyon', 'Pul Biber', 'Tuz'],
  },
  {
    isim: 'Chili Con Carne', mutfak: MX, kategori: 'Ana Yemekler', sure: 60, tur: 'yemek',
    adimlar: [
      'Kıymayı soğan ve sarımsakla kavurun.',
      'Salça, domates, kimyon ve pul biberi ekleyin.',
      'Haşlanmış barbunya ve 1 su bardağı su ekleyin.',
      'Kısık ateşte koyulaşana kadar 35 dakika pişirin; pirinçle servis edin.',
    ],
    malzemeler: ['Kıyma', 'Barbunya', 'Soğan', 'Sarımsak', 'Domates', 'Salça', 'Kimyon', 'Pul Biber', 'Pirinç', 'Tuz'],
  },
  {
    isim: 'Fajita', mutfak: MX, kategori: 'Ana Yemekler', sure: 30, tur: 'yemek',
    adimlar: [
      'Tavuğu ince şeritler halinde kesip baharatlarla marine edin.',
      'Renkli biberleri ve soğanı julyen doğrayın.',
      'Yüksek ateşte önce tavuğu, sonra sebzeleri soteleyin.',
      'Sıcak tortillalarla, guacamole ve limonla servis edin.',
    ],
    malzemeler: ['Tavuk Göğsü', 'Dolmalık Biber', 'Soğan', 'Tortilla', 'Kimyon', 'Pul Biber', 'Sarımsak', 'Limon', 'Zeytinyağı', 'Tuz'],
  },
  {
    isim: 'Guacamole', mutfak: MX, kategori: 'Meze & Sos', sure: 15, tur: 'yemek',
    adimlar: [
      'Olgun avokadoları çatalla ezin.',
      'Çok küçük doğranmış domates, soğan ve sarımsağı ekleyin.',
      'Misket limonu suyu, tuz ve kişniş (maydanoz) ekleyin.',
      'Karıştırıp nachos veya tortilla ile servis edin.',
    ],
    malzemeler: ['Avokado', 'Domates', 'Soğan', 'Sarımsak', 'Misket Limonu', 'Maydanoz', 'Tuz'],
  },
  {
    isim: 'Salsa Sosu', mutfak: MX, kategori: 'Meze & Sos', sure: 15, tur: 'yemek',
    adimlar: [
      'Domates, soğan ve biberi küçük küpler halinde doğrayın.',
      'Sarımsak ve kıyılmış maydanozu ekleyin.',
      'Misket limonu suyu, tuz ve pul biberle harmanlayın.',
      '30 dakika dinlendirip servis edin.',
    ],
    malzemeler: ['Domates', 'Soğan', 'Sivri Biber', 'Sarımsak', 'Maydanoz', 'Misket Limonu', 'Pul Biber', 'Tuz'],
  },
  {
    isim: 'Nachos', mutfak: MX, kategori: 'Meze & Sos', sure: 20, tur: 'yemek',
    adimlar: [
      'Tortilla cipslerini fırın kabına yayın.',
      'Üzerine haşlanmış barbunya ve bol rendelenmiş kaşar serpin.',
      '200 derece fırında peynir eriyene kadar 8 dakika pişirin.',
      'Salsa ve guacamole ile hemen servis edin.',
    ],
    malzemeler: ['Tortilla', 'Kaşar Peyniri', 'Barbunya', 'Domates', 'Pul Biber', 'Tuz'],
  },
];

export const UZAKDOGU_TARIFLERI: SeedTarif[] = [
  {
    isim: 'Tavuklu Noodle', mutfak: UD, kategori: 'Noodle & Pilav', sure: 25, tur: 'yemek',
    adimlar: [
      'Noodle\'ı paket talimatına göre haşlayıp süzün.',
      'Tavuğu ince şeritler halinde yüksek ateşte soteleyin.',
      'Julyen biber, havuç ve sarımsağı ekleyip çıtır kalacak şekilde kavurun.',
      'Noodle ve soya sosunu ekleyip 2 dakika karıştırarak pişirin.',
    ],
    malzemeler: ['Noodle', 'Tavuk Göğsü', 'Dolmalık Biber', 'Havuç', 'Sarımsak', 'Soya Sosu', 'Zencefil', 'Ayçiçek Yağı'],
  },
  {
    isim: 'Yumurtalı Çin Pilavı', mutfak: UD, kategori: 'Noodle & Pilav', sure: 20, tur: 'yemek',
    adimlar: [
      'Pirinci haşlayıp iyice soğutun (bir gün önceki pilav idealdir).',
      'Yumurtaları tavada çırparak pişirip kenara alın.',
      'Sarımsak, havuç ve bezelyeyi yüksek ateşte soteleyin.',
      'Pirinci, yumurtayı ve soya sosunu ekleyip karıştırarak pişirin.',
    ],
    malzemeler: ['Pirinç', 'Yumurta', 'Havuç', 'Bezelye', 'Taze Soğan', 'Sarımsak', 'Soya Sosu', 'Ayçiçek Yağı'],
  },
  {
    isim: 'Pad Thai', mutfak: UD, kategori: 'Noodle & Pilav', sure: 30, tur: 'yemek',
    adimlar: [
      'Pirinç noodle\'ı ılık suda yumuşatın.',
      'Karides ve yumurtayı yüksek ateşte soteleyip kenara alın.',
      'Sarımsak, taze soğan ve havucu kavurun; noodle\'ı ekleyin.',
      'Soya sosu, misket limonu ve yer fıstığıyla harmanlayıp servis edin.',
    ],
    malzemeler: ['Pirinç Noodle', 'Karides', 'Yumurta', 'Havuç', 'Taze Soğan', 'Sarımsak', 'Soya Sosu', 'Misket Limonu', 'Yer Fıstığı', 'Ayçiçek Yağı'],
  },
  {
    isim: 'Teriyaki Tavuk', mutfak: UD, kategori: 'Ana Yemekler', sure: 30, tur: 'yemek',
    adimlar: [
      'Soya sosu, bal, sarımsak ve zencefili karıştırıp teriyaki sosu hazırlayın.',
      'Kuşbaşı tavuğu tavada mühürleyin.',
      'Sosu ekleyip kısık ateşte sos koyulaşıp tavukları kaplayana kadar pişirin.',
      'Susam ve taze soğan serpip pilavla servis edin.',
    ],
    malzemeler: ['Tavuk Göğsü', 'Soya Sosu', 'Bal', 'Sarımsak', 'Zencefil', 'Susam', 'Taze Soğan', 'Pirinç'],
  },
  {
    isim: 'Sebzeli Wok', mutfak: UD, kategori: 'Ana Yemekler', sure: 25, tur: 'yemek',
    adimlar: [
      'Brokoli, havuç, biber ve mantarı julyen doğrayın.',
      'Wok veya geniş tavayı çok kızdırıp zeytinyağını ekleyin.',
      'Sarımsak ve zencefili ekleyip sebzeleri yüksek ateşte çıtır kalacak şekilde soteleyin.',
      'Soya sosunu ekleyip karıştırın; susamla servis edin.',
    ],
    malzemeler: ['Brokoli', 'Havuç', 'Dolmalık Biber', 'Mantar', 'Sarımsak', 'Zencefil', 'Soya Sosu', 'Susam', 'Zeytinyağı'],
  },
  {
    isim: 'Karidesli Körili Pilav', mutfak: UD, kategori: 'Ana Yemekler', sure: 35, tur: 'yemek',
    adimlar: [
      'Soğan ve sarımsağı yağda soteleyip köri ve zerdeçalı ekleyin.',
      'Karidesleri ekleyip renk değiştirene kadar pişirin.',
      'Hindistan cevizi sütünü ekleyip 10 dakika kaynatın.',
      'Haşlanmış pirinçle servis edin.',
    ],
    malzemeler: ['Karides', 'Pirinç', 'Soğan', 'Sarımsak', 'Köri', 'Zerdeçal', 'Hindistan Cevizi Sütü', 'Ayçiçek Yağı', 'Tuz'],
  },
  {
    isim: 'Miso Usulü Sebze Çorbası', mutfak: UD, kategori: 'Çorba & Başlangıç', sure: 20, tur: 'yemek',
    adimlar: [
      'Sebze suyunu kaynatıp dilimlenmiş mantar ve havucu ekleyin.',
      'Zencefil ve sarımsağı ekleyip 5 dakika pişirin.',
      'Küp doğranmış tofu yerine lor peyniri veya haşlanmış nohut ekleyebilirsiniz.',
      'Taze soğan ve soya sosuyla tatlandırıp servis edin.',
    ],
    malzemeler: ['Mantar', 'Havuç', 'Zencefil', 'Sarımsak', 'Taze Soğan', 'Soya Sosu', 'Lor Peyniri', 'Tuz'],
  },
  {
    isim: 'Tavuklu Bao Usulü Dürüm', mutfak: UD, kategori: 'Ana Yemekler', sure: 40, tur: 'yemek',
    adimlar: [
      'Tavuğu soya sosu, bal ve zencefille marine edip soteleyin.',
      'Salatalık ve havucu ince şeritler halinde kesin.',
      'Tortillayı hafifçe ısıtın.',
      'İçine tavuk, taze sebzeler ve taze soğan koyup rulo yapın.',
    ],
    malzemeler: ['Tavuk Göğsü', 'Tortilla', 'Salatalık', 'Havuç', 'Taze Soğan', 'Soya Sosu', 'Bal', 'Zencefil', 'Susam'],
  },
];
