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
    platform: "soundcloud",
    url: "https://soundcloud.com/nicolassaganias/dialogo-entre-una-planta-y-una-maquina",
    note: "Single",
  },
  {
    title: "NXMX",
    platform: "soundcloud",
    url: "https://soundcloud.com/nicolassaganias/nixmix",
    note: "Single",
  },
  {
    title: "NEU Live Set",
    platform: "soundcloud",
    url: "https://soundcloud.com/nicolassaganias/neu-live-set-nix",
    note: "Live set",
  },
  {
    title: "Bola Brillante (Live)",
    platform: "soundcloud",
    url: "https://soundcloud.com/nicolassaganias/bola-brillante-live",
    note: "Single",
  },
  {
    title: "Nix - I",
    platform: "bandcamp",
    url: "https://strlacrecords.bandcamp.com/album/nixon-el-asno-de-oro",
    note: "El Asno de Oro (2020) · 05:31",
  },
  {
    title: "Nix - II",
    platform: "bandcamp",
    url: "https://strlacrecords.bandcamp.com/album/nixon-el-asno-de-oro",
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

function scEmbedSrc(trackUrl) {
  const params = new URLSearchParams({
    url: trackUrl,
    auto_play: "false",
    hide_related: "true",
    show_comments: "false",
    show_user: "false",
    show_reposts: "false",
    show_teaser: "false",
    visual: "false",
  });
  return `https://w.soundcloud.com/player/?${params.toString()}`;
}

function loadSoundCloudApi() {
  return new Promise((resolve, reject) => {
    if (window.SC?.Widget) {
      resolve(window.SC);
      return;
    }
    const existing = document.querySelector('script[src*="w.soundcloud.com/player/api.js"]');
    if (existing) {
      existing.addEventListener("load", () => resolve(window.SC), { once: true });
      existing.addEventListener("error", () => reject(new Error("SoundCloud API load failed")), { once: true });
      return;
    }
    const script = document.createElement("script");
    script.src = "https://w.soundcloud.com/player/api.js";
    script.async = true;
    script.onload = () => resolve(window.SC);
    script.onerror = () => reject(new Error("SoundCloud API load failed"));
    document.head.appendChild(script);
  });
}

function initMusicPlayer() {
  const list = document.getElementById("music-list");
  const iframe = document.getElementById("music-sc-iframe");
  const nowPlaying = document.getElementById("music-now-playing");
  const descriptionEl = document.getElementById("music-description");
  const playBtn = document.getElementById("music-play");
  const prevBtn = document.getElementById("music-prev");
  const nextBtn = document.getElementById("music-next");
  const seek = document.getElementById("music-seek");
  const seekFill = document.getElementById("music-seek-fill");
  const seekLoad = document.getElementById("music-seek-load");
  const volume = document.getElementById("music-volume");
  const time = document.getElementById("music-time");
  const timeElapsed = document.getElementById("music-time-elapsed");
  const timeTotal = document.getElementById("music-time-total");
  const deckClock = document.getElementById("music-deck-clock");
  const stateFlag = document.getElementById("music-state-flag");
  const bitrateFlag = document.getElementById("music-bitrate-flag");
  const signalEl = document.getElementById("music-signal");
  const signalText = document.getElementById("music-signal-text");
  const status = document.getElementById("music-status");

  if (!list || !iframe || !nowPlaying || !descriptionEl || !playBtn || !prevBtn || !nextBtn || !seek || !volume || !time || !status) return;
  if (!MUSIC_ITEMS.length) {
    status.textContent = "Sin pistas cargadas.";
    return;
  }

  let currentIndex = 0;
  let userSeeking = false;
  let durationMs = 0;
  let loadedProgress = 0;
  let lastPositionMs = 0;
  let isPlaying = false;
  let widget = null;
  let pendingPlay = false;

  const platformLabel = (item) => {
    if (item.platform === "bandcamp") return "Bandcamp";
    if (item.platform === "soundcloud") return "SoundCloud";
    return "Audio";
  };

  const buildMeter = (pct, width = 16) => {
    const filled = Math.max(0, Math.min(width, Math.round((pct / 100) * width)));
    return `${"█".repeat(filled)}${"░".repeat(width - filled)}`;
  };

  const updateSignal = (currentMs = lastPositionMs, totalMs = durationMs) => {
    if (!signalText) return;
    const total = totalMs > 0 ? totalMs : 0;
    const current = Math.max(0, currentMs || 0);
    lastPositionMs = current;
    const pct = total > 0 ? (current / total) * 100 : 0;
    const bufPct = Math.round(loadedProgress * 100);
    const mode = isPlaying ? "PLAY" : "IDLE";
    signalText.textContent = `${mode} ${buildMeter(pct)} ${Math.round(pct)}% · BUF ${bufPct}% · ${formatTime(current / 1000)}`;
    signalEl?.classList.toggle("is-live", isPlaying);
  };

  const setPlayingUi = (playing) => {
    isPlaying = playing;
    playBtn.textContent = playing ? "PAUSE" : "PLAY";
    if (stateFlag) stateFlag.textContent = playing ? "STATE::play" : "STATE::idle";
    updateSignal();
  };

  const setProgressUi = (currentMs, totalMs, loadPct = null) => {
    const total = totalMs > 0 ? totalMs : durationMs;
    const current = Math.max(0, currentMs || 0);
    lastPositionMs = current;
    const progress = total > 0 ? (current / total) * 100 : 0;
    if (!userSeeking) {
      seek.value = String(progress);
      if (seekFill) seekFill.style.width = `${progress}%`;
    }
    if (loadPct != null) {
      loadedProgress = Math.max(0, Math.min(1, loadPct));
      if (seekLoad) seekLoad.style.width = `${loadedProgress * 100}%`;
    }
    const elapsedLabel = formatTime(current / 1000);
    const totalLabel = formatTime((total || 0) / 1000);
    time.textContent = `${elapsedLabel} / ${totalLabel}`;
    if (timeElapsed) timeElapsed.textContent = elapsedLabel;
    if (timeTotal) timeTotal.textContent = totalLabel;
    if (deckClock) deckClock.textContent = elapsedLabel;
    updateSignal(current, total);
  };

  const resetProgress = () => {
    durationMs = 0;
    loadedProgress = 0;
    lastPositionMs = 0;
    seek.value = "0";
    if (seekFill) seekFill.style.width = "0%";
    if (seekLoad) seekLoad.style.width = "0%";
    setProgressUi(0, 0, 0);
  };

  const cleanDescription = (raw) => {
    if (!raw) return "";
    return String(raw)
      .replace(/<[^>]+>/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/\s+/g, " ")
      .trim();
  };

  const applySoundMeta = (sound, fallbackItem) => {
    const title = sound?.title || fallbackItem?.title || "Sin título";
    nowPlaying.textContent = title;
    const desc = cleanDescription(sound?.description);
    if (desc) {
      descriptionEl.textContent = desc;
    } else if (fallbackItem?.note) {
      descriptionEl.textContent = `${fallbackItem.note}. Sin descripción en SoundCloud.`;
    } else {
      descriptionEl.textContent = "Sin descripción en SoundCloud.";
    }
    if (bitrateFlag) {
      const genre = sound?.genre ? String(sound.genre).toUpperCase() : "STREAM";
      bitrateFlag.textContent = `TAG::${genre.slice(0, 18)}`;
    }
  };

  const setStatusForItem = (item) => {
    const note = item.note || platformLabel(item);
    if (item.url) {
      status.innerHTML = `${escapeHtml(note)} · <a href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(platformLabel(item))}</a>`;
      return;
    }
    status.textContent = note;
  };

  const refreshCurrentSound = () => {
    if (!widget) return;
    widget.getCurrentSound((sound) => {
      applySoundMeta(sound, MUSIC_ITEMS[currentIndex]);
    });
  };

  const bindWidgetEvents = () => {
    if (!widget || !window.SC?.Widget) return;
    const Events = window.SC.Widget.Events;

    widget.bind(Events.READY, () => {
      widget.setVolume(Math.round(Number(volume.value) * 100));
      widget.getDuration((ms) => {
        durationMs = Number(ms) || 0;
        setProgressUi(0, durationMs);
      });
      refreshCurrentSound();
      if (pendingPlay) {
        pendingPlay = false;
        widget.play();
      }
    });

    widget.bind(Events.PLAY, () => {
      setPlayingUi(true);
      refreshCurrentSound();
    });

    widget.bind(Events.PAUSE, () => {
      setPlayingUi(false);
    });

    widget.bind(Events.LOAD_PROGRESS, (data) => {
      const loaded = Number(data?.loadedProgress);
      if (!Number.isFinite(loaded)) return;
      loadedProgress = Math.max(0, Math.min(1, loaded));
      if (seekLoad) seekLoad.style.width = `${loadedProgress * 100}%`;
      updateSignal();
    });

    widget.bind(Events.PLAY_PROGRESS, (data) => {
      const current = Number(data?.currentPosition) || 0;
      const relative = Number(data?.relativePosition);
      if (Number.isFinite(relative) && relative > 0) {
        durationMs = current / relative;
      }
      if (durationMs <= 0 || userSeeking) return;
      setProgressUi(current, durationMs);
    });

    widget.bind(Events.FINISH, () => {
      setPlayingUi(false);
      const nextIndex = currentIndex === MUSIC_ITEMS.length - 1 ? 0 : currentIndex + 1;
      setActiveTrack(nextIndex, true);
    });
  };

  const ensureWidget = async () => {
    if (widget) return widget;
    await loadSoundCloudApi();
    if (!window.SC?.Widget) throw new Error("SoundCloud Widget no disponible");
    if (!iframe.src) {
      const firstSc = MUSIC_ITEMS.find((item) => item.platform === "soundcloud");
      iframe.src = scEmbedSrc(firstSc?.url || MUSIC_ITEMS[0].url);
    }
    widget = window.SC.Widget(iframe);
    bindWidgetEvents();
    return widget;
  };

  const setActiveTrack = async (index, autoplay = false) => {
    const item = MUSIC_ITEMS[index];
    if (!item) return;
    currentIndex = index;
    pendingPlay = false;
    setPlayingUi(false);
    resetProgress();

    list.querySelectorAll(".music-item").forEach((btn, idx) => {
      btn.classList.toggle("active", idx === index);
    });

    nowPlaying.textContent = item.title;
    descriptionEl.textContent = "Sincronizando metadata de SoundCloud…";
    playBtn.textContent = "PLAY";
    setStatusForItem(item);
    if (bitrateFlag) bitrateFlag.textContent = "RATE::--kbps";

    if (item.platform !== "soundcloud") {
      descriptionEl.textContent = item.note || "Track disponible en Bandcamp.";
      status.innerHTML = `${escapeHtml(item.note || "Track")} · disponible en <a href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">Bandcamp</a> (sin stream aquí).`;
      if (autoplay) {
        window.open(item.url, "_blank", "noopener,noreferrer");
      }
      return;
    }

    try {
      await ensureWidget();
      pendingPlay = autoplay;
      widget.load(item.url, {
        auto_play: autoplay,
        show_artwork: false,
        callback: () => {
          widget.setVolume(Math.round(Number(volume.value) * 100));
          widget.getDuration((ms) => {
            durationMs = Number(ms) || 0;
            setProgressUi(0, durationMs);
          });
          refreshCurrentSound();
          if (autoplay) {
            widget.play();
          }
        },
      });
    } catch (error) {
      status.textContent = "No se pudo conectar con SoundCloud.";
      descriptionEl.textContent = "Error de enlace con el stream.";
      console.error(error);
    }
  };

  list.innerHTML = MUSIC_ITEMS.map((item, index) => {
    return `<button type="button" class="music-item" data-index="${index}" role="listitem">
      ${escapeHtml(item.title)}
      <small>${escapeHtml(platformLabel(item))}${item.note ? ` · ${escapeHtml(item.note)}` : ""}</small>
    </button>`;
  }).join("");

  list.querySelectorAll(".music-item").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.index);
      if (Number.isNaN(index)) return;
      setActiveTrack(index, true);
    });
  });

  playBtn.addEventListener("click", async () => {
    const item = MUSIC_ITEMS[currentIndex];
    if (!item) return;

    if (item.platform !== "soundcloud") {
      window.open(item.url, "_blank", "noopener,noreferrer");
      return;
    }

    try {
      await ensureWidget();
      widget.isPaused((paused) => {
        if (paused) {
          widget.play();
        } else {
          widget.pause();
        }
      });
    } catch (error) {
      status.textContent = "No se pudo reproducir desde SoundCloud.";
      console.error(error);
    }
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
    const nextMs = durationMs > 0 ? (Number(seek.value) / 100) * durationMs : 0;
    if (seekFill) seekFill.style.width = `${Number(seek.value)}%`;
    setProgressUi(nextMs, durationMs);
  });

  seek.addEventListener("change", () => {
    if (widget && durationMs > 0 && MUSIC_ITEMS[currentIndex]?.platform === "soundcloud") {
      widget.seekTo((Number(seek.value) / 100) * durationMs);
    }
    userSeeking = false;
  });

  volume.addEventListener("input", () => {
    const vol = Number(volume.value);
    paintRangeProgress(volume, vol, 1);
    if (widget) {
      widget.setVolume(Math.round(vol * 100));
    }
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
