/**
 * Librería mínima de íconos SVG (trazo limpio, sin dependencias externas).
 * Se usan como reemplazo de fotografía de producto (categorías) y como
 * iconografía funcional en toda la interfaz.
 */
const ICONS = {
  capsule: '<path d="M6.5 17.5 17.5 6.5a5.5 5.5 0 1 1 7.78 7.78L14.28 25.28A5.5 5.5 0 1 1 6.5 17.5Z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M11.5 12.5 19.5 20.5" stroke="currentColor" stroke-width="2"/>',
  tablet: '<circle cx="16" cy="16" r="11" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 5v22" stroke="currentColor" stroke-width="2"/>',
  jar: '<path d="M10 8h12v3.2c1.2.5 2 1.7 2 3V25a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3V14.2c0-1.3.8-2.5 2-3V8Z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M10 8V6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2" fill="none" stroke="currentColor" stroke-width="2"/>',
  flask: '<path d="M13 4h6M14 4v8.5L8.5 24.6A2 2 0 0 0 10.3 27h11.4a2 2 0 0 0 1.8-2.9L18 12.5V4" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M11.5 20h9" stroke="currentColor" stroke-width="2"/>',
  shaker: '<path d="M12 4h8l1 5H11l1-5Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M11 9h10l-1.4 17.2a2 2 0 0 1-2 1.8h-3.2a2 2 0 0 1-2-1.8L11 9Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M11.6 15.5h8.8" stroke="currentColor" stroke-width="2"/>',
  heart: '<path d="M16 27S4.5 20 4.5 12.2A6.2 6.2 0 0 1 16 8.4a6.2 6.2 0 0 1 11.5 3.8C27.5 20 16 27 16 27Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  leaf: '<path d="M8 24C5 15 10.5 6 24 6c1 12-6 18.5-14 18C7 24 8 24 8 24Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M9.5 22.5 20 12" stroke="currentColor" stroke-width="2"/>',
  droplet: '<path d="M16 4S7 15.8 7 21a9 9 0 0 0 18 0C25 15.8 16 4 16 4Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  sparkle: '<path d="M16 4l2.4 8.6L27 15l-8.6 2.4L16 26l-2.4-8.6L5 15l8.6-2.4L16 4Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  bolt: '<path d="M17.5 3 7 18h7l-1.5 11L26 14h-8l-0.5-11Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  whatsapp: '<path d="M23.5 8.5a10.6 10.6 0 0 0-16.9 12.7L5 27l6-1.5A10.6 10.6 0 0 0 23.5 8.5Z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M11.5 12.8c-.3 2.7 1.9 6.9 4.6 8.3.9.5 1.6.2 2-.3l.7-1c.3-.4.8-.5 1.2-.3l2 1c.4.2.6.7.4 1.1-.7 1.6-2.4 2.4-4.1 1.9-3.6-1-7.1-4.5-8.1-8.1-.5-1.7.3-3.4 1.9-4.1.4-.2.9 0 1.1.4l1 2c.2.4.1.9-.3 1.2l-1 .9Z" fill="currentColor"/>',
  menu: '<path d="M4 8h24M4 16h24M4 24h24" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>',
  close: '<path d="M7 7l18 18M25 7 7 25" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>',
  search: '<circle cx="13.5" cy="13.5" r="8.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M20 20l6.5 6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  check: '<path d="M6 16.5 12.5 23 26 8" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>',
  star: '<path d="M16 4l3.6 7.4 8.2 1.2-5.9 5.7 1.4 8.1L16 22.6 8.7 26.4l1.4-8.1-5.9-5.7 8.2-1.2L16 4Z" fill="currentColor"/>',
  arrowRight: '<path d="M6 16h20M18 8l8 8-8 8" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
  mapPin: '<path d="M16 28s9-8.5 9-15a9 9 0 1 0-18 0c0 6.5 9 15 9 15Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="16" cy="13" r="3.2" fill="none" stroke="currentColor" stroke-width="2"/>',
  clock: '<circle cx="16" cy="16" r="11" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 10v6l4.5 3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  truck: '<path d="M4 10h13v13H4z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M17 14h5l4 4v5h-9v-9Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="9.5" cy="24.5" r="2.3" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="21.5" cy="24.5" r="2.3" fill="none" stroke="currentColor" stroke-width="2"/>',
  phone: '<path d="M9 5h4l2 6-3 2c1.1 2.6 3.4 4.9 6 6l2-3 6 2v4a2 2 0 0 1-2.2 2A20 20 0 0 1 7 11.2 2 2 0 0 1 9 5Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  mail: '<rect x="4" y="7" width="24" height="18" rx="2.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M5 9l11 8 11-8" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  instagram: '<rect x="5" y="5" width="22" height="22" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="16" cy="16" r="5.5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="22.3" cy="9.7" r="1.4" fill="currentColor"/>',
  tiktok: '<path d="M18 4h4.2c.3 2.7 2.1 4.7 4.8 5v4.3c-1.9 0-3.6-.6-5-1.6v9c0 4.6-3.7 7.8-7.9 7.8A7.8 7.8 0 0 1 6 20.7a7.8 7.8 0 0 1 10.4-7.4v4.5a3.3 3.3 0 1 0 2.3 3.2V4Z" fill="currentColor"/>',
  facebook: '<path d="M19 11h3V7h-3c-2.8 0-5 2.2-5 5v2H11v4h3v9h4v-9h3.2l.8-4H18v-2c0-.6.4-1 1-1Z" fill="currentColor"/>',
  shield: '<path d="M16 4 5 8v7c0 7 4.6 11.7 11 13 6.4-1.3 11-6 11-13V8L16 4Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M11.5 16.2l3 3 6-6.4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  package: '<path d="M16 4 27 9.5v13L16 28 5 22.5v-13L16 4Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M5 9.5 16 15l11-5.5M16 15v13" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  users: '<circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M4 26c0-4.4 3.6-7.5 8-7.5s8 3.1 8 7.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="22" cy="11" r="3.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M20 18.5c3.6.4 6 3.2 6 7.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  award: '<circle cx="16" cy="12" r="7.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M11.5 18.5 9 28l7-3 7 3-2.5-9.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
};

function icon(name, extraClass) {
  const inner = ICONS[name] || "";
  return `<svg viewBox="0 0 32 32" aria-hidden="true" class="${extraClass || ""}">${inner}</svg>`;
}
