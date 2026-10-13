# STRUCTIVA — SEO, GEO ve Site Kalitesi İncelemesi

**Tarih:** 13 Ekim 2026, İstanbul saati  
**Proje:** D:/WEB SİTELERİ/stcructiva  
**Canlı site:** https://www.structiva.com.tr  
**Kapsam:** teknik SEO, uluslararası SEO, GEO/AEO, içerik güvenilirliği, yerel görünürlük, performans, mobil kullanım, erişilebilirlik, teklif akışı, güvenlik ve ölçümleme.

## Genel değerlendirme

Site; dil bazlı URL, statik HTML, canonical, hreflang, sitemap, yapılandırılmış veri ve teklif araçları açısından kapsamlı bir temel içeriyor. Ancak canlı sürümde içerik üretimi, dil tutarlılığı ve mobil navigasyon sorunları doğrulandı. Yönetici girişinin yalnızca tarayıcıda yapılan bir kontrolle korunması ve teklif kaydı başarısız olduğunda da başarı gösterilebilmesi, görünürlük çalışmalarından önce ele alınmalı.

GEO için birçok etiket ve dosya hazırlanmış. Asıl eksik, ürün bilgilerinin tek kaynaktan gelmesi ve teknik iddiaların doğrulanabilir belgelerle desteklenmesi. Öncelik; güvenli yönetim, doğru teklif teslimi, tutarlı içerik ve erişilebilir mobil kullanım.

Bu rapor bir Google sıralama, trafik veya Lighthouse puanı değildir. Search Console ve gerçek kullanıcı performansı görülmediği için sayısal başarı puanı verilmedi.

## Kontroller ve incelemenin sınırları

| Kontrol | Sonuç |
|---|---|
| TypeScript tip kontrolü | Başarılı |
| Yeni üretim istemci derlemesi | Başarılı; büyük JavaScript dosyası uyarısı var |
| Statik üretim, izole kopyada ilk çalıştırma | 420 sayfa; örnek sayfada 1 main, 1 footer, 1 h1 |
| Aynı statik üretimin ikinci çalıştırması | 2 main, 2 footer, 2 h1; JSON-LD blokları 6'dan 11'e çıkıyor |
| Canlı Türkçe ana sayfa | React içeriği yanında root dışında eski statik içerik ve footer mevcut |
| Canlı İtalyanca model sayfası | İtalyanca başlık, İngilizce ürün açıklamaları ve ek Türkçe ana sayfa içeriği birlikte |
| Canlı mobil ana sayfa, 390 × 844 | Belge genişliği 439 px; hamburger düğmesi ekran dışında |
| Canlı yönetim giriş sayfası | robots=index/follow; ana sayfa başlığı ve /tr canonical bilgisi taşınıyor |
| Canlı İtalyanca model sayfası JSON-LD | 3 FAQ sorusu görünür sayfa metninde bulunmuyor |
| Kaynak sitemap | 420 URL, 1.631.464 bayt; tüm lastmod değerleri 2026-10-13 |

Canlı kontroller normal ziyaretçi tarayıcısında yapıldı. Form gönderilmedi, yönetici girişi denenmedi, müşteri kayıtları okunmadı ve canlı veriye yazılmadı. Bu inceleme uygulama kaynaklarında düzeltme yapmadı; derleme ve tekrar üretim deneyleri ayrı geçici klasörde yürütüldü.

Yayınlanmış Firestore kuralları, SMTP teslimi, HTTP güvenlik başlıkları, backlink profili, indekslenme ve gerçek Core Web Vitals değerleri doğrulanmadı. Doğrudan HTTP kontrolü bu ortamda sonuç vermedi; bu sonuç sitenin erişilemediğini göstermez. Tarayıcıda site açıldı.

## Öncelik sırası

| Öncelik | Bulgu | İş etkisi |
|---|---|---|
| P0 — Acil | Tarayıcıda yönetici doğrulaması; istemci kodunda sabit parolalar | Gerçek kullanıcı ve rol kontrolü gerekiyor |
| P1 — Trafik büyütmeden önce | Uzak kayıt başarısız olsa da form başarı gösterebiliyor | Potansiyel müşterinin kaybolması |
| P1 | Tekrar statik üretim eski içerik ve şema biriktiriyor | SEO ve dil bütünlüğü bozuluyor |
| P1 | Mobil üst menü taşıyor | Mobil ziyaretçi menüye ulaşmakta zorlanıyor |
| P1 | Teknik değerler ve garanti süreleri çelişiyor | Teklif ve yapay zekâ yanıtlarında güven kaybı |
| P1 | 30 dilde esas içerik tam çevrilmemiş | Hedef pazarların arama niyeti karşılanmıyor |
| P1 | Özel bot grupları genel robots yasaklarını devralmıyor | Yönetim/API yollarında beklenen tarama kısıtı oluşmuyor |
| P2 — İyileştirme | Schema görünür içerikle eşleşmiyor | Makineye sunulan bilgi ziyaretçinin gördüğünden ayrışıyor |
| P2 | Ortak JavaScript ve Firebase yükü yüksek | Mobil yükleme/işleme maliyeti |
| P2 | Form ve modal erişilebilirliği eksik | Klavye ve ekran okuyucu kullanımında sorun |
| P2 | Model seçimi sonraki adıma taşınmıyor | Seçim kayboluyor; teklif akışı uzuyor |
| P2 | Analitik ve kaynak takibi tamamlanmamış | Nitelikli teklifin kaynağı ölçülemiyor |

P0 bir veri sızıntısının gerçekleştiği anlamına gelmez. Kaynakta bulunan kimlik doğrulama tasarımı acil risk taşıyor; veritabanına hangi erişimlerin izin verildiği ayrıca kontrol edilmeli.

## 1. Güvenlik ve teklif teslimi

### 1.1 Yönetici girişi gerçek bir güvenlik sınırı değil — P0

Panel, yerel depolamadaki bir değeri giriş kanıtı sayıyor. E-posta ve iki sabit parola da istemci kodunda karşılaştırılıyor. Bu yöntem tarayıcı dışında doğrulanan bir kullanıcı kimliği veya rol üretmiyor. Veri okuma, güncelleme ve silme işlemleri istemci Firestore bağlantısıyla yürütülüyor.

**Kanıt:** [DashboardPage.tsx:31](<D:/WEB SİTELERİ/stcructiva/client/src/pages/DashboardPage.tsx:31>), [DashboardPage.tsx:79](<D:/WEB SİTELERİ/stcructiva/client/src/pages/DashboardPage.tsx:79>), [messageService.ts:104](<D:/WEB SİTELERİ/stcructiva/client/src/services/messageService.ts:104>).

**Düzeltme:** Firebase Authentication veya sunucuda doğrulanan oturum, yetkili kullanıcı rolü ve Firestore Security Rules üzerinden erişim kontrolü. İstemciye konmuş parolalar kaldırılmalı; gerçek sistemlerde kullanılıyorlarsa değiştirilmeli. Anonim form kaydı ile yönetim işlemleri farklı yetkiler taşımalı.

**Kabul ölçütü:** Yetkisiz kullanıcı kayıtları okuyamaz, değiştiremez ve silemez; yalnızca paneli gizlemek yeterli değildir. Firebase, kullanıcı/rol bazlı korumada Authentication ve Security Rules birlikte kullanımını öneriyor. [Firebase güvenlik kuralları](https://firebase.google.com/docs/firestore/security/get-started).

Firebase web yapılandırma anahtarı tek başına bir gizli parola değildir. Yayınlanmış güvenlik kuralları görülmeden veritabanının herkese açık olduğu iddia edilemez.

### 1.2 Teklif işletmeye ulaşmasa da başarı gösterilebiliyor — P1

Talep önce ziyaretçinin tarayıcısına kaydediliyor. Firestore yazma hatası yakalanıp yalnızca uyarı olarak kaydediliyor. E-posta çağrısı beklenmeden başlatılıyor ve fonksiyon her durumda talep nesnesini döndürüyor. Contact, RFQ ve konfigüratör bunu başarılı işlem kabul edip başarı ekranına geçiyor.

Ziyaretçinin kendi tarayıcısındaki kayıt, işletmenin panelinde alınmış bir talep değildir. Uzak yazma başarısız ve e-posta servisi yoksa işletme talebi hiç almamış olabilir.

**Kanıt:** [messageService.ts:33](<D:/WEB SİTELERİ/stcructiva/client/src/services/messageService.ts:33>), [messageService.ts:46](<D:/WEB SİTELERİ/stcructiva/client/src/services/messageService.ts:46>), [messageService.ts:63](<D:/WEB SİTELERİ/stcructiva/client/src/services/messageService.ts:63>), [messageService.ts:89](<D:/WEB SİTELERİ/stcructiva/client/src/services/messageService.ts:89>), [RFQPage.tsx:98](<D:/WEB SİTELERİ/stcructiva/client/src/pages/RFQPage.tsx:98>).

**Düzeltme:** Kalıcı uzak kayıt onayı olmadan “talebiniz alındı” gösterilmemeli. Hata ve yeniden deneme; başarılı kayıtta talep numarası; bildirim için ayrı teslim durumu; yinelenen gönderimleri önleyen işlem kimliği.

**Kabul ölçütü:** Veritabanı yazımı kapalıyken yanlış başarı oluşmaz. Onaylanan kayıt, farklı bir yetkili cihazda görünür. Kontrol test ortamında yapılmalı.

### 1.3 Yayınlama yöntemi ile e-posta servisi uyuşmuyor — P1

Yayınlama komutu yalnızca Firebase Hosting yayımlıyor. Hosting ayarında /api/send-email için Function/Cloud Run yönlendirmesi yok. E-posta endpoint'i ayrı Express sunucusunda tanımlı. Mevcut yapılandırma statik yayında bu Express endpoint'ini oluşturmaz.

SMTP parolası yokken sunucu success=true ve skipped=true döndürüyor. Paneldeki test yalnızca success değerine bakarak başarılı gönderim yazabiliyor.

**Kanıt:** [package.json:12](<D:/WEB SİTELERİ/stcructiva/package.json:12>), [firebase.json](<D:/WEB SİTELERİ/stcructiva/firebase.json>), [server/index.ts:39](<D:/WEB SİTELERİ/stcructiva/server/index.ts:39>), [server/index.ts:57](<D:/WEB SİTELERİ/stcructiva/server/index.ts:57>), [DashboardPage.tsx:67](<D:/WEB SİTELERİ/stcructiva/client/src/pages/DashboardPage.tsx:67>).

**Düzeltme:** Bildirim servisini desteklenen sunucu ortamına bağlamak; kalıcı kayıt sonrasında bildirim kuyruğu; skipped/delivered ayrımı. Gerçek alıcı yapılandırmadan doğrulanmalı; panel metniyle sunucunun varsayılan alıcısı aynı kabul edilmemeli.

### 1.4 Express e-posta endpoint'inin ek korumaya ihtiyacı var — P2

SMTP sertifika doğrulaması kapalı. İstek gövdesi sunucuda şema ile doğrulanmıyor; kullanıcı alanları HTML e-postaya doğrudan yerleştiriliyor ve hız sınırlama bulunmuyor.

**Kanıt:** [server/index.ts:34](<D:/WEB SİTELERİ/stcructiva/server/index.ts:34>), [server/index.ts:39](<D:/WEB SİTELERİ/stcructiva/server/index.ts:39>), [server/index.ts:89](<D:/WEB SİTELERİ/stcructiva/server/index.ts:89>), [server/index.ts:134](<D:/WEB SİTELERİ/stcructiva/server/index.ts:134>).

**Düzeltme:** TLS doğrulaması, alan türü/uzunluğu kontrolü, HTML kaçışlama, hız sınırlama ve spam koruması. Bu bulgu Express sunucusunun kullanılacağı senaryoya ait; canlı Firebase yayınının bu endpoint'i çalıştırdığı doğrulanmadı.

## 2. Teknik SEO ve sayfa üretimi

### 2.1 Statik üretim ikinci çalıştırmada içeriği çoğaltıyor — P1

Üretici dist/public/index.html dosyasını şablon olarak okuyor. Ürettiği Türkçe ana sayfayı aynı dosyaya geri yazıyor. Sonraki çalıştırmada root alanını ilk kapanan div'e kadar eşleyen düzenli ifade, iç içe HTML'nin tamamını temizleyemiyor. Eski main/footer yeni root dışında kalıyor. JSON-LD de eski bloklar temizlenmeden tekrar ekleniyor.

**Yerel deney:** İlk üretimde 1 main, 1 footer, 1 h1 ve 6 JSON-LD; ikinci üretimde 2 main, 2 footer, 2 h1 ve 11 JSON-LD. İtalyanca model sayfasına Türkçe ana sayfa metni ekleniyor.

**Canlı kanıt:** /tr ve /it/models üzerinde root dışında Türkçe ana içerik ve footer doğrulandı. Sorun yalnızca iki h1 bulunması değil; farklı sayfanın içeriğinin ve bağlantılarının yanlış sayfada kalması.

**Kaynak:** [prerender.ts:3085](<D:/WEB SİTELERİ/stcructiva/scripts/prerender.ts:3085>), [prerender.ts:3169](<D:/WEB SİTELERİ/stcructiva/scripts/prerender.ts:3169>), [prerender.ts:3174](<D:/WEB SİTELERİ/stcructiva/scripts/prerender.ts:3174>), [prerender.ts:3192](<D:/WEB SİTELERİ/stcructiva/scripts/prerender.ts:3192>).

**Düzeltme:** Değişmez başlangıç şablonu; çıktıyı girdi yapmamak; açık şablon işaretleri veya HTML ayrıştırıcı; eski şemaları temizlemek. Statik ve React içeriğini aynı bileşen/veri kaynağından üretmek.

**Kabul ölçütü:** İkinci üretim sayfa yapısını ve şema sayısını değiştirmez. Her dil sayfasında o sayfaya ait tek main bulunur. Temiz Vite derlemesinden sonraki ilk üretim doğru çalıştı; hata tekrar çalıştırmada doğrulandı.

### 2.2 Statik ve React içerik farklı kaynaklarda hazırlanıyor — P1

Statik üretici kendi başlık/gövde/teknik kayıtlarını, React ayrı veri dosyalarını kullanıyor. React, mevcut statik ağacı hydrate etmek yerine createRoot ile değiştiriyor. Bu tek başına indekslenmeyi engellemez; mevcut mimaride JavaScript öncesi ve sonrası farklı içerik oluşmasını kolaylaştırıyor.

**Kanıt:** [main.tsx:6](<D:/WEB SİTELERİ/stcructiva/client/src/main.tsx:6>), [prerender.ts:70](<D:/WEB SİTELERİ/stcructiva/scripts/prerender.ts:70>), [prerender.ts:2962](<D:/WEB SİTELERİ/stcructiva/scripts/prerender.ts:2962>).

**Düzeltme:** Ortak içerik modeli; aynı sayfa ağacından gerçek SSG/SSR ve uygun hydration. Farklı elle yazılmış HTML'ye yalnızca hydrateRoot eklemek çözüm olmaz.

### 2.3 robots.txt özel bot grupları genel yasakları devralmıyor — P1

Genel * grubunda /dashboard, /admin ve /api/ yasak. Googlebot gibi özel gruplarda yalnızca Allow: / var. Google özel grubu seçtiğinde genel grubun yasaklarıyla birleştirmiyor; amaçlanan yönetim/API kısıtı oluşmuyor.

**Kanıt:** [robots.txt:6](<D:/WEB SİTELERİ/stcructiva/client/public/robots.txt:6>), [robots.txt:13](<D:/WEB SİTELERİ/stcructiva/client/public/robots.txt:13>). [Google robots grubu önceliği](https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec).

**Düzeltme:** Gereksiz özel grupları azaltmak veya kısıtları tutarlı uygulamak. Yönetim sayfasına noindex ve gerçek erişim kontrolü. robots.txt güvenlik koruması sağlamaz.

### 2.4 Yönetim sayfası ana sayfanın SEO kimliğini taşıyor — P1

Canlı /dashboard, giriş ekranı yüklendikten sonra da ana sayfa title, /tr canonical ve index/follow robots değerini taşıyor. Dashboard kendi SEOHead/noindex ayarını kullanmıyor. Eski statik içerik sorunu burada da görülüyor.

**Kanıt:** Canlı /dashboard; [DashboardPage.tsx:27](<D:/WEB SİTELERİ/stcructiva/client/src/pages/DashboardPage.tsx:27>), [firebase.json](<D:/WEB SİTELERİ/stcructiva/firebase.json>).

**Düzeltme:** Yönetim yollarına noindex ve ayrı başlık; pazarlama canonical/şemasını kaldırmak; admin arayüzünü ayırmak. Bugün arama sonuçlarında bulunduğu iddia edilmiyor; indeks talimatı hatalı.

### 2.5 Sitemap tarihleri gerçek güncellemeyi göstermiyor — P2

420 URL'nin lastmod değeri her üretimde bugünün tarihine ayarlanıyor. İçerik değişmese de tüm sayfalar güncellenmiş gibi sunuluyor. Yüksek priority/changefreq değerleri sıralama avantajı sağlamaz.

**Kanıt:** [prerender.ts:2685](<D:/WEB SİTELERİ/stcructiva/scripts/prerender.ts:2685>), [prerender.ts:2707](<D:/WEB SİTELERİ/stcructiva/scripts/prerender.ts:2707>). [Google sitemap rehberi](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).

**Düzeltme:** Sayfa bazlı gerçek güncelleme tarihi; yalnızca yayımlanmış ve indekslenmesi amaçlanan dil varyantları. 1,63 MB boyut tek başına hata değildir; tekrarlar bakım yükünü artırıyor.

## 3. Çok dillilik ve uluslararası SEO

### 3.1 30 dil URL'si, 30 tam çeviri anlamına gelmiyor — P1

Arayüz geniş ölçüde çevrilmiş; model içerikleri sınırlı dillerde yerelleştirilmiş. Eksik dilde temel İngilizce modele dönülüyor. İtalyanca model sayfasında bu durum canlı olarak görüldü. Ana sayfa yerelleştirilmiş model/sektör yardımcıları yerine İngilizce temel listeleri kullanıyor.

Dört bilgi merkezi makalesi tek İngilizce içerik kaynağından geliyor. Dil URL'si değişse de başlık/gövde İngilizce kalabiliyor; bazı çevre düğmeleri Türkçe. Statik üreticide eksik gövdeler de İngilizceye dönüyor.

**Kanıt:** [modelsData.ts:307](<D:/WEB SİTELERİ/stcructiva/client/src/data/modelsData.ts:307>), [HomePage.tsx:307](<D:/WEB SİTELERİ/stcructiva/client/src/pages/HomePage.tsx:307>), [HomePage.tsx:383](<D:/WEB SİTELERİ/stcructiva/client/src/pages/HomePage.tsx:383>), [ArticleDetailPage.tsx:10](<D:/WEB SİTELERİ/stcructiva/client/src/pages/ArticleDetailPage.tsx:10>), [prerender.ts:2966](<D:/WEB SİTELERİ/stcructiva/scripts/prerender.ts:2966>).

**Etkisi:** Hedef dilde araştırma yapan ziyaretçi beklediği açıklamayı alamıyor. Çevrilmemiş ana içerik, dil URL'lerinin ayrı değer üretmesini sınırlıyor. Google dil tespitini yalnızca lang/hreflang etiketine dayandırmıyor. [Google çok dilli sayfalar rehberi](https://developers.google.com/search/docs/specialty/international/localized-versions).

**Düzeltme:** Gerçek satış pazarlarından başlayarak tam çeviri; başlık, gövde, teknik alanlar, form, hata/başarı mesajları ve belge özeti birlikte çevrilmeli. Hazır olmayan dil-sayfa çiftleri keşif listelerinde tamamlanmış gibi sunulmamalı.

### 3.2 Dil desteği sayfa bazında sınırlandırılamıyor — P2

getSeoLanguages(slug) her sayfa için bütün 30 dili döndürüyor. Bir makalenin yalnızca İngilizce olması veya model açıklamasının eksikliği dikkate alınmıyor.

**Kanıt:** [seoRoutes.ts:29](<D:/WEB SİTELERİ/stcructiva/client/src/lib/seoRoutes.ts:29>).

**Düzeltme:** Sayfa bazlı yayımlanmış dil envanteri; aynı kayıttan rota/canonical/hreflang/sitemap üretimi. Basitleştirilmiş Çince için statikte zh, istemcide zh-Hans kullanımını da tutarlı hale getirmek. zh tek başına geçersiz değildir.

## 4. GEO/AEO ve teknik güvenilirlik

### 4.1 Teknik bilgiler çelişiyor — P1

| Bilgi | Ürün verisi / görünür kart | GEO tablosu / llms.txt |
|---|---|---|
| S-Series açıklık | 10–30 m | 12–30 m |
| S-Series rüzgâr | 225 km/h | 220 km/h |
| P-Series açıklık | 8–24 m | 10–24 m |
| P-Series rüzgâr | 210 km/h | 200 km/h |
| Container Canopy açıklık | 6–24 m | 8–20 m |
| Container Canopy rüzgâr | 200 km/h | 180 km/h |
| Heavy PEB rüzgâr | Yerel saha kodlarına göre mühendislik | 250 km/h |
| Korozyon garantisi | Ana sayfada 40–50 yıl | Karşılaştırma ve şartname özetinde 25 yıl |

**Kanıt:** [modelsData.ts:47](<D:/WEB SİTELERİ/stcructiva/client/src/data/modelsData.ts:47>), [modelsData.ts:69](<D:/WEB SİTELERİ/stcructiva/client/src/data/modelsData.ts:69>), [modelsData.ts:91](<D:/WEB SİTELERİ/stcructiva/client/src/data/modelsData.ts:91>), [GeoAnswerBox.tsx:237](<D:/WEB SİTELERİ/stcructiva/client/src/components/GeoAnswerBox.tsx:237>), [llms.txt:28](<D:/WEB SİTELERİ/stcructiva/client/public/llms.txt:28>), [HomePage.tsx:152](<D:/WEB SİTELERİ/stcructiva/client/src/pages/HomePage.tsx:152>), [ComparisonTable.tsx:35](<D:/WEB SİTELERİ/stcructiva/client/src/components/ComparisonTable.tsx:35>), [SpecSheetModal.tsx:123](<D:/WEB SİTELERİ/stcructiva/client/src/components/SpecSheetModal.tsx:123>).

**Düzeltme:** Teknik ekipçe onaylanmış tek model kaydı; saha koşullarıyla sınırlandırılmış yük değerleri; tasarım ömrü/bakım beklentisi/sözleşmesel garantinin ayrılması. Kart, belge, JSON-LD ve llms dosyaları aynı kayıttan üretilmeli. Burada hangi değerin doğru olduğu ilan edilmiyor; çelişki doğrulandı.

### 4.2 Kesin iddiaların doğrulanabilir belgeleri görünür değil — P1

Şirket yaşı, 25.000 ton kapasite, 50+ ülke, EN/ISO sertifikaları, rüzgâr dayanımı, garanti ve Mersin Limanı'na 15 km mesafe kesin bilgi olarak tekrarlanıyor. Depoda sertifika dosyası, kapsam/geçerlilik bilgisi, gerçek tesis konumu veya proje belgeleri görülmedi. README teknik iddiaların doğrulanmasını isteyen prototip notu taşıyor.

**Kanıt:** [siteConfig.ts:10](<D:/WEB SİTELERİ/stcructiva/client/src/config/siteConfig.ts:10>), [llms.txt:5](<D:/WEB SİTELERİ/stcructiva/client/public/llms.txt:5>), [README-STRUCTIVA.md](<D:/WEB SİTELERİ/stcructiva/README-STRUCTIVA.md>).

**Düzeltme:** Gerçek şirket unvanı/adresi; sertifika numarası, kapsamı, düzenleyen kuruluş ve geçerlilik; izinli proje referansları; test/hesap koşulları; garanti belgesi. 15 km iddiası gerçek tesis-liman koordinatlarıyla doğrulanmalı. Tekrar, doğruluk kanıtı değildir. Belgelerin depoda olmaması iddiaların yanlış olduğunun kanıtı da değildir.

### 4.3 llms.txt ve özel GEO etiketleri ana başarı ölçütü değil — P2

llms.txt ve llms-full.txt ürün özeti olarak korunabilir. Google'ın güncel rehberine göre llms.txt Google Search görünürlüğünü veya sıralamasını artırmaz; özel GEO şeması da gerekmez. FAQ rich result özelliği 7 Mayıs 2026'dan itibaren Google aramalarında kaldırılmış. Dosya/etiket sayısı başarı göstergesi olmamalı. [Google AI optimizasyon rehberi](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide), [Google güncelleme kaydı](https://developers.google.com/search/updates).

**Yatırım önerisi:** Gerçek vakalar, mühendis katkısı, özgün ölçümler, karşılaştırma varsayımları, doğrulanabilir şirket kimliği ve tutarlı model özellikleri. Soru-cevap müşterinin satın alma kararını desteklemeli. Diğer yapay zekâ servislerinin dosyaları kullanması veya siteyi alıntılaması ayrıca ölçülmeli; garanti edilemez.

### 4.4 Schema görünür içerikle uyuşmuyor — P2

İtalyanca model sayfasındaki üç İngilizce FAQ sorusu görünür metinde bulunmuyor. SEOHead, özel veri verilmediğinde aynı genel FAQ'yu sayfalara ekliyor. Şirket logo alanı marka işareti yerine hangar fotoğrafına işaret ediyor. @type içindeki Manufacturer kullanımı da sözlük açısından gözden geçirilmeli.

**Kanıt:** Canlı /it/models; [SEOHead.tsx:255](<D:/WEB SİTELERİ/stcructiva/client/src/components/SEOHead.tsx:255>), [SEOHead.tsx:263](<D:/WEB SİTELERİ/stcructiva/client/src/components/SEOHead.tsx:263>), [SEOHead.tsx:490](<D:/WEB SİTELERİ/stcructiva/client/src/components/SEOHead.tsx:490>).

**Düzeltme:** Aynı sayfada bulunan, aynı dildeki bilgiyi işaretlemek; gerçek logo; uygun Organization/LocalBusiness ve ürün-üretici ilişkileri; Schema Validator ve desteklenen özellikler için Rich Results Test. Ayrıştırılabilir JSON, anlam ve içerik uyumunun doğru olduğunu göstermez. [Google yapılandırılmış veri kuralları](https://developers.google.com/search/docs/appearance/structured-data/sd-policies), [Schema.org manufacturer alanı](https://schema.org/manufacturer).

### 4.5 Müşteriye uygulama ayrıntıları gösteriliyor — P2

GEO kutusunda “Generative Engine Optimization (GEO / AEO) Knowledge Base”, dil penceresinde “bidirectional hreflang mapping” metinleri bulunuyor. Ürün kararına katkı sağlamıyorlar.

**Kanıt:** [GeoAnswerBox.tsx:267](<D:/WEB SİTELERİ/stcructiva/client/src/components/GeoAnswerBox.tsx:267>), [Navbar.tsx:204](<D:/WEB SİTELERİ/stcructiva/client/src/components/Navbar.tsx:204>).

**Düzeltme:** “Teknik bilgiler ve sık sorulan sorular” gibi müşteri odaklı açıklamalar.

## 5. İçerik mimarisi ve yerel SEO

Model ve sektör katalogları başlangıç için iyi. Ancak modellerin ayrı URL'si yok; seçim yalnızca sayfa içi durum. Footer'daki model bağlantıları aynı /models, sektör bağlantıları aynı /sectors sayfasına gidiyor. Ayrı ürünün paylaşılması ve arama niyetine uygun derin bağlantı sınırlı.

**Kanıt:** [ModelsPage.tsx:12](<D:/WEB SİTELERİ/stcructiva/client/src/pages/ModelsPage.tsx:12>), [Footer.tsx:84](<D:/WEB SİTELERİ/stcructiva/client/src/components/Footer.tsx:84>).

**Öneri:** Önce model seçimini URL'ye taşımak. Yeterli özgün veri varsa ürün/kullanım sayfaları: ölçüler, sınırlar, temel gereksinimi, yalıtım, kapılar, saha kodları, montaj ve gerçek referanslar. Birbirinin kopyası şehir sayfaları üretmekten kaçınmak.

Bilgi merkezi dört kısa İngilizce makale içeriyor. Kaynak, görünür uzman profili ve gerçek projeden hesap örneği eklenebilir. İçerik konuları: fiyatı etkileyen değişkenler, teklif için gerekli saha bilgileri, model seçimi, yalıtım, sevkiyat, garanti ve kurulum. Bunlar ölçülmüş anahtar kelime hacmi önerileri değil; satın alma sürecinden çıkan konular.

Proje kartlarında ülke, yıl ve alan bilgisi var. Farklı projelerde aynı dört genel görsel tekrarlanıyor; havacılık projesindeki görsel çelik birleşim detayına işaret ediyor. Gerçek fotoğraf, izinli müşteri/konum, yapılan iş kapsamı ve sonuçlar referans değerini artırır. Kartların gerçek proje olduğuna dair bağımsız doğrulama yapılmadı. [projectsData.ts:19](<D:/WEB SİTELERİ/stcructiva/client/src/data/projectsData.ts:19>).

Yerel SEO için şirket adı/adres/telefon site, schema ve işletme profillerinde aynı olmalı. Harita bağlantısı belirli tesise değil genel Adana OSB aramasına gidiyor; koordinatlar ayrıca doğrulanmalı. İşletme profili sahipliği, yorumlar ve dizin kayıtları bu kapsamda görülmedi. [siteConfig.ts:16](<D:/WEB SİTELERİ/stcructiva/client/src/config/siteConfig.ts:16>), [SEOHead.tsx:269](<D:/WEB SİTELERİ/stcructiva/client/src/components/SEOHead.tsx:269>).

## 6. Performans

| Üretim dosyası | Boyut | Gzip |
|---|---:|---:|
| Ortak index JavaScript | 666,42 kB | 211,66 kB |
| Firebase JavaScript | 551,32 kB | 142,69 kB |
| Ana CSS | 141,90 kB | 21,60 kB |
| Konfigüratör JavaScript | 26,20 kB | 6,78 kB |
| Fabrika videosu | 14,10 MB | Ölçülmedi |

Bunlar derleme değerleri; sayfa başına toplam aktarım veya gerçek kullanıcı hızı değildir. Gzip boyutu, yayın sunucusunun bu sıkıştırmayı uyguladığını kanıtlamaz.

**Olumlu:** Sayfalar lazy import ile ayrılmış. Hero görselinde fetchPriority=high, ölçüler ve async decoding var. Alt görsellerde lazy yükleme mevcut. Görseller yaklaşık 137–308 kB. Font alanlarına preconnect eklenmiş.

**İyileştirmeler:**

- Dil sağlayıcısı bütün dil sözlüklerini statik import ediyor. Aktif dili ayrı yüklemek ortak paket maliyetini azaltabilir. [translations.ts:47](<D:/WEB SİTELERİ/stcructiva/client/src/data/translations.ts:47>).
- Navbar arama bileşenini ve bağlı arama verilerini doğrudan import ediyor. Açılırken/etkileşim öncesi yükleme değerlendirilmeli. [Navbar.tsx:6](<D:/WEB SİTELERİ/stcructiva/client/src/components/Navbar.tsx:6>).
- Ana sayfa konfigüratörü messageService üzerinden Firebase'e bağlanıyor. Form gönderimi anında yükleme değerlendirilebilir. [HomePage.tsx:19](<D:/WEB SİTELERİ/stcructiva/client/src/pages/HomePage.tsx:19>), [BuildingConfigurator.tsx:4](<D:/WEB SİTELERİ/stcructiva/client/src/components/BuildingConfigurator.tsx:4>).
- 14,1 MB video için açık preload ve mobil kaynak stratejisi yok. Poster mevcut; preload=none/metadata ve daha küçük video değerlendirilmeli. [HomePage.tsx:268](<D:/WEB SİTELERİ/stcructiva/client/src/pages/HomePage.tsx:268>).
- Görsellerde width/height ve srcset/sizes standardı tamamlanmalı. Bazı kapsayıcılar boyut sabitlediği için her ölçüsüz görselin CLS oluşturduğu iddia edilmiyor.

**Ölçüm:** Gerçek mobil LCP, INP, CLS; JavaScript yükü ve işleme süresi. Lighthouse laboratuvar verisi ile Search Console saha verisi ayrı ele alınmalı. Core Web Vitals geçti/kaldı kararı verilmedi.

## 7. Mobil deneyim ve erişilebilirlik

### 7.1 Mobil menü ekran dışına taşıyor — P1

390 px görünümde belge 439 px. Arama, dil, teklif ve hamburger aynı satırda; marka alanıyla birlikte sığmıyor. Hamburger sağ kenarı 439 px'e geliyor.

**Kanıt:** [Mobil ekran görüntüsü](<D:/WEB SİTELERİ/stcructiva/reports/mobile-home-2026-10-13.png>), [Navbar.tsx:85](<D:/WEB SİTELERİ/stcructiva/client/src/components/Navbar.tsx:85>), [Navbar.tsx:117](<D:/WEB SİTELERİ/stcructiva/client/src/components/Navbar.tsx:117>).

**Düzeltme:** Mobilde marka ölçüsü/aksiyon sayısı; kısa CTA veya menü içi CTA; doğru küçülme ve satır davranışı. Yalnızca overflow-x:hidden ekleyip düğmeyi kırpmak çözüm olmaz.

**Kabul:** 360/390/430 px ve uzun çevirilerde yatay belge taşması olmaz; hamburger görünür kalır.

### 7.2 Form alanlarının erişilebilir isimleri eksik — P2

RFQ/konfigüratörde alanlar ağırlıkla placeholder ile tanımlı; bağlı label/aria-label yok. Contact'ta görünür label'lar htmlFor/id ile input'a bağlı değil. name/autocomplete alanları da tamamlanmamış.

**Kanıt:** [RFQPage.tsx:250](<D:/WEB SİTELERİ/stcructiva/client/src/pages/RFQPage.tsx:250>), [ContactPage.tsx:158](<D:/WEB SİTELERİ/stcructiva/client/src/pages/ContactPage.tsx:158>), [BuildingConfigurator.tsx:410](<D:/WEB SİTELERİ/stcructiva/client/src/components/BuildingConfigurator.tsx:410>).

**Düzeltme:** Kalıcı bağlı etiket, name/autocomplete, uygun klavye tipi; inline hata, ilk hataya odak ve başarıda aria-live. Görsel etiket programatik bağlantı yerine geçmez.

### 7.3 El yapımı modallarda odak/klavye davranışı eksik — P2

Fotoğraf, dil, arama ve şartname pencerelerinde tutarlı dialog semantiği, odak sınırı ve odağı geri döndürme görünmüyor. Aramada Escape desteği var; diğerlerinde aynı tamamlanmış davranış yok. Bazı ikonlu kapatma düğmelerinin erişilebilir adı eksik.

**Kanıt:** [HomePage.tsx:69](<D:/WEB SİTELERİ/stcructiva/client/src/pages/HomePage.tsx:69>), [Navbar.tsx:195](<D:/WEB SİTELERİ/stcructiva/client/src/components/Navbar.tsx:195>), [GlobalSearchModal.tsx:330](<D:/WEB SİTELERİ/stcructiva/client/src/components/GlobalSearchModal.tsx:330>), [SpecSheetModal.tsx:52](<D:/WEB SİTELERİ/stcructiva/client/src/components/SpecSheetModal.tsx:52>).

**Düzeltme:** Mevcut erişilebilir Dialog veya native dialog; isimlendirme, Escape, odak yönetimi, arka plan etkileşimini kapatma. Klavye ile tam tur kontrolü.

### 7.4 Hareket tercihi ve sayfa gezintisi — P2

Bölüm reveal animasyonu reduced-motion'a uyuyor; olumlu. Smooth scroll ve ayrı pulse/spin/ping efektlerinde tercih kapsamlı uygulanmıyor. Ana içeriğe atlama bağlantısı yok; bazı başlıklar h2'den h4'e atlıyor.

**Kanıt:** [index.css:11](<D:/WEB SİTELERİ/stcructiva/client/src/index.css:11>), [index.css:17](<D:/WEB SİTELERİ/stcructiva/client/src/index.css:17>), [App.tsx:96](<D:/WEB SİTELERİ/stcructiva/client/src/App.tsx:96>).

**Düzeltme:** Ortak reduced-motion, skip link, görünür klavye odağı ve başlık hiyerarşisi. Kontrast ölçülmediğinden genel WCAG uyumu kararı verilmedi. [Web Interface Guidelines](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md).

## 8. Konfigüratör ve dönüşüm

### 8.1 Seçilen model sonraki adıma aktarılmıyor — P2

S-Series/P-Series seçilse de bağlantı yalnızca /configurator'a gidiyor. Araç Q-Series ile açılıyor. RFQ da Q-Series ve 24 × 48 × 8 varsayılanlarıyla başlıyor.

**Kanıt:** [ModelsPage.tsx:105](<D:/WEB SİTELERİ/stcructiva/client/src/pages/ModelsPage.tsx:105>), [BuildingConfigurator.tsx:10](<D:/WEB SİTELERİ/stcructiva/client/src/components/BuildingConfigurator.tsx:10>), [RFQPage.tsx:37](<D:/WEB SİTELERİ/stcructiva/client/src/pages/RFQPage.tsx:37>).

**Düzeltme:** Model/ölçüleri URL veya ortak teklif taslağıyla taşımak; paylaşılabilir konfigürasyon ve geri dönünce seçim koruma.

### 8.2 Bütün modellere aynı hesap kuralı uygulanıyor — P1/P2

Açıklık kaydırıcısı tüm modellerde 9–45 m. Bu, 24 m üst sınırı yazan P-Series için daha büyük ölçü seçilmesine; 60 m üzeri tanımlanan PEB için 45 m'de sınırlanmaya neden oluyor. Hacim her modelde alan × yükseklik × 0,72; konteyner alan/380 ile hesaplanıyor. GEO tablosunda model bazlı farklı paketleme değerleri var.

Metrik/imperial düğmeleri durum değiştiriyor; kaydırıcı ve gösterim iki seçimde de metreyi esas alıyor. Çizim gerçek döndürülebilir 3D model değil, SVG kesit.

**Kanıt:** [BuildingConfigurator.tsx:38](<D:/WEB SİTELERİ/stcructiva/client/src/components/BuildingConfigurator.tsx:38>), [BuildingConfigurator.tsx:40](<D:/WEB SİTELERİ/stcructiva/client/src/components/BuildingConfigurator.tsx:40>), [BuildingConfigurator.tsx:158](<D:/WEB SİTELERİ/stcructiva/client/src/components/BuildingConfigurator.tsx:158>), [BuildingConfigurator.tsx:155](<D:/WEB SİTELERİ/stcructiva/client/src/components/BuildingConfigurator.tsx:155>), [BuildingConfigurator.tsx:259](<D:/WEB SİTELERİ/stcructiva/client/src/components/BuildingConfigurator.tsx:259>).

**Düzeltme:** Model bazlı min/max ve geometri; gerçek birim dönüşümü; kaba hacim/nakliye tahmininin varsayımları. Mühendislik onayı olmayan değerleri resmi hesap gibi sunmamak. SVG araç “bina ön planlama aracı” olarak adlandırılabilir.

### 8.3 Otomatik özetin “resmi mühendislik şartnamesi” adı beklenti yaratıyor — P2

Özet kullanıcı kaydırıcılarından oluşuyor; referans tarayıcıda üretiliyor ve window.print ile yazdırılıyor. Model/saha doğrulaması yapılmadan sertifika/garanti ifadeleri içeriyor. “Dijital Ön Şartname” ibaresi var, fakat başlıktaki “Resmi Mühendislik Şartnamesi” daha güçlü anlam taşıyor.

**Kanıt:** [SpecSheetModal.tsx:28](<D:/WEB SİTELERİ/stcructiva/client/src/components/SpecSheetModal.tsx:28>), [SpecSheetModal.tsx:58](<D:/WEB SİTELERİ/stcructiva/client/src/components/SpecSheetModal.tsx:58>), [SpecSheetModal.tsx:110](<D:/WEB SİTELERİ/stcructiva/client/src/components/SpecSheetModal.tsx:110>).

**Düzeltme:** Ön konfigürasyon özeti; gerçek kayıtla ilişkili sabit talep numarası; resmi onaylı belgeyi ayrı sunmak. PDF için yazdırma kullanılması tek başına hata değil.

### 8.4 İlk teklif adımı sadeleştirilebilir — P2

Form kişi bilgileri, ülke/şehir, kullanım, ölçü, model, kapsam, takvim ve notları birlikte istiyor. İlk adımda iletişim + proje yeri + kullanım + yaklaşık alan; ayrıntılar ikinci/isteğe bağlı adımda toplanabilir.

Bu bir dönüşüm deneyi önerisidir; terk oranı ölçülmedi. 24 saatte tam fizibilite/BOM/navlun gibi vaatler gerçek satış ekibinin sağlayabildiği kapsam ve süreyle eşleştirilmeli.

## 9. Ölçümleme ve veri bilgilendirmesi

### 9.1 Analitik ve kaynak takibi eksik — P2

Son kaynak kontrolünde client/index.html içine temel GA4 etiketi eklendiği görüldü. Canlı veri alımı ve teklif/WhatsApp/telefon gibi özel dönüşüm olayları doğrulanmadı; uygulama kaynaklarında bu olayların entegrasyonu görülmedi. Firebase yapılandırmasındaki measurementId tek başına Analytics kurulumu değildir; burada Firestore başlatılıyor. Bu bölüm temel GA4 etiketinin mevcut olduğu son durumu dikkate alır.

RFQ UTM source/medium/campaign/content okuyor, ancak mesaja yalnızca source yazıyor. Site içi teklif bağlantıları sorgu parametrelerini taşımıyor; ziyaretçi önce ürünleri gezerse kaynak kaybolabilir. Contact/konfigüratör ortak kaynak modelini kullanmıyor.

**Kanıt:** [firebase.ts:15](<D:/WEB SİTELERİ/stcructiva/client/src/lib/firebase.ts:15>), [RFQPage.tsx:51](<D:/WEB SİTELERİ/stcructiva/client/src/pages/RFQPage.tsx:51>), [RFQPage.tsx:95](<D:/WEB SİTELERİ/stcructiva/client/src/pages/RFQPage.tsx:95>).

**Düzeltme:** Temel GA4 etiketinin canlıda çalışmasını ve doğru mülke veri göndermesini doğrulamak; izin tercihlerine uygun özel dönüşüm olayları; ilk/son kaynak bilgisini ayrı alanlarda saklama; teklif başlangıcı, kalıcı kayıt, WhatsApp/telefon tıklaması ve teknik özet indirme olayları. Yerel tarayıcı kaydı başarılı lead olarak sayılmamalı.

**İş ölçütleri:** Ziyaret→kalıcı teklif, nitelikli teklif, satışa dönüşüm, kaynak kalitesi, yanıt süresi, ülke/dil sonuçları. Güncel Google rehberi Search Console'daki Generative AI performance report'u da öneriyor; hesap erişimi ayrıca kontrol edilmeli. [Google AI optimizasyon rehberi](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).

### 9.2 Gizlilik bilgisi ve iletişim tercihi açıklaştırılmalı — P2

Depoda/genel site bağlantılarında ayrı gizlilik/KVKK sayfası görülmedi. RFQ iletişim onayı başlangıçta işaretli ve gönderim ona bağlı. Contact/konfigüratör kişisel bilgileri tarayıcı depolamasına da yazıyor.

**Kanıt:** [RFQPage.tsx:47](<D:/WEB SİTELERİ/stcructiva/client/src/pages/RFQPage.tsx:47>), [RFQPage.tsx:449](<D:/WEB SİTELERİ/stcructiva/client/src/pages/RFQPage.tsx:449>), [messageService.ts:42](<D:/WEB SİTELERİ/stcructiva/client/src/services/messageService.ts:42>).

**Düzeltme:** Veri sorumlusu, amaç, alıcılar, saklama ve iletişim kanalı açıklanmalı. Teklif için gerekli veri işleme ile pazarlama tercihi ayrı değerlendirilmeli. Tarayıcıda kişisel veri tutulması azaltılmalı; önbellek süresi/temizleme davranışı tanımlanmalı. Bu arayüz/veri akışı tespitidir; hukuki uygunluk kararı verilmedi.

## 10. Korunması gereken güçlü taraflar

- Türkçe varsayılan dil ve dil bazlı URL yapısı.
- Canonical, hreflang ve x-default temeli.
- Eski yollar için tanımlanmış 301 yönlendirmeler.
- 404 HTML/noindex üretimi ve React NotFound.
- Çalışan kod bölme, tip kontrolü ve istemci derlemesi.
- Hero yükleme önceliği, ölçüler, alt görsellerde lazy yükleme.
- Telefon/e-posta/WhatsApp ve teklif çağrıları.
- Özgün referanslara dönüştürülebilecek model, proje ve bilgi merkezi yapısı.

## Uygulama sırası

### Aşama 1 — Güvenilir çalışma

1. Gerçek yönetici kimliği ve Firestore yetkileri.
2. Kalıcı kayıt onayına bağlı teklif başarı akışı.
3. Bildirim servisini yayın ortamına bağlamak.
4. Statik üretimin tekrar çalıştırma hatası ve temiz yayın kontrolü.
5. Mobil navbar taşması.

**Kabul:** Yetkisiz veri erişimi yok; başarısız talepte yanlış başarı yok; iki üretim aynı yapıyı veriyor; 360–430 px'de menü görünür.

### Aşama 2 — İçerik ve indeksleme

1. Teknik ekip onaylı tek model/garanti kaydı.
2. Öncelikli satış dillerinde tam çeviri.
3. Sayfa-dil envanterinden sitemap/hreflang; gerçek lastmod.
4. Yönetim noindex, robots grupları ve sayfa bazlı schema.
5. Model seçimini URL ve teklif taslağına taşımak.

**Kabul:** Statik/React/belge/llms verileri aynı; schema görünür dil ve bilgiyle eşleşiyor; yalnızca hazır sayfalar keşif listelerinde.

### Aşama 3 — Görünürlük ve dönüşüm

1. Gerçek projeler, belgeli şirket kimliği, mühendis katkılı içerik.
2. İhtiyaca göre derin model/sektör sayfaları.
3. Dil, arama, Firebase ve video yükünün azaltılması.
4. Form/modal erişilebilirliği ve veri bilgilendirmesi.
5. Search Console + uygun analitik + nitelikli teklif takibi.

**Kabul:** Gerçek mobil performans ölçülüyor; kalıcı talepler kaynaklarına bağlanıyor; görünürlük satış çıktısıyla değerlendiriliyor.

## Kaynak dosya bulguları — kısa liste

| Dosya ve satır | Bulgu |
|---|---|
| client/src/pages/DashboardPage.tsx:31 | localStorage tabanlı giriş kabulü |
| client/src/pages/DashboardPage.tsx:87 | İstemci kodunda sabit parolalar |
| client/src/services/messageService.ts:53 | Uzak yazma hatası başarıyı durdurmuyor |
| client/src/services/messageService.ts:89 | Kalıcı teslim doğrulanmadan dönüş |
| server/index.ts:34 | SMTP sertifika doğrulaması kapalı |
| scripts/prerender.ts:3174 | İç içe HTML'yi ilk kapanan div ile değiştirme |
| scripts/prerender.ts:3192 | Çıktıyı sonraki üretimin girdisi yapma |
| client/public/robots.txt:13 | Özel botta genel yasaklar eksik |
| scripts/prerender.ts:2707 | Tüm URL'lere üretim günü lastmod |
| client/src/data/modelsData.ts:309 | Eksik dilde İngilizce temel veri |
| client/src/pages/ArticleDetailPage.tsx:10 | Dil bazlı makale seçilmiyor |
| client/src/components/GeoAnswerBox.tsx:237 | Ürün kaydıyla çelişen değerler |
| client/src/components/SEOHead.tsx:490 | Görünür olmayan genel FAQ |
| client/src/components/Navbar.tsx:117 | Mobilde sığmayan sağ aksiyon grubu |
| client/src/pages/RFQPage.tsx:250 | Bağlı erişilebilir etiket yok |
| client/src/pages/ContactPage.tsx:158 | Label/input bağlantısı eksik |
| client/src/components/SpecSheetModal.tsx:52 | Dialog/odak yönetimi eksik |
| client/src/pages/ModelsPage.tsx:105 | Model sonraki sayfaya taşınmıyor |
| client/src/components/BuildingConfigurator.tsx:160 | Tüm modellere aynı sınır |
| client/src/components/BuildingConfigurator.tsx:38 | Tüm modellere aynı hacim katsayısı |
| client/src/pages/RFQPage.tsx:95 | UTM medium/campaign/content kaydı eksik |

[Doğrulama özeti](<D:/WEB SİTELERİ/stcructiva/reports/verification-2026-10-13.json>) · [Mobil kanıt](<D:/WEB SİTELERİ/stcructiva/reports/mobile-home-2026-10-13.png>)
