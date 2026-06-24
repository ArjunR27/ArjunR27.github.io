/* ===========================================================
   main.js — nav state, footer year, project rendering,
             lightbox, scroll reveal
   =========================================================== */

(function () {
  "use strict";

  /* ---- footer year ---- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- nav active state ---- */
  const page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  const navKey = page.startsWith("projects") ? "projects"
               : page.startsWith("about")    ? "about"
               : "home";
  document.querySelectorAll(".nav__links a[data-nav]").forEach((a) => {
    if (a.dataset.nav === navKey) a.classList.add("active");
  });

  /* ---- render projects (projects.html only) ---- */
  const mount = document.getElementById("projects");
  if (mount && typeof PROJECTS !== "undefined") {
    mount.innerHTML = PROJECTS.map(renderProject).join("");
  }

  function renderProject(p) {
    const tags = (p.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("");
    const links = (p.links || [])
      .map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`)
      .join("");
    return `
      <article class="project reveal">
        <div class="project__body">
          <div class="project__head">
            <h2 class="project__title">${esc(p.title)}</h2>
            <span class="project__date">${esc(p.date || "")}</span>
          </div>
          <p class="project__desc">${esc(p.desc || "")}</p>
          <div class="tags">${tags}</div>
          <div class="project__links">${links}</div>
        </div>
        ${renderMedia(p)}
      </article>`;
  }

  function renderMedia(p) {
    if (p.video) {
      return `<div class="media">
        <video controls preload="metadata" playsinline>
          <source src="${esc(p.video)}" type="video/mp4" />
        </video></div>`;
    }
    if (p.shots && p.shots.length) {
      const imgs = p.shots
        .map((s) => `<img src="${esc(s)}" alt="${esc(p.title)} screenshot" loading="lazy" data-zoom />`)
        .join("");
      return `<div class="media"><div class="media__gallery">${imgs}</div></div>`;
    }
    return `<div class="media"><div class="media__empty">demo coming soon — drop media into assets/projects/${esc(p.folder)}/</div></div>`;
  }

  /* ---- lightbox (screenshot enlarge) ---- */
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    const lbImg = lightbox.querySelector("img");
    document.addEventListener("click", (e) => {
      const t = e.target;
      if (t.matches && t.matches("img[data-zoom]")) {
        lbImg.src = t.src;
        lightbox.classList.add("open");
      } else if (lightbox.classList.contains("open")) {
        lightbox.classList.remove("open");
        lbImg.src = "";
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lightbox.classList.contains("open")) {
        lightbox.classList.remove("open");
        lbImg.src = "";
      }
    });
  }

  /* ---- scroll reveal ---- */
  const reveals = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    reveals.forEach((el) => el.classList.add("in"));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach((el) => io.observe(el));
  }

  /* ---- util ---- */
  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
})();
