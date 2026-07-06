// ============================================================================
// places-map.js
// Builds the SVG world map on places.html, drops pins from data.js, opens a
// modal popup on click with grouped entries + a lazy materials expander.
// The base map is built once; language changes only retouch labels/popups.
// Zoom is viewBox-based with drag-to-pan; pins counter-scale so they stay
// the same size on screen.
// ============================================================================

(function () {
  "use strict";

  const NS = "http://www.w3.org/2000/svg";
  const state = {
    built: false,
    lang: "en",
    svg: null, pinsGroup: null, popup: null, popupCard: null,
    view: { x: 0, y: 0, w: 1000, h: 500 },   // current viewBox
    pinEls: [],                               // {dot, halo}
  };

  const tt = (v, lang) => (typeof v === "string" ? v : v && (v[lang] || v.en)) || "";

  // ---- zoom / pan --------------------------------------------------------
  const MIN_W = 180;   // max zoom ≈ 5.5×
  const applyView = () => {
    const v = state.view;
    // clamp
    v.w = Math.min(1000, Math.max(MIN_W, v.w));
    v.h = v.w / 2;
    v.x = Math.min(1000 - v.w, Math.max(0, v.x));
    v.y = Math.min(500 - v.h, Math.max(0, v.y));
    state.svg.setAttribute("viewBox", `${v.x} ${v.y} ${v.w} ${v.h}`);

    // counter-scale pins so they keep their on-screen size (style.strokeWidth
    // wins over the stylesheet; a plain attribute would lose to CSS)
    const k = v.w / 1000;
    state.pinEls.forEach(({ dot, halo, baseStroke }) => {
      dot.setAttribute("r", 5.5 * k);
      halo.setAttribute("r", 6 * k);
      dot.style.strokeWidth = (baseStroke * k) + "px";
    });
    state.svg.style.cursor = v.w < 1000 ? "grab" : "default";
  };

  const zoomBy = (factor) => {
    const v = state.view;
    const cx = v.x + v.w / 2, cy = v.y + v.h / 2;
    v.w = v.w / factor;
    v.h = v.w / 2;
    v.x = cx - v.w / 2;
    v.y = cy - v.h / 2;
    applyView();
  };

  const wirePan = () => {
    let dragging = false, moved = false, sx = 0, sy = 0, ox = 0, oy = 0;
    const pxScale = () => state.view.w / state.svg.getBoundingClientRect().width;

    state.svg.addEventListener("pointerdown", (e) => {
      if (state.view.w >= 1000) return;         // nothing to pan at world view
      // Never capture on a pin: pointer capture retargets the click to the
      // svg, which would make pins unclickable while zoomed.
      if (e.target.closest(".pin")) return;
      dragging = true; moved = false;
      sx = e.clientX; sy = e.clientY;
      ox = state.view.x; oy = state.view.y;
      state.svg.setPointerCapture(e.pointerId);
      state.svg.style.cursor = "grabbing";
    });
    state.svg.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      const k = pxScale();
      const dx = (e.clientX - sx) * k, dy = (e.clientY - sy) * k;
      if (Math.abs(dx) + Math.abs(dy) > 2) moved = true;
      state.view.x = ox - dx;
      state.view.y = oy - dy;
      applyView();
    });
    const end = () => { dragging = false; applyView(); };
    state.svg.addEventListener("pointerup", end);
    state.svg.addEventListener("pointercancel", end);
    // swallow the click after a real drag so pins don't fire
    state.svg.addEventListener("click", (e) => {
      if (moved) { e.stopPropagation(); moved = false; }
    }, true);
    state.svg.addEventListener("dblclick", (e) => {
      e.preventDefault();
      zoomBy(1.6);
    });
  };

  // ---- base map (built once) ----------------------------------------------
  const buildBaseMap = (root) => {
    const P = window.WORLD_PROJECT;
    const PATHS = window.WORLD_PATHS || [];
    const D = window.SITE_DATA;

    const stage = document.createElement("div");
    stage.className = "places-stage";

    const svg = document.createElementNS(NS, "svg");
    svg.setAttribute("viewBox", `0 0 ${P.W} ${P.H}`);
    svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
    svg.setAttribute("role", "img");
    state.svg = svg;

    // Faint graticule every 30°
    const grat = document.createElementNS(NS, "g");
    grat.setAttribute("class", "graticule");
    for (let lon = -150; lon <= 150; lon += 30) {
      const [x] = P.fromLatLon(0, lon);
      const line = document.createElementNS(NS, "line");
      line.setAttribute("x1", x); line.setAttribute("x2", x);
      line.setAttribute("y1", 0); line.setAttribute("y2", P.H);
      grat.append(line);
    }
    for (let lat = -60; lat <= 60; lat += 30) {
      const [, y] = P.fromLatLon(lat, 0);
      const line = document.createElementNS(NS, "line");
      line.setAttribute("y1", y); line.setAttribute("y2", y);
      line.setAttribute("x1", 0); line.setAttribute("x2", P.W);
      grat.append(line);
    }
    svg.append(grat);

    // Countries — paths pre-projected in world-geometry.js
    const land = document.createElementNS(NS, "g");
    PATHS.forEach(country => {
      const path = document.createElementNS(NS, "path");
      path.setAttribute("d", country.d);
      path.setAttribute("class", "country");
      path.setAttribute("data-name", country.name);
      land.append(path);
    });
    svg.append(land);

    // Pins
    const pins = document.createElementNS(NS, "g");
    pins.setAttribute("class", "places-pins");
    state.pinsGroup = pins;
    state.pinEls = [];
    (D.places || []).forEach((place, idx) => {
      const [x, y] = P.fromLatLon(place.lat, place.lon);

      const halo = document.createElementNS(NS, "circle");
      halo.setAttribute("cx", x); halo.setAttribute("cy", y);
      halo.setAttribute("r", 6); halo.setAttribute("class", "pin-pulse");
      pins.append(halo);

      const dot = document.createElementNS(NS, "circle");
      dot.setAttribute("cx", x); dot.setAttribute("cy", y);
      dot.setAttribute("r", 5.5);
      dot.setAttribute("class", "pin" + (place.remote ? " pin--remote" : ""));
      dot.setAttribute("tabindex", "0");
      dot.setAttribute("role", "button");
      dot.setAttribute("aria-label", place.city);
      dot.dataset.idx = idx;
      const baseStroke = place.remote ? 1.8 : 1.5;
      dot.style.strokeWidth = baseStroke + "px";
      pins.append(dot);
      state.pinEls.push({ dot, halo, baseStroke });
    });
    svg.append(pins);
    stage.append(svg);

    // Zoom controls
    const zoom = document.createElement("div");
    zoom.className = "places-zoom";
    const mk = (txt, title, fn) => {
      const b = document.createElement("button");
      b.textContent = txt; b.title = title; b.onclick = fn;
      return b;
    };
    zoom.append(
      mk("+", "zoom in", () => zoomBy(1.5)),
      mk("−", "zoom out", () => zoomBy(1 / 1.5)),
      mk("⟲", "reset view", () => { state.view = { x: 0, y: 0, w: 1000, h: 500 }; applyView(); }),
    );
    stage.append(zoom);
    wirePan();

    // Popup shell
    const popup = document.createElement("div");
    popup.className = "places-popup";
    popup.setAttribute("role", "dialog");
    popup.setAttribute("aria-modal", "true");
    const popupCard = document.createElement("div");
    popupCard.className = "places-popup__card";
    popup.append(popupCard);
    state.popup = popup;
    state.popupCard = popupCard;

    const closePopup = () => popup.classList.remove("open");
    popup.addEventListener("click", e => { if (e.target === popup) closePopup(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") closePopup(); });

    // Pin click / keyboard → open popup
    const openFromEvent = (e) => {
      const dot = e.target.closest(".pin");
      if (!dot) return;
      const place = window.SITE_DATA.places[+dot.dataset.idx];
      if (place) openPopup(place);
    };
    pins.addEventListener("click", openFromEvent);
    pins.addEventListener("keydown", e => {
      if (e.key !== "Enter" && e.key !== " ") return;
      e.preventDefault();
      openFromEvent(e);
    });

    root.append(stage, popup);
    state.built = true;
  };

  // ---- materials: built lazily on first expand ----------------------------
  const buildMaterial = (m, lang) => {
    const wrap = document.createElement("div");
    wrap.className = "places-mat";
    const label = document.createElement("div");
    label.className = "places-mat__label";
    label.textContent = tt(m.label, lang) || (m.kind === "pdf" ? "PDF" : m.kind === "video" ? "Video" : "Link");
    wrap.append(label);
    if (m.kind === "pdf") {
      const iframe = document.createElement("iframe");
      iframe.src = m.src;
      iframe.loading = "lazy";
      iframe.title = tt(m.label, lang) || "PDF";
      wrap.append(iframe);
    } else if (m.kind === "video") {
      const video = document.createElement("video");
      video.src = m.src;
      if (m.poster) video.poster = m.poster;
      video.controls = true;
      video.preload = "none";
      video.playsInline = true;
      wrap.append(video);
    } else if (m.kind === "image") {
      const img = document.createElement("img");
      img.src = m.src;
      img.alt = tt(m.label, lang) || "";
      img.loading = "lazy";
      img.style.cssText = "width:100%;height:auto;display:block;";
      wrap.append(img);
    } else {
      const a = document.createElement("a");
      a.href = m.src; a.target = "_blank"; a.rel = "noopener";
      a.textContent = (tt(m.label, lang) || "Open") + " ↗";
      a.style.cssText = "display:block;padding:14px;color:var(--accent-ink);font-family:var(--mono);font-size:12px;letter-spacing:0.06em;text-transform:uppercase;";
      wrap.append(a);
    }
    return wrap;
  };

  const openPopup = (place) => {
    const lang = state.lang;
    const popupCard = state.popupCard;
    popupCard.innerHTML = "";

    const closeBtn = document.createElement("button");
    closeBtn.className = "places-popup__close";
    closeBtn.setAttribute("aria-label", "close");
    closeBtn.textContent = "×";
    closeBtn.onclick = () => state.popup.classList.remove("open");
    popupCard.append(closeBtn);

    const city = document.createElement("div");
    city.className = "places-popup__city";
    city.textContent = place.city + (place.remote ? (lang === "es" ? " · remoto" : " · remote") : "");
    popupCard.append(city);

    const entriesWrap = document.createElement("div");
    entriesWrap.className = "places-popup__entries";

    (place.entries || []).forEach(entry => {
      const block = document.createElement("div");
      block.className = "places-entry";

      const dateStr = entry.date
        ? new Date(entry.date).toLocaleDateString(lang === "es" ? "es" : "en",
            { month: "short", year: "numeric", timeZone: "UTC" }).toUpperCase()
        : "";

      const meta = document.createElement("div");
      meta.className = "places-entry__meta";
      if (entry.tag) {
        const tag = document.createElement("span");
        tag.className = "places-entry__tag";
        tag.textContent = tt(entry.tag, lang);
        meta.append(tag);
      }
      if (dateStr) {
        const d = document.createElement("span");
        d.textContent = dateStr;
        meta.append(d);
      }
      block.append(meta);

      const h = document.createElement("h3");
      h.textContent = tt(entry.title, lang);
      block.append(h);

      const brief = document.createElement("p");
      brief.className = "places-entry__brief";
      brief.append(window.SITE_APP.renderInlineMd(tt(entry.brief, lang)));
      block.append(brief);

      if (entry.story) {
        const story = document.createElement("p");
        story.className = "places-entry__story";
        story.append(window.SITE_APP.renderInlineMd(tt(entry.story, lang)));
        block.append(story);
      }

      const mats = (entry.materials || []).filter(m => m && m.src);
      if (mats.length) {
        const btn = document.createElement("button");
        btn.className = "places-materials-btn";
        btn.textContent = (lang === "es" ? "Materiales" : "Materials") + " ↓";
        const matsWrap = document.createElement("div");
        matsWrap.className = "places-materials";
        matsWrap.hidden = true;
        let builtMats = false;              // lazy: nothing downloads until opened
        btn.onclick = () => {
          if (!builtMats) {
            mats.forEach(m => matsWrap.append(buildMaterial(m, lang)));
            builtMats = true;
          }
          matsWrap.hidden = !matsWrap.hidden;
          btn.textContent = (lang === "es" ? "Materiales" : "Materials") + (matsWrap.hidden ? " ↓" : " ↑");
        };
        block.append(btn, matsWrap);
      }

      entriesWrap.append(block);
    });

    popupCard.append(entriesWrap);
    state.popup.classList.add("open");
  };

  // ---- entry point (called by app.js on load and on language change) ------
  const renderPlaces = (lang) => {
    const root = document.getElementById("places-root");
    if (!root) return;
    state.lang = lang;
    if (!state.built) {
      buildBaseMap(root);
      applyView();
    }
    state.svg.setAttribute("aria-label",
      lang === "es" ? "Mapa mundial de lugares visitados" : "World map of places visited");
    // if a popup is open during a language toggle, close it — reopening
    // rebuilds it in the new language
    state.popup.classList.remove("open");
  };

  window.renderPlaces = renderPlaces;
})();
