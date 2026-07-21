// İtalyan, Meksika ve Uzak Doğu mutfağı tarifleri (gramajlı).
import { type SeedTarif } from './seed-tarifler-turk';

const IT = 'İtalyan Mutfağı';
const MX = 'Meksika Mutfağı';
const UD = 'Uzak Doğu Mutfağı';

export const ITALYAN_TARIFLERI: SeedTarif[] = [
  {
    isim: 'Spaghetti Pomodoro', mutfak: IT, kategori: 'Makarnalar', sure: 30, tur: 'yemek',
    malzemeler: [
      ['Spagetti', '400 g'], ['Domates', '5 adet olgun (750 g)'], ['Sarımsak', '3 diş'],
      ['Fesleğen', '1 avuç taze yaprak'], ['Zeytinyağı', '4 yemek kaşığı'], ['Parmesan', '50 g rendelenmiş'], ['Tuz', '1 yemek kaşığı (haşlama suyu için)'],
    ],
    adimlar: [
      'Büyük tencerede bol su kaynatın, tuzu ekleyin — makarna suyu deniz suyu kadar tuzlu olmalı.',
      'Spagettiyi pakette yazan süreden 1 dakika az haşlayın (al dente); süzmeden önce bir kupa haşlama suyu ayırın.',
      'Bu arada domatesleri rendeleyin. Tavada zeytinyağını kısık ateşte ısıtıp ezilmiş sarımsakları 1 dakika, yakmadan kokusunu çıkarın.',
      'Domatesi ekleyip orta ateşte 15 dakika, koyulaşana kadar pişirin; tuzlayın.',
      'Makarnayı sosa aktarın; ayırdığınız haşlama suyundan yarım kupa ekleyip 1 dakika tavada karıştırın — nişastalı su, sosu makarnaya yapıştırır.',
      'Fesleğen yapraklarını elinizle koparıp ekleyin. Bol parmesanla hemen servis edin.',
    ],
  },
  {
    isim: 'Spaghetti Bolognese', mutfak: IT, kategori: 'Makarnalar', sure: 60, tur: 'yemek',
    malzemeler: [
      ['Spagetti', '400 g'], ['Kıyma', '400 g'], ['Soğan', '1 adet'], ['Havuç', '1 adet'],
      ['Sarımsak', '2 diş'], ['Domates', '3 adet (rendelenmiş)'], ['Salça', '1 yemek kaşığı'],
      ['Zeytinyağı', '3 yemek kaşığı'], ['Kekik', '1 çay kaşığı'], ['Parmesan', '50 g'], ['Tuz', '1 tatlı kaşığı'], ['Karabiber', 'yarım çay kaşığı'],
    ],
    adimlar: [
      'Soğan, havuç ve sarımsağı çok küçük doğrayın (robotta çekebilirsiniz).',
      'Zeytinyağında bu üçlüyü kısık ateşte 8 dakika, yumuşayana kadar kavurun — İtalyanlar buna "soffritto" der, sosun temelidir.',
      'Kıymayı ekleyip ateşi açın; rengi tamamen dönene ve suyunu çekene kadar 10 dakika pişirin.',
      'Salçayı ekleyip 2 dakika kavurun; rendelenmiş domates, kekik, tuz ve karabiberi ekleyin.',
      'Yarım su bardağı sıcak su ekleyip kapağı aralık, kısık ateşte 30-35 dakika pişirin. Uzun pişen bolonez daha lezzetli olur.',
      'Spagettiyi al dente haşlayıp sosla buluşturun; bol parmesanla servis edin.',
    ],
  },
  {
    isim: 'Fettuccine Alfredo', mutfak: IT, kategori: 'Makarnalar', sure: 25, tur: 'yemek',
    malzemeler: [
      ['Makarna', '400 g (fettuccine)'], ['Tereyağı', '60 g'], ['Krema', '1 paket (200 ml)'],
      ['Parmesan', '80 g rendelenmiş'], ['Sarımsak', '1 diş'], ['Tuz', '1 tatlı kaşığı'], ['Karabiber', 'yarım çay kaşığı'],
    ],
    adimlar: [
      'Makarnayı bol tuzlu suda al dente haşlayın; bir kupa haşlama suyu ayırıp süzün.',
      'Geniş tavada tereyağını kısık ateşte eritin; ezilmiş sarımsağı 30 saniye çevirin.',
      'Kremayı ekleyip hafifçe ısıtın — kaynatmayın, sadece sıcaklansın.',
      'Makarnayı tavaya alın; parmesanın çoğunu ekleyip maşayla karıştırın.',
      'Sos çok koyulaşırsa ayırdığınız haşlama suyundan ekleyerek açın; ipeksi bir kıvam hedefliyoruz.',
      'Kalan parmesan ve bolca taze karabiberle hemen servis edin — Alfredo bekletilmeye gelmez.',
    ],
  },
  {
    isim: 'Penne Arrabbiata', mutfak: IT, kategori: 'Makarnalar', sure: 30, tur: 'yemek',
    malzemeler: [
      ['Makarna', '400 g (penne)'], ['Domates', '5 adet (750 g)'], ['Sarımsak', '4 diş'],
      ['Pul Biber', '1 tatlı kaşığı (acı sevenler artırsın)'], ['Zeytinyağı', '4 yemek kaşığı'], ['Maydanoz', 'birkaç dal'], ['Tuz', '1 tatlı kaşığı'],
    ],
    adimlar: [
      '"Arrabbiata" İtalyanca "öfkeli" demek — bu makarnanın acısı adından belli!',
      'Penneyi bol tuzlu suda al dente haşlayın.',
      'Zeytinyağını kısık ateşte ısıtıp dilimlenmiş sarımsakları ve pul biberi 1-2 dakika, yağa lezzetleri geçene kadar çevirin.',
      'Rendelenmiş domatesi ekleyip orta ateşte 15 dakika pişirin; tuzlayın.',
      'Makarnayı sosa alıp bir kepçe haşlama suyuyla 1 dakika karıştırın.',
      'Kıyılmış maydanoz serpip servis edin.',
    ],
  },
  {
    isim: 'Kremalı Mantarlı Makarna', mutfak: IT, kategori: 'Makarnalar', sure: 30, tur: 'yemek',
    malzemeler: [
      ['Makarna', '400 g'], ['Mantar', '400 g'], ['Krema', '1 paket (200 ml)'],
      ['Sarımsak', '2 diş'], ['Tereyağı', '40 g'], ['Parmesan', '50 g'], ['Tuz', '1 tatlı kaşığı'], ['Karabiber', 'yarım çay kaşığı'],
    ],
    adimlar: [
      'Mantarları silip ince dilimleyin.',
      'Geniş tavada tereyağını eritip mantarları ekleyin; suyunu salıp çekene ve hafif kızarana kadar 10 dakika, arada karıştırarak pişirin.',
      'Ezilmiş sarımsağı ekleyip 1 dakika çevirin.',
      'Bu arada makarnayı al dente haşlayın.',
      'Mantarlara kremayı ekleyip 3-4 dakika, hafif koyulaşana kadar pişirin; tuz ve karabiber ekleyin.',
      'Makarnayı sosa alıp parmesanla karıştırın; bir kepçe haşlama suyuyla kıvamı açıp servis edin.',
    ],
  },
  {
    isim: 'Pesto Soslu Makarna', mutfak: IT, kategori: 'Makarnalar', sure: 25, tur: 'yemek',
    malzemeler: [
      ['Makarna', '400 g'], ['Fesleğen', '2 dolu avuç (50 g)'], ['Çam Fıstığı', '3 yemek kaşığı'],
      ['Sarımsak', '1 diş'], ['Parmesan', '60 g'], ['Zeytinyağı', 'yarım çay bardağı (50 ml)'], ['Tuz', 'yarım çay kaşığı'],
    ],
    adimlar: [
      'Çam fıstıklarını kuru tavada 2 dakika, hafif pembeleşene kadar kavurun — kavrulmuş fıstık pestoyu bambaşka yapar.',
      'Blendera fesleğen, fıstık, sarımsak, parmesanın yarısı ve tuzu koyun.',
      'Zeytinyağını azar azar ekleyerek, iri taneli bir ezme kıvamına gelene kadar çekin. Fazla çekmeyin — pesto pürüzsüz değil, dokulu olmalı.',
      'Makarnayı al dente haşlayıp bir kupa haşlama suyu ayırın.',
      'ÖNEMLİ: Ocağı kapatın! Pesto asla pişirilmez, ısıyla kararır ve acılaşır. Makarnayı tencereye geri alıp pestoyu ve az haşlama suyunu ekleyin, karıştırın.',
      'Kalan parmesanla hemen servis edin.',
    ],
  },
  {
    isim: 'Lazanya', mutfak: IT, kategori: 'Fırın & Ana Yemek', sure: 80, tur: 'yemek',
    malzemeler: [
      ['Lazanya Yaprağı', '12 adet'], ['Kıyma', '400 g'], ['Soğan', '1 adet'], ['Sarımsak', '2 diş'],
      ['Domates', '3 adet'], ['Salça', '1 yemek kaşığı'], ['Un', '3 yemek kaşığı'], ['Süt', '3 su bardağı (600 ml)'],
      ['Tereyağı', '60 g'], ['Mozzarella', '200 g'], ['Parmesan', '50 g'], ['Tuz', '1,5 tatlı kaşığı'], ['Karabiber', 'yarım çay kaşığı'],
    ],
    adimlar: [
      'Et sosu: kıymayı doğranmış soğan ve sarımsakla kavurun; salça, rendelenmiş domates, tuz ve karabiberle 20 dakika pişirin. Hafif sulu kalsın — kuru sos lazanyayı kurutur.',
      'Beşamel: tencerede tereyağını eritip unu ekleyin, 2 dakika kavurun. Sütü azar azar, çırpa çırpa ekleyin; pürüzsüz, boza kıvamında bir sos elde edin. Tuzlayın.',
      'Fırın kabının tabanına bir kepçe beşamel yayın (yapraklar yapışmasın).',
      'Sırayla dizin: lazanya yaprağı → et sosu → beşamel → rendelenmiş mozzarella. Bu katmanı 3-4 kez tekrarlayın.',
      'En üst kat: yaprak + beşamel + bol mozzarella ve parmesan.',
      'Üzerini folyoyla örtüp 180 derece fırında 25 dakika, folyoyu açıp 15 dakika daha, üzeri kızarana kadar pişirin.',
      'Fırından çıkınca 10 dakika dinlendirin — dinlenmeden kesilirse dağılır. Sonra dilimleyip servis edin.',
    ],
  },
  {
    isim: 'Margherita Pizza', mutfak: IT, kategori: 'Fırın & Ana Yemek', sure: 70, tur: 'yemek',
    malzemeler: [
      ['Un', '3 su bardağı (360 g)'], ['Maya', '1 paket kuru maya (10 g)'], ['Şeker', '1 çay kaşığı'],
      ['Domates', '3 adet'], ['Mozzarella', '200 g'], ['Fesleğen', '1 avuç'], ['Zeytinyağı', '3 yemek kaşığı'], ['Tuz', '1 tatlı kaşığı'],
    ],
    adimlar: [
      'Hamur: mayayı ve şekeri 1 su bardağı ılık suda eritip 5 dakika bekletin. Un, tuz ve 1 kaşık zeytinyağıyla 10 dakika yoğurun; pürüzsüz, esnek bir hamur olsun.',
      'Üzerini örtüp sıcak bir yerde 1 saat, iki katına çıkana kadar mayalandırın.',
      'Sos: domatesleri rendeleyip 1 kaşık zeytinyağı ve tuzla 10 dakika, koyulaşana kadar pişirin.',
      'Fırını en yüksek ayarda (250 derece), tepsiyle birlikte ısıtın — sıcak tepsi, tabanı çıtır yapar.',
      'Hamuru unlu tezgahta elinizle, ortadan kenara doğru iterek açın (oklava kullanmayın, kenar boşluklarındaki hava pizza kenarını kabartır).',
      'Sosu ince bir tabaka halinde yayın, mozzarella parçalarını dağıtın.',
      'Sıcak tepsiye kaydırıp 8-10 dakika, kenarları kabarıp benekleşene kadar pişirin. Çıkınca taze fesleğen ve bir tur zeytinyağı gezdirin.',
    ],
  },
  {
    isim: 'Mantarlı Risotto', mutfak: IT, kategori: 'Fırın & Ana Yemek', sure: 40, tur: 'yemek',
    malzemeler: [
      ['Pirinç', '1,5 su bardağı (270 g, mümkünse arborio)'], ['Mantar', '300 g'], ['Soğan', '1 adet küçük'],
      ['Tereyağı', '60 g'], ['Parmesan', '60 g'], ['Tuz', '1 tatlı kaşığı'], ['Karabiber', 'yarım çay kaşığı'],
    ],
    adimlar: [
      '5 su bardağı suyu (varsa sebze/tavuk suyu) tuzlayıp ayrı bir tencerede sıcak tutun — risottoya hep SICAK su eklenir.',
      'Mantarları dilimleyip tereyağının yarısında kızartın, tabağa alın.',
      'Aynı tencerede kalan tereyağıyla ince doğranmış soğanı 3 dakika yumuşatın; pirinci YIKAMADAN ekleyin (nişastası kremamsılığı sağlar) ve 2 dakika kavurun.',
      'Şimdi risotto ritmi: bir kepçe sıcak su ekleyin, karıştırın, pirinç suyu emsin; sonra bir kepçe daha. Bu şekilde, sürekli başında karıştırarak 18-20 dakika devam edin.',
      'Pirinç dışı kremamsı, içi hafif diri (al dente) olunca mantarları geri ekleyin.',
      'Ocağı kapatıp parmesan ve bir parça tereyağı ekleyin; hızlıca karıştırın (İtalyanlar buna "mantecatura" der). 2 dakika dinlendirip hemen servis edin — risotto beklemez!',
    ],
  },
  {
    isim: 'Tavuklu Parmigiana', mutfak: IT, kategori: 'Fırın & Ana Yemek', sure: 50, tur: 'yemek',
    malzemeler: [
      ['Tavuk Göğsü', '2 adet (500 g)'], ['Un', '3 yemek kaşığı'], ['Yumurta', '2 adet'],
      ['Galeta Unu', '1 su bardağı'], ['Domates', '3 adet'], ['Mozzarella', '150 g'], ['Parmesan', '30 g'],
      ['Zeytinyağı', 'kızartma için'], ['Tuz', '1 tatlı kaşığı'], ['Karabiber', 'yarım çay kaşığı'],
    ],
    adimlar: [
      'Tavuk göğüslerini yatay ikiye kesip streç arasında tokmakla inceltin; tuz ve karabiberle ovun.',
      'Üç tabak hazırlayın: un / çırpılmış yumurta / galeta unu. Tavukları sırayla üçüne de bulayın.',
      'Tavada 4-5 kaşık zeytinyağını kızdırıp tavukları her yüzü 3 dakika, altın rengi olana kadar kızartın.',
      'Domatesleri rendeleyip tuzla 10 dakika pişirerek basit bir sos yapın.',
      'Kızarmış tavukları fırın kabına dizin; üzerlerine sos, mozzarella dilimleri ve parmesan serpin.',
      '190 derece fırında 15-20 dakika, peynir eriyip kabarcıklar çıkarana kadar pişirin. Makarna veya salata ile servis edin.',
    ],
  },
  {
    isim: 'Minestrone Çorbası', mutfak: IT, kategori: 'Fırın & Ana Yemek', sure: 45, tur: 'yemek',
    malzemeler: [
      ['Soğan', '1 adet'], ['Havuç', '2 adet'], ['Kereviz', '1 sap'], ['Patates', '1 adet'],
      ['Kabak', '1 adet'], ['Domates', '2 adet'], ['Barbunya', '1 su bardağı haşlanmış'],
      ['Makarna', 'yarım su bardağı (küçük boy)'], ['Sarımsak', '2 diş'], ['Zeytinyağı', '4 yemek kaşığı'],
      ['Parmesan', '40 g'], ['Tuz', '1,5 tatlı kaşığı'],
    ],
    adimlar: [
      'Bütün sebzeleri küçük küpler halinde doğrayın — minestrone "her şeyden biraz" çorbasıdır.',
      'Zeytinyağında soğan, havuç ve kerevizi 5 dakika kavurun; sarımsağı ekleyip 1 dakika daha çevirin.',
      'Patates, kabak ve rendelenmiş domatesi ekleyin, 3 dakika karıştırın.',
      '6 su bardağı sıcak su ve tuzu ekleyip 15 dakika kaynatın.',
      'Haşlanmış barbunya ve makarnayı ekleyin; makarna yumuşayana kadar 10 dakika daha pişirin.',
      'Kaselere alıp üzerine parmesan rendesi ve bir tur zeytinyağıyla servis edin.',
    ],
  },
  {
    isim: 'Tiramisu', mutfak: IT, kategori: 'Tatlılar', sure: 40, tur: 'yemek',
    malzemeler: [
      ['Kedi Dili Bisküvi', '1 paket (200 g)'], ['Espresso', '2 su bardağı soğuk (yoksa koyu granül kahve)'],
      ['Labne', '400 g'], ['Krema', '1 paket (200 ml)'], ['Yumurta', '3 adet (sadece sarısı)'],
      ['Şeker', 'yarım su bardağı (100 g)'], ['Kakao', '2 yemek kaşığı'],
    ],
    adimlar: [
      'Yumurta sarılarını ve şekeri, benmari usulü (kaynayan su dolu tencerenin üzerine oturttuğunuz kasede) 5 dakika, krema gibi olana kadar çırpın; soğumaya bırakın.',
      'Labneyi ekleyip çırpın.',
      'Kremayı ayrı kapta, şekli koruyacak katılığa gelene kadar çırpın; spatulayla labneli karışıma söndürmeden yedirin.',
      'Espressoyu geniş bir kaba alın. Kedi dillerini tek tek, 1-2 saniye batırıp (fazla ıslatmayın, dağılır) kabın tabanına dizin.',
      'Üzerine kremanın yarısını yayın; bir kat daha kahveli bisküvi ve kalan kremayla bitirin.',
      'Buzdolabında en az 4 saat (ideali bir gece) dinlendirin — tiramisu "beni yukarı çek" demektir ama sabır ister!',
      'Servisten hemen önce üzerine kakao eleyin.',
    ],
  },
  {
    isim: 'Panna Cotta', mutfak: IT, kategori: 'Tatlılar', sure: 25, tur: 'yemek',
    malzemeler: [
      ['Krema', '2 paket (400 ml)'], ['Süt', '1 su bardağı (200 ml)'], ['Şeker', 'yarım su bardağı (100 g)'],
      ['Nişasta', '2 yemek kaşığı'], ['Vanilya', '1 paket'], ['Çilek', '200 g (sos için)'],
    ],
    adimlar: [
      'Krema, süt, şeker ve nişastayı tencerede soğukken çırpın.',
      'Orta ateşte, sürekli karıştırarak hafif koyulaşana kadar 8-10 dakika pişirin; vanilyayı ekleyin.',
      'Karışımı kaselere ya da silikon kalıplara paylaştırın.',
      'Buzdolabında en az 4 saat, tamamen donana kadar bekletin.',
      'Çilek sosu: çilekleri 2 kaşık şekerle 10 dakika pişirip ezin ve soğutun.',
      'Kalıptan çıkarmak için kabın kenarını sıcak suya 5 saniye değdirin, tabağa ters çevirin. Çilek sosunu üzerine gezdirin — titreyen o zarif doku "pişmiş krema"nın imzasıdır.',
    ],
  },
];

export const MEKSIKA_TARIFLERI: SeedTarif[] = [
  {
    isim: 'Taco', mutfak: MX, kategori: 'Ana Yemekler', sure: 30, tur: 'yemek',
    malzemeler: [
      ['Tortilla', '8 adet'], ['Kıyma', '400 g'], ['Soğan', '1 adet'], ['Domates', '2 adet'],
      ['Dolmalık Biber', '1 adet'], ['Kaşar Peyniri', '1 su bardağı rendelenmiş'], ['Kimyon', '1 tatlı kaşığı'],
      ['Pul Biber', '1 çay kaşığı'], ['Tuz', '1 tatlı kaşığı'],
    ],
    adimlar: [
      'Kıymayı yağsız tavada, suyunu çekene kadar pişirin; doğranmış soğanı ekleyip 5 dakika kavurun.',
      'Kimyon, pul biber ve tuzu ekleyin — kimyon, taco tadının anahtarıdır.',
      'Domates ve biberi minik küpler halinde doğrayın.',
      'Tortillaları kuru tavada her yüzü 20-30 saniye ısıtın; ısınan tortilla katlanınca kırılmaz.',
      'Her tortillanın ortasına kıyma, taze sebzeler ve rendelenmiş peynir koyun.',
      'İkiye katlayıp hemen servis edin; yanına limon ve acı sos koymayı unutmayın.',
    ],
  },
  {
    isim: 'Tavuklu Quesadilla', mutfak: MX, kategori: 'Ana Yemekler', sure: 25, tur: 'yemek',
    malzemeler: [
      ['Tortilla', '4 adet büyük'], ['Tavuk Göğsü', '300 g'], ['Kaşar Peyniri', '2 su bardağı rendelenmiş'],
      ['Mısır', 'yarım su bardağı'], ['Dolmalık Biber', '1 adet'], ['Kimyon', '1 çay kaşığı'],
      ['Pul Biber', '1 çay kaşığı'], ['Zeytinyağı', '2 yemek kaşığı'], ['Tuz', '1 çay kaşığı'],
    ],
    adimlar: [
      'Tavukları küçük parçalar halinde doğrayıp kimyon, pul biber ve tuzla harmanlayın.',
      'Zeytinyağında tavukları 6-7 dakika, pişip hafif kızarana kadar soteleyin; ince doğranmış biberi son 2 dakika ekleyin.',
      'Tortillanın bir yarısına peynir, üzerine tavuklu karışım ve mısır, en üste yine peynir koyun — çift kat peynir iki tarafı da yapıştırır.',
      'Boş yarısını üzerine katlayın.',
      'Kuru tavada orta ateşte, her yüzünü 2-3 dakika, peynir eriyip tortilla çıtırlaşana kadar bastırarak pişirin.',
      'Üçgenlere kesip guacamole veya yoğurtla servis edin.',
    ],
  },
  {
    isim: 'Burrito', mutfak: MX, kategori: 'Ana Yemekler', sure: 35, tur: 'yemek',
    malzemeler: [
      ['Tortilla', '4 adet büyük'], ['Kıyma', '300 g'], ['Barbunya', '1 su bardağı haşlanmış'],
      ['Pirinç', '1 su bardağı (180 g)'], ['Mısır', 'yarım su bardağı'], ['Soğan', '1 adet'],
      ['Kaşar Peyniri', '1 su bardağı rendelenmiş'], ['Kimyon', '1 tatlı kaşığı'], ['Pul Biber', '1 çay kaşığı'], ['Tuz', '1,5 tatlı kaşığı'],
    ],
    adimlar: [
      'Pirinci haşlayıp hazırlayın.',
      'Kıymayı soğanla kavurun; baharatları, barbunyayı ve yarım çay bardağı su ekleyip 10 dakika, suyu çekilene kadar pişirin.',
      'Tortillaları tavada ısıtın.',
      'Her tortillanın ortasına (kenarlardan uzak) sırasıyla pirinç, etli fasulye, mısır ve peynir koyun. Az koyun — dolu burrito sarılmaz!',
      'Önce alt kenarı harcın üzerine katlayın, sonra iki yanı içe kapatıp sıkıca rulo yapın.',
      'Ruloları kuru tavada, kapanma yeri alta gelecek şekilde 2 dakika mühürleyin. Hem yapışır hem çıtırlaşır.',
    ],
  },
  {
    isim: 'Chili Con Carne', mutfak: MX, kategori: 'Ana Yemekler', sure: 60, tur: 'yemek',
    malzemeler: [
      ['Kıyma', '500 g'], ['Barbunya', '2 su bardağı haşlanmış'], ['Soğan', '1 adet büyük'],
      ['Sarımsak', '3 diş'], ['Domates', '3 adet'], ['Salça', '1 yemek kaşığı'], ['Kimyon', '1 tatlı kaşığı'],
      ['Pul Biber', '1 tatlı kaşığı'], ['Zeytinyağı', '3 yemek kaşığı'], ['Pirinç', 'servis için'], ['Tuz', '1,5 tatlı kaşığı'],
    ],
    adimlar: [
      'Zeytinyağında doğranmış soğanı 5 dakika kavurun; sarımsağı ekleyip 1 dakika çevirin.',
      'Kıymayı ekleyip suyunu çekene kadar 10 dakika pişirin.',
      'Salça, kimyon ve pul biberi ekleyip 2 dakika kavurun — baharatların yağda açılması lezzeti katlar.',
      'Rendelenmiş domatesi ve 1 su bardağı sıcak suyu ekleyin.',
      'Haşlanmış barbunyayı ekleyip kısık ateşte, ara ara karıştırarak 30 dakika, koyu bir yahni kıvamına gelene kadar pişirin.',
      'Tuzunu ayarlayıp pirinç pilavı üzerinde, üstüne rendelenmiş peynirle servis edin.',
    ],
  },
  {
    isim: 'Fajita', mutfak: MX, kategori: 'Ana Yemekler', sure: 30, tur: 'yemek',
    malzemeler: [
      ['Tavuk Göğsü', '500 g'], ['Dolmalık Biber', '2 adet (renkli olursa daha şık)'], ['Soğan', '2 adet'],
      ['Tortilla', '6 adet'], ['Kimyon', '1 tatlı kaşığı'], ['Pul Biber', '1 çay kaşığı'],
      ['Sarımsak', '2 diş'], ['Limon', '1 adet'], ['Zeytinyağı', '4 yemek kaşığı'], ['Tuz', '1 tatlı kaşığı'],
    ],
    adimlar: [
      'Tavukları parmak kalınlığında uzun şeritler halinde kesin; kimyon, pul biber, ezilmiş sarımsak, tuz ve 2 kaşık zeytinyağıyla 15 dakika marine edin.',
      'Soğanı ve biberleri de uzun ince şeritler halinde doğrayın.',
      'Döküm tavayı çok iyi kızdırın — fajitanın olayı o cızırtıdır!',
      'Tavukları tek katman halinde yayıp 3-4 dakika dokunmadan kızartın, sonra çevirip 3 dakika daha pişirin; tabağa alın.',
      'Aynı tavaya kalan yağı ve sebzeleri atın; yüksek ateşte 4-5 dakika, hafif yanık izleri alacak ama diri kalacak şekilde soteleyin.',
      'Tavukları geri ekleyip limon sıkın, karıştırın. Sıcak tortillalar ve guacamole eşliğinde, tavayla servis edin.',
    ],
  },
  {
    isim: 'Guacamole', mutfak: MX, kategori: 'Meze & Sos', sure: 15, tur: 'yemek',
    malzemeler: [
      ['Avokado', '2 adet olgun'], ['Domates', '1 adet'], ['Soğan', 'çeyrek adet'],
      ['Sarımsak', '1 diş'], ['Misket Limonu', '1 adet'], ['Maydanoz', 'birkaç dal (aslı kişnişle yapılır)'], ['Tuz', 'yarım çay kaşığı'],
    ],
    adimlar: [
      'Olgun avokado seçin: hafifçe bastırınca içe çöken ama vıcık olmayan. Sert avokadodan guacamole olmaz!',
      'Avokadoları ikiye kesin, çekirdeği çıkarın ve kaşıkla içlerini bir kaseye oyun.',
      'Çatalla ezin — pürüzsüz değil, parçalı kalsın; doku guacamole\'nin karakteridir.',
      'Misket limonunun suyunu hemen sıkın; hem lezzet verir hem avokadonun kararmasını önler.',
      'Minik doğranmış domates (çekirdeksiz), soğan, ezilmiş sarımsak ve kıyılmış maydanozu ekleyin.',
      'Tuzla tatlandırıp karıştırın. Cips, tortilla veya etlerin yanında hemen servis edin — bekledikçe kararır.',
    ],
  },
  {
    isim: 'Salsa Sosu', mutfak: MX, kategori: 'Meze & Sos', sure: 15, tur: 'yemek',
    malzemeler: [
      ['Domates', '3 adet'], ['Soğan', 'yarım adet'], ['Sivri Biber', '2 adet'],
      ['Sarımsak', '1 diş'], ['Maydanoz', 'birkaç dal'], ['Misket Limonu', '1 adet'],
      ['Pul Biber', 'yarım çay kaşığı'], ['Tuz', 'yarım çay kaşığı'],
    ],
    adimlar: [
      'Domateslerin çekirdeklerini çıkarıp etli kısmını minik küpler halinde doğrayın.',
      'Soğan, biber ve sarımsağı da olabildiğince küçük doğrayın; maydanozu kıyın.',
      'Hepsini bir kasede birleştirin.',
      'Misket limonu suyu, pul biber ve tuzu ekleyip karıştırın.',
      'Buzdolabında 30 dakika dinlendirin — malzemeler kaynaşınca gerçek salsa tadı ortaya çıkar. Cips ve tacoların vazgeçilmezi!',
    ],
  },
  {
    isim: 'Nachos', mutfak: MX, kategori: 'Meze & Sos', sure: 20, tur: 'yemek',
    malzemeler: [
      ['Tortilla', '4 adet (cips için) veya hazır tortilla cipsi'], ['Kaşar Peyniri', '2 su bardağı rendelenmiş'],
      ['Barbunya', '1 su bardağı haşlanmış'], ['Domates', '1 adet'], ['Pul Biber', 'yarım çay kaşığı'],
      ['Ayçiçek Yağı', 'kızartma için'], ['Tuz', 'yarım çay kaşığı'],
    ],
    adimlar: [
      'Cips: tortillaları üçgenlere kesip kızgın yağda 1-2 dakika, altın rengi olana kadar kızartın; kağıt havluya alıp tuzlayın (hazır cips de olur).',
      'Cipsleri fırın kabına tek kat yayın.',
      'Üzerine haşlanmış barbunya ve bol rendelenmiş peynir serpin; pul biber ekleyin.',
      '200 derece fırında 6-8 dakika, peynir eriyip köpürene kadar pişirin.',
      'Üzerine küp domates serpin; salsa ve guacamole eşliğinde, sıcakken paylaşarak yiyin!',
    ],
  },
];

export const UZAKDOGU_TARIFLERI: SeedTarif[] = [
  {
    isim: 'Tavuklu Noodle', mutfak: UD, kategori: 'Noodle & Pilav', sure: 25, tur: 'yemek',
    malzemeler: [
      ['Noodle', '250 g'], ['Tavuk Göğsü', '300 g'], ['Dolmalık Biber', '1 adet'],
      ['Havuç', '1 adet'], ['Sarımsak', '2 diş'], ['Zencefil', '1 parmak boyu (veya 1 çay kaşığı toz)'],
      ['Soya Sosu', '4 yemek kaşığı'], ['Ayçiçek Yağı', '3 yemek kaşığı'],
    ],
    adimlar: [
      'Noodle\'ı paketin talimatına göre haşlayın; süzüp yapışmasın diye az yağla karıştırın.',
      'Tavukları ince şeritler, havuç ve biberi kibrit çöpü inceliğinde doğrayın; sarımsak ve zencefili rendeleyin.',
      'Wok veya en geniş tavanızı duman çıkacak kadar kızdırın — Uzak Doğu mutfağının sırrı çok yüksek ateştir.',
      'Yağı ekleyip tavukları 3-4 dakika, sürekli karıştırarak (stir-fry!) pişirin.',
      'Sebzeleri, sarımsak ve zencefili ekleyip 2 dakika daha karıştırın; sebzeler diri kalsın.',
      'Noodle ve soya sosunu ekleyin; 2 dakika, her şey sosla kaplanana kadar hızlıca karıştırıp servis edin.',
    ],
  },
  {
    isim: 'Yumurtalı Çin Pilavı', mutfak: UD, kategori: 'Noodle & Pilav', sure: 20, tur: 'yemek',
    malzemeler: [
      ['Pirinç', '2 su bardağı haşlanmış ve soğutulmuş'], ['Yumurta', '3 adet'], ['Havuç', '1 adet'],
      ['Bezelye', 'yarım su bardağı'], ['Taze Soğan', '3 dal'], ['Sarımsak', '2 diş'],
      ['Soya Sosu', '3 yemek kaşığı'], ['Ayçiçek Yağı', '3 yemek kaşığı'],
    ],
    adimlar: [
      'Sır burada: pilav bir gün önceden haşlanıp buzdolabında soğutulmuş olmalı. Taze sıcak pilav yapış yapış olur; soğuk pilav tane tane kalır.',
      'Tavayı kızdırıp 1 kaşık yağda çırpılmış yumurtaları dökün; kaşıkla karıştırarak küçük parçalar halinde pişirip tabağa alın.',
      'Kalan yağda küp doğranmış havucu 2 dakika, bezelyeyi ekleyip 2 dakika daha yüksek ateşte soteleyin; rendelenmiş sarımsağı ekleyin.',
      'Soğuk pilavı ekleyin; kaşığın tersiyle bastıra bastıra topaklarını açın ve 3 dakika karıştırarak kızdırın.',
      'Yumurtaları geri ekleyin, soya sosunu tavanın kenarından gezdirin (kenardan dökülen sos karamelize olur, daha lezzetlidir).',
      'Kıyılmış taze soğanla karıştırıp servis edin.',
    ],
  },
  {
    isim: 'Pad Thai', mutfak: UD, kategori: 'Noodle & Pilav', sure: 30, tur: 'yemek',
    malzemeler: [
      ['Pirinç Noodle', '250 g'], ['Karides', '250 g (veya tavuk)'], ['Yumurta', '2 adet'],
      ['Havuç', '1 adet'], ['Taze Soğan', '3 dal'], ['Sarımsak', '3 diş'], ['Soya Sosu', '3 yemek kaşığı'],
      ['Misket Limonu', '1 adet'], ['Şeker', '1 tatlı kaşığı'], ['Yer Fıstığı', 'yarım su bardağı kavrulmuş'], ['Ayçiçek Yağı', '3 yemek kaşığı'],
    ],
    adimlar: [
      'Pirinç noodle\'ı sıcak (kaynar değil) suda 8-10 dakika, yumuşayıp esnekleşene kadar bekletin ve süzün.',
      'Sos: soya sosu, şeker ve yarım misket limonunun suyunu karıştırın.',
      'Tavayı kızdırıp 1 kaşık yağda karidesleri 2 dakika pişirin, kenara itin.',
      'Boş tarafa yumurtaları kırıp karıştırarak pişirin.',
      'Kalan yağ, sarımsak ve jülyen havucu ekleyip 1 dakika; sonra noodle ve sosu ekleyip 2-3 dakika, maşayla harmanlayarak pişirin.',
      'Kıyılmış taze soğanı karıştırın. Tabakta üzerine dövülmüş yer fıstığı serpin ve misket limonu dilimiyle servis edin — tatlı, ekşi, tuzlu dengesi Pad Thai\'ın büyüsüdür.',
    ],
  },
  {
    isim: 'Teriyaki Tavuk', mutfak: UD, kategori: 'Ana Yemekler', sure: 30, tur: 'yemek',
    malzemeler: [
      ['Tavuk Göğsü', '500 g (veya but)'], ['Soya Sosu', '5 yemek kaşığı'], ['Bal', '2 yemek kaşığı'],
      ['Sarımsak', '2 diş'], ['Zencefil', '1 parmak boyu'], ['Susam', '1 yemek kaşığı'],
      ['Taze Soğan', '2 dal'], ['Pirinç', 'servis için'], ['Ayçiçek Yağı', '2 yemek kaşığı'],
    ],
    adimlar: [
      'Teriyaki sosu: soya sosu, bal, rendelenmiş sarımsak ve zencefili küçük kasede karıştırın. Tatlı-tuzlu bu denge Japon mutfağının klasiğidir.',
      'Tavukları iri kuşbaşı doğrayın.',
      'Tavada yağı kızdırıp tavukları her tarafı kızarana kadar 6-7 dakika pişirin.',
      'Sosu tavaya dökün; orta ateşte, tavukları arada çevirerek pişirin.',
      'Sos 4-5 dakikada balçık gibi koyulaşıp tavukları parlak bir tabakayla kaplayacak — işte o an hazır demektir.',
      'Haşlanmış pirincin üzerine yerleştirin; susam ve kıyılmış taze soğan serperek servis edin.',
    ],
  },
  {
    isim: 'Sebzeli Wok', mutfak: UD, kategori: 'Ana Yemekler', sure: 25, tur: 'yemek',
    malzemeler: [
      ['Brokoli', 'yarım adet (300 g)'], ['Havuç', '2 adet'], ['Dolmalık Biber', '2 adet'],
      ['Mantar', '200 g'], ['Sarımsak', '3 diş'], ['Zencefil', '1 parmak boyu'],
      ['Soya Sosu', '4 yemek kaşığı'], ['Susam', '1 yemek kaşığı'], ['Ayçiçek Yağı', '3 yemek kaşığı'],
    ],
    adimlar: [
      'Bütün sebzeleri benzer boyutlarda, lokmalık doğrayın: brokoliyi çiçeklerine ayırın, havucu ince eğik dilimler, biberi şeritler, mantarı dörde bölün.',
      'Brokoliyi kaynar suda 2 dakika ön haşlayıp soğuk suya alın — rengi zümrüt yeşili kalır.',
      'Wok\'u (veya geniş tavayı) duman çıkana kadar kızdırın; yağı ekleyin.',
      'Önce havucu 2 dakika, sonra mantar ve biberi 2 dakika, en son brokoliyi ekleyip yüksek ateşte sürekli karıştırarak pişirin.',
      'Rendelenmiş sarımsak ve zencefili ekleyip 30 saniye çevirin.',
      'Soya sosunu kenardan gezdirip 1 dakika karıştırın. Sebzeler parlak ve diri olmalı — lapa sebze wok\'un düşmanıdır! Susam serpip servis edin.',
    ],
  },
  {
    isim: 'Karidesli Körili Pilav', mutfak: UD, kategori: 'Ana Yemekler', sure: 35, tur: 'yemek',
    malzemeler: [
      ['Karides', '400 g ayıklanmış'], ['Pirinç', '2 su bardağı (360 g)'], ['Soğan', '1 adet'],
      ['Sarımsak', '3 diş'], ['Köri', '1 yemek kaşığı'], ['Zerdeçal', '1 çay kaşığı'],
      ['Hindistan Cevizi Sütü', '1 kutu (400 ml)'], ['Ayçiçek Yağı', '3 yemek kaşığı'], ['Tuz', '1 tatlı kaşığı'],
    ],
    adimlar: [
      'Pirinci haşlayıp hazır tutun.',
      'Tavada yağı ısıtıp doğranmış soğanı 4 dakika yumuşatın; sarımsağı ekleyin.',
      'Köri ve zerdeçalı ekleyip 30 saniye, kokuları açılana kadar yağda kavurun — baharatı yağda uyandırmak köri yemeklerinin altın kuralıdır.',
      'Karidesleri ekleyip 2 dakika, pembeleşene kadar çevirin.',
      'Hindistan cevizi sütünü dökün; kısık ateşte 8-10 dakika, sos hafif koyulaşana kadar pişirin. Tuzlayın.',
      'Sosu pirincin üzerine bolca gezdirerek servis edin. Kremamsı, baharatlı, tropik bir kaçamak!',
    ],
  },
  {
    isim: 'Sebzeli Çorba (Uzak Doğu Usulü)', mutfak: UD, kategori: 'Çorba & Başlangıç', sure: 20, tur: 'yemek',
    malzemeler: [
      ['Mantar', '200 g'], ['Havuç', '1 adet'], ['Zencefil', '1 parmak boyu'], ['Sarımsak', '2 diş'],
      ['Taze Soğan', '3 dal'], ['Soya Sosu', '3 yemek kaşığı'], ['Lor Peyniri', '100 g (tofu yerine)'], ['Tuz', 'yarım çay kaşığı'],
    ],
    adimlar: [
      '6 su bardağı suyu (varsa sebze suyu) kaynatın.',
      'Mantarları ince dilimleyin, havucu yarım ay doğrayın; kaynayan suya ekleyin.',
      'Rendelenmiş zencefil ve sarımsağı ekleyip 5 dakika kaynatın — zencefil bu çorbanın ısıtan ruhudur.',
      'Soya sosunu ekleyin; tuz ihtiyacını sostan sonra kontrol edin.',
      'Küp doğranmış lor peynirini (tofu bulursanız onu kullanın) ekleyip 2 dakika ısıtın.',
      'Kaselere alıp bolca kıyılmış taze soğanla servis edin.',
    ],
  },
  {
    isim: 'Asya Usulü Tavuk Dürüm', mutfak: UD, kategori: 'Ana Yemekler', sure: 40, tur: 'yemek',
    malzemeler: [
      ['Tavuk Göğsü', '400 g'], ['Tortilla', '4 adet'], ['Salatalık', '1 adet'], ['Havuç', '1 adet'],
      ['Taze Soğan', '3 dal'], ['Soya Sosu', '4 yemek kaşığı'], ['Bal', '1 yemek kaşığı'],
      ['Zencefil', '1 çay kaşığı rendelenmiş'], ['Susam', '1 tatlı kaşığı'], ['Ayçiçek Yağı', '2 yemek kaşığı'],
    ],
    adimlar: [
      'Tavukları ince şeritler halinde kesin; soya sosu, bal ve zencefille 20 dakika marine edin.',
      'Salatalık ve havucu kibrit çöpü gibi ince uzun kesin; taze soğanı kıyın.',
      'Tavada yağı kızdırıp tavukları marine sosuyla birlikte 6-8 dakika, sos koyulaşıp tavuklara yapışana kadar pişirin.',
      'Tortillaları ısıtın.',
      'Her tortillaya tavuk, taze sebzeler ve susam koyup sıkıca sarın.',
      'İkiye kesip servis edin — çıtır sebzeyle tatlı-tuzlu tavuğun uyumu harika!',
    ],
  },
];
