/**
 * Catálogo real de inventario Preventy Healthy (Enero 2025).
 * `price` queda vacío a propósito: edítalo aquí (en Lempiras, solo el número)
 * y el sitio lo mostrará automáticamente. Si lo dejas vacío, el botón dice
 * "Consultar precio por WhatsApp".
 * `image` apunta a una tarjeta ilustrada por categoría; reemplázala por una
 * foto real del producto colocando el archivo en img/productos/ y cambiando la ruta.
 */

const BRANDS = {
  mercola: { name: "Mercola", tagline: "Ciencia y pureza para tu bienestar" },
  bloom: { name: "Bloom Nutrition", tagline: "Greens y energía natural" },
  hum: { name: "HUM Nutrition", tagline: "Belleza desde adentro" },
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
  { id: "mer-01", brand: "mercola", name: "Coral Calcium", category: "minerales", price: null },
  { id: "mer-02", brand: "mercola", name: "Vitamin K2", category: "vitaminas", price: null },
  { id: "mer-03", brand: "mercola", name: "Complete Spore Restore", category: "probioticos", price: null },
  { id: "mer-04", brand: "mercola", name: "Niacin Vitamin B3", category: "vitaminas", price: null },
  { id: "mer-05", brand: "mercola", name: "Antarctic Krill Oil", category: "omega", price: null },
  { id: "mer-06", brand: "mercola", name: "Ubiquinol", category: "antioxidantes", price: null },
  { id: "mer-07", brand: "mercola", name: "Liposomal Hyaluronic Acid", category: "belleza", price: null },
  { id: "mer-08", brand: "mercola", name: "Astaxanthin", category: "antioxidantes", price: null },
  { id: "mer-09", brand: "mercola", name: "Vitamin E", category: "vitaminas", price: null },
  { id: "mer-10", brand: "mercola", name: "Vitamin D3 & K2", category: "vitaminas", price: null },
  { id: "mer-11", brand: "mercola", name: "Organic Fermented Turmeric (Cúrcuma)", category: "antioxidantes", price: null },
  { id: "mer-12", brand: "mercola", name: "Vitamin B Complex con Benfotiamina", category: "vitaminas", price: null },
  { id: "mer-13", brand: "mercola", name: "Complete Probiotics (Mujer)", category: "mujer", price: null },
  { id: "mer-14", brand: "mercola", name: "Krill Oil (Mujer)", category: "mujer", price: null },
  { id: "mer-15", brand: "mercola", name: "Organic Bone Broth Collagen", category: "colageno", price: null },
  { id: "mer-16", brand: "mercola", name: "Magnesium", category: "minerales", price: null },
  { id: "mer-17", brand: "mercola", name: "Liposomal Vitamin C (180)", category: "vitaminas", price: null },
  { id: "mer-18", brand: "mercola", name: "Whole Food Complex (Mujer)", category: "mujer", price: null },
  { id: "mer-19", brand: "mercola", name: "Creatine Monohidrate", category: "deportivo", price: null },
  { id: "mer-20", brand: "mercola", name: "Complete Probiotics (Normal)", category: "probioticos", price: null },
  { id: "mer-21", brand: "mercola", name: "Calcium con Vitaminas D3 & K2", category: "minerales", price: null },
  { id: "mer-22", brand: "mercola", name: "Methyl Folate", category: "vitaminas", price: null },
  { id: "mer-23", brand: "mercola", name: "Silica", category: "belleza", price: null },
  { id: "mer-24", brand: "mercola", name: "Zinc + Selenium", category: "minerales", price: null },
  { id: "mer-25", brand: "mercola", name: "Resveratrol", category: "antioxidantes", price: null },
  { id: "mer-26", brand: "mercola", name: "Liposomal Vitamin C (60)", category: "vitaminas", price: null },
  { id: "mer-27", brand: "mercola", name: "Biothin MCT Oil", category: "energia", price: null },
  { id: "mer-28", brand: "mercola", name: "Bone Broth Collagen from Beef", category: "colageno", price: null },
  { id: "mer-29", brand: "mercola", name: "Collagen Complex", category: "colageno", price: null, image: "img/productos/collagen-complex.jpg" },
  { id: "mer-30", brand: "mercola", name: "Whey Protein", category: "deportivo", price: null, image: "img/productos/whey-protein.jpg" },
  { id: "mer-31", brand: "mercola", name: "Liposomal Vitamin C Liquid", category: "vitaminas", price: null },

  { id: "blo-01", brand: "bloom", name: "Greens Strawberry Kiwi (60 servicios)", category: "energia", price: null },
  { id: "blo-02", brand: "bloom", name: "Greens Mango", category: "energia", price: null },
  { id: "blo-03", brand: "bloom", name: "Greens Strawberry Kiwi (30 servicios)", category: "energia", price: null },
  { id: "blo-04", brand: "bloom", name: "Matcha (30g)", category: "energia", price: null },

  { id: "hum-01", brand: "hum", name: "B12 Turbo", category: "energia", price: null, image: "img/productos/hum-b12-turbo.jpg" },
  { id: "hum-02", brand: "hum", name: "Celery Juice + Chlorophyll", category: "energia", price: null, image: "img/productos/hum-celery-juice.jpg" },
  { id: "hum-03", brand: "hum", name: "Hair Strong (Biotina + Ácido Fólico)", category: "belleza", price: null, image: "img/productos/hum-hair-strong.jpg" },
  { id: "hum-04", brand: "hum", name: "SOS PMS + Vitamin B6", category: "mujer", price: null, image: "img/productos/hum-sos-pms.jpg" },
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
