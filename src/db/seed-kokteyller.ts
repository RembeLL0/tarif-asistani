// Kokteyller & İçecekler — alkollü ve alkolsüz (ölçülü).
import { type SeedTarif } from './seed-tarifler-turk';

const K = 'Kokteyller & İçecekler';

export const KOKTEYL_TARIFLERI: SeedTarif[] = [
  // ─── ALKOLLÜ ───
  {
    isim: 'Mojito', mutfak: K, kategori: 'Alkollü Kokteyller', sure: 10, tur: 'kokteyl',
    malzemeler: [
      ['Rom', '50 ml (beyaz)'], ['Misket Limonu', '1 adet'], ['Taze Nane', '8-10 yaprak'],
      ['Şeker', '2 çay kaşığı'], ['Soda', '100 ml'], ['Buz', '1 bardak dolusu'],
    ],
    adimlar: [
      'Misket limonunu 4 dilime kesip uzun bir bardağa atın; şekeri üzerine ekleyin.',
      'Nane yapraklarını avucunuzda bir kez alkışlar gibi ezip bardağa atın — bu hafif ezme kokusunu açar, yaprağı parçalamak ise acılaştırır.',
      'Muddler (yoksa oklava ucu) ile limonları ve şekeri hafifçe ezin; nanelerin üzerine fazla bastırmayın.',
      'Bardağı kırık buzla doldurun.',
      'Romu ekleyip kaşıkla alttan üste karıştırın.',
      'Üzerini soda ile tamamlayın; bir nane dalıyla süsleyip pipetle servis edin.',
    ],
  },
  {
    isim: 'Cuba Libre', mutfak: K, kategori: 'Alkollü Kokteyller', sure: 5, tur: 'kokteyl',
    malzemeler: [
      ['Rom', '50 ml'], ['Kola', '120 ml'], ['Misket Limonu', 'yarım adet'], ['Buz', '1 bardak dolusu'],
    ],
    adimlar: [
      'Uzun bardağı ağzına kadar buzla doldurun — bol buz içeceğin sulanmasını yavaşlatır.',
      'Romu buzun üzerine dökün.',
      'Misket limonunun suyunu sıkıp kabuğunu da bardağa atın.',
      'Üzerini soğuk kolayla tamamlayın.',
      'Kaşıkla bir kez alttan üste karıştırıp servis edin.',
    ],
  },
  {
    isim: 'Margarita', mutfak: K, kategori: 'Alkollü Kokteyller', sure: 10, tur: 'kokteyl',
    malzemeler: [
      ['Tekila', '50 ml'], ['Misket Limonu', '1,5 adet (30 ml suyu)'], ['Şeker', '2 çay kaşığı (veya 15 ml şurup)'],
      ['Tuz', 'bardak kenarı için'], ['Buz', '1 shaker dolusu'],
    ],
    adimlar: [
      'Servis bardağının kenarını misket limonu dilimiyle ıslatın.',
      'Düz bir tabağa tuz yayıp bardağı ters çevirerek kenarını tuza bandırın — meşhur tuzlu kenar hazır.',
      'Shaker\'a (yoksa kapaklı kavanoz) tekila, misket limonu suyu ve şekeri koyun.',
      'Buzları ekleyip kapağı sıkıca kapatın ve 15 saniye kuvvetlice çalkalayın; shaker\'ın dışı buğulanmalı.',
      'Bardağa taze buz koyup karışımı süzerek dökün.',
      'Misket limonu dilimiyle süsleyip servis edin.',
    ],
  },
  {
    isim: 'Gin Tonic', mutfak: K, kategori: 'Alkollü Kokteyller', sure: 5, tur: 'kokteyl',
    malzemeler: [
      ['Cin', '50 ml'], ['Tonik', '150 ml'], ['Limon', '2 dilim'], ['Salatalık', '2 ince şerit (isteğe bağlı)'], ['Buz', '1 bardak dolusu'],
    ],
    adimlar: [
      'Balon bardağı (yoksa geniş bardak) ağzına kadar iri buzlarla doldurun; iri buz yavaş erir.',
      'Cini buzun üzerine dökün.',
      'Toniği bardağın kenarından, köpüğünü söndürmeden yavaşça ekleyin.',
      'Kaşıkla tek bir nazik hareketle karıştırın — fazla karıştırmak gazını kaçırır.',
      'Limon dilimi ve salatalık şeridiyle süsleyip hemen servis edin.',
    ],
  },
  {
    isim: 'Whiskey Sour', mutfak: K, kategori: 'Alkollü Kokteyller', sure: 10, tur: 'kokteyl',
    malzemeler: [
      ['Viski', '50 ml'], ['Limon', '1 adet (25 ml suyu)'], ['Şeker', '2 çay kaşığı'],
      ['Yumurta', 'yarım yumurta akı (isteğe bağlı, köpük için)'], ['Buz', '1 shaker dolusu'],
    ],
    adimlar: [
      'Shaker\'a viski, taze sıkılmış limon suyu ve şekeri koyun.',
      'Köpüklü sevenler için: yarım yumurta akını ekleyip önce buzsuz 10 saniye çalkalayın ("dry shake") — kadifemsi köpüğün sırrı budur.',
      'Buzları ekleyip 15 saniye daha kuvvetlice çalkalayın.',
      'Kısa ve geniş bir bardağa taze buz koyup karışımı süzün.',
      'Üzerine dilerseniz bir vişne veya portakal dilimi — tatlı-ekşi dengesiyle klasiklerin klasiği.',
    ],
  },
  {
    isim: 'Piña Colada', mutfak: K, kategori: 'Alkollü Kokteyller', sure: 10, tur: 'kokteyl',
    malzemeler: [
      ['Rom', '50 ml (beyaz)'], ['Ananas Suyu', '100 ml'], ['Hindistan Cevizi Sütü', '50 ml'],
      ['Buz', '1 su bardağı'],
    ],
    adimlar: [
      'Tüm malzemeleri blender\'a koyun: rom, ananas suyu, hindistan cevizi sütü ve buz.',
      'Pürüzsüz ve sorbe kıvamında olana kadar 30-40 saniye çekin.',
      'Uzun bir bardağa dökün.',
      'Varsa ananas dilimi ve vişneyle süsleyin; kalın pipetle servis edin.',
      'Gözlerinizi kapatın — kendinizi Karayipler\'de bir plajda hayal etmek serbest!',
    ],
  },
  {
    isim: 'Tequila Sunrise', mutfak: K, kategori: 'Alkollü Kokteyller', sure: 5, tur: 'kokteyl',
    malzemeler: [
      ['Tekila', '50 ml'], ['Portakal Suyu', '120 ml (taze sıkılmış)'], ['Nar Şurubu', '15 ml'],
      ['Portakal', '1 dilim (süs için)'], ['Buz', '1 bardak dolusu'],
    ],
    adimlar: [
      'Uzun bardağı buzla doldurun.',
      'Tekilayı ekleyin, üzerine portakal suyunu dökün ve bir kez karıştırın.',
      'Şimdi gün doğumu efekti: nar şurubunu bardağın iç kenarından, kaşığın sırtı üzerinden yavaşça dökün.',
      'Şurup ağır olduğu için dibe çöker ve kırmızıdan turuncuya geçen o meşhur degrade oluşur.',
      'KARIŞTIRMAYIN! Portakal dilimiyle süsleyip bu haliyle servis edin; içen kişi ilk yudumdan önce manzaranın tadını çıkarsın.',
    ],
  },
  {
    isim: 'Moscow Mule', mutfak: K, kategori: 'Alkollü Kokteyller', sure: 5, tur: 'kokteyl',
    malzemeler: [
      ['Votka', '50 ml'], ['Misket Limonu', 'yarım adet'], ['Soda', '120 ml'],
      ['Zencefil', '1 parmak boyu (rendelenmiş)'], ['Taze Nane', '1 dal'], ['Buz', '1 bardak dolusu'],
    ],
    adimlar: [
      'Aslı zencefilli gazozla yapılır; biz taze zencefille ev usulü hazırlayacağız.',
      'Rendelenmiş zencefili bardağın dibine koyup misket limonunun suyunu üzerine sıkın; 1 dakika bekletin.',
      'Bardağı buzla doldurun (aslına uygun olsun isterseniz bakır kupa kullanın).',
      'Votkayı ekleyin.',
      'Üzerini soda ile tamamlayıp karıştırın.',
      'Nane dalı ve misket limonu dilimiyle süsleyin — zencefilin ısırığı, votkayla şaşırtıcı uyumlu!',
    ],
  },
  {
    isim: 'Espresso Martini', mutfak: K, kategori: 'Alkollü Kokteyller', sure: 10, tur: 'kokteyl',
    malzemeler: [
      ['Votka', '50 ml'], ['Espresso', '1 shot (30 ml, soğutulmuş)'], ['Şeker', '2 çay kaşığı (veya 15 ml şurup)'], ['Buz', '1 shaker dolusu'],
    ],
    adimlar: [
      'Espressoyu önceden hazırlayıp soğutun — sıcak kahve buzu anında eritir, kokteyl sulanır.',
      'Shaker\'a votka, soğuk espresso ve şekeri koyun.',
      'Buzları ekleyip 20 saniye, kollarınız yorulana kadar KUVVETLİCE çalkalayın; o meşhur köpük ancak sert çalkalamayla oluşur.',
      'Soğutulmuş martini kadehine süzerek dökün; üzerinde kadifemsi bir köpük tabakası oluşacak.',
      'Köpüğün üzerine 3 kahve çekirdeği koyun (gelenek: sağlık, zenginlik, mutluluk). Akşam yemeği sonrasının yıldızı!',
    ],
  },
  {
    isim: 'Screwdriver', mutfak: K, kategori: 'Alkollü Kokteyller', sure: 5, tur: 'kokteyl',
    malzemeler: [
      ['Votka', '50 ml'], ['Portakal Suyu', '150 ml (taze sıkılmış)'], ['Portakal', '1 dilim'], ['Buz', '1 bardak dolusu'],
    ],
    adimlar: [
      'Uzun bardağı buzla doldurun.',
      'Votkayı ekleyin.',
      'Taze sıkılmış portakal suyuyla tamamlayın — kutu suyuyla da olur ama taze sıkılmışla arasında dağlar vardır.',
      'Kaşıkla iyice karıştırın.',
      'Portakal dilimiyle süsleyip servis edin. İki malzemeli, beş dakikalık, yüz yıllık klasik.',
    ],
  },

  // ─── ALKOLSÜZ ───
  {
    isim: 'Virgin Mojito', mutfak: K, kategori: 'Alkolsüz İçecekler', sure: 10, tur: 'kokteyl',
    malzemeler: [
      ['Misket Limonu', '1 adet'], ['Taze Nane', '10 yaprak'], ['Şeker', '2 çay kaşığı'],
      ['Soda', '150 ml'], ['Buz', '1 bardak dolusu'],
    ],
    adimlar: [
      'Misket limonunu dilimleyip şekerle birlikte bardağa atın.',
      'Nane yapraklarını avucunuzda hafifçe ezip ekleyin.',
      'Muddler veya kaşık sapıyla limonları hafifçe ezin; nanelere nazik davranın.',
      'Bardağı kırık buzla doldurun.',
      'Soda ile tamamlayıp karıştırın; nane dalıyla süsleyin. Mojito keyfi, ertesi gün baş ağrısı yok!',
    ],
  },
  {
    isim: 'Naneli Ev Limonatası', mutfak: K, kategori: 'Alkolsüz İçecekler', sure: 15, tur: 'kokteyl',
    malzemeler: [
      ['Limon', '4 adet'], ['Şeker', '1 su bardağı (200 g)'], ['Taze Nane', '1 avuç yaprak'], ['Buz', 'bolca'],
    ],
    adimlar: [
      'Limonlardan 1 tanesinin kabuğunu, beyaz kısmına inmeden rendeleyin — beyazı acıdır, sarısı ise kokunun hazinesidir.',
      'Tüm limonların suyunu sıkın.',
      'Şekeri 1 su bardağı sıcak suda karıştırarak tamamen eritin.',
      'Büyük bir sürahide limon suyu, kabuk rendesi, şekerli su ve 1 litre soğuk suyu birleştirin.',
      'Nane yapraklarını elinizle hafifçe ezerek ekleyin.',
      'Buzdolabında 1 saat demlendirip süzün. Bol buzla, dilim limonlarla servis edin — yaz demek bu demek!',
    ],
  },
  {
    isim: 'Çilekli Milkshake', mutfak: K, kategori: 'Alkolsüz İçecekler', sure: 10, tur: 'kokteyl',
    malzemeler: [
      ['Çilek', '1,5 su bardağı (200 g)'], ['Süt', '1 su bardağı (200 ml, soğuk)'],
      ['Şeker', '2 yemek kaşığı'], ['Krema', '2 yemek kaşığı (veya 1 top dondurma)'], ['Buz', '3-4 küp'],
    ],
    adimlar: [
      'Çileklerin saplarını temizleyip yıkayın; birkaç tanesini süs için ayırın.',
      'Blender\'a çilek, soğuk süt, şeker ve kremayı (dondurma varsa onu — daha da kremamsı olur) koyun.',
      'Buz küplerini ekleyin.',
      'Pürüzsüz ve köpüklü olana kadar 30-40 saniye çekin.',
      'Uzun bardağa dökün; kenarına çilek takıp kalın pipetle servis edin.',
    ],
  },
  {
    isim: 'Muzlu Smoothie', mutfak: K, kategori: 'Alkolsüz İçecekler', sure: 10, tur: 'kokteyl',
    malzemeler: [
      ['Muz', '2 adet olgun'], ['Yoğurt', '1 su bardağı (200 g)'], ['Süt', 'yarım su bardağı (100 ml)'],
      ['Bal', '1 yemek kaşığı'], ['Yulaf', '2 yemek kaşığı (isteğe bağlı)'], ['Tarçın', 'bir tutam'], ['Buz', '3-4 küp'],
    ],
    adimlar: [
      'Muzları soyup iri parçalara bölün. (İpucu: önceden dilimleyip dondurduğunuz muzla smoothie dondurma gibi olur!)',
      'Blender\'a muz, yoğurt, süt ve balı koyun.',
      'Tok tutsun isterseniz yulafı da ekleyin — güzel bir kahvaltı içeceğine dönüşür.',
      'Buzla birlikte pürüzsüz olana kadar çekin.',
      'Bardağa döküp üzerine tarçın serpin. Sağlıklı, doyurucu, 5 dakikalık mucize!',
    ],
  },
  {
    isim: 'Ev Yapımı Ayran', mutfak: K, kategori: 'Alkolsüz İçecekler', sure: 5, tur: 'kokteyl',
    malzemeler: [
      ['Yoğurt', '2 su bardağı (400 g)'], ['Tuz', 'yarım çay kaşığı'], ['Kuru Nane', 'bir tutam (isteğe bağlı)'], ['Buz', '3-4 küp'],
    ],
    adimlar: [
      'Yoğurdu blender\'a (veya derin bir kaba) alın.',
      '1,5 su bardağı buz gibi soğuk su ve tuzu ekleyin.',
      'Blender\'da 20-30 saniye, üzeri köpük köpük olana kadar çırpın. Çırpma teliyle de olur ama köpük için biraz daha emek gerekir.',
      'Bardaklara dökün; köpüğü kaçırmadan servis edin.',
      'İsterseniz üzerine bir tutam kuru nane serpin. Kebabın, böreğin, her şeyin yanına: milli içeceğimiz!',
    ],
  },
  {
    isim: 'Osmanlı Şerbeti', mutfak: K, kategori: 'Alkolsüz İçecekler', sure: 20, tur: 'kokteyl',
    malzemeler: [
      ['Vişne Suyu', '2 su bardağı (400 ml)'], ['Nar Şurubu', '2 yemek kaşığı'], ['Şeker', '2 yemek kaşığı'],
      ['Tarçın', '1 çubuk (veya yarım çay kaşığı toz)'], ['Limon', '2 dilim'], ['Buz', 'bolca'],
    ],
    adimlar: [
      'Küçük tencerede vişne suyu, nar şurubu, şeker ve tarçını birleştirin.',
      'Kısık ateşte 10 dakika, kokular birbirine geçene kadar hafifçe kaynatın.',
      'Limon dilimlerini ekleyip ocağı kapatın; 10 dakika demlenmeye bırakın.',
      'Süzüp oda sıcaklığına getirin, sonra buzdolabında iyice soğutun.',
      'Bol buzlu bardaklarda, limon dilimiyle servis edin. Osmanlı saraylarından günümüze gelen ferahlık!',
    ],
  },
];
