// Türk Mutfağı 6. bölüm: Commons dosya aramasıyla bulunan görselli ek tarifler.
// Hepsi gramajlı malzeme, derin/özgün anlatım ve yerel fotoğrafla gelir.
import { type SeedTarif } from './seed-tarifler-turk';

const M = 'Türk Mutfağı';

export const TURK_6: SeedTarif[] = [
  // ─── ÇORBALAR ───
  {
    isim: 'Kelle Paça Çorbası', mutfak: M, kategori: 'Çorbalar', sure: 240, tur: 'yemek',
    malzemeler: [
      ['Kuzu İncik', '2 adet (paça/incik)'],
      ['Un', '2 yemek kaşığı'],
      ['Tereyağı', '2 yemek kaşığı'],
      ['Yumurta', '1 adet (sarısı)'],
      ['Sarımsak', '4 diş'],
      ['Sirke', '3 yemek kaşığı'],
      ['Limon', '1 adet'],
      ['Tuz', '1 tatlı kaşığı'],
      ['Pul Biber', '1 tatlı kaşığı'],
    ],
    adimlar: [
      'Kelle paça, kuzu paçalarının uzun saatler kaynatılıp jelatinli, besleyici bir suyunun terbiyeyle bağlandığı geleneksel bir çorbadır. Paçaları önce iyice temizleyip (kılları varsa alevden geçirip kazıyın) bol suda 10 dakika haşlayıp bu ilk suyu dökün — bu ön haşlama kanı ve tortuyu alır, çorbayı berraklaştırır.',
      'Paçaları temiz suyla tekrar tencereye alıp üzerini bolca örtün. Kaynayınca köpüğünü alın, ateşi kısıp 3-4 saat, et kemiklerden ayrılıp jelatin suya iyice geçene kadar ağır ağır kaynatın. Uzun kaynama şart; paça suyunun o yapışkan, dolgun kıvamı ancak böyle oluşur.',
      'Pişen paçaları sudan alıp etlerini kemiklerinden ayıklayın ve didikleyin. Kaynama suyunu (paça suyu) süzüp saklayın — çorbanın temeli budur.',
      'Ayrı bir tencerede tereyağını eritip unu ekleyin, 2-3 dakika çiğ kokusu geçene kadar kavurun. Süzülmüş sıcak paça suyunu azar azar, çırparak ekleyin (un topaklanmasın). Didiklenmiş etleri de ekleyip 10 dakika kaynatın.',
      'Terbiye için yumurta sarısını yarım limon suyu ve birkaç kaşık ılık çorbayla çırpın, yavaşça çorbaya ekleyip karıştırın ve bu aşamadan sonra KAYNATMAYIN; yumurta pıhtılaşıp taneli olur. Terbiye çorbaya ipeksi bir kıvam verir.',
      'Sarımsakları ezip sirkeyle karıştırın — herkes kendi kâsesine damak zevkine göre gezdirsin. Kâselere paylaştırıp üzerine kızgın tereyağında kavrulmuş pul biber gezdirin, bolca limonla, kaynar sıcak servis edin. Geleneksel bir kahvaltı/ayılma çorbasıdır.',
    ],
  },
  {
    isim: 'Toyga Çorbası', mutfak: M, kategori: 'Çorbalar', sure: 50, tur: 'yemek',
    malzemeler: [
      ['Yoğurt', '3 su bardağı'],
      ['Buğday', '0,5 su bardağı (aşurelik/dövme)'],
      ['Nohut', '0,5 su bardağı (haşlanmış)'],
      ['Un', '1 yemek kaşığı'],
      ['Yumurta', '1 adet'],
      ['Tereyağı', '2 yemek kaşığı'],
      ['Kuru Nane', '1 yemek kaşığı'],
      ['Tuz', '1 tatlı kaşığı'],
    ],
    adimlar: [
      'Toyga (yayla/düğün çorbasının bir akrabası), yoğurt, buğday ve nohudun buluştuğu ekşimsi, doyurucu bir Anadolu çorbasıdır. Dövme/aşurelik buğdayı bir gece ıslatıp bol suda, taneler yumuşayıp açılana kadar 40-50 dakika haşlayın (haşlanmış nohut da ekleyin). Haşlama suyunu dökmeyin.',
      'Terbiyeyi hazırlayın: bir kaseye yoğurt, un ve yumurtayı alıp topaksız, pürüzsüz bir karışım olana kadar çırpın. Un ve yumurta, yoğurdun pişerken KESİLMESİNİ önleyen bağlayıcılardır — bu çorbanın en kritik noktası budur.',
      'Terbiyeyi buğdayın haşlandığı ılık suyla yavaş yavaş inceltin. Yoğurdu doğrudan kaynar suya atarsanız kesilir; önce ılık suyla açıp sıcaklığını dengelemek gerekir.',
      'İnceltilmiş terbiyeyi haşlanmış buğday ve nohudun bulunduğu tencereye ekleyin. Şimdi altın kural: TEK YÖNDE ve sürekli karıştırarak yavaşça kaynatın. Karıştırmayı bırakırsanız yoğurt anında kesilip taneli olur. Çorba kaynayıp hafif koyulaşınca 5 dakika daha pişirip tuzunu ekleyin.',
      'Küçük bir tavada tereyağını eritip kuru naneyi ekleyin ve 10 saniye, nane kokusu yağa geçene kadar kavurun (yakmayın). Bu naneli tereyağı toyganın imza aromasıdır.',
      'Naneli kızgın tereyağını çorbanın üzerine gezdirip karıştırın. Sıcak servis edin; ekşimsi yoğurt, dişe gelen buğday ve nane üçlüsü Anadolu\'nun kadim tatlarındandır.',
    ],
  },

  // ─── ET YEMEKLERİ ───
  {
    isim: 'Kuzu Tandır', mutfak: M, kategori: 'Et Yemekleri', sure: 240, tur: 'yemek',
    malzemeler: [
      ['Kuzu İncik', '4 adet (veya kuzu kol/but)'],
      ['Soğan', '1 adet'],
      ['Sarımsak', '1 baş'],
      ['Defne Yaprağı', '2 adet'],
      ['Tereyağı', '3 yemek kaşığı'],
      ['Kekik', '1 tatlı kaşığı'],
      ['Karabiber', '1 çay kaşığı'],
      ['Tuz', '1 tatlı kaşığı'],
      ['Lavaş', '4 adet (servis)'],
    ],
    adimlar: [
      'Gerçek tandır toprak fırında yapılsa da, evde düşük ısı ve uzun pişirmeyle o çatalla dağılan yumuşaklığı yakalayabilirsiniz. Kuzu incikleri/etleri kağıt havluyla kurulayıp tuz, karabiber ve kekikle her yerini ovun. Baharatın ete işlemesi için mümkünse birkaç saat buzdolabında bekletin.',
      'Geniş bir döküm tencere veya derin fırın kabında tereyağını kızdırıp etleri her yüzü kızarana kadar mühürleyin. Bu ilk kızartma (mühürleme) etin suyunu içeride tutar ve derin bir tat verir.',
      'Etlerin arasına ikiye böldüğünüz soğanı, bütün sarımsak başını (tepesini kesin) ve defne yapraklarını yerleştirin. Kabın dibine yaklaşık 1-2 bardak sıcak su ekleyin — çok su koymayın; tandır kızartma değil, buğulanarak-kendi yağında pişme yöntemidir.',
      'Kabın üzerini SIKICA folyoyla kapatın veya kapağını kapatıp kenarlarını mühürleyin. Buharın kaçmaması, etin kurumadan yumuşamasının anahtarıdır.',
      'Önceden 150°C\'ye ısıtılmış fırında 3,5-4 saat pişirin. Bu düşük ve uzun ısı, etin kollajenini eritip lifleri jelatinimsi bir yumuşaklığa çevirir. Sıcaklığı yükseltip süreyi kısaltmaya çalışmayın; et sertleşir.',
      'Son yarım saatte folyoyu açıp üstünü kızartın (isteğe göre). Et, çatalla dokununca kemikten ayrılıp dağılmalı. Sıcak lavaş üzerine alıp tandır suyundan gezdirin; yanında pilav veya közlenmiş sebzeyle, bir ziyafet gibi servis edin.',
    ],
  },
  {
    isim: 'Etli Bamya', mutfak: M, kategori: 'Et Yemekleri', sure: 75, tur: 'yemek',
    malzemeler: [
      ['Bamya', '500 g (küçük, taze veya kuru)'],
      ['Kuşbaşı Et', '300 g (kuzu)'],
      ['Soğan', '1 adet'],
      ['Domates', '2 adet'],
      ['Salça', '1 yemek kaşığı'],
      ['Tereyağı', '2 yemek kaşığı'],
      ['Limon', '1 adet'],
      ['Tuz', '1 tatlı kaşığı'],
    ],
    adimlar: [
      'Bamyanın en büyük sorunu pişerken salgıladığı yapışkan, sümüksü sıvıdır; bunu önlemenin sırrı SİRKE-LİMON ve doğru hazırlıktır. Taze bamya kullanıyorsanız sap kısmındaki sert konik başlığı, bamyayı delmeden ince ince yontarak temizleyin (delerseniz içindeki sıvı akar). Bamyaları bir kaba alıp üzerine limon suyu veya sirke gezdirip 15-20 dakika bekletin.',
      'Eti bir lokmalık doğrayıp tereyağında, suyunu salıp çekene ve hafif kızarana kadar kavurun. İnce doğranmış soğanı ekleyip pembeleşene kadar çevirin.',
      'Salçayı ekleyip 1-2 dakika kavurun, sonra rendelenmiş veya küp doğranmış domatesi ekleyin. Üzerine eti örtecek kadar sıcak su ekleyip et yarı yumuşayana kadar 30 dakika pişirin.',
      'Bamyaları tencereye ekleyin. Bamya narindir; ekledikten sonra ÇOK KARIŞTIRMAYIN — fazla karıştırmak hem sıvısını salmasına hem de dağılmasına yol açar. Tencereyi sadece hafifçe sallayarak yerleştirin.',
      'Kısık ateşte, kapağı kapalı, bamyalar yumuşayana kadar 20-25 dakika pişirin. Pişmeye yakın 1-2 kaşık limon suyu veya sirke daha ekleyin; asit hem yapışkanlığı keser hem bamyanın rengini ve dokusunu korur, ekşimsi tadını verir.',
      'Bamyalar dişe gelen ama yumuşak bir kıvama gelince ocaktan alın. 10 dakika dinlendirip pilavla, bol limonla sıcak servis edin. Yazın taze, kışın kuru bamyayla yapılan sevilen bir ev yemeğidir.',
    ],
  },
  {
    isim: 'Etli Nohut', mutfak: M, kategori: 'Et Yemekleri', sure: 90, tur: 'yemek',
    malzemeler: [
      ['Nohut', '2 su bardağı (kuru)'],
      ['Kuşbaşı Et', '300 g (kuzu veya dana)'],
      ['Soğan', '1 adet'],
      ['Domates', '2 adet'],
      ['Salça', '1 yemek kaşığı'],
      ['Tereyağı', '2 yemek kaşığı'],
      ['Karabiber', '1 çay kaşığı'],
      ['Tuz', '1 tatlı kaşığı'],
    ],
    adimlar: [
      'Etli nohudun yumuşak, unumsu tanelerinin sırrı ıslatmada saklıdır: kuru nohudu bir gece, mümkünse bir tutam karbonatla suda bekletin. Karbonat kabuğu yumuşatıp nohudun kolay pişmesini ve dağılmadan içinin unumsu olmasını sağlar. Ertesi gün suyunu döküp durulayın.',
      'Eti bir lokmalık doğrayıp tereyağında, suyunu salıp çekene ve dış yüzeyi kızarana kadar kavurun. Kavrulan et, çorbamsı suya derin bir tat verir. İnce doğranmış soğanı ekleyip pembeleşene kadar çevirin.',
      'Salçayı ekleyip 1-2 dakika, ham kokusu geçene kadar kavurun. Rendelenmiş domatesi ekleyip 2-3 dakika daha pişirin.',
      'Süzülmüş nohutu tencereye ekleyip karıştırın. Üzerine, malzemeleri 2-3 parmak geçecek kadar sıcak su ekleyin (nohut pişerken suyu çeker, cömert olun). Kaynayınca yüzeydeki köpüğü alın.',
      'Ateşi kısıp kapağı hafif aralık bırakarak nohut ve et iyice yumuşayana kadar 60-75 dakika pişirin. TUZU baştan atmayın — erken tuz nohudun kabuğunu sertleştirip geç pişmesine yol açar; nohut yumuşadıktan sonra ekleyin.',
      'Nohut bir taneyi parmaklar arasında ezdiğinizde unumsu dağılıyorsa ve et çatalla ayrılıyorsa yemek hazırdır. Sos ne çok sulu ne çok koyu, kaşıkta hafif akan kıvamda olmalı. Karabiberi ekleyip pilavla, turşuyla sıcak servis edin.',
    ],
  },

  // ─── BALIK & DENİZ ÜRÜNLERİ ───
  {
    isim: 'Kalamar Tava', mutfak: M, kategori: 'Balık & Deniz Ürünleri', sure: 40, tur: 'yemek', porsiyon: 4,
    malzemeler: [
      ['Kalamar', '600 g (halka kesilmiş)'],
      ['Un', '1 su bardağı'],
      ['Nişasta', '3 yemek kaşığı'],
      ['Soda', '1 su bardağı'],
      ['Ceviz', '0,5 su bardağı (tarator)'],
      ['Ekmek', '1 dilim (tarator)'],
      ['Sarımsak', '2 diş'],
      ['Limon', '1 adet'],
      ['Tuz', '1 çay kaşığı'],
      ['Ayçiçek Yağı', 'kızartma için'],
    ],
    adimlar: [
      'Kalamar tavanın en büyük tehlikesi kalamarın lastikleşmesidir; bunu önlemenin iki yolu var: ya çok kısa (30-60 saniye) ya çok uzun (uzun haşlama) pişirmek. Tavada kısa pişireceğimiz için hız esas. Kalamarları halka kesilmiş kullanın, iyice yıkayıp bir bezle KURULAYIN — ıslak kalamar yağı tehlikeli şekilde sıçratır ve hamur tutmaz.',
      'Kızartma hamuru için unu, nişastayı ve bir tutam tuzu karıştırın. Üzerine soğuk sodayı azar azar ekleyip akışkan bir hamur yapın. Soda ve nişasta, kızarınca cam gibi hafif ve çıtır bir kabuk oluşturur. 10 dakika dinlendirin.',
      'Tarator sosu için ekmek içini ıslatıp sıkın; cevizi, sarımsağı, ekmeği, biraz limon suyu ve tuzu rondoda çekip azar azar zeytinyağı-su ile pürüzsüz bir sos yapın. Kalamarın çıtırlığını serin-sarımsaklı tarator dengeler.',
      'Derin bir tavada yağı iyice kızdırın (180°C). Yağ yeterince kızgın değilse kalamar yağ çekip ağırlaşır ve lastikleşir. Kalamar halkalarını hamura batırıp fazlasını süzün.',
      'Halkaları kızgın yağa, tavayı KALABALIK ETMEDEN atın (kalabalık tava ısıyı düşürür). Sadece 1-2 dakika, hamur altın sarısı ve çıtır olana kadar kızartın. Fazla tutarsanız kalamar sertleşir — kısa ve yüksek ateş şart.',
      'Kızaranları delikli kaşıkla kağıt havluya alıp hemen hafifçe tuzlayın. Bol limon ve tarator sosuyla, sıcak servis edin; bekledikçe çıtırlığını kaybeder.',
    ],
  },

  // ─── ZEYTİNYAĞLILAR & SEBZE ───
  {
    isim: 'Patlıcan Kızartması', mutfak: M, kategori: 'Zeytinyağlılar & Sebze', sure: 40, tur: 'yemek', porsiyon: 4,
    malzemeler: [
      ['Patlıcan', '3 adet'],
      ['Domates', '3 adet'],
      ['Sarımsak', '3 diş'],
      ['Yoğurt', '2 su bardağı'],
      ['Salça', '1 yemek kaşığı'],
      ['Zeytinyağı', 'kızartma için'],
      ['Tuz', '1 tatlı kaşığı'],
    ],
    adimlar: [
      'Patlıcan kızartmasının kilit noktası, patlıcanın az yağ çekmesidir. Patlıcanları alacalı soyup (bir şerit kabuklu, bir şerit soyulmuş) yaklaşık 1 cm kalınlığında yuvarlak veya boyuna dilimleyin. Tuzlu suda 20-30 dakika bekletin — bu hem acısını alır hem gözeneklerini büzerek kızartırken daha az yağ emmesini sağlar.',
      'Bekleyen patlıcanları bir bezle iyice sıkıp KURULAYIN. Islak patlıcan hem çok yağ sıçratır hem çok yağ çeker. Kuruluk, çıtır ve hafif bir kızartmanın sırrıdır.',
      'Geniş bir tavada zeytinyağını iyice kızdırın (kızgın yağa atılan patlıcan yüzeyini hemen mühürler, daha az yağ emer). Patlıcan dilimlerini tek kat halinde, iki yüzü de altın-kahve rengi olana kadar kızartın. Kızaranları kağıt havluya alıp fazla yağını çektirin.',
      'Sarımsaklı yoğurt için yoğurdu ezilmiş 2 diş sarımsak ve bir tutam tuzla çırpın.',
      'Domates sosu için tavadaki yağın fazlasını alıp kalan 1 diş ezilmiş sarımsağı 20 saniye çevirin, salçayı ekleyip 1 dakika kavurun, rendelenmiş domatesi ekleyip tuzlayın ve koyulaşana kadar 8-10 dakika pişirin.',
      'Servis tabağına kızarmış patlıcanları dizin, üzerlerine sarımsaklı yoğurdu kaşıkla gezdirin, en üste sıcak domates sosunu dökün. Sıcak da soğuk da yenir; yaz sofralarının vazgeçilmezidir.',
    ],
  },

  // ─── PİLAV ───
  {
    isim: 'Domatesli Pilav', mutfak: M, kategori: 'Pilav & Makarna', sure: 40, tur: 'yemek',
    malzemeler: [
      ['Pirinç', '2 su bardağı'],
      ['Domates', '3 adet olgun'],
      ['Salça', '1 yemek kaşığı'],
      ['Tereyağı', '2 yemek kaşığı'],
      ['Ayçiçek Yağı', '2 yemek kaşığı'],
      ['Tuz', '1 tatlı kaşığı'],
      ['Karabiber', '1 çay kaşığı'],
    ],
    adimlar: [
      'Tane tane bir domatesli pilavın ilk şartı pirincin yıkanması ve ıslatılmasıdır. Pirinci ılık suda, suyu berraklaşana kadar yıkayın (fazla nişastasını alın), sonra tuzlu ılık suda 20-30 dakika bekletip süzün. Bu bekletme taneleri şişirip pişerken kırılmalarını ve birbirine yapışmalarını önler.',
      'Domatesleri rendeleyin veya kabuğunu soyup küçük küp doğrayın. Olgun, kırmızı domates seçin; pilavın hem rengi hem tadı buna bağlıdır.',
      'Tencerede tereyağı ve sıvı yağı birlikte ısıtın (tereyağı tat, sıvı yağ yanmayı önler). Süzülmüş pirinci ekleyip orta ateşte 3-4 dakika, taneler yağa bulanıp cam gibi şeffaflaşana kadar kavurun. Bu kavurma tane tane pilavın anahtarıdır.',
      'Salçayı ekleyip 1 dakika çevirin, sonra rendelenmiş domatesi ekleyip suyunu hafif salana kadar 2-3 dakika pişirin.',
      'Üzerine 2,5 su bardağı SICAK su (veya et suyu) ekleyip tuz ve karabiberi katın. Bir kez karıştırıp kaynatın, sonra ateşi en kısığa alın ve kapağı kapatarak pirinç suyunu tamamen çekene kadar 15 dakika pişirin. Pişerken kapağı açıp karıştırmayın — buhar kaçar, pilav hamurlaşır.',
      'Su çekilince ocağı kapatın, tencere ile kapak arasına temiz bir bez koyup 10-15 dakika demlendirin. Bez, yükselen buharı emerek pilavın üstünü kurutup tane tane olmasını sağlar. Demlenince nazikçe karıştırıp servis edin.',
    ],
  },

  // ─── HAMUR İŞİ ───
  {
    isim: 'Peynirli Pide', mutfak: M, kategori: 'Hamur İşi', sure: 90, tur: 'yemek', porsiyon: 4,
    malzemeler: [
      ['Un', '3 su bardağı'],
      ['Maya', '1 çay kaşığı (instant)'],
      ['Beyaz Peynir', '250 g'],
      ['Kaşar Peyniri', '150 g'],
      ['Yumurta', '2 adet'],
      ['Maydanoz', '0,5 demet'],
      ['Tereyağı', '2 yemek kaşığı'],
      ['Tuz', '1 tatlı kaşığı'],
    ],
    adimlar: [
      'Kayıkçı peynirli pidenin yumuşak içi, iyi mayalanan hamurdan gelir. Unu, mayayı, tuzu ve yaklaşık 1 su bardağı ılık suyu 10 dakika yoğurup yumuşak, ele yapışmayan bir hamur elde edin. Üzerini örtüp ılık yerde 1 saat, hacmi iki katına çıkana kadar mayalandırın.',
      'İç harç için beyaz peyniri çatalla ezin, rendelenmiş kaşarı, kıyılmış maydanozu ve 1 yumurtayı ekleyip karıştırın. Yumurta harcı bağlar ve pişince peynirin akıp dağılmasını önler. Peynir çok tuzluysa harca ek tuz koymayın.',
      'Mayalanan hamuru 2-4 bezeye bölün. Her bezeyi unlanmış tezgahta uzun oval (kayık) biçiminde açın. Pide kalın hamurlu olmaz; orta incelikte açın.',
      'Peynirli harcı hamurun ortasına uzunlamasına yerleştirin, kenarlarda 2-3 cm boşluk bırakın. Uzun kenarları harcın üzerine doğru kıvırıp katlayın ve iki ucunu birleştirip sıkıştırarak o klasik kayık/badem şeklini verin. Uçların iyi kapatılması pişerken açılmasını önler.',
      'Pidenin açık kalan orta kısmına ve kenar hamuruna çırpılmış yumurta sürün (altın parlak renk için). En iyi sonuç için fırınınızı maksimum sıcaklıkta, tercihen pişirme taşıyla önceden iyice ısıtın.',
      'Pideleri 220-240°C fırında 12-15 dakika, kenarları kabarıp altın-kızıl olana ve peynir eriyip hafif kızarana kadar pişirin. Fırından çıkar çıkmaz üzerine tereyağı sürün ve isterseniz ortasına bir yumurta sarısı bırakın. Dilimleyip sıcak servis edin.',
    ],
  },

  // ─── REÇEL & KONSERVE ───
  {
    isim: 'İncir Reçeli', mutfak: M, kategori: 'Reçel & Konserve', sure: 70, tur: 'yemek', porsiyon: 8,
    malzemeler: [
      ['İncir', '1 kg (hafif ham/sert)'],
      ['Şeker', '750 g'],
      ['Limon', '1 adet'],
      ['Ceviz', '15 adet (isteğe bağlı)'],
    ],
    adimlar: [
      'İncir reçeli için hafif ham, sert ve küçük incir (yeşil/olgunlaşmamış) idealdir; tam olgun incir pişince dağılıp lapa olur. İncirleri yıkayıp sap uçlarını kesin. Geleneksel olarak her incirin dip kısmına bir çentik atıp içine bir ceviz parçası yerleştirilir — bu, cevizli incir reçelinin imzasıdır (isteğe bağlı).',
      'Kabuğun sertliğini yumuşatmak için incirleri 5 dakika kaynar suda haşlayıp süzün. Bu ön haşlama şurubu daha iyi emmelerini sağlar.',
      'İncirleri ve şekeri kat kat dizip üzerini örtün, 4-5 saat (tercihen gece boyu) bekletin. İncir suyunu salıp şekerle bir şurup oluşturacak; böylece su eklemeden, kendi özünde pişer.',
      'Tencereyi orta ateşe alıp kaynatın. Yüzeydeki köpüğü alın. İncir narin olduğu için karıştırmayın; tencereyi hafifçe çalkalamak yeterli. Ateşi kısıp incirler şeffaflaşıp koyulaşana kadar 40-45 dakika pişirin.',
      'İncirler bal renginde ve dolgun olunca kıvam testi yapın: soğuk tabaktaki bir damla şurup parmakla itilince buruşup akmıyorsa reçel hazırdır. İncir reçeli akışkan kalır, çok koyulaştırmayın (soğuyunca katılaşır).',
      'Limonun suyunu ekleyip 2-3 dakika daha kaynatın; limon şekerlenmeyi önler ve tadı dengeler. Sıcak reçeli sterilize kavanozlara doldurup kapatın, ters çevirip soğutun. Kaymaklı ekmek veya tuzlu peynirle harika bir kontrast oluşturur.',
    ],
  },
];
