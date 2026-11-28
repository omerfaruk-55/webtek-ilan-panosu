const basvuruFormu = document.getElementById("basvuru");
const basvuruIleti = document.getElementById("basvuru-ileti");

basvuruFormu.addEventListener("submit", function (olay) {
  // Sayfanın yenilenmesini engelle
  olay.preventDefault();

  // Kullanıcıya bilgi mesajını göster
  basvuruIleti.textContent = "Başvurunuz alındı.";

  // Form alanlarını temizle
  basvuruFormu.reset();
});