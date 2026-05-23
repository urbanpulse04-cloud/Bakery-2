/* ============================================================
   BLISSFUL BITEE — cake-page.js
   Hydrates a cake detail page from CAKE_DATA + window.CAKE_SLUG
   ============================================================ */

'use strict';

(function() {
  const slug = window.CAKE_SLUG;
  if (!slug) return;

  const cake = (window.getCake && window.getCake(slug)) || null;
  if (!cake) return;

  function $(s, ctx) { return (ctx || document).querySelector(s); }

  function setText(sel, val) {
    const el = $(sel);
    if (el) el.textContent = val;
  }

  function setHTML(sel, val) {
    const el = $(sel);
    if (el) el.innerHTML = val;
  }

  // Document title + meta
  document.title = `${cake.name} — Blissful Bitee`;
  const desc = $('meta[name="description"]');
  if (desc) desc.setAttribute('content', cake.short);

  // Breadcrumb
  setText('[data-cake-name]', cake.name);

  // Illustration
  if (window.getCakeSvg) {
    setHTML('[data-cake-illustration]', window.getCakeSvg(slug));
  }

  // Tags
  setHTML('[data-cake-tags]', cake.tags.map((t, i) =>
    `<span class="cake-tag-chip ${i === 0 ? 'best' : ''}">${t}</span>`
  ).join(''));

  setText('[data-cake-title]', cake.name);
  setText('[data-cake-price]', cake.price);
  setText('[data-cake-short]', cake.short);

  // Rating
  const ratingCount = cake.reviews ? cake.reviews.length : 5;
  setHTML('[data-cake-rating]',
    `<span class="cake-page-rating-stars">★ ★ ★ ★ ★</span> 5.0 · ${ratingCount} reviews`);

  // Sizes
  const sizes = (window.getRelevantSizes || (() => []))(cake.category);
  const sizesEl = $('[data-cake-sizes]');
  if (sizesEl) {
    sizesEl.innerHTML = sizes.map((s, i) => {
      const lb = (String(s).match(/(\d+(?:\.\d+)?)\s*lb/i) || [])[1];
      let priceLabel = '';
      if (lb && cake.priceRaw && /per lb/i.test(cake.unit)) {
        priceLabel = `<span class="chip-price">PKR ${Math.round(parseFloat(lb) * cake.priceRaw).toLocaleString()}</span>`;
      }
      return `<button class="chip ${i === 1 || (i === 0 && sizes.length === 1) ? 'active' : ''}" data-size="${s}">${s}${priceLabel}</button>`;
    }).join('');

    sizesEl.addEventListener('click', e => {
      const chip = e.target.closest('.chip');
      if (!chip) return;
      sizesEl.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
    });
  }

  // Quantity stepper
  const qtyVal = $('[data-qty-val]');
  const qtyMinus = $('[data-qty-minus]');
  const qtyPlus = $('[data-qty-plus]');
  function getQty() { return parseInt(qtyVal && qtyVal.textContent, 10) || 1; }
  function setQty(n) {
    n = Math.max(1, Math.min(99, n));
    if (qtyVal) qtyVal.textContent = n;
    if (qtyMinus) qtyMinus.disabled = n <= 1;
  }
  if (qtyMinus) qtyMinus.addEventListener('click', () => setQty(getQty() - 1));
  if (qtyPlus) qtyPlus.addEventListener('click', () => setQty(getQty() + 1));
  setQty(1);

  // Character count
  const msgInput = $('[data-message-input]');
  const msgCount = $('[data-message-count]');
  const MSG_MAX = 40;
  if (msgInput && msgCount) {
    msgInput.maxLength = MSG_MAX;
    msgInput.addEventListener('input', () => {
      msgCount.textContent = `${msgInput.value.length} / ${MSG_MAX}`;
    });
  }

  function getSelectedSize() {
    const el = $('[data-cake-sizes] .chip.active');
    return el ? el.dataset.size : '';
  }

  function buildCartItem() {
    const size = getSelectedSize();
    const qty = getQty();
    const message = msgInput ? msgInput.value.trim() : '';
    return {
      slug: cake.slug,
      name: cake.name,
      emoji: cake.emoji,
      size,
      qty,
      message,
      priceLabel: cake.price,
    };
  }

  // Add to cart
  const addBtn = $('[data-add-cart]');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      if (!window.Cart) return;
      const item = buildCartItem();
      window.Cart.add(item);
      window.showToast && window.showToast({
        title: `Added: ${item.name}`,
        msg: `${item.size} · qty ${item.qty}`,
        actionText: 'View Cart',
        actionHref: '../cart.html'
      });
    });
  }

  // Order on WhatsApp (single item direct)
  const waBtn = $('[data-order-wa]');
  if (waBtn) {
    waBtn.addEventListener('click', () => {
      const item = buildCartItem();
      const text = `Hello Blissful Bitee! 🎂 I want to order:\n\n• ${item.name}\n• Size: ${item.size}\n• Quantity: ${item.qty}${item.message ? `\n• Message on cake: "${item.message}"` : ''}\n• Estimated price: ${item.priceLabel}\n\nPlease confirm availability and advance payment details. Thank you!`;
      window.open(`https://wa.me/923286451657?text=${encodeURIComponent(text)}`, '_blank');
    });
  }

  // Long description
  setText('[data-cake-desc-body]', cake.desc);

  // Info card
  const infoCard = $('[data-cake-info]');
  if (infoCard) {
    infoCard.innerHTML = `
      <h4>Cake Details</h4>
      <div class="cake-info-row"><span class="cake-info-key">Sizes</span><span class="cake-info-val">${cake.sizes}</span></div>
      <div class="cake-info-row"><span class="cake-info-key">Notice</span><span class="cake-info-val">${cake.notice}</span></div>
      <div class="cake-info-row"><span class="cake-info-key">Best for</span><span class="cake-info-val">${cake.bestFor}</span></div>
      <div class="cake-info-row"><span class="cake-info-key">Serving</span><span class="cake-info-val">${cake.serving}</span></div>
      <div class="cake-info-row"><span class="cake-info-key">Storage</span><span class="cake-info-val">${cake.storage}</span></div>
      <div class="cake-info-row"><span class="cake-info-key">Allergens</span><span class="cake-info-val">${cake.allergens}</span></div>
      <div class="cake-info-row"><span class="cake-info-key">Pairings</span><span class="cake-info-val">${cake.pairings.join(', ')}</span></div>
    `;
  }

  // Story strip
  const storyEl = $('[data-story-strip]');
  if (storyEl) {
    storyEl.innerHTML = `
      <div class="story-card reveal" data-delay="0">
        <div class="story-card-icon">🌾</div>
        <h4>Ingredients</h4>
        <p>${cake.ingredients.join(' · ')}</p>
      </div>
      <div class="story-card reveal" data-delay="80">
        <div class="story-card-icon">⏱</div>
        <h4>Our Process</h4>
        <p>${cake.process}</p>
      </div>
      <div class="story-card reveal" data-delay="160">
        <div class="story-card-icon">🥂</div>
        <h4>Pairings</h4>
        <p>${cake.pairings.join(', ')}</p>
      </div>
    `;
  }

  // Occasions
  setHTML('[data-cake-occasions]', cake.occasions.map(o =>
    `<span class="occasion-pill">${o}</span>`
  ).join(''));

  // Reviews
  const reviewsEl = $('[data-cake-reviews]');
  if (reviewsEl) {
    reviewsEl.innerHTML = cake.reviews.map((r, i) => `
      <div class="cake-review-card reveal" data-delay="${i * 60}">
        ${r.occasion ? `<span class="review-occasion">${r.occasion}</span>` : ''}
        <p class="review-text">"${r.text}"</p>
        <div class="cake-review-meta">
          <span class="name">${r.name}</span><span class="location">· ${r.location}</span>
        </div>
      </div>
    `).join('');
  }

  // Related cakes
  const relatedEl = $('[data-related]');
  if (relatedEl && cake.related && window.CAKE_DATA) {
    relatedEl.innerHTML = cake.related.map(rs => {
      const c = window.CAKE_DATA.find(x => x.slug === rs);
      if (!c) return '';
      const svg = window.getCakeSvg ? window.getCakeSvg(c.slug) : '';
      return `
        <a class="related-card reveal" href="${c.slug}.html">
          <div class="related-img">${svg}</div>
          <div class="related-card-body">
            <div class="related-card-name">${c.name}</div>
            <div class="related-card-price">${c.price}</div>
          </div>
        </a>
      `;
    }).join('');
  }

  // FAQ
  const faqEl = $('[data-cake-faq]');
  if (faqEl) {
    faqEl.innerHTML = cake.faq.map(f => `
      <div class="faq-item">
        <button class="faq-q">${f.q}<span class="faq-icon">+</span></button>
        <div class="faq-a"><div class="faq-a-inner">${f.a}</div></div>
      </div>
    `).join('');
  }

  // Structured data (Product)
  const ld = document.createElement('script');
  ld.type = 'application/ld+json';
  ld.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: cake.name,
    description: cake.short,
    brand: { '@type': 'Brand', name: 'Blissful Bitee' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: cake.reviews.length,
    },
    offers: cake.priceRaw ? {
      '@type': 'Offer',
      priceCurrency: 'PKR',
      price: cake.priceRaw,
      availability: 'https://schema.org/InStock',
    } : undefined,
  });
  document.head.appendChild(ld);
})();
