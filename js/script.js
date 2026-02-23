// Subscrbe YouTube Tamzidan Mahdiyin

function hamburg() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(0px)";
}
function cancel() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(-500px)";
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
