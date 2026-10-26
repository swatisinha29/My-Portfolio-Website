(function () {
  "use strict";

  var root = document.documentElement;
  var darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  /* ---------- theme toggle ---------- */
  function isDark() {
    var t = root.getAttribute("data-theme");
    return t ? t === "dark" : darkQuery.matches;
  }

  function initThemeToggle() {
    var btn = document.querySelector(".theme-toggle");
    if (!btn) return;
    function sync() {
      var label = isDark() ? "Switch to light theme" : "Switch to dark theme";
      btn.setAttribute("aria-label", label);
      btn.title = label;
    }
    btn.addEventListener("click", function () {
      var next = isDark() ? "light" : "dark";
      // Picking the theme the OS already uses clears the override.
      if ((next === "dark") === darkQuery.matches) {
        root.removeAttribute("data-theme");
        try { localStorage.removeItem("theme"); } catch (e) {}
      } else {
        root.setAttribute("data-theme", next);
        try { localStorage.setItem("theme", next); } catch (e) {}
      }
      sync();
    });
    darkQuery.addEventListener("change", sync);
    sync();
  }

  /* ---------- CV section tabs ---------- */
  function initCvNav() {
    var nav = document.querySelector(".cv-toc");
    if (!nav) return;
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var items = [];
    nav.querySelectorAll("a").forEach(function (link) {
      var id = (link.getAttribute("href") || "").slice(1);
      var el = document.getElementById(id);
      if (el) items.push({ link: link, el: el });
    });
    if (!items.length) return;

    function setCurrent(item) {
      items.forEach(function (it) {
        if (it === item) it.link.setAttribute("aria-current", "true");
        else it.link.removeAttribute("aria-current");
      });
    }

    function update() {
      var line = Math.min(160, window.innerHeight * 0.28);
      var active = items[0];
      items.forEach(function (it) {
        if (it.el.getBoundingClientRect().top <= line) active = it;
      });
      setCurrent(active);
    }

    var ticking = false;
    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () { ticking = false; update(); });
    }, { passive: true });
    window.addEventListener("resize", update);

    items.forEach(function (it) {
      it.link.addEventListener("click", function (e) {
        e.preventDefault();
        it.el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
        if (history.replaceState) history.replaceState(null, "", "#" + it.el.id);
        setCurrent(it);
      });
    });
    update();
  }

  /* ---------- contact card ---------- */
  function initContactCard() {
    var dlg = document.getElementById("contact-card");
    var open = document.querySelector("[data-contact-open]");
    if (!dlg || !open || typeof dlg.showModal !== "function") return; // falls back to mailto
    open.addEventListener("click", function (e) { e.preventDefault(); dlg.showModal(); });
    dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); }); // backdrop click
  }

  function init() { initThemeToggle(); initCvNav(); initContactCard(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
