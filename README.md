# Blissful Bitee — Bakery Website

A modern, responsive bakery website with a shopping cart, product detail pages, and comprehensive checkout flow.

## ⚡ Quick Start

### Option 1: Node.js (Recommended)

```bash
# In the project directory, run:
node server.js

# Then open http://localhost:8000 in your browser
```

### Option 2: Python

```bash
# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000

# Then open http://localhost:8000 in your browser
```

### Option 3: Using `npx` (No setup needed)

```bash
# If you have Node.js installed:
npx http-server

# Then open the URL shown in the terminal (usually http://localhost:8080)
```

## ⚠️ Important: Don't Open `index.html` Directly

**This will NOT work:**
- ❌ Double-clicking `index.html` from your file explorer
- ❌ Using `file:///path/to/index.html` in your browser

Browsers block asset loading (CSS, JavaScript, cart data) when using the `file://` protocol. You **must** use a local HTTP server.

## 📁 Project Structure

```
Blissful Bitee/
├── index.html              # Homepage
├── menu.html               # Menu & product grid
├── cakes/                  # Individual product pages
│   ├── red-velvet.html
│   ├── chocolate-fudge.html
│   └── ... (12 more cakes)
├── cart.html               # Shopping cart
├── checkout.html           # Order form
├── about.html              # Brand story
├── gallery.html            # Photo gallery
├── reviews.html            # Customer reviews
├── custom-cakes.html       # Custom orders
├── thank-you.html          # Order confirmation
├── 404.html                # Not found page
├── assets/
│   ├── css/style.css       # All styles
│   └── js/
│       ├── main.js         # Page logic
│       ├── cart.js         # Shopping cart system
│       ├── cake-data.js    # Product data & reviews
│       └── cake-illustrations.js  # SVG illustrations
├── server.js               # Local development server
└── README.md               # This file
```

## 🛒 Features

- **Shopping Cart** — Add multiple items with size/quantity selection
- **Message on Cake** — Personalize each cake with custom text
- **Cake Detail Pages** — Dedicated page for each product with full story
- **Comprehensive Checkout** — Collect delivery address, timing, dietary info
- **Responsive Design** — Works on mobile (375px) and desktop (1280px+)
- **LocalStorage Cart** — Cart persists across browser sessions
- **Smooth Animations** — GPU-accelerated transitions and reveals
- **14 Cake Varieties** — Each with unique reviews and pairings

## 🎨 Design

The site uses a custom CSS design system with:
- Elegant typography (Cormorant Garamond + system fonts)
- Soft color palette (rose, cream, gold, brown)
- Smooth cubic-bezier easing curves
- Responsive grid layouts
- Touch-friendly interface on mobile

## 🚀 Usage

1. **Browse Cakes** — Start at homepage or `/menu.html`
2. **View Details** — Click any cake card to see full product page
3. **Add to Cart** — Select size, quantity, and add message
4. **View Cart** — Check `/cart.html` to review items
5. **Checkout** — Go to `/checkout.html` and fill order form
6. **Send Order** — Click "Send Order on WhatsApp" to complete

## 🔄 Cart System

The cart is powered by LocalStorage and includes:

```javascript
// JavaScript API (in console or scripts)
Cart.add(slug, size, quantity, message)    // Add item
Cart.items()                                // Get all items
Cart.count()                                // Total items
Cart.subtotal()                             // Total price (PKR)
Cart.remove(itemId)                         // Remove item
Cart.clear()                                // Empty cart
```

The cart badge in the navbar updates automatically.

## 📱 Mobile & Desktop

- **Mobile** (375px width) — Full-height hero, stacked layout, large touch targets
- **Tablet** (768px width) — Two-column grids, optimized spacing
- **Desktop** (1280px+) — Three-column product grids, side-by-side layouts

## 🌐 Browser Support

Works on all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## 📞 Contact Integration

- **WhatsApp Button** — Floating button opens WhatsApp chat with bakery
- **Email Link** — Footer has contact email
- **Phone Number** — Displayed with WhatsApp link

## 🔧 Development

### Running Tests

Take screenshots of all pages:
```bash
npx playwright install
npx playwright test
```

### Customizing Data

Edit `/assets/js/cake-data.js` to update:
- Cake names, descriptions, prices
- Cake reviews and ratings
- Ingredients and pairings
- FAQ entries

### Updating Styles

Edit `/assets/css/style.css` to change:
- Colors (via CSS variables at top)
- Typography sizes
- Spacing/layout
- Animations and transitions

## 📄 License

Created for Blissful Bitee bakery. All rights reserved.

---

**Questions?** Open the browser console (F12) to check for any errors.
