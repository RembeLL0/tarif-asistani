# Tarif Asistanı — Proje Planı

## Teknoloji
- **Uygulama:** Expo (React Native) + TypeScript
- **Navigasyon:** expo-router (dosya tabanlı ekran yönlendirme)
- **Veritabanı:** expo-sqlite (cihazda yerel SQLite)
- **Test:** Telefonda Expo Go uygulaması ile anlık önizleme

## Veritabanı Şeması

```sql
mutfaklar        (id, isim)
malzemeler       (id, isim, kategori)          -- kategori: "Sebze", "Et", "Süt Ürünü", "İçecek" vb.
tarifler         (id, isim, mutfak_id, sure_dk, adimlar, tur)  -- tur: "yemek" | "kokteyl"
tarif_malzeme    (tarif_id, malzeme_id)        -- köprü tablo
```

Notlar:
- Kokteyller de bir "mutfak/kategori" olarak `mutfaklar` tablosunda tutulur (ör. "Kokteyller" kategorisi) — ayrı tablo gerekmez.
- `adimlar` alanı satır satır metin olarak tutulur, detay ekranında adım adım gösterilir.

## Ekranlar

| Ekran | Yol | İçerik |
|---|---|---|
| Ana Ekran | `/` | Mutfak/kategori kartları + "Evdeki Malzemelerle Ne Pişirebilirim?" butonu |
| Mutfak Detay | `/mutfak/[id]` | Seçilen mutfağın tüm tarifleri |
| Malzeme Seçim | `/malzeme-sec` | Kategorilere ayrılmış malzeme listesi, çoklu seçim |
| Sonuç | `/sonuclar` | Seçilen malzemelere uyan tarifler (eşleşme oranına göre sıralı) |
| Tarif Detay | `/tarif/[id]` | Malzemeler, süre, adım adım hazırlanış |
| Admin | `/admin` | Mutfak / malzeme / tarif ekleme + tarif-malzeme bağlama formları |

## Eşleştirme Mantığı (Sonuç Ekranı)
- Her tarif için: kullanıcının seçtiği malzemelerin, tarifin gerektirdiği malzemeleri ne kadar karşıladığı hesaplanır.
- Tam eşleşenler en üstte; 1-2 malzemesi eksik olanlar "Eksik: X, Y" etiketiyle altta gösterilir.
- Böylece "hiçbir sonuç yok" ekranı yerine her zaman yakın öneriler çıkar.

## Adımlar

1. **Proje kurulumu** — `create-expo-app` ile projeyi oluştur, expo-sqlite ve expo-router'ı ekle.
2. **Veritabanı katmanı** — Şemayı oluşturan kod + uygulama ilk açılışta yüklenen örnek veri (birkaç mutfak, ~30 malzeme, ~10 tarif) — ekranları test edebilmek için.
3. **Ana Ekran** — Mutfak kartları ve büyük "Ne Pişirebilirim?" butonu.
4. **Mutfak Detay + Tarif Detay** — Liste ve detay ekranları (okuma tarafı tamamlanır).
5. **Malzeme Seçim Ekranı** — Kategori başlıkları altında seçilebilir malzeme listesi.
6. **Sonuç Ekranı** — Eşleştirme sorgusu ve sıralı sonuç listesi.
7. **Admin Ekranı** — Dört form: mutfak ekle, malzeme ekle, tarif ekle, tarife malzeme bağla.
8. **Son rötuş** — Boş durum mesajları, hata kontrolleri, telefonda uçtan uca test.

Her adımın sonunda uygulama telefonda çalışır durumda olacak; adım adım ilerleyip her ekranı görerek onaylayabilirsin.
