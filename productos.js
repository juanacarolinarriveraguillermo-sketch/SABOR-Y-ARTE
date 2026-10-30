"use strict";

/* =========================================================
   SABOR Y ARTE — productos.js
   Índice:
     1. Clase Producto (POO)
     2. Datos: imágenes y lista de productos
     3. Menú móvil y año del footer
     4. Slider principal (Swiper 4)
     5. Galería dock
     6. Catálogo: filtros, búsqueda, orden y modal
   ========================================================= */

/* =========================================================
   1. CLASE Producto
   ========================================================= */
class Producto {
  constructor(id, nombre, categoria, precio, descripcion, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
    this.descripcion = descripcion;
    this.imagen = imagen;
  }

  precioFormateado() {
    return `S/ ${this.precio.toFixed(2)}`;
  }

  /** Precio en soles */

  
  /** true si TODAS las palabras aparecen en nombre, descripción o categoría (sin importar tildes) */
  coincideCon(palabras) {
    const base = normalizar(`${this.nombre} ${this.descripcion} ${this.categoria}`);
    return palabras.every((p) => base.includes(p));
  }
}

/** Minúsculas y sin tildes: "Salmón" -> "salmon" (mismo largo que el original) */
function normalizar(texto) {
  return Array.from(String(texto), (c) =>
    (c.normalize("NFD").replace(/[\u0300-\u036f]/g, "")[0] || c).toLowerCase()
  ).join("");
}

/** Escapa HTML para insertar texto de forma segura */
function esc(texto) {
  return String(texto).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

/** Escapa el texto y resalta con <mark> las palabras buscadas */
function resaltar(texto, palabras) {
  if (!palabras.length) return esc(texto);
  const norm = normalizar(texto);
  const marcas = new Array(texto.length).fill(false);

  palabras.forEach((p) => {
    let i = norm.indexOf(p);
    while (i !== -1) {
      for (let k = i; k < i + p.length; k++) marcas[k] = true;
      i = norm.indexOf(p, i + p.length);
    }
  });

  let salida = "", abierto = false;
  Array.from(texto).forEach((c, i) => {
    if (marcas[i] && !abierto) { salida += "<mark>"; abierto = true; }
    if (!marcas[i] && abierto) { salida += "</mark>"; abierto = false; }
    salida += esc(c);
  });
  return salida + (abierto ? "</mark>" : "");
}


/* =========================================================
   2. DATOS
   ========================================================= */
const unsplash = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=85`;

const IMAGENES = {
  comida: unsplash("1601050690117-94f5f6fa8bd7"),
  ensalada: unsplash("1550304943-4f24f54ddde9"),
  pasta: unsplash("1555949258-eb67b1ef0ceb"),
  carne: unsplash("1544025162-d76694265947"),
  pollo: unsplash("1598103442097-8b74394b95c6"),
  salmon: unsplash("1467003909585-2f8a72700288"),
  postre: unsplash("1565958011703-44f9829ba187"),
  chocolate: unsplash("1578985545062-69928b1d9587"),
  bebida: unsplash("1544145945-f90425340c7e"),
  cafe: unsplash("1495474472287-4d71bcdd2085"),
  fruta: unsplash("1490474418585-ba9bad8fd0ea"),
};

// Lista de productos: [id, nombre, categoría, precio, descripción, imagen]
// "imagen": clave de IMAGENES (Unsplash) o nombre legacy resuelto con syaImageFromLegacy (assets/paths.js).
const productos = [
  [1, "Lomo saltado", "Fondos", 28, "Carne salteada, papas doradas y arroz.", "lomo saltado.png"],
  [2, "Ají de gallina", "Fondos", 24, "Clásico plato peruano con crema de ají amarillo.", "agallina.jpg"],
  [3, "Arroz con pollo", "Fondos", 22, "Arroz verde acompañado de pollo y salsa criolla.", "acpollo.jpg"],
  [4, "Seco de res", "Fondos", 27, "Carne cocida a fuego lento con cilantro y frejoles.", "seco.png"],
  [5, "Pollo a la brasa", "Fondos", 30, "Pollo dorado acompañado de papas y ensalada.", "brasa.jpg"],
  [6, "Pasta Alfredo", "Fondos", 25, "Pasta cremosa con salsa Alfredo y parmesano.", "alfredo.jpg"],
  [7, "Lasagna de carne", "Fondos", 29, "Capas de pasta, carne y salsa de tomate.", "lasagna.jpg"],
  [8, "Risotto de champiñones", "Fondos", 26, "Arroz cremoso con champiñones y parmesano.", "risotto.jpg"],
  [9, "Salmón al horno", "Fondos", 35, "Salmón horneado con vegetales frescos.", "salmon.jpg"],
  [10, "Pollo en salsa de champiñones", "Fondos", 27, "Filete de pollo con salsa cremosa.", "champiñones.jpg"],
  [11, "Piadinas", "Entradas", 18, "Masa fina crocante rellena, presentación clásico y caprese.", "piadina.jpg"],
  [12, "Bruschettas", "Entradas", 14, "Pan tostado con tomate, albahaca y aceite de oliva.", "bruschetta.jpg"],
  [13, "Tequeños", "Entradas", 15, "Bocaditos rellenos de queso para compartir.", "tequeños.jpg"],
  [14, "Mini empanadas", "Entradas", 16, "Empanadas artesanales en formato para eventos.", "empanadas.jpg"],
  [15, "Causa limeña", "Entradas", 19, "Papa amarilla, ají y relleno de pollo.", "causa.jpg"],
  [16, "Cocktail de camarones", "Entradas", 24, "Camarones con salsa especial y vegetales.", "cocktail.jpg"],
  [17, "Brochetas de pollo", "Entradas", 20, "Brochetas grilladas con vegetales.", "brochetas.jpg"],
  [18, "Tabla de quesos", "Entradas", 32, "Selección de quesos, frutas y frutos secos.", "quesos.jpg"],
  [19, "Cheesecake", "Postres", 16, "Base de galleta y crema de queso con frutos rojos.", "chescake.jpg"],
  [20, "Tres leches", "Postres", 15, "Bizcocho suave bañado en tres tipos de leche.", "tresleches.jpg"],
  [21, "Tiramisú", "Postres", 18, "Postre italiano con café, cacao y crema.", "tiramisu.jpg"],
  [22, "Brownie", "Postres", 12, "Brownie de chocolate con textura suave.", "brownie.jpg"],
  [23, "Torta de chocolate", "Postres", 20, "Torta húmeda con cobertura de chocolate.", "torta de chocolate.jpg"],
  [24, "Panna cotta", "Postres", 14, "Postre italiano cremoso con frutos rojos.", "pana cotta.jpg"],
  [25, "Alfajores", "Postres", 10, "Galletas suaves rellenas con manjar blanco.", "alfajor.jpg"],
  [26, "Mousse de maracuyá", "Postres", 13, "Mousse ligero y refrescante de maracuyá.", "mousse.jpeg"],
  [27, "Limonada clásica", "Bebidas", 8, "Limonada natural refrescante.", "limonada.jpg"],
  [28, "Chicha morada", "Bebidas", 8, "Bebida tradicional peruana de maíz morado.", "chichamorada.png"],
  [29, "Maracuyá sour sin alcohol", "Bebidas", 12, "Bebida tropical con maracuyá y hielo.", "maracuya.jpg"],
  [30, "Jugo de naranja", "Bebidas", 9, "Jugo natural de naranja recién preparado.", "naranja.png"],
  [31, "Jugo de fresa", "Bebidas", 10, "Jugo natural de fresa.", "jfresa.jpeg"],
  [32, "Agua saborizada", "Bebidas", 7, "Agua infusionada con frutas frescas.", "agua saborizada.jpg"],
  [33, "Café americano", "Bebidas", 7, "Café recién preparado para reuniones.", "cafea.jpeg"],
  [34, "Capuchino", "Bebidas", 10, "Café con leche espumada y acabado cremoso.", "capuchino.jpg"],
  [35, "Mini croissants", "Entradas", 13, "Croissants pequeños para coffee break.", "Mini croissants.jpg"],
  [36, "Mini sándwiches", "Entradas", 18, "Selección de mini sándwiches para eventos.", "mini sandwinch.jpg"],
  [37, "Canapés gourmet", "Entradas", 25, "Variedad de canapés para recepciones.", "canape.jpg"],
  [38, "Papas gratinadas", "Fondos", 17, "Papas horneadas con queso gratinado.", "papa gratinadas.jpg"],
  [39, "Quiche de verduras", "Entradas", 19, "Tarta salada con verduras y queso.", "quiche de verduras.jpg"],
  [40, "Copa de frutas", "Postres", 11, "Frutas frescas de temporada presentadas en copa.", "copa.jpg"],
].map(([id, nombre, categoria, precio, descripcion, img]) => {
  const rutaLocal =
    typeof syaImageFromLegacy === "function" ? syaImageFromLegacy(img) : "";
  const imagen = IMAGENES[img] || rutaLocal || "";
  return new Producto(id, nombre, categoria, precio, descripcion, imagen);
});

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     3. MENÚ MÓVIL Y AÑO DEL FOOTER
     ======================================================= */
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");

  if (menuToggle && nav) {
    const setMenu = (abierto) => {
      nav.classList.toggle("active", abierto);
      menuToggle.setAttribute("aria-expanded", abierto);
    };

    menuToggle.addEventListener("click", () => setMenu(!nav.classList.contains("active")));
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* =======================================================
     4. SLIDER PRINCIPAL (Swiper 4.0.7)
     ======================================================= */
  try {
  if (typeof Swiper !== "undefined" && document.querySelector(".main-slider")) {
    const interleaveOffset = 0.5; // intensidad del efecto parallax

    const mainSlider = new Swiper(".main-slider", {
      loop: true,
      speed: 1000,
      loopAdditionalSlides: 10,
      grabCursor: true,
      watchSlidesProgress: true,
      autoplay: { delay: 4500, disableOnInteraction: false },
      navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
      pagination: { el: ".swiper-pagination", clickable: true },
      on: {
        // Parallax: la imagen de fondo se desplaza distinto al slide
        progress() {
          for (let i = 0; i < this.slides.length; i++) {
            const slide = this.slides[i];
            const fondo = slide.querySelector(".slide-bgimg");
            if (fondo) fondo.style.transform =
              `translateX(${slide.progress * this.width * interleaveOffset}px)`;
          }
        },
        touchStart() {
          for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].style.transition = "";
          }
        },
        setTransition(velocidad) {
          for (let i = 0; i < this.slides.length; i++) {
            const slide = this.slides[i];
            const fondo = slide.querySelector(".slide-bgimg");
            slide.style.transition = `${velocidad}ms`;
            if (fondo) fondo.style.transition = `${velocidad}ms`;
          }
        },
      },
    });

    const navSlider = new Swiper(".nav-slider", {
      loop: true,
      loopAdditionalSlides: 10,
      speed: 1000,
      spaceBetween: 6,
      slidesPerView: 5,
      centeredSlides: true,
      touchRatio: 0.2,
      slideToClickedSlide: true,
      direction: "vertical",
      on: {
        click() { mainSlider.autoplay.stop(); },
      },
    });

    // Sincroniza ambos sliders
    mainSlider.controller.control = navSlider;
    navSlider.controller.control = mainSlider;
  }
  } catch (error) {
    console.error("Error al iniciar el slider:", error);
  }

  /* =======================================================
     5. GALERÍA DOCK (se genera a partir de las imágenes)
     ======================================================= */
  const dock = document.getElementById("galeriaDock");

  if (dock) {
    const fotos = Object.values(IMAGENES).slice(0, 8);
    const zonas = "<i></i>".repeat(9);

    dock.innerHTML = fotos.map((foto, i) => `
      <a href="#" style="--i:${i}; --img:url('${foto}');" aria-label="Foto ${i + 1}">
        <span class="img"></span>
        <aside class="hover-zone">${zonas}</aside>
      </a>`).join("");

    dock.addEventListener("click", (e) => {
      if (e.target.closest("a")) e.preventDefault();
    });
  }

  /* =======================================================
     6. CATÁLOGO: búsqueda (dinámica / estática), filtros y orden
     ======================================================= */
  const grid = document.getElementById("productosGrid");
  if (!grid) return;

  const form = document.getElementById("formBusqueda");
  const caja = document.getElementById("searchBox");
  const buscador = document.getElementById("buscador");
  const mensaje = document.getElementById("busquedaMensaje");
  const contadorCaracteres = document.getElementById("busquedaContador");
  const btnLimpiarBusqueda = document.getElementById("btnLimpiarBusqueda");
  const botonesModo = document.querySelectorAll(".mode-btn");
  const rango = document.getElementById("precioMax");
  const precioValor = document.getElementById("precioValor");
  const orden = document.getElementById("ordenProductos");
  const contador = document.getElementById("contadorProductos");
  const vacio = document.getElementById("sinResultados");
  const vacioTexto = document.getElementById("sinResultadosTexto");
  const btnReset = document.getElementById("btnReset");
  const btnResetVacio = document.getElementById("btnResetVacio");
  const botonesFiltro = document.querySelectorAll(".filter-btn");

  const BUSQUEDA = { min: 2, max: 40, retardo: 250 };
  const PRECIO_MAX = Number(rango.max);

  let modo = "dinamica";        // "dinamica" (en vivo) | "estatica" (con botón)
  let categoriaActual = "Todos";
  let precioMaximo = Number(rango.value);
  let terminoAplicado = "";     // último texto válido que se está usando para filtrar
  let temporizador = null;

  /* ---------- Validación del texto ---------- */

  /** Devuelve { valido, texto, error } */
  function validarBusqueda(bruto) {
    const texto = bruto.replace(/\s+/g, " ").trim();

    if (texto === "") return { valido: true, texto: "", vacio: true };
    if (texto.length < BUSQUEDA.min)
      return { valido: false, texto, error: `Escribe al menos ${BUSQUEDA.min} caracteres.` };
    if (texto.length > BUSQUEDA.max)
      return { valido: false, texto, error: `Máximo ${BUSQUEDA.max} caracteres.` };
    if (!/^[\p{L}\p{N}\s'’.,&-]+$/u.test(texto))
      return { valido: false, texto, error: "Solo letras, números y espacios (sin símbolos como < > { } $ %)." };
    if (!/[\p{L}\p{N}]/u.test(texto))
      return { valido: false, texto, error: "Escribe alguna letra o número." };

    return { valido: true, texto };
  }

  function mostrarEstado(tipo, texto) {
    // tipo: "error" | "ok" | "info" | ""
    caja.classList.toggle("is-invalid", tipo === "error");
    caja.classList.toggle("is-valid", tipo === "ok");
    buscador.setAttribute("aria-invalid", tipo === "error");
    mensaje.className = "search-msg" + (tipo ? ` is-${tipo}` : "");
    mensaje.textContent = texto || "";

    if (tipo === "error") {
      caja.classList.remove("shake");
      void caja.offsetWidth;            // reinicia la animación
      caja.classList.add("shake");
    }
  }

  function actualizarAyudas() {
    const largo = buscador.value.length;
    contadorCaracteres.textContent = `${largo}/${BUSQUEDA.max}`;
    contadorCaracteres.classList.toggle("is-limit", largo >= BUSQUEDA.max);
    btnLimpiarBusqueda.hidden = largo === 0;
  }

  /* ---------- Render ---------- */

  function palabrasBuscadas() {
    return normalizar(terminoAplicado).split(" ").filter(Boolean);
  }

  function hayFiltrosActivos() {
    return terminoAplicado !== "" || categoriaActual !== "Todos" ||
           precioMaximo < PRECIO_MAX || orden.value !== "default";
  }

  /** Dibuja la lista de productos en la grilla */
  function renderizarProductos(lista) {
    const palabras = palabrasBuscadas();

    vacio.classList.toggle("d-none", lista.length > 0);
    btnReset.hidden = !hayFiltrosActivos();

    contador.textContent = `${lista.length} producto${lista.length === 1 ? "" : "s"}` +
      (terminoAplicado ? ` para «${terminoAplicado}»` : "");

    vacioTexto.textContent = terminoAplicado
      ? `No hay resultados para «${terminoAplicado}» con los filtros actuales.`
      : "Prueba otra búsqueda o modifica los filtros.";

    grid.innerHTML = lista.map((p) => `
      <div class="col-6 col-md-4 col-lg-3">
        <article class="producto-card">
          <div class="producto-img">
            <img src="${esc(p.imagen)}" alt="${esc(p.nombre)}" loading="lazy">
            <span class="categoria">${esc(p.categoria)}</span>
          </div>
          <div class="producto-info">
            <h3>${resaltar(p.nombre, palabras)}</h3>
            <p>${resaltar(p.descripcion, palabras)}</p>
            <div class="d-flex justify-content-between align-items-center">
              <span class="precio">${p.precioFormateado()}</span>
              <button class="btn-detalle" type="button" data-id="${p.id}">Ver detalle</button>
            </div>
          </div>
        </article>
      </div>`).join("");
  }

  /** Aplica categoría + búsqueda + precio máximo y ordena */
  function aplicarFiltros() {
    const palabras = palabrasBuscadas();

    const resultado = productos.filter((p) =>
      (categoriaActual === "Todos" || p.categoria === categoriaActual) &&
      p.precio <= precioMaximo &&
      (palabras.length === 0 || p.coincideCon(palabras))
    );

    if (orden.value === "menor") resultado.sort((a, b) => a.precio - b.precio);
    if (orden.value === "mayor") resultado.sort((a, b) => b.precio - a.precio);
    if (orden.value === "nombre") resultado.sort((a, b) => a.nombre.localeCompare(b.nombre, "es"));

    renderizarProductos(resultado);
  }

  /* ---------- Búsqueda ---------- */

  /**
   * Valida lo escrito y, si es correcto, lo aplica.
   * `desdeBoton` = true cuando viene de Enter / botón Buscar (modo estático).
   */
  function ejecutarBusqueda(desdeBoton) {
    const r = validarBusqueda(buscador.value);

    if (!r.valido) {
      mostrarEstado("error", r.error);
      return;                           // no se filtra con datos inválidos
    }

    if (r.vacio) {
      // En modo estático, pulsar "Buscar" con la caja vacía es un error; en vivo solo limpia.
      if (desdeBoton && modo === "estatica") {
        mostrarEstado("error", "Escribe qué producto quieres buscar.");
        buscador.focus();
        return;
      }
      terminoAplicado = "";
      mostrarEstado("", "");
      aplicarFiltros();
      return;
    }

    terminoAplicado = r.texto;
    aplicarFiltros();
    mostrarEstado("ok", modo === "estatica" ? "Búsqueda realizada." : "");
  }

  function limpiarBusqueda() {
    clearTimeout(temporizador);
    buscador.value = "";
    terminoAplicado = "";
    mostrarEstado("", "");
    actualizarAyudas();
    aplicarFiltros();
    buscador.focus();
  }

  function limpiarTodo() {
    categoriaActual = "Todos";
    botonesFiltro.forEach((b) => b.classList.toggle("active", b.dataset.category === "Todos"));
    rango.value = PRECIO_MAX;
    precioMaximo = PRECIO_MAX;
    precioValor.textContent = PRECIO_MAX;
    orden.value = "default";
    limpiarBusqueda();
  }

  function cambiarModo(nuevo) {
    modo = nuevo;
    clearTimeout(temporizador);
    botonesModo.forEach((b) => {
      const activo = b.dataset.modo === nuevo;
      b.classList.toggle("active", activo);
      b.setAttribute("aria-pressed", activo);
    });
    caja.classList.toggle("modo-estatico", nuevo === "estatica");
    buscador.placeholder = nuevo === "dinamica"
      ? "Buscar producto, plato o bebida..."
      : "Escribe y presiona Enter o «Buscar»";
    mostrarEstado("", "");
    if (nuevo === "dinamica") ejecutarBusqueda(false);   // se pone al día con lo escrito
  }

  /* --- Modal de detalle --- */
  const modal = document.getElementById("modalProducto");

  function abrirModal(p) {
    document.getElementById("modalProductoImg").src = p.imagen;
    document.getElementById("modalProductoImg").alt = p.nombre;
    document.getElementById("modalProductoCategoria").textContent = p.categoria;
    document.getElementById("modalProductoNombre").textContent = p.nombre;
    document.getElementById("modalProductoDescripcion").textContent = p.descripcion;
    document.getElementById("modalProductoPrecio").textContent = p.precioFormateado();

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  }

  function cerrarModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  modal.querySelectorAll("[data-cerrar-modal]").forEach((el) =>
    el.addEventListener("click", cerrarModal));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") cerrarModal();
  });

  // Un solo listener para todos los botones "Ver detalle"
  grid.addEventListener("click", (e) => {
    const boton = e.target.closest(".btn-detalle");
    if (!boton) return;

    const producto = productos.find((p) => p.id === Number(boton.dataset.id));
    if (producto) abrirModal(producto);
  });

  /* --- Eventos de filtros y búsqueda --- */
  botonesFiltro.forEach((boton) => {
    boton.addEventListener("click", () => {
      botonesFiltro.forEach((b) => b.classList.remove("active"));
      boton.classList.add("active");
      categoriaActual = boton.dataset.category;
      aplicarFiltros();
    });
  });

  // Búsqueda dinámica: mientras se escribe (con pequeño retardo)
  buscador.addEventListener("input", () => {
    actualizarAyudas();
    if (modo !== "dinamica") { mostrarEstado("", ""); return; }
    clearTimeout(temporizador);
    temporizador = setTimeout(() => ejecutarBusqueda(false), BUSQUEDA.retardo);
  });

  // Búsqueda estática: Enter o botón "Buscar"
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    clearTimeout(temporizador);
    ejecutarBusqueda(true);
  });

  btnLimpiarBusqueda.addEventListener("click", limpiarBusqueda);
  buscador.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && buscador.value) { e.stopPropagation(); limpiarBusqueda(); }
  });

  botonesModo.forEach((b) => b.addEventListener("click", () => cambiarModo(b.dataset.modo)));

  orden.addEventListener("change", aplicarFiltros);

  rango.addEventListener("input", () => {
    precioMaximo = Number(rango.value);
    precioValor.textContent = precioMaximo;
    aplicarFiltros();
  });

  btnReset.addEventListener("click", limpiarTodo);
  btnResetVacio.addEventListener("click", limpiarTodo);

  // Render inicial
  actualizarAyudas();
  aplicarFiltros();
});