// app.js: ilanlar.json dosyasını okur, filtreler ve ilanları kart olarak sayfaya basar.
const ADRES = "ilanlar.json";
const $ = (secici) => document.querySelector(secici);

const ALAN_ADI = { "on-yuz": "Ön yüz", "arka-uc": "Arka uç", veri: "Veri", sistem: "Sistem" };

let ilanlar = [];

// Dört durum tek yerden yönetilir: yukleniyor, bos, hata, veri.
function durum(tur, mesaj) {
  $("#durum").dataset.durum = tur;
  $("#durum").textContent = mesaj;
}

// Bir ilan nesnesinden bir kart (<li>) üretir.
function kart(ilan) {
  const li = document.createElement("li");
  li.className = "kart";
  li.dataset.id = ilan.id;

  const baslik = document.createElement("h3");
  baslik.textContent = ilan.pozisyon;

  const firma = document.createElement("p");
  firma.textContent = `${ilan.firma} · ${ilan.sehir}`;

  const bilgi = document.createElement("p");
  bilgi.textContent = `${ALAN_ADI[ilan.alan] ?? ilan.alan} · ` +
    `${ilan.tur === "staj" ? "Staj" : "İş"} · son başvuru ${ilan.sonBasvuru}`;

  const aciklama = document.createElement("p");
  aciklama.textContent = ilan.aciklama;

  li.append(baslik, firma, bilgi, aciklama);
  return li;
}

// Verilen listeyi #ilanlar içine çizer ve durumu günceller.
function ciz(liste) {
  $("#ilanlar").replaceChildren(...liste.map(kart));
  if (liste.length === 0) {
    durum("bos", "Eşleşen ilan bulunamadı.");
  } else {
    durum("veri", `${liste.length} / ${ilanlar.length} ilan gösteriliyor`);
  }
}

// Seçili alan, tür ve arama kelimesine göre ilanları süzer.
function filtrele() {
  const secilenAlan = $("#filtre-alan").value;
  const secilenTur = $("#filtre-tur").value;
  const aranan = $("#filtre-arama").value.trim().toLocaleLowerCase("tr");

  const suzulen = ilanlar.filter((ilan) => {
    const alanUygun = !secilenAlan || ilan.alan === secilenAlan;
    const turUygun = !secilenTur || ilan.tur === secilenTur;
    const metin = `${ilan.pozisyon} ${ilan.firma} ${ilan.sehir} ${ilan.aciklama}`.toLocaleLowerCase("tr");
    const aramaUygun = !aranan || metin.includes(aranan);

    return alanUygun && turUygun && aramaUygun;
  });

  ciz(suzulen);
}

// Filtre kontrollerine olay dinleyicileri bağla
$("#filtre-alan").addEventListener("change", filtrele);
$("#filtre-tur").addEventListener("change", filtrele);
$("#filtre-arama").addEventListener("input", filtrele);

async function baslat() {
  durum("yukleniyor", "İlanlar yükleniyor…");
  try {
    const yanit = await fetch(ADRES);

    if (!yanit.ok) {
      throw new Error(`HTTP ${yanit.status}`);
    }

    ilanlar = await yanit.json();
    filtrele();
  } catch (hata) {
    durum("hata", "İlanlar yüklenemedi: " + hata.message);
  }
}

baslat();