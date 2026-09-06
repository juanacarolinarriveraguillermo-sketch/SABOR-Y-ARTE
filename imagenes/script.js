/* =========================================================
   SABOR Y ARTE - SCRIPT.JS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("nav");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.querySelectorAll(".nav a");
  const backTop = document.getElementById("backTop");
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");
  const toast = document.getElementById("toast");

  /* ================= MENÚ MÓVIL ================= */

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    document.body.classList.toggle("no-scroll", nav.classList.contains("open"));

    const icon = menuToggle.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      document.body.classList.remove("no-scroll");

      const icon = menuToggle.querySelector("i");
      icon.classList.add("fa-bars");
      icon.classList.remove("fa-xmark");
    });
  });

  /* ================= NAVEGACIÓN ACTIVA ================= */

  const sections = document.querySelectorAll("main section[id]");

  function updateActiveLink() {
    let current = "inicio";
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      if (scrollPosition >= section.offsetTop) {
        current = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${current}`
      );
    });
  }

  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink();

  /* ================= BOTÓN VOLVER ARRIBA ================= */

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      backTop.classList.add("visible");
    } else {
      backTop.classList.remove("visible");
    }
  });

  backTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  /* ================= FILTRO DEL MENÚ ================= */

  const filters = document.querySelectorAll(".filter");
  const dishes = document.querySelectorAll(".dish-card");

  filters.forEach(filter => {
    filter.addEventListener("click", () => {
      filters.forEach(btn => btn.classList.remove("active"));
      filter.classList.add("active");

      const category = filter.dataset.category;

      dishes.forEach(dish => {
        const show =
          category === "todos" ||
          dish.dataset.category === category;

        dish.classList.toggle("hide", !show);
      });
    });
  });

  /* ================= FORMULARIO ================= */

  form.addEventListener("submit", event => {
    event.preventDefault();

    const formData = new FormData(form);
    const nombre = formData.get("nombre");

    formMessage.textContent =
      `Gracias, ${nombre}. Hemos recibido tu solicitud. Te contactaremos pronto.`;

    showToast();

    form.reset();
  });

  function showToast() {
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 4000);
  }

  /* ================= VIDEO DEMO ================= */

  const playVideo = document.getElementById("playVideo");

  playVideo.addEventListener("click", () => {
    const videoBox = document.getElementById("videoBox");

    videoBox.innerHTML = `
      <div class="video-placeholder">
        <button class="play-button" id="closeVideo" aria-label="Cerrar">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <span>VIDEO DE SABOR Y ARTE</span>
        <small>Aquí puedes colocar tu video real de presentación.</small>
      </div>
    `;

    document.getElementById("closeVideo").addEventListener("click", () => {
      location.reload();
    });
  });

  /* ================= SLIDER DEMO ================= */

  const dots = document.querySelectorAll(".dot");
  const prev = document.querySelector(".slider-btn.prev");
  const next = document.querySelector(".slider-btn.next");
  const hero = document.querySelector(".hero");

  const heroBackgrounds = [
    "linear-gradient(90deg, rgba(26,21,17,.82), rgba(26,21,17,.50), rgba(26,21,17,.20)), linear-gradient(135deg, #6b5545, #a88c6d 48%, #3c3028)",
    "linear-gradient(90deg, rgba(26,21,17,.82), rgba(26,21,17,.50), rgba(26,21,17,.20)), linear-gradient(135deg, #5d4a3d, #bca17d 48%, #44352b)",
    "linear-gradient(90deg, rgba(26,21,17,.82), rgba(26,21,17,.50), rgba(26,21,17,.20)), linear-gradient(135deg, #475047, #9b9672 48%, #403c30)"
  ];

  let currentSlide = 0;

  function changeSlide(index) {
    currentSlide = (index + heroBackgrounds.length) % heroBackgrounds.length;
    hero.style.background = heroBackgrounds[currentSlide];

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentSlide);
    });
  }

  prev.addEventListener("click", () => changeSlide(currentSlide - 1));
  next.addEventListener("click", () => changeSlide(currentSlide + 1));

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => changeSlide(index));
  });

  setInterval(() => {
    changeSlide(currentSlide + 1);
  }, 6000);

  /* ================= AÑO AUTOMÁTICO ================= */

  document.getElementById("year").textContent = new Date().getFullYear();

  /* ================= FECHA MÍNIMA ================= */

  const dateInput = document.querySelector('input[type="date"]');

  if (dateInput) {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    dateInput.min = `${year}-${month}-${day}`;
  }
});


/* =========================================================
   CARRUSEL - SECCIÓN NOSOTROS
   ========================================================= */

const aboutSlides = document.querySelectorAll(".about-slide");
const aboutDots = document.querySelectorAll(".about-dot");
const aboutPrev = document.querySelector(".about-prev");
const aboutNext = document.querySelector(".about-next");

let aboutCurrent = 0;
let aboutInterval;


/* =========================================================
   MOSTRAR SLIDE
   ========================================================= */

function showAboutSlide(index) {

  aboutSlides.forEach((slide) => {
    slide.classList.remove("active");
  });

  aboutDots.forEach((dot) => {
    dot.classList.remove("active");
  });

  aboutSlides[index].classList.add("active");
  aboutDots[index].classList.add("active");

  aboutCurrent = index;
}


/* =========================================================
   SIGUIENTE
   ========================================================= */

function nextAboutSlide() {

  let next = aboutCurrent + 1;

  if (next >= aboutSlides.length) {
    next = 0;
  }

  showAboutSlide(next);
}


/* =========================================================
   ANTERIOR
   ========================================================= */

function prevAboutSlide() {

  let previous = aboutCurrent - 1;

  if (previous < 0) {
    previous = aboutSlides.length - 1;
  }

  showAboutSlide(previous);
}


/* =========================================================
   BOTONES
   ========================================================= */

aboutNext.addEventListener("click", () => {

  nextAboutSlide();

  restartAboutCarousel();

});


aboutPrev.addEventListener("click", () => {

  prevAboutSlide();

  restartAboutCarousel();

});


/* =========================================================
   INDICADORES
   ========================================================= */

aboutDots.forEach((dot, index) => {

  dot.addEventListener("click", () => {

    showAboutSlide(index);

    restartAboutCarousel();

  });

});


/* =========================================================
   AUTOPLAY
   ========================================================= */

function startAboutCarousel() {

  aboutInterval = setInterval(() => {

    nextAboutSlide();

  }, 5000);

}


/* =========================================================
   REINICIAR AUTOPLAY
   ========================================================= */

function restartAboutCarousel() {

  clearInterval(aboutInterval);

  startAboutCarousel();

}


/* =========================================================
   INICIAR
   ========================================================= */

if (aboutSlides.length > 0) {

  showAboutSlide(0);

  startAboutCarousel();

}