function hamburg() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateX(0)"; // Geser ke posisi 0 (Muncul di layar)
}

function cancel() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateX(100%)"; // Geser 100% ke kanan (Ngumpet)
}

// =========================================
// Fungsi Navigasi HP dengan Jeda Animasi
// =========================================
function navigateMenu(event, targetId) {
  // 1. Mencegah browser langsung lompat ke section tujuan
  event.preventDefault();

  // 2. Beri jeda waktu (misal: 400 milidetik / 0.4 detik)
  // Waktu ini pas untuk biarin efek neon-nya nyala dulu
  setTimeout(() => {
    // 3. Tutup menu sidebar-nya
    cancel();

    // 4. Gulung layar ke section yang dituju dengan mulus (smooth)
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  }, 600); // 🔥 Angka 400 ini bisa kamu ganti (misal 500 untuk 0.5 detik, 600 untuk 0.6 detik)
}

// Animasi Menulis
const texts = ["BACKEND DEVELOPER", "LARAVEL LOVERS", "GOD OF WAR FANS"];

let speed = 100;

const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
  if (charcterIndex < texts[textIndex].length) {
    textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
    charcterIndex++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(eraseText, 1000);
  }
}

function eraseText() {
  if (textElements.innerHTML.length > 0) {
    textElements.innerHTML = textElements.innerHTML.slice(0, -1);
    setTimeout(eraseText, 50);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    charcterIndex = 0;
    setTimeout(typeWriter, 500);
  }
}

window.onload = typeWriter;

// Ambil elemen kursor
const cursor = document.querySelector(".custom-cursor");

// Bikin kursor ngikutin pergerakan mouse
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Ambil semua elemen yang bisa diklik (link dan tombol)
const clickables = document.querySelectorAll("a, button");

// Tambahkan efek membesar saat mouse masuk ke tombol/link
clickables.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("hover-effect");
  });
  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover-effect");
  });
});

// =========================================
// AUDIO CONTROLLER (DUAL BUTTON SYSTEM)
// =========================================
const audio = document.getElementById("bg-music");
const audioBtnPC = document.getElementById("audio-control-pc");
const audioBtnMobile = document.getElementById("audio-control-mobile");
const iconPC = audioBtnPC.querySelector("i");
const iconMobile = audioBtnMobile.querySelector("i");

audio.volume = 0.3; // Volume suara

function toggleAudio() {
  if (audio.paused) {
    audio.play();
    // Nyalakan efek dan ganti ikon di KEDUA tombol
    audioBtnPC.classList.add("playing");
    audioBtnMobile.classList.add("playing");
    iconPC.className = "fa-solid fa-volume-high";
    iconMobile.className = "fa-solid fa-volume-high";
  } else {
    audio.pause();
    // Matikan efek dan ganti ikon di KEDUA tombol
    audioBtnPC.classList.remove("playing");
    audioBtnMobile.classList.remove("playing");
    iconPC.className = "fa-solid fa-music";
    iconMobile.className = "fa-solid fa-music";
  }
}

// Hubungkan fungsi ke masing-masing tombol
audioBtnPC.addEventListener("click", toggleAudio);
audioBtnMobile.addEventListener("click", toggleAudio);
