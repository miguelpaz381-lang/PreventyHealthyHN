/**
 * Catálogo real de inventario Preventy Healthy (Enero 2025).
 * `price` queda vacío a propósito: edítalo aquí (en Lempiras, solo el número)
 * y el sitio lo mostrará automáticamente. Si lo dejas vacío, el botón dice
 * "Consultar precio por WhatsApp".
 * `image` apunta a una tarjeta ilustrada por categoría; reemplázala por una
 * foto real del producto colocando el archivo en img/productos/ y cambiando la ruta.
 * `available`: pon en `false` cuando se agote un producto. Sigue apareciendo
 * en el catálogo (marcado "Agotado" y al final de los resultados) en vez de
 * desaparecer, para no perder el hallazgo por búsqueda/categoría.
 */

const BRANDS = {
  mercola: { name: "Mercola", tagline: "Ciencia y pureza para tu bienestar" },
  bloom: { name: "Bloom Nutrition", tagline: "Greens y energía natural" },
  hum: { name: "HUM Nutrition", tagline: "Belleza desde adentro" },
  "4life": { name: "4Life", tagline: "Ciencia inmunológica de vanguardia" },
};

const CATEGORIES = {
  vitaminas: "Vitaminas",
  minerales: "Minerales",
  colageno: "Colágeno",
  probioticos: "Probióticos",
  deportivo: "Deportivo",
  mujer: "Mujer",
  antioxidantes: "Antioxidantes",
  omega: "Omega y Aceites",
  belleza: "Belleza y Piel",
  energia: "Energía y Detox",
};

const PRODUCTS = [
  { id: "mer-01", brand: "mercola", name: "Coral Calcium", category: "minerales", price: null, available: true, image: "img/productos/coral-calcium.jpg" },
  { id: "mer-02", brand: "mercola", name: "Vitamin K2", category: "vitaminas", price: null, available: true, image: "img/productos/vitamin-k2.jpg" },
  { id: "mer-03", brand: "mercola", name: "Complete Spore Restore", category: "probioticos", price: null, available: true, image: "img/productos/complete-spore-restore.jpg" },
  { id: "mer-04", brand: "mercola", name: "Niacin Vitamin B3", category: "vitaminas", price: null, available: true, image: "img/productos/niacin-vitamin-b3.jpg" },
  { id: "mer-05", brand: "mercola", name: "Antarctic Krill Oil", category: "omega", price: null, available: true, image: "img/productos/antarctic-krill-oil.jpg" },
  { id: "mer-06", brand: "mercola", name: "Ubiquinol", category: "antioxidantes", price: null, available: true, image: "img/productos/ubiquinol.jpg" },
  { id: "mer-07", brand: "mercola", name: "Liposomal Hyaluronic Acid", category: "belleza", price: null, available: true, image: "img/productos/liposomal-hyaluronic-acid.jpg" },
  { id: "mer-08", brand: "mercola", name: "Astaxanthin", category: "antioxidantes", price: null, available: true, image: "img/productos/astaxanthin.jpg" },
  { id: "mer-09", brand: "mercola", name: "Vitamin E", category: "vitaminas", price: null, available: true, image: "img/productos/vitamin-e.jpg" },
  { id: "mer-10", brand: "mercola", name: "Vitamin D3 & K2", category: "vitaminas", price: null, available: true, image: "img/productos/vitamin-d3-k2.jpg" },
  { id: "mer-11", brand: "mercola", name: "Organic Fermented Turmeric (Cúrcuma)", category: "antioxidantes", price: null, available: true, image: "img/productos/organic-turmeric.jpg" },
  { id: "mer-12", brand: "mercola", name: "Vitamin B Complex con Benfotiamina", category: "vitaminas", price: null, available: true, image: "img/productos/vitamin-b-complex.jpg" },
  { id: "mer-13", brand: "mercola", name: "Complete Probiotics (Mujer)", category: "mujer", price: null, available: true, image: "img/productos/complete-probiotics-mujer.jpg" },
  { id: "mer-14", brand: "mercola", name: "Krill Oil (Mujer)", category: "mujer", price: null, available: true, image: "img/productos/krill-oil-mujer.jpg" },
  { id: "mer-15", brand: "mercola", name: "Organic Bone Broth Collagen", category: "colageno", price: null, available: true, image: "img/productos/organic-bone-broth-collagen.jpg" },
  { id: "mer-16", brand: "mercola", name: "Magnesium", category: "minerales", price: null, available: true, image: "img/productos/magnesium.jpg" },
  { id: "mer-17", brand: "mercola", name: "Liposomal Vitamin C (180)", category: "vitaminas", price: null, available: true, image: "img/productos/liposomal-vitamin-c-180.jpg" },
  { id: "mer-18", brand: "mercola", name: "Whole Food Complex (Mujer)", category: "mujer", price: null, available: true, image: "img/productos/whole-food-complex-mujer.jpg" },
  { id: "mer-19", brand: "mercola", name: "Creatine Monohidrate", category: "deportivo", price: null, available: true, image: "img/productos/creatine-monohidrate.jpg" },
  { id: "mer-20", brand: "mercola", name: "Complete Probiotics (Normal)", category: "probioticos", price: null, available: true, image: "img/productos/complete-probiotics-normal.jpg" },
  { id: "mer-21", brand: "mercola", name: "Calcium con Vitaminas D3 & K2", category: "minerales", price: null, available: true, image: "img/productos/calcium-d3-k2.jpg" },
  { id: "mer-22", brand: "mercola", name: "Methyl Folate", category: "vitaminas", price: null, available: true, image: "img/productos/methyl-folate.jpg" },
  { id: "mer-23", brand: "mercola", name: "Silica", category: "belleza", price: null, available: true, image: "img/productos/silica.jpg" },
  { id: "mer-24", brand: "mercola", name: "Zinc + Selenium", category: "minerales", price: null, available: true, image: "img/productos/zinc-selenium.jpg" },
  { id: "mer-25", brand: "mercola", name: "Resveratrol", category: "antioxidantes", price: null, available: true, image: "img/productos/resveratrol.jpg" },
  { id: "mer-26", brand: "mercola", name: "Liposomal Vitamin C (60)", category: "vitaminas", price: null, available: true, image: "img/productos/liposomal-vitamin-c-60.jpg" },
  { id: "mer-27", brand: "mercola", name: "Biothin MCT Oil", category: "energia", price: null, available: true, image: "img/productos/biothin-mct-oil.jpg" },
  { id: "mer-28", brand: "mercola", name: "Bone Broth Collagen from Beef", category: "colageno", price: null, available: true, image: "img/productos/bone-broth-collagen-beef.jpg" },
  { id: "mer-29", brand: "mercola", name: "Collagen Complex", category: "colageno", price: null, available: true, image: "img/productos/collagen-complex.jpg" },
  { id: "mer-30", brand: "mercola", name: "Whey Protein", category: "deportivo", price: null, available: true, image: "img/productos/whey-protein.jpg" },
  { id: "mer-31", brand: "mercola", name: "Liposomal Vitamin C Liquid", category: "vitaminas", price: null, available: true, image: "img/productos/liposomal-vitamin-c-liquid.jpg" },
  { id: "mer-32", brand: "mercola", name: "Collagen Vainilla", category: "colageno", price: null, available: true, image: "img/productos/collagen-vainilla.jpg" },

  { id: "blo-01", brand: "bloom", name: "Greens Strawberry Kiwi (60 servicios)", category: "energia", price: null, available: true, image: "img/productos/bloom-greens-strawberry-kiwi-60.jpg" },
  { id: "blo-02", brand: "bloom", name: "Greens Mango", category: "energia", price: null, available: true, image: "img/productos/bloom-greens-mango.jpg" },
  { id: "blo-03", brand: "bloom", name: "Greens Strawberry Kiwi (30 servicios)", category: "energia", price: null, available: true, image: "img/productos/bloom-greens-strawberry-kiwi-30.jpg" },
  { id: "blo-04", brand: "bloom", name: "Matcha (30g)", category: "energia", price: null, available: true, image: "img/productos/bloom-matcha.jpg" },

  { id: "hum-01", brand: "hum", name: "B12 Turbo", category: "energia", price: null, available: true, image: "img/productos/hum-b12-turbo.jpg" },
  { id: "hum-02", brand: "hum", name: "Celery Juice + Chlorophyll", category: "energia", price: null, available: true, image: "img/productos/hum-celery-juice.jpg" },
  { id: "hum-03", brand: "hum", name: "Hair Strong (Biotina + Ácido Fólico)", category: "belleza", price: null, available: true, image: "img/productos/hum-hair-strong.jpg" },
  { id: "hum-04", brand: "hum", name: "SOS PMS + Vitamin B6", category: "mujer", price: null, available: true, image: "img/productos/hum-sos-pms.jpg" },
  { id: "hum-05", brand: "hum", name: "Ashwagandha", category: "energia", price: null, available: true, image: "img/productos/hum-ashwagandha.jpg" },
  { id: "hum-06", brand: "hum", name: "Balance Hormonal", category: "mujer", price: null, available: true, image: "img/productos/hum-balance-hormonal.jpg" },
  { id: "hum-07", brand: "hum", name: "Here Comes The Sun", category: "belleza", price: null, available: true, image: "img/productos/hum-here-comes-the-sun.jpg" },
  { id: "hum-08", brand: "hum", name: "Private Party", category: "mujer", price: null, available: true, image: "img/productos/hum-private-party.jpg" },

  { id: "life-01", brand: "4life", name: "Transfer Factor Cardio", category: "antioxidantes", price: null, available: true, image: "img/productos/4life-transfer-factor-cardio.jpg" },
];

// Ícono por categoría, usado en las tarjetas cuando no hay foto real del producto.
const CATEGORY_ICONS = {
  vitaminas: "capsule",
  minerales: "tablet",
  colageno: "jar",
  probioticos: "flask",
  deportivo: "shaker",
  mujer: "heart",
  antioxidantes: "leaf",
  omega: "droplet",
  belleza: "sparkle",
  energia: "bolt",
};
