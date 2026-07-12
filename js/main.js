/* =========================================================
   PREVENTY HEALTHY — Interactividad
   ========================================================= */

const BUSINESS = {
  whatsapp: "50432030863", // +504 3203-0863
  instagram: "https://www.instagram.com/preventyhealthy",
  tiktok: "https://www.tiktok.com/@preventyhealthy",
  facebook: "https://www.facebook.com/preventyhealthy/",
  city: "Puerto Cortés, Cortés, Honduras",
};

function waLink(message) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS.whatsapp}?text=${text}`;
}

function waProductLink(productName, brandName) {
  return waLink(`Hola Preventy Healthy 👋, quisiera más información sobre "${productName}" (${brandName}).`);
}

document.addEventListener("DOMContentLoaded", () => {
  initIcons();
  initNavbar();
  initMobileMenu();
  initReveal();
  initFooterYear();
  initGeneralWaButtons();
  initGlowCards();
  initTilt();
  initCounters();
  initScrollHero();
  if (document.getElementById("product-grid")) initCatalog();
});

/* ---------- Spotlight que sigue el cursor (tarjetas .glow-card) ---------- */
function initGlowCards() {
  const cards = document.querySelectorAll(".glow-card");
  if (!cards.length) return;
  if (window.matchMedia("(hover: none)").matches) return;

  cards.forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--x", `${e.clientX - rect.left}px`);
      card.style.setProperty("--y", `${e.clientY - rect.top}px`);
    });
  });
}

/* ---------- Inclinación magnética sutil (.brand-card) ---------- */
function initTilt() {
  const cards = document.querySelectorAll(".brand-card");
  if (!cards.length) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced || window.matchMedia("(hover: none)").matches) return;

  const maxTilt = 6;
  cards.forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transition = "transform 60ms linear";
      card.style.transform = `perspective(700px) rotateX(${(-py * maxTilt).toFixed(2)}deg) rotateY(${(px * maxTilt).toFixed(2)}deg) translateY(-6px)`;
    });
    card.addEventListener("pointerleave", () => {
      card.style.transition = "transform 500ms cubic-bezier(0.19,1,0.22,1)";
      card.style.transform = "";
    });
  });
}

/* ---------- Contadores animados (hero-stats) ---------- */
function initCounters() {
  const counters = document.querySelectorAll("[data-count]");
  if (!counters.length) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const animate = (el) => {
    const target = parseFloat(el.getAttribute("data-count"));
    const suffix = el.getAttribute("data-suffix") || "";
    if (reduced) {
      el.textContent = target + suffix;
      return;
    }
    const duration = 1100;
    const start = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.round(target * ease(progress)) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );
  counters.forEach((c) => observer.observe(c));
}

/* ---------- Icon injection (data-icon="name") ---------- */
function initIcons() {
  document.querySelectorAll("[data-icon]").forEach((el) => {
    const name = el.getAttribute("data-icon");
    el.innerHTML = icon(name);
  });
}

/* ---------- Navbar scroll state ---------- */
function initNavbar() {
  const nav = document.querySelector(".navbar");
  if (!nav) return;
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------- Mobile menu ---------- */
function initMobileMenu() {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".mobile-menu");
  const panel = document.querySelector(".mobile-menu__panel");
  const closeBtn = document.querySelector(".mobile-menu__close");
  const backdrop = document.querySelector(".mobile-menu__backdrop");
  if (!toggle || !menu) return;

  const open = () => {
    menu.classList.add("is-open");
    panel?.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    menu.classList.remove("is-open");
    panel?.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  toggle.addEventListener("click", open);
  closeBtn?.addEventListener("click", close);
  backdrop?.addEventListener("click", close);
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

/* ---------- Scroll reveal ---------- */
function initReveal() {
  const targets = document.querySelectorAll(".reveal, .reveal-stagger");
  if (!targets.length) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) {
    targets.forEach((t) => t.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );
  targets.forEach((t) => observer.observe(t));

  document.querySelectorAll(".reveal-stagger > *").forEach((child, i) => {
    child.style.transitionDelay = `${Math.min(i * 60, 420)}ms`;
  });
}

/* ---------- Footer year ---------- */
function initFooterYear() {
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
}

/* ---------- Generic WhatsApp buttons (data-wa-message) ---------- */
function initGeneralWaButtons() {
  document.querySelectorAll("[data-wa]").forEach((el) => {
    const msg = el.getAttribute("data-wa") || "Hola Preventy Healthy 👋, quisiera más información.";
    el.setAttribute("href", waLink(msg));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });
}

/* ---------- Catálogo (productos.html) ---------- */
function initCatalog() {
  const grid = document.getElementById("product-grid");
  const chipsBrand = document.querySelectorAll("[data-filter-brand]");
  const chipsCategory = document.querySelectorAll("[data-filter-category]");
  const searchInput = document.getElementById("product-search");
  const resultCount = document.getElementById("result-count");

  const params = new URLSearchParams(window.location.search);
  let state = {
    brand: params.get("marca") || "todos",
    category: params.get("categoria") || "todos",
    query: "",
  };

  chipsBrand.forEach((chip) => {
    chip.classList.toggle("is-active", chip.getAttribute("data-filter-brand") === state.brand);
  });
  chipsCategory.forEach((chip) => {
    chip.classList.toggle("is-active", chip.getAttribute("data-filter-category") === state.category);
  });

  function matches(p) {
    const byBrand = state.brand === "todos" || p.brand === state.brand;
    const byCategory = state.category === "todos" || p.category === state.category;
    const byQuery = !state.query || p.name.toLowerCase().includes(state.query) || BRANDS[p.brand].name.toLowerCase().includes(state.query);
    return byBrand && byCategory && byQuery;
  }

  function priceMarkup(p) {
    if (p.price) {
      return `<div class="product-card__price">L. ${Number(p.price).toLocaleString("es-HN")}</div>`;
    }
    return `<div class="product-card__price is-query">Consultar precio</div>`;
  }

  function cardTemplate(p) {
    const brand = BRANDS[p.brand];
    const iconName = CATEGORY_ICONS[p.category] || "capsule";
    const media = p.image
      ? `<img src="${p.image}" alt="${p.name}" loading="lazy">`
      : icon(iconName);
    return `
      <article class="product-card reveal">
        <div class="product-card__media bg-${p.brand}">
          <span class="product-card__badge">${brand.name}</span>
          <span class="product-card__stock">${icon("check")} Disponible</span>
          ${media}
        </div>
        <div class="product-card__body">
          <span class="product-card__brand">${CATEGORIES[p.category]}</span>
          <h3 class="product-card__name">${p.name}</h3>
          ${priceMarkup(p)}
          <a class="btn btn-whatsapp product-card__cta" href="${waProductLink(p.name, brand.name)}" target="_blank" rel="noopener">
            ${icon("whatsapp")} Pedir por WhatsApp
          </a>
        </div>
      </article>`;
  }

  function render() {
    const query = state.query.trim().toLowerCase();
    state.query = query;
    const filtered = PRODUCTS.filter(matches);
    grid.innerHTML = filtered.length
      ? filtered.map(cardTemplate).join("")
      : `<div class="empty-state">${icon("search")}<p>No encontramos productos con esos filtros.<br>Prueba con otra categoría o escríbenos por WhatsApp.</p></div>`;
    if (resultCount) resultCount.textContent = `${filtered.length} producto${filtered.length === 1 ? "" : "s"}`;
    initReveal();
  }

  chipsBrand.forEach((chip) => {
    chip.addEventListener("click", () => {
      chipsBrand.forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      state.brand = chip.getAttribute("data-filter-brand");
      render();
    });
  });

  chipsCategory.forEach((chip) => {
    chip.addEventListener("click", () => {
      chipsCategory.forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      state.category = chip.getAttribute("data-filter-category");
      render();
    });
  });

  searchInput?.addEventListener("input", (e) => {
    state.query = e.target.value;
    render();
  });

  render();
}

/* ---------- Hero de revelado por scroll (puerto de smooth-scroll-hero) ---------- */
function initScrollHero() {
  const hero = document.getElementById("scroll-hero");
  if (!hero) return;

  const clip = hero.querySelector(".scroll-hero__clip");
  const content = hero.querySelector(".scroll-hero__content");
  const contentChildren = content ? [...content.children] : [];
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduced) return; // el CSS ya define el estado estático de respaldo

  // En móvil acortamos el recorrido: con pantallas más chicas, 1500px de
  // scroll-jacking se siente eterno antes de llegar al contenido real.
  const isNarrow = window.innerWidth < 640;
  const SCROLL_HEIGHT = isNarrow ? 900 : 1500;
  const CLIP_START_FROM = 25, CLIP_START_TO = 0;
  const CLIP_END_FROM = 75, CLIP_END_TO = 100;
  hero.style.setProperty("--scroll-distance", `${SCROLL_HEIGHT}px`);

  // El texto aparece en cascada durante los primeros CONTENT_RANGE px de scroll
  // (mucho antes de que la imagen termine de expandirse), para que se sienta
  // sincronizado con el Hero en vez de aparecer todo de golpe al final.
  const CONTENT_RANGE = isNarrow ? 420 : 650;
  const STAGGER_STEP = 0.16;
  const STAGGER_SPAN = 0.4;

  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
  const lerp = (from, to, t) => from + (to - from) * t;
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  let ticking = false;

  function update() {
    ticking = false;
    const heroTop = hero.offsetTop;
    const scrollY = clamp(window.scrollY - heroTop, 0, SCROLL_HEIGHT);
    const t = scrollY / SCROLL_HEIGHT;

    // El clip-path recorta únicamente la imagen y el scrim (.scroll-hero__clip);
    // el texto vive fuera de este contenedor y siempre está visible y legible.
    const clipStart = lerp(CLIP_START_FROM, CLIP_START_TO, t);
    const clipEnd = lerp(CLIP_END_FROM, CLIP_END_TO, t);
    clip.style.clipPath = `polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`;

    const contentScrollY = clamp(window.scrollY - heroTop, 0, CONTENT_RANGE);
    const contentT = contentScrollY / CONTENT_RANGE;
    contentChildren.forEach((child, i) => {
      const start = i * STAGGER_STEP;
      const end = Math.min(start + STAGGER_SPAN, 1);
      const localT = clamp((contentT - start) / (end - start), 0, 1);
      const eased = easeOutCubic(localT);
      child.style.opacity = String(eased);
      child.style.transform = `translateY(${(1 - eased) * 18}px)`;
    });
  }

  function onScrollOrResize() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  update();
  window.addEventListener("scroll", onScrollOrResize, { passive: true });
  window.addEventListener("resize", onScrollOrResize);
}
