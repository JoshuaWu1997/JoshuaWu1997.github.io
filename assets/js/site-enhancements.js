(function () {
  "use strict";

  /* ========================================================================
     Dark Mode
     ======================================================================== */

  var DARK_KEY = "dark-mode";
  var toggle = document.getElementById("dark-mode-toggle");

  function applyTheme(dark) {
    document.documentElement.classList.toggle("dark", dark);
    try { localStorage.setItem(DARK_KEY, dark ? "1" : "0"); } catch (e) {}
  }

  (function initTheme() {
    var stored = null;
    try { stored = localStorage.getItem(DARK_KEY); } catch (e) {}
    if (stored === "1") applyTheme(true);
    else if (stored === "0") applyTheme(false);
    else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) applyTheme(true);
  })();

  if (toggle) {
    toggle.addEventListener("click", function () {
      applyTheme(!document.documentElement.classList.contains("dark"));
    });
  }

  /* ========================================================================
     Back-to-Top
     ======================================================================== */

  var btn = document.getElementById("back-to-top");
  var SHOW_THRESHOLD = 400;

  function updateBackToTop() {
    if (!btn) return;
    btn.classList.toggle("visible", window.pageYOffset > SHOW_THRESHOLD);
  }

  if (btn) {
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ========================================================================
     Floating TOC — generated from <h1> inside .page__content
     ======================================================================== */

  var tocList = document.getElementById("toc-list");
  var tocNav = document.getElementById("floating-toc");
  var headings = [];
  var tocLinks = [];

  function buildTOC() {
    if (!tocList || !tocNav) return;
    var content = document.querySelector(".page__content");
    if (!content) return;

    var h1s = content.querySelectorAll("h1[id]");
    if (h1s.length < 2) { tocNav.style.display = "none"; return; }

    for (var i = 0; i < h1s.length; i++) {
      var h = h1s[i];
      headings.push(h);

      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = "#" + h.id;
      a.textContent = h.textContent.trim();
      a.setAttribute("data-index", i);
      a.addEventListener("click", function (e) {
        e.preventDefault();
        var target = document.getElementById(this.getAttribute("href").slice(1));
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      li.appendChild(a);
      tocList.appendChild(li);
      tocLinks.push(a);
    }
  }

  function updateTOC() {
    if (!headings.length) return;
    var scrollY = window.pageYOffset + 80;
    var active = 0;

    for (var i = headings.length - 1; i >= 0; i--) {
      if (headings[i].getBoundingClientRect().top + window.pageYOffset - 80 <= scrollY) {
        active = i;
        break;
      }
    }

    for (var j = 0; j < tocLinks.length; j++) {
      tocLinks[j].classList.toggle("active", j === active);
    }
  }

  buildTOC();

  /* ========================================================================
     Scroll handler (throttled)
     ======================================================================== */

  var ticking = false;

  window.addEventListener("scroll", function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        updateBackToTop();
        updateTOC();
        ticking = false;
      });
      ticking = true;
    }
  });

  updateBackToTop();
  updateTOC();
})();
