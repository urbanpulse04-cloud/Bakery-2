/* ============================================================
   BLISSFUL BITEE — cart.js
   localStorage-backed cart with pub/sub for badge updates
   ============================================================ */

'use strict';

const Cart = (() => {
  const KEY = 'bb-cart-v1';
  const listeners = new Set();

  function read() {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || [];
    } catch { return []; }
  }

  function write(items) {
    localStorage.setItem(KEY, JSON.stringify(items));
    listeners.forEach(fn => { try { fn(items); } catch (e) { console.error(e); } });
    return items;
  }

  function uid() {
    return 'i' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  }

  function parsePrice(priceStr, size) {
    if (!priceStr || /price on request/i.test(priceStr)) return null;
    const match = priceStr.match(/[\d,]+/);
    if (!match) return null;
    const base = parseInt(match[0].replace(/,/g, ''), 10);
    if (!size) return base;
    const lbMatch = String(size).match(/(\d+(?:\.\d+)?)\s*lb/i);
    if (lbMatch && /per lb/i.test(priceStr)) {
      return Math.round(base * parseFloat(lbMatch[1]));
    }
    const pcsMatch = String(size).match(/(\d+)\s*pcs/i);
    if (pcsMatch && /per box/i.test(priceStr)) {
      const n = parseInt(pcsMatch[1], 10);
      if (n === 6) return Math.round(base * 1.52);
      if (n === 4) return base;
    }
    return base;
  }

  return {
    items: read,

    count() {
      return read().reduce((s, i) => s + i.qty, 0);
    },

    subtotal() {
      return read().reduce((s, i) => s + (i.price || 0) * i.qty, 0);
    },

    add(item) {
      const items = read();
      const existing = items.find(i =>
        i.slug === item.slug && i.size === item.size && i.flavor === item.flavor && !item.message
      );
      if (existing && !item.message) {
        existing.qty += item.qty || 1;
      } else {
        items.push({
          id: uid(),
          slug: item.slug,
          name: item.name,
          emoji: item.emoji || '🎂',
          gradient: item.gradient || '',
          size: item.size || '',
          flavor: item.flavor || '',
          qty: item.qty || 1,
          message: item.message || '',
          dietary: item.dietary || [],
          notes: item.notes || '',
          priceLabel: item.priceLabel || '',
          price: item.price !== undefined ? item.price : parsePrice(item.priceLabel, item.size),
        });
      }
      return write(items);
    },

    remove(id) {
      return write(read().filter(i => i.id !== id));
    },

    update(id, patch) {
      const items = read().map(i => i.id === id ? { ...i, ...patch } : i);
      return write(items);
    },

    setQty(id, qty) {
      qty = Math.max(0, qty | 0);
      if (qty === 0) return this.remove(id);
      return this.update(id, { qty });
    },

    clear() {
      return write([]);
    },

    onChange(fn) {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },

    parsePrice,
  };
})();

window.addEventListener('storage', e => {
  if (e.key === 'bb-cart-v1') {
    document.dispatchEvent(new CustomEvent('cart:storage-change'));
  }
});

window.Cart = Cart;
