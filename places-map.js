// ============================================================================
// places-map.js
// Builds the SVG world map on places.html, drops pins from data.js, opens a
// modal popup on click with grouped entries + materials expander.
// ============================================================================

(function () {
  "use strict";

  // Wait for app.js to declare SITE_APP, but if the map root isn't on this
  // page, do nothing.
  const renderPlaces = (lang) => {
    const root = document.getElementById("places-root");
    if (!root) return;
    const D = window.SITE_DATA;
    const PATHS = window.WORLD_PATHS || [];
    const P = window.WORLD_PROJECT;
    const tt = (v) => (typeof v === "string" ? v : v && (v[lang] || v.en)) || "";

    root.innerHTML = "";

    // ---- SVG basemap ----
    const NS = "http://www.w3.org/2000/svg";
    const stage = document.createElement("div");
    stage.className = "places-stage";

    const svg = document.createElementNS(NS, "svg");
    svg.setAttribute("viewBox", `0 0 ${P.W} ${P.H}`);
    svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-label", lang === "es" ? "Mapa mundial de lugares visitados" : "World map of places visited");

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
    (D.places || []).forEach((place, idx) => {
      const [x, y] = P.fromLatLon(place.lat, place.lon);

      // pulse halo
      const halo = document.createElementNS(NS, "circle");
      halo.setAttribute("cx", x); halo.setAttribute("cy", y);
      halo.setAttribute("r", 6); halo.setAttribute("class", "pin-pulse");
      pins.append(halo);

      const dot = document.createElementNS(NS, "circle");
      dot.setAttribute("cx", x); dot.setAttribute("cy", y);
      dot.setAttribute("r", 5.5);
      dot.setAttribute("class", "pin");
      dot.setAttribute("tabindex", "0");
      dot.setAttribute("role", "button");
      dot.setAttribute("aria-label", place.city);
      dot.dataset.idx = idx;
      pins.append(dot);
    });
    svg.append(pins);

    stage.append(svg);

    // ---- Zoom controls ----
    let scale = 1;
    const zoom = document.createElement("div");
    zoom.className = "places-zoom";
    const zoomIn  = document.createElement("button"); zoomIn.textContent  = "+"; zoomIn.title = "zoom in";
    const zoomOut = document.createElement("button"); zoomOut.textContent = "−"; zoomOut.title = "zoom out";
    const zoomReset = document.createElement("button"); zoomReset.textContent = "·"; zoomReset.title = "reset";
    zoom.append(zoomIn, zoomOut, zoomReset);
    stage.append(zoom);

    const applyScale = () => {
      svg.style.transformOrigin = "center center";
      svg.style.transition = "transform 0.25s ease";
      svg.style.transform = `scale(${scale})`;
    };
    zoomIn.onclick = () => { scale = Math.min(4, scale * 1.4); applyScale(); };
    zoomOut.onclick = () => { scale = Math.max(1, scale / 1.4); applyScale(); };
    zoomReset.onclick = () => { scale = 1; applyScale(); };

    // ---- Popup ----
    const popup = document.createElement("div");
    popup.className = "places-popup";
    popup.setAttribute("role", "dialog");
    popup.setAttribute("aria-modal", "true");

    const popupCard = document.createElement("div");
    popupCard.className = "places-popup__card";
    popup.append(popupCard);

    const closeBtn = document.createElement("button");
    closeBtn.className = "places-popup__close";
    closeBtn.setAttribute("aria-label", "close");
    closeBtn.textContent = "×";
    closeBtn.onclick = () => popup.classList.remove("open");

    const closePopup = () => popup.classList.remove("open");
    popup.addEventListener("click", e => { if (e.target === popup) closePopup(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") closePopup(); });

    const buildMaterial = (m) => {
      const wrap = document.createElement("div");
      wrap.className = "places-mat";
      const label = document.createElement("div");
      label.className = "places-mat__label";
      label.textContent = tt(m.label) || (m.kind === "pdf" ? "PDF" : m.kind === "video" ? "Video" : "Link");
      wrap.append(label);
      if (m.kind === "pdf") {
        const iframe = document.createElement("iframe");
        iframe.src = m.src;
        iframe.title = tt(m.label) || "PDF";
        wrap.append(iframe);
      } else if (m.kind === "video") {
        const video = document.createElement("video");
        video.src = m.src;
        video.controls = true;
        video.preload = "metadata";
        wrap.append(video);
      } else if (m.kind === "image") {
        const img = document.createElement("img");
        img.src = m.src;
        img.alt = tt(m.label) || "";
        img.loading = "lazy";
        img.style.cssText = "width:100%;height:auto;display:block;";
        wrap.append(img);
      } else {
        const a = document.createElement("a");
        a.href = m.src; a.target = "_blank"; a.rel = "noopener";
        a.textContent = (tt(m.label) || "Open") + " ↗";
        a.style.cssText = "display:block;padding:14px;color:var(--accent);font-family:var(--mono);font-size:12px;letter-spacing:0.06em;text-transform:uppercase;";
        wrap.append(a);
      }
      return wrap;
    };

    const openPopup = (place) => {
      popupCard.innerHTML = "";
      popupCard.append(closeBtn);

      const city = document.createElement("div");
      city.className = "places-popup__city";
      city.textContent = place.city;
      popupCard.append(city);

      const entriesWrap = document.createElement("div");
      entriesWrap.className = "places-popup__entries";

      (place.entries || []).forEach(entry => {
        const block = document.createElement("div");
        block.className = "places-entry";

        const dateStr = entry.date
          ? new Date(entry.date).toLocaleDateString(lang === "es" ? "es" : "en",
              { month: "short", year: "numeric" }).toUpperCase()
          : "";

        const meta = document.createElement("div");
        meta.className = "places-entry__meta";
        if (entry.tag) {
          const t = document.createElement("span");
          t.className = "places-entry__tag";
          t.textContent = tt(entry.tag);
          meta.append(t);
        }
        if (dateStr) {
          const d = document.createElement("span");
          d.textContent = dateStr;
          meta.append(d);
        }
        block.append(meta);

        const h = document.createElement("h3");
        h.textContent = tt(entry.title);
        block.append(h);

        const brief = document.createElement("p");
        brief.className = "places-entry__brief";
        brief.append(window.SITE_APP.renderInlineMd(tt(entry.brief)));
        block.append(brief);

        const mats = (entry.materials || []).filter(m => m && m.src);
        if (mats.length) {
          const btn = document.createElement("button");
          btn.className = "places-materials-btn";
          btn.textContent = (lang === "es" ? "Materiales" : "Materials") + " ↓";
          const matsWrap = document.createElement("div");
          matsWrap.className = "places-materials";
          matsWrap.hidden = true;
          mats.forEach(m => matsWrap.append(buildMaterial(m)));
          btn.onclick = () => {
            matsWrap.hidden = !matsWrap.hidden;
            btn.textContent = (lang === "es" ? "Materiales" : "Materials") + (matsWrap.hidden ? " ↓" : " ↑");
          };
          block.append(btn, matsWrap);
        }

        entriesWrap.append(block);
      });

      popupCard.append(entriesWrap);
      popup.classList.add("open");
    };

    // Pin click → open popup
    pins.addEventListener("click", e => {
      const dot = e.target.closest(".pin");
      if (!dot) return;
      const idx = +dot.dataset.idx;
      const place = D.places[idx];
      if (place) openPopup(place);
    });
    pins.addEventListener("keydown", e => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const dot = e.target.closest(".pin");
      if (!dot) return;
      e.preventDefault();
      const idx = +dot.dataset.idx;
      const place = D.places[idx];
      if (place) openPopup(place);
    });

    root.append(stage, popup);
  };

  window.renderPlaces = renderPlaces;
})();
