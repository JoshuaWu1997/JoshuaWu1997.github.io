/* ==========================================================================
   Site Features: TOC, Back-to-top, Dark Mode, Publication Filter, Abstracts
   ========================================================================== */

(function() {
  'use strict';

  // --------------------------------------------------------------------------
  // Theme (Dark Mode)
  // --------------------------------------------------------------------------
  function initTheme() {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);


    var toggle = document.getElementById('theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', function() {
        var current = document.documentElement.getAttribute('data-theme');
        var next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
      });
    }
  }

  // --------------------------------------------------------------------------
  // Table of Contents - highlight active section
  // --------------------------------------------------------------------------
  function initTOC() {
    var tocLinks = document.querySelectorAll('.page-toc__link');
    var sections = [];

    tocLinks.forEach(function(link) {
      var href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        var id = href.slice(1);
        var section = document.getElementById(id);
        if (section) {
          sections.push({ id: id, link: link, element: section });
        }
      }
    });

    function updateActiveSection() {
      var scrollY = window.pageYOffset || document.documentElement.scrollTop;
      var headerOffset = 100;
      var activeId = null;

      for (var i = sections.length - 1; i >= 0; i--) {
        var s = sections[i];
        var top = s.element.getBoundingClientRect().top + scrollY - headerOffset;
        if (scrollY >= top - 10) {
          activeId = s.id;
          break;
        }
      }

      if (!activeId && sections.length > 0) {
        activeId = sections[0].id;
      }

      tocLinks.forEach(function(link) {
        var href = link.getAttribute('href');
        if (href === '#' + activeId) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }

    if (sections.length > 0) {
      updateActiveSection();
      window.addEventListener('scroll', function() {
        requestAnimationFrame(updateActiveSection);
      });
    }
  }

  // --------------------------------------------------------------------------
  // Back to Top
  // --------------------------------------------------------------------------
  function initBackToTop() {
    var btn = document.getElementById('back-to-top');
    if (!btn) return;

    var threshold = 400;

    function toggleVisibility() {
      if (window.pageYOffset > threshold) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }

    toggleVisibility();
    window.addEventListener('scroll', function() {
      requestAnimationFrame(toggleVisibility);
    });

    btn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --------------------------------------------------------------------------
  // Publication Filter
  // --------------------------------------------------------------------------
  function initPubFilter() {
    document.querySelectorAll('.pub-section').forEach(function(section) {
      var container = section.querySelector('.pub-filters');
      if (!container) return;

      var searchInput = container.querySelector('.pub-filters__search');
      var chips = container.querySelectorAll('.pub-filter-chip');
      var pubItems = section.querySelectorAll('.pub-item');

      function getItemText(item) {
        return (item.textContent || '').toLowerCase();
      }

      function filterPubs() {
        var query = (searchInput ? searchInput.value : '').toLowerCase().trim();
        var yearFilter = null;
        chips.forEach(function(chip) {
          if (chip.classList.contains('active') && chip.dataset.filter !== 'all') {
            yearFilter = chip.dataset.filter;
          }
        });

        pubItems.forEach(function(item) {
          var year = String(item.dataset.year || '');
          var venue = (item.dataset.venue || '').toLowerCase();
          var text = getItemText(item);

          var matchSearch = !query || text.indexOf(query) >= 0;
          var matchYear = !yearFilter || year === yearFilter;

          if (matchSearch && matchYear) {
            item.classList.remove('filtered-out');
          } else {
            item.classList.add('filtered-out');
          }
        });
      }

      if (searchInput) {
        searchInput.addEventListener('input', filterPubs);
        searchInput.addEventListener('keyup', filterPubs);
      }

      chips.forEach(function(chip) {
        chip.addEventListener('click', function() {
          var filter = chip.dataset.filter;
          if (filter === 'all') {
            chips.forEach(function(c) { c.classList.remove('active'); });
            chip.classList.add('active');
          } else {
            chips.forEach(function(c) {
              c.classList.toggle('active', c === chip);
            });
            var allChip = container.querySelector('[data-filter="all"]');
            if (allChip) allChip.classList.remove('active');
          }
          filterPubs();
        });
      });

      filterPubs();
    });
  }

  // --------------------------------------------------------------------------
  // Expandable Abstracts
  // --------------------------------------------------------------------------
  function initAbstracts() {
    document.querySelectorAll('.pub-abstract-toggle').forEach(function(toggle) {
      toggle.addEventListener('click', function(e) {
        e.preventDefault();
        var targetId = toggle.getAttribute('data-target');
        var target = targetId ? document.getElementById(targetId) : toggle.nextElementSibling;
        if (target) {
          target.classList.toggle('expanded');
          toggle.classList.toggle('expanded', target.classList.contains('expanded'));
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // Init on DOM ready
  // --------------------------------------------------------------------------
  function init() {
    initTheme();
    initTOC();
    initBackToTop();
    initPubFilter();
    initAbstracts();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
