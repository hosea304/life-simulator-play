var swiper = new Swiper(".slide-content", {
  slidesPerView: 1,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
  },
});

var startButton1 = document.getElementById("button1");
var startButton2 = document.getElementById("button2");

startButton1.onclick = function () {
  // Tambahkan class fade-out ke container slide saat keluar
  document.querySelector(".slide-container").classList.add("fade-out");

  // Setelah 0.5 detik, pindah ke halaman 2
  setTimeout(function () {
    window.location.href = "../maingame_green/Main_Game.html";
  }, 0);
};

startButton2.onclick = function () {
  // Tambahkan class fade-out ke container slide saat keluar
  document.querySelector(".slide-container").classList.add("fade-out");

  // Setelah 0.5 detik, pindah ke halaman 3
  setTimeout(function () {
    window.location.href = "../maingame_yellow/Main_Game.html";
  }, 0);
};

// Jika halaman dimuat dengan animasi fade-in
document.addEventListener("DOMContentLoaded", function () {
  // Tambahkan class fade-in ke container slide saat masuk
  document.querySelector(".slide-container").classList.add("fade-in");
});

// Setelah animasi fade-out selesai, hapus class fade-out dan tambahkan class fade-in
document
  .querySelector(".slide-container")
  .addEventListener("animationend", function (event) {
    if (event.animationName === "fadeOut") {
      this.classList.remove("fade-out");
      this.classList.add("fade-in");
    }
  });

// Setelah animasi fade-in selesai, hapus class fade-in
document
  .querySelector(".slide-container")
  .addEventListener("animationend", function (event) {
    if (event.animationName === "fadeIn") {
      this.classList.remove("fade-in");
    }
  });
