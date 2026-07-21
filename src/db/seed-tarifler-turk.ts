// Türk Mutfağı tarifleri — kategorilere ayrılmış özgün seed verisi.
export interface SeedTarif {
  isim: string;
  mutfak: string;
  kategori: string;
  sure: number;
  tur: 'yemek' | 'kokteyl';
  adimlar: string[];
  malzemeler: string[];
}

const M = 'Türk Mutfağı';

export const TURK_TARIFLERI: SeedTarif[] = [
  // ─── ÇORBALAR ───
  {
    isim: 'Kırmızı Mercimek Çorbası', mutfak: M, kategori: 'Çorbalar', sure: 35, tur: 'yemek',
    adimlar: [
      'Yemeklik doğranmış soğanı 2 yemek kaşığı tereyağında pembeleşene kadar kavurun.',
      '1 yemek kaşığı salçayı ekleyip 1 dakika daha kavurun.',
      'Yıkanmış 1,5 su bardağı mercimeği ve doğranmış patatesi ekleyin, 6 su bardağı sıcak su koyun.',
      'Mercimekler dağılana kadar 25 dakika pişirin, blenderdan geçirin.',
      'Tuzunu ayarlayın; üzerine pul biberli tereyağı gezdirerek servis edin.',
    ],
    malzemeler: ['Kırmızı Mercimek', 'Soğan', 'Patates', 'Salça', 'Tereyağı', 'Tuz', 'Pul Biber'],
  },
  {
    isim: 'Ezogelin Çorbası', mutfak: M, kategori: 'Çorbalar', sure: 40, tur: 'yemek',
    adimlar: [
      'Soğanı ve sarımsağı tereyağında kavurun, salçayı ekleyip 1 dakika çevirin.',
      '1 su bardağı mercimek, yarım çay bardağı pirinç ve yarım çay bardağı ince bulguru ekleyin.',
      '7 su bardağı sıcak su ekleyip mercimekler yumuşayana kadar 30 dakika pişirin.',
      'Kuru nane ve pul biberi ekleyip 5 dakika daha kaynatın, tuzunu ayarlayın.',
    ],
    malzemeler: ['Kırmızı Mercimek', 'Pirinç', 'İnce Bulgur', 'Soğan', 'Sarımsak', 'Salça', 'Tereyağı', 'Kuru Nane', 'Pul Biber', 'Tuz'],
  },
  {
    isim: 'Yayla Çorbası', mutfak: M, kategori: 'Çorbalar', sure: 35, tur: 'yemek',
    adimlar: [
      'Yarım su bardağı pirinci 5 su bardağı suda yumuşayana kadar haşlayın.',
      'Bir kasede yoğurt, yumurta sarısı ve 1 yemek kaşığı unu pürüzsüzce çırpın.',
      'Kaynayan çorbadan bir kepçe alıp yoğurtlu karışıma ekleyerek ılıştırın, sonra karışımı tencereye dökün.',
      'Sürekli karıştırarak bir taşım kaynatın; üzerine naneli tereyağı gezdirin.',
    ],
    malzemeler: ['Pirinç', 'Yoğurt', 'Yumurta', 'Un', 'Tereyağı', 'Kuru Nane', 'Tuz'],
  },
  {
    isim: 'Tarhana Çorbası', mutfak: M, kategori: 'Çorbalar', sure: 25, tur: 'yemek',
    adimlar: [
      '3 yemek kaşığı tarhanayı 1 su bardağı ılık suda 10 dakika bekletip ezin.',
      'Tencerede tereyağını eritip salçayı kavurun.',
      'Açılmış tarhanayı ve 4 su bardağı sıcak suyu ekleyin.',
      'Sürekli karıştırarak koyulaşana kadar 10-15 dakika pişirin, tuzunu ayarlayın.',
    ],
    malzemeler: ['Tarhana', 'Salça', 'Tereyağı', 'Tuz', 'Pul Biber'],
  },
  {
    isim: 'Domates Çorbası', mutfak: M, kategori: 'Çorbalar', sure: 30, tur: 'yemek',
    adimlar: [
      'Tereyağında 2 yemek kaşığı unu kokusu çıkana kadar kavurun.',
      'Rendelenmiş 5 domatesi ekleyip suyunu çekene kadar pişirin.',
      '4 su bardağı sıcak su ekleyip blenderdan geçirin, 10 dakika kaynatın.',
      'Tuz ve karabiberle tatlandırın; rendelenmiş kaşarla servis edin.',
    ],
    malzemeler: ['Domates', 'Un', 'Tereyağı', 'Kaşar Peyniri', 'Tuz', 'Karabiber'],
  },
  {
    isim: 'Şehriyeli Tavuk Çorbası', mutfak: M, kategori: 'Çorbalar', sure: 40, tur: 'yemek',
    adimlar: [
      'Tavuk göğsünü 6 su bardağı suda haşlayıp didikleyin, suyunu süzüp saklayın.',
      'Tereyağında 1 yemek kaşığı unu kavurup tavuk suyunu azar azar ekleyin.',
      'Yarım su bardağı tel şehriyeyi ve didiklenmiş tavuğu ekleyin.',
      'Şehriyeler yumuşayana kadar 10 dakika pişirin; limon sıkarak servis edin.',
    ],
    malzemeler: ['Tavuk Göğsü', 'Tel Şehriye', 'Un', 'Tereyağı', 'Limon', 'Tuz', 'Karabiber'],
  },
  {
    isim: 'Mantar Çorbası', mutfak: M, kategori: 'Çorbalar', sure: 30, tur: 'yemek',
    adimlar: [
      'Doğranmış mantarları tereyağında suyunu salıp çekene kadar soteleyin.',
      '1 yemek kaşığı un ekleyip 2 dakika kavurun.',
      '4 su bardağı sıcak su ekleyip 10 dakika kaynatın, blenderdan geçirin.',
      'Kremayı ekleyip bir taşım kaynatın; tuz ve karabiberle tatlandırın.',
    ],
    malzemeler: ['Mantar', 'Un', 'Tereyağı', 'Krema', 'Tuz', 'Karabiber'],
  },
  {
    isim: 'Sebze Çorbası', mutfak: M, kategori: 'Çorbalar', sure: 35, tur: 'yemek',
    adimlar: [
      'Küp doğranmış havuç, patates ve kabağı tereyağında 5 dakika soteleyin.',
      '5 su bardağı sıcak su ekleyip sebzeler yumuşayana kadar pişirin.',
      'Dilerseniz blenderdan geçirin ya da taneli bırakın.',
      'Tuz ve karabiberle tatlandırıp maydanozla servis edin.',
    ],
    malzemeler: ['Havuç', 'Patates', 'Kabak', 'Tereyağı', 'Maydanoz', 'Tuz', 'Karabiber'],
  },
  {
    isim: 'Düğün Çorbası', mutfak: M, kategori: 'Çorbalar', sure: 60, tur: 'yemek',
    adimlar: [
      'Kuşbaşı eti düdüklüde yumuşayana kadar haşlayın, suyunu saklayın.',
      'Yoğurt, yumurta sarısı ve unu çırpıp et suyuyla ılıştırarak tencereye ekleyin.',
      'Haşlanmış etleri ekleyip karıştırarak bir taşım kaynatın.',
      'Üzerine kızdırılmış pul biberli tereyağı gezdirerek servis edin.',
    ],
    malzemeler: ['Kuşbaşı Et', 'Yoğurt', 'Yumurta', 'Un', 'Tereyağı', 'Pul Biber', 'Tuz'],
  },
  {
    isim: 'Yoğurtlu Yeşil Mercimek Çorbası', mutfak: M, kategori: 'Çorbalar', sure: 40, tur: 'yemek',
    adimlar: [
      '1 su bardağı yeşil mercimeği yumuşayana kadar haşlayın.',
      'Erişteyi ekleyip 10 dakika daha pişirin.',
      'Sarımsaklı yoğurdu çorbadan aldığınız suyla ılıştırıp tencereye ekleyin.',
      'Karıştırarak bir taşım kaynatın; naneli tereyağıyla servis edin.',
    ],
    malzemeler: ['Yeşil Mercimek', 'Erişte', 'Yoğurt', 'Sarımsak', 'Tereyağı', 'Kuru Nane', 'Tuz'],
  },

  // ─── ET YEMEKLERİ ───
  {
    isim: 'Karnıyarık', mutfak: M, kategori: 'Et Yemekleri', sure: 50, tur: 'yemek',
    adimlar: [
      'Alacalı soyduğunuz patlıcanları bolca yağda kızartıp kağıt havluya alın.',
      'Kıymayı soğan ve sarımsakla kavurun; doğranmış domates, salça, tuz ve karabiberi ekleyip pişirin.',
      'Patlıcanların ortasını yarıp iç harcı doldurun, üzerlerine domates ve sivri biber yerleştirin.',
      'Yarım su bardağı sıcak su ekleyip 180 derece fırında 25 dakika pişirin.',
    ],
    malzemeler: ['Patlıcan', 'Kıyma', 'Soğan', 'Sarımsak', 'Domates', 'Sivri Biber', 'Salça', 'Ayçiçek Yağı', 'Tuz', 'Karabiber'],
  },
  {
    isim: 'İzmir Köfte', mutfak: M, kategori: 'Et Yemekleri', sure: 55, tur: 'yemek',
    adimlar: [
      'Kıyma, rendelenmiş soğan, yumurta, galeta unu, tuz ve kimyonu yoğurup köfte şekli verin.',
      'Köfteleri tavada mühürleyin; patatesleri elma dilimi doğrayıp hafif kızartın.',
      'Fırın kabına köfte, patates ve domates-biber dilimlerini dizin.',
      'Salçalı 1,5 su bardağı sıcak suyu dökün ve 190 derece fırında 25 dakika pişirin.',
    ],
    malzemeler: ['Kıyma', 'Soğan', 'Yumurta', 'Galeta Unu', 'Patates', 'Domates', 'Sivri Biber', 'Salça', 'Kimyon', 'Tuz', 'Karabiber'],
  },
  {
    isim: 'Tas Kebabı', mutfak: M, kategori: 'Et Yemekleri', sure: 75, tur: 'yemek',
    adimlar: [
      'Kuşbaşı eti tereyağında suyunu salıp çekene kadar kavurun.',
      'Doğranmış soğan ve sarımsağı ekleyip yumuşatın; salçayı ilave edin.',
      'Küp doğranmış patates, havuç ve dolmalık biberi ekleyin.',
      'Etleri geçecek kadar sıcak su ekleyip kısık ateşte 45 dakika pişirin; pilavla servis edin.',
    ],
    malzemeler: ['Kuşbaşı Et', 'Soğan', 'Sarımsak', 'Patates', 'Havuç', 'Dolmalık Biber', 'Salça', 'Tereyağı', 'Tuz', 'Karabiber'],
  },
  {
    isim: 'Etli Kuru Fasulye', mutfak: M, kategori: 'Et Yemekleri', sure: 90, tur: 'yemek',
    adimlar: [
      'Bir gece ıslattığınız fasulyeleri suyunu değiştirerek yarı yumuşayana kadar haşlayın.',
      'Kuşbaşı eti tereyağında kavurun; soğanı ve salçayı ekleyip çevirin.',
      'Fasulyeleri ve 3 su bardağı sıcak suyu ekleyin.',
      'Kısık ateşte fasulyeler iyice yumuşayana kadar 40 dakika pişirin; pilav ve turşuyla servis edin.',
    ],
    malzemeler: ['Kuru Fasulye', 'Kuşbaşı Et', 'Soğan', 'Salça', 'Tereyağı', 'Pul Biber', 'Tuz'],
  },
  {
    isim: 'Orman Kebabı', mutfak: M, kategori: 'Et Yemekleri', sure: 70, tur: 'yemek',
    adimlar: [
      'Kuşbaşı eti zeytinyağında mühürleyip arpacık soğanları ekleyin.',
      'İri doğranmış havuç, patates ve bezelyeyi ilave edin.',
      'Salça ve baharatları ekleyip 2 su bardağı sıcak su koyun.',
      'Kısık ateşte sebzeler ve et yumuşayana kadar 45 dakika pişirin.',
    ],
    malzemeler: ['Kuşbaşı Et', 'Kuru Soğan (Arpacık)', 'Havuç', 'Patates', 'Bezelye', 'Salça', 'Zeytinyağı', 'Kekik', 'Tuz', 'Karabiber'],
  },
  {
    isim: 'Hünkar Beğendi', mutfak: M, kategori: 'Et Yemekleri', sure: 80, tur: 'yemek',
    adimlar: [
      'Kuşbaşı eti soğan ve salçayla kavurup az suyla yumuşayana kadar pişirin.',
      'Patlıcanları közleyip kabuklarını soyun ve doğrayın.',
      'Tereyağında unu kavurup sütü ekleyin; közlenmiş patlıcanı ve rendelenmiş kaşarı katıp beğendiyi hazırlayın.',
      'Tabağa önce beğendiyi yayıp üzerine etli harcı paylaştırın.',
    ],
    malzemeler: ['Kuşbaşı Et', 'Patlıcan', 'Soğan', 'Salça', 'Un', 'Süt', 'Tereyağı', 'Kaşar Peyniri', 'Tuz', 'Karabiber'],
  },
  {
    isim: 'Etli Biber Dolması', mutfak: M, kategori: 'Et Yemekleri', sure: 60, tur: 'yemek',
    adimlar: [
      'Kıyma, yıkanmış pirinç, rendelenmiş soğan, salça, maydanoz ve baharatları karıştırın.',
      'Çekirdeklerini çıkardığınız dolmalık biberlere harcı gevşek şekilde doldurun.',
      'Ağızlarını domates dilimiyle kapatıp tencereye dizin.',
      'Salçalı sıcak suyu ekleyip kısık ateşte 40 dakika pişirin; yoğurtla servis edin.',
    ],
    malzemeler: ['Dolmalık Biber', 'Kıyma', 'Pirinç', 'Soğan', 'Domates', 'Salça', 'Maydanoz', 'Yoğurt', 'Tuz', 'Karabiber'],
  },
  {
    isim: 'Lahana Sarması', mutfak: M, kategori: 'Et Yemekleri', sure: 80, tur: 'yemek',
    adimlar: [
      'Lahana yapraklarını kaynar suda 3-4 dakika haşlayıp yumuşatın.',
      'Kıyma, pirinç, soğan, salça ve baharatları karıştırarak iç harcı hazırlayın.',
      'Yaprakları uygun boyda kesip harcı koyarak sıkıca sarın ve tencereye dizin.',
      'Üzerine salçalı su ekleyip ağırlık koyun; kısık ateşte 50 dakika pişirin.',
    ],
    malzemeler: ['Lahana', 'Kıyma', 'Pirinç', 'Soğan', 'Salça', 'Tereyağı', 'Pul Biber', 'Tuz', 'Karabiber'],
  },
  {
    isim: 'Patlıcan Musakka', mutfak: M, kategori: 'Et Yemekleri', sure: 55, tur: 'yemek',
    adimlar: [
      'Kızarttığınız patlıcan dilimlerini fırın kabına dizin.',
      'Kıymayı soğan, sarımsak ve salçayla kavurun; doğranmış domatesi ekleyip pişirin.',
      'Harcı patlıcanların üzerine yayın, yarım su bardağı sıcak su ekleyin.',
      '180 derece fırında 20 dakika pişirin; maydanozla servis edin.',
    ],
    malzemeler: ['Patlıcan', 'Kıyma', 'Soğan', 'Sarımsak', 'Domates', 'Salça', 'Ayçiçek Yağı', 'Maydanoz', 'Tuz', 'Karabiber'],
  },
  {
    isim: 'Kuzu İncik Haşlama', mutfak: M, kategori: 'Et Yemekleri', sure: 120, tur: 'yemek',
    adimlar: [
      'İncikleri tencereye alıp üzerini geçecek kadar su ekleyin, köpüğünü alarak haşlayın.',
      'İri doğranmış soğan, havuç, patates ve defne yaprağını ekleyin.',
      'Kısık ateşte et kemikten ayrılacak kıvama gelene kadar 1,5 saat pişirin.',
      'Tuz ve karabiberle tatlandırıp haşlama suyuyla servis edin.',
    ],
    malzemeler: ['Kuzu İncik', 'Soğan', 'Havuç', 'Patates', 'Defne Yaprağı', 'Tuz', 'Karabiber'],
  },
  {
    isim: 'Dana Rosto', mutfak: M, kategori: 'Et Yemekleri', sure: 100, tur: 'yemek',
    adimlar: [
      'Rosto etini tencerede zeytinyağıyla her tarafı mühürlenene kadar çevirin.',
      'Soğan, havuç ve sarımsağı ekleyip 5 dakika soteleyin.',
      'Salça ve 3 su bardağı sıcak su ekleyip kapağı kapatın; kısık ateşte 1,5 saat pişirin.',
      'Dinlendirip dilimleyin; süzdüğünüz sosuyla ve patates püresiyle servis edin.',
    ],
    malzemeler: ['Dana Rosto Eti', 'Soğan', 'Havuç', 'Sarımsak', 'Salça', 'Zeytinyağı', 'Tuz', 'Karabiber'],
  },
  {
    isim: 'Sulu Köfte', mutfak: M, kategori: 'Et Yemekleri', sure: 50, tur: 'yemek',
    adimlar: [
      'Kıyma, ince bulgur, rendelenmiş soğan ve baharatları yoğurup fındık büyüklüğünde köfteler yapın.',
      'Tencerede salçayı tereyağında kavurup 5 su bardağı sıcak su ekleyin.',
      'Kaynayan suya köfteleri ve küp patatesleri bırakın.',
      'Köfteler pişene kadar 25 dakika kaynatın; maydanoz serperek servis edin.',
    ],
    malzemeler: ['Kıyma', 'İnce Bulgur', 'Soğan', 'Patates', 'Salça', 'Tereyağı', 'Maydanoz', 'Tuz', 'Karabiber', 'Kimyon'],
  },

  // ─── TAVUK YEMEKLERİ ───
  {
    isim: 'Tavuk Sote', mutfak: M, kategori: 'Tavuk Yemekleri', sure: 35, tur: 'yemek',
    adimlar: [
      'Kuşbaşı doğranmış tavukları kızgın yağda suyunu çekene kadar soteleyin.',
      'Doğranmış soğan, sarımsak ve biberleri ekleyip yumuşatın.',
      'Küp domates ve salçayı ekleyin; tuz, karabiber ve kekikle tatlandırın.',
      'Kapağı kapatıp kısık ateşte 15 dakika pişirin; pilavla servis edin.',
    ],
    malzemeler: ['Tavuk Göğsü', 'Soğan', 'Sarımsak', 'Sivri Biber', 'Domates', 'Salça', 'Ayçiçek Yağı', 'Kekik', 'Tuz', 'Karabiber'],
  },
  {
    isim: 'Fırında Bütün Tavuk', mutfak: M, kategori: 'Tavuk Yemekleri', sure: 90, tur: 'yemek',
    adimlar: [
      'Tavuğun içini ve dışını tuz, karabiber, kekik ve zeytinyağıyla ovun.',
      'Fırın tepsisine iri doğranmış patates ve havuçları dizin, tavuğu üstüne yerleştirin.',
      'Üzerini folyoyla kapatıp 190 derece fırında 1 saat pişirin.',
      'Folyoyu açıp 20 dakika daha kızartın; dinlendirip servis edin.',
    ],
    malzemeler: ['Bütün Tavuk', 'Patates', 'Havuç', 'Zeytinyağı', 'Kekik', 'Tuz', 'Karabiber'],
  },
  {
    isim: 'Tavuk Şiş', mutfak: M, kategori: 'Tavuk Yemekleri', sure: 45, tur: 'yemek',
    adimlar: [
      'Kuşbaşı tavukları yoğurt, zeytinyağı, salça, sarımsak ve baharatlarla karıştırıp 2 saat marine edin.',
      'Tavukları biber ve domatesle dönüşümlü olarak şişlere dizin.',
      'Izgara veya döküm tavada her yüzünü 4-5 dakika pişirin.',
      'Lavaş ve közlenmiş sebzelerle servis edin.',
    ],
    malzemeler: ['Tavuk Göğsü', 'Yoğurt', 'Salça', 'Sarımsak', 'Dolmalık Biber', 'Domates', 'Zeytinyağı', 'Kekik', 'Pul Biber', 'Tuz'],
  },
  {
    isim: 'Kremalı Mantarlı Tavuk', mutfak: M, kategori: 'Tavuk Yemekleri', sure: 40, tur: 'yemek',
    adimlar: [
      'Baget doğranmış tavukları tereyağında soteleyip tabağa alın.',
      'Aynı tavada dilimlenmiş mantarları suyunu çekene kadar pişirin.',
      'Tavukları geri ekleyin; krema ve rendelenmiş kaşarı ilave edin.',
      'Kısık ateşte 10 dakika, sos koyulaşana kadar pişirin; makarnayla servis edin.',
    ],
    malzemeler: ['Tavuk Göğsü', 'Mantar', 'Krema', 'Kaşar Peyniri', 'Tereyağı', 'Sarımsak', 'Tuz', 'Karabiber'],
  },
  {
    isim: 'Tavuk Kapama', mutfak: M, kategori: 'Tavuk Yemekleri', sure: 70, tur: 'yemek',
    adimlar: [
      'Tavuk butlarını tencerede zeytinyağıyla mühürleyin.',
      'Arpacık soğan, havuç ve bezelyeyi ekleyin.',
      '1 su bardağı sıcak su ekleyip kapağı kapatın; kısık ateşte 45 dakika pişirin.',
      'Tuz ve karabiberle tatlandırıp pilavla servis edin.',
    ],
    malzemeler: ['Tavuk But', 'Kuru Soğan (Arpacık)', 'Havuç', 'Bezelye', 'Zeytinyağı', 'Tuz', 'Karabiber'],
  },
  {
    isim: 'Sebzeli Tavuk Güveç', mutfak: M, kategori: 'Tavuk Yemekleri', sure: 75, tur: 'yemek',
    adimlar: [
      'Kuşbaşı tavuk, patlıcan, kabak, patates, biber ve domatesi iri doğrayın.',
      'Tüm malzemeyi zeytinyağı, salça, sarımsak ve baharatlarla harmanlayın.',
      'Güveç kabına alıp yarım su bardağı sıcak su ekleyin.',
      'Üzeri kapalı şekilde 200 derece fırında 1 saat pişirin.',
    ],
    malzemeler: ['Tavuk Göğsü', 'Patlıcan', 'Kabak', 'Patates', 'Sivri Biber', 'Domates', 'Sarımsak', 'Salça', 'Zeytinyağı', 'Kekik', 'Tuz'],
  },
  {
    isim: 'Izgara Tavuk Pirzola', mutfak: M, kategori: 'Tavuk Yemekleri', sure: 30, tur: 'yemek',
    adimlar: [
      'Tavuk butlarını zeytinyağı, sarımsak, kekik ve pul biberle marine edin.',
      'Izgarayı iyice kızdırın.',
      'Her yüzünü 5-6 dakika, içi pişene kadar ızgarada pişirin.',
      'Roka ve limonla servis edin.',
    ],
    malzemeler: ['Tavuk But', 'Zeytinyağı', 'Sarımsak', 'Kekik', 'Pul Biber', 'Roka', 'Limon', 'Tuz'],
  },
  {
    isim: 'Tavuklu Pilav', mutfak: M, kategori: 'Tavuk Yemekleri', sure: 50, tur: 'yemek',
    adimlar: [
      'Tavuğu haşlayıp didikleyin, suyunu süzüp saklayın.',
      'Tereyağında şehriyeyi pembeleşene kadar kavurun, yıkanmış pirinci ekleyip 2 dakika çevirin.',
      'Pirincin 1,5 katı tavuk suyu ekleyip kısık ateşte suyunu çekene kadar pişirin.',
      'Didiklenmiş tavukları ekleyip 10 dakika demlendirin.',
    ],
    malzemeler: ['Tavuk Göğsü', 'Pirinç', 'Tel Şehriye', 'Tereyağı', 'Tuz', 'Karabiber'],
  },

  // ─── ZEYTİNYAĞLILAR & SEBZE ───
  {
    isim: 'İmam Bayıldı', mutfak: M, kategori: 'Zeytinyağlılar & Sebze', sure: 60, tur: 'yemek',
    adimlar: [
      'Alacalı soyduğunuz patlıcanları zeytinyağında hafifçe kızartın.',
      'Bol soğan ve sarımsağı zeytinyağında yumuşatın; domates ve maydanozu ekleyin.',
      'Patlıcanları yarıp iç harcı doldurun ve tencereye dizin.',
      'Az su ve zeytinyağı ekleyip kısık ateşte 30 dakika pişirin; soğuk servis edin.',
    ],
    malzemeler: ['Patlıcan', 'Soğan', 'Sarımsak', 'Domates', 'Maydanoz', 'Zeytinyağı', 'Şeker', 'Tuz'],
  },
  {
    isim: 'Zeytinyağlı Taze Fasulye', mutfak: M, kategori: 'Zeytinyağlılar & Sebze', sure: 50, tur: 'yemek',
    adimlar: [
      'Soğanı zeytinyağında yumuşayana kadar kavurun.',
      'Ayıklanmış fasulyeleri ekleyip 5 dakika çevirin.',
      'Rendelenmiş domates, şeker ve tuzu ekleyin; 1 su bardağı sıcak su koyun.',
      'Kısık ateşte fasulyeler yumuşayana kadar 35 dakika pişirin; soğuk servis edin.',
    ],
    malzemeler: ['Taze Fasulye', 'Soğan', 'Domates', 'Zeytinyağı', 'Şeker', 'Tuz'],
  },
  {
    isim: 'Zeytinyağlı Yaprak Sarma', mutfak: M, kategori: 'Zeytinyağlılar & Sebze', sure: 90, tur: 'yemek',
    adimlar: [
      'Pirinci; kavrulmuş soğan, çam fıstığı, kuru üzüm, baharat ve zeytinyağıyla karıştırın.',
      'Haşlanmış asma yapraklarına harcı koyup ince ince sarın.',
      'Sarmaları tencereye sıkıca dizin, üzerine limon dilimleri koyun.',
      'Zeytinyağlı su ekleyip ağırlık koyun; kısık ateşte 45 dakika pişirin.',
    ],
    malzemeler: ['Asma Yaprağı', 'Pirinç', 'Soğan', 'Çam Fıstığı', 'Kuru Üzüm', 'Zeytinyağı', 'Limon', 'Tarçın', 'Tuz', 'Karabiber'],
  },
  {
    isim: 'Zeytinyağlı Enginar', mutfak: M, kategori: 'Zeytinyağlılar & Sebze', sure: 45, tur: 'yemek',
    adimlar: [
      'Enginarları limonlu suda bekletin.',
      'Tencereye enginarları yerleştirip içlerine küp havuç, patates ve bezelye doldurun.',
      'Zeytinyağı, limon suyu, şeker ve 1,5 su bardağı su ekleyin.',
      'Kısık ateşte enginarlar yumuşayana kadar 30 dakika pişirin; dereotuyla soğuk servis edin.',
    ],
    malzemeler: ['Enginar', 'Havuç', 'Patates', 'Bezelye', 'Zeytinyağı', 'Limon', 'Şeker', 'Dereotu', 'Tuz'],
  },
  {
    isim: 'Zeytinyağlı Barbunya', mutfak: M, kategori: 'Zeytinyağlılar & Sebze', sure: 60, tur: 'yemek',
    adimlar: [
      'Islatılmış barbunyaları yarı yumuşayana kadar haşlayın.',
      'Soğan ve havucu zeytinyağında kavurun; domates ve salçayı ekleyin.',
      'Barbunyaları ve 2 su bardağı sıcak suyu ekleyin.',
      'Kısık ateşte 30 dakika pişirin; limon ve maydanozla soğuk servis edin.',
    ],
    malzemeler: ['Barbunya', 'Soğan', 'Havuç', 'Domates', 'Salça', 'Zeytinyağı', 'Limon', 'Maydanoz', 'Şeker', 'Tuz'],
  },
  {
    isim: 'Kabak Mücver', mutfak: M, kategori: 'Zeytinyağlılar & Sebze', sure: 30, tur: 'yemek',
    adimlar: [
      'Kabakları rendeleyip tuzlayın ve suyunu iyice sıkın.',
      'Yumurta, un, beyaz peynir, dereotu ve taze soğanla karıştırın.',
      'Kızgın yağa kaşıkla harç döküp iki yüzünü de altın rengi olana kadar kızartın.',
      'Kağıt havluya alıp yoğurtla sıcak servis edin.',
    ],
    malzemeler: ['Kabak', 'Yumurta', 'Un', 'Beyaz Peynir', 'Dereotu', 'Taze Soğan', 'Ayçiçek Yağı', 'Yoğurt', 'Tuz', 'Karabiber'],
  },
  {
    isim: 'Ispanak Yemeği', mutfak: M, kategori: 'Zeytinyağlılar & Sebze', sure: 35, tur: 'yemek',
    adimlar: [
      'Soğanı zeytinyağında kavurup salçayı ekleyin.',
      'Yıkanıp doğranmış ıspanakları ekleyin ve suyunu salmasını bekleyin.',
      'Yıkanmış pirinci ve az sıcak su ekleyin.',
      'Kısık ateşte pirinçler yumuşayana kadar 20 dakika pişirin; sarımsaklı yoğurtla servis edin.',
    ],
    malzemeler: ['Ispanak', 'Soğan', 'Pirinç', 'Salça', 'Zeytinyağı', 'Yoğurt', 'Sarımsak', 'Tuz'],
  },
  {
    isim: 'Zeytinyağlı Pırasa', mutfak: M, kategori: 'Zeytinyağlılar & Sebze', sure: 45, tur: 'yemek',
    adimlar: [
      'Pırasaları yıkayıp 2 cm kalınlığında doğrayın.',
      'Zeytinyağında doğranmış havuçla birlikte 5 dakika çevirin.',
      'Pirinç, şeker, tuz ve 1 su bardağı sıcak su ekleyin.',
      'Kısık ateşte pırasalar yumuşayana kadar 30 dakika pişirin; limonla soğuk servis edin.',
    ],
    malzemeler: ['Pırasa', 'Havuç', 'Pirinç', 'Zeytinyağı', 'Limon', 'Şeker', 'Tuz'],
  },
  {
    isim: 'Türlü', mutfak: M, kategori: 'Zeytinyağlılar & Sebze', sure: 60, tur: 'yemek',
    adimlar: [
      'Patlıcan, kabak, patates, taze fasulye ve biberleri iri doğrayın.',
      'Soğanı zeytinyağında kavurup salçayı ekleyin.',
      'Tüm sebzeleri ve rendelenmiş domatesi ekleyin.',
      'Az sıcak suyla kısık ateşte sebzeler yumuşayana kadar 40 dakika pişirin.',
    ],
    malzemeler: ['Patlıcan', 'Kabak', 'Patates', 'Taze Fasulye', 'Sivri Biber', 'Soğan', 'Domates', 'Salça', 'Zeytinyağı', 'Tuz'],
  },

  // ─── SALATALAR & MEZELER ───
  {
    isim: 'Çoban Salatası', mutfak: M, kategori: 'Salatalar & Mezeler', sure: 15, tur: 'yemek',
    adimlar: [
      'Domates, salatalık, biber ve soğanı küçük küpler halinde doğrayın.',
      'İnce kıyılmış maydanozu ekleyin.',
      'Zeytinyağı, limon suyu ve tuzla harmanlayın.',
      'Soğuk olarak hemen servis edin.',
    ],
    malzemeler: ['Domates', 'Salatalık', 'Sivri Biber', 'Soğan', 'Maydanoz', 'Zeytinyağı', 'Limon', 'Tuz'],
  },
  {
    isim: 'Gavurdağı Salatası', mutfak: M, kategori: 'Salatalar & Mezeler', sure: 20, tur: 'yemek',
    adimlar: [
      'Domates, soğan ve biberi çok küçük küpler halinde doğrayın.',
      'İri çekilmiş cevizi ve kıyılmış maydanozu ekleyin.',
      'Nar ekşisi, zeytinyağı, sumak ve tuzla harmanlayın.',
      'Kebapların yanında servis edin.',
    ],
    malzemeler: ['Domates', 'Soğan', 'Sivri Biber', 'Ceviz', 'Maydanoz', 'Nar Ekşisi', 'Zeytinyağı', 'Sumak', 'Tuz'],
  },
  {
    isim: 'Piyaz', mutfak: M, kategori: 'Salatalar & Mezeler', sure: 30, tur: 'yemek',
    adimlar: [
      'Haşlanmış kuru fasulyeyi geniş bir kaba alın.',
      'Piyazlık doğranmış soğan, domates ve maydanozu ekleyin.',
      'Zeytinyağı, sirke ve sumakla harmanlayın.',
      'Üzerine haşlanmış yumurta dilimleri koyup servis edin.',
    ],
    malzemeler: ['Kuru Fasulye', 'Soğan', 'Domates', 'Maydanoz', 'Yumurta', 'Zeytinyağı', 'Sirke', 'Sumak', 'Tuz'],
  },
  {
    isim: 'Haydari', mutfak: M, kategori: 'Salatalar & Mezeler', sure: 10, tur: 'yemek',
    adimlar: [
      'Süzme yoğurdu bir kaba alın.',
      'Ezilmiş sarımsak, kuru nane ve zeytinyağını ekleyin.',
      'Pürüzsüz olana kadar karıştırın.',
      'Üzerine zeytinyağı gezdirip pul biber serperek servis edin.',
    ],
    malzemeler: ['Süzme Yoğurt', 'Sarımsak', 'Kuru Nane', 'Zeytinyağı', 'Pul Biber', 'Tuz'],
  },
  {
    isim: 'Cacık', mutfak: M, kategori: 'Salatalar & Mezeler', sure: 10, tur: 'yemek',
    adimlar: [
      'Yoğurdu su ile açıp pürüzsüzleştirin.',
      'Rendelenmiş veya küp doğranmış salatalığı ekleyin.',
      'Ezilmiş sarımsak, tuz ve kuru naneyi karıştırın.',
      'Üzerine zeytinyağı gezdirip soğuk servis edin.',
    ],
    malzemeler: ['Yoğurt', 'Salatalık', 'Sarımsak', 'Kuru Nane', 'Zeytinyağı', 'Tuz'],
  },
  {
    isim: 'Kısır', mutfak: M, kategori: 'Salatalar & Mezeler', sure: 30, tur: 'yemek',
    adimlar: [
      'İnce bulgurun üzerine kaynar su döküp kapağını kapatın, 15 dakika şişmesini bekleyin.',
      'Salça, zeytinyağı ve baharatları ekleyip yoğurun.',
      'İnce doğranmış maydanoz, taze soğan ve domatesi ekleyin.',
      'Nar ekşisi ve limonla tatlandırıp marul yapraklarıyla servis edin.',
    ],
    malzemeler: ['İnce Bulgur', 'Salça', 'Maydanoz', 'Taze Soğan', 'Domates', 'Nar Ekşisi', 'Limon', 'Zeytinyağı', 'Pul Biber', 'Tuz', 'Marul'],
  },
  {
    isim: 'Mercimek Köftesi', mutfak: M, kategori: 'Salatalar & Mezeler', sure: 45, tur: 'yemek',
    adimlar: [
      'Kırmızı mercimeği 2,5 su bardağı suda suyunu çekene kadar haşlayın.',
      'Ocaktan alıp ince bulguru ekleyin ve kapağı kapalı 20 dakika bekletin.',
      'Kavrulmuş soğan, salça, baharatlar ve ince kıyılmış yeşillikleri ekleyip yoğurun.',
      'Elinizle şekil verip marul yapraklarıyla ve limonla servis edin.',
    ],
    malzemeler: ['Kırmızı Mercimek', 'İnce Bulgur', 'Soğan', 'Salça', 'Maydanoz', 'Taze Soğan', 'Zeytinyağı', 'Pul Biber', 'Kimyon', 'Tuz', 'Marul', 'Limon'],
  },
  {
    isim: 'Acılı Ezme', mutfak: M, kategori: 'Salatalar & Mezeler', sure: 20, tur: 'yemek',
    adimlar: [
      'Domates, biber, soğan, sarımsak ve maydanozu çok ince kıyın (veya çekin).',
      'Salça, nar ekşisi ve zeytinyağını ekleyin.',
      'Pul biber, sumak ve tuzla tatlandırıp iyice karıştırın.',
      'Buzdolabında 1 saat dinlendirip servis edin.',
    ],
    malzemeler: ['Domates', 'Sivri Biber', 'Soğan', 'Sarımsak', 'Maydanoz', 'Salça', 'Nar Ekşisi', 'Zeytinyağı', 'Pul Biber', 'Sumak', 'Tuz'],
  },
  {
    isim: 'Patates Salatası', mutfak: M, kategori: 'Salatalar & Mezeler', sure: 35, tur: 'yemek',
    adimlar: [
      'Patatesleri haşlayıp soyun ve küp küp doğrayın.',
      'İnce doğranmış taze soğan, maydanoz ve dereotunu ekleyin.',
      'Zeytinyağı, limon suyu ve baharatlarla harmanlayın.',
      'Oda sıcaklığında veya soğuk servis edin.',
    ],
    malzemeler: ['Patates', 'Taze Soğan', 'Maydanoz', 'Dereotu', 'Zeytinyağı', 'Limon', 'Pul Biber', 'Tuz'],
  },
  {
    isim: 'Semizotu Salatası', mutfak: M, kategori: 'Salatalar & Mezeler', sure: 15, tur: 'yemek',
    adimlar: [
      'Semizotlarını ayıklayıp yıkayın ve iri doğrayın.',
      'Yoğurt ve ezilmiş sarımsağı karıştırın.',
      'Semizotlarını yoğurtlu sosla harmanlayın.',
      'Zeytinyağı gezdirip soğuk servis edin.',
    ],
    malzemeler: ['Semizotu', 'Yoğurt', 'Sarımsak', 'Zeytinyağı', 'Tuz'],
  },

  // ─── PİLAV & MAKARNA ───
  {
    isim: 'Tereyağlı Pirinç Pilavı', mutfak: M, kategori: 'Pilav & Makarna', sure: 30, tur: 'yemek',
    adimlar: [
      'Pirinci tuzlu ılık suda 20 dakika bekletip yıkayın.',
      'Tereyağında şehriyeyi pembeleşene kadar kavurun.',
      'Pirinci ekleyip 2 dakika çevirin; 1,5 kat sıcak su ve tuz ekleyin.',
      'Kısık ateşte suyunu çekene kadar pişirip 10 dakika demlendirin.',
    ],
    malzemeler: ['Pirinç', 'Tel Şehriye', 'Tereyağı', 'Tuz'],
  },
  {
    isim: 'Bulgur Pilavı', mutfak: M, kategori: 'Pilav & Makarna', sure: 30, tur: 'yemek',
    adimlar: [
      'Soğan ve biberi tereyağında yumuşatın; salçayı ekleyip kavurun.',
      'Doğranmış domatesi ekleyip 3 dakika pişirin.',
      'Yıkanmış bulguru ve 2 kat sıcak suyu ekleyin.',
      'Kısık ateşte suyunu çekene kadar pişirip demlendirin.',
    ],
    malzemeler: ['Bulgur', 'Soğan', 'Sivri Biber', 'Domates', 'Salça', 'Tereyağı', 'Tuz'],
  },
  {
    isim: 'İç Pilav', mutfak: M, kategori: 'Pilav & Makarna', sure: 45, tur: 'yemek',
    adimlar: [
      'Çam fıstığını tereyağında pembeleştirin; soğanı ekleyip yumuşatın.',
      'Yıkanmış pirinci ekleyip 3 dakika kavurun.',
      'Kuş üzümü, tarçın, karabiber, tuz ve 1,5 kat sıcak su ekleyin.',
      'Kısık ateşte pişirip demlendirin; ince kıyılmış maydanozla karıştırın.',
    ],
    malzemeler: ['Pirinç', 'Çam Fıstığı', 'Kuru Üzüm', 'Soğan', 'Tereyağı', 'Tarçın', 'Maydanoz', 'Tuz', 'Karabiber'],
  },
  {
    isim: 'Nohutlu Pilav', mutfak: M, kategori: 'Pilav & Makarna', sure: 35, tur: 'yemek',
    adimlar: [
      'Pirinci ıslatıp yıkayın; haşlanmış nohutları hazırlayın.',
      'Tereyağında pirinci 2 dakika kavurun.',
      'Nohutları, tuzu ve 1,5 kat sıcak suyu ekleyin.',
      'Kısık ateşte suyunu çekene kadar pişirip demlendirin.',
    ],
    malzemeler: ['Pirinç', 'Nohut', 'Tereyağı', 'Tuz'],
  },
  {
    isim: 'Fırın Makarna', mutfak: M, kategori: 'Pilav & Makarna', sure: 50, tur: 'yemek',
    adimlar: [
      'Makarnayı haşlayıp süzün.',
      'Yumurta, süt ve rendelenmiş kaşarın yarısını çırpıp makarnayla karıştırın.',
      'Yağlanmış fırın kabına döküp kalan kaşarı üzerine serpin.',
      '180 derece fırında üzeri kızarana kadar 25 dakika pişirin.',
    ],
    malzemeler: ['Makarna', 'Yumurta', 'Süt', 'Kaşar Peyniri', 'Tereyağı', 'Tuz', 'Karabiber'],
  },
  {
    isim: 'Erişte', mutfak: M, kategori: 'Pilav & Makarna', sure: 25, tur: 'yemek',
    adimlar: [
      'Erişteyi bol tuzlu kaynar suda haşlayıp süzün.',
      'Tavada tereyağını eritip cevizleri hafifçe kavurun.',
      'Erişteyi ekleyip 2 dakika çevirin.',
      'Lor peyniri serpip karıştırarak sıcak servis edin.',
    ],
    malzemeler: ['Erişte', 'Tereyağı', 'Ceviz', 'Lor Peyniri', 'Tuz'],
  },
  {
    isim: 'Sebzeli Bulgur Pilavı', mutfak: M, kategori: 'Pilav & Makarna', sure: 35, tur: 'yemek',
    adimlar: [
      'Kabak, havuç ve biberi küçük küpler halinde doğrayıp zeytinyağında soteleyin.',
      'Salçayı ekleyip kavurun.',
      'Bulgur ve 2 kat sıcak su ekleyin.',
      'Kısık ateşte suyunu çekene kadar pişirip demlendirin.',
    ],
    malzemeler: ['Bulgur', 'Kabak', 'Havuç', 'Sivri Biber', 'Salça', 'Zeytinyağı', 'Tuz'],
  },

  // ─── KAHVALTILIK ───
  {
    isim: 'Menemen', mutfak: M, kategori: 'Kahvaltılık', sure: 20, tur: 'yemek',
    adimlar: [
      'Biberleri tereyağında yumuşayana kadar soteleyin.',
      'Rendelenmiş domatesleri ekleyip suyunu çekene kadar pişirin.',
      'Yumurtaları ekleyip karıştırın; tuz ve karabiber serpin.',
      'Yumurtalar hafif akışkanken ocaktan alıp sıcak servis edin.',
    ],
    malzemeler: ['Domates', 'Sivri Biber', 'Yumurta', 'Tereyağı', 'Tuz', 'Karabiber'],
  },
  {
    isim: 'Sucuklu Yumurta', mutfak: M, kategori: 'Kahvaltılık', sure: 15, tur: 'yemek',
    adimlar: [
      'Sucuk dilimlerini yağsız tavada iki yüzü kızarana kadar pişirin.',
      'Çıkan yağın üzerine yumurtaları kırın.',
      'Beyazlar tutana kadar kapağı kapalı pişirin.',
      'Karabiber serpip tavayla sıcak servis edin.',
    ],
    malzemeler: ['Sucuk', 'Yumurta', 'Karabiber'],
  },
  {
    isim: 'Peynirli Omlet', mutfak: M, kategori: 'Kahvaltılık', sure: 10, tur: 'yemek',
    adimlar: [
      'Yumurtaları tuz ve karabiberle çırpın.',
      'Tereyağını tavada eritip yumurtaları dökün.',
      'Altı tutunca rendelenmiş kaşarı bir yarısına serpin.',
      'İkiye katlayıp peynir eriyene kadar 1 dakika daha pişirin.',
    ],
    malzemeler: ['Yumurta', 'Kaşar Peyniri', 'Tereyağı', 'Tuz', 'Karabiber'],
  },
  {
    isim: 'Patates Kavurması', mutfak: M, kategori: 'Kahvaltılık', sure: 25, tur: 'yemek',
    adimlar: [
      'Patatesleri küçük küpler halinde doğrayın.',
      'Kızgın yağda altın rengi alana kadar kavurun.',
      'Tuz, karabiber ve pul biber serpin.',
      'İsteğe göre üzerine yumurta kırıp kapalı pişirin.',
    ],
    malzemeler: ['Patates', 'Ayçiçek Yağı', 'Yumurta', 'Tuz', 'Karabiber', 'Pul Biber'],
  },
  {
    isim: 'Çılbır', mutfak: M, kategori: 'Kahvaltılık', sure: 15, tur: 'yemek',
    adimlar: [
      'Sirkeli kaynar suda yumurtaları poşe edin (3-4 dakika).',
      'Sarımsaklı yoğurdu tabağa yayın.',
      'Poşe yumurtaları yoğurdun üzerine yerleştirin.',
      'Kızdırılmış pul biberli tereyağını gezdirip servis edin.',
    ],
    malzemeler: ['Yumurta', 'Yoğurt', 'Sarımsak', 'Tereyağı', 'Sirke', 'Pul Biber', 'Tuz'],
  },

  // ─── HAMUR İŞİ ───
  {
    isim: 'Sigara Böreği', mutfak: M, kategori: 'Hamur İşi', sure: 30, tur: 'yemek',
    adimlar: [
      'Beyaz peyniri ezip kıyılmış maydanozla karıştırın.',
      'Üçgen kestiğiniz yufkalara harcı koyup sıkıca sarın, uçlarını sulu parmakla yapıştırın.',
      'Kızgın yağda altın rengi alana kadar kızartın.',
      'Kağıt havluya alıp sıcak servis edin.',
    ],
    malzemeler: ['Yufka', 'Beyaz Peynir', 'Maydanoz', 'Ayçiçek Yağı'],
  },
  {
    isim: 'Peynirli Gözleme', mutfak: M, kategori: 'Hamur İşi', sure: 40, tur: 'yemek',
    adimlar: [
      'Un, su ve tuzla kulak memesi yumuşaklığında hamur yoğurup 20 dakika dinlendirin.',
      'Bezelere ayırıp ince açın.',
      'Yarısına peynirli harcı sürüp kapatın.',
      'Sacda veya tavada iki yüzünü pişirip tereyağı sürün.',
    ],
    malzemeler: ['Un', 'Beyaz Peynir', 'Maydanoz', 'Tereyağı', 'Tuz'],
  },
  {
    isim: 'Kıymalı Pide', mutfak: M, kategori: 'Hamur İşi', sure: 60, tur: 'yemek',
    adimlar: [
      'Un, maya, şeker, tuz ve ılık suyla hamur yoğurup 40 dakika mayalandırın.',
      'Kıymayı doğranmış soğan, biber, domates ve baharatlarla çiğ olarak karıştırın.',
      'Hamuru uzunca açıp harcı ortasına yayın, kenarlarını kıvırın.',
      '220 derece fırında 15 dakika pişirin; tereyağı sürerek servis edin.',
    ],
    malzemeler: ['Un', 'Maya', 'Kıyma', 'Soğan', 'Sivri Biber', 'Domates', 'Tereyağı', 'Şeker', 'Tuz', 'Karabiber', 'Pul Biber'],
  },
  {
    isim: 'Lahmacun', mutfak: M, kategori: 'Hamur İşi', sure: 60, tur: 'yemek',
    adimlar: [
      'Un, maya, tuz ve ılık suyla yumuşak bir hamur yoğurup mayalandırın.',
      'Kıyma, soğan, sarımsak, biber, domates, salça ve maydanozu robottan geçirin.',
      'Hamurdan bezeler koparıp incecik açın ve harcı ince bir tabaka halinde yayın.',
      'Taş fırında veya 250 derece fırında 6-8 dakika pişirin; limon ve yeşillikle servis edin.',
    ],
    malzemeler: ['Un', 'Maya', 'Kıyma', 'Soğan', 'Sarımsak', 'Sivri Biber', 'Domates', 'Salça', 'Maydanoz', 'Pul Biber', 'Tuz', 'Limon'],
  },
  {
    isim: 'Mantı', mutfak: M, kategori: 'Hamur İşi', sure: 90, tur: 'yemek',
    adimlar: [
      'Un, yumurta, su ve tuzla sert bir hamur yoğurup dinlendirin.',
      'Kıymayı rendelenmiş soğan, tuz ve karabiberle karıştırın.',
      'Hamuru ince açıp küçük karelere kesin; her kareye harç koyup bohça gibi kapatın.',
      'Tuzlu kaynar suda 10 dakika haşlayın; sarımsaklı yoğurt ve pul biberli tereyağıyla servis edin.',
    ],
    malzemeler: ['Un', 'Yumurta', 'Kıyma', 'Soğan', 'Yoğurt', 'Sarımsak', 'Tereyağı', 'Pul Biber', 'Kuru Nane', 'Tuz', 'Karabiber'],
  },
  {
    isim: 'Ispanaklı Börek', mutfak: M, kategori: 'Hamur İşi', sure: 55, tur: 'yemek',
    adimlar: [
      'Ispanağı soğanla soteleyip suyunu çektirin, lor peynirle karıştırın.',
      'Yufkaları süt-yumurta-sıvı yağ karışımıyla ıslatarak tepsiye serin.',
      'Katların arasına ıspanaklı harcı paylaştırın.',
      'Üzerine yumurta sarısı sürüp 180 derece fırında 35 dakika pişirin.',
    ],
    malzemeler: ['Yufka', 'Ispanak', 'Soğan', 'Lor Peyniri', 'Yumurta', 'Süt', 'Ayçiçek Yağı', 'Çörek Otu', 'Tuz'],
  },
  {
    isim: 'Poğaça', mutfak: M, kategori: 'Hamur İşi', sure: 50, tur: 'yemek',
    adimlar: [
      'Ilık süt, maya, şeker, yağ, yumurta akı, un ve tuzla yumuşak hamur yoğurun; 30 dakika mayalandırın.',
      'Bezelere ayırıp içlerine peynirli harç koyun ve kapatın.',
      'Üzerlerine yumurta sarısı sürüp çörek otu serpin.',
      '180 derece fırında altın rengi alana kadar 20-25 dakika pişirin.',
    ],
    malzemeler: ['Un', 'Maya', 'Süt', 'Yumurta', 'Beyaz Peynir', 'Maydanoz', 'Ayçiçek Yağı', 'Şeker', 'Çörek Otu', 'Tuz'],
  },
  {
    isim: 'Pişi', mutfak: M, kategori: 'Hamur İşi', sure: 45, tur: 'yemek',
    adimlar: [
      'Ilık su, maya, şeker, tuz ve unla yumuşak bir hamur yoğurun; 30 dakika mayalandırın.',
      'Hamurdan bezeler koparıp elinizle açın.',
      'Kızgın bol yağda iki yüzünü de kabarıp kızarana kadar kızartın.',
      'Peynir veya reçelle sıcak servis edin.',
    ],
    malzemeler: ['Un', 'Maya', 'Şeker', 'Tuz', 'Ayçiçek Yağı'],
  },

  // ─── TATLILAR ───
  {
    isim: 'Fırın Sütlaç', mutfak: M, kategori: 'Tatlılar', sure: 70, tur: 'yemek',
    adimlar: [
      'Yarım su bardağı pirinci az suda yumuşayana kadar haşlayın.',
      '1 litre süt ve 1 su bardağı şekeri ekleyip karıştırarak kaynatın.',
      'Suda açılmış 2 yemek kaşığı nişastayı ekleyip koyulaşana kadar pişirin.',
      'Kaselere paylaştırıp benmari usulü 200 derece fırında üzeri kızarana kadar pişirin.',
    ],
    malzemeler: ['Pirinç', 'Süt', 'Şeker', 'Nişasta', 'Vanilya'],
  },
  {
    isim: 'Kazandibi', mutfak: M, kategori: 'Tatlılar', sure: 60, tur: 'yemek',
    adimlar: [
      'Süt, şeker, nişasta ve pirinç ununu karıştırıp koyulaşana kadar pişirin.',
      'Tepsinin dibine pudra şekeri serpip muhallebiyi dökün.',
      'Tepsiyi doğrudan ocağa alıp dibini yakın (karamelize edin).',
      'Soğutup dilimleyerek ters çevirin ve tarçınla servis edin.',
    ],
    malzemeler: ['Süt', 'Şeker', 'Nişasta', 'Pudra Şekeri', 'Tereyağı', 'Vanilya', 'Tarçın'],
  },
  {
    isim: 'Muhallebi', mutfak: M, kategori: 'Tatlılar', sure: 25, tur: 'yemek',
    adimlar: [
      'Süt, şeker ve nişastayı soğukken karıştırın.',
      'Orta ateşte sürekli karıştırarak koyulaşana kadar pişirin.',
      'Vanilyayı ekleyip 2 dakika daha pişirin.',
      'Kaselere paylaştırıp soğutun; tarçın veya fındıkla servis edin.',
    ],
    malzemeler: ['Süt', 'Şeker', 'Nişasta', 'Vanilya', 'Fındık', 'Tarçın'],
  },
  {
    isim: 'İrmik Helvası', mutfak: M, kategori: 'Tatlılar', sure: 40, tur: 'yemek',
    adimlar: [
      '2 su bardağı irmiği ve çam fıstığını tereyağında kısık ateşte 20 dakika kavurun.',
      'Süt ve şekeri ayrı bir yerde kaynatıp şerbeti hazırlayın.',
      'Şerbeti irmiğin üzerine dikkatlice döküp karıştırın.',
      'Kapağı kapalı 10 dakika demlendirip tarçınla servis edin.',
    ],
    malzemeler: ['İrmik', 'Tereyağı', 'Süt', 'Şeker', 'Çam Fıstığı', 'Tarçın'],
  },
  {
    isim: 'Revani', mutfak: M, kategori: 'Tatlılar', sure: 60, tur: 'yemek',
    adimlar: [
      'Yumurta ve şekeri çırpın; yoğurt, irmik, un, kabartma tozu ve vanilyayı ekleyin.',
      'Yağlanmış tepsiye döküp 170 derece fırında 30 dakika pişirin.',
      'Su ve şekerle şerbet kaynatıp ılıtın.',
      'Sıcak kekin üzerine ılık şerbeti döküp çekmesini bekleyin; hindistan cevizi serpin.',
    ],
    malzemeler: ['İrmik', 'Un', 'Yumurta', 'Yoğurt', 'Şeker', 'Kabartma Tozu', 'Vanilya', 'Hindistan Cevizi Rendesi'],
  },
  {
    isim: 'Şekerpare', mutfak: M, kategori: 'Tatlılar', sure: 55, tur: 'yemek',
    adimlar: [
      'Tereyağı, pudra şekeri, yumurta, irmik, un ve kabartma tozuyla yumuşak hamur yoğurun.',
      'Ceviz büyüklüğünde yuvarlayıp tepsiye dizin, ortalarına badem yerleştirin.',
      '170 derece fırında hafif pembeleşene kadar 20 dakika pişirin.',
      'Soğuk şerbeti sıcak tatlının üzerine döküp çekmesini bekleyin.',
    ],
    malzemeler: ['Un', 'İrmik', 'Tereyağı', 'Pudra Şekeri', 'Yumurta', 'Kabartma Tozu', 'Badem', 'Şeker', 'Limon'],
  },
  {
    isim: 'Ev Baklavası', mutfak: M, kategori: 'Tatlılar', sure: 90, tur: 'yemek',
    adimlar: [
      'Baklavalık yufkaları tepsiye tek tek, aralarına eritilmiş tereyağı gezdirerek serin.',
      'Ortasına çekilmiş cevizi serpin ve kalan yufkalarla kapatın.',
      'Baklava dilimi kesip kalan tereyağını dökün; 170 derece fırında kızarana kadar pişirin.',
      'Soğuk şerbeti (su + şeker + limon) sıcak baklavaya döküp dinlendirin.',
    ],
    malzemeler: ['Baklavalık Yufka', 'Ceviz', 'Tereyağı', 'Şeker', 'Limon'],
  },
  {
    isim: 'Künefe', mutfak: M, kategori: 'Tatlılar', sure: 40, tur: 'yemek',
    adimlar: [
      'Kadayıfı ince kıyıp eritilmiş tereyağıyla harmanlayın.',
      'Yarısını tepsiye bastırın, üzerine tuzsuz peyniri yayın, kalan kadayıfla kapatın.',
      'İki yüzünü de kızarana kadar ocakta veya fırında pişirin.',
      'Sıcakken soğuk şerbeti döküp antep fıstığı serperek hemen servis edin.',
    ],
    malzemeler: ['Kadayıf', 'Lor Peyniri', 'Tereyağı', 'Şeker', 'Antep Fıstığı', 'Limon'],
  },
  {
    isim: 'Aşure', mutfak: M, kategori: 'Tatlılar', sure: 120, tur: 'yemek',
    adimlar: [
      'Islatılmış buğdayı (bulgur da olur) bol suda iyice pişirin.',
      'Haşlanmış nohut ve fasulyeyi ekleyin.',
      'Kuru kayısı, kuru üzüm ve şekeri ekleyip koyulaşana kadar pişirin.',
      'Kaselere paylaştırın; ceviz, fındık ve tarçınla süsleyip soğuk servis edin.',
    ],
    malzemeler: ['Bulgur', 'Nohut', 'Kuru Fasulye', 'Kuru Kayısı', 'Kuru Üzüm', 'Şeker', 'Ceviz', 'Fındık', 'Tarçın'],
  },
  {
    isim: 'Muzlu Magnolia', mutfak: M, kategori: 'Tatlılar', sure: 30, tur: 'yemek',
    adimlar: [
      'Süt, şeker, nişasta ve vanilyayla muhallebi pişirip ılıtın.',
      'İçine ezilmiş muz ve labneyi ekleyip karıştırın.',
      'Kaselere bir kat bisküvi kırığı, bir kat krema olacak şekilde paylaştırın.',
      'Üzerini muz dilimleri ve bisküviyle süsleyip 2 saat soğutun.',
    ],
    malzemeler: ['Süt', 'Şeker', 'Nişasta', 'Vanilya', 'Muz', 'Labne', 'Bisküvi'],
  },
  {
    isim: 'Kabak Tatlısı', mutfak: M, kategori: 'Tatlılar', sure: 50, tur: 'yemek',
    adimlar: [
      'Bal kabağını dilimleyip tencereye dizin.',
      'Üzerine şekeri serpip kapağını kapatın ve bir gece bekletin.',
      'Kendi suyuyla kısık ateşte yumuşayana kadar 40 dakika pişirin.',
      'Soğutup üzerine ceviz ve tahin gezdirerek servis edin.',
    ],
    malzemeler: ['Bal Kabağı', 'Şeker', 'Ceviz', 'Tahin'],
  },
  {
    isim: 'Ayva Tatlısı', mutfak: M, kategori: 'Tatlılar', sure: 70, tur: 'yemek',
    adimlar: [
      'Ayvaları soyup ikiye bölün ve çekirdek yuvalarını çıkarın.',
      'Tencereye dizip üzerlerine şeker serpin; çekirdekleri de aralara ekleyin (renk verir).',
      '1 su bardağı su ekleyip kısık ateşte ayvalar yumuşayıp kızarana kadar pişirin.',
      'Soğutup kaymak ve antep fıstığıyla servis edin.',
    ],
    malzemeler: ['Ayva', 'Şeker', 'Kaymak', 'Antep Fıstığı', 'Limon'],
  },
];
