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
const CONTACT_ENDPOINT = "https://formsubmit.co/ajax/nicolassaganias@protonmail.com";
const MUSIC_ITEMS = [
  {
    title: "Diálogo entre planta y máquina",
    platform: "local",
    src: "/audio/dialogos-entre-planta-y-maquina.wav",
    sourceUrl: "https://soundcloud.com/nicolassaganias/dialogo-entre-una-planta-y-una-maquina",
    note: "Single",
  },
  {
    title: "NXMX",
    platform: "local",
    src: "/audio/Nix Mix.wav",
    sourceUrl: "https://soundcloud.com/nicolassaganias/nixmix",
    note: "Single",
  },
  {
    title: "NEU Live Set",
    platform: "local",
    src: "/audio/NEU live set - nix.wav",
    sourceUrl: "https://soundcloud.com/nicolassaganias/neu-live-set-nix",
    note: "Live set",
  },
  {
    title: "Bola Brillante (Live)",
    platform: "local",
    src: "/audio/bola-brillante.wav",
    sourceUrl: "https://soundcloud.com/nicolassaganias/bola-brillante-live",
    note: "Single",
  },
  {
    title: "Nix - I",
    platform: "local",
    src: "/audio/I.wav",
    sourceUrl: "https://strlacrecords.bandcamp.com/album/nixon-el-asno-de-oro",
    note: "El Asno de Oro (2020) · 05:31",
  },
  {
    title: "Nix - II",
    platform: "local",
    src: "/audio/II.wav",
    sourceUrl: "https://strlacrecords.bandcamp.com/album/nixon-el-asno-de-oro",
    note: "El Asno de Oro (2020) · 08:34",
  },
];

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
  document.querySelector("#project-modal .close-modal")?.focus();
}

function closeModal() {
  const modal = document.getElementById("project-modal");
  modal?.classList.add("hidden");
  modal?.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function initModal() {
  document.querySelector("#project-modal .close-modal")?.addEventListener("click", closeModal);

  const modal = document.getElementById("project-modal");
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (event) => {
    const modalEl = document.getElementById("project-modal");
    if (event.key === "Escape" && modalEl && !modalEl.classList.contains("hidden")) {
      closeModal();
    }
  });
}

function initContactComposer() {
  const modal = document.getElementById("contact-modal");
  const closeModal = () => {
    modal?.classList.add("hidden");
    modal?.setAttribute("aria-hidden", "true");
    if (document.getElementById("project-modal")?.classList.contains("hidden")) {
      document.body.style.overflow = "";
    }
  };

  document.getElementById("contact-trigger")?.addEventListener("click", (event) => {
    event.preventDefault();
    modal?.classList.remove("hidden");
    modal?.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    document.getElementById("contact-name")?.focus();
  });

  document.getElementById("contact-close")?.addEventListener("click", closeModal);
  modal?.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.getElementById("contact-form")?.addEventListener("submit", async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (!(form instanceof HTMLFormElement)) return;

    const status = document.getElementById("contact-status");
    const submitBtn = document.getElementById("contact-submit");
    if (submitBtn instanceof HTMLButtonElement) submitBtn.disabled = true;
    if (status) {
      status.textContent = "Enviando...";
      status.className = "contact-status";
    }

    const payload = new FormData(form);
    payload.append("_subject", `[NIX Web] ${payload.get("subject") || "Nuevo mensaje"}`);
    payload.append("_captcha", "false");
    payload.append("_template", "table");

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        body: payload,
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar");
      }

      if (status) {
        status.textContent = "Enviado. Gracias por escribir.";
        status.className = "contact-status ok";
      }
      form.reset();
      closeModal();
    } catch (error) {
      if (status) {
        status.textContent = "Error al enviar. Intenta de nuevo en unos segundos.";
        status.className = "contact-status error";
      }
    } finally {
      if (submitBtn instanceof HTMLButtonElement) submitBtn.disabled = false;
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal && !modal.classList.contains("hidden")) {
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

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "00:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function paintRangeProgress(input, value, max) {
  if (!input || !Number.isFinite(max) || max <= 0) return;
  const pct = (value / max) * 100;
  input.style.background = `linear-gradient(90deg, var(--accent) ${pct}%, var(--line) ${pct}%)`;
}

function initMusicPlayer() {
  const list = document.getElementById("music-list");
  const audio = document.getElementById("music-audio");
  const nowPlaying = document.getElementById("music-now-playing");
  const playBtn = document.getElementById("music-play");
  const prevBtn = document.getElementById("music-prev");
  const nextBtn = document.getElementById("music-next");
  const seek = document.getElementById("music-seek");
  const volume = document.getElementById("music-volume");
  const time = document.getElementById("music-time");
  const status = document.getElementById("music-status");

  if (!list || !audio || !nowPlaying || !playBtn || !prevBtn || !nextBtn || !seek || !volume || !time || !status) return;
  if (!MUSIC_ITEMS.length) {
    status.textContent = "Sin pistas cargadas.";
    return;
  }

  let currentIndex = 0;
  let userSeeking = false;

  const setActiveTrack = (index, autoplay = false) => {
    const item = MUSIC_ITEMS[index];
    if (!item) return;
    currentIndex = index;

    list.querySelectorAll(".music-item").forEach((btn, idx) => {
      btn.classList.toggle("active", idx === index);
    });

    audio.src = item.src;
    nowPlaying.textContent = item.title;
    playBtn.textContent = "PLAY";
    seek.value = "0";
    paintRangeProgress(seek, 0, 100);
    time.textContent = "00:00 / 00:00";

    if (item.sourceUrl) {
      status.innerHTML = `${escapeHtml(item.note || "Track local")} · <a href="${escapeHtml(item.sourceUrl)}" target="_blank" rel="noopener noreferrer">fuente</a>`;
    } else {
      status.textContent = item.note || "Track local.";
    }

    if (autoplay) {
      audio.play().then(() => {
        playBtn.textContent = "PAUSE";
      }).catch(() => {
        playBtn.textContent = "PLAY";
      });
    }
  };

  list.innerHTML = MUSIC_ITEMS.map(
    (item, index) => {
      const sourceLabel = item.sourceUrl?.includes("bandcamp") ? "Bandcamp" : "SoundCloud";
      return `<button type="button" class="music-item" data-index="${index}" role="listitem">
        ${escapeHtml(item.title)}
        <small>${sourceLabel}${item.note ? ` · ${escapeHtml(item.note)}` : ""}</small>
      </button>`;
    }
  ).join("");

  list.querySelectorAll(".music-item").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.index);
      if (Number.isNaN(index)) return;
      setActiveTrack(index, true);
    });
  });

  playBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play().then(() => {
        playBtn.textContent = "PAUSE";
      }).catch(() => {
        status.textContent = "No se pudo reproducir. Verifica que el archivo exista.";
      });
      return;
    }
    audio.pause();
    playBtn.textContent = "PLAY";
  });

  prevBtn.addEventListener("click", () => {
    const nextIndex = currentIndex === 0 ? MUSIC_ITEMS.length - 1 : currentIndex - 1;
    setActiveTrack(nextIndex, true);
  });

  nextBtn.addEventListener("click", () => {
    const nextIndex = currentIndex === MUSIC_ITEMS.length - 1 ? 0 : currentIndex + 1;
    setActiveTrack(nextIndex, true);
  });

  seek.addEventListener("input", () => {
    userSeeking = true;
    const duration = Number.isFinite(audio.duration) ? audio.duration : 0;
    if (duration > 0) {
      const nextTime = (Number(seek.value) / 100) * duration;
      time.textContent = `${formatTime(nextTime)} / ${formatTime(duration)}`;
    }
    paintRangeProgress(seek, Number(seek.value), 100);
  });

  seek.addEventListener("change", () => {
    const duration = Number.isFinite(audio.duration) ? audio.duration : 0;
    if (duration > 0) {
      audio.currentTime = (Number(seek.value) / 100) * duration;
    }
    userSeeking = false;
  });

  volume.addEventListener("input", () => {
    audio.volume = Number(volume.value);
    paintRangeProgress(volume, Number(volume.value), 1);
  });

  audio.addEventListener("loadedmetadata", () => {
    const duration = Number.isFinite(audio.duration) ? audio.duration : 0;
    time.textContent = `${formatTime(0)} / ${formatTime(duration)}`;
  });

  audio.addEventListener("timeupdate", () => {
    const duration = Number.isFinite(audio.duration) ? audio.duration : 0;
    if (duration <= 0) return;
    const progress = (audio.currentTime / duration) * 100;
    if (!userSeeking) {
      seek.value = String(progress);
      paintRangeProgress(seek, progress, 100);
      time.textContent = `${formatTime(audio.currentTime)} / ${formatTime(duration)}`;
    }
  });

  audio.addEventListener("ended", () => {
    const nextIndex = currentIndex === MUSIC_ITEMS.length - 1 ? 0 : currentIndex + 1;
    setActiveTrack(nextIndex, true);
  });

  audio.addEventListener("error", () => {
    const current = MUSIC_ITEMS[currentIndex];
    status.innerHTML = `No se encontró el archivo local: <code>${escapeHtml(current.src)}</code>. Súbelo y recarga.`;
    playBtn.textContent = "PLAY";
    nowPlaying.textContent = `${current.title} (sin archivo)`;
  });

  audio.addEventListener("play", () => {
    playBtn.textContent = "PAUSE";
  });

  audio.addEventListener("pause", () => {
    playBtn.textContent = "PLAY";
  });

  document.addEventListener("keydown", (event) => {
    if (event.code !== "Space") return;
    const target = event.target;
    if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLButtonElement) {
      return;
    }
    event.preventDefault();
    playBtn.click();
  });

  audio.volume = Number(volume.value);
  paintRangeProgress(volume, Number(volume.value), 1);
  setActiveTrack(0, false);
}

document.addEventListener("DOMContentLoaded", () => {
  renderTagFilters();
  renderProjects();
  initModal();
  initContactComposer();
  initMusicPlayer();
  initGalleryControls();
});
