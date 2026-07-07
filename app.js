// ============================================================================
// app.js — tiny vanilla JS layer for the site.
// Handles: theme toggle, language toggle, content rendering from data.js,
//          scroll reveals, tweaks panel, mobile menu.
// No framework, no build step.
// ============================================================================

(function () {
  "use strict";

  const D = window.SITE_DATA;
  if (!D) {
    console.error("data.js not loaded, site has no content.");
    return;
  }

  // --- helpers -----------------------------------------------------------
  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const el = (tag, attrs = {}, children = []) => {
    const node = document.createElement(tag);
    for (const k in attrs) {
      if (k === "class") node.className = attrs[k];
      else if (k === "html") node.innerHTML = attrs[k];
      else if (k.startsWith("on") && typeof attrs[k] === "function") {
        node.addEventListener(k.slice(2).toLowerCase(), attrs[k]);
      } else if (attrs[k] != null && attrs[k] !== false) {
        node.setAttribute(k, attrs[k]);
      }
    }
    (Array.isArray(children) ? children : [children]).forEach(c => {
      if (c == null || c === false) return;
      node.append(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return node;
  };

  // Pick the {en, es} variant; falls through to plain strings
  const t = (val, lang) => {
    if (val == null) return "";
    if (typeof val === "string") return val;
    return val[lang] || val.en || "";
  };

  // Render very simple inline markdown — *italic*, [text](url).
  // Returns a DocumentFragment of mixed text/<em>/<a> nodes.
  const renderInlineMd = (text) => {
    const frag = document.createDocumentFragment();
    if (!text) return frag;
    const re = /\[([^\]]+)\]\(([^)]+)\)|\*([^*]+)\*/g;
    let last = 0, m;
    while ((m = re.exec(text))) {
      if (m.index > last) frag.append(text.slice(last, m.index));
      if (m[1]) {
        frag.append(el("a", { href: m[2], target: "_blank", rel: "noopener" }, m[1]));
      } else {
        frag.append(el("em", {}, m[3]));
      }
      last = m.index + m[0].length;
    }
    if (last < text.length) frag.append(text.slice(last));
    return frag;
  };

  // A muted looping clip that only downloads + plays while on screen.
  const inlineVideo = (src, poster, cls) => {
    const v = el("video", {
      class: cls || "", poster: poster || null,
      muted: "", loop: "", playsinline: "", preload: "none",
      "data-src": src, "data-inview": "",
    });
    v.muted = true; // attribute alone isn't enough in some browsers
    return v;
  };

  // --- LANGUAGE ----------------------------------------------------------
  const getLang = () => localStorage.getItem("lang") || (navigator.language || "en").slice(0, 2);
  let LANG = getLang() === "es" ? "es" : "en";

  const setLang = (lang) => {
    LANG = lang;
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-lang", lang);
    renderAll();
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
  };

  // --- THEME -------------------------------------------------------------
  const getStoredTheme = () => localStorage.getItem("theme");  // "light" | "dark" | null
  const systemPrefersDark = () =>
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

  const syncThemeColorMeta = () => {
    // Keep the browser-chrome colour in lockstep with the real background.
    // The browser picks the FIRST matching meta, so update the existing
    // media-scoped ones in place (appending a new meta would never win).
    requestAnimationFrame(() => {
      const bg = getComputedStyle(document.documentElement).getPropertyValue("--bg").trim();
      if (!bg) return;
      $$('meta[name="theme-color"]').forEach(m => m.setAttribute("content", bg));
    });
  };

  const applyTheme = (theme) => {
    if (theme === "light" || theme === "dark") {
      document.documentElement.setAttribute("data-theme", theme);
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    syncThemeColorMeta();
  };

  const currentTheme = () => {
    const stored = getStoredTheme();
    if (stored) return stored;
    return systemPrefersDark() ? "dark" : "light";
  };

  const toggleTheme = () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    localStorage.setItem("theme", next);
    applyTheme(next);
    document.dispatchEvent(new CustomEvent("themechange", { detail: { theme: next } }));
    renderNav();  // refresh toggle label
  };

  applyTheme(getStoredTheme());
  // Re-render if user changes system theme & has no override
  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
      if (!getStoredTheme()) {
        syncThemeColorMeta();
        document.dispatchEvent(new CustomEvent("themechange"));
      }
    });
  }

  // --- NAV ---------------------------------------------------------------
  const SUN_SVG  = '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"><circle cx="8" cy="8" r="3.2"/><path d="M8 1.2v1.8M8 13v1.8M1.2 8H3M13 8h1.8M3.2 3.2l1.3 1.3M11.5 11.5l1.3 1.3M12.8 3.2l-1.3 1.3M4.5 11.5l-1.3 1.3"/></svg>';
  const MOON_SVG = '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"><path d="M13.2 9.8A5.8 5.8 0 0 1 6.2 2.8a5.8 5.8 0 1 0 7 7z"/></svg>';

  const renderNav = () => {
    const slot = $("[data-nav]");
    if (!slot) return;
    const activeKey = slot.dataset.nav || "";
    const onDark = slot.hasAttribute("data-on-dark");
    const theme = currentTheme();

    slot.innerHTML = "";
    const nav = el("nav", { class: "nav" + (onDark ? " on-dark" : "") }, [
      el("button", {
        class: "nav__burger",
        "aria-label": "menu",
        onclick: () => slot.querySelector(".nav").classList.toggle("menu-open"),
      }, [
        // simple burger svg
        el("span", { html: '<svg viewBox="0 0 18 18"><path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" stroke-width="1.4" fill="none"/></svg>' }),
      ]),
      el("div", { class: "nav__brand" }, [
        el("a", { href: "index.html", class: "bare" }, D.profile.short),
        el("span", { class: "mono" }, "EAPS · Purdue"),
      ]),
      el("ul", { class: "nav__links" },
        D.nav.map(item => el("li", {}, [
          el("a", {
            href: item.href,
            class: item.key === activeKey ? "active" : "",
          }, t(item.label, LANG)),
        ]))
      ),
      el("div", { class: "nav__tools" }, [
        el("button", {
          class: "nav__btn",
          title: "Toggle theme",
          "aria-label": "Toggle theme",
          html: theme === "dark" ? SUN_SVG : MOON_SVG,
          onclick: toggleTheme,
        }),
        el("button", {
          class: "nav__btn",
          title: "Toggle language",
          onclick: () => setLang(LANG === "en" ? "es" : "en"),
        }, LANG === "en" ? "ES" : "EN"),
      ]),
    ]);
    slot.append(nav);
  };

  // --- FOOTER ------------------------------------------------------------
  const renderFooter = () => {
    const slot = $("[data-footer]");
    if (!slot) return;
    slot.innerHTML = "";

    const ctaText = t(D.footer.cta, LANG);
    const cta = el("h3", { class: "display" });
    cta.append(renderInlineMd(ctaText));

    const foot = el("footer", { class: "foot" }, [
      el("div", { class: "foot__grid" }, [
        el("div", {}, [
          el("div", { class: "section-label", style: "color: var(--on-ink-dim);" },
            LANG === "es" ? "· Contacto" : "· Get in touch"),
          cta,
          el("a", { class: "foot__email", href: `mailto:${D.profile.email}` }, D.profile.email),
        ]),
        el("div", { class: "foot__col" }, [
          el("h4", {}, LANG === "es" ? "Sitio" : "Site"),
          el("ul", {}, D.nav.map(n => el("li", {}, [
            el("a", { href: n.href }, t(n.label, LANG)),
          ]))),
        ]),
        el("div", { class: "foot__col" }, [
          el("h4", {}, LANG === "es" ? "En otro lugar" : "Elsewhere"),
          el("ul", {}, D.links.elsewhere.map(l => el("li", {}, [
            el("a", { href: l.href, target: "_blank", rel: "noopener" }, `${t(l.label, LANG)} ↗`),
          ]))),
        ]),
      ]),
      el("div", { class: "foot__bottom" }, [
        el("span", {}, `© ${new Date().getFullYear()} ${D.profile.name}`),
        el("span", {}, LANG === "es" ? "construido con cariño · y café" : "built with care · and coffee"),
      ]),
    ]);
    slot.append(foot);
  };

  // --- HOME: ABOUT -------------------------------------------------------
  const renderAbout = () => {
    const slot = $("[data-about]");
    if (!slot) return;
    slot.innerHTML = "";

    const portrait = el("div", { class: "about__portrait" }, [
      el("img", {
        src: D.profile.portrait, alt: D.profile.name,
        width: 720, height: 540, decoding: "async",
        onerror: (e) => e.currentTarget.style.display = "none",
      }),
      el("div", { class: "about__caption" }, t(D.profile.location, LANG)),
    ]);

    const facts = el("div", { class: "facts" },
      D.facts.map(f => el("div", { class: "fact" }, [
        el("div", { class: "fact__label" }, t(f.label, LANG)),
        el("div", { class: "fact__value" }, t(f.value, LANG)),
      ]))
    );

    const body = el("div", { class: "about__body" });
    D.about[LANG].forEach(p => {
      const para = el("p");
      para.append(renderInlineMd(p));
      body.append(para);
    });
    body.append(
      el("p", { class: "about__meta" }, [
        LANG === "es" ? "Asesor: " : "Advisor: ",
        el("a", { href: D.profile.advisor.url, target: "_blank", rel: "noopener" }, D.profile.advisor.name),
        " · ORCID ",
        el("a", { href: `https://orcid.org/${D.profile.orcid}`, target: "_blank", rel: "noopener" }, D.profile.orcid),
      ])
    );

    slot.append(
      el("div", { class: "section-label" },
        LANG === "es" ? "· Sobre mí" : "· About"),
      el("div", { class: "about" }, [
        el("div", {}, [portrait, facts]),
        body,
      ])
    );
  };

  // --- HOME: EVIDENCE BEAT -----------------------------------------------
  const renderEvidence = () => {
    const slot = $("[data-evidence]");
    if (!slot || !D.evidence) return;
    slot.innerHTML = "";
    const ev = D.evidence;

    const body = el("p", { class: "evidence__body" });
    body.append(renderInlineMd(t(ev.body, LANG)));

    slot.append(
      el("div", { class: "section-label" }, "· " + t(ev.label, LANG)),
      el("div", { class: "evidence reveal" }, [
        el("div", { class: "evidence__media" }, [
          inlineVideo(ev.media.src, ev.media.poster, "evidence__video"),
          el("div", { class: "evidence__caption mono" }, t(ev.media.caption, LANG)),
        ]),
        el("div", { class: "evidence__text" }, [
          el("h2", { class: "display" }, t(ev.title, LANG)),
          body,
          ev.cta ? el("a", { class: "btn", href: ev.cta.href }, t(ev.cta.label, LANG) + " →") : null,
        ]),
      ]),
    );
  };

  // --- HOME: NEWS TIMELINE ----------------------------------------------
  const renderNews = () => {
    const slot = $("[data-news]");
    if (!slot) return;
    slot.innerHTML = "";

    const rail = el("div", { class: "timeline__rail" });
    D.news.forEach(n => {
      const date = new Date(n.date);
      const dateStr = date.toLocaleDateString(LANG === "es" ? "es" : "en", { month: "short", year: "numeric", timeZone: "UTC" }).toUpperCase();
      const dateEl = el("div", { class: "t-entry__date" + (n.featured ? " featured" : "") }, dateStr);
      const body = el("div", { class: "t-entry__body reveal" });

      if (n.tag) body.append(el("div", { class: "t-entry__tag" }, t(n.tag, LANG)));
      body.append(el("h3", { class: "t-entry__title" }, t(n.title, LANG)));

      const desc = el("p", { class: "t-entry__desc" });
      desc.append(renderInlineMd(t(n.body, LANG)));
      body.append(desc);

      if (n.mediaSrc) {
        const isVideo = /\.(mp4|webm)$/i.test(n.mediaSrc);
        body.append(
          el("div", { class: "t-entry__media" }, [
            isVideo
              ? inlineVideo(n.mediaSrc, n.mediaPoster)
              : el("img", { src: n.mediaSrc, alt: t(n.mediaCaption, LANG) || "", loading: "lazy", decoding: "async" }),
            n.mediaCaption ? el("div", { class: "t-entry__media-cap" }, t(n.mediaCaption, LANG)) : null,
          ])
        );
      }
      if (n.link) {
        body.append(el("a", { class: "t-entry__link", href: n.link.url, target: "_blank", rel: "noopener" },
          `${t(n.link.label, LANG)} ↗`));
      }

      rail.append(dateEl, body);
    });

    slot.append(
      el("div", { class: "section-label" },
        LANG === "es" ? "· Bitácora" : "· Logbook"),
      el("h2", { class: "display" }, [
        ...(LANG === "es"
          ? [document.createTextNode("Lo más reciente: "), el("em", {}, "noticias, papers, momentos.")]
          : [document.createTextNode("Recently: "), el("em", {}, "news, papers, small moments.")]),
      ]),
      el("div", { class: "timeline" }, [rail]),
    );
  };

  // --- HOME: HERO LINES (video source is picked in initHeroVideo) ---------
  const renderHeroText = () => {
    const slot = $("[data-hero]");
    if (!slot) return;
    slot.innerHTML = "";

    const sub = el("p", { class: "hero__sub" });
    if (LANG === "es") {
      sub.append(
        "Investigando ",
        el("strong", {}, "ciclones tropicales, la ZCIT y los monzones"),
        ". Analizando por qué las tormentas tropicales se forman en el Pacífico Oriental, dónde tocan tierra, y qué hace que algunas temporadas sean catastróficas."
      );
    } else {
      sub.append(
        "Studying ",
        el("strong", {}, "tropical cyclones, the ITCZ, and monsoon systems"),
        ". Understanding why storms form in the Eastern and Central Pacific, what controls landfall variability, and what makes some seasons quietly tense and others catastrophic."
      );
    }

    slot.append(
      el("div", { class: "hero__eyebrow" }, t(D.profile.role, LANG)),
      el("h1", {}, [
        "Jose Alfredo",
        el("br"),
        el("em", {}, "Ocegueda Sanchez"),
      ]),
      sub,
    );
  };

  // --- RESEARCH PAGE -----------------------------------------------------
  const buildProjectMedia = (m) => {
    if (!m || !m.src) return null;
    const wrap = el("figure", { class: "project__fig" });
    if (m.kind === "video") {
      wrap.append(inlineVideo(m.src, m.poster, "project__video"));
    } else {
      wrap.append(el("img", {
        src: m.src, alt: t(m.caption, LANG) || "", loading: "lazy", decoding: "async",
      }));
    }
    if (m.caption) wrap.append(el("figcaption", { class: "mono" }, t(m.caption, LANG)));
    return wrap;
  };

  const renderResearch = () => {
    const slot = $("[data-research]");
    if (!slot) return;
    slot.innerHTML = "";

    const grid = el("div", { class: "projects" });
    D.research.forEach(p => {
      const desc = el("p", { class: "project__desc" });
      desc.append(renderInlineMd(t(p.body, LANG)));

      const main = el("div", { class: "project__main" }, [
        el("h3", {}, t(p.title, LANG)),
        el("div", { class: "project__tags" },
          p.tags.map(tg => el("span", { class: "project__tag" }, tg))),
        desc,
      ]);
      if (p.quote) {
        main.append(el("blockquote", { class: "project__quote" }, [
          el("p", {}, t(p.quote.text, LANG)),
          p.quote.cite ? el("cite", { class: "mono" }, p.quote.cite) : null,
        ]));
      }
      if (p.link) {
        main.append(el("a", {
          class: "t-entry__link", href: p.link.url, target: "_blank", rel: "noopener",
        }, `${t(p.link.label, LANG)} ↗`));
      }

      const mediaCol = el("div", { class: "project__media" });
      const fig1 = buildProjectMedia(p.media);
      const fig2 = buildProjectMedia(p.media2);
      if (fig1) mediaCol.append(fig1);
      if (fig2) mediaCol.append(fig2);

      grid.append(
        el("article", { class: "project reveal" + (fig1 ? "" : " project--textonly") }, [
          el("div", { class: "project__num" }, p.num),
          main,
          fig1 ? mediaCol : null,
        ])
      );
    });
    slot.append(grid);
  };

  const renderPublications = () => {
    const slot = $("[data-publications]");
    if (!slot) return;
    slot.innerHTML = "";

    slot.append(
      el("h2", { class: "display" }, [
        ...(LANG === "es"
          ? [document.createTextNode("Publicaciones "), el("em", {}, "/ catálogo.")]
          : [document.createTextNode("Publications "), el("em", {}, "/ catalogue.")]),
      ]),
      el("div", { class: "pubs" }, D.publications.map(p => {
        const main = el("div", { class: "pub__main" }, [
          t(p.title, LANG),
          " ",
          el("span", { class: "pub-venue" }, p.venue),
          ".",
          el("span", { class: "pub-authors" }, p.authors + (p.doi ? ` · doi: ${p.doi}` : "")),
        ]);
        return el("div", { class: "pub reveal" }, [
          el("div", { class: "pub__year" }, String(p.year)),
          el("div", { class: "pub__tag" }, t(p.tag, LANG)),
          main,
          p.url
            ? el("a", { class: "pub__link", href: p.url, target: "_blank", rel: "noopener" },
                (LANG === "es" ? "Leer" : "Read") + " ↗")
            : null,
        ]);
      })),
    );
  };

  // --- SCIENCE MAPS PAGE ---------------------------------------------------
  // Two in-page tab groups (TC Diagnostics / ERA5 Reanalysis), one full-width
  // embed block per app. Everything is built ONCE: a language toggle only
  // retouches the text, and switching tabs hides/shows panels via [hidden]
  // (re-inserting an iframe would reload the Streamlit app and wipe the
  // visitor's session). The embed URL carries the site's current theme; a
  // theme toggle reloads the embeds so they match (explicit user action,
  // worth the refresh). Apps flagged `pending: true` render a "coming
  // online" card instead of an iframe.
  const smEmbedSrc = (a) =>
    a.embedUrl + "&embed_options=" + (currentTheme() === "dark" ? "dark_theme" : "light_theme");

  const SM_TAB_KEY = "sm-tab";
  const smOpenLabel = () => (LANG === "es" ? "Abrir en pestaña nueva" : "Open in new tab") + " ↗";
  const smPendingLine = () => LANG === "es"
    ? "Próximamente: el archivo 1980–2022 se está calculando."
    : "Coming online: the 1980–2022 archive is being computed.";

  const smSetActiveTab = (key) => {
    const slot = $("[data-science-maps]");
    const tabsSlot = $("[data-sm-tabs]");
    if (!slot || !tabsSlot) return;
    $$(".sm-tabs__tab", tabsSlot).forEach(b => {
      const on = b.dataset.key === key;
      b.classList.toggle("active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
    $$(".sm-group", slot).forEach(p => {
      if (p.dataset.group === key) p.removeAttribute("hidden");
      else p.setAttribute("hidden", "");
    });
    try { sessionStorage.setItem(SM_TAB_KEY, key); } catch {}
  };

  const renderScienceMaps = () => {
    const slot = $("[data-science-maps]");
    const tabsSlot = $("[data-sm-tabs]");
    if (!slot || !tabsSlot) return;
    const SM = D.scienceMaps;

    // Page-hero intro comes from data.js so it's editable in one place.
    const introSlot = $("[data-science-maps-intro]");
    if (introSlot && SM.intro) introSlot.textContent = t(SM.intro, LANG);

    if (slot.dataset.built) {
      // Retouch translatable text only — never touch the iframes.
      SM.groups.forEach((g, gi) => {
        const tab = tabsSlot.children[gi];
        if (tab) tab.textContent = t(g.label, LANG);
        const panel = slot.children[gi];
        if (!panel) return;
        const gDesc = panel.querySelector(".sm-group__desc");
        if (gDesc) { gDesc.innerHTML = ""; gDesc.append(renderInlineMd(t(g.desc, LANG))); }
        g.apps.forEach((a, i) => {
          const block = panel.children[i + 1];  // children[0] is the group desc
          if (!block) return;
          if (a.pending) {
            block.querySelector(".sm-pending__title").textContent = t(a.title, LANG);
            block.querySelector(".sm-pending__desc").textContent = t(a.desc, LANG);
            block.querySelector(".sm-pending__status").textContent = smPendingLine();
            return;
          }
          block.querySelector(".era5-embed__title-txt").textContent = t(a.title, LANG);
          block.querySelector(".era5-embed__desc").textContent = t(a.desc, LANG);
          const open = block.querySelector(".era5-embed__actions .btn:not(.btn--ghost)");
          if (open) open.textContent = smOpenLabel();
          block.querySelector("iframe").title = t(a.title, LANG);
        });
      });
      return;
    }

    // Restore the tab the visitor was on (this session), default to the first.
    let activeKey = SM.groups[0].key;
    try {
      const stored = sessionStorage.getItem(SM_TAB_KEY);
      if (SM.groups.some(g => g.key === stored)) activeKey = stored;
    } catch {}

    tabsSlot.innerHTML = "";
    slot.innerHTML = "";
    SM.groups.forEach(g => {
      const active = g.key === activeKey;
      tabsSlot.append(el("button", {
        class: "sm-tabs__tab" + (active ? " active" : ""),
        type: "button",
        
        "data-key": g.key,
        "aria-pressed": active ? "true" : "false",
        onclick: () => smSetActiveTab(g.key),
      }, t(g.label, LANG)));

      const gDesc = el("p", { class: "sm-group__desc" });
      gDesc.append(renderInlineMd(t(g.desc, LANG)));
      const panel = el("div", {
        class: "sm-group",
        "data-group": g.key,
        hidden: active ? null : "",
      }, [gDesc]);

      g.apps.forEach((a, i) => {
        if (a.pending) {
          // Placeholder card — no iframe until the app is deployed.
          panel.append(el("article", { class: "sm-pending reveal" }, [
            el("h3", { class: "sm-pending__title" }, t(a.title, LANG)),
            el("p", { class: "sm-pending__desc" }, t(a.desc, LANG)),
            el("p", { class: "sm-pending__status" }, smPendingLine()),
            a.repo ? el("a", { class: "btn btn--ghost", href: a.repo, target: "_blank", rel: "noopener" },
              "GitHub ↗") : null,
          ]));
          return;
        }
        panel.append(el("article", { class: "era5-embed reveal" }, [
          el("header", { class: "era5-embed__head" }, [
            el("div", {}, [
              el("div", { class: "era5-embed__label" }, [
                el("span", { class: "num" }, String(i + 1).padStart(2, "0")),
                " ",
                el("span", { class: "era5-embed__title-txt" }, t(a.title, LANG)),
              ]),
              el("p", { class: "era5-embed__desc" }, t(a.desc, LANG)),
            ]),
            el("div", { class: "era5-embed__actions" }, [
              a.openUrl ? el("a", { class: "btn", href: a.openUrl, target: "_blank", rel: "noopener" },
                smOpenLabel()) : null,
              a.repo ? el("a", { class: "btn btn--ghost", href: a.repo, target: "_blank", rel: "noopener" },
                "GitHub ↗") : null,
            ]),
          ]),
          el("div", { class: "era5-embed__frame" }, [
            el("iframe", {
              src: smEmbedSrc(a),
              title: t(a.title, LANG),
              loading: "lazy",
              allow: "fullscreen",
              referrerpolicy: "no-referrer-when-downgrade",
            }),
          ]),
        ]));
      });
      slot.append(panel);
    });
    slot.dataset.built = "1";
  };

  // Theme toggle → reload embeds in the matching theme.
  document.addEventListener("themechange", () => {
    const slot = $("[data-science-maps]");
    if (!slot || !slot.dataset.built) return;
    D.scienceMaps.groups.forEach(g => {
      const panel = slot.querySelector(`.sm-group[data-group="${g.key}"]`);
      if (!panel) return;
      g.apps.forEach((a, i) => {
        if (a.pending) return;
        const block = panel.children[i + 1];  // children[0] is the group desc
        const iframe = block && block.querySelector("iframe");
        if (iframe) iframe.src = smEmbedSrc(a);
      });
    });
  });

  // --- CV PAGE -----------------------------------------------------------
  // Same build-once pattern: language toggles must not reload the PDF.
  const renderCv = () => {
    const slot = $("[data-cv]");
    if (!slot) return;

    const introSlot = $("[data-cv-intro]");
    if (introSlot && D.cv.intro) introSlot.textContent = t(D.cv.intro, LANG);

    const dl = LANG === "es" ? "Descargar PDF" : "Download PDF";
    const nt = LANG === "es" ? "Abrir en nueva pestaña" : "Open in new tab";
    if (slot.dataset.built) {
      const btns = slot.querySelectorAll(".cv-actions a");
      if (btns[0]) btns[0].textContent = dl;
      if (btns[1]) btns[1].textContent = nt;
      return;
    }

    slot.innerHTML = "";
    slot.append(
      el("div", { class: "cv-stage" }, [
        el("div", { class: "cv-actions" }, [
          el("a", { class: "btn", href: D.cv.pdf, download: "" }, dl),
          el("a", { class: "btn btn--ghost", href: D.cv.pdf, target: "_blank", rel: "noopener" }, nt),
        ]),
        el("div", { class: "cv-embed" }, [
          el("iframe", { src: D.cv.pdf + "#view=FitH", title: "CV PDF", loading: "lazy" }),
        ]),
      ])
    );
    slot.dataset.built = "1";
  };

  // --- SCROLL REVEALS ----------------------------------------------------
  let io = null;
  const wireReveals = () => {
    if (io) io.disconnect();
    if (!window.IntersectionObserver) {
      $$(".reveal").forEach(n => n.classList.add("in"));
      return;
    }
    io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.05 });
    $$(".reveal:not(.in)").forEach(n => io.observe(n));
  };

  // Inline videos: fetch + play only while on screen, pause when scrolled away.
  let vio = null;
  const wireInlineVideos = () => {
    if (vio) vio.disconnect();
    const vids = $$("video[data-inview]");
    if (!vids.length) return;
    if (!window.IntersectionObserver) {
      vids.forEach(v => { v.src = v.dataset.src; v.play().catch(() => {}); });
      return;
    }
    vio = new IntersectionObserver(entries => {
      entries.forEach(e => {
        const v = e.target;
        if (e.isIntersecting) {
          if (!v.src) v.src = v.dataset.src;
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      });
    }, { rootMargin: "120px 0px", threshold: 0.05 });
    vids.forEach(v => vio.observe(v));
  };

  // --- TWEAKS PANEL ------------------------------------------------------
  const TWEAKS_KEY = "tweaks-v2";
  const TWEAK_DEFAULTS = { accentHue: 38, otisSpeed: 1.0 };  // 38 ≈ true Jalisco terracotta
  let TWEAKS = (() => {
    try {
      const stored = JSON.parse(localStorage.getItem(TWEAKS_KEY) || "null");
      return { ...TWEAK_DEFAULTS, ...(stored || {}) };
    } catch { return { ...TWEAK_DEFAULTS }; }
  })();

  const applyTweaks = () => {
    document.documentElement.style.setProperty("--accent-h", TWEAKS.accentHue);
    const hero = $(".hero__video");
    if (hero) hero.playbackRate = TWEAKS.otisSpeed;
    document.dispatchEvent(new CustomEvent("tweakschange", { detail: { ...TWEAKS } }));
  };

  const renderTweaks = () => {
    const slot = $("[data-tweaks]");
    if (!slot) return;
    slot.innerHTML = "";

    const onHome = !!$(".hero__video");
    const rows = [
      el("div", { class: "tweaks__row" }, [
        el("div", { class: "tweaks__label" }, [
          LANG === "es" ? "Color de acento" : "Accent color",
          el("span", { class: "tweaks__swatch" }),
        ]),
        el("input", {
          type: "range", min: 0, max: 360, step: 1, value: TWEAKS.accentHue,
          oninput: (e) => { TWEAKS.accentHue = +e.target.value; applyTweaks(); saveTweaks(); },
        }),
      ]),
    ];
    if (onHome) {
      rows.push(el("div", { class: "tweaks__row" }, [
        el("div", { class: "tweaks__label" }, [
          LANG === "es" ? "Velocidad del loop de Otis" : "Otis loop speed",
          el("span", {}, `${TWEAKS.otisSpeed.toFixed(1)}×`),
        ]),
        el("input", {
          type: "range", min: 0.2, max: 3.0, step: 0.1, value: TWEAKS.otisSpeed,
          oninput: (e) => {
            TWEAKS.otisSpeed = +e.target.value;
            applyTweaks();
            saveTweaks();
            e.target.previousElementSibling.lastElementChild.textContent = `${TWEAKS.otisSpeed.toFixed(1)}×`;
          },
        }),
      ]));
    }

    const wrap = el("div", { class: "tweaks" }, [
      el("button", {
        class: "tweaks__toggle", "aria-label": "open tweaks panel",
        onclick: (e) => e.currentTarget.parentElement.classList.toggle("open"),
      }, "⚙"),
      el("div", { class: "tweaks__panel" }, rows),
    ]);

    slot.append(wrap);
  };

  const saveTweaks = () => {
    try { localStorage.setItem(TWEAKS_KEY, JSON.stringify(TWEAKS)); } catch {}
  };

  // --- HOME HERO ----------------------------------------------------------
  // Pick the right encode with JS: browsers don't reliably honour the `media`
  // attribute on <video><source>, so a plain <source> list would send the
  // 480p file to phones.
  const initHeroVideo = () => {
    const v = $(".hero__video");
    if (!v || v.src) return;
    const w = window.innerWidth || document.documentElement.clientWidth || 1024;
    v.src = w < 760 ? v.dataset.srcMobile : v.dataset.srcDesktop;
    v.playbackRate = TWEAKS.otisSpeed;
  };

  const renderHeroMeta = () => {
    const slot = $("[data-hero-meta]");
    if (!slot) return;
    slot.innerHTML = "";
    slot.append(
      el("span", {}, [
        el("span", { class: "live-dot" }),
        " GOES-18 · ABI Band 13 · Hurricane Otis",
      ]),
      el("span", {}, [
        "2023-10-24 → 25 · Cat 5 landfall, Acapulco · ",
        el("a", {
          href: "https://commons.wikimedia.org/wiki/Category:Hurricane_Otis",
          target: "_blank", rel: "noopener", class: "bare",
          title: "Source: CSU/CIRA & NOAA, public domain",
        }, "CSU/CIRA & NOAA"),
      ]),
    );
  };

  // --- ORCHESTRATE -------------------------------------------------------
  const renderAll = () => {
    renderNav();
    renderHeroText();
    renderHeroMeta();
    renderAbout();
    renderEvidence();
    renderNews();
    renderResearch();
    renderPublications();
    renderScienceMaps();
    renderCv();
    if (window.renderPlaces) window.renderPlaces(LANG);  // places page hooks in via places-map.js
    renderFooter();
    renderTweaks();
    wireReveals();
    wireInlineVideos();
  };

  const boot = () => {
    document.documentElement.setAttribute("data-lang", LANG);
    document.documentElement.lang = LANG;
    applyTweaks();
    initHeroVideo();
    renderAll();
    syncThemeColorMeta();
  };

  // Initial run after DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  // Export tiny API for places-map.js
  window.SITE_APP = { get lang() { return LANG; }, t, renderInlineMd, el, $, $$ };
})();
