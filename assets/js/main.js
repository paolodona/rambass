/* RAMBA S.S. — site interactions */

(function () {
  'use strict';

  // --- Sticky nav shadow on scroll ---
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // --- Mobile menu toggle ---
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    links.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Reveal on scroll ---
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    revealEls.forEach((el) => obs.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('visible'));
  }

  // --- Lightbox ---
  const lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    const lbImg = lightbox.querySelector('img');
    const lbCounter = lightbox.querySelector('.lightbox__counter');
    const lbClose = lightbox.querySelector('.lightbox__close');
    const lbPrev = lightbox.querySelector('.lightbox__prev');
    const lbNext = lightbox.querySelector('.lightbox__next');

    let currentList = [];
    let currentIndex = 0;

    const open = (list, idx) => {
      currentList = list;
      currentIndex = idx;
      show();
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    };
    const show = () => {
      const item = currentList[currentIndex];
      if (!item) return;
      lbImg.src = item.full;
      lbImg.alt = item.caption || '';
      if (lbCounter) lbCounter.textContent = (currentIndex + 1) + ' / ' + currentList.length;
    };
    const close = () => {
      lightbox.classList.remove('open');
      lbImg.src = '';
      document.body.style.overflow = '';
    };
    const next = () => {
      currentIndex = (currentIndex + 1) % currentList.length;
      show();
    };
    const prev = () => {
      currentIndex = (currentIndex - 1 + currentList.length) % currentList.length;
      show();
    };

    lbClose.addEventListener('click', close);
    lbPrev.addEventListener('click', prev);
    lbNext.addEventListener('click', next);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) close();
    });
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    });

    // Expose API
    window.RambaLightbox = { open };
  }

  // --- Gallery: build from data and wire up lightbox + filters ---
  const grid = document.querySelector('[data-gallery]');
  if (grid && window.GALLERY_DATA) {
    const events = window.GALLERY_DATA;

    const filterBar = document.querySelector('.gallery-events');
    const eventLabels = ['Tutti'].concat(events.map((e) => e.title));

    const renderFilters = () => {
      if (!filterBar) return;
      filterBar.innerHTML = eventLabels
        .map((l, i) => `<button data-filter="${i === 0 ? 'all' : events[i - 1].slug}"${i === 0 ? ' class="active"' : ''}>${l}</button>`)
        .join('');
      filterBar.querySelectorAll('button').forEach((b) => {
        b.addEventListener('click', () => {
          filterBar.querySelectorAll('button').forEach((x) => x.classList.remove('active'));
          b.classList.add('active');
          const f = b.dataset.filter;
          renderGrid(f);
        });
      });
    };

    let flatList = [];
    const renderGrid = (filter) => {
      const items = [];
      events.forEach((ev) => {
        if (filter !== 'all' && filter !== ev.slug) return;
        ev.images.forEach((im) => {
          items.push({
            full: ev.path + im + '/' + im + '.jpg',
            thumb: ev.path + im + '/mip.jpg',
            caption: ev.title,
            slug: ev.slug,
          });
        });
      });
      flatList = items;
      grid.innerHTML = items
        .map(
          (it, i) => `
        <figure data-i="${i}">
          <img loading="lazy" src="${it.thumb}" alt="${it.caption} — Ramba S.S.">
          <figcaption>${it.caption}</figcaption>
        </figure>`
        )
        .join('');
      grid.querySelectorAll('figure').forEach((fig) => {
        fig.addEventListener('click', () => {
          const i = parseInt(fig.dataset.i, 10);
          if (window.RambaLightbox) window.RambaLightbox.open(flatList, i);
        });
      });
    };

    renderFilters();
    renderGrid('all');
  }

  // --- Gallery preview on home (random small selection) ---
  const preview = document.querySelector('[data-gallery-preview]');
  if (preview && window.GALLERY_DATA) {
    const max = parseInt(preview.dataset.galleryPreview, 10) || 12;
    const all = [];
    window.GALLERY_DATA.forEach((ev) => {
      ev.images.forEach((im) => {
        all.push({
          full: ev.path + im + '/' + im + '.jpg',
          thumb: ev.path + im + '/mip.jpg',
          caption: ev.title,
        });
      });
    });
    // Shuffle deterministically per page-load
    for (let i = all.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [all[i], all[j]] = [all[j], all[i]];
    }
    const picks = all.slice(0, max);
    preview.innerHTML = picks
      .map(
        (it, i) => `
      <figure data-i="${i}">
        <img loading="lazy" src="${it.thumb}" alt="${it.caption} — Ramba S.S.">
        <figcaption>${it.caption}</figcaption>
      </figure>`
      )
      .join('');
    preview.querySelectorAll('figure').forEach((fig) => {
      fig.addEventListener('click', () => {
        const i = parseInt(fig.dataset.i, 10);
        if (window.RambaLightbox) window.RambaLightbox.open(picks, i);
      });
    });
  }
})();
