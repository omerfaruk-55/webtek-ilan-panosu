# Staj ve İş İlanı Panosu

Web Teknolojileri dersi dönem ödevi kapsamında geliştirilen; duyarlı (responsive), veri odaklı ve istemci taraflı kalıcılığa sahip staj ve iş ilanı panosu uygulaması.

## Canlı Önizleme
* **GitHub Pages:** `https://omerfaruk-55.github.io/webtek-ilan-panosu/`

## Özellikler
* **Semantik HTML5 ve Erişilebilirlik:** `<header>`, `<main>`, `<section>`, `<footer>` yapısı, etiketli form alanları, `aria-live` durum bildirimleri ve klavye odak (`:focus-visible`) desteği.
* **Duyarlı Tasarım ve Dinamik Tema:** CSS Grid (`auto-fit`, `minmax`) ve Flexbox ile mobil-masaüstü uyumlu yerleşim; HSL renk modeli (`--ton: 19`) tabanlı tema yapısı.
* **Dinamik Veri Okuma (`fetch`):** İlan verilerinin `ilanlar.json` dosyasından asenkron olarak çekilmesi ve 4 farklı durumun (`yukleniyor`, `bos`, `hata`, `veri`) yönetilmesi.
* **Anlık Filtreleme ve Arama:** Alan (`Ön yüz`, `Arka uç`, `Veri`, `Sistem`), tür (`Staj`, `İş`), serbest metin araması ve favori filtresinin eşzamanlı çalışması.
* **Favori Kalıcılığı (`localStorage`):** Seçilen favori ilanların tarayıcı deposunda saklanarak sayfa yenilemelerinde korunması.
* **İstemci Taraflı Form Doğrulama:** HTML5 doğrulama kuralları ve JavaScript destekli başvuru formu kontrolü.

## Dosya Yapısı
* `index.html` — Sayfa iskeleti, filtre kontrolleri ve başvuru formu
* `stil.css` — HSL renk değişkenleri, duyarlı ızgara düzeni ve erişilebilirlik stilleri
* `app.js` — `fetch` veri çekme, filtreleme, DOM oluşturma ve `localStorage` favori yönetimi
* `form.js` — Başvuru formu doğrulama ve gönderim yönetimi
* `ilanlar.json` — Staj ve iş ilanlarını barındıran JSON veri kaynağı

## Yerelde Çalıştırma
Uygulama `fetch` API kullandığı için doğrudan `file://` protokolü yerine yerel bir sunucu üzerinden çalıştırılmalıdır:
1. Projeyi klonlayın veya indirin.
2. VS Code üzerinde **Live Server** eklentisi ile `index.html` dosyasını başlatın.
