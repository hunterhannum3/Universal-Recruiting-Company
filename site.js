(function () {
  'use strict';

  /* ── 0. Scroll progress bar ─────────────────────────────── */
  var bar = document.createElement('div');
  bar.id = 'scroll-progress';
  document.body.appendChild(bar);

  function updateProgress() {
    var scrolled = window.scrollY;
    var total    = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (total > 0 ? (scrolled / total) * 100 : 0) + '%';
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  /* ── 1. Nav shrink on scroll ─────────────────────────────── */
  var nav = document.querySelector('nav');
  if (nav) {
    function onScroll() {
      nav.classList.toggle('nav--scrolled', window.scrollY > 40);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── 2. Scroll-triggered reveal ──────────────────────────── */
  var revealSelector = [
    '.nav-card', '.role-card', '.job-card', '.team-card', '.location-card',
    '.feature-item', '.feature', '.process-step',
    '.intro-text > p', '.section-sub', '.section-title', '.section-eyebrow',
    '.intro-card', '.cta-band h2', '.cta-band p'
  ].join(',');

  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  setTimeout(function () {
    var vh = window.innerHeight;
    document.querySelectorAll(revealSelector).forEach(function (el) {
      if (el.getBoundingClientRect().top >= vh * 0.88) {
        el.classList.add('reveal');
        revealObserver.observe(el);
      }
    });

    // Stagger cards inside grids so they cascade in sequence
    ['.nav-cards-grid', '.roles-grid', '.jobs-list', '.team-grid', '.locations-grid', '.features-grid'].forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (grid) {
        Array.from(grid.children).filter(function (c) {
          return c.classList.contains('reveal');
        }).forEach(function (child, i) {
          child.style.transitionDelay = (i * 0.1) + 's';
        });
      });
    });
  }, 300);

  /* ── 4. Hamburger menu ───────────────────────────────────── */
  var hamburger = document.querySelector('.nav-hamburger');
  var navLinks  = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      var open = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', String(open));
    });
    navLinks.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('click', function (e) {
      if (!e.target.closest('nav')) {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── 5. Mobile dropdown toggles ─────────────────────────── */
  document.querySelectorAll('.has-dropdown > a').forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 1100) {
        e.preventDefault();
        e.stopPropagation();
        var li = link.parentElement;
        var wasOpen = li.classList.contains('mobile-open');
        document.querySelectorAll('.has-dropdown').forEach(function (el) {
          el.classList.remove('mobile-open');
        });
        if (!wasOpen) li.classList.add('mobile-open');
      }
    });
  });

  /* ── 6. Copyright year ───────────────────────────────────── */
  var yr = new Date().getFullYear();
  document.querySelectorAll('.copy-year').forEach(function (el) { el.textContent = yr; });

  /* ── 7. Back-to-top button ───────────────────────────────── */
  var btt = document.createElement('button');
  btt.id = 'back-to-top';
  btt.setAttribute('aria-label', 'Back to top');
  btt.innerHTML = '&#8679;';
  document.body.appendChild(btt);

  window.addEventListener('scroll', function () {
    btt.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btt.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ── 8. Typewriter on hero h1 ────────────────────────────── */
  var heroH1 = document.querySelector('.hero h1');
  if (heroH1) {
    var full = heroH1.innerText;
    heroH1.innerHTML = '';
    var i = 0;
    function type() {
      if (i < full.length) {
        var ch = full[i++];
        heroH1.innerHTML += (ch === '\n') ? '<br>' : ch;
        setTimeout(type, 60);
      }
    }
    setTimeout(type, 260);
  }

})();
