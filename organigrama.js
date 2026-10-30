/* =====================================================================
   Sabor y Arte · Nosotros  —  un solo script para toda la página
   Secciones: 1) Slider  2) Datos  3) Almacenamiento  4) Organigrama
              5) Equipo  6) C.V. (modal + PDF en assets/cv)
              7) Matrices de responsabilidad  8) Inicio
   ===================================================================== */

/* ---------------------------------------------------------------------
   1) SLIDER (3 a 5 imágenes) con flechas y avance automático
   --------------------------------------------------------------------- */
(function iniciarSlider() {
  const slide = document.querySelector('.slide');
  const hero = document.querySelector('.hero');
  const siguiente = () => slide.appendChild(slide.querySelector('.item'));
  const anterior = () => {
    const items = slide.querySelectorAll('.item');
    slide.prepend(items[items.length - 1]);
  };
  document.querySelector('.next').addEventListener('click', siguiente);
  document.querySelector('.prev').addEventListener('click', anterior);

  let timer = setInterval(siguiente, 6000);
  hero.addEventListener('mouseenter', () => clearInterval(timer));
  hero.addEventListener('mouseleave', () => { timer = setInterval(siguiente, 6000); });
})();

/* ---------------------------------------------------------------------
   2) DATOS (salen del Word "Matriz de Responsabilidades")
   --------------------------------------------------------------------- */
const LEYENDA = { R: 'Responsable', M: 'Monitoreo', D: 'Diseñador', A: 'Analista' };
const CICLO = ['', 'R', 'M', 'D', 'A'];
const PRIORIDADES = ['Alta', 'Media', 'Baja'];

const PERSONAS_BASE = [
  {
    id: 'juana', nombre: 'Juana Rivera', cargo: 'Coordinadora (Líder)', lider: true,
    email: 'juanacarolinarriveraguillermo@gmail.com',
    descripcion: 'Coordina al equipo y monitorea el avance de los proyectos.',
    programas: ['intelleji idea', 'Visual studio', 'NetBeans'],
    lenguajes: ['Java', 'JavaScript'],
    habilidades: ['Liderazgo', 'Organización', 'Comunicación', 'Responsabilidad', 'Toma de decisiones']
  },
  {
    id: 'adriana', nombre: 'Adriana Ancco', cargo: 'Contenido y QA (pruebas)',
    email: 'adriana@saboryarte.com',
    descripcion: 'Contenido y QA (pruebas)',
    programas: ['Visual Studio Code', 'NetBeans','IntelliJ Idea'],
    lenguajes: ['Python', 'Java', 'JavaScript'],
    habilidades: ['Trabajo en equipo', 'Creatividad', 'Puntualidad', 'Adaptabilidad', 'Proactividad']
  },
  {
    id: 'medaly', nombre: 'Medaly', cargo: 'Diseñadora UI/UX',
    email: 'medaly@saboryarte.com',
    descripcion: 'Diseñadora UI/UX',
    programas: ['Figma', 'Canva', 'Visual Studio Code'],
    lenguajes: ['Thinkercad ', 'Java', 'JavaScript'],
    habilidades: ['Creatividad', 'Atención al detalle', 'Trabajo en equipo', 'Empatía', 'Responsabilidad']
  },
  {
    id: 'maria', nombre: 'María Vera', cargo: 'Desarrolladora Front-End (maquetación)',
    email: 'maria.vera@saboryarte.com',
    descripcion: 'Apoya en la maquetación de la página web.',
    programas: ['Visual Studio Code', 'Figma', 'GitHub'],
    lenguajes: ['Pyton', 'Java', 'JavaScript'],
    habilidades: ['Comunicación', 'Empatía', 'Trabajo en equipo', 'Paciencia', 'Resolución de problemas']
  },
  {
    id: 'jose', nombre: 'José Flores', cargo: 'Desarrollador Front-End (lógica JavaScript)',
    email: 'jose.flores@99.com',
    descripcion: 'Apoya en la lógica de la página web.',
    programas: ['Visual Studio Code', 'IntelliJ Idea', 'NetBeans'],
    lenguajes: ['Python', 'Java', 'JavaScript'],
    habilidades: ['Organización', 'Compromiso', 'Trabajo en equipo', 'Pensamiento crítico', 'Adaptabilidad']
  }
];

/* Prioridad por defecto según el tipo de requerimiento (se puede cambiar en la tabla) */
function prioridadPorDefecto(texto) {
  const t = texto.toLowerCase();
  if (/descripción del equipo|matriz de responsabilidad|mapa de organización|framework|pruebas|header|búsqueda|arraylist/.test(t)) return 'Alta';
  if (/objetivos|conclusiones|mapa del sitio|carpeta|información del rubro/.test(t)) return 'Baja';
  return 'Media';
}

const MATRICES_WORD = [
 {
  "id": "avance1",
  "titulo": "Avance 1",
  "personas": [
   "juana",
   "adriana",
   "medaly",
   "maria",
   "jose"
  ],
  "filas": [
   {
    "sec": "A. Presentación PPT",
    "act": "PPT: desarrollo de diapositivas",
    "vals": [
     "M",
     "R",
     "A",
     "A",
     "A"
    ]
   },
   {
    "sec": "A. Presentación PPT",
    "act": "Información del rubro y Misión y Visión",
    "vals": [
     "M",
     "R",
     "A",
     "A",
     "A"
    ]
   },
   {
    "sec": "A. Presentación PPT",
    "act": "Mapa del sitio web",
    "vals": [
     "M",
     "A",
     "R",
     "D",
     "A"
    ]
   },
   {
    "sec": "A. Presentación PPT",
    "act": "Wireframe de Inicio: portada, 3 productos/servicios (imagen, descripción, precio), clientes representativos",
    "vals": [
     "A",
     "R",
     "A",
     "R",
     "D"
    ]
   },
   {
    "sec": "A. Presentación PPT",
    "act": "Header y Navbar: nombre y logo de la empresa, menú, Inicio, Productos, Nosotros, Contacto",
    "vals": [
     "M",
     "D",
     "A",
     "A",
     "R"
    ]
   },
   {
    "sec": "B. Página web (Productos)",
    "act": "Carpeta de imágenes",
    "vals": [
     "M",
     "A",
     "A",
     "R",
     "A"
    ]
   },
   {
    "sec": "B. Página web (Productos)",
    "act": "Pagina de inicio: menú",
    "vals": [
     "M",
     "A",
     "A",
     "D",
     "R"
    ]
   },
   {
    "sec": "B. Página web (Productos)",
    "act": "Pagina de inicio: SLIDERS",
    "vals": [
     "R",
     "A",
     "D",
     "A",
     "A"
    ]
   },
   {
    "sec": "B. Página web (Productos)",
    "act": "Pagina de inicio: Nuestros servicios",
    "vals": [
     "M",
     "D",
     "A",
     "A",
     "R"
    ]
   },
   {
    "sec": "B. Página web (Productos)",
    "act": "Pagina de inicio: nuestro menú",
    "vals": [
     "M",
     "A",
     "D",
     "R",
     "A"
    ]
   },
   {
    "sec": "B. Página web (Productos)",
    "act": "Pagina de inicio: conocenos",
    "vals": [
     "R",
     "D",
     "A",
     "A",
     "A"
    ]
   },
   {
    "sec": "B. Página web (Productos)",
    "act": "Pagina de inicio: nuestro trabajo",
    "vals": [
     "R",
     "A",
     "D",
     "A",
     "A"
    ]
   },
   {
    "sec": "B. Página web (Productos)",
    "act": "Pagina de inicio: video",
    "vals": [
     "R",
     "D",
     "A",
     "A",
     "A"
    ]
   },
   {
    "sec": "B. Página web (Productos)",
    "act": "Pagina de inicio: CLIENTES",
    "vals": [
     "R",
     "A",
     "D",
     "A",
     "A"
    ]
   },
   {
    "sec": "B. Página web (Productos)",
    "act": "Pagina de inicio: FORMULARIO",
    "vals": [
     "M",
     "A",
     "A",
     "R",
     "A"
    ]
   },
   {
    "sec": "B. Página web (Productos)",
    "act": "CREACION DEL Video representativo (mínimo 1 min)",
    "vals": [
     "A",
     "R",
     "D",
     "M",
     "A"
    ]
   },
   {
    "sec": "B. Página web (Productos)",
    "act": "Footer: 3 redes sociales, contacto personal, 3 páginas del rubro, logo UTP con link",
    "vals": [
     "R",
     "A",
     "D",
     "A",
     "M"
    ]
   }
  ]
 },
 {
  "id": "avance2",
  "titulo": "Avance 2",
  "personas": [
   "juana",
   "maria",
   "medaly",
   "jose",
   "adriana"
  ],
  "filas": [
   {
    "sec": "A. Presentación PPT",
    "act": "Mapa del sitio web y Wireframe ( Productos)",
    "vals": [
     "M",
     "A",
     "R",
     "A",
     "D"
    ]
   },
   {
    "sec": "A. Presentación PPT",
    "act": "Herramientas (HTML, CSS, JS y framework), conclusiones y unificación del PPT",
    "vals": [
     "M",
     "A",
     "A",
     "A",
     "R"
    ]
   },
   {
    "sec": "B. Página web (Inicio y Productos)",
    "act": "Header y Navbar: título, logo y menú Inicio / Productos",
    "vals": [
     "M",
     "D",
     "A",
     "A",
     "R"
    ]
   },
   {
    "sec": "B. Página web (Inicio y Productos)",
    "act": "PRODUCTOS: slider de 3 a 5 imágenes",
    "vals": [
     "M",
     "R",
     "D",
     "A",
     "A"
    ]
   },
   {
    "sec": "B. Página web (Inicio y Productos)",
    "act": "Footer (Productos)",
    "vals": [
     "A",
     "A",
     "A",
     "A",
     "A"
    ]
   },
   {
    "sec": "B. Página web (Inicio y Productos)",
    "act": "Productos: slider de 3 a 5 imágenes",
    "vals": [
     "A",
     "M",
     "A",
     "R",
     "D"
    ]
   },
   {
    "sec": "B. Página web (Inicio y Productos)",
    "act": "Productos: 20 o más productos y servicios como objetos en ArrayList (imagen, información, precio)",
    "vals": [
     "M",
     "R",
     "A",
     "A",
     "M"
    ]
   },
   {
    "sec": "B. Página web (Inicio y Productos)",
    "act": "CARPETA DE IAMGENES",
    "vals": [
     "M",
     "D",
     "D",
     "D",
     "D"
    ]
   },
   {
    "sec": "B. Página web (Inicio y Productos)",
    "act": "Búsqueda estática (filtrado: condición, resultado que cambia y actualiza)",
    "vals": [
     "R",
     "A",
     "M",
     "D",
     "A"
    ]
   },
   {
    "sec": "B. Página web (Inicio y Productos)",
    "act": "Búsqueda dinámica (filtrado: condición, acción con botón, resultado)",
    "vals": [
     "R",
     "A",
     "A",
     "A",
     "A"
    ]
   },
   {
    "sec": "B. Página web (Inicio y Productos)",
    "act": "Estilos CSS con framework y diseño responsive",
    "vals": [
     "M",
     "D",
     "D",
     "",
     ""
    ]
   }
  ]
 },
 {
  "id": "avance3",
  "titulo": "Avance 3",
  "personas": [
   "juana",
   "adriana",
   "medaly",
   "maria",
   "jose"
  ],
  "filas": [
   {
    "sec": "A. Presentación PPT",
    "act": "Objetivos (general y específicos)",
    "vals": [
     "M",
     "M",
     "D",
     "R",
     "A"
    ]
   },
   {
    "sec": "A. Presentación PPT",
    "act": "Mapa del sitio web",
    "vals": [
     "M",
     "R",
     "M",
     "D",
     "A"
    ]
   },
   {
    "sec": "A. Presentación PPT",
    "act": "Wireframe (Nosotros)",
    "vals": [
     "M",
     "A",
     "A",
     "M",
     "R"
    ]
   },
   {
    "sec": "A. Presentación PPT",
    "act": "Herramientas (lenguajes y framework)",
    "vals": [
     "M",
     "A",
     "A",
     "R",
     "D"
    ]
   },
   {
    "sec": "A. Presentación PPT",
    "act": "Conclusiones y unificación del PPT",
    "vals": [
     "M",
     "D",
     "R",
     "A",
     "A"
    ]
   },
   {
    "sec": "B. Página web",
    "act": "Header y Navbar: título, logo, menú y enlazado entre páginas (HTML y JavaScript)",
    "vals": [
     "M",
     "D",
     "A",
     "A",
     "R"
    ]
   },
   {
    "sec": "B. Página web",
    "act": "Nosotros: slider de 3 a 5 imágenes",
    "vals": [
     "M",
     "R",
     "D",
     "A",
     "M"
    ]
   },
   {
    "sec": "B. Página web",
    "act": "Nosotros: mapa de organización (Líder y cargos)",
    "vals": [
     "M",
     "A",
     "M",
     "R",
     "A"
    ]
   },
   {
    "sec": "B. Página web",
    "act": "Nosotros: descripción del equipo (5) con C.V.: 3 programas, foto presentable, 3 lenguajes, 5 habilidades blandas",
    "vals": [
     "R",
     "M",
     "R",
     "A",
     "D"
    ]
   },
   {
    "sec": "B. Página web",
    "act": "Nosotros: botón para descargar C.V. en PDF",
    "vals": [
     "M",
     "A",
     "D",
     "R",
     "M"
    ]
   },
   {
    "sec": "B. Página web",
    "act": "Nosotros: certificados de trabajo, prácticas y capacitación",
    "vals": [
     "M",
     "D",
     "M",
     "A",
     "R"
    ]
   },
   {
    "sec": "B. Página web",
    "act": "Nosotros: matriz de responsabilidad de los requerimientos con nivel de prioridad",
    "vals": [
     "R",
     "A",
     "A",
     "M",
     "D"
    ]
   },
   {
    "sec": "B. Página web",
    "act": "Footer",
    "vals": [
     "M",
     "R",
     "A",
     "M",
     "A"
    ]
   },
   {
    "sec": "B. Página web",
    "act": "Framework (Bootstrap / Spring Boot) y diseño responsive",
    "vals": [
     "M",
     "A",
     "M",
     "R",
     "D"
    ]
   },
   {
    "sec": "B. Página web",
    "act": "Pruebas y revisión final del proyecto",
    "vals": [
     "M",
     "A",
     "R",
     "A",
     "D"
    ]
   }
  ]
 }
];

function matricesBase() {
  return MATRICES_WORD.map(m => ({
    id: m.id,
    titulo: m.titulo,
    personas: m.personas.slice(),
    filas: m.filas.map(f => ({ sec: f.sec, act: f.act, vals: f.vals.slice(), prio: prioridadPorDefecto(f.act) }))
  }));
}

/* ---------------------------------------------------------------------
   3) ALMACENAMIENTO (el navegador recuerda fotos, certificados y matrices)
   --------------------------------------------------------------------- */
const K_PERFILES = 'sya_perfiles_v1';
const K_MATRICES = 'sya_matrices_v1';

function leer(clave, porDefecto) {
  try { const v = localStorage.getItem(clave); return v ? JSON.parse(v) : porDefecto; }
  catch (e) { return porDefecto; }
}
function guardar(clave, valor) {
  try { localStorage.setItem(clave, JSON.stringify(valor)); return true; }
  catch (e) {
    alert('No se pudo guardar: el navegador se quedó sin espacio. Prueba con una imagen más liviana o elimina algún certificado.');
    return false;
  }
}

let perfiles = (function () {
  const guardados = leer(K_PERFILES, {});
  return PERSONAS_BASE.map(p => Object.assign(
    { foto: null, certs: { trabajo: [], practicas: [], capacitacion: [] } },
    JSON.parse(JSON.stringify(p)),
    guardados[p.id] || {}
  ));
})();
let matrices = leer(K_MATRICES, null) || matricesBase();

const guardarPerfiles = () => {
  const o = {}; perfiles.forEach(p => { o[p.id] = p; });
  return guardar(K_PERFILES, o);
};
const guardarMatrices = () => guardar(K_MATRICES, matrices);

/* ---------- utilidades ---------- */
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const persona = id => perfiles.find(p => p.id === id);
const primerNombre = p => p.nombre.split(' ')[0];
const inicial = p => p.nombre.trim().charAt(0).toUpperCase();
const fotoUrl = p => p.foto || `assets/image_users/${p.id}/${p.id}.png`;
const estiloFoto = p => {
  const url = fotoUrl(p);
  return url ? `style="background-image:url('${url}')"` : '';
};

/** Cuenta cuántas veces tiene cada rol una persona, en todas las matrices */
function conteoRoles(id) {
  const c = { R: 0, M: 0, D: 0, A: 0 };
  matrices.forEach(m => {
    const i = m.personas.indexOf(id);
    if (i < 0) return;
    m.filas.forEach(f => { if (c[f.vals[i]] !== undefined) c[f.vals[i]]++; });
  });
  return c;
}

/* ---------------------------------------------------------------------
   4) ORGANIGRAMA (líder + cargos)
   --------------------------------------------------------------------- */
function nodoOrg(p) {
  return `
    <div class="org-nodo">
      <div class="avatar ${fotoUrl(p) ? 'con-foto' : ''}" ${estiloFoto(p)}>${esc(inicial(p))}</div>
      <strong>${esc(p.nombre)}</strong>
      <span class="cargo">${esc(p.cargo)}</span>
      ${p.lider ? '<span class="rol-tag">Líder del proyecto</span>' : ''}
    </div>`;
}
function pintarOrganigrama() {
  const lider = perfiles.find(p => p.lider) || perfiles[0];
  const resto = perfiles.filter(p => p !== lider);
  $('#organigramaCont').innerHTML = `
    <div class="org-lider">${nodoOrg(lider)}</div>
    <div class="org-linea-v baja"></div>
    <div class="org-hijos">${resto.map(p => `<div class="org-hijo">${nodoOrg(p)}</div>`).join('')}</div>`;
}

/* ---------------------------------------------------------------------
   5) DESCRIPCIÓN DEL EQUIPO (5 tarjetas)
   --------------------------------------------------------------------- */
function pintarEquipo() {
  $('#equipoCont').innerHTML = perfiles.map(p => {
    const c = conteoRoles(p.id);
    return `
    <div class="col-12 col-sm-6 col-lg-4 col-xl">
      <article class="miembro">
        <div class="miembro-foto ${fotoUrl(p) ? 'con-foto' : ''}" ${estiloFoto(p)}>
          <span class="inicial">${esc(inicial(p))}</span>
        </div>
        <div class="miembro-cuerpo">
          <span class="cargo">${esc(p.cargo)}</span>
          <h3>${esc(p.nombre)}</h3>
          <p>${esc(p.descripcion)}</p>
          <div class="chips">${p.lenguajes.map(l => `<span class="chip">${esc(l)}</span>`).join('')}</div>
          <div class="mini-roles" title="Veces que tiene cada rol en las 3 matrices">
            <span class="rr"><b>R</b>${c.R}</span><span class="mm"><b>M</b>${c.M}</span>
            <span class="dd"><b>D</b>${c.D}</span><span class="aa"><b>A</b>${c.A}</span>
          </div>
          <button type="button" class="btn-dark-sa" data-ver="${p.id}">Ver C.V.</button>
        </div>
      </article>
    </div>`;
  }).join('');
}

function refrescarVistas() {
  pintarOrganigrama();
  pintarEquipo();
  if (cvActual && modalCV._isShown) pintarCV();
}

/* ---------------------------------------------------------------------
   6) C.V. : modal y archivos PDF en assets/cv/
   --------------------------------------------------------------------- */
const modalCV = new bootstrap.Modal($('#modalCV'));
let cvActual = null;     // id de la persona abierta

const cvPdfUrl = id => `assets/cv/${id}/cv_${id}.pdf`;

function pintarCV() {
  const p = persona(cvActual);
  $('#cvTitulo').textContent = 'C.V. · ' + p.nombre;

  const c = conteoRoles(p.id);
  const lista = arr => `<ul>${arr.filter(Boolean).map(x => `<li>${esc(x)}</li>`).join('')}</ul>`;

  $('#cvCuerpo').innerHTML = `
    <div class="cv-cab">
      <div class="cv-foto ${fotoUrl(p) ? 'con-foto' : ''}" ${estiloFoto(p)}>${esc(inicial(p))}</div>
      <div>
        <span class="cargo">${esc(p.cargo)}</span>
        <h3>${esc(p.nombre)}</h3>
        <p>✉ ${esc(p.email)} &nbsp;·&nbsp; 📍 Lima, Perú</p>
        <p>${esc(p.descripcion)}</p>
      </div>
    </div>
    <div class="row g-3">
      <div class="col-md-4"><div class="cv-bloque"><h4>Programas (3)</h4>${lista(p.programas)}</div></div>
      <div class="col-md-4"><div class="cv-bloque"><h4>Lenguajes (3)</h4>${lista(p.lenguajes)}</div></div>
      <div class="col-md-4"><div class="cv-bloque"><h4>Habilidades blandas (5)</h4>${lista(p.habilidades)}</div></div>
      <div class="col-12"><div class="cv-bloque"><h4>Roles en las matrices</h4>
        <div class="mini-roles mb-0"><span class="rr"><b>R</b>${c.R} responsable</span><span class="mm"><b>M</b>${c.M} monitoreo</span><span class="dd"><b>D</b>${c.D} diseño</span><span class="aa"><b>A</b>${c.A} análisis</span></div>
      </div></div>
    </div>`;
}

function abrirCV(id) {
  cvActual = id;
  pintarCV();
  modalCV.show();
}

$('#cvAbrir').addEventListener('click', () => {
  const p = persona(cvActual);
  if (!p) return;
  window.open(cvPdfUrl(p.id), '_blank', 'noopener,noreferrer');
});

document.addEventListener('click', e => {
  const bVer = e.target.closest('[data-ver]');
  if (bVer) abrirCV(bVer.dataset.ver);
});
document.addEventListener('keydown', e => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('.org-nodo')) {
    e.preventDefault(); abrirCV(e.target.dataset.ver);
  }
});

/* ---------- descargar C.V. (PDF en assets/cv/) ---------- */
$('#cvPDF').addEventListener('click', () => {
  const p = persona(cvActual);
  if (!p) return;
  const enlace = document.createElement('a');
  enlace.href = cvPdfUrl(p.id);
  enlace.download = `cv_${p.id}.pdf`;
  enlace.rel = 'noopener';
  document.body.appendChild(enlace);
  enlace.click();
  enlace.remove();
});

/* ---------------------------------------------------------------------
   7) MATRICES DE RESPONSABILIDAD (interactivas)
   --------------------------------------------------------------------- */
let matrizActiva = 0;

function pintarTabs() {
  $('#tabsMatriz').innerHTML = matrices.map((m, i) =>
    `<li class="nav-item"><button type="button" class="nav-link ${i === matrizActiva ? 'active' : ''}" data-tab="${i}">${esc(m.titulo)}</button></li>`).join('');
}

function pintarFiltroPersonas() {
  const sel = $('#filtroPersona');
  const previo = sel.value;
  sel.innerHTML = '<option value="">Todas las personas</option>' +
    perfiles.map(p => `<option value="${p.id}">${esc(primerNombre(p))}</option>`).join('');
  sel.value = previo;
}

function pintarMatriz() {
  const m = matrices[matrizActiva];
  const q = $('#buscar').value.trim().toLowerCase();
  const fp = $('#filtroPersona').value;
  const fr = $('#filtroRol').value;
  const fprio = $('#filtroPrioridad').value;
  const colFp = fp ? m.personas.indexOf(fp) : -1;
  const cols = m.personas.map((id, i) => i).filter(i => !fp || i === colFp);

  /* qué filas se muestran */
  const visibles = m.filas.map((f, idx) => ({ f, idx })).filter(({ f }) => {
    if (q && !f.act.toLowerCase().includes(q)) return false;
    if (fprio && f.prio !== fprio) return false;
    if (fr) {
      const revisar = fp ? [colFp] : m.personas.map((_, i) => i);
      if (!revisar.some(i => f.vals[i] === fr)) return false;
    }
    if (fp && !fr && !f.vals[colFp]) return false;
    return true;
  });

  let html = '<thead><tr><th class="th-act">Actividad / Requerimiento</th>' +
    cols.map(i => `<th>${esc(primerNombre(persona(m.personas[i])))}${persona(m.personas[i]).lider ? '<br><small>(Coord.)</small>' : ''}</th>`).join('') +
    '<th>Prioridad</th><th></th></tr></thead><tbody>';

  if (!visibles.length) {
    html += `<tr><td colspan="${cols.length + 3}" class="vacio">No hay actividades con esos filtros.</td></tr>`;
  } else {
    let secPrev = null;
    visibles.forEach(({ f, idx }) => {
      if (f.sec !== secPrev) {
        html += `<tr class="seccion-fila"><td colspan="${cols.length + 3}">${esc(f.sec)}</td></tr>`;
        secPrev = f.sec;
      }
      html += `<tr data-fila="${idx}"><td class="act"><span class="act-edit" contenteditable="true" spellcheck="false" data-act="${idx}">${esc(f.act)}</span></td>` +
        cols.map(i => {
          const v = f.vals[i] || '';
          const atenua = fr && v !== fr ? ' atenuada' : '';
          return `<td class="${i === colFp ? 'col-resaltada' : ''}"><button type="button" class="celda-rol ${v}${atenua}" data-fila="${idx}" data-col="${i}" aria-label="${esc(f.act)}: ${v ? LEYENDA[v] : 'sin rol'}" title="${v ? LEYENDA[v] : 'Sin rol'} · clic para cambiar">${v}</button></td>`;
        }).join('') +
        `<td><select class="sel-prio prio-${f.prio}" data-prio="${idx}" aria-label="Prioridad">${PRIORIDADES.map(p => `<option ${p === f.prio ? 'selected' : ''}>${p}</option>`).join('')}</select></td>` +
        `<td><button type="button" class="btn-x" data-borrar-fila="${idx}" title="Eliminar actividad" aria-label="Eliminar actividad">×</button></td></tr>`;
    });
  }

  /* totales de R por columna (sobre lo visible) */
  html += '</tbody><tfoot><tr><td class="act">Total responsable (R)</td>' +
    cols.map(i => `<td>${visibles.filter(({ f }) => f.vals[i] === 'R').length}</td>`).join('') + '<td></td><td></td></tr></tfoot>';
  $('#tablaMatriz').innerHTML = html;

  /* tarjetas de resumen */
  $('#resumenMatriz').innerHTML = cols.map(i => {
    const p = persona(m.personas[i]);
    const c = { R: 0, M: 0, D: 0, A: 0 };
    visibles.forEach(({ f }) => { if (c[f.vals[i]] !== undefined) c[f.vals[i]]++; });
    return `<div class="pers"><strong>${esc(primerNombre(p))}</strong><b>${c.R}</b> R · <b>${c.M}</b> M · <b>${c.D}</b> D · <b>${c.A}</b> A</div>`;
  }).join('');
}

/* ---------- eventos de la tabla ---------- */
$('#tablaMatriz').addEventListener('click', e => {
  const m = matrices[matrizActiva];
  const celda = e.target.closest('.celda-rol');
  if (celda) {
    const f = m.filas[+celda.dataset.fila], c = +celda.dataset.col;
    f.vals[c] = CICLO[(CICLO.indexOf(f.vals[c] || '') + 1) % CICLO.length];
    guardarMatrices(); pintarMatriz(); pintarEquipo();
    return;
  }
  const del = e.target.closest('[data-borrar-fila]');
  if (del && confirm('¿Eliminar esta actividad de la matriz?')) {
    m.filas.splice(+del.dataset.borrarFila, 1);
    guardarMatrices(); pintarMatriz(); pintarEquipo();
  }
});
$('#tablaMatriz').addEventListener('change', e => {
  const s = e.target.closest('[data-prio]');
  if (!s) return;
  matrices[matrizActiva].filas[+s.dataset.prio].prio = s.value;
  guardarMatrices(); pintarMatriz();
});
$('#tablaMatriz').addEventListener('focusout', e => {
  const t = e.target.closest('[data-act]');
  if (!t) return;
  const f = matrices[matrizActiva].filas[+t.dataset.act];
  const nuevo = t.textContent.trim();
  if (nuevo && nuevo !== f.act) { f.act = nuevo; guardarMatrices(); }
  else if (!nuevo) t.textContent = f.act;
});
$('#tablaMatriz').addEventListener('keydown', e => {
  if (e.key === 'Enter' && e.target.matches('[data-act]')) { e.preventDefault(); e.target.blur(); }
});

$('#tabsMatriz').addEventListener('click', e => {
  const b = e.target.closest('[data-tab]');
  if (!b) return;
  matrizActiva = +b.dataset.tab;
  pintarTabs(); pintarMatriz();
});
['#buscar', '#filtroPersona', '#filtroRol', '#filtroPrioridad'].forEach(s =>
  $(s).addEventListener('input', pintarMatriz));

$('#btnAgregar').addEventListener('click', () => {
  const m = matrices[matrizActiva];
  ['#buscar', '#filtroPersona', '#filtroRol', '#filtroPrioridad'].forEach(s => { $(s).value = ''; });
  const ultima = m.filas.length ? m.filas[m.filas.length - 1].sec : 'B. Página web';
  m.filas.push({ sec: ultima, act: 'Nueva actividad (haz clic para editar)', vals: m.personas.map(() => ''), prio: 'Media' });
  guardarMatrices(); pintarMatriz();
  const nuevo = $(`[data-act="${m.filas.length - 1}"]`);
  if (nuevo) { nuevo.scrollIntoView({ block: 'center' }); nuevo.focus(); document.execCommand && document.execCommand('selectAll'); }
});

$('#btnRestablecer').addEventListener('click', () => {
  if (!confirm('Se restablecerá esta matriz a los datos originales del Word. ¿Continuar?')) return;
  matrices[matrizActiva] = matricesBase()[matrizActiva];
  guardarMatrices(); pintarMatriz(); pintarEquipo();
});

$('#btnCSV').addEventListener('click', () => {
  const m = matrices[matrizActiva];
  const celda = t => '"' + String(t).replace(/"/g, '""') + '"';
  const filas = [['Sección', 'Actividad'].concat(m.personas.map(id => persona(id).nombre), ['Prioridad'])]
    .concat(m.filas.map(f => [f.sec, f.act].concat(f.vals.map(v => v || ''), [f.prio])));
  const csv = '﻿' + filas.map(r => r.map(celda).join(',')).join('\r\n');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
  a.download = m.titulo.replace(/\s+/g, '_') + '.csv';
  a.click(); URL.revokeObjectURL(a.href);
});

/* ---------------------------------------------------------------------
   8) INICIO
   --------------------------------------------------------------------- */
pintarOrganigrama();
pintarEquipo();
pintarFiltroPersonas();
pintarTabs();
pintarMatriz();
