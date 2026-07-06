const TAG_ORDER = [
  "arte",
  "ciencia",
  "investigación",
  "educación",
  "iot",
  "desarrollos",
  "sostenibilidad",
  "sonido",
  "luz",
  "video",
  "land-art",
  "domótica",
];

let activeTag = "all";
let projectObserver = null;
let displayLimit = 6;
let displayMode = "limited";

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function shuffleArray(items) {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getRowsCount() {
  return 2;
}

function getColsCount() {
  return window.matchMedia("(max-width: 860px)").matches ? 1 : 2;
}

function getInitialVisibleCount() {
  return getRowsCount() * getColsCount();
}

function getMoreIncrement() {
  return getRowsCount() * getColsCount();
}

function resetDisplayLimit() {
  displayLimit = getInitialVisibleCount();
  displayMode = "limited";
}

function getAllTags() {
  const set = new Set();
  projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
  return TAG_ORDER.filter((t) => set.has(t));
}

function renderTagFilters() {
  const container = document.getElementById("tag-filters");
  if (!container) return;

  container.innerHTML = "";

  const allBtn = document.createElement("button");
  allBtn.className = "tag-filter active";
  allBtn.dataset.tag = "all";
  allBtn.textContent = "#todos";
  allBtn.addEventListener("click", () => setFilter("all"));
  container.appendChild(allBtn);

  getAllTags().forEach((tag) => {
    const btn = document.createElement("button");
    btn.className = "tag-filter";
    btn.dataset.tag = tag;
    btn.textContent = `#${tag}`;
    btn.addEventListener("click", () => setFilter(tag));
    container.appendChild(btn);
  });
}

function setFilter(tag) {
  activeTag = tag;
  document.querySelectorAll(".tag-filter").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tag === tag);
  });
  renderProjects();
}

function getFilteredProjects() {
  if (activeTag === "all") return [...projects];
  return projects.filter((p) => p.tags.includes(activeTag));
}

function applyProjectVisibility() {
  const cards = document.querySelectorAll(".project");
  let filteredIndex = 0;
  let filteredTotal = 0;
  let shownCount = 0;

  cards.forEach((card) => {
    const tags = card.dataset.tags.split(",");
    const matchesTag = activeTag === "all" || tags.includes(activeTag);
    card.classList.toggle("is-hidden", !matchesTag);

    if (!matchesTag) {
      card.classList.add("is-folded");
      return;
    }

    filteredTotal += 1;
    const withinLimit =
      displayMode === "all" || filteredIndex < displayLimit;
    card.classList.toggle("is-folded", !withinLimit);
    if (withinLimit) shownCount += 1;
    filteredIndex += 1;
  });

  const empty = document.querySelector(".gallery-empty");
  if (empty) {
    empty.classList.toggle("is-hidden", filteredTotal > 0);
  }

  updateCount(filteredTotal, shownCount);
  updateGalleryControls(filteredTotal, shownCount);
}

function updateCount(filteredTotal, shownCount) {
  const el = document.getElementById("gallery-count");
  if (!el) return;

  const label = activeTag === "all" ? "todos" : `#${activeTag}`;

  if (filteredTotal === 0) {
    el.textContent = `0 proyectos · ${label}`;
    return;
  }

  if (shownCount >= filteredTotal) {
    el.textContent = `${filteredTotal} proyecto${filteredTotal !== 1 ? "s" : ""} · ${label}`;
    return;
  }

  el.textContent = `mostrando ${shownCount} de ${filteredTotal} · ${label}`;
}

function updateGalleryControls(filteredTotal, shownCount) {
  const showMore = document.getElementById("show-more");
  const showAll = document.getElementById("show-all");
  const showLess = document.getElementById("show-less");
  const controls = document.getElementById("gallery-controls");

  if (!showMore || !showAll || !showLess || !controls) return;

  const initial = getInitialVisibleCount();
  const hasMore = filteredTotal > initial;

  controls.hidden = !hasMore;

  if (!hasMore) return;

  const canShowMore =
    displayMode === "limited" && shownCount < filteredTotal;
  const isExpanded =
    displayMode === "all" || displayLimit > initial;

  showMore.hidden = !canShowMore;
  showAll.hidden = displayMode === "all";
  showLess.hidden = !isExpanded;
}

function renderProjects() {
  const gallery = document.getElementById("gallery");
  if (!gallery) return;

  resetDisplayLimit();
  const shuffled = shuffleArray(getFilteredProjects());

  gallery.innerHTML = shuffled
    .map(
      (p) => `
    <article class="project" data-id="${p.id}" data-tags="${p.tags.join(",")}" role="button" tabindex="0" aria-label="Ver detalle de ${escapeHtml(p.title)}">
      <img src="${p.image}" alt="${escapeHtml(p.title)}" loading="lazy" />
      <div class="project-meta">
        <div class="project-tags">
          ${p.tags.map((t) => `<span>#${t}</span>`).join("")}
        </div>
        <h3>${escapeHtml(p.title)}</h3>
        <p>${escapeHtml(p.description)}</p>
      </div>
    </article>
  `
    )
    .join("");

  gallery.insertAdjacentHTML(
    "beforeend",
    '<p class="gallery-empty is-hidden">Ningún proyecto con ese tag.</p>'
  );

  bindProjectClicks();
  initProjectObserver();
  applyProjectVisibility();
}

function bindProjectClicks() {
  document.querySelectorAll(".project").forEach((card) => {
    card.addEventListener("click", () => {
      openProjectModal(Number(card.dataset.id));
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openProjectModal(Number(card.dataset.id));
      }
    });
  });
}

function openProjectModal(projectId) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return;

  const modalBody = document.getElementById("modal-body");
  if (!modalBody) return;

  modalBody.innerHTML = `
    <div class="modal-project">
      <div class="modal-tags">
        ${project.tags.map((t) => `<span>#${escapeHtml(t)}</span>`).join("")}
      </div>
      <h2 id="modal-title">${escapeHtml(project.title)}</h2>
      <div class="modal-image">
        <img src="${project.image}" alt="${escapeHtml(project.title)}" />
      </div>
      <p class="modal-description">${escapeHtml(project.description)}</p>
      <div class="modal-details">
        <p>${escapeHtml(project.details)}</p>
      </div>
      ${
        project.specs?.length
          ? `<div class="modal-specs">
        <h3>Especificaciones</h3>
        <ul>
          ${project.specs.map((s) => `<li>${escapeHtml(s)}</li>`).join("")}
        </ul>
      </div>`
          : ""
      }
      ${
        project.link
          ? `<a class="modal-link" href="${escapeHtml(project.link)}" target="_blank" rel="noopener noreferrer">Ver en Instagram →</a>`
          : ""
      }
    </div>
  `;

  const modal = document.getElementById("project-modal");
  modal?.classList.remove("hidden");
  modal?.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.querySelector(".close-modal")?.focus();
}

function closeModal() {
  const modal = document.getElementById("project-modal");
  modal?.classList.add("hidden");
  modal?.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function initModal() {
  document.querySelector(".close-modal")?.addEventListener("click", closeModal);

  const modal = document.getElementById("project-modal");
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    const modalEl = document.getElementById("project-modal");
    if (e.key === "Escape" && modalEl && !modalEl.classList.contains("hidden")) {
      closeModal();
    }
  });
}

function initGalleryControls() {
  document.getElementById("show-more")?.addEventListener("click", () => {
    displayLimit += getMoreIncrement();
    displayMode = "limited";
    applyProjectVisibility();
    initProjectObserver();
  });

  document.getElementById("show-all")?.addEventListener("click", () => {
    displayMode = "all";
    applyProjectVisibility();
    initProjectObserver();
  });

  document.getElementById("show-less")?.addEventListener("click", () => {
    resetDisplayLimit();
    applyProjectVisibility();
    initProjectObserver();
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}

function initProjectObserver() {
  if (projectObserver) projectObserver.disconnect();

  const cards = document.querySelectorAll(".project:not(.is-hidden):not(.is-folded)");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    cards.forEach((c) => c.classList.add("is-visible"));
    return;
  }

  projectObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          projectObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  cards.forEach((card) => {
    card.classList.remove("is-visible");
    projectObserver.observe(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderTagFilters();
  renderProjects();
  initModal();
  initGalleryControls();
});
