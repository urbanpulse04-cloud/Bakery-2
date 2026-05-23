/* ============================================================
   BLISSFUL BITEE — main.js
   ============================================================ */

'use strict';

function buildOrderMessage(data) {
  const msg = `Hello Blissful Bitee! 🎂 I want to place an order.

Name: ${data.name || '—'}
Product: ${data.product || '—'}
Flavor: ${data.flavor || '—'}
Size/Quantity: ${data.size || '—'}
Required Date: ${data.date || '—'}
Preferred Time: ${data.time || '—'}
Pickup/Delivery: ${data.delivery || '—'}
Occasion: ${data.occasion || '—'}
Design/Theme: ${data.design || '—'}

Please confirm availability and advance payment details. Thank you!`;
  return `https://wa.me/923286451657?text=${encodeURIComponent(msg)}`;
}

const WA_SVG = `<svg class="wa-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>`;

/* ── Modal helpers ──────────────────────────────────────────── */
let activeModal = null;

function openModal(el) {
  if (activeModal) closeModal(activeModal);
  el.classList.add('open');
  document.body.style.overflow = 'hidden';
  activeModal = el;
  el.addEventListener('click', overlayClose);
  document.addEventListener('keydown', escClose);
}

function closeModal(el) {
  if (!el) return;
  el.classList.remove('open');
  document.body.style.overflow = '';
  activeModal = null;
  el.removeEventListener('click', overlayClose);
  document.removeEventListener('keydown', escClose);
  setTimeout(() => el.remove(), 400);
}

function overlayClose(e) {
  if (e.target === activeModal) closeModal(activeModal);
}
function escClose(e) {
  if (e.key === 'Escape') closeModal(activeModal);
}

/* ── Cake Detail Modal ──────────────────────────────────────── */
function renderCakeModal(slug) {
  const cake = getCake(slug);
  if (!cake) return;

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal-panel" role="dialog" aria-modal="true" aria-label="${cake.name}">
      <button class="modal-close" aria-label="Close">✕</button>
      <div class="cake-modal-img skeleton" id="cake-img-wrap">
        <div class="img-fallback" style="background:${cake.gradient}" id="cake-img-fallback">${cake.emoji}</div>
        <img src="assets/images/cakes/${cake.slug}-whole.jpg" alt="${cake.name} whole"
          id="cake-img-main"
          loading="eager"
          onload="this.parentElement.classList.remove('skeleton');document.getElementById('cake-img-fallback').style.display='none'"
          onerror="this.style.display='none';this.parentElement.classList.remove('skeleton')">
        <div class="img-tabs">
          <button class="img-tab-btn active" data-img="whole">Whole</button>
          <button class="img-tab-btn" data-img="sliced">Sliced</button>
        </div>
      </div>
      <div class="cake-modal-body">
        <div class="cake-modal-tags">
          ${cake.tags.map(t => `<span class="cake-tag">${t}</span>`).join('')}
        </div>
        <h3 class="cake-modal-name">${cake.name}</h3>
        <p class="cake-modal-price">${cake.price}</p>
        <p class="cake-modal-desc">${cake.desc}</p>
        <div class="cake-meta">
          <div class="cake-meta-row"><span class="cake-meta-label">Sizes</span><span class="cake-meta-val">${cake.sizes}</span></div>
          <div class="cake-meta-row"><span class="cake-meta-label">Notice</span><span class="cake-meta-val">${cake.notice}</span></div>
          <div class="cake-meta-row"><span class="cake-meta-label">Best For</span><span class="cake-meta-val">${cake.bestFor}</span></div>
          <div class="cake-meta-row"><span class="cake-meta-label">Serving</span><span class="cake-meta-val">${cake.serving}</span></div>
        </div>
        <div class="modal-reviews">
          <h4>What customers say</h4>
          ${cake.reviews.map(r => `
            <div class="modal-review-item">
              <div class="modal-review-name">${r.name} ★★★★★</div>
              <div class="modal-review-text">"${r.text}"</div>
            </div>
          `).join('')}
          <p style="font-size:.72rem;color:var(--text-muted);margin-top:8px;font-style:italic">Sample reviews — real customer feedback coming soon</p>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-wa form-submit" data-open-order data-cake="${cake.name}" data-category="${cake.category}">
          ${WA_SVG} Customize &amp; Order on WhatsApp
        </button>
      </div>
    </div>`;

  document.body.appendChild(overlay);
  requestAnimationFrame(() => openModal(overlay));

  overlay.querySelector('.modal-close').addEventListener('click', () => closeModal(overlay));

  overlay.querySelectorAll('.img-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      overlay.querySelectorAll('.img-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const type = btn.dataset.img;
      const img = overlay.querySelector('#cake-img-main');
      const fallback = overlay.querySelector('#cake-img-fallback');
      overlay.querySelector('#cake-img-wrap').classList.add('skeleton');
      fallback.style.display = 'none';
      img.style.display = 'block';
      img.src = `assets/images/cakes/${cake.slug}-${type}.jpg`;
      img.onload = () => overlay.querySelector('#cake-img-wrap').classList.remove('skeleton');
      img.onerror = () => { img.style.display = 'none'; fallback.style.display = 'flex'; overlay.querySelector('#cake-img-wrap').classList.remove('skeleton'); };
    });
  });

  overlay.querySelector('[data-open-order]').addEventListener('click', (e) => {
    e.stopPropagation();
    closeModal(overlay);
    setTimeout(() => renderOrderModal(cake.name, cake.category), 420);
  });
}

/* ── Order Form Modal ───────────────────────────────────────── */
function renderOrderModal(preFillCake = '', preFillCat = '') {
  const sizes = getRelevantSizes(preFillCat);
  const flavours = ['Vanilla','Strawberry','Chocolate Cream','Caramel','Butterscotch','Coffee','Vanilla Pineapple','Red Velvet','Chocolate Fudge','Lotus','Three Milk Cake','Custom / Other'];
  const occasions = ['Birthday','Anniversary','Wedding','Eid','Baby Shower','Office Event','Gift','Other'];
  const today = new Date();
  const minRegular = new Date(today); minRegular.setDate(today.getDate() + 1);
  const minCustom = new Date(today); minCustom.setDate(today.getDate() + 3);
  const isCustom = preFillCat.toLowerCase().includes('custom');
  const minDate = (isCustom ? minCustom : minRegular).toISOString().split('T')[0];

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal-panel" role="dialog" aria-modal="true" aria-label="Place Order">
      <button class="modal-close" aria-label="Close">✕</button>
      <div class="order-modal-header">
        <h3>Place Your Order</h3>
        <p>Fill in your details — we'll open WhatsApp with your order ready to send.</p>
      </div>
      <form class="order-form" id="order-modal-form" novalidate>
        <div class="form-group">
          <label class="form-label">Your Name *</label>
          <input class="form-input" type="text" name="name" placeholder="Your full name" required>
          <span class="form-error">Please enter your name</span>
        </div>
        <div class="form-group">
          <label class="form-label">Product *</label>
          <input class="form-input" type="text" name="product" value="${preFillCake}" placeholder="e.g. Red Velvet Cake" required>
          <span class="form-error">Please enter a product</span>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Flavor *</label>
            <select class="form-select" name="flavor" required>
              <option value="">Select flavor</option>
              ${flavours.map(f => `<option value="${f}">${f}</option>`).join('')}
            </select>
            <span class="form-error">Please select a flavor</span>
          </div>
          <div class="form-group">
            <label class="form-label">Size / Quantity *</label>
            <select class="form-select" name="size" required>
              <option value="">Select size</option>
              ${sizes.map(s => `<option value="${s}">${s}</option>`).join('')}
            </select>
            <span class="form-error">Please select a size</span>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Required Date *</label>
            <input class="form-input" type="date" name="date" min="${minDate}" required>
            <span class="form-error">Please select a date</span>
            <span class="form-hint">${isCustom ? 'Minimum 3 days notice for custom cakes' : 'Minimum 1 day advance notice'}</span>
          </div>
          <div class="form-group">
            <label class="form-label">Occasion</label>
            <select class="form-select" name="occasion">
              <option value="">Select occasion</option>
              ${occasions.map(o => `<option value="${o}">${o}</option>`).join('')}
            </select>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Preferred Time *</label>
          <div class="form-radio-group">
            <label class="form-radio-label"><input type="radio" name="time" value="Morning (Before 12pm)"> Morning (Before 12pm)</label>
            <label class="form-radio-label"><input type="radio" name="time" value="Afternoon (12–5pm)" checked> Afternoon (12–5pm)</label>
            <label class="form-radio-label"><input type="radio" name="time" value="Evening (After 5pm)"> Evening (After 5pm)</label>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Pickup or Delivery *</label>
          <div class="form-radio-group">
            <label class="form-radio-label"><input type="radio" name="delivery" value="Pickup" checked> Pickup</label>
            <label class="form-radio-label"><input type="radio" name="delivery" value="Delivery"> Delivery</label>
          </div>
          <span class="form-hint">Delivery charges confirmed on WhatsApp</span>
        </div>
        <div class="form-group">
          <label class="form-label">Design / Theme Notes</label>
          <textarea class="form-textarea" name="design" placeholder="Any colour preferences, theme, photo message, design ideas..."></textarea>
        </div>
        <button type="submit" class="btn btn-wa form-submit">${WA_SVG} Send Order on WhatsApp</button>
      </form>
    </div>`;

  document.body.appendChild(overlay);
  requestAnimationFrame(() => openModal(overlay));

  overlay.querySelector('.modal-close').addEventListener('click', () => closeModal(overlay));

  overlay.querySelector('#order-modal-form').addEventListener('submit', function(e) {
    e.preventDefault();
    if (!validateForm(this)) return;
    const fd = new FormData(this);
    const data = Object.fromEntries(fd.entries());
    window.open(buildOrderMessage(data), '_blank');
  });
}

function validateForm(form) {
  let valid = true;
  form.querySelectorAll('[required]').forEach(field => {
    const err = field.parentElement.querySelector('.form-error');
    if (!field.value.trim()) {
      field.classList.add('error');
      if (err) err.classList.add('show');
      valid = false;
    } else {
      field.classList.remove('error');
      if (err) err.classList.remove('show');
    }
  });
  return valid;
}

/* ── Nav ────────────────────────────────────────────────────── */
function initNav() {
  const nav = document.querySelector('.nav');
  const hamburger = document.querySelector('.hamburger');
  const drawer = document.querySelector('.nav-drawer');
  const drawerOverlay = document.querySelector('.drawer-overlay');
  const navClose = document.querySelector('.nav-close');

  if (nav) {
    window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 40), { passive: true });
  }

  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add('open');
    drawerOverlay && drawerOverlay.classList.add('open');
    hamburger && hamburger.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('open');
    drawerOverlay && drawerOverlay.classList.remove('open');
    hamburger && hamburger.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger && hamburger.addEventListener('click', () => drawer && drawer.classList.contains('open') ? closeDrawer() : openDrawer());
  navClose && navClose.addEventListener('click', closeDrawer);
  drawerOverlay && drawerOverlay.addEventListener('click', closeDrawer);

  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-drawer a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === path || (path === '' && href === 'index.html') || (path === 'index.html' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

/* ── Page Load Animation ────────────────────────────────────── */
function initPageLoad() {
  document.body.style.opacity = '0';
  requestAnimationFrame(() => {
    document.body.style.transition = 'opacity .2s';
    document.body.style.opacity = '1';
  });

  const hero = document.querySelector('.hero-content');
  if (!hero) return;

  const anims = [
    { sel: '.hero .eyebrow', delay: 200, cls: 'reveal-left' },
    { sel: '.hero-h1 .word', delay: 300, stagger: 60 },
    { sel: '.hero-script', delay: 600 },
    { sel: '.hero-desc', delay: 800 },
    { sel: '.hero-btns', delay: 900 },
    { sel: '.trust-pill', delay: 1000, stagger: 80 },
    { sel: '.hero-circle', delay: 400, cls: 'reveal-scale' }
  ];

  anims.forEach(({ sel, delay, stagger, cls }) => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = cls === 'reveal-scale' ? 'scale(.85)' : 'translateY(20px)';
      el.style.transition = 'opacity .4s, transform .5s var(--spring)';
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = cls === 'reveal-scale' ? 'scale(1)' : 'translateY(0)';
      }, delay + (stagger || 0) * i);
    });
  });

  setTimeout(() => {
    document.querySelectorAll('.hero-badge').forEach(b => b.classList.add('visible'));
  }, 1200);
}

/* ── Scroll Reveal ──────────────────────────────────────────── */
function initScrollReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.dataset.delay || 0;
        setTimeout(() => el.classList.add('revealed'), +delay);
        io.unobserve(el);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -5% 0px' });

  document.querySelectorAll('.reveal, .reveal-scale, .reveal-left').forEach(el => io.observe(el));
}

/* ── Marquee pause ──────────────────────────────────────────── */
function initMarquee() {
  const track = document.querySelector('.marquee-track');
  if (!track) return;
  track.addEventListener('mouseenter', () => track.style.animationPlayState = 'paused');
  track.addEventListener('mouseleave', () => track.style.animationPlayState = 'running');
}

/* ── 3D Card Tilt ───────────────────────────────────────────── */
function initCardTilt() {
  if (!window.matchMedia('(pointer: fine)').matches) return;
  document.querySelectorAll('.cake-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      card.style.transform = `translateY(-8px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ── Modals delegation ──────────────────────────────────────── */
function initModals() {
  document.addEventListener('click', e => {
    const cakeEl = e.target.closest('[data-cake]');
    const orderEl = e.target.closest('[data-open-order]');

    if (cakeEl && !orderEl) {
      const slug = cakeEl.dataset.cake;
      if (slug) renderCakeModal(slug);
      return;
    }
    if (orderEl) {
      const cake = orderEl.dataset.cake || '';
      const cat = orderEl.dataset.category || '';
      renderOrderModal(cake, cat);
      return;
    }
  });

  addRipple('.btn');
}

function addRipple(sel) {
  document.querySelectorAll(sel).forEach(btn => {
    btn.addEventListener('click', function(e) {
      const r = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      const size = Math.max(r.width, r.height);
      ripple.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - r.left - size/2}px;top:${e.clientY - r.top - size/2}px`;
      this.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  });
}

/* ── Gallery ────────────────────────────────────────────────── */
function initGallery() {
  const filters = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.gallery-item');
  if (!filters.length) return;

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      items.forEach(item => {
        if (cat === 'all' || item.dataset.category === cat) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  const lbImg = lightbox.querySelector('.lightbox-img');
  const lbFallback = lightbox.querySelector('.lightbox-fallback');
  const lbClose = lightbox.querySelector('.lightbox-close');

  items.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const fallback = item.querySelector('.img-fallback');
      if (img && img.naturalWidth > 0) {
        lbImg.src = img.src;
        lbImg.style.display = 'block';
        lbFallback.style.display = 'none';
      } else {
        lbImg.style.display = 'none';
        lbFallback.style.display = 'block';
        lbFallback.textContent = fallback ? fallback.textContent : '🎂';
      }
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }
  lbClose && lbClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox(); });
}

/* ── Order Form (inline on order.html) ─────────────────────── */
function initOrderForm() {
  const form = document.getElementById('order-inline-form');
  if (!form) return;

  const sizeSelect = form.querySelector('[name="size"]');
  const catSelect = form.querySelector('[name="category"]');
  const dateInput = form.querySelector('[name="date"]');
  const dateHint = form.querySelector('.date-hint');

  function updateSizes() {
    const cat = catSelect ? catSelect.value : '';
    const sizes = getRelevantSizes(cat);
    sizeSelect.innerHTML = '<option value="">Select size</option>' + sizes.map(s => `<option>${s}</option>`).join('');
    const today = new Date();
    const isCustom = cat.toLowerCase().includes('custom');
    const min = new Date(today);
    min.setDate(today.getDate() + (isCustom ? 3 : 1));
    dateInput.min = min.toISOString().split('T')[0];
    if (dateHint) dateHint.textContent = isCustom ? 'Minimum 3 days for custom cakes' : 'Minimum 1 day advance notice';
  }

  if (catSelect) catSelect.addEventListener('change', updateSizes);
  updateSizes();

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (!validateForm(this)) return;
    const fd = new FormData(this);
    const data = Object.fromEntries(fd.entries());
    window.open(buildOrderMessage(data), '_blank');
  });
}

/* ── FAQ ────────────────────────────────────────────────────── */
function initFAQ() {
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* ── Counter numbers ────────────────────────────────────────── */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.count);
      const isFloat = el.dataset.count.includes('.');
      const duration = 1500;
      let start = null;
      function step(ts) {
        if (!start) start = ts;
        const progress = Math.min((ts - start) / duration, 1);
        const val = progress * target;
        el.textContent = isFloat ? val.toFixed(1) : Math.floor(val).toLocaleString();
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = isFloat ? target.toFixed(1) : target.toLocaleString();
      }
      requestAnimationFrame(step);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => io.observe(c));
}

/* ── Star fill on scroll ────────────────────────────────────── */
function initStars() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll('.star').forEach((s, i) => {
        setTimeout(() => s.classList.add('filled'), i * 150);
      });
      io.unobserve(entry.target);
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.review-stars').forEach(s => io.observe(s));
}

/* ── Step circles ───────────────────────────────────────────── */
function initStepConnector() {
  const steps = document.querySelectorAll('.step-circle');
  if (!steps.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('drawn');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  steps.forEach(s => io.observe(s));
}

/* ── Floating WA ────────────────────────────────────────────── */
function initFloatingWA() {
  const btn = document.getElementById('float-wa');
  const label = document.getElementById('float-wa-label');
  if (!btn) return;

  if (!sessionStorage.getItem('wa-label-shown') && label) {
    setTimeout(() => {
      label.classList.add('show');
      sessionStorage.setItem('wa-label-shown', '1');
      setTimeout(() => label.classList.remove('show'), 4000);
    }, 2000);
  }
}

/* ── Back to top ────────────────────────────────────────────── */
function initBackToTop() {
  const btn = document.getElementById('back-top');
  if (!btn) return;
  window.addEventListener('scroll', () => btn.classList.toggle('show', window.scrollY > 600), { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── Custom Cursor ──────────────────────────────────────────── */
function initCustomCursor() {
  if (!window.matchMedia('(pointer: fine)').matches) return;
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);

  let mx = -40, my = -40, cx = -40, cy = -40;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  function moveCursor() {
    cx += (mx - cx) * .12;
    cy += (my - cy) * .12;
    cursor.style.left = cx + 'px';
    cursor.style.top = cy + 'px';
    requestAnimationFrame(moveCursor);
  }
  moveCursor();

  document.querySelectorAll('.cake-card, .btn, .occasion-card, .custom-type-card, a').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('expanded'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('expanded'));
  });
}

/* ── Mobile CTA bar ─────────────────────────────────────────── */
function initMobileCTABar() {
  const bar = document.getElementById('mobile-cta-bar');
  if (!bar) return;
  window.addEventListener('scroll', () => bar.classList.toggle('show', window.scrollY > 180), { passive: true });
}

/* ── Parallax ───────────────────────────────────────────────── */
function initParallax() {
  const visual = document.querySelector('.hero-visual');
  if (!visual || !window.matchMedia('(min-width: 1025px)').matches) return;
  window.addEventListener('scroll', () => {
    visual.style.transform = `translateY(${window.scrollY * 0.4}px)`;
  }, { passive: true });
}

/* ── Scroll indicator hide ──────────────────────────────────── */
function initScrollIndicator() {
  const indicator = document.querySelector('.scroll-indicator');
  if (!indicator) return;
  window.addEventListener('scroll', () => indicator.classList.toggle('hidden', window.scrollY > 100), { passive: true });
}

/* ── Menu page search & tabs ────────────────────────────────── */
function initMenuTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const target = document.getElementById(tab.dataset.tab);
      if (target) target.classList.add('active');
    });
  });
}

function initMenuSearch() {
  const search = document.getElementById('menu-search');
  if (!search) return;

  search.addEventListener('input', () => {
    const q = search.value.trim().toLowerCase();
    document.querySelectorAll('.cake-card').forEach(card => {
      const name = (card.querySelector('.card-name') || card.querySelector('h3') || card).textContent.toLowerCase();
      card.style.display = name.includes(q) ? '' : 'none';
    });
  });
}

/* ── DOMContentLoaded ───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initPageLoad();
  initScrollReveal();
  initMarquee();
  initCardTilt();
  initModals();
  initGallery();
  initOrderForm();
  initFAQ();
  initCounters();
  initStars();
  initStepConnector();
  initFloatingWA();
  initBackToTop();
  initCustomCursor();
  initMobileCTABar();
  initParallax();
  initScrollIndicator();
  initMenuTabs();
  initMenuSearch();
});

/* ============================================================
   v2 — Cart badge, Toast, Page transitions
   ============================================================ */

// Toast host
function ensureToastHost() {
  let h = document.getElementById('toast-host');
  if (!h) {
    h = document.createElement('div');
    h.id = 'toast-host';
    h.className = 'toast-host';
    document.body.appendChild(h);
  }
  return h;
}

function showToast({ title, msg, icon = '🎂', actionText, actionHref }) {
  const host = ensureToastHost();
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = `
    <div class="toast-icon">${icon}</div>
    <div class="toast-body">
      <p class="toast-title">${title}</p>
      ${msg ? `<p class="toast-msg">${msg}</p>` : ''}
    </div>
    ${actionText ? `<a class="toast-action" href="${actionHref || '#'}">${actionText}</a>` : ''}
  `;
  host.appendChild(t);
  requestAnimationFrame(() => t.classList.add('show'));
  setTimeout(() => {
    t.classList.remove('show');
    setTimeout(() => t.remove(), 400);
  }, 3500);
}

window.showToast = showToast;

// Cart badge updates
function initCartBadge() {
  if (!window.Cart) return;
  const badges = document.querySelectorAll('[data-cart-badge]');
  if (!badges.length) return;

  function update() {
    const count = window.Cart.count();
    badges.forEach(b => {
      b.textContent = count > 99 ? '99+' : count;
      b.classList.toggle('has-items', count > 0);
    });
  }

  update();
  window.Cart.onChange(update);
  document.addEventListener('cart:storage-change', update);
}

// Page progress + soft transitions
function initPageProgress() {
  const bar = document.createElement('div');
  bar.className = 'page-progress';
  document.body.appendChild(bar);

  document.addEventListener('click', e => {
    const a = e.target.closest('a');
    if (!a) return;
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:') ||
        href.startsWith('tel:') || a.target === '_blank' || e.metaKey || e.ctrlKey || e.shiftKey) return;
    bar.classList.remove('done');
    bar.classList.add('go');
    document.body.classList.add('page-leaving');
  });

  window.addEventListener('pageshow', () => {
    bar.classList.add('done');
    document.body.classList.remove('page-leaving');
    setTimeout(() => bar.remove(), 600);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initCartBadge();
  initPageProgress();
});
