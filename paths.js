/** Imagenes por pagina: shared | index | productos | nosotros */
const SYA_PAGES = { shared: "assets/images/shared", index: "assets/images/index", productos: "assets/images/productos", nosotros: "assets/images/nosotros" };
const SYA_IMAGE_PATHS = {
  "acpollo": "assets/images/productos/acpollo.jpg",
  "agallina": "assets/images/productos/agallina.jpg",
  "agua-saborizada": "assets/images/productos/agua-saborizada.jpg",
  "alfajor": "assets/images/productos/alfajor.jpg",
  "alfredo": "assets/images/productos/alfredo.jpg",
  "bebidas": "assets/images/index/bebidas.jpg",
  "brasa": "assets/images/productos/brasa.jpg",
  "brochetas": "assets/images/productos/brochetas.jpg",
  "brownie": "assets/images/productos/brownie.jpg",
  "bruschetta": "assets/images/productos/bruschetta.jpg",
  "bufeet": "assets/images/index/bufeet.jpg",
  "cafea": "assets/images/index/cafea.jpeg",
  "canape": "assets/images/productos/canape.jpg",
  "capuchino": "assets/images/productos/capuchino.jpg",
  "catering1": "assets/images/index/catering1.jpg",
  "catering2": "assets/images/index/catering2.png",
  "catering3": "assets/images/index/catering3.jpg",
  "catering4": "assets/images/index/catering4.jpg",
  "catering5": "assets/images/index/catering5.jpeg",
  "causa": "assets/images/productos/causa.jpg",
  "celebracion": "assets/images/index/celebracion.jpg",
  "champinones": "assets/images/productos/champinones.jpg",
  "chescake": "assets/images/productos/chescake.jpg",
  "chichamorada": "assets/images/productos/chichamorada.png",
  "club": "assets/images/index/club.jpg",
  "cocktail": "assets/images/productos/cocktail.jpg",
  "coorporativos": "assets/images/index/coorporativos.jpg",
  "copa": "assets/images/productos/copa.jpg",
  "crema": "assets/images/index/crema.jpg",
  "empanadas": "assets/images/productos/empanadas.jpg",
  "ensaladacesar": "assets/images/index/ensaladacesar.jpg",
  "especial": "assets/images/productos/especial.jpg",
  "evaristo": "assets/images/shared/evaristo.jpeg",
  "hecho-en-casa": "assets/images/shared/hecho-en-casa.jpeg",
  "hero-nosotros-1": "assets/images/nosotros/hero-1.jpg",
  "hero-nosotros-2": "assets/images/nosotros/hero-2.jpg",
  "hero-nosotros-3": "assets/images/nosotros/hero-3.jpg",
  "hero-nosotros-4": "assets/images/nosotros/hero-4.jpg",
  "hero-nosotros-5": "assets/images/nosotros/hero-5.jpg",
  "infusiones": "assets/images/index/infusiones.jpg",
  "jfresa": "assets/images/productos/jfresa.jpeg",
  "lasagna": "assets/images/productos/lasagna.jpg",
  "limonada": "assets/images/productos/limonada.jpg",
  "lomo": "assets/images/index/lomo.jpg",
  "lomo-saltado": "assets/images/productos/lomo-saltado.png",
  "lucha-parodi": "assets/images/shared/lucha-parodi.jpeg",
  "maracuya": "assets/images/productos/maracuya.jpg",
  "mini-croissants": "assets/images/productos/mini-croissants.jpg",
  "mini-sandwinch": "assets/images/productos/mini-sandwinch.jpg",
  "mousse": "assets/images/productos/mousse.jpeg",
  "naranja": "assets/images/productos/naranja.png",
  "nosotros": "assets/images/index/nosotros.jpg",
  "nosotros2": "assets/images/index/nosotros2.jpeg",
  "nosotros3": "assets/images/index/nosotros3.jpeg",
  "nosotros4": "assets/images/index/nosotros4.jpeg",
  "nosotros5": "assets/images/index/nosotros5.jpeg",
  "p1": "assets/images/productos/p1.jpeg",
  "p2": "assets/images/productos/p2.jpeg",
  "p3": "assets/images/productos/p3.jpeg",
  "p4": "assets/images/productos/p4.jpeg",
  "p5": "assets/images/productos/p5.jpeg",
  "p6": "assets/images/productos/p6.jpeg",
  "p7": "assets/images/productos/p7.jpeg",
  "p8": "assets/images/productos/p8.jpeg",
  "pana-cotta": "assets/images/productos/pana-cotta.jpg",
  "papa-gratinadas": "assets/images/productos/papa-gratinadas.jpg",
  "piadina": "assets/images/productos/piadina.jpg",
  "pokebowl": "assets/images/index/pokebowl.png",
  "polloalaplancha": "assets/images/index/polloalaplancha.jpg",
  "postresartesanales": "assets/images/productos/postresartesanales.jpg",
  "quesos": "assets/images/productos/quesos.jpg",
  "quiche-de-verduras": "assets/images/productos/quiche-de-verduras.jpg",
  "risotto": "assets/images/productos/risotto.jpg",
  "sabor-y-arte": "assets/images/shared/sabor-y-arte.png",
  "salmon": "assets/images/productos/salmon.jpg",
  "seco": "assets/images/productos/seco.png",
  "strudel": "assets/images/index/strudel.jpg",
  "tabla": "assets/images/productos/tabla.jpg",
  "tequenos": "assets/images/productos/tequenos.jpg",
  "tiramisu": "assets/images/productos/tiramisu.jpg",
  "torta": "assets/images/index/torta.jpg",
  "torta-de-chocolate": "assets/images/productos/torta-de-chocolate.jpg",
  "tresleches": "assets/images/productos/tresleches.jpg",
  "tzabar": "assets/images/shared/tzabar.jpeg",
  "utp": "assets/images/shared/utp.jpg",
};

function syaImage(slug) {
  return SYA_IMAGE_PATHS[slug] || "";
}

function syaImageFromLegacy(fileName) {
  const base = String(fileName)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/#U00f1/gi, "n");
  const slug = base
    .toLowerCase()
    .replace(/\.[^.]+$/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return syaImage(slug);
}
