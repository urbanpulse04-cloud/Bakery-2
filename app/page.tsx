"use client";

import { useState } from "react";

const menuItems = [
  {
    category: "Breads",
    items: [
      { name: "Country Sourdough", price: "$9", desc: "72-hour ferment, crispy crust, open crumb" },
      { name: "Seeded Rye", price: "$8", desc: "Dark rye with caraway, sunflower & sesame" },
      { name: "Honey Oat Loaf", price: "$7", desc: "Soft crumb with rolled oats and local honey" },
      { name: "Focaccia", price: "$6", desc: "Rosemary, flaky salt, extra-virgin olive oil" },
    ],
  },
  {
    category: "Pastries",
    items: [
      { name: "Butter Croissant", price: "$4", desc: "72 layers of French butter and laminated dough" },
      { name: "Almond Danish", price: "$5", desc: "Frangipane fill, toasted almond, icing sugar" },
      { name: "Kouign-Amann", price: "$5", desc: "Caramelised, flaky, slightly salty Breton cake" },
      { name: "Pain au Chocolat", price: "$4.50", desc: "Double Valrhona dark chocolate batons" },
    ],
  },
  {
    category: "Sweets",
    items: [
      { name: "Cardamom Knot", price: "$3.50", desc: "Swedish-style, pearl sugar, orange zest" },
      { name: "Lemon Tart", price: "$6", desc: "Silky curd in a buttery pâte sucrée shell" },
      { name: "Brownie", price: "$4", desc: "Fudgy centre, sea-salt flake finish" },
      { name: "Seasonal Galette", price: "$7", desc: "Rotating filling; ask at the counter today" },
    ],
  },
];

const hours = [
  { day: "Monday – Friday", time: "7 am – 6 pm" },
  { day: "Saturday", time: "7 am – 4 pm" },
  { day: "Sunday", time: "8 am – 2 pm" },
];

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="min-h-screen font-serif">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-light-brown/20">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-warm-brown text-xl font-bold tracking-wide">Flour & Stone</span>
          <div className="hidden md:flex gap-8 text-sm text-dark-brown/70">
            <a href="#menu" className="hover:text-warm-brown transition-colors">Menu</a>
            <a href="#about" className="hover:text-warm-brown transition-colors">About</a>
            <a href="#visit" className="hover:text-warm-brown transition-colors">Visit</a>
            <a href="#contact" className="hover:text-warm-brown transition-colors">Contact</a>
          </div>
          <a
            href="#contact"
            className="bg-warm-brown text-cream text-sm px-4 py-2 rounded-full hover:bg-dark-brown transition-colors"
          >
            Order Now
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-16 min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#fdf6ec] via-[#f5e6cc] to-[#ecdbb5]">
        <div
          aria-hidden
          className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_50%,#6b3f1f_0%,transparent_60%)]"
        />
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-light-brown text-sm uppercase tracking-[0.2em] mb-4">Est. 2018 · Small-Batch Bakery</p>
            <h1 className="text-5xl md:text-7xl font-bold text-dark-brown leading-tight mb-6">
              Baked with<br />
              <span className="text-warm-brown">patience.</span>
            </h1>
            <p className="text-dark-brown/70 text-lg leading-relaxed mb-8 max-w-md">
              Every loaf slow-fermented, every pastry hand-laminated. We open at 7 am and sell out by noon — come early.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#menu"
                className="bg-warm-brown text-cream px-7 py-3 rounded-full text-sm font-semibold hover:bg-dark-brown transition-colors"
              >
                See the Menu
              </a>
              <a
                href="#about"
                className="border border-warm-brown text-warm-brown px-7 py-3 rounded-full text-sm font-semibold hover:bg-warm-brown hover:text-cream transition-colors"
              >
                Our Story
              </a>
            </div>
          </div>

          {/* Illustrated bread card stack */}
          <div className="relative hidden md:flex justify-center items-center h-96">
            <div className="absolute w-72 h-72 rounded-3xl bg-[#e8c98a] rotate-6 shadow-xl" />
            <div className="absolute w-72 h-72 rounded-3xl bg-[#d4a45a] -rotate-3 shadow-xl" />
            <div className="relative w-72 h-72 rounded-3xl bg-gradient-to-br from-[#c9956b] to-[#6b3f1f] shadow-2xl flex flex-col items-center justify-center text-cream p-8">
              <div className="text-7xl mb-4">🍞</div>
              <p className="text-lg font-bold">Today's Special</p>
              <p className="text-sm opacity-80 text-center mt-1">Walnut & Fig Sourdough</p>
              <p className="text-2xl font-bold mt-3">$11</p>
              <p className="text-xs opacity-60 mt-1">Limited — 12 loaves</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-warm-brown/50 animate-bounce">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* BANNER */}
      <div className="bg-warm-brown text-cream py-4 overflow-hidden">
        <div className="flex gap-16 animate-[scroll_20s_linear_infinite] whitespace-nowrap">
          {["Fresh Sourdough Daily", "Hand-Laminated Croissants", "100% Organic Flour", "Baked from 4 am", "Small Batches Only"].map((t) => (
            <span key={t} className="text-sm uppercase tracking-widest flex items-center gap-4">
              {t} <span className="text-light-brown">✦</span>
            </span>
          ))}
          {["Fresh Sourdough Daily", "Hand-Laminated Croissants", "100% Organic Flour", "Baked from 4 am", "Small Batches Only"].map((t) => (
            <span key={t + "2"} className="text-sm uppercase tracking-widest flex items-center gap-4">
              {t} <span className="text-light-brown">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* MENU */}
      <section id="menu" className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-light-brown text-sm uppercase tracking-[0.2em] mb-3">What we make</p>
          <h2 className="text-4xl font-bold text-dark-brown">The Menu</h2>
          <p className="text-dark-brown/60 mt-3 max-w-sm mx-auto">Everything made on-site, from scratch, every morning.</p>
        </div>

        <div className="space-y-16">
          {menuItems.map((section) => (
            <div key={section.category}>
              <h3 className="text-warm-brown text-xs uppercase tracking-[0.3em] mb-6 pb-2 border-b border-light-brown/30">
                {section.category}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between items-start p-5 rounded-2xl bg-white/60 hover:bg-white/90 transition-colors border border-light-brown/10 hover:border-light-brown/30 group"
                  >
                    <div>
                      <p className="font-semibold text-dark-brown group-hover:text-warm-brown transition-colors">{item.name}</p>
                      <p className="text-sm text-dark-brown/50 mt-0.5">{item.desc}</p>
                    </div>
                    <span className="text-warm-brown font-bold ml-4 flex-shrink-0">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-dark-brown/40 text-sm mt-12">Menu rotates seasonally. Gluten-free options available — ask us.</p>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-warm-brown text-cream py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-light-brown text-sm uppercase tracking-[0.2em] mb-4">Our story</p>
            <h2 className="text-4xl font-bold mb-6 leading-tight">We wake up at 4 am<br />so you don't have to.</h2>
            <div className="space-y-4 text-cream/80 leading-relaxed">
              <p>
                Flour & Stone started as a single sourdough starter and a rented kitchen. Seven years later, same starter, same kitchen — just more loaves, more croissants, and a lot more calluses.
              </p>
              <p>
                We use organic, stone-milled flour sourced within 200 miles. Our sourdoughs ferment for a minimum of 48 hours. Our butter croissants take three days to laminate properly. We don't rush things.
              </p>
              <p>
                The result is bread that tastes like bread — dense where it should be dense, airy where it should be airy, with a crust that sings when you cut it.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { emoji: "🌾", label: "Organic flour", sub: "Stone-milled, local" },
              { emoji: "⏱", label: "48–72 hr ferment", sub: "No shortcuts" },
              { emoji: "🧈", label: "French butter", sub: "84% fat croissants" },
              { emoji: "🔥", label: "Wood-fired oven", sub: "550°F deck heat" },
            ].map((f) => (
              <div key={f.label} className="bg-dark-brown/30 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-3">{f.emoji}</div>
                <p className="font-semibold">{f.label}</p>
                <p className="text-cream/50 text-sm mt-1">{f.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-light-brown text-sm uppercase tracking-[0.2em] mb-3">Come find us</p>
          <h2 className="text-4xl font-bold text-dark-brown">Visit the Bakery</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-warm-brown text-xs uppercase tracking-[0.2em] mb-4">Hours</h3>
              <div className="space-y-2">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between py-2 border-b border-light-brown/20">
                    <span className="text-dark-brown/70">{h.day}</span>
                    <span className="font-semibold text-dark-brown">{h.time}</span>
                  </div>
                ))}
              </div>
              <p className="text-dark-brown/40 text-sm mt-3">We often sell out by mid-morning. Follow us on Instagram for daily stock updates.</p>
            </div>

            <div>
              <h3 className="text-warm-brown text-xs uppercase tracking-[0.2em] mb-4">Address</h3>
              <p className="text-dark-brown/70 leading-relaxed">
                42 Miller's Lane<br />
                Brooklyn, NY 11201<br />
                <br />
                Nearest subway: F/G at Bergen St.<br />
                Street parking available on weekdays.
              </p>
            </div>
          </div>

          {/* Stylised map placeholder */}
          <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#e8c98a] to-[#c9956b] h-72 flex items-center justify-center text-warm-brown relative">
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-20">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="border border-dark-brown/30" />
              ))}
            </div>
            <div className="relative text-center">
              <div className="text-4xl mb-2">📍</div>
              <p className="font-bold text-dark-brown">42 Miller's Lane</p>
              <p className="text-dark-brown/60 text-sm">Brooklyn, NY</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#f5e6cc] py-24">
        <div className="max-w-xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-light-brown text-sm uppercase tracking-[0.2em] mb-3">Get in touch</p>
            <h2 className="text-4xl font-bold text-dark-brown">Order or Ask Us Anything</h2>
            <p className="text-dark-brown/60 mt-3 text-sm">Wholesale enquiries, custom cakes, event catering — we'd love to hear from you.</p>
          </div>

          {sent ? (
            <div className="bg-white/80 rounded-3xl p-10 text-center shadow-sm">
              <div className="text-5xl mb-4">🥐</div>
              <h3 className="text-2xl font-bold text-dark-brown mb-2">Message received!</h3>
              <p className="text-dark-brown/60">We'll get back to you within one business day. See you at the counter.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/80 rounded-3xl p-8 shadow-sm space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-widest text-dark-brown/50 mb-2">Name</label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full bg-cream border border-light-brown/30 rounded-xl px-4 py-3 text-dark-brown placeholder:text-dark-brown/30 focus:outline-none focus:ring-2 focus:ring-warm-brown/40 transition"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-dark-brown/50 mb-2">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full bg-cream border border-light-brown/30 rounded-xl px-4 py-3 text-dark-brown placeholder:text-dark-brown/30 focus:outline-none focus:ring-2 focus:ring-warm-brown/40 transition"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-dark-brown/50 mb-2">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us what you need..."
                  className="w-full bg-cream border border-light-brown/30 rounded-xl px-4 py-3 text-dark-brown placeholder:text-dark-brown/30 focus:outline-none focus:ring-2 focus:ring-warm-brown/40 transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-warm-brown text-cream py-3 rounded-xl font-semibold hover:bg-dark-brown transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark-brown text-cream/60 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-cream font-bold text-base">Flour & Stone Bakery</p>
          <p>42 Miller's Lane, Brooklyn, NY · Open daily from 7 am</p>
          <p>© 2024 Flour & Stone. All rights reserved.</p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
