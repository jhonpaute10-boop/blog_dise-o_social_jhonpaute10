const galeriaData = {
  gal1: [
    "assets/img/sol1.1.png",
    "assets/img/sol1.2.png",
    "assets/img/sol1.3.png",
    "assets/img/sol1.4.png",
  ],
  gal2: [
    "assets/img/sol2.1.png",
    "assets/img/sol2.2.png",
    "assets/img/sol2.3.png",
    "assets/img/sol2.4.png",
  ],
  gal3: ["assets/img/sol3.1.png", "assets/img/sol3.2.png"],
  gal4: [
    "assets/img/sol4.1.png",
    "assets/img/sol4.2.png",
    "assets/img/sol4.3.png",
  ],
  gal5: [
    "assets/img/sol5.1.png",
    "assets/img/sol5.2.png",
    "assets/img/sol5.3.png",
  ],
  gal6: [
    "assets/img/sol6.1.png",
    "assets/img/sol6.2.png",
    "assets/img/sol6.3.png",
  ],
};

// --- GALERÍA ---
function openGallery(id) {
  const imgs = galeriaData[id];
  const lightbox = document.getElementById("lightbox");
  const cont = document.getElementById("lbImgs");

  if (!imgs || !lightbox || !cont) return;

  cont.innerHTML = "";
  imgs.forEach((src) => {
    const im = document.createElement("img");
    im.src = src;
    im.classList.add("img-gal-ready"); // Clase específica para las fotos de la galería
    cont.appendChild(im);
  });

  lightbox.style.display = "flex";
}

function closeGallery() {
  document.getElementById("lightbox").style.display = "none";
}

// --- APARECER POCO A POCO ---
function reveal() {
  const items = document.querySelectorAll(".scroll-anim"); // Solo animamos lo que tenga esta clase
  items.forEach((item) => {
    const windowHeight = window.innerHeight;
    const elementTop = item.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal); // Para que funcione al cargar

// Hacer que la flecha baje automáticamente a la sección de Contexto
document.querySelector(".arrow-down").addEventListener("click", function () {
  const nextSection = document.querySelector(".contexto");
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
});
