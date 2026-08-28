<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
<title>T-Shop — Multi-Vendor Marketplace</title>

<!-- Social Meta -->
<meta property="og:title" content="T-Shop — Multi-Vendor Marketplace">
<meta property="og:description" content="Discover products from verified vendors across Nigeria. Electronics, Fashion, Handmade, Art & more.">
<meta property="og:url" content="https://www.onspace.ai">
<meta property="og:type" content="website">
<meta property="og:site_name" content="T-Shop">
<meta property="og:image" content="https://via.placeholder.com/1200x630.png?text=T-Shop+Multi-Vendor+Marketplace">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="T-Shop — Multi-Vendor Marketplace">
<meta name="twitter:description" content="Discover products from verified vendors across Nigeria.">
<meta name="twitter:image" content="https://via.placeholder.com/1200x630.png?text=T-Shop+Multi-Vendor+Marketplace">
<meta name="twitter:url" content="https://www.onspace.ai">

<!-- Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>

<script>
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-container-high": "#dce9ff",
        "surface-container": "#e5eeff",
        "error-container": "#ffdad6",
        "secondary-fixed": "#acedff",
        "secondary-fixed-dim": "#4cd7f6",
        "primary-fixed": "#dae2fd",
        "on-tertiary-fixed-variant": "#444749",
        "on-secondary-fixed": "#001f26",
        "inverse-primary": "#bec6e0",
        "on-surface-variant": "#45464d",
        "tertiary-fixed-dim": "#c4c7c9",
        "surface-container-lowest": "#ffffff",
        "inverse-surface": "#213145",
        "on-secondary": "#ffffff",
        "tertiary": "#000000",
        "on-tertiary-container": "#818486",
        "outline-variant": "#c6c6cd",
        "secondary-container": "#57dffe",
        "primary": "#000000",
        "tertiary-container": "#191c1e",
        "secondary": "#00687a",
        "on-primary-container": "#7c839b",
        "surface-dim": "#cbdbf5",
        "primary-container": "#131b2e",
        "on-tertiary-fixed": "#191c1e",
        "tertiary-fixed": "#e0e3e5",
        "on-surface": "#0b1c30",
        "surface-variant": "#d3e4fe",
        "error": "#ba1a1a",
        "on-primary": "#ffffff",
        "surface-tint": "#565e74",
        "surface": "#f8f9ff",
        "on-error": "#ffffff",
        "background": "#f8f9ff",
        "inverse-on-surface": "#eaf1ff",
        "primary-fixed-dim": "#bec6e0",
        "on-primary-fixed-variant": "#3f465c",
        "on-error-container": "#93000a",
        "on-primary-fixed": "#131b2e",
        "on-background": "#0b1c30",
        "on-secondary-fixed-variant": "#004e5c",
        "surface-bright": "#f8f9ff",
        "outline": "#76777d",
        "on-tertiary": "#ffffff",
        "surface-container-low": "#eff4ff",
        "on-secondary-container": "#006172",
        "surface-container-highest": "#d3e4fe"
      },
      borderRadius: {
        DEFAULT: "0.25rem", lg: "0.5rem", xl: "0.75rem", full: "9999px"
      },
      spacing: {
        "container-max": "1280px", "stack-md": "16px", "margin-desktop": "40px",
        "margin-mobile": "16px", unit: "4px", gutter: "24px", "stack-lg": "32px", "stack-sm": "8px"
      },
      fontFamily: {
        "label-sm": ["Inter"], "headline-lg": ["Inter"], "display-lg": ["Inter"],
        "body-lg": ["Inter"], "headline-md": ["Inter"], "title-lg": ["Inter"],
        "label-md": ["Inter"], "body-md": ["Inter"]
      },
      fontSize: {
        "label-sm": ["12px", { lineHeight: "16px", fontWeight: "600" }],
        "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "headline-lg-mobile": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "title-lg": ["20px", { lineHeight: "28px", fontWeight: "600" }],
        "label-md": ["14px", { lineHeight: "20px", letterSpacing: "0.01em", fontWeight: "500" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }]
      }
    }
  }
}
</script>

<style>
@layer base {
  html, body { width: 100vw; margin: 0; padding: 0; overflow-x: hidden; }
  body { overscroll-behavior: none; font-family: 'Inter', sans-serif; }
  .pb-safe { padding-bottom: env(safe-area-inset-bottom, 0px); }
  .pt-safe { padding-top: env(safe-area-inset-top, 0px); }
}
::-webkit-scrollbar { display: none; }
* { -ms-overflow-style: none; scrollbar-width: none; }

/* ── Page transition system ── */
.page-view {
  position: absolute;
  inset: 0;
  opacity: 0;
  transform: translateX(24px);
  pointer-events: none;
  transition: opacity 0.32s cubic-bezier(0.4,0,0.2,1), transform 0.32s cubic-bezier(0.4,0,0.2,1);
  overflow-y: auto;
  overflow-x: hidden;
}
.page-view.active {
  opacity: 1;
  transform: translateX(0);
  pointer-events: auto;
}
.page-view.exit-left {
  opacity: 0;
  transform: translateX(-24px);
}

/* ── Nav active icon fill ── */
.nav-item.active .mat-icon { font-variation-settings: 'FILL' 1, 'wght' 500; }
.mat-icon { font-variation-settings: 'FILL' 0, 'wght' 300; transition: font-variation-settings 0.2s; }

/* ── Countdown pulse ── */
@keyframes pulse-soft { 0%,100%{opacity:1;} 50%{opacity:0.6;} }
.pulse-soft { animation: pulse-soft 1.5s ease-in-out infinite; }

/* ── Bounce for sale icon ── */
@keyframes float { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-8px);} }
.float-anim { animation: float 3s ease-in-out infinite; }

/* ── Fade-in-up for cards ── */
@keyframes fadeInUp {
  from { opacity:0; transform: translateY(20px); }
  to   { opacity:1; transform: translateY(0); }
}
.fade-in-up { animation: fadeInUp 0.45s ease forwards; }
.delay-1 { animation-delay: 0.05s; }
.delay-2 { animation-delay: 0.10s; }
.delay-3 { animation-delay: 0.15s; }
.delay-4 { animation-delay: 0.20s; }
.delay-5 { animation-delay: 0.25s; }
.delay-6 { animation-delay: 0.30s; }

/* ── Favorite active ── */
.fav-active { color: #ba1a1a !important; font-variation-settings: 'FILL' 1 !important; }

/* ── Category pill active ── */
.pill-active { background-color: #000 !important; color: #fff !important; }

/* ── Desktop sidebar hidden on mobile ── */
@media (max-width: 1023px) { .desktop-sidebar { display: none !important; } }

/* ── Mobile bottom nav hidden on desktop ── */
@media (min-width: 1024px) { .mobile-bottom-nav { display: none !important; } }

/* ── Desktop top nav hidden on mobile ── */
@media (max-width: 1023px) { .desktop-top-nav { display: none !important; } }

/* ── Mobile top bar hidden on desktop ── */
@media (min-width: 1024px) { .mobile-top-bar { display: none !important; } }

/* Page container must fill remaining space */
#page-container {
  position: relative;
  flex: 1;
  overflow: hidden;
}

.inner-page-content {
  min-height: 100%;
}

/* ── Auth tab underline ── */
.auth-tab.active-tab {
  color: #00687a;
  border-bottom: 2px solid #00687a;
}

/* ── Product Detail Modal ── */
#product-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(11,28,48,0.55);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s cubic-bezier(0.4,0,0.2,1);
}
#product-modal-overlay.open {
  opacity: 1;
  pointer-events: auto;
}
#product-modal-sheet {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #f8f9ff;
  border-radius: 24px 24px 0 0;
  transform: translateY(100%);
  transition: transform 0.4s cubic-bezier(0.32,0,0.15,1);
  max-height: 92vh;
  overflow-y: auto;
  overflow-x: hidden;
}
#product-modal-sheet.open {
  transform: translateY(0);
}
@media (min-width: 768px) {
  #product-modal-sheet {
    position: absolute;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    transform: translate(-50%, -40%) scale(0.96);
    width: 720px;
    max-width: calc(100vw - 48px);
    border-radius: 20px;
    max-height: 88vh;
    opacity: 0;
    transition: transform 0.35s cubic-bezier(0.32,0,0.15,1), opacity 0.3s ease;
  }
  #product-modal-sheet.open {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
}
/* Variant pill active */
.variant-pill.selected {
  background-color: #000 !important;
  color: #fff !important;
  border-color: #000 !important;
}

/* ── Cart Drawer ── */
#cart-drawer-overlay {
  position: fixed;
  inset: 0;
  z-index: 300;
  background: rgba(11,28,48,0.45);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s cubic-bezier(0.4,0,0.2,1);
}
#cart-drawer-overlay.open { opacity: 1; pointer-events: auto; }
#cart-drawer-panel {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 420px;
  height: 100%;
  background: #f8f9ff;
  transform: translateX(100%);
  transition: transform 0.38s cubic-bezier(0.32,0,0.15,1);
  display: flex;
  flex-direction: column;
  box-shadow: -8px 0 32px rgba(0,0,0,0.12);
}
#cart-drawer-panel.open { transform: translateX(0); }
@media (max-width: 767px) {
  #cart-drawer-panel {
    top: auto;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    max-width: 100%;
    height: 88vh;
    border-radius: 24px 24px 0 0;
    transform: translateY(100%);
    box-shadow: 0 -8px 32px rgba(0,0,0,0.12);
  }
  #cart-drawer-panel.open { transform: translateY(0); }
}

/* ── Search Overlay ── */
#search-overlay {
  position: fixed;
  inset: 0;
  z-index: 400;
  background: rgba(248,249,255,0.97);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s cubic-bezier(0.4,0,0.2,1);
  display: flex;
  flex-direction: column;
}
#search-overlay.open { opacity: 1; pointer-events: auto; }
#search-overlay .search-input-wrap {
  transform: translateY(-8px);
  transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
}
#search-overlay.open .search-input-wrap { transform: translateY(0); }

/* ── Checkout Page ── */
.checkout-step-indicator {
  display: flex;
  align-items: center;
  gap: 0;
}
.checkout-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  position: relative;
  flex: 1;
}
.checkout-step-circle {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  border: 2px solid #c6c6cd;
  background: #f8f9ff;
  color: #76777d;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}
.checkout-step.active .checkout-step-circle {
  border-color: #00687a;
  background: #00687a;
  color: #fff;
  box-shadow: 0 0 0 4px rgba(0,104,122,0.15);
}
.checkout-step.done .checkout-step-circle {
  border-color: #00687a;
  background: #00687a;
  color: #fff;
}
.checkout-step-label {
  font-size: 11px;
  font-weight: 500;
  color: #76777d;
  text-align: center;
  white-space: nowrap;
  transition: color 0.3s;
}
.checkout-step.active .checkout-step-label,
.checkout-step.done .checkout-step-label { color: #00687a; }
.checkout-step-line {
  flex: 1;
  height: 2px;
  background: #c6c6cd;
  margin-top: -22px;
  margin-bottom: 18px;
  position: relative;
  z-index: 0;
  transition: background 0.3s;
}
.checkout-step-line.done { background: #00687a; }

/* Card input formatting */
.card-brand-badge {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 11px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 4px;
  transition: all 0.2s;
}
.card-brand-visa { background: #1a1f71; color: #fff; }
.card-brand-mc { background: linear-gradient(135deg,#eb001b,#f79e1b); color: #fff; }
.card-brand-amex { background: #007bc1; color: #fff; }
.card-brand-discover { background: #e65c00; color: #fff; }
.card-brand-unknown { background: #e5eeff; color: #45464d; }

/* Checkout step content transitions */
.checkout-step-content {
  display: none;
  opacity: 0;
  transform: translateX(16px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.checkout-step-content.active {
  display: flex;
  flex-direction: column;
  opacity: 1;
  transform: translateX(0);
}
.checkout-step-content.exit-left {
  opacity: 0;
  transform: translateX(-16px);
}

/* ── Order Tracking Modal ── */
#order-track-overlay {
  position: fixed;
  inset: 0;
  z-index: 500;
  background: rgba(11,28,48,0.55);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.28s cubic-bezier(0.4,0,0.2,1);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}
#order-track-overlay.open { opacity: 1; pointer-events: auto; }
#order-track-modal {
  background: #f8f9ff;
  border-radius: 20px;
  width: 100%;
  max-width: 520px;
  max-height: 88vh;
  overflow-y: auto;
  transform: translateY(24px) scale(0.97);
  opacity: 0;
  transition: transform 0.35s cubic-bezier(0.32,0,0.15,1), opacity 0.3s ease;
  box-shadow: 0 24px 64px rgba(0,0,0,0.18);
}
#order-track-overlay.open #order-track-modal {
  transform: translateY(0) scale(1);
  opacity: 1;
}
.track-step-line {
  width: 2px;
  flex-shrink: 0;
  background: #c6c6cd;
}
.track-step-line.done { background: #00687a; }
</style>
</head>

<body class="bg-background text-on-background flex flex-col h-screen overflow-hidden">

<!-- ══════════════════════════════════════════════
DESKTOP TOP NAV
══════════════════════════════════════════════ -->
<nav class="desktop-top-nav bg-surface sticky top-0 z-50 border-b border-outline-variant shadow-sm">
  <div class="flex items-center justify-between px-gutter py-4 max-w-container-max mx-auto w-full">
    <div class="flex items-center gap-8">
      <span class="text-title-lg font-bold text-on-background cursor-pointer" onclick="navigate('home')">T-Shop</span>
      <div class="flex gap-8">
        <button class="nav-desktop-link text-on-surface-variant text-label-md hover:text-secondary transition-colors" data-page="home">Home</button>
        <button class="nav-desktop-link text-on-surface-variant text-label-md hover:text-secondary transition-colors" data-page="categories">Categories</button>
        <button class="nav-desktop-link text-on-surface-variant text-label-md hover:text-secondary transition-colors" data-page="vendors">Vendors</button>
        <button class="nav-desktop-link text-on-surface-variant text-label-md hover:text-secondary transition-colors" data-page="deals">Deals</button>
      </div>
    </div>
    <div class="flex items-center gap-4">
      <div class="relative">
        <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
        <input id="desktop-search" class="pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-full text-label-md focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary w-56 transition-all" placeholder="Search products..." type="text">
      </div>
      <button class="relative text-on-surface-variant hover:text-primary transition-colors" id="cart-btn-desktop">
        <span class="material-symbols-outlined text-[24px]">shopping_cart</span>
        <span id="cart-count-desktop" class="absolute -top-1 -right-1 w-4 h-4 bg-secondary text-on-secondary text-[10px] rounded-full flex items-center justify-center font-bold">0</span>
      </button>
      <!-- Auth buttons shown when logged out -->
      <div id="desktop-auth-buttons" class="flex items-center gap-2">
        <button onclick="navigateToPortal('login')" class="text-secondary px-4 py-2 rounded-full text-label-md border border-secondary hover:bg-secondary/5 transition-all">Login</button>
        <button onclick="navigateToPortal('signup')" class="bg-secondary text-on-secondary px-5 py-2 rounded-full text-label-md shadow-sm hover:shadow-md transition-all">Sign Up</button>
      </div>
      <!-- User avatar shown when logged in (hidden by default) -->
      <div id="desktop-user-avatar" class="hidden items-center gap-2 cursor-pointer" onclick="navigate('portal')">
        <div class="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
          <span class="material-symbols-outlined text-on-primary text-[18px]">person</span>
        </div>
        <span id="desktop-username" class="text-label-md text-on-surface font-medium"></span>
      </div>
    </div>
  </div>
</nav>

<!-- ══════════════════════════════════════════════
MOBILE TOP BAR
══════════════════════════════════════════════ -->
<header class="mobile-top-bar bg-surface/80 backdrop-blur-xl pt-safe border-b border-outline-variant shadow-sm z-50">
  <div class="h-14 px-4 flex items-center justify-between">
    <div class="flex items-center gap-3">
      <span class="font-headline-md font-bold text-primary tracking-tight cursor-pointer" onclick="navigate('home')">T-SHOP</span>
    </div>
    <div class="flex items-center gap-1">
      <button class="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" id="mobile-search-btn">
        <span class="material-symbols-outlined mat-icon">search</span>
      </button>
      <button class="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors relative" id="cart-btn-mobile">
        <span class="material-symbols-outlined mat-icon">shopping_cart</span>
        <span id="cart-count-mobile" class="absolute top-1 right-1 w-4 h-4 bg-secondary text-on-secondary text-[10px] rounded-full flex items-center justify-center font-bold">0</span>
      </button>
      <!-- Logged-out mobile auth buttons -->
      <div id="mobile-auth-buttons" class="flex items-center gap-1 ml-1">
        <button onclick="navigateToPortal('login')" class="h-8 px-3 text-secondary border border-secondary rounded-full text-[12px] font-semibold hover:bg-secondary/5 transition-all">Login</button>
        <button onclick="navigateToPortal('signup')" class="h-8 px-3 bg-secondary text-on-secondary rounded-full text-[12px] font-semibold shadow-sm hover:shadow-md transition-all">Sign Up</button>
      </div>
      <!-- Logged-in mobile user avatar (hidden by default) -->
      <div id="mobile-user-avatar" class="hidden ml-1 w-8 h-8 rounded-full bg-primary items-center justify-center cursor-pointer" onclick="navigate('portal')">
        <span class="material-symbols-outlined text-on-primary text-[18px]">person</span>
      </div>
    </div>
  </div>
  <!-- Mobile search bar (hidden by default) -->
  <div id="mobile-search-bar" class="hidden px-4 pb-3">
    <div class="relative">
      <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
      <input class="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-full text-label-md focus:outline-none focus:border-secondary" placeholder="Search products..." type="text">
    </div>
  </div>
</header>

<!-- ══════════════════════════════════════════════
PAGE CONTAINER
══════════════════════════════════════════════ -->
<div id="page-container" class="flex-1 relative overflow-hidden">

  <!-- ══════════════════════════
  PAGE: HOME
  ══════════════════════════ -->
  <div class="page-view active" id="page-home">
    <div class="inner-page-content pb-20 lg:pb-0">

      <!-- Hero -->
      <section class="relative w-full overflow-hidden lg:h-[520px] h-auto">
        <div class="absolute inset-0 bg-cover bg-center"
          style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCPjUapr2YfRoG8coObGef_RWXsD-ObBz9M_5HVckSwTzVca2PK4AwmIm1AO0L5S0OUhwL1vMdEy5myEyCUQCULOCb6znAo1JtDT-QXqnSI9laNrXyq_5vly-KBkMEjwTxqyOApC5-qQlONvwdgYtHooyQCpx83SihjyGmcDZT4_4ocyaLMLSG0HpCVIF4lzfMT-mH13nNfUj0mTZtZIDXqhEKg2oG9S0PPKOgygEDf82aNV4CRs9YO8w')">
        </div>
        <div class="absolute inset-0 bg-gradient-to-b from-surface/10 via-surface/60 to-surface/95"></div>
        <div class="relative z-10 flex flex-col items-center justify-end text-center px-6 pb-10 pt-32 lg:pt-0 lg:justify-center lg:h-full">
          <span class="inline-block py-1 px-3 bg-secondary text-on-secondary rounded-full font-label-sm uppercase tracking-widest mb-4 shadow-lg shadow-secondary/20 fade-in-up">New Arrivals & Deals</span>
          <h1 class="font-display-lg text-display-lg text-on-surface mb-3 fade-in-up delay-1 max-w-2xl">
            Shop from <span class="text-secondary">Our Verified</span> Vendors
          </h1>
          <p class="font-body-lg text-body-lg text-on-surface-variant mb-6 max-w-xl fade-in-up delay-2">
            Discover products from verified vendors across Nigeria
          </p>
          <div class="flex flex-col sm:flex-row gap-3 w-full max-w-sm fade-in-up delay-3">
            <button onclick="navigate('categories')" class="flex-1 h-12 bg-secondary text-on-secondary rounded-full font-label-md shadow-md hover:shadow-lg hover:scale-105 transition-all active:scale-95 flex items-center justify-center">
              Browse Categories
            </button>
            <button onclick="navigateToPortal('signup')" class="flex-1 h-12 bg-transparent text-secondary outline outline-2 outline-secondary rounded-full font-label-md hover:bg-secondary/10 transition-all active:scale-95 flex items-center justify-center">
              Become a Vendor
            </button>
          </div>
        </div>
      </section>

      <!-- Category Scroll -->
      <section class="px-4 lg:px-10 py-8 max-w-container-max mx-auto w-full">
        <div class="flex items-center justify-between mb-4">
          <h2 class="font-headline-md text-headline-md text-on-surface">Shop by Category</h2>
          <button onclick="navigate('categories')" class="text-secondary font-label-md flex items-center gap-1 hover:gap-2 transition-all">
            View All <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
        <div class="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory -mx-4 px-4 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-6 lg:gap-4">
          <a class="flex flex-col items-center gap-2 min-w-[80px] lg:min-w-0 snap-start group cursor-pointer fade-in-up delay-1" onclick="navigate('categories')">
            <div class="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-surface-container flex items-center justify-center text-secondary shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all">
              <span class="material-symbols-outlined text-[28px] lg:text-[32px]">devices</span>
            </div>
            <span class="font-label-sm text-on-surface-variant text-center">Electronics</span>
          </a>
          <a class="flex flex-col items-center gap-2 min-w-[80px] lg:min-w-0 snap-start group cursor-pointer fade-in-up delay-2" onclick="navigate('categories')">
            <div class="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-surface-container flex items-center justify-center text-secondary shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all">
              <span class="material-symbols-outlined text-[28px] lg:text-[32px]">checkroom</span>
            </div>
            <span class="font-label-sm text-on-surface-variant text-center">Fashion</span>
          </a>
          <a class="flex flex-col items-center gap-2 min-w-[80px] lg:min-w-0 snap-start group cursor-pointer fade-in-up delay-3" onclick="navigate('categories')">
            <div class="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-surface-container flex items-center justify-center text-secondary shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all">
              <span class="material-symbols-outlined text-[28px] lg:text-[32px]">chair</span>
            </div>
            <span class="font-label-sm text-on-surface-variant text-center">Home Decor</span>
          </a>
          <a class="flex flex-col items-center gap-2 min-w-[80px] lg:min-w-0 snap-start group cursor-pointer fade-in-up delay-4" onclick="navigate('categories')">
            <div class="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-surface-container flex items-center justify-center text-secondary shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all">
              <span class="material-symbols-outlined text-[28px] lg:text-[32px]">diamond</span>
            </div>
            <span class="font-label-sm text-on-surface-variant text-center">Jewelry</span>
          </a>
          <a class="flex flex-col items-center gap-2 min-w-[80px] lg:min-w-0 snap-start group cursor-pointer fade-in-up delay-5" onclick="navigate('categories')">
            <div class="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-surface-container flex items-center justify-center text-secondary shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all">
              <span class="material-symbols-outlined text-[28px] lg:text-[32px]">brush</span>
            </div>
            <span class="font-label-sm text-on-surface-variant text-center">Art</span>
          </a>
          <a class="flex flex-col items-center gap-2 min-w-[80px] lg:min-w-0 snap-start group cursor-pointer fade-in-up delay-6" onclick="navigate('categories')">
            <div class="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-surface-container flex items-center justify-center text-secondary shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all">
              <span class="material-symbols-outlined text-[28px] lg:text-[32px]">local_cafe</span>
            </div>
            <span class="font-label-sm text-on-surface-variant text-center">Food</span>
          </a>
        </div>
      </section>

      <!-- Trending Products -->
      <section class="px-4 lg:px-10 pb-8 max-w-container-max mx-auto w-full">
        <h2 class="font-headline-md text-headline-md text-on-surface mb-4">Trending Now</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <!-- Card 1 -->
          <article class="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col group hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative fade-in-up delay-1 cursor-pointer" onclick="openProductModal({id:1,name:'Obsidian Pro Smartwatch',vendor:'Tech Haven',price:194.35,originalPrice:299,discount:35,image:'https://lh3.googleusercontent.com/aida-public/AB6AXuAb79A5HWQLyTIxXkQx5ezodKBPvZ3zPzlvdqrmteHD3OSR76YiqPQK-s6UmxkK5EKM22LsnMPO6uCgPhJ19pBkjKMuJGyOvxcmopfLNh9PV7TtgT9XXdRjErk9-o_kQkYIj9jZtjIj_SQOGbSABHlpe7NuCZeWHXA9OYXIGcxqbrexIdddOZhDsMbP_NWVnbfR392Vm8qnTQRQPHv14vERlRu5-tc_0uw_iLVYp0rn2GrZ1Smv7E2YLw',description:'The Obsidian Pro is engineered for those who demand more. Featuring a stunning AMOLED always-on display, GPS tracking, 7-day battery life, and 50m water resistance. Compatible with iOS & Android.',variants:['Midnight Black','Slate Gray','Cobalt Blue'],sizes:null,category:'Electronics'})">
            <button class="fav-btn absolute top-2 right-2 w-8 h-8 bg-surface/80 backdrop-blur-sm rounded-full flex items-center justify-center text-on-surface-variant z-10 hover:scale-110 transition-all">
              <span class="material-symbols-outlined mat-icon text-[20px]">favorite</span>
            </button>
            <div class="w-full aspect-[4/5] bg-surface-container-low overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb79A5HWQLyTIxXkQx5ezodKBPvZ3zPzlvdqrmteHD3OSR76YiqPQK-s6UmxkK5EKM22LsnMPO6uCgPhJ19pBkjKMuJGyOvxcmopfLNh9PV7TtgT9XXdRjErk9-o_kQkYIj9jZtjIj_SQOGbSABHlpe7NuCZeWHXA9OYXIGcxqbrexIdddOZhDsMbP_NWVnbfR392Vm8qnTQRQPHv14vERlRu5-tc_0uw_iLVYp0rn2GrZ1Smv7E2YLw"
                alt="Obsidian Pro Smartwatch">
            </div>
            <div class="p-3 flex flex-col gap-1 flex-1">
              <span class="text-[10px] text-on-surface-variant uppercase tracking-wider">Tech Haven</span>
              <h3 class="font-label-md text-on-surface line-clamp-2 leading-tight flex-1">Obsidian Pro Smartwatch</h3>
              <div class="flex items-end justify-between mt-auto pt-1">
                <div>
                  <span class="text-[11px] text-on-surface-variant line-through">$299</span>
                  <span class="font-title-lg text-secondary block">$194.35</span>
                </div>
                <button class="add-to-cart w-8 h-8 bg-primary text-on-primary rounded-full flex items-center justify-center hover:bg-secondary transition-colors shadow-sm">
                  <span class="material-symbols-outlined text-[16px]">add_shopping_cart</span>
                </button>
              </div>
            </div>
          </article>
          <!-- Card 2 -->
          <article class="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col group hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative fade-in-up delay-2 cursor-pointer" onclick="openProductModal({id:2,name:'Kyoto Ceramic Pour-Over Set',vendor:'Artisan Goods',price:96.00,originalPrice:120,discount:20,image:'https://lh3.googleusercontent.com/aida-public/AB6AXuBwrJ_9oiKy4UB-GFoilg3ig0mIT_vAYOgS9UAJYEL1OZPzvAdOIQdO8Rh_3fJee5vX4_2VPfTQfFYOxyGRCDKF4PXr05GokdrsagJD1E39L07RsSMftb-iUH4cMs5v9xxVfZP3sIy8783r57e0HjxusEIS82qPeId5xlm5ITJM_oaPck0ObVhwGgtw5cVckMPyDsZ6gHt87Gy4nI7wrFyvY5V_9Yw3p8jRgNSb9yUMpvX9STWWZ3-_ug',description:'Handcrafted in small batches in Kyoto, each pour-over set is thrown on a kick wheel and fired at 1280°C. The matte glaze captures subtle texture variations, making every piece truly one-of-a-kind. Set includes dripper, server, and two tasting cups.',variants:['Ash White','Forest Green','Natural Clay'],sizes:null,category:'Home Decor'})">
            <button class="fav-btn absolute top-2 right-2 w-8 h-8 bg-surface/80 backdrop-blur-sm rounded-full flex items-center justify-center text-on-surface-variant z-10 hover:scale-110 transition-all">
              <span class="material-symbols-outlined mat-icon text-[20px]">favorite</span>
            </button>
            <div class="w-full aspect-[4/5] bg-surface-container-low overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwrJ_9oiKy4UB-GFoilg3ig0mIT_vAYOgS9UAJYEL1OZPzvAdOIQdO8Rh_3fJee5vX4_2VPfTQfFYOxyGRCDKF4PXr05GokdrsagJD1E39L07RsSMftb-iUH4cMs5v9xxVfZP3sIy8783r57e0HjxusEIS82qPeId5xlm5ITJM_oaPck0ObVhwGgtw5cVckMPyDsZ6gHt87Gy4nI7wrFyvY5V_9Yw3p8jRgNSb9yUMpvX9STWWZ3-_ug"
                alt="Kyoto Ceramic Pour-Over Set">
            </div>
            <div class="p-3 flex flex-col gap-1 flex-1">
              <span class="text-[10px] text-on-surface-variant uppercase tracking-wider">Artisan Goods</span>
              <h3 class="font-label-md text-on-surface line-clamp-2 leading-tight flex-1">Kyoto Ceramic Pour-Over Set</h3>
              <div class="flex items-end justify-between mt-auto pt-1">
                <div>
                  <span class="text-[11px] text-on-surface-variant line-through">$120</span>
                  <span class="font-title-lg text-secondary block">$96.00</span>
                </div>
                <button class="add-to-cart w-8 h-8 bg-primary text-on-primary rounded-full flex items-center justify-center hover:bg-secondary transition-colors shadow-sm">
                  <span class="material-symbols-outlined text-[16px]">add_shopping_cart</span>
                </button>
              </div>
            </div>
          </article>
          <!-- Card 3 -->
          <article class="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col group hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative fade-in-up delay-3 cursor-pointer" onclick="openProductModal({id:3,name:'Slate 65% Mechanical Board',vendor:'KeyChroniks',price:127.50,originalPrice:150,discount:15,image:'https://lh3.googleusercontent.com/aida-public/AB6AXuBVx_cKwBwAuXcLK0oTzk_BM7YTJRf1BtwH36cBxo9YlzL1r31CYLPfKUo_tCJsHk7S-hRpICa06-uek70Rom8VwpGwPNvhhaqUs2anx2DqRKrRq3OL3oPQitrn-3gNk1HNZMxqLT5QnYbAeIp7UX2MPYCX-fZw6FNS420PgF1h0CQ5Is8_HzSdk15s2r0Z5Zpbn4Ui-ayxoim0e6aAIDEsKbUA8KiGNZbvRi-jYBD6so-a-iUDx9aQ3g',description:'The Slate 65% delivers a premium typing experience in a compact layout. Hot-swappable Gateron switches, aircraft-grade aluminum case, PBT double-shot keycaps, and per-key RGB lighting. Programmable via QMK/VIA firmware.',variants:['Gateron Red','Gateron Brown','Gateron Blue'],sizes:null,category:'Electronics'})">
            <button class="fav-btn absolute top-2 right-2 w-8 h-8 bg-surface/80 backdrop-blur-sm rounded-full flex items-center justify-center text-on-surface-variant z-10 hover:scale-110 transition-all">
              <span class="material-symbols-outlined mat-icon text-[20px]">favorite</span>
            </button>
            <div class="w-full aspect-[4/5] bg-surface-container-low overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVx_cKwBwAuXcLK0oTzk_BM7YTJRf1BtwH36cBxo9YlzL1r31CYLPfKUo_tCJsHk7S-hRpICa06-uek70Rom8VwpGwPNvhhaqUs2anx2DqRKrRq3OL3oPQitrn-3gNk1HNZMxqLT5QnYbAeIp7UX2MPYCX-fZw6FNS420PgF1h0CQ5Is8_HzSdk15s2r0Z5Zpbn4Ui-ayxoim0e6aAIDEsKbUA8KiGNZbvRi-jYBD6so-a-iUDx9aQ3g"
                alt="Slate Mechanical Keyboard">
            </div>
            <div class="p-3 flex flex-col gap-1 flex-1">
              <span class="text-[10px] text-on-surface-variant uppercase tracking-wider">KeyChroniks</span>
              <h3 class="font-label-md text-on-surface line-clamp-2 leading-tight flex-1">Slate 65% Mechanical Board</h3>
              <div class="flex items-end justify-between mt-auto pt-1">
                <div>
                  <span class="text-[11px] text-on-surface-variant line-through">$150</span>
                  <span class="font-title-lg text-secondary block">$127.50</span>
                </div>
                <button class="add-to-cart w-8 h-8 bg-primary text-on-primary rounded-full flex items-center justify-center hover:bg-secondary transition-colors shadow-sm">
                  <span class="material-symbols-outlined text-[16px]">add_shopping_cart</span>
                </button>
              </div>
            </div>
          </article>
          <!-- Card 4 -->
          <article class="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col group hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative fade-in-up delay-4 cursor-pointer" onclick="openProductModal({id:4,name:'Chunky Merino Wool Throw',vendor:'Loom & Weave',price:140.00,originalPrice:280,discount:50,image:'https://lh3.googleusercontent.com/aida-public/AB6AXuDdZpCsSCnqHMubh_MNEZaLFzVUBB2Oq0hFdX48e1O-gCE_lmhfmfG90hGduiKHlxizRNGIoJeFL6ZabNfqzDIixpNnpUj3gs3VIxKy3MilLJV0PmLHm17qgxpST88Y823-u41xFArn6cW9YWfNGZuYHG6_hXA26Q5_I74m3yZzdjWykyi-zRX11Uy1U1ku2gcHz_Rah-TBYPJVEuusKT_L6jSzT0xmmZxC1Stlng4Q9jk9lVdEeRKs_w',description:'Hand-knitted from 100% extra-fine Merino wool, this luxuriously chunky throw is the ultimate companion for cool evenings. Naturally temperature-regulating, hypoallergenic, and ethically sourced from free-range flocks in New Zealand.',variants:['Oatmeal','Charcoal','Dusty Rose'],sizes:['50×60 in','60×72 in','72×84 in'],category:'Fashion'})">
            <button class="fav-btn absolute top-2 right-2 w-8 h-8 bg-surface/80 backdrop-blur-sm rounded-full flex items-center justify-center text-on-surface-variant z-10 hover:scale-110 transition-all">
              <span class="material-symbols-outlined mat-icon text-[20px]">favorite</span>
            </button>
            <div class="w-full aspect-[4/5] bg-surface-container-low overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdZpCsSCnqHMubh_MNEZaLFzVUBB2Oq0hFdX48e1O-gCE_lmhfmfG90hGduiKHlxizRNGIoJeFL6ZabNfqzDIixpNnpUj3gs3VIxKy3MilLJV0PmLHm17qgxpST88Y823-u41xFArn6cW9YWfNGZuYHG6_hXA26Q5_I74m3yZzdjWykyi-zRX11Uy1U1ku2gcHz_Rah-TBYPJVEuusKT_L6jSzT0xmmZxC1Stlng4Q9jk9lVdEeRKs_w"
                alt="Chunky Merino Wool Throw">
            </div>
            <div class="p-3 flex flex-col gap-1 flex-1">
              <span class="text-[10px] text-on-surface-variant uppercase tracking-wider">Loom & Weave</span>
              <h3 class="font-label-md text-on-surface line-clamp-2 leading-tight flex-1">Chunky Merino Wool Throw</h3>
              <div class="flex items-end justify-between mt-auto pt-1">
                <div>
                  <span class="text-[11px] text-on-surface-variant line-through">$280</span>
                  <span class="font-title-lg text-secondary block">$140.00</span>
                </div>
                <button class="add-to-cart w-8 h-8 bg-primary text-on-primary rounded-full flex items-center justify-center hover:bg-secondary transition-colors shadow-sm">
                  <span class="material-symbols-outlined text-[16px]">add_shopping_cart</span>
                </button>
              </div>
            </div>
          </article>
        </div>
        <div class="mt-6 flex justify-center">
          <button onclick="navigate('deals')" class="px-6 py-3 rounded-full bg-surface-container text-on-surface font-label-md shadow-sm hover:bg-surface-variant hover:scale-105 transition-all active:scale-95 flex items-center gap-2">
            See All Deals <span class="material-symbols-outlined text-[18px]">local_offer</span>
          </button>
        </div>
      </section>

      <!-- Featured Vendor Banner -->
      <section class="px-4 lg:px-10 pb-8 max-w-container-max mx-auto w-full">
        <div class="bg-secondary-container rounded-2xl p-6 shadow-sm relative overflow-hidden">
          <div class="absolute top-0 right-0 w-40 h-40 bg-secondary opacity-10 rounded-bl-full pointer-events-none"></div>
          <div class="absolute bottom-0 left-0 w-28 h-28 bg-surface opacity-30 rounded-tr-full pointer-events-none"></div>
          <div class="relative z-10 flex flex-col lg:flex-row gap-6 items-start lg:items-center">
            <div class="flex-1">
              <span class="inline-block px-3 py-1 bg-surface-container-lowest/60 backdrop-blur-sm rounded-full font-label-sm text-[10px] text-on-secondary-container mb-2 uppercase tracking-widest">Featured Artisan</span>
              <h2 class="font-headline-md text-on-secondary-container mb-3">Clay & Kin Studio</h2>
              <div class="flex items-center gap-4">
                <div class="w-14 h-14 rounded-full bg-surface shadow-sm overflow-hidden flex-shrink-0">
                  <img class="w-full h-full object-cover" loading="lazy"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWc7s5SMmNTQt5TpFB2BKWK1_HRXelieB89r0J_uxT8Egz5EEeNgLaFxlK0UXs-Uxai3kYLKZjaCogqcU1CV1ExxyM7vE0e6-gAE1DWOFdCEecILswcJYwFZ5mi5DR9VcwVDl77O0J34Yo19LRm7Z_bmhF8EWpTSUOhAkbjhF5OtN1prKHQJA_1cMaqsedEqS3d-9PM--V6NGsY83V9yPW7ilXW4ivgB2r4Q2tG6ZO5lL87IyGS9KhFA"
                    alt="Clay and Kin artisan">
                </div>
                <p class="font-body-md text-sm text-on-secondary-container">Small-batch functional ceramics designed for daily rituals. Fired in our solar-powered kiln using locally sourced clay.</p>
              </div>
            </div>
            <button onclick="navigate('vendors')" class="w-full lg:w-auto px-6 py-3 bg-surface-container-lowest text-secondary font-label-md rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition-all active:scale-95 flex items-center justify-center gap-2">
              Visit Shop <span class="material-symbols-outlined text-[18px]">storefront</span>
            </button>
          </div>
        </div>
      </section>

      <!-- Trust Banner -->
      <section class="px-4 lg:px-10 pb-10 max-w-container-max mx-auto w-full">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div class="bg-surface-container-high rounded-xl p-5 flex items-center gap-4">
            <span class="material-symbols-outlined text-secondary text-[32px]">verified_user</span>
            <div>
              <h3 class="font-title-lg text-on-surface text-[15px]">Buyer Protection</h3>
              <p class="font-body-md text-sm text-on-surface-variant">Every purchase guaranteed</p>
            </div>
          </div>
          <div class="bg-surface-container-high rounded-xl p-5 flex items-center gap-4">
            <span class="material-symbols-outlined text-secondary text-[32px]">local_shipping</span>
            <div>
              <h3 class="font-title-lg text-on-surface text-[15px]">Free Shipping</h3>
              <p class="font-body-md text-sm text-on-surface-variant">On orders over $75</p>
            </div>
          </div>
          <div class="bg-surface-container-high rounded-xl p-5 flex items-center gap-4">
            <span class="material-symbols-outlined text-secondary text-[32px]">groups</span>
            <div>
              <h3 class="font-title-lg text-on-surface text-[15px]">2,500+ Vendors</h3>
              <p class="font-body-md text-sm text-on-surface-variant">Independent vendors</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="bg-surface-container-lowest border-t border-outline-variant">
        <div class="max-w-container-max mx-auto px-gutter py-8 flex flex-col md:flex-row justify-between items-start gap-6">
          <div>
            <h3 class="font-headline-md text-on-surface mb-3">T-Shop</h3>
            <p class="font-body-md text-on-surface-variant max-w-xs text-sm">The premier destination for discovering unique products from independent vendors worldwide.</p>
          </div>
          <div class="flex gap-12 text-sm">
            <div class="flex flex-col gap-2">
              <a class="text-on-surface-variant hover:text-secondary transition-colors" href="#">About Us</a>
              <a class="text-on-surface-variant hover:text-secondary transition-colors" href="#">Vendor Terms</a>
            </div>
            <div class="flex flex-col gap-2">
              <a class="text-on-surface-variant hover:text-secondary transition-colors" href="#">Privacy Policy</a>
              <a class="text-on-surface-variant hover:text-secondary transition-colors" href="#">Help Center</a>
            </div>
            <div class="flex flex-col gap-2">
              <a class="text-on-surface-variant hover:text-secondary transition-colors font-medium" href="#">Sell on T-Shop</a>
            </div>
          </div>
        </div>
        <div class="px-gutter py-4 border-t border-outline-variant/20 max-w-container-max mx-auto flex items-center justify-between">
          <span class="font-label-sm text-on-surface-variant">© 2026 T-Shop Multi-vendor Marketplace. All rights reserved.</span>
        </div>
      </footer>

    </div>
  </div>

  <!-- ══════════════════════════
  PAGE: CATEGORIES
  ══════════════════════════ -->
  <div class="page-view" id="page-categories">
    <div class="inner-page-content pb-20 lg:pb-0">

      <!-- Hero Banner -->
      <section class="relative w-full h-[220px] lg:h-[280px] flex items-center justify-center bg-surface-container overflow-hidden">
        <div class="absolute inset-0">
          <div class="absolute inset-0 bg-gradient-to-r from-surface-container to-surface-container-high opacity-80"></div>
          <div class="w-full h-full bg-cover bg-center opacity-30"
            style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAngsTzy8ksnO7vF7p9o6H4b2-b6XgtGM9vqxXGXpfFVbPwmsMbwtk25NJfEZyAfMojGWfbGvIFC1QnVfLGh1xm82dZwfZ42qdFnLZSLVPId5OOh0s3lvU2atfhOBNNrz25rJ08gqsyryw_3AW5ZYQqe5TkCiR8rX8_Hqpjf5QaFs-tD8PjHugh1LkVEMrV5ANxzsjCRxKd8gI0FUSycfIm9LNG9HGZcKUiYYTbjnrhn7gGT3-ROg9Wng');">
          </div>
        </div>
        <div class="relative z-10 text-center px-6">
          <h1 class="font-display-lg text-display-lg text-on-surface mb-2 tracking-tight drop-shadow-sm">Browse by Category</h1>
          <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto drop-shadow-sm">Curated collections from our trusted network of independent vendors.</p>
        </div>
      </section>

      <!-- Main Content -->
      <div class="max-w-container-max mx-auto px-4 lg:px-10 py-8 flex flex-col lg:flex-row gap-8">

        <!-- Sidebar -->
        <aside class="desktop-sidebar w-64 flex-shrink-0 flex flex-col gap-6">
          <div class="bg-surface rounded-xl p-4 shadow-sm">
            <h2 class="font-title-lg text-on-surface mb-4">Trending Now</h2>
            <ul class="flex flex-col gap-1">
              <li><a class="group flex items-center justify-between py-2 hover:bg-surface-container rounded-lg px-2 transition-colors cursor-pointer">
                <span class="font-body-md text-on-surface group-hover:text-secondary transition-colors">Artisan Coffee</span>
                <span class="material-symbols-outlined text-on-surface-variant group-hover:text-secondary text-sm">trending_up</span>
              </a></li>
              <li><a class="group flex items-center justify-between py-2 hover:bg-surface-container rounded-lg px-2 transition-colors cursor-pointer">
                <span class="font-body-md text-on-surface group-hover:text-secondary transition-colors">Minimalist Jewelry</span>
                <span class="material-symbols-outlined text-on-surface-variant group-hover:text-secondary text-sm">trending_up</span>
              </a></li>
              <li><a class="group flex items-center justify-between py-2 hover:bg-surface-container rounded-lg px-2 transition-colors cursor-pointer">
                <span class="font-body-md text-on-surface group-hover:text-secondary transition-colors">Smart Home Tech</span>
                <span class="material-symbols-outlined text-on-surface-variant group-hover:text-secondary text-sm">trending_up</span>
              </a></li>
            </ul>
          </div>
          <div class="bg-surface rounded-xl p-4 shadow-sm">
            <h2 class="font-title-lg text-on-surface mb-4">Recently Added</h2>
            <ul class="flex flex-col gap-1">
              <li><a class="flex items-center gap-3 py-2 hover:bg-surface-container rounded-lg px-2 transition-colors cursor-pointer">
                <div class="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center flex-shrink-0">
                  <span class="material-symbols-outlined text-on-secondary-container text-sm">new_releases</span>
                </div>
                <span class="font-body-md text-on-surface truncate">Organic Skincare Lines</span>
              </a></li>
              <li><a class="flex items-center gap-3 py-2 hover:bg-surface-container rounded-lg px-2 transition-colors cursor-pointer">
                <div class="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center flex-shrink-0">
                  <span class="material-symbols-outlined text-on-secondary-container text-sm">new_releases</span>
                </div>
                <span class="font-body-md text-on-surface truncate">Vintage Audio Gear</span>
              </a></li>
            </ul>
          </div>
        </aside>

        <!-- Category Grid -->
        <div class="flex-grow">
          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <a class="group relative flex flex-col bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-[320px] cursor-pointer fade-in-up delay-1">
              <div class="relative h-[60%] w-full overflow-hidden">
                <img class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBS39uMHoNxYYu1C8Bwpvsue40KQ9WhZmQhlcH7_pitEhhYLzqo0CBh4XRt0-olA0WiD3PVnclJ0kV-1OIdfSsd_1IoC7aLWzl_i5CNTjnhcYD4aMABHoee17O_Y6fVKMMgYV9puVmgLBIJO9-SC0xX9utD_SdhNNoRyWXC_Q_OIvH3Bi5o2Ifd1x3iOat11SNJ-YSZeZMdnTdEUd88f89SxlPaYVjTVDcz1cnsDW42RO0JehsU7GVNsA"
                  alt="Electronics category">
                <div class="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80"></div>
              </div>
              <div class="relative flex flex-col flex-grow p-4 bg-surface">
                <div class="flex justify-between items-start mb-2">
                  <h3 class="font-headline-md text-on-surface tracking-tight group-hover:text-secondary transition-colors">Electronics</h3>
                  <span class="inline-flex items-center px-2 py-1 bg-surface-container-highest rounded-full font-label-sm text-on-surface">1.2k+ items</span>
                </div>
                <p class="font-body-md text-on-surface-variant line-clamp-2 text-sm">Latest gadgets, audio gear, and smart home essentials from top verified vendors.</p>
                <div class="mt-auto pt-3 flex items-center text-secondary font-label-md group-hover:translate-x-1 transition-transform">
                  Explore <span class="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                </div>
              </div>
            </a>
            <a class="group relative flex flex-col bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-[320px] cursor-pointer fade-in-up delay-2">
              <div class="relative h-[60%] w-full overflow-hidden">
                <img class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL7qiUqE0hj8rUBBiAi9a_ZxB6_Bf8QCvWZLLuEnrDxP7DDzx5YoTNckG8QF5WfvLE1MiCPbYbLW_6x5XIvbXbeaa8UBirbxnve4GUgT5C_QdX9UGSE61FIHvhlWWzyIMB7iNpaCtM3YKer-aWGxFEuGI8rOv3f7wr-fHO9zP1aRXl6CXiIHseYKF4A_YBhtqlSfbsVzz6hephy_IP0qmnSgpndQaZKeRdvLG4QAxuEhipR8_xrY1TXA"
                  alt="Fashion category">
                <div class="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80"></div>
              </div>
              <div class="relative flex flex-col flex-grow p-4 bg-surface">
                <div class="flex justify-between items-start mb-2">
                  <h3 class="font-headline-md text-on-surface tracking-tight group-hover:text-secondary transition-colors">Fashion</h3>
                  <span class="inline-flex items-center px-2 py-1 bg-surface-container-highest rounded-full font-label-sm text-on-surface">850 shops</span>
                </div>
                <p class="font-body-md text-on-surface-variant line-clamp-2 text-sm">Boutique apparel, artisanal leather goods, and sustainable clothing brands.</p>
                <div class="mt-auto pt-3 flex items-center text-secondary font-label-md group-hover:translate-x-1 transition-transform">
                  Explore <span class="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                </div>
              </div>
            </a>
            <a class="group relative flex flex-col bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-[320px] cursor-pointer fade-in-up delay-3">
              <div class="relative h-[60%] w-full overflow-hidden">
                <img class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFdmX3gB8If3E0KUhZfzAb2wrgAXX_mM-WaGqe3NlUR3YbGYz1LfsHQnF0V2OOEDS6n0v4t4P0K6bJHIAxd8_f6I66ZLohZeAgxyx9IZfn-PsC-jZztV7bmbMwz9AdpVhR90uYZ3sjfcKkkFLI_zOQp-MJcfatats6rRL4MLQ6JP55F01pm_dMjTXC0j6nSTngXSGwkYvoChf-3lUeL2dovOoA88pfsiyabVnWaImQCNf63yCjbmzCTA"
                  alt="Home Decor category">
                <div class="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80"></div>
              </div>
              <div class="relative flex flex-col flex-grow p-4 bg-surface">
                <div class="flex justify-between items-start mb-2">
                  <h3 class="font-headline-md text-on-surface tracking-tight group-hover:text-secondary transition-colors">Home Decor</h3>
                  <span class="inline-flex items-center px-2 py-1 bg-surface-container-highest rounded-full font-label-sm text-on-surface">500+ items</span>
                </div>
                <p class="font-body-md text-on-surface-variant line-clamp-2 text-sm">Unique furniture pieces, handcrafted ceramics, and aesthetic room accents.</p>
                <div class="mt-auto pt-3 flex items-center text-secondary font-label-md group-hover:translate-x-1 transition-transform">
                  Explore <span class="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                </div>
              </div>
            </a>
            <a class="group relative flex flex-col bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-[320px] cursor-pointer fade-in-up delay-4">
              <div class="relative h-[60%] w-full overflow-hidden">
                <img class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPqw9f67LJQS3bwwVFMSOghtVE4ZNMO1xQ0J67_tgDFa34f5JHrdV-2JA8zCrcMoqq1dtonqROtPvVLAyoTI_mAgyakVaMOdku6HoXEun9ODz3Y5ZvN6vONBGf-gjPn297lfkiR2wle2UYkHVyZvKgqr28IxQxDsxpCEnDwVLX6L3amQyEcWh86as_wjgNFH-xF4eysMfPzkoGwyDkcg2eYj4uu4oAl0SlcNZN9S1dnJ8U27o06a4zRw"
                  alt="Handmade category">
                <div class="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80"></div>
              </div>
              <div class="relative flex flex-col flex-grow p-4 bg-surface">
                <div class="flex justify-between items-start mb-2">
                  <h3 class="font-headline-md text-on-surface tracking-tight group-hover:text-secondary transition-colors">Handmade</h3>
                  <span class="inline-flex items-center px-2 py-1 bg-surface-container-highest rounded-full font-label-sm text-on-surface">320 shops</span>
                </div>
                <p class="font-body-md text-on-surface-variant line-clamp-2 text-sm">One-of-a-kind bespoke creations crafted by independent artisans globally.</p>
                <div class="mt-auto pt-3 flex items-center text-secondary font-label-md group-hover:translate-x-1 transition-transform">
                  Explore <span class="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                </div>
              </div>
            </a>
            <a class="group relative flex flex-col bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-[320px] cursor-pointer fade-in-up delay-5">
              <div class="relative h-[60%] w-full overflow-hidden">
                <img class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1mHb8CYeNjbavuM5y-s7x3dUBwdlbmL1CaoMNol6oi6p9e4ngLLjIeCwRAmKeqSKBdgBG_plVuUcV9MMJyxuz4985C1tmvKxg2yTN6QoE9pV7Y3T0ETIiiX54XZZr7E5oFEbzGs7y0KDcTFC8UI9FMsf-PVqJmnU2VT-bjkjyvDy6Ta751kqEnsUlDPq2GaDypiJaGzMAPReXf-oUfB6wYmFgCf_wsNwMhmfQpX2o20iTd2jdSrI1gQ"
                  alt="Beauty category">
                <div class="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80"></div>
              </div>
              <div class="relative flex flex-col flex-grow p-4 bg-surface">
                <div class="flex justify-between items-start mb-2">
                  <h3 class="font-headline-md text-on-surface tracking-tight group-hover:text-secondary transition-colors">Beauty</h3>
                  <span class="inline-flex items-center px-2 py-1 bg-surface-container-highest rounded-full font-label-sm text-on-surface">450+ items</span>
                </div>
                <p class="font-body-md text-on-surface-variant line-clamp-2 text-sm">Premium cosmetics, organic skincare, and holistic wellness products.</p>
                <div class="mt-auto pt-3 flex items-center text-secondary font-label-md group-hover:translate-x-1 transition-transform">
                  Explore <span class="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                </div>
              </div>
            </a>
            <a class="group relative flex flex-col bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-[320px] cursor-pointer fade-in-up delay-6">
              <div class="relative h-[60%] w-full overflow-hidden">
                <img class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJxyJHexEh4Oa_hFl7qMhjckN9Qk6V_4rVp518CeCZ4k1-joKrSJFZ7EBoHfziC3EUx_4WZhBfp03BPaLM4j6LO5eXA-c4YLczmO9vfAECT7sZTroWmVHLvPKPxlJ9WUMkVJyC-YBgxs-GcL-CAztl4jOXtOwU9DvmzVBbKbn0JTzvc4k31l2CuisKtAPoXkaCSia-OTNXSbG-eMFP1zBnbj8bScLKiZ4JyDYmnBk6hIoSfEuilPE-jw"
                  alt="Art and Collectibles category">
                <div class="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80"></div>
              </div>
              <div class="relative flex flex-col flex-grow p-4 bg-surface">
                <div class="flex justify-between items-start mb-2">
                  <h3 class="font-headline-md text-on-surface tracking-tight group-hover:text-secondary transition-colors">Art & Collectibles</h3>
                  <span class="inline-flex items-center px-2 py-1 bg-surface-container-highest rounded-full font-label-sm text-on-surface">180 shops</span>
                </div>
                <p class="font-body-md text-on-surface-variant line-clamp-2 text-sm">Original artworks, limited edition prints, and curated vintage finds.</p>
                <div class="mt-auto pt-3 flex items-center text-secondary font-label-md group-hover:translate-x-1 transition-transform">
                  Explore <span class="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ══════════════════════════
  PAGE: DEALS
  ══════════════════════════ -->
  <div class="page-view" id="page-deals">
    <div class="inner-page-content pb-20 lg:pb-0">

      <section class="w-full relative overflow-hidden bg-surface">
        <div class="w-full h-[500px] bg-cover bg-center absolute top-0 left-0"
          style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuB2jyt12ATPyz1zutKcbDU08fXkBJIaVqGcWWxKetpfD-yys2oIHv3jCM3hieGS_kSHgugcz9PR53o7Ur6DLd9KvuLmuYRPxjl9FRu67Af-NjP8DAphTh2bP3Tj2rZAWomUhovGdCX2rtf3HYyWu8Z4UaJm3V8bgXdkxI_DX734_DGvTcEIYwwcywwgbUFGrtFoKBAsvLQ6r8q2kYB-kYkx3UrCRzASIGKnYE7dcKMV06cD2uEKWQd4xg')">
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/70 to-surface-container-lowest/10"></div>
        <div class="pt-[340px] pb-8 px-6 lg:px-10 relative z-10 w-full max-w-container-max mx-auto flex flex-col items-center text-center">
          <span class="inline-block py-1 px-3 bg-secondary text-on-secondary rounded-full font-label-sm uppercase tracking-widest mb-4 shadow-lg shadow-secondary/20">Seasonal Sale</span>
          <h1 class="font-display-lg text-display-lg text-on-background max-w-2xl">Elevate Your Space.<br><span class="text-secondary">Up to 50% Off.</span></h1>
          <p class="font-body-lg text-body-lg text-on-surface-variant mt-4 max-w-xl">Curated collections from our top merchants, now at unmissable prices.</p>
        </div>
      </section>

      <div class="sticky top-14 lg:top-16 z-40 bg-surface-container-lowest/90 backdrop-blur-xl py-3 px-4 lg:px-10 shadow-sm">
        <div class="max-w-container-max mx-auto flex items-center justify-between gap-4">
          <div class="flex items-center gap-2 overflow-x-auto py-1">
            <button class="deal-pill pill-active shrink-0 px-4 py-2 rounded-full font-label-md text-label-md transition-all hover:scale-105">All Deals</button>
            <button class="deal-pill shrink-0 px-4 py-2 bg-surface-container text-on-surface-variant rounded-full font-label-md transition-colors hover:bg-surface-variant">Electronics</button>
            <button class="deal-pill shrink-0 px-4 py-2 bg-surface-container text-on-surface-variant rounded-full font-label-md transition-colors hover:bg-surface-variant">Fashion</button>
            <button class="deal-pill shrink-0 px-4 py-2 bg-surface-container text-on-surface-variant rounded-full font-label-md transition-colors hover:bg-surface-variant">Home Decor</button>
            <button class="deal-pill shrink-0 px-4 py-2 bg-surface-container text-on-surface-variant rounded-full font-label-md transition-colors hover:bg-surface-variant">Vintage</button>
            <button class="deal-pill shrink-0 px-4 py-2 bg-surface-container text-on-surface-variant rounded-full font-label-md transition-colors hover:bg-surface-variant">Handmade</button>
          </div>
        </div>
      </div>

      <section class="max-w-container-max mx-auto px-4 lg:px-10 py-8">
        <div class="flex items-end justify-between mb-6">
          <div>
            <h2 class="font-headline-lg text-headline-lg text-on-background flex items-center gap-3 flex-wrap">
              Flash Sales
              <span class="flex items-center gap-1 bg-error/10 text-error px-2 py-1 rounded-md font-label-sm">
                <span class="material-symbols-outlined text-[16px] pulse-soft">timer</span>
                <span id="countdown-display">04:12:39</span>
              </span>
            </h2>
            <p class="font-body-md text-on-surface-variant mt-1">Incredible prices, gone in a flash.</p>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="group bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden fade-in-up delay-1">
            <div class="relative h-[220px] w-full overflow-hidden bg-surface-container">
              <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb79A5HWQLyTIxXkQx5ezodKBPvZ3zPzlvdqrmteHD3OSR76YiqPQK-s6UmxkK5EKM22LsnMPO6uCgPhJ19pBkjKMuJGyOvxcmopfLNh9PV7TtgT9XXdRjErk9-o_kQkYIj9jZtjIj_SQOGbSABHlpe7NuCZeWHXA9OYXIGcxqbrexIdddOZhDsMbP_NWVnbfR392Vm8qnTQRQPHv14vERlRu5-tc_0uw_iLVYp0rn2GrZ1Smv7E2YLw"
                alt="Obsidian Pro Smartwatch">
              <div class="absolute top-3 left-3 bg-error text-on-error px-2 py-1 rounded font-label-sm shadow-md">-35%</div>
            </div>
            <div class="p-4 flex flex-col flex-grow">
              <span class="font-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Tech Haven</span>
              <h3 class="font-title-lg text-on-background mb-2 line-clamp-2">Obsidian Pro Smartwatch</h3>
              <div class="mt-auto flex items-end justify-between">
                <div>
                  <span class="font-body-md text-on-surface-variant line-through opacity-70">$299.00</span>
                  <span class="font-headline-md text-secondary font-bold">$194.35</span>
                </div>
                <button class="add-to-cart w-10 h-10 bg-primary text-on-primary rounded-full flex items-center justify-center hover:bg-secondary transition-colors shadow-md hover:scale-110 active:scale-95">
                  <span class="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                </button>
              </div>
            </div>
            <div class="w-full bg-surface-variant h-1.5">
              <div class="bg-error h-full rounded-r" style="width: 85%;"></div>
            </div>
            <div class="px-4 pb-3 pt-2 flex justify-between items-center">
              <span class="font-label-sm text-on-surface-variant">85% Claimed</span>
              <span class="font-label-sm text-error font-bold">Almost Gone</span>
            </div>
          </div>
          <div class="group bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden fade-in-up delay-2">
            <div class="relative h-[220px] w-full overflow-hidden bg-surface-container">
              <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwrJ_9oiKy4UB-GFoilg3ig0mIT_vAYOgS9UAJYEL1OZPzvAdOIQdO8Rh_3fJee5vX4_2VPfTQfFYOxyGRCDKF4PXr05GokdrsagJD1E39L07RsSMftb-iUH4cMs5v9xxVfZP3sIy8783r57e0HjxusEIS82qPeId5xlm5ITJM_oaPck0ObVhwGgtw5cVckMPyDsZ6gHt87Gy4nI7wrFyvY5V_9Yw3p8jRgNSb9yUMpvX9STWWZ3-_ug"
                alt="Kyoto Pour-Over Set">
              <div class="absolute top-3 left-3 bg-error text-on-error px-2 py-1 rounded font-label-sm shadow-md">-20%</div>
            </div>
            <div class="p-4 flex flex-col flex-grow">
              <span class="font-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Artisan Goods</span>
              <h3 class="font-title-lg text-on-background mb-2 line-clamp-2">Kyoto Ceramic Pour-Over Set</h3>
              <div class="mt-auto flex items-end justify-between">
                <div>
                  <span class="font-body-md text-on-surface-variant line-through opacity-70">$120.00</span>
                  <span class="font-headline-md text-secondary font-bold">$96.00</span>
                </div>
                <button class="add-to-cart w-10 h-10 bg-primary text-on-primary rounded-full flex items-center justify-center hover:bg-secondary transition-colors shadow-md hover:scale-110 active:scale-95">
                  <span class="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                </button>
              </div>
            </div>
            <div class="w-full bg-surface-variant h-1.5">
              <div class="bg-error h-full rounded-r" style="width: 45%;"></div>
            </div>
            <div class="px-4 pb-3 pt-2 flex justify-between items-center">
              <span class="font-label-sm text-on-surface-variant">45% Claimed</span>
              <span class="font-label-sm text-on-surface-variant">Selling Fast</span>
            </div>
          </div>
          <div class="group bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden fade-in-up delay-3">
            <div class="relative h-[220px] w-full overflow-hidden bg-surface-container">
              <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVx_cKwBwAuXcLK0oTzk_BM7YTJRf1BtwH36cBxo9YlzL1r31CYLPfKUo_tCJsHk7S-hRpICa06-uek70Rom8VwpGwPNvhhaqUs2anx2DqRKrRq3OL3oPQitrn-3gNk1HNZMxqLT5QnYbAeIp7UX2MPYCX-fZw6FNS420PgF1h0CQ5Is8_HzSdk15s2r0Z5Zpbn4Ui-ayxoim0e6aAIDEsKbUA8KiGNZbvRi-jYBD6so-a-iUDx9aQ3g"
                alt="Mechanical Keyboard">
              <div class="absolute top-3 left-3 bg-error text-on-error px-2 py-1 rounded font-label-sm shadow-md">-15%</div>
            </div>
            <div class="p-4 flex flex-col flex-grow">
              <span class="font-label-sm text-on-surface-variant uppercase tracking-wider mb-1">KeyChroniks</span>
              <h3 class="font-title-lg text-on-background mb-2 line-clamp-2">Slate 65% Mechanical Board</h3>
              <div class="mt-auto flex items-end justify-between">
                <div>
                  <span class="font-body-md text-on-surface-variant line-through opacity-70">$150.00</span>
                  <span class="font-headline-md text-secondary font-bold">$127.50</span>
                </div>
                <button class="add-to-cart w-10 h-10 bg-primary text-on-primary rounded-full flex items-center justify-center hover:bg-secondary transition-colors shadow-md hover:scale-110 active:scale-95">
                  <span class="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                </button>
              </div>
            </div>
            <div class="w-full bg-surface-variant h-1.5">
              <div class="bg-secondary h-full rounded-r" style="width: 12%;"></div>
            </div>
            <div class="px-4 pb-3 pt-2 flex justify-between items-center">
              <span class="font-label-sm text-on-surface-variant">12% Claimed</span>
              <span class="font-label-sm text-on-surface-variant">Available</span>
            </div>
          </div>
          <div class="group bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden fade-in-up delay-4">
            <div class="relative h-[220px] w-full overflow-hidden bg-surface-container">
              <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdZpCsSCnqHMubh_MNEZaLFzVUBB2Oq0hFdX48e1O-gCE_lmhfmfG90hGduiKHlxizRNGIoJeFL6ZabNfqzDIixpNnpUj3gs3VIxKy3MilLJV0PmLHm17qgxpST88Y823-u41xFArn6cW9YWfNGZuYHG6_hXA26Q5_I74m3yZzdjWykyi-zRX11Uy1U1ku2gcHz_Rah-TBYPJVEuusKT_L6jSzT0xmmZxC1Stlng4Q9jk9lVdEeRKs_w"
                alt="Merino Wool Throw">
              <div class="absolute top-3 left-3 bg-error text-on-error px-2 py-1 rounded font-label-sm shadow-md">-50%</div>
            </div>
            <div class="p-4 flex flex-col flex-grow">
              <span class="font-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Loom & Weave</span>
              <h3 class="font-title-lg text-on-background mb-2 line-clamp-2">Chunky Merino Wool Throw</h3>
              <div class="mt-auto flex items-end justify-between">
                <div>
                  <span class="font-body-md text-on-surface-variant line-through opacity-70">$280.00</span>
                  <span class="font-headline-md text-secondary font-bold">$140.00</span>
                </div>
                <button class="add-to-cart w-10 h-10 bg-primary text-on-primary rounded-full flex items-center justify-center hover:bg-secondary transition-colors shadow-md hover:scale-110 active:scale-95">
                  <span class="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                </button>
              </div>
            </div>
            <div class="w-full bg-surface-variant h-1.5">
              <div class="bg-error h-full rounded-r" style="width: 98%;"></div>
            </div>
            <div class="px-4 pb-3 pt-2 flex justify-between items-center">
              <span class="font-label-sm text-error font-bold">98% Claimed</span>
              <span class="font-label-sm text-error font-bold">Last Chance!</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>

  <!-- ══════════════════════════
  PAGE: VENDORS
  ══════════════════════════ -->
  <div class="page-view" id="page-vendors">
    <div class="inner-page-content pb-20 lg:pb-0">
      <div class="px-4 lg:px-10 py-8 max-w-container-max mx-auto w-full">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4">
          <div>
            <h1 class="font-headline-lg text-headline-lg lg:font-display-lg lg:text-display-lg text-on-background mb-2">Browse Vendors</h1>
            <p class="font-body-lg text-on-surface-variant max-w-2xl">Discover unique goods from our verified community of independent vendors.</p>
          </div>
        </div>
        <div class="flex gap-2 overflow-x-auto pb-3 mb-6 snap-x snap-mandatory">
          <button class="vendor-pill pill-active snap-start flex-shrink-0 px-5 py-2 rounded-full font-label-md transition-all hover:scale-105">All Vendors</button>
          <button class="vendor-pill snap-start flex-shrink-0 px-5 py-2 bg-surface-container text-on-surface rounded-full font-label-md hover:bg-surface-variant transition-colors">Handmade</button>
          <button class="vendor-pill snap-start flex-shrink-0 px-5 py-2 bg-surface-container text-on-surface rounded-full font-label-md hover:bg-surface-variant transition-colors">Vintage</button>
          <button class="vendor-pill snap-start flex-shrink-0 px-5 py-2 bg-surface-container text-on-surface rounded-full font-label-md hover:bg-surface-variant transition-colors">Apparel</button>
          <button class="vendor-pill snap-start flex-shrink-0 px-5 py-2 bg-surface-container text-on-surface rounded-full font-label-md hover:bg-surface-variant transition-colors">Home Goods</button>
          <button class="vendor-pill snap-start flex-shrink-0 px-5 py-2 bg-surface-container text-on-surface rounded-full font-label-md hover:bg-surface-variant transition-colors">Artisanal Food</button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Clay & Kin -->
          <div class="bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col group fade-in-up delay-1">
            <div class="h-44 w-full relative overflow-hidden bg-surface-container">
              <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe6vrZgwnUnjmi85qCKrhwjfIHc8cxvoVLo0iO9A2AEFCULpDUFx1-PdhL4YwLlg64o5CeOd10jF3AYe06kEBxbx_kZk4g4n5agmTL7eUoCNwKm0TmYy3epNLpdvj893nbgHpbuaVN5d_GmXVauhp9m6iU2M188DKZEWAE6Nt3yjJWlPbgXtCKUNQak6XOoK3lttzxeDRkLF5XGmpEWEDX3yZJPoA_e6s6_rf7PvIrZtysiSdJn0cf1Q"
                alt="Clay and Kin ceramics">
              <div class="absolute top-3 right-3 px-2 py-1 rounded bg-surface/90 backdrop-blur-sm font-label-sm">Handmade</div>
            </div>
            <div class="px-5 pb-5 pt-4 relative flex-1 flex flex-col">
              <div class="absolute -top-9 left-5 w-16 h-16 rounded-full overflow-hidden border-4 border-surface bg-surface-variant shadow-sm z-10">
                <img class="w-full h-full object-cover" loading="lazy"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWc7s5SMmNTQt5TpFB2BKWK1_HRXelieB89r0J_uxT8Egz5EEeNgLaFxlK0UXs-Uxai3kYLKZjaCogqcU1CV1ExxyM7vE0e6-gAE1DWOFdCEecILswcJYwFZ5mi5DR9VcwVDl77O0J34Yo19LRm7Z_bmhF8EWpTSUOhAkbjhF5OtN1prKHQJA_1cMaqsedEqS3d-9PM--V6NGsY83V9yPW7ilXW4ivgB2r4Q2tG6ZO5lL87IyGS9KhFA"
                  alt="Clay and Kin artisan">
              </div>
              <div class="mt-8 mb-3">
                <div class="flex justify-between items-start mb-1">
                  <h3 class="font-title-lg text-on-surface truncate pr-2">Clay & Kin</h3>
                  <div class="flex items-center gap-1 text-secondary flex-shrink-0">
                    <span class="material-symbols-outlined text-[14px]" style="font-variation-settings:'FILL' 1">star</span>
                    <span class="font-label-md font-bold">4.9</span>
                  </div>
                </div>
                <p class="font-body-md text-on-surface-variant text-sm line-clamp-2">Small-batch functional ceramics designed for daily rituals. Fired in our solar-powered kiln.</p>
              </div>
              <div class="mt-auto">
                <button onclick="openVendorDetail('clay-kin')" class="w-full py-2.5 rounded-lg border-2 border-outline-variant text-on-surface font-label-md hover:border-secondary hover:text-secondary transition-colors flex items-center justify-center gap-2">
                  View Collection <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
          <!-- Horology Haus -->
          <div class="bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col group fade-in-up delay-2">
            <div class="h-44 w-full relative overflow-hidden bg-surface-container">
              <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9Jmc6JK3X79keqQVflll135Sc7ihED9cVdwZt4wdQ5OCCXPQML-ALu9nVF6JOTrqoudLGA1s0xGs6lLrIVd1US9o8MbN7Xxi9KuD1e7XHid5y3XjwB3qymbKo-PIZ_ytdjgZwWcBVSgALU6PlRyWGdKI8gDfSbObFjpCH4ob9e9zggr5qfdlq0fFzuwxqMatpcQA3kyp5bLa0Pl6Yxxg71-ySUYgj9YiMQR6SvNHLo8HU6G9WeNrHTA"
                alt="Horology Haus watches">
              <div class="absolute top-3 right-3 px-2 py-1 rounded bg-surface/90 backdrop-blur-sm font-label-sm">Vintage</div>
            </div>
            <div class="px-5 pb-5 pt-4 relative flex-1 flex flex-col">
              <div class="absolute -top-9 left-5 w-16 h-16 rounded-full overflow-hidden border-4 border-surface bg-surface-variant shadow-sm z-10">
                <img class="w-full h-full object-cover" loading="lazy"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr4roiCD5FjaKoyi-hgKn6UIqcl9Znd1qAJBrjQO79uoxGOXb3RpfQaWZ8GOQ7dQ6syBFFjhFMWcFED7g6jIL2uI3b2YIrUGq0abFP9c-2UHkGcyh9_zLSJ417oydZkqcxlTH5fA3OQb7ec5AZKAmfOxTYpQ8NLnJKzYMRRpoUUaLbZqFMwdJXA96C0J_coV6UvS33DeICAgMJsDnMAnrE-pFfdVU5-XNzqnXGFob2bs0B-m_gXd5IUw"
                  alt="Watchmaker">
              </div>
              <div class="mt-8 mb-3">
                <div class="flex justify-between items-start mb-1">
                  <h3 class="font-title-lg text-on-surface truncate pr-2">Horology Haus</h3>
                  <div class="flex items-center gap-1 text-secondary flex-shrink-0">
                    <span class="material-symbols-outlined text-[14px]" style="font-variation-settings:'FILL' 1">star</span>
                    <span class="font-label-md font-bold">4.8</span>
                  </div>
                </div>
                <p class="font-body-md text-on-surface-variant text-sm line-clamp-2">Curated vintage timepieces from the 1950s–1980s. Fully serviced by certified watchmakers.</p>
              </div>
              <div class="mt-auto">
                <button onclick="openVendorDetail('horology-haus')" class="w-full py-2.5 rounded-lg border-2 border-outline-variant text-on-surface font-label-md hover:border-secondary hover:text-secondary transition-colors flex items-center justify-center gap-2">
                  View Collection <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
          <!-- Thread & Form -->
          <div class="bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col group fade-in-up delay-3">
            <div class="h-44 w-full relative overflow-hidden bg-surface-container">
              <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEW82vC8DQxH_F6MdgxIS0u9HHEl-JD1KpjJaFtkXLQQ2VF9Iq5xgwPet2fpAXFFD5knJaZ_fuaeJq-UH6DYYoZ74vreX2PaV3vDmGRem1rorbRN1Uh7IpAFtJubt3vkcp5wPBMcROZytbN7iyUpbCd3CZe5FvVAPz6neJv5h0OMyYJqo9Q1glWLT9dxlK8nuOAKyDfeIuuoNdOZBo35fcn9FQ_-iqz3kfUo-v0_cd4xbnzLhbO3FknA"
                alt="Thread and Form apparel">
              <div class="absolute top-3 right-3 px-2 py-1 rounded bg-surface/90 backdrop-blur-sm font-label-sm">Apparel</div>
            </div>
            <div class="px-5 pb-5 pt-4 relative flex-1 flex flex-col">
              <div class="absolute -top-9 left-5 w-16 h-16 rounded-full overflow-hidden border-4 border-surface bg-surface-variant shadow-sm z-10">
                <img class="w-full h-full object-cover" loading="lazy"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoDuSBi3C_VJaPQ-9Sv1tWg1v2bjTlTtPISvqvcwLxdqcf1AsCgWQo6CChZRna-vZ8rqPkikGFfDesRIefguybznV6ZgQw3QiyxbmBnIfe_J6E4r1Le3K9QrpBT84AKwY-yh4aIjC2A9hOTS_sHcdXIycoWOySxekt5XIaSwQBQ9CZNCN6hrs-kHY0TX9KqJIG9TcTP8tgTEwzrlFCB1b_lj_1gjs_sVWpGvZuGuBfo1Y3Eve8vvUBFg"
                  alt="Fashion vendor">
              </div>
              <div class="mt-8 mb-3">
                <div class="flex justify-between items-start mb-1">
                  <h3 class="font-title-lg text-on-surface truncate pr-2">Thread & Form</h3>
                  <div class="flex items-center gap-1 text-secondary flex-shrink-0">
                    <span class="material-symbols-outlined text-[14px]" style="font-variation-settings:'FILL' 1">star</span>
                    <span class="font-label-md font-bold">5.0</span>
                  </div>
                </div>
                <p class="font-body-md text-on-surface-variant text-sm line-clamp-2">Sustainable, ethically produced everyday wear focused on natural fibers and timeless silhouettes.</p>
              </div>
              <div class="mt-auto">
                <button onclick="openVendorDetail('thread-form')" class="w-full py-2.5 rounded-lg border-2 border-outline-variant text-on-surface font-label-md hover:border-secondary hover:text-secondary transition-colors flex items-center justify-center gap-2">
                  View Collection <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-8 flex justify-center">
          <button class="px-8 py-3 rounded-full bg-surface-container text-on-surface font-label-md hover:bg-surface-container-high hover:scale-105 transition-all active:scale-95 flex items-center gap-2">
            <span class="material-symbols-outlined text-[20px]">refresh</span>
            Load More Vendors
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- ══════════════════════════
  PAGE: PORTAL (Auth Portal)
  ══════════════════════════ -->
  <div class="page-view" id="page-portal">
    <div class="inner-page-content pb-20 lg:pb-0 min-h-full relative">

      <!-- Background -->
      <div class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCPjUapr2YfRoG8coObGef_RWXsD-ObBz9M_5HVckSwTzVca2PK4AwmIm1AO0L5S0OUhwL1vMdEy5myEyCUQCULOCb6znAo1JtDT-QXqnSI9laNrXyq_5vly-KBkMEjwTxqyOApC5-qQlONvwdgYtHooyQCpx83SihjyGmcDZT4_4ocyaLMLSG0HpCVIF4lzfMT-mH13nNfUj0mTZtZIDXqhEKg2oG9S0PPKOgygEDf82aNV4CRs9YO8w')">
      </div>
      <div class="absolute inset-0 bg-surface/75 backdrop-blur-sm"></div>

      <!-- Logged-out view -->
      <div id="portal-auth-view" class="relative z-10 flex items-center justify-center min-h-screen px-4 py-12">
        <div class="w-full max-w-md">

          <!-- Card -->
          <div class="bg-surface-container-lowest rounded-2xl shadow-2xl overflow-hidden">

            <!-- Top accent bar -->
            <div class="h-1 w-full bg-gradient-to-r from-secondary via-secondary-fixed-dim to-secondary"></div>

            <div class="p-8">
              <!-- Logo -->
              <div class="text-center mb-6">
                <span class="text-title-lg font-bold text-on-background tracking-tight">T-SHOP</span>
                <p class="text-label-md text-on-surface-variant mt-1">Your personal marketplace portal</p>
              </div>

              <!-- Tab switcher -->
              <div class="flex border-b border-outline-variant mb-6">
                <button id="tab-login" class="auth-tab active-tab flex-1 py-3 font-label-md text-label-md transition-colors" onclick="switchAuthTab('login')">Sign In</button>
                <button id="tab-signup" class="auth-tab flex-1 py-3 font-label-md text-label-md text-on-surface-variant transition-colors" onclick="switchAuthTab('signup')">Create Account</button>
              </div>

              <!-- Login Form -->
              <div id="auth-login-form">
                <!-- User type toggle -->
                <div class="flex bg-surface-container p-1 rounded-xl mb-5">
                  <button id="login-type-customer" class="flex-1 py-2 rounded-lg font-label-md text-label-md bg-surface-container-lowest shadow-sm text-on-surface transition-all" onclick="setLoginType('customer')">Customer</button>
                  <button id="login-type-vendor" class="flex-1 py-2 rounded-lg font-label-md text-label-md text-on-surface-variant transition-all" onclick="setLoginType('vendor')">Vendor</button>
                </div>

                <form id="login-form-el" class="flex flex-col gap-4">
                  <div>
                    <label class="block font-label-md text-label-md text-on-surface mb-1.5" for="login-email">Email address</label>
                    <div class="relative">
                      <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] pointer-events-none">mail</span>
                      <input id="login-email" type="email" placeholder="you@example.com"
                        class="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl font-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-shadow">
                    </div>
                  </div>
                  <div>
                    <div class="flex justify-between items-center mb-1.5">
                      <label class="block font-label-md text-label-md text-on-surface" for="login-password">Password</label>
                      <a href="#" class="font-label-sm text-secondary hover:text-primary transition-colors">Forgot password?</a>
                    </div>
                    <div class="relative">
                      <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] pointer-events-none">lock</span>
                      <input id="login-password" type="password" placeholder="••••••••"
                        class="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl font-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-shadow">
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <input id="login-remember" type="checkbox" class="w-4 h-4 rounded accent-secondary cursor-pointer">
                    <label for="login-remember" class="font-body-md text-sm text-on-surface-variant cursor-pointer select-none">Remember me for 30 days</label>
                  </div>
                  <button type="button" id="login-submit-btn" onclick="handleLogin()"
                    class="w-full h-12 bg-secondary text-on-secondary rounded-xl font-label-md shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all active:translate-y-0 flex items-center justify-center gap-2 group mt-1">
                    Sign In
                    <span class="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </form>

                <p class="text-center font-body-md text-sm text-on-surface-variant mt-5">
                  Don't have an account?
                  <button onclick="switchAuthTab('signup')" class="text-secondary font-semibold hover:text-primary transition-colors ml-1">Create one</button>
                </p>
              </div>

              <!-- Signup Form -->
              <div id="auth-signup-form" class="hidden">
                <!-- User type toggle -->
                <div class="flex bg-surface-container p-1 rounded-xl mb-5">
                  <button id="signup-type-customer" class="flex-1 py-2 rounded-lg font-label-md text-label-md bg-surface-container-lowest shadow-sm text-on-surface transition-all" onclick="setSignupType('customer')">Customer</button>
                  <button id="signup-type-vendor" class="flex-1 py-2 rounded-lg font-label-md text-label-md text-on-surface-variant transition-all" onclick="setSignupType('vendor')">Vendor</button>
                </div>

                <!-- Customer signup fields -->
                <form id="signup-customer-fields" class="flex flex-col gap-4">
                  <div>
                    <label class="block font-label-md text-label-md text-on-surface mb-1.5" for="signup-name">Full Name</label>
                    <div class="relative">
                      <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] pointer-events-none">person</span>
                      <input id="signup-name" type="text" placeholder="Jane Doe"
                        class="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl font-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-shadow">
                    </div>
                  </div>
                  <div>
                    <label class="block font-label-md text-label-md text-on-surface mb-1.5" for="signup-email">Email address</label>
                    <div class="relative">
                      <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] pointer-events-none">mail</span>
                      <input id="signup-email" type="email" placeholder="jane@example.com"
                        class="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl font-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-shadow">
                    </div>
                  </div>
                  <div>
                    <label class="block font-label-md text-label-md text-on-surface mb-1.5" for="signup-pass">Password</label>
                    <div class="relative">
                      <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] pointer-events-none">lock</span>
                      <input id="signup-pass" type="password" placeholder="Create a password"
                        class="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl font-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-shadow">
                    </div>
                  </div>
                  <button type="button" onclick="handleSignup()"
                    class="w-full h-12 bg-primary text-on-primary rounded-xl font-label-md shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all active:translate-y-0 flex items-center justify-center gap-2 group mt-1">
                    Create Account
                    <span class="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </form>

                <!-- Vendor signup fields -->
                <form id="signup-vendor-fields" class="flex-col gap-4 hidden">
                  <div>
                    <label class="block font-label-md text-label-md text-on-surface mb-1.5" for="signup-shop">Shop Name</label>
                    <div class="relative">
                      <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] pointer-events-none">storefront</span>
                      <input id="signup-shop" type="text" placeholder="My Awesome Boutique"
                        class="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl font-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-shadow">
                    </div>
                  </div>
                  <div>
                    <label class="block font-label-md text-label-md text-on-surface mb-1.5" for="signup-biz-email">Business Email</label>
                    <div class="relative">
                      <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] pointer-events-none">mail</span>
                      <input id="signup-biz-email" type="email" placeholder="hello@boutique.com"
                        class="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl font-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-shadow">
                    </div>
                  </div>
                  <div>
                    <label class="block font-label-md text-label-md text-on-surface mb-1.5" for="signup-vend-pass">Password</label>
                    <div class="relative">
                      <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] pointer-events-none">lock</span>
                      <input id="signup-vend-pass" type="password" placeholder="Create a password"
                        class="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl font-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-shadow">
                    </div>
                  </div>
                  <button type="button" onclick="handleSignup()"
                    class="w-full h-12 bg-primary text-on-primary rounded-xl font-label-md shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all active:translate-y-0 flex items-center justify-center gap-2 group mt-1">
                    Register Shop
                    <span class="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </form>

                <p class="text-center font-body-md text-sm text-on-surface-variant mt-5">
                  Already have an account?
                  <button onclick="switchAuthTab('login')" class="text-secondary font-semibold hover:text-primary transition-colors ml-1">Sign in</button>
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- Logged-in view (hidden by default) -->
      <div id="portal-logged-in-view" class="relative z-10 hidden flex-col items-start justify-start min-h-screen px-4 py-8">
        <div class="w-full max-w-2xl mx-auto flex flex-col gap-5">

          <!-- Profile header card -->
          <div class="bg-surface-container-lowest rounded-2xl shadow-lg overflow-hidden">
            <div class="h-1 w-full bg-gradient-to-r from-secondary via-secondary-fixed-dim to-secondary"></div>
            <div class="p-6 flex items-center gap-4">
              <div class="w-16 h-16 rounded-full bg-secondary flex items-center justify-center shadow-md flex-shrink-0">
                <span class="material-symbols-outlined text-on-secondary text-[32px]">person</span>
              </div>
              <div class="flex-1 min-w-0">
                <h2 class="font-headline-md text-on-surface truncate" id="portal-welcome-name">Welcome back!</h2>
                <p class="font-body-md text-sm text-on-surface-variant truncate" id="portal-welcome-email"></p>
                <span class="inline-block mt-1 px-2 py-0.5 bg-secondary/10 text-secondary font-label-sm text-[11px] rounded-full">Customer</span>
              </div>
              <button onclick="handleLogout()" class="flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-xl border border-outline-variant text-on-surface-variant font-label-sm text-[12px] hover:border-error hover:text-error transition-all">
                <span class="material-symbols-outlined text-[16px]">logout</span>
                Sign Out
              </button>
            </div>

            <!-- Tab navigation -->
            <div class="flex border-t border-outline-variant">
              <button id="ptab-overview" onclick="switchPortalTab('overview')" class="portal-tab flex-1 py-3 font-label-md text-label-md text-secondary border-b-2 border-secondary transition-colors">Overview</button>
              <button id="ptab-orders" onclick="switchPortalTab('orders')" class="portal-tab flex-1 py-3 font-label-md text-label-md text-on-surface-variant border-b-2 border-transparent transition-colors hover:text-secondary">My Orders</button>
              <button id="ptab-settings" onclick="switchPortalTab('settings')" class="portal-tab flex-1 py-3 font-label-md text-label-md text-on-surface-variant border-b-2 border-transparent transition-colors hover:text-secondary">Settings</button>
            </div>
          </div>

          <!-- ── TAB: OVERVIEW ── -->
          <div id="ptab-content-overview" class="flex flex-col gap-5">
            <!-- Quick actions grid -->
            <div class="bg-surface-container-lowest rounded-2xl shadow-sm p-5">
              <h3 class="font-title-lg text-on-surface mb-4">Quick Access</h3>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <button onclick="switchPortalTab('orders')" class="bg-surface-container rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-surface-container-high transition-colors group">
                  <span class="material-symbols-outlined text-secondary text-[28px] group-hover:scale-110 transition-transform">shopping_bag</span>
                  <span class="font-label-sm text-on-surface-variant">My Orders</span>
                </button>
                <button class="bg-surface-container rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-surface-container-high transition-colors group">
                  <span class="material-symbols-outlined text-secondary text-[28px] group-hover:scale-110 transition-transform">favorite</span>
                  <span class="font-label-sm text-on-surface-variant">Wishlist</span>
                </button>
                <button class="bg-surface-container rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-surface-container-high transition-colors group">
                  <span class="material-symbols-outlined text-secondary text-[28px] group-hover:scale-110 transition-transform">storefront</span>
                  <span class="font-label-sm text-on-surface-variant">My Shop</span>
                </button>
                <button onclick="switchPortalTab('settings')" class="bg-surface-container rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-surface-container-high transition-colors group">
                  <span class="material-symbols-outlined text-secondary text-[28px] group-hover:scale-110 transition-transform">settings</span>
                  <span class="font-label-sm text-on-surface-variant">Settings</span>
                </button>
              </div>
            </div>

            <!-- Recent orders snapshot -->
            <div class="bg-surface-container-lowest rounded-2xl shadow-sm p-5">
              <div class="flex items-center justify-between mb-4">
                <h3 class="font-title-lg text-on-surface">Recent Orders</h3>
                <button onclick="switchPortalTab('orders')" class="text-secondary font-label-md text-sm flex items-center gap-1 hover:gap-2 transition-all">View all <span class="material-symbols-outlined text-[15px]">arrow_forward</span></button>
              </div>
              <div class="flex flex-col gap-3">
                <div class="flex items-center gap-3 p-3 bg-surface-container rounded-xl">
                  <div class="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <span class="material-symbols-outlined text-secondary text-[20px]">watch</span>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="font-label-md text-on-surface truncate">Obsidian Pro Smartwatch</p>
                    <p class="font-body-md text-xs text-on-surface-variant">Aug 14, 2026 · $194.35</p>
                  </div>
                  <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-label-sm text-[11px] bg-[#e8f5e9] text-[#2e7d32] flex-shrink-0">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#2e7d32] inline-block"></span>Delivered
                  </span>
                </div>
                <div class="flex items-center gap-3 p-3 bg-surface-container rounded-xl">
                  <div class="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <span class="material-symbols-outlined text-secondary text-[20px]">coffee</span>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="font-label-md text-on-surface truncate">Kyoto Ceramic Pour-Over Set</p>
                    <p class="font-body-md text-xs text-on-surface-variant">Aug 9, 2026 · $96.00</p>
                  </div>
                  <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-label-sm text-[11px] bg-[#e3f2fd] text-[#0277bd] flex-shrink-0">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#0277bd] inline-block"></span>In Transit
                  </span>
                </div>
              </div>
            </div>

            <!-- Vendor CTA banner -->
            <div class="relative bg-gradient-to-br from-[#131b2e] to-[#1e2d4a] rounded-2xl shadow-lg overflow-hidden p-6">
              <div class="absolute top-0 right-0 w-48 h-48 bg-secondary opacity-5 rounded-full translate-x-16 -translate-y-16 pointer-events-none"></div>
              <div class="absolute bottom-0 left-0 w-32 h-32 bg-secondary-fixed opacity-5 rounded-full -translate-x-10 translate-y-10 pointer-events-none"></div>
              <div class="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <div class="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <span class="material-symbols-outlined text-secondary-fixed-dim text-[30px]" style="font-variation-settings:'FILL' 1">storefront</span>
                </div>
                <div class="flex-1">
                  <h3 class="font-title-lg text-[#f8f9ff] mb-1">Start Selling on T-Shop</h3>
                  <p class="font-body-md text-sm text-[#bec6e0]">Join 2,500+ independent vendors. Set up your shop in minutes, reach thousands of buyers.</p>
                  <div class="flex items-center gap-3 mt-3 flex-wrap">
                    <div class="flex items-center gap-1.5">
                      <span class="material-symbols-outlined text-secondary-fixed-dim text-[14px]">check_circle</span>
                      <span class="font-label-sm text-[#bec6e0] text-[11px]">Zero listing fees</span>
                    </div>
                    <div class="flex items-center gap-1.5">
                      <span class="material-symbols-outlined text-secondary-fixed-dim text-[14px]">check_circle</span>
                      <span class="font-label-sm text-[#bec6e0] text-[11px]">Instant payouts</span>
                    </div>
                    <div class="flex items-center gap-1.5">
                      <span class="material-symbols-outlined text-secondary-fixed-dim text-[14px]">check_circle</span>
                      <span class="font-label-sm text-[#bec6e0] text-[11px]">Dedicated support</span>
                    </div>
                  </div>
                </div>
                <button class="flex-shrink-0 px-5 py-2.5 bg-secondary text-on-secondary rounded-xl font-label-md shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all active:translate-y-0 flex items-center gap-2 whitespace-nowrap">
                  Apply Now
                  <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>

          <!-- ── TAB: MY ORDERS ── -->
          <div id="ptab-content-orders" class="hidden flex-col gap-5">
            <div class="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden">
              <div class="p-5 border-b border-outline-variant">
                <h3 class="font-title-lg text-on-surface">Order History</h3>
                <p class="font-body-md text-sm text-on-surface-variant mt-0.5">4 orders placed</p>
              </div>

              <!-- Desktop table -->
              <div class="hidden sm:block overflow-x-auto">
                <table class="w-full">
                  <thead class="bg-surface-container">
                    <tr>
                      <th class="text-left px-5 py-3 font-label-md text-on-surface-variant text-[12px] uppercase tracking-wider">Order ID</th>
                      <th class="text-left px-4 py-3 font-label-md text-on-surface-variant text-[12px] uppercase tracking-wider">Item(s)</th>
                      <th class="text-left px-4 py-3 font-label-md text-on-surface-variant text-[12px] uppercase tracking-wider">Date</th>
                      <th class="text-right px-4 py-3 font-label-md text-on-surface-variant text-[12px] uppercase tracking-wider">Total</th>
                      <th class="text-center px-5 py-3 font-label-md text-on-surface-variant text-[12px] uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-outline-variant/40">
                    <tr class="hover:bg-surface-container/50 transition-colors cursor-pointer" data-order-id="#TS-2847" onclick="openOrderTracking('#TS-2847')">
                      <td class="px-5 py-4">
                        <span class="font-label-md text-secondary flex items-center gap-1">#TS-2847 <span class="material-symbols-outlined text-[13px] text-on-surface-variant">open_in_new</span></span>
                      </td>
                      <td class="px-4 py-4">
                        <span class="font-body-md text-on-surface text-sm">Obsidian Pro Smartwatch</span>
                        <span class="block font-label-sm text-on-surface-variant">Tech Haven</span>
                      </td>
                      <td class="px-4 py-4"><span class="font-body-md text-on-surface-variant text-sm">Aug 14, 2026</span></td>
                      <td class="px-4 py-4 text-right"><span class="font-label-md text-on-surface font-semibold">$194.35</span></td>
                      <td class="px-5 py-4 text-center">
                        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-label-sm text-[11px] bg-[#e8f5e9] text-[#2e7d32]">
                          <span class="w-1.5 h-1.5 rounded-full bg-[#2e7d32] inline-block"></span>Delivered
                        </span>
                      </td>
                    </tr>
                    <tr class="hover:bg-surface-container/50 transition-colors cursor-pointer" data-order-id="#TS-2791" onclick="openOrderTracking('#TS-2791')">
                      <td class="px-5 py-4">
                        <span class="font-label-md text-secondary flex items-center gap-1">#TS-2791 <span class="material-symbols-outlined text-[13px] text-on-surface-variant">open_in_new</span></span>
                      </td>
                      <td class="px-4 py-4">
                        <span class="font-body-md text-on-surface text-sm">Kyoto Ceramic Pour-Over Set</span>
                        <span class="block font-label-sm text-on-surface-variant">Artisan Goods</span>
                      </td>
                      <td class="px-4 py-4"><span class="font-body-md text-on-surface-variant text-sm">Aug 9, 2026</span></td>
                      <td class="px-4 py-4 text-right"><span class="font-label-md text-on-surface font-semibold">$96.00</span></td>
                      <td class="px-5 py-4 text-center">
                        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-label-sm text-[11px] bg-[#e3f2fd] text-[#0277bd]">
                          <span class="w-1.5 h-1.5 rounded-full bg-[#0277bd] animate-pulse inline-block"></span>In Transit
                        </span>
                      </td>
                    </tr>
                    <tr class="hover:bg-surface-container/50 transition-colors cursor-pointer" data-order-id="#TS-2764" onclick="openOrderTracking('#TS-2764')">
                      <td class="px-5 py-4">
                        <span class="font-label-md text-secondary flex items-center gap-1">#TS-2764 <span class="material-symbols-outlined text-[13px] text-on-surface-variant">open_in_new</span></span>
                      </td>
                      <td class="px-4 py-4">
                        <span class="font-body-md text-on-surface text-sm">Chunky Merino Wool Throw</span>
                        <span class="block font-label-sm text-on-surface-variant">Loom & Weave</span>
                      </td>
                      <td class="px-4 py-4"><span class="font-body-md text-on-surface-variant text-sm">Aug 3, 2026</span></td>
                      <td class="px-4 py-4 text-right"><span class="font-label-md text-on-surface font-semibold">$140.00</span></td>
                      <td class="px-5 py-4 text-center">
                        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-label-sm text-[11px] bg-[#fff8e1] text-[#f57f17]">
                          <span class="w-1.5 h-1.5 rounded-full bg-[#f57f17] inline-block"></span>Processing
                        </span>
                      </td>
                    </tr>
                    <tr class="hover:bg-surface-container/50 transition-colors cursor-pointer" data-order-id="#TS-2720" onclick="openOrderTracking('#TS-2720')">
                      <td class="px-5 py-4">
                        <span class="font-label-md text-secondary flex items-center gap-1">#TS-2720 <span class="material-symbols-outlined text-[13px] text-on-surface-variant">open_in_new</span></span>
                      </td>
                      <td class="px-4 py-4">
                        <span class="font-body-md text-on-surface text-sm">Slate 65% Mechanical Board</span>
                        <span class="block font-label-sm text-on-surface-variant">KeyChroniks</span>
                      </td>
                      <td class="px-4 py-4"><span class="font-body-md text-on-surface-variant text-sm">Jul 28, 2026</span></td>
                      <td class="px-4 py-4 text-right"><span class="font-label-md text-on-surface font-semibold">$127.50</span></td>
                      <td class="px-5 py-4 text-center">
                        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-label-sm text-[11px] bg-[#e8f5e9] text-[#2e7d32]">
                          <span class="w-1.5 h-1.5 rounded-full bg-[#2e7d32] inline-block"></span>Delivered
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Mobile order cards -->
              <div class="sm:hidden flex flex-col divide-y divide-outline-variant/40">
                <!-- Order 1 -->
                <div class="p-4 flex flex-col gap-2 cursor-pointer hover:bg-surface-container/30 transition-colors" onclick="openOrderTracking('#TS-2847')">
                  <div class="flex items-center justify-between">
                    <span class="font-label-md text-secondary flex items-center gap-1">#TS-2847 <span class="material-symbols-outlined text-[12px] text-on-surface-variant">open_in_new</span></span>
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-label-sm text-[11px] bg-[#e8f5e9] text-[#2e7d32]"><span class="w-1.5 h-1.5 rounded-full bg-[#2e7d32] inline-block"></span>Delivered</span>
                  </div>
                  <p class="font-body-md text-on-surface text-sm">Obsidian Pro Smartwatch</p>
                  <div class="flex items-center justify-between">
                    <span class="font-label-sm text-on-surface-variant">Aug 14, 2026 · Tech Haven</span>
                    <span class="font-label-md text-on-surface font-semibold">$194.35</span>
                  </div>
                </div>
                <!-- Order 2 -->
                <div class="p-4 flex flex-col gap-2 cursor-pointer hover:bg-surface-container/30 transition-colors" onclick="openOrderTracking('#TS-2791')">
                  <div class="flex items-center justify-between">
                    <span class="font-label-md text-secondary flex items-center gap-1">#TS-2791 <span class="material-symbols-outlined text-[12px] text-on-surface-variant">open_in_new</span></span>
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-label-sm text-[11px] bg-[#e3f2fd] text-[#0277bd]"><span class="w-1.5 h-1.5 rounded-full bg-[#0277bd] animate-pulse inline-block"></span>In Transit</span>
                  </div>
                  <p class="font-body-md text-on-surface text-sm">Kyoto Ceramic Pour-Over Set</p>
                  <div class="flex items-center justify-between">
                    <span class="font-label-sm text-on-surface-variant">Aug 9, 2026 · Artisan Goods</span>
                    <span class="font-label-md text-on-surface font-semibold">$96.00</span>
                  </div>
                </div>
                <!-- Order 3 -->
                <div class="p-4 flex flex-col gap-2 cursor-pointer hover:bg-surface-container/30 transition-colors" onclick="openOrderTracking('#TS-2764')">
                  <div class="flex items-center justify-between">
                    <span class="font-label-md text-secondary flex items-center gap-1">#TS-2764 <span class="material-symbols-outlined text-[12px] text-on-surface-variant">open_in_new</span></span>
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-label-sm text-[11px] bg-[#fff8e1] text-[#f57f17]"><span class="w-1.5 h-1.5 rounded-full bg-[#f57f17] inline-block"></span>Processing</span>
                  </div>
                  <p class="font-body-md text-on-surface text-sm">Chunky Merino Wool Throw</p>
                  <div class="flex items-center justify-between">
                    <span class="font-label-sm text-on-surface-variant">Aug 3, 2026 · Loom & Weave</span>
                    <span class="font-label-md text-on-surface font-semibold">$140.00</span>
                  </div>
                </div>
                <!-- Order 4 -->
                <div class="p-4 flex flex-col gap-2 cursor-pointer hover:bg-surface-container/30 transition-colors" onclick="openOrderTracking('#TS-2720')">
                  <div class="flex items-center justify-between">
                    <span class="font-label-md text-secondary flex items-center gap-1">#TS-2720 <span class="material-symbols-outlined text-[12px] text-on-surface-variant">open_in_new</span></span>
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-label-sm text-[11px] bg-[#e8f5e9] text-[#2e7d32]"><span class="w-1.5 h-1.5 rounded-full bg-[#2e7d32] inline-block"></span>Delivered</span>
                  </div>
                  <p class="font-body-md text-on-surface text-sm">Slate 65% Mechanical Board</p>
                  <div class="flex items-center justify-between">
                    <span class="font-label-sm text-on-surface-variant">Jul 28, 2026 · KeyChroniks</span>
                    <span class="font-label-md text-on-surface font-semibold">$127.50</span>
                  </div>
                </div>
              </div>

              <!-- Total row -->
              <div class="px-5 py-4 bg-surface-container/50 flex items-center justify-between border-t border-outline-variant/40">
                <span class="font-label-md text-on-surface-variant">Total spent</span>
                <span class="font-title-lg text-secondary font-bold">$557.85</span>
              </div>
            </div>
          </div>

          <!-- ── TAB: SETTINGS ── -->
          <div id="ptab-content-settings" class="hidden flex-col gap-5">
            <div class="bg-surface-container-lowest rounded-2xl shadow-sm p-6">
              <h3 class="font-title-lg text-on-surface mb-1">Account Settings</h3>
              <p class="font-body-md text-sm text-on-surface-variant mb-6">Update your personal information.</p>
              <div class="flex flex-col gap-5">
                <div>
                  <label class="block font-label-md text-label-md text-on-surface mb-1.5" for="settings-name">Full Name</label>
                  <div class="relative">
                    <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] pointer-events-none">person</span>
                    <input id="settings-name" type="text" placeholder="Your full name"
                      class="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl font-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-shadow">
                  </div>
                </div>
                <div>
                  <label class="block font-label-md text-label-md text-on-surface mb-1.5" for="settings-email">Email Address</label>
                  <div class="relative">
                    <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] pointer-events-none">mail</span>
                    <input id="settings-email" type="email" placeholder="you@example.com"
                      class="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl font-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-shadow">
                  </div>
                </div>
                <div class="pt-1">
                  <button onclick="saveAccountSettings()" class="w-full sm:w-auto px-8 h-12 bg-secondary text-on-secondary rounded-xl font-label-md shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all active:translate-y-0 flex items-center justify-center gap-2">
                    <span class="material-symbols-outlined text-[18px]">save</span>
                    Save Changes
                  </button>
                </div>
              </div>
            </div>

            <!-- Password section -->
            <div class="bg-surface-container-lowest rounded-2xl shadow-sm p-6">
              <h3 class="font-title-lg text-on-surface mb-1">Password & Security</h3>
              <p class="font-body-md text-sm text-on-surface-variant mb-5">Manage your login credentials.</p>
              <div class="flex flex-col gap-5">
                <div>
                  <label class="block font-label-md text-label-md text-on-surface mb-1.5" for="settings-current-pass">Current Password</label>
                  <div class="relative">
                    <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] pointer-events-none">lock</span>
                    <input id="settings-current-pass" type="password" placeholder="••••••••"
                      class="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl font-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-shadow">
                  </div>
                </div>
                <div>
                  <label class="block font-label-md text-label-md text-on-surface mb-1.5" for="settings-new-pass">New Password</label>
                  <div class="relative">
                    <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] pointer-events-none">lock_reset</span>
                    <input id="settings-new-pass" type="password" placeholder="Create new password"
                      class="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl font-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-shadow">
                  </div>
                </div>
                <div class="pt-1">
                  <button onclick="showToastMsg('Password updated successfully!')" class="w-full sm:w-auto px-8 h-12 border-2 border-outline-variant text-on-surface rounded-xl font-label-md hover:border-secondary hover:text-secondary transition-all flex items-center justify-center gap-2">
                    <span class="material-symbols-outlined text-[18px]">key</span>
                    Update Password
                  </button>
                </div>
              </div>
            </div>

            <!-- Danger zone -->
            <div class="bg-error-container/30 border border-error/20 rounded-2xl p-5">
              <h3 class="font-label-md text-error mb-1 flex items-center gap-2"><span class="material-symbols-outlined text-[16px]">warning</span> Danger Zone</h3>
              <p class="font-body-md text-sm text-on-surface-variant mb-4">Once you delete your account, there is no going back. Please be certain.</p>
              <button class="px-5 py-2.5 border-2 border-error/40 text-error rounded-xl font-label-md hover:bg-error/5 transition-all flex items-center gap-2">
                <span class="material-symbols-outlined text-[16px]">delete_forever</span>
                Delete Account
              </button>
            </div>

          </div>

        </div><!-- end max-w-2xl -->
      </div>

    </div>
  </div>

  <!-- ══════════════════════════
  PAGE: CHECKOUT
  ══════════════════════════ -->
  <div class="page-view" id="page-checkout">
    <div class="inner-page-content pb-24 lg:pb-8">

      <!-- Top bar -->
      <div class="sticky top-0 z-30 bg-surface/95 backdrop-blur-xl border-b border-outline-variant shadow-sm">
        <div class="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
          <button id="checkout-back-btn" onclick="checkoutBack()" class="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-all flex-shrink-0">
            <span class="material-symbols-outlined text-[20px]">arrow_back</span>
          </button>
          <h1 class="font-title-lg text-on-surface flex-1">Checkout</h1>
          <div class="flex items-center gap-1 text-on-surface-variant">
            <span class="material-symbols-outlined text-[16px] text-secondary">lock</span>
            <span class="font-label-sm text-[11px] text-on-surface-variant">Secure</span>
          </div>
        </div>

        <!-- Step indicator -->
        <div class="max-w-2xl mx-auto px-6 pb-4">
          <div class="checkout-step-indicator">
            <div class="checkout-step active" id="co-indicator-1">
              <div class="checkout-step-circle" id="co-circle-1">1</div>
              <span class="checkout-step-label">Shipping</span>
            </div>
            <div class="checkout-step-line" id="co-line-1"></div>
            <div class="checkout-step" id="co-indicator-2">
              <div class="checkout-step-circle" id="co-circle-2">2</div>
              <span class="checkout-step-label">Payment</span>
            </div>
            <div class="checkout-step-line" id="co-line-2"></div>
            <div class="checkout-step" id="co-indicator-3">
              <div class="checkout-step-circle" id="co-circle-3">3</div>
              <span class="checkout-step-label">Confirmed</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Step content -->
      <div class="max-w-2xl mx-auto px-4 pt-6">

        <!-- ── STEP 1: Shipping ── -->
        <div class="checkout-step-content active" id="co-step-1">
          <h2 class="font-headline-md text-on-surface mb-1">Shipping Information</h2>
          <p class="font-body-md text-sm text-on-surface-variant mb-6">Where should we send your order?</p>

          <div class="bg-surface-container-lowest rounded-2xl shadow-sm p-5 flex flex-col gap-4">
            <!-- Name row -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block font-label-md text-label-md text-on-surface mb-1.5" for="co-first-name">First Name</label>
                <div class="relative">
                  <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] pointer-events-none">person</span>
                  <input id="co-first-name" type="text" placeholder="Jane" autocomplete="given-name"
                    class="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl font-body-md text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-shadow">
                </div>
              </div>
              <div>
                <label class="block font-label-md text-label-md text-on-surface mb-1.5" for="co-last-name">Last Name</label>
                <div class="relative">
                  <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] pointer-events-none">person</span>
                  <input id="co-last-name" type="text" placeholder="Doe" autocomplete="family-name"
                    class="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl font-body-md text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-shadow">
                </div>
              </div>
            </div>
            <div>
              <label class="block font-label-md text-label-md text-on-surface mb-1.5" for="co-email">Email Address</label>
              <div class="relative">
                <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] pointer-events-none">mail</span>
                <input id="co-email" type="email" placeholder="jane@example.com" autocomplete="email"
                  class="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl font-body-md text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-shadow">
              </div>
            </div>
            <div>
              <label class="block font-label-md text-label-md text-on-surface mb-1.5" for="co-address">Street Address</label>
              <div class="relative">
                <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] pointer-events-none">home</span>
                <input id="co-address" type="text" placeholder="123 Main Street, Apt 4B" autocomplete="street-address"
                  class="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl font-body-md text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-shadow">
              </div>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div class="col-span-2 sm:col-span-1">
                <label class="block font-label-md text-label-md text-on-surface mb-1.5" for="co-city">City</label>
                <input id="co-city" type="text" placeholder="San Francisco" autocomplete="address-level2"
                  class="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl font-body-md text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-shadow">
              </div>
              <div>
                <label class="block font-label-md text-label-md text-on-surface mb-1.5" for="co-state">State</label>
                <input id="co-state" type="text" placeholder="CA" autocomplete="address-level1"
                  class="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl font-body-md text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-shadow">
              </div>
              <div>
                <label class="block font-label-md text-label-md text-on-surface mb-1.5" for="co-zip">ZIP Code</label>
                <input id="co-zip" type="text" placeholder="94102" autocomplete="postal-code"
                  class="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl font-body-md text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-shadow">
              </div>
            </div>
            <div>
              <label class="block font-label-md text-label-md text-on-surface mb-1.5" for="co-country">Country</label>
              <div class="relative">
                <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] pointer-events-none">public</span>
                <select id="co-country" autocomplete="country"
                  class="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl font-body-md text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-shadow appearance-none">
                  <option value="US">United States</option>
                  <option value="GB">United Kingdom</option>
                  <option value="CA">Canada</option>
                  <option value="AU">Australia</option>
                  <option value="JP">Japan</option>
                  <option value="DE">Germany</option>
                  <option value="FR">France</option>
                  <option value="OTHER">Other</option>
                </select>
                <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] pointer-events-none">expand_more</span>
              </div>
            </div>
          </div>

          <!-- Order summary (mini) -->
          <div class="mt-5 bg-surface-container-lowest rounded-2xl shadow-sm p-5">
            <h3 class="font-label-md text-on-surface-variant uppercase tracking-wider text-[11px] mb-3">Order Summary</h3>
            <div id="co-step1-items" class="flex flex-col gap-2 mb-3"></div>
            <div class="flex items-center justify-between pt-3 border-t border-outline-variant/40">
              <span class="font-label-md text-on-surface-variant">Total</span>
              <span id="co-step1-total" class="font-title-lg text-secondary font-bold"></span>
            </div>
          </div>

          <!-- Next button -->
          <button onclick="checkoutNext()" class="w-full mt-5 h-13 py-3.5 bg-secondary text-on-secondary rounded-2xl font-label-md shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all active:translate-y-0 flex items-center justify-center gap-2 group">
            Continue to Payment
            <span class="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
          <p class="text-center font-body-md text-[12px] text-on-surface-variant mt-3 flex items-center justify-center gap-1">
            <span class="material-symbols-outlined text-[14px] text-secondary">lock</span>
            Your information is encrypted and secure
          </p>
        </div>

        <!-- ── STEP 2: Payment ── -->
        <div class="checkout-step-content" id="co-step-2">
          <h2 class="font-headline-md text-on-surface mb-1">Payment Details</h2>
          <p class="font-body-md text-sm text-on-surface-variant mb-6">All transactions are encrypted and secure.</p>

          <div class="bg-surface-container-lowest rounded-2xl shadow-sm p-5 flex flex-col gap-4">
            <!-- Card number -->
            <div>
              <label class="block font-label-md text-label-md text-on-surface mb-1.5" for="co-card-number">Card Number</label>
              <div class="relative">
                <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] pointer-events-none">credit_card</span>
                <input id="co-card-number" type="text" placeholder="1234 5678 9012 3456" maxlength="19" autocomplete="cc-number"
                  class="w-full pl-10 pr-28 py-3 bg-surface-container-low border border-outline-variant rounded-xl font-body-md text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-shadow tracking-widest">
                <span id="co-card-brand-badge" class="card-brand-badge card-brand-unknown hidden">CARD</span>
              </div>
            </div>
            <!-- Cardholder name -->
            <div>
              <label class="block font-label-md text-label-md text-on-surface mb-1.5" for="co-card-name">Cardholder Name</label>
              <div class="relative">
                <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] pointer-events-none">badge</span>
                <input id="co-card-name" type="text" placeholder="JANE DOE" autocomplete="cc-name"
                  class="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl font-body-md text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-shadow uppercase tracking-wider">
              </div>
            </div>
            <!-- Expiry + CVV -->
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block font-label-md text-label-md text-on-surface mb-1.5" for="co-expiry">Expiry Date</label>
                <div class="relative">
                  <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] pointer-events-none">event</span>
                  <input id="co-expiry" type="text" placeholder="MM / YY" maxlength="7" autocomplete="cc-exp"
                    class="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl font-body-md text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-shadow">
                </div>
              </div>
              <div>
                <label class="block font-label-md text-label-md text-on-surface mb-1.5" for="co-cvv">
                  CVV
                  <span id="co-cvv-tip" class="ml-1 inline-flex items-center justify-center w-4 h-4 rounded-full bg-surface-container text-on-surface-variant text-[10px] cursor-help" title="3 digits on the back of your card (4 for Amex)">?</span>
                </label>
                <div class="relative">
                  <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] pointer-events-none">lock</span>
                  <input id="co-cvv" type="text" placeholder="•••" maxlength="4" autocomplete="cc-csc"
                    class="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl font-body-md text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-shadow tracking-widest">
                </div>
              </div>
            </div>

            <!-- Accepted cards -->
            <div class="flex items-center gap-2 pt-1">
              <span class="font-label-sm text-[11px] text-on-surface-variant">We accept:</span>
              <span class="px-2 py-0.5 rounded font-bold text-[10px] bg-[#1a1f71] text-white">VISA</span>
              <span class="px-2 py-0.5 rounded font-bold text-[10px] text-white" style="background:linear-gradient(135deg,#eb001b,#f79e1b)">MC</span>
              <span class="px-2 py-0.5 rounded font-bold text-[10px] bg-[#007bc1] text-white">AMEX</span>
              <span class="px-2 py-0.5 rounded font-bold text-[10px] bg-[#e65c00] text-white">DISC</span>
            </div>
          </div>

          <!-- Billing same as shipping -->
          <div class="mt-4 flex items-center gap-3 px-1">
            <input id="co-billing-same" type="checkbox" checked class="w-4 h-4 rounded accent-secondary cursor-pointer">
            <label for="co-billing-same" class="font-body-md text-sm text-on-surface cursor-pointer select-none">Billing address same as shipping</label>
          </div>

          <!-- Order summary (mini) -->
          <div class="mt-5 bg-surface-container-lowest rounded-2xl shadow-sm p-5">
            <h3 class="font-label-md text-on-surface-variant uppercase tracking-wider text-[11px] mb-3">Order Summary</h3>
            <div id="co-step2-items" class="flex flex-col gap-2 mb-3"></div>
            <div class="flex items-center justify-between py-2 border-t border-outline-variant/40">
              <span class="font-body-md text-sm text-on-surface-variant">Subtotal</span>
              <span id="co-step2-subtotal" class="font-label-md text-on-surface font-semibold"></span>
            </div>
            <div class="flex items-center justify-between py-2">
              <span class="font-body-md text-sm text-on-surface-variant">Shipping</span>
              <span id="co-step2-shipping" class="font-label-md text-secondary font-semibold"></span>
            </div>
            <div class="flex items-center justify-between py-2 border-t border-outline-variant/40 mt-1">
              <span class="font-label-md text-on-surface font-semibold">Total</span>
              <span id="co-step2-total" class="font-title-lg text-secondary font-bold"></span>
            </div>
          </div>

          <!-- Navigation buttons -->
          <div class="flex gap-3 mt-5">
            <button onclick="checkoutPrev()" class="flex-shrink-0 h-13 py-3.5 px-5 border-2 border-outline-variant text-on-surface rounded-2xl font-label-md hover:border-secondary hover:text-secondary transition-all flex items-center gap-2">
              <span class="material-symbols-outlined text-[18px]">arrow_back</span>Back
            </button>
            <button onclick="checkoutPlaceOrder()" class="flex-1 h-13 py-3.5 bg-secondary text-on-secondary rounded-2xl font-label-md shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all active:translate-y-0 flex items-center justify-center gap-2 group">
              <span class="material-symbols-outlined text-[20px]">payment</span>
              Place Order
              <span class="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
          <p class="text-center font-body-md text-[12px] text-on-surface-variant mt-3 flex items-center justify-center gap-1">
            <span class="material-symbols-outlined text-[14px] text-secondary">lock</span>
            Payment encrypted with 256-bit SSL
          </p>
        </div>

        <!-- ── STEP 3: Confirmation ── -->
        <div class="checkout-step-content" id="co-step-3">
          <!-- Success animation -->
          <div class="flex flex-col items-center py-8">
            <div class="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
              <span class="material-symbols-outlined text-secondary text-[44px]" style="font-variation-settings:'FILL' 1">check_circle</span>
            </div>
            <h2 class="font-headline-lg text-on-surface text-center mb-2">Order Confirmed!</h2>
            <p class="font-body-md text-on-surface-variant text-center max-w-sm">Thank you for your purchase. We'll send a confirmation to <span id="co-confirm-email" class="text-secondary font-semibold"></span>.</p>
          </div>

          <!-- Order number card -->
          <div class="bg-secondary/8 border border-secondary/20 rounded-2xl p-5 flex items-center gap-4 mb-5">
            <div class="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center flex-shrink-0">
              <span class="material-symbols-outlined text-secondary text-[24px]">receipt_long</span>
            </div>
            <div>
              <p class="font-label-sm text-on-surface-variant">Order Number</p>
              <p id="co-order-number" class="font-title-lg text-secondary font-bold tracking-wide"></p>
            </div>
            <div class="ml-auto text-right">
              <p class="font-label-sm text-on-surface-variant">Estimated Delivery</p>
              <p id="co-est-delivery" class="font-label-md text-on-surface font-semibold"></p>
            </div>
          </div>

          <!-- Shipping summary -->
          <div class="bg-surface-container-lowest rounded-2xl shadow-sm p-5 mb-5">
            <h3 class="font-label-md text-on-surface-variant uppercase tracking-wider text-[11px] mb-3">Shipping To</h3>
            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined text-secondary text-[20px] mt-0.5">location_on</span>
              <div>
                <p id="co-confirm-name" class="font-label-md text-on-surface"></p>
                <p id="co-confirm-address" class="font-body-md text-sm text-on-surface-variant"></p>
              </div>
            </div>
          </div>

          <!-- Items ordered -->
          <div class="bg-surface-container-lowest rounded-2xl shadow-sm p-5 mb-5">
            <h3 class="font-label-md text-on-surface-variant uppercase tracking-wider text-[11px] mb-3">Items Ordered</h3>
            <div id="co-confirm-items" class="flex flex-col gap-3 mb-4"></div>
            <div class="flex flex-col gap-1.5 pt-3 border-t border-outline-variant/40">
              <div class="flex items-center justify-between">
                <span class="font-body-md text-sm text-on-surface-variant">Subtotal</span>
                <span id="co-confirm-subtotal" class="font-label-md text-on-surface"></span>
              </div>
              <div class="flex items-center justify-between">
                <span class="font-body-md text-sm text-on-surface-variant">Shipping</span>
                <span id="co-confirm-shipping" class="font-label-md text-secondary"></span>
              </div>
              <div class="flex items-center justify-between pt-2 border-t border-outline-variant/40 mt-1">
                <span class="font-label-md text-on-surface font-semibold">Total Charged</span>
                <span id="co-confirm-total" class="font-title-lg text-secondary font-bold"></span>
              </div>
            </div>
          </div>

          <!-- CTA -->
          <button onclick="checkoutFinish()" class="w-full py-4 bg-secondary text-on-secondary rounded-2xl font-label-md shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all active:translate-y-0 flex items-center justify-center gap-2 group">
            <span class="material-symbols-outlined text-[20px]">storefront</span>
            Continue Shopping
            <span class="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
          <div class="mt-4 grid grid-cols-2 gap-3">
            <button onclick="navigate('portal'); setTimeout(()=>switchPortalTab('orders'),100)" class="py-3 border border-outline-variant text-on-surface rounded-2xl font-label-md hover:border-secondary hover:text-secondary transition-all flex items-center justify-center gap-2">
              <span class="material-symbols-outlined text-[18px]">shopping_bag</span>
              My Orders
            </button>
            <button onclick="navigate('vendors')" class="py-3 border border-outline-variant text-on-surface rounded-2xl font-label-md hover:border-secondary hover:text-secondary transition-all flex items-center justify-center gap-2">
              <span class="material-symbols-outlined text-[18px]">groups</span>
              Vendors
            </button>
          </div>
          <p class="text-center font-body-md text-[12px] text-on-surface-variant mt-5 flex items-center justify-center gap-1">
            <span class="material-symbols-outlined text-[13px]">mail</span>
            A receipt has been sent to your email
          </p>
        </div>

      </div><!-- end max-w-2xl -->
    </div>
  </div>

  <!-- PAGE: VENDOR DETAIL -->
  <div class="page-view" id="page-vendor-detail">
    <div class="inner-page-content pb-20 lg:pb-0">
      <div class="relative w-full h-[260px] lg:h-[340px] overflow-hidden bg-surface-container">
        <img id="vd-banner" src="" alt="" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-surface/80 via-surface/20 to-transparent"></div>
        <button onclick="navigate('vendors')" class="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-2 bg-surface/80 backdrop-blur-md rounded-full font-label-md text-on-surface shadow-md hover:bg-surface hover:shadow-lg transition-all">
          <span class="material-symbols-outlined text-[18px]">arrow_back</span>
          <span>All Vendors</span>
        </button>
      </div>
      <div class="max-w-container-max mx-auto px-4 lg:px-10 -mt-14 relative z-10">
        <div class="flex items-end gap-4 mb-5">
          <div class="w-24 h-24 rounded-2xl border-4 border-surface bg-surface-variant shadow-lg overflow-hidden flex-shrink-0">
            <img id="vd-avatar" src="" alt="" class="w-full h-full object-cover">
          </div>
          <div class="flex-1 min-w-0 pb-1">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <h1 id="vd-name" class="font-headline-md text-on-surface"></h1>
                  <span id="vd-category-badge" class="px-2 py-0.5 bg-secondary/10 text-secondary font-label-sm text-[11px] rounded-full"></span>
                </div>
                <div class="flex items-center gap-1 mt-1">
                  <span class="material-symbols-outlined text-secondary text-[15px]" style="font-variation-settings:'FILL' 1">star</span>
                  <span id="vd-rating" class="font-label-md text-on-surface font-bold"></span>
                  <span id="vd-review-count" class="font-body-md text-sm text-on-surface-variant"></span>
                </div>
              </div>
              <div class="flex gap-2">
                <button class="flex items-center gap-1.5 px-4 py-2 bg-secondary text-on-secondary rounded-xl font-label-md shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <span class="material-symbols-outlined text-[16px]">bookmark_add</span>Follow
                </button>
                <button class="flex items-center gap-1.5 px-4 py-2 border border-outline-variant text-on-surface rounded-xl font-label-md hover:border-secondary hover:text-secondary transition-all">
                  <span class="material-symbols-outlined text-[16px]">chat_bubble</span>Message
                </button>
              </div>
            </div>
          </div>
        </div>
        <p id="vd-bio" class="font-body-md text-on-surface-variant mb-5 max-w-2xl"></p>
        <div class="flex gap-5 mb-6 flex-wrap">
          <div class="flex flex-col"><span id="vd-stat-products" class="font-title-lg text-on-surface font-bold"></span><span class="font-label-sm text-on-surface-variant">Products</span></div>
          <div class="w-px bg-outline-variant self-stretch"></div>
          <div class="flex flex-col"><span id="vd-stat-sales" class="font-title-lg text-on-surface font-bold"></span><span class="font-label-sm text-on-surface-variant">Sales</span></div>
          <div class="w-px bg-outline-variant self-stretch"></div>
          <div class="flex flex-col"><span id="vd-stat-since" class="font-title-lg text-on-surface font-bold"></span><span class="font-label-sm text-on-surface-variant">Member since</span></div>
        </div>
        <div class="border-t border-outline-variant mb-6"></div>
        <div class="flex items-center justify-between mb-4">
          <h2 class="font-headline-md text-on-surface">Shop Collection</h2>
          <span id="vd-product-count" class="font-label-md text-on-surface-variant"></span>
        </div>
        <div id="vd-product-grid" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10"></div>
      </div>
    </div>
  </div>

</div><!-- end #page-container -->

<!-- ══════════════════════════════════════════════
MOBILE BOTTOM NAV
══════════════════════════════════════════════ -->
<nav class="mobile-bottom-nav fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl border-t border-outline-variant/50 shadow-[0_-2px_12px_rgba(0,0,0,0.06)]">
  <div class="flex justify-around items-center h-16">
    <button class="nav-item active flex flex-col items-center justify-center w-full h-full gap-1 text-secondary" data-page="home">
      <span class="material-symbols-outlined mat-icon text-[24px]">storefront</span>
      <span class="font-label-sm text-[11px]">Shop</span>
    </button>
    <button class="nav-item flex flex-col items-center justify-center w-full h-full gap-1 text-on-surface-variant" data-page="categories">
      <span class="material-symbols-outlined mat-icon text-[24px]">grid_view</span>
      <span class="font-label-sm text-[11px]">Categories</span>
    </button>
    <button class="nav-item flex flex-col items-center justify-center w-full h-full gap-1 text-on-surface-variant" data-page="deals">
      <span class="material-symbols-outlined mat-icon text-[24px]">sell</span>
      <span class="font-label-sm text-[11px]">Deals</span>
    </button>
    <button class="nav-item flex flex-col items-center justify-center w-full h-full gap-1 text-on-surface-variant" data-page="vendors">
      <span class="material-symbols-outlined mat-icon text-[24px]">groups</span>
      <span class="font-label-sm text-[11px]">Vendors</span>
    </button>
    <button class="nav-item flex flex-col items-center justify-center w-full h-full gap-1 text-on-surface-variant" data-page="portal">
      <span class="material-symbols-outlined mat-icon text-[24px]">account_circle</span>
      <span class="font-label-sm text-[11px]">Portal</span>
    </button>
  </div>
</nav>

<!-- ══════════════════════════════════════════════
PRODUCT DETAIL MODAL
══════════════════════════════════════════════ -->
<div id="product-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-product-name" onclick="handleModalOverlayClick(event)">
  <div id="product-modal-sheet">
    <!-- Drag handle (mobile) -->
    <div class="flex justify-center pt-3 pb-1 md:hidden">
      <div class="w-10 h-1 bg-outline-variant rounded-full"></div>
    </div>

    <!-- Close button -->
    <button onclick="closeProductModal()" aria-label="Close"
      class="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all z-10">
      <span class="material-symbols-outlined text-[20px]">close</span>
    </button>

    <!-- Content grid -->
    <div class="flex flex-col md:flex-row gap-0 md:gap-0">

      <!-- Image panel -->
      <div class="relative w-full md:w-[45%] aspect-[4/3] md:aspect-auto md:min-h-[480px] flex-shrink-0 overflow-hidden bg-surface-container-low md:rounded-l-[20px]">
        <img id="modal-product-img" src="" alt="" class="w-full h-full object-cover">
        <!-- Discount badge -->
        <div id="modal-discount-badge" class="absolute top-4 left-4 bg-error text-on-error px-3 py-1 rounded-full font-label-sm shadow-md hidden">
          <span id="modal-discount-text"></span>
        </div>
      </div>

      <!-- Details panel -->
      <div class="flex flex-col flex-1 px-6 pt-5 pb-6 md:pt-8 md:pb-8 md:pr-8 md:overflow-y-auto">

        <!-- Vendor + Category -->
        <div class="flex items-center gap-2 mb-2">
          <span id="modal-vendor" class="font-label-sm text-secondary uppercase tracking-wider"></span>
          <span class="text-outline-variant">·</span>
          <span id="modal-category" class="font-label-sm text-on-surface-variant uppercase tracking-wider"></span>
        </div>

        <!-- Name -->
        <h2 id="modal-product-name" class="font-headline-md text-headline-md text-on-surface mb-3 leading-tight"></h2>

        <!-- Description -->
        <p id="modal-description" class="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-5"></p>

        <!-- Price -->
        <div class="flex items-baseline gap-3 mb-5">
          <span id="modal-price" class="font-display-lg text-[36px] leading-none text-secondary font-bold"></span>
          <span id="modal-original-price" class="font-body-lg text-on-surface-variant line-through"></span>
        </div>

        <!-- Variants / Colors -->
        <div id="modal-variants-section" class="mb-5 hidden">
          <p class="font-label-md text-on-surface mb-2">Color / Variant: <span id="modal-selected-variant" class="text-secondary"></span></p>
          <div id="modal-variants-list" class="flex flex-wrap gap-2"></div>
        </div>

        <!-- Sizes -->
        <div id="modal-sizes-section" class="mb-6 hidden">
          <p class="font-label-md text-on-surface mb-2">Size: <span id="modal-selected-size" class="text-secondary"></span></p>
          <div id="modal-sizes-list" class="flex flex-wrap gap-2"></div>
        </div>

        <!-- Quantity + Add to Cart -->
        <div class="flex items-center gap-3 mt-auto">
          <!-- Qty selector -->
          <div class="flex items-center border border-outline-variant rounded-xl overflow-hidden h-12">
            <button id="modal-qty-minus" onclick="adjustModalQty(-1)" class="w-11 h-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors">
              <span class="material-symbols-outlined text-[20px]">remove</span>
            </button>
            <span id="modal-qty-display" class="w-10 text-center font-title-lg text-on-surface select-none">1</span>
            <button id="modal-qty-plus" onclick="adjustModalQty(1)" class="w-11 h-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors">
              <span class="material-symbols-outlined text-[20px]">add</span>
            </button>
          </div>

          <!-- Add to Cart -->
          <button id="modal-add-to-cart-btn" onclick="addModalItemToCart()"
            class="flex-1 h-12 bg-secondary text-on-secondary rounded-xl font-label-md shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all active:translate-y-0 flex items-center justify-center gap-2 group">
            <span class="material-symbols-outlined text-[20px]">add_shopping_cart</span>
            Add to Cart
          </button>

          <!-- Wishlist -->
          <button onclick="toggleModalWishlist(this)" class="modal-fav-btn w-12 h-12 border border-outline-variant rounded-xl flex items-center justify-center text-on-surface-variant hover:border-error hover:text-error transition-all">
            <span class="material-symbols-outlined mat-icon text-[22px]">favorite</span>
          </button>
        </div>

        <!-- Shipping info -->
        <div class="mt-4 flex items-center gap-2 text-on-surface-variant">
          <span class="material-symbols-outlined text-[16px] text-secondary">local_shipping</span>
          <span class="font-body-md text-sm">Free shipping on orders over $75</span>
        </div>

      </div>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════════════
CART DRAWER
══════════════════════════════════════════════ -->
<div id="cart-drawer-overlay" onclick="handleCartOverlayClick(event)">
  <div id="cart-drawer-panel">
    <!-- Drag handle mobile -->
    <div class="flex justify-center pt-3 pb-1 md:hidden flex-shrink-0">
      <div class="w-10 h-1 bg-outline-variant rounded-full"></div>
    </div>
    <!-- Header -->
    <div class="flex items-center justify-between px-5 py-4 border-b border-outline-variant flex-shrink-0">
      <div class="flex items-center gap-2">
        <span class="material-symbols-outlined text-[22px] text-on-surface">shopping_cart</span>
        <h2 class="font-title-lg text-on-surface">Your Cart</h2>
        <span id="cart-drawer-count" class="w-6 h-6 bg-secondary text-on-secondary text-[11px] rounded-full flex items-center justify-center font-bold">0</span>
      </div>
      <button onclick="closeCartDrawer()" class="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-all">
        <span class="material-symbols-outlined text-[20px]">close</span>
      </button>
    </div>
    <!-- Items list -->
    <div id="cart-drawer-items" class="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-3">
      <!-- populated by JS -->
    </div>
    <!-- Empty state -->
    <div id="cart-drawer-empty" class="hidden flex-1 flex flex-col items-center justify-center gap-4 text-center px-6">
      <div class="w-20 h-20 rounded-full bg-surface-container flex items-center justify-center">
        <span class="material-symbols-outlined text-[36px] text-on-surface-variant">shopping_cart</span>
      </div>
      <div>
        <p class="font-title-lg text-on-surface mb-1">Your cart is empty</p>
        <p class="font-body-md text-sm text-on-surface-variant">Browse our collections and add items you love.</p>
      </div>
      <button onclick="closeCartDrawer(); navigate('home');" class="px-6 py-3 bg-secondary text-on-secondary rounded-xl font-label-md shadow-sm hover:shadow-md transition-all">Start Shopping</button>
    </div>
    <!-- Footer -->
    <div id="cart-drawer-footer" class="hidden flex-shrink-0 border-t border-outline-variant px-5 py-5 flex flex-col gap-3 pb-safe">
      <div class="flex items-center justify-between">
        <span class="font-label-md text-on-surface-variant">Subtotal</span>
        <span id="cart-drawer-subtotal" class="font-title-lg text-on-surface font-bold">$0.00</span>
      </div>
      <div class="flex items-center gap-2 text-on-surface-variant">
        <span class="material-symbols-outlined text-[14px] text-secondary">local_shipping</span>
        <span class="font-body-md text-[12px]">Free shipping on orders over $75</span>
      </div>
      <button onclick="openCheckout()" class="w-full h-12 bg-secondary text-on-secondary rounded-xl font-label-md shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all active:translate-y-0 flex items-center justify-center gap-2">
        <span class="material-symbols-outlined text-[20px]">payment</span>
        Proceed to Checkout
      </button>
      <button onclick="closeCartDrawer()" class="w-full h-11 border border-outline-variant text-on-surface rounded-xl font-label-md hover:border-secondary hover:text-secondary transition-all">Continue Shopping</button>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════════════
SEARCH OVERLAY
══════════════════════════════════════════════ -->
<div id="search-overlay">
  <!-- Top bar -->
  <div class="search-input-wrap flex-shrink-0 border-b border-outline-variant">
    <div class="max-w-3xl mx-auto px-4 py-4 flex items-center gap-3">
      <span class="material-symbols-outlined text-on-surface-variant text-[22px]">search</span>
      <input id="search-overlay-input" type="text" placeholder="Search products, vendors, categories…"
        class="flex-1 bg-transparent border-none outline-none font-body-lg text-on-surface text-[18px] placeholder:text-on-surface-variant/50">
      <button onclick="closeSearchOverlay()" class="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-all flex-shrink-0">
        <span class="material-symbols-outlined text-[20px]">close</span>
      </button>
    </div>
  </div>
  <!-- Results -->
  <div class="flex-1 overflow-y-auto">
    <div class="max-w-3xl mx-auto px-4 py-5">
      <!-- Hint / no query -->
      <div id="search-overlay-hint" class="text-center py-12">
        <span class="material-symbols-outlined text-[48px] text-on-surface-variant/40">manage_search</span>
        <p class="font-body-lg text-on-surface-variant mt-3">Start typing to search products</p>
      </div>
      <!-- No results -->
      <div id="search-overlay-noresult" class="hidden text-center py-12">
        <span class="material-symbols-outlined text-[48px] text-on-surface-variant/40">search_off</span>
        <p class="font-title-lg text-on-surface mt-3 mb-1">No results found</p>
        <p class="font-body-md text-on-surface-variant">Try a different keyword or browse our categories.</p>
      </div>
      <!-- Results list -->
      <div id="search-overlay-results" class="hidden flex-col gap-3"></div>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════════════
ORDER TRACKING MODAL
══════════════════════════════════════════════ -->
<div id="order-track-overlay" onclick="handleTrackOverlayClick(event)">
  <div id="order-track-modal">
    <!-- Header -->
    <div class="flex items-center justify-between px-6 pt-6 pb-4 border-b border-outline-variant">
      <div>
        <h2 class="font-title-lg text-on-surface">Order Tracking</h2>
        <p id="ot-order-id" class="font-label-md text-secondary mt-0.5"></p>
      </div>
      <button onclick="closeOrderTracking()" class="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-all">
        <span class="material-symbols-outlined text-[20px]">close</span>
      </button>
    </div>
    <!-- Order summary -->
    <div class="px-6 py-4 bg-surface-container/40 flex items-center gap-4">
      <div id="ot-icon-wrap" class="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
        <span id="ot-icon" class="material-symbols-outlined text-secondary text-[24px]">shopping_bag</span>
      </div>
      <div class="flex-1 min-w-0">
        <p id="ot-product-name" class="font-label-md text-on-surface truncate"></p>
        <p id="ot-vendor" class="font-body-md text-xs text-on-surface-variant"></p>
      </div>
      <span id="ot-amount" class="font-title-lg text-on-surface font-bold flex-shrink-0"></span>
    </div>
    <!-- Step tracker -->
    <div class="px-6 py-6">
      <div id="ot-steps" class="flex flex-col gap-0">
        <!-- populated by JS -->
      </div>
    </div>
    <!-- ETA banner -->
    <div id="ot-eta-banner" class="mx-6 mb-6 p-4 bg-secondary/8 border border-secondary/20 rounded-xl flex items-center gap-3">
      <span class="material-symbols-outlined text-secondary text-[20px]">schedule</span>
      <div>
        <p class="font-label-md text-on-surface">Estimated Delivery</p>
        <p id="ot-eta" class="font-body-md text-sm text-on-surface-variant"></p>
      </div>
    </div>
    <!-- Actions -->
    <div class="px-6 pb-6 flex gap-3">
      <button onclick="closeOrderTracking()" class="flex-1 h-11 border border-outline-variant text-on-surface rounded-xl font-label-md hover:border-secondary hover:text-secondary transition-all">Close</button>
      <button class="flex-1 h-11 bg-secondary text-on-secondary rounded-xl font-label-md shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2">
        <span class="material-symbols-outlined text-[16px]">support_agent</span>Contact Support
      </button>
    </div>
  </div>
</div>

<!-- Cart Toast -->
<div id="cart-toast" class="fixed bottom-24 lg:bottom-6 right-4 lg:right-6 bg-on-surface text-surface px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 font-label-md z-[100] transform translate-y-4 opacity-0 transition-all duration-300 pointer-events-none">
  <span class="material-symbols-outlined text-[18px] text-secondary">check_circle</span>
  <span>Added to cart!</span>
</div>

<script>
document.addEventListener('DOMContentLoaded', () => {

  // ── State ──────────────────────────────────────
  let currentPage = 'home';
  let cartCount = 0;
  let cartItems = []; // {id, name, vendor, price, image, qty, variant, size}
  let currentUser = JSON.parse(localStorage.getItem('tshop_user') || 'null');

  // ── All searchable products ────────────────────
  const ALL_PRODUCTS = [
    {id:1,name:'Obsidian Pro Smartwatch',vendor:'Tech Haven',price:194.35,originalPrice:299,discount:35,image:'https://lh3.googleusercontent.com/aida-public/AB6AXuAb79A5HWQLyTIxXkQx5ezodKBPvZ3zPzlvdqrmteHD3OSR76YiqPQK-s6UmxkK5EKM22LsnMPO6uCgPhJ19pBkjKMuJGyOvxcmopfLNh9PV7TtgT9XXdRjErk9-o_kQkYIj9jZtjIj_SQOGbSABHlpe7NuCZeWHXA9OYXIGcxqbrexIdddOZhDsMbP_NWVnbfR392Vm8qnTQRQPHv14vERlRu5-tc_0uw_iLVYp0rn2GrZ1Smv7E2YLw',description:'The Obsidian Pro is engineered for those who demand more. AMOLED display, GPS tracking, 7-day battery, 50m water resistance.',variants:['Midnight Black','Slate Gray','Cobalt Blue'],sizes:null,category:'Electronics'},
    {id:2,name:'Kyoto Ceramic Pour-Over Set',vendor:'Artisan Goods',price:96.00,originalPrice:120,discount:20,image:'https://lh3.googleusercontent.com/aida-public/AB6AXuBwrJ_9oiKy4UB-GFoilg3ig0mIT_vAYOgS9UAJYEL1OZPzvAdOIQdO8Rh_3fJee5vX4_2VPfTQfFYOxyGRCDKF4PXr05GokdrsagJD1E39L07RsSMftb-iUH4cMs5v9xxVfZP3sIy8783r57e0HjxusEIS82qPeId5xlm5ITJM_oaPck0ObVhwGgtw5cVckMPyDsZ6gHt87Gy4nI7wrFyvY5V_9Yw3p8jRgNSb9yUMpvX9STWWZ3-_ug',description:'Handcrafted in small batches in Kyoto. Matte glaze, unique variations. Includes dripper, server and two tasting cups.',variants:['Ash White','Forest Green','Natural Clay'],sizes:null,category:'Home Decor'},
    {id:3,name:'Slate 65% Mechanical Board',vendor:'KeyChroniks',price:127.50,originalPrice:150,discount:15,image:'https://lh3.googleusercontent.com/aida-public/AB6AXuBVx_cKwBwAuXcLK0oTzk_BM7YTJRf1BtwH36cBxo9YlzL1r31CYLPfKUo_tCJsHk7S-hRpICa06-uek70Rom8VwpGwPNvhhaqUs2anx2DqRKrRq3OL3oPQitrn-3gNk1HNZMxqLT5QnYbAeIp7UX2MPYCX-fZw6FNS420PgF1h0CQ5Is8_HzSdk15s2r0Z5Zpbn4Ui-ayxoim0e6aAIDEsKbUA8KiGNZbvRi-jYBD6so-a-iUDx9aQ3g',description:'Hot-swappable Gateron switches, aluminum case, PBT double-shot keycaps, per-key RGB. QMK/VIA firmware.',variants:['Gateron Red','Gateron Brown','Gateron Blue'],sizes:null,category:'Electronics'},
    {id:4,name:'Chunky Merino Wool Throw',vendor:'Loom & Weave',price:140.00,originalPrice:280,discount:50,image:'https://lh3.googleusercontent.com/aida-public/AB6AXuDdZpCsSCnqHMubh_MNEZaLFzVUBB2Oq0hFdX48e1O-gCE_lmhfmfG90hGduiKHlxizRNGIoJeFL6ZabNfqzDIixpNnpUj3gs3VIxKy3MilLJV0PmLHm17qgxpST88Y823-u41xFArn6cW9YWfNGZuYHG6_hXA26Q5_I74m3yZzdjWykyi-zRX11Uy1U1ku2gcHz_Rah-TBYPJVEuusKT_L6jSzT0xmmZxC1Stlng4Q9jk9lVdEeRKs_w',description:'Hand-knitted from 100% extra-fine Merino wool. Naturally temperature-regulating, hypoallergenic, ethically sourced.',variants:['Oatmeal','Charcoal','Dusty Rose'],sizes:['50×60 in','60×72 in','72×84 in'],category:'Fashion'},
    {id:10,name:'Wabi-Sabi Ramen Bowl',vendor:'Clay & Kin',price:48.00,originalPrice:null,discount:null,image:'https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?w=600&q=80',description:'Hand-formed ramen bowl celebrating the beauty of imperfection. Organic ash glaze. Microwave and dishwasher safe.',variants:['Storm Blue','Terracotta','Mist White'],sizes:null,category:'Home Decor'},
    {id:11,name:'Stoneware Mug Set (2)',vendor:'Clay & Kin',price:64.00,originalPrice:80,discount:20,image:'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80',description:'Matched pair of 12oz stoneware mugs with a comfortable thrown handle. Individually glazed with subtle variations.',variants:['Matte Black','Celadon','Speckled Cream'],sizes:null,category:'Home Decor'},
    {id:20,name:'Omega Seamaster 1968',vendor:'Horology Haus',price:1240.00,originalPrice:1480,discount:16,image:'https://lh3.googleusercontent.com/aida-public/AB6AXuD9Jmc6JK3X79keqQVflll135Sc7ihED9cVdwZt4wdQ5OCCXPQML-ALu9nVF6JOTrqoudLGA1s0xGs6lLrIVd1US9o8MbN7Xxi9KuD1e7XHid5y3XjwB3qymbKo-PIZ_ytdjgZwWcBVSgALU6PlRyWGdKI8gDfSbObFjpCH4ob9e9zggr5qfdlq0fFzuwxqMatpcQA3kyp5bLa0Pl6Yxxg71-ySUYgj9YiMQR6SvNHLo8HU6G9WeNrHTA',description:'1968 Omega Seamaster near-mint. Cal. 565 automatic, recently serviced. Original matte silver dial.',variants:['Steel Bracelet','Leather Strap'],sizes:null,category:'Vintage'},
    {id:30,name:'Linen Wide-Leg Trousers',vendor:'Thread & Form',price:118.00,originalPrice:145,discount:19,image:'https://images.unsplash.com/photo-1594938298603-c8148c4b4e28?w=600&q=80',description:'Cut from 100% Portuguese linen in a relaxed wide-leg silhouette with an elasticated waist.',variants:['Ecru','Slate','Forest'],sizes:['XS','S','M','L','XL'],category:'Fashion'},
    {id:31,name:'Organic Cotton Overshirt',vendor:'Thread & Form',price:98.00,originalPrice:null,discount:null,image:'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80',description:'GOTS-certified organic cotton, relaxed body and dropped shoulders. Wear open as a light layer.',variants:['Ecru','Washed Black','Dusty Blue'],sizes:['XS','S','M','L','XL','XXL'],category:'Fashion'},
    {id:32,name:'Cashmere Roll-Neck Sweater',vendor:'Thread & Form',price:210.00,originalPrice:260,discount:19,image:'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80',description:'Grade-A Inner Mongolian cashmere roll-neck. Relaxed fit with ribbed details for a timeless feel.',variants:['Oat','Midnight Navy','Burgundy'],sizes:['XS','S','M','L','XL'],category:'Fashion'}
  ];

  // ── Apply auth state on load ───────────────────
  applyAuthState();

  // ── Page Navigation ────────────────────────────
  function navigate(page) {
    if (page === currentPage) return;
    const outgoing = document.getElementById(`page-${currentPage}`);
    const incoming = document.getElementById(`page-${page}`);
    if (!outgoing || !incoming) return;
    outgoing.classList.remove('active');
    outgoing.classList.add('exit-left');
    setTimeout(() => {
      outgoing.classList.remove('exit-left');
      incoming.classList.add('active');
      incoming.scrollTop = 0;
    }, 50);
    currentPage = page;
    updateNavState(page);
  }

  window.navigate = navigate;

  // Navigate to portal and switch to a specific auth tab
  window.navigateToPortal = function(tab) {
    navigate('portal');
    setTimeout(() => switchAuthTab(tab), 80);
  };

  // ── Auth tab switch ────────────────────────────
  window.switchAuthTab = function(tab) {
    const loginForm = document.getElementById('auth-login-form');
    const signupForm = document.getElementById('auth-signup-form');
    const tabLogin = document.getElementById('tab-login');
    const tabSignup = document.getElementById('tab-signup');

    if (tab === 'login') {
      loginForm.classList.remove('hidden');
      signupForm.classList.add('hidden');
      tabLogin.classList.add('active-tab');
      tabLogin.classList.remove('text-on-surface-variant');
      tabSignup.classList.remove('active-tab');
      tabSignup.classList.add('text-on-surface-variant');
    } else {
      loginForm.classList.add('hidden');
      signupForm.classList.remove('hidden');
      tabSignup.classList.add('active-tab');
      tabSignup.classList.remove('text-on-surface-variant');
      tabLogin.classList.remove('active-tab');
      tabLogin.classList.add('text-on-surface-variant');
    }
  };

  // ── Login/Signup type toggles ──────────────────
  window.setLoginType = function(type) {
    const cust = document.getElementById('login-type-customer');
    const vend = document.getElementById('login-type-vendor');
    if (type === 'customer') {
      cust.className = 'flex-1 py-2 rounded-lg font-label-md text-label-md bg-surface-container-lowest shadow-sm text-on-surface transition-all';
      vend.className = 'flex-1 py-2 rounded-lg font-label-md text-label-md text-on-surface-variant transition-all';
    } else {
      vend.className = 'flex-1 py-2 rounded-lg font-label-md text-label-md bg-surface-container-lowest shadow-sm text-on-surface transition-all';
      cust.className = 'flex-1 py-2 rounded-lg font-label-md text-label-md text-on-surface-variant transition-all';
    }
  };

  window.setSignupType = function(type) {
    const custBtn = document.getElementById('signup-type-customer');
    const vendBtn = document.getElementById('signup-type-vendor');
    const custFields = document.getElementById('signup-customer-fields');
    const vendFields = document.getElementById('signup-vendor-fields');
    if (type === 'customer') {
      custBtn.className = 'flex-1 py-2 rounded-lg font-label-md text-label-md bg-surface-container-lowest shadow-sm text-on-surface transition-all';
      vendBtn.className = 'flex-1 py-2 rounded-lg font-label-md text-label-md text-on-surface-variant transition-all';
      custFields.classList.remove('hidden');
      custFields.classList.add('flex');
      vendFields.classList.add('hidden');
      vendFields.classList.remove('flex');
    } else {
      vendBtn.className = 'flex-1 py-2 rounded-lg font-label-md text-label-md bg-surface-container-lowest shadow-sm text-on-surface transition-all';
      custBtn.className = 'flex-1 py-2 rounded-lg font-label-md text-label-md text-on-surface-variant transition-all';
      vendFields.classList.remove('hidden');
      vendFields.classList.add('flex');
      custFields.classList.add('hidden');
      custFields.classList.remove('flex');
    }
  };

  // ── Handle Login (mocked) ──────────────────────
  window.handleLogin = function() {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    if (!email || !password) {
      showToastMsg('Please fill in all fields.');
      return;
    }
    // Mock auth
    const name = email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1);
    currentUser = { name, email };
    localStorage.setItem('tshop_user', JSON.stringify(currentUser));
    applyAuthState();
    showToastMsg(`Welcome back, ${name}!`);
  };

  // ── Handle Signup (mocked) ─────────────────────
  window.handleSignup = function() {
    const nameEl = document.getElementById('signup-name');
    const emailEl = document.getElementById('signup-email');
    const name = nameEl ? nameEl.value.trim() : '';
    const email = emailEl ? emailEl.value.trim() : '';
    if (!email) {
      showToastMsg('Please fill in all fields.');
      return;
    }
    const displayName = name || email.split('@')[0];
    currentUser = { name: displayName, email };
    localStorage.setItem('tshop_user', JSON.stringify(currentUser));
    applyAuthState();
    showToastMsg(`Welcome to T-Shop, ${displayName}!`);
  };

  // ── Portal tab switcher ──────────────────────
  window.switchPortalTab = function(tab) {
    const tabs = ['overview', 'orders', 'settings'];
    tabs.forEach(t => {
      const btn = document.getElementById(`ptab-${t}`);
      const content = document.getElementById(`ptab-content-${t}`);
      if (!btn || !content) return;
      if (t === tab) {
        btn.classList.add('text-secondary', 'border-secondary');
        btn.classList.remove('text-on-surface-variant', 'border-transparent');
        content.classList.remove('hidden');
        content.classList.add('flex');
      } else {
        btn.classList.remove('text-secondary', 'border-secondary');
        btn.classList.add('text-on-surface-variant', 'border-transparent');
        content.classList.add('hidden');
        content.classList.remove('flex');
      }
    });
  };

  // ── Save account settings ──────────────────────
  window.saveAccountSettings = function() {
    const nameEl = document.getElementById('settings-name');
    const emailEl = document.getElementById('settings-email');
    const newName = nameEl ? nameEl.value.trim() : '';
    const newEmail = emailEl ? emailEl.value.trim() : '';
    if (!newName || !newEmail) { showToastMsg('Please fill in all fields.'); return; }
    currentUser = { ...currentUser, name: newName, email: newEmail };
    localStorage.setItem('tshop_user', JSON.stringify(currentUser));
    applyAuthState();
    showToastMsg('Settings saved successfully!');
  };

  // ── Handle Logout ──────────────────────────────
  window.handleLogout = function() {
    currentUser = null;
    localStorage.removeItem('tshop_user');
    applyAuthState();
    navigate('home');
  };

  // ── Apply auth state to UI ─────────────────────
  function applyAuthState() {
    const desktopAuthBtns = document.getElementById('desktop-auth-buttons');
    const desktopUserAvatar = document.getElementById('desktop-user-avatar');
    const desktopUsername = document.getElementById('desktop-username');
    const mobileAuthBtns = document.getElementById('mobile-auth-buttons');
    const mobileUserAvatar = document.getElementById('mobile-user-avatar');
    const portalAuthView = document.getElementById('portal-auth-view');
    const portalLoggedInView = document.getElementById('portal-logged-in-view');
    const portalWelcomeName = document.getElementById('portal-welcome-name');
    const portalWelcomeEmail = document.getElementById('portal-welcome-email');

    if (currentUser) {
      // Logged in
      desktopAuthBtns.classList.add('hidden');
      desktopUserAvatar.classList.remove('hidden');
      desktopUserAvatar.classList.add('flex');
      if (desktopUsername) desktopUsername.textContent = currentUser.name;

      mobileAuthBtns.classList.add('hidden');
      mobileUserAvatar.classList.remove('hidden');
      mobileUserAvatar.classList.add('flex');

      portalAuthView.classList.add('hidden');
      portalLoggedInView.classList.remove('hidden');
      portalLoggedInView.classList.add('flex');
      if (portalWelcomeName) portalWelcomeName.textContent = currentUser.name;
      if (portalWelcomeEmail) portalWelcomeEmail.textContent = currentUser.email;
      // Pre-fill settings form
      const sn = document.getElementById('settings-name');
      const se = document.getElementById('settings-email');
      if (sn) sn.value = currentUser.name || '';
      if (se) se.value = currentUser.email || '';
      // Reset to overview tab
      switchPortalTab('overview');
    } else {
      // Logged out
      desktopAuthBtns.classList.remove('hidden');
      desktopUserAvatar.classList.add('hidden');
      desktopUserAvatar.classList.remove('flex');

      mobileAuthBtns.classList.remove('hidden');
      mobileUserAvatar.classList.add('hidden');
      mobileUserAvatar.classList.remove('flex');

      portalAuthView.classList.remove('hidden');
      portalLoggedInView.classList.add('hidden');
      portalLoggedInView.classList.remove('flex');
    }
  }

  // ── Nav state update ───────────────────────────
  function updateNavState(page) {
    document.querySelectorAll('.nav-item').forEach(item => {
      const isActive = item.dataset.page === page;
      item.classList.toggle('active', isActive);
      item.classList.toggle('text-secondary', isActive);
      item.classList.toggle('text-on-surface-variant', !isActive);
    });
    document.querySelectorAll('.nav-desktop-link').forEach(link => {
      const isActive = link.dataset.page === page;
      link.classList.toggle('text-secondary', isActive);
      link.classList.toggle('font-bold', isActive);
      link.classList.toggle('text-on-surface-variant', !isActive);
    });
  }

  // ── Mobile nav buttons ─────────────────────────
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => navigate(btn.dataset.page));
  });

  // ── Desktop nav buttons ────────────────────────
  document.querySelectorAll('.nav-desktop-link').forEach(btn => {
    btn.addEventListener('click', () => navigate(btn.dataset.page));
  });

  // ── Cart Drawer ────────────────────────────────
  function openCartDrawer() {
    renderCartDrawer();
    const overlay = document.getElementById('cart-drawer-overlay');
    const panel = document.getElementById('cart-drawer-panel');
    overlay.classList.add('open');
    requestAnimationFrame(() => requestAnimationFrame(() => panel.classList.add('open')));
    document.body.style.overflow = 'hidden';
  }
  window.closeCartDrawer = function() {
    const panel = document.getElementById('cart-drawer-panel');
    panel.classList.remove('open');
    setTimeout(() => {
      document.getElementById('cart-drawer-overlay').classList.remove('open');
      document.body.style.overflow = '';
    }, 380);
  };
  window.handleCartOverlayClick = function(e) {
    if (e.target === document.getElementById('cart-drawer-overlay')) closeCartDrawer();
  };

  function renderCartDrawer() {
    const itemsEl = document.getElementById('cart-drawer-items');
    const emptyEl = document.getElementById('cart-drawer-empty');
    const footerEl = document.getElementById('cart-drawer-footer');
    const countEl = document.getElementById('cart-drawer-count');
    const subtotalEl = document.getElementById('cart-drawer-subtotal');
    itemsEl.innerHTML = '';
    if (cartItems.length === 0) {
      itemsEl.classList.add('hidden');
      emptyEl.classList.remove('hidden');
      emptyEl.classList.add('flex');
      footerEl.classList.add('hidden');
    } else {
      itemsEl.classList.remove('hidden');
      emptyEl.classList.add('hidden');
      emptyEl.classList.remove('flex');
      footerEl.classList.remove('hidden');
      footerEl.classList.add('flex');
      let subtotal = 0;
      cartItems.forEach(item => {
        subtotal += item.price * item.qty;
        const row = document.createElement('div');
        row.className = 'flex gap-3 p-3 bg-surface-container-lowest rounded-xl shadow-sm';
        const variantText = item.variant ? `<span class="text-[10px] text-on-surface-variant">${item.variant}</span>` : '';
        row.innerHTML = `
          <div class="w-20 h-20 rounded-lg overflow-hidden bg-surface-container flex-shrink-0">
            <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover" loading="lazy">
          </div>
          <div class="flex-1 min-w-0 flex flex-col gap-1">
            <div class="flex items-start justify-between gap-2">
              <p class="font-label-md text-on-surface text-[13px] leading-tight line-clamp-2 flex-1">${item.name}</p>
              <button onclick="removeCartItem(${item.id})" class="w-7 h-7 flex-shrink-0 rounded-full hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-error transition-all">
                <span class="material-symbols-outlined text-[16px]">close</span>
              </button>
            </div>
            <p class="font-label-sm text-on-surface-variant text-[11px]">${item.vendor} ${variantText}</p>
            <div class="flex items-center justify-between mt-auto pt-1">
              <div class="flex items-center border border-outline-variant rounded-lg overflow-hidden h-8">
                <button onclick="adjustCartItemQty(${item.id}, -1)" class="w-8 h-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors text-[14px]">−</button>
                <span class="w-8 text-center font-label-md text-on-surface text-[13px]">${item.qty}</span>
                <button onclick="adjustCartItemQty(${item.id}, 1)" class="w-8 h-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors text-[14px]">+</button>
              </div>
              <span class="font-label-md text-secondary font-bold">$${(item.price * item.qty).toFixed(2)}</span>
            </div>
          </div>`;
        itemsEl.appendChild(row);
      });
      if (countEl) countEl.textContent = cartItems.reduce((s,i) => s + i.qty, 0);
      if (subtotalEl) subtotalEl.textContent = '$' + subtotal.toFixed(2);
    }
  }

  window.removeCartItem = function(id) {
    cartItems = cartItems.filter(i => i.id !== id);
    syncCartCount();
    renderCartDrawer();
  };
  window.adjustCartItemQty = function(id, delta) {
    const item = cartItems.find(i => i.id === id);
    if (!item) return;
    item.qty = Math.max(1, item.qty + delta);
    syncCartCount();
    renderCartDrawer();
  };
  function syncCartCount() {
    cartCount = cartItems.reduce((s,i) => s + i.qty, 0);
    document.getElementById('cart-count-desktop').textContent = cartCount;
    document.getElementById('cart-count-mobile').textContent = cartCount;
    const dc = document.getElementById('cart-drawer-count');
    if (dc) dc.textContent = cartCount;
  }
  function addToCartState(product, qty = 1, variant = null) {
    const existing = cartItems.find(i => i.id === product.id && i.variant === variant);
    if (existing) { existing.qty += qty; }
    else { cartItems.push({ id: product.id, name: product.name, vendor: product.vendor, price: product.price, image: product.image, qty, variant: variant || (product.variants ? product.variants[0] : null) }); }
    syncCartCount();
  }

  // Cart button wiring
  document.getElementById('cart-btn-desktop')?.addEventListener('click', openCartDrawer);
  document.getElementById('cart-btn-mobile')?.addEventListener('click', openCartDrawer);

  // ── Cart counter (legacy shim) ─────────────────
  window.updateCartCount = function(n) {
    cartCount = n;
    document.getElementById('cart-count-desktop').textContent = n;
    document.getElementById('cart-count-mobile').textContent = n;
  }

  window.showCartToast = function showCartToast() {
    const toast = document.getElementById('cart-toast');
    toast.style.transform = 'translateY(0)';
    toast.style.opacity = '1';
    toast.style.pointerEvents = 'auto';
    setTimeout(() => {
      toast.style.transform = 'translateY(4px)';
      toast.style.opacity = '0';
      toast.style.pointerEvents = 'none';
    }, 2200);
  }

  window.showToastMsg = function showToastMsg(msg) {
    const toast = document.getElementById('cart-toast');
    const span = toast.querySelector('span:last-child');
    const origMsg = span.textContent;
    span.textContent = msg;
    toast.style.transform = 'translateY(0)';
    toast.style.opacity = '1';
    toast.style.pointerEvents = 'auto';
    setTimeout(() => {
      toast.style.transform = 'translateY(4px)';
      toast.style.opacity = '0';
      toast.style.pointerEvents = 'none';
      setTimeout(() => { span.textContent = origMsg; }, 400);
    }, 2800);
  }

  document.querySelectorAll('.add-to-cart').forEach((btn, idx) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      btn.style.transform = 'scale(0.85)';
      setTimeout(() => { btn.style.transform = 'scale(1.15)'; }, 100);
      setTimeout(() => { btn.style.transform = 'scale(1)'; }, 220);
      // Try to get the product from the known list by index
      const products = [null,...ALL_PRODUCTS];
      const articleEl = btn.closest('article');
      if (articleEl) {
        const oc = articleEl.getAttribute('onclick') || '';
        const match = oc.match(/id:(\d+)/);
        if (match) {
          const pid = parseInt(match[1]);
          const p = ALL_PRODUCTS.find(x => x.id === pid);
          if (p) { addToCartState(p, 1); showCartToast(); return; }
        }
      }
      addToCartState({ id: Date.now(), name: 'Product', vendor: '', price: 0, image: '', variants: null }, 1);
      showCartToast();
    });
  });

  // ── Favorite toggle ────────────────────────────
  document.querySelectorAll('.fav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const icon = btn.querySelector('.mat-icon');
      const isActive = icon.classList.contains('fav-active');
      icon.style.transform = 'scale(0.7)';
      setTimeout(() => {
        icon.style.transform = 'scale(1.3)';
        icon.classList.toggle('fav-active', !isActive);
        icon.style.fontVariationSettings = isActive ? "'FILL' 0" : "'FILL' 1";
      }, 100);
      setTimeout(() => { icon.style.transform = 'scale(1)'; }, 230);
    });
  });

  // ── Mobile search bar (legacy hidden bar - disabled in favour of overlay) ─
  // Mobile search now opens the full overlay instead

  // ── Deal filter pills ──────────────────────────
  document.querySelectorAll('.deal-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.deal-pill').forEach(p => {
        p.classList.remove('pill-active');
        p.classList.add('bg-surface-container', 'text-on-surface-variant');
      });
      pill.classList.add('pill-active');
      pill.classList.remove('bg-surface-container', 'text-on-surface-variant');
    });
  });

  // ── Vendor filter pills ────────────────────────
  document.querySelectorAll('.vendor-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.vendor-pill').forEach(p => {
        p.classList.remove('pill-active');
        p.classList.add('bg-surface-container', 'text-on-surface');
      });
      pill.classList.add('pill-active');
      pill.classList.remove('bg-surface-container', 'text-on-surface');
    });
  });

  // ── Flash sale countdown ───────────────────────
  let totalSeconds = 4 * 3600 + 12 * 60 + 39;
  function formatTime(s) {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
  }
  const display = document.getElementById('countdown-display');
  if (display) {
    setInterval(() => {
      if (totalSeconds > 0) { totalSeconds--; display.textContent = formatTime(totalSeconds); }
    }, 1000);
  }

  // ── Initial nav state ──────────────────────────
  updateNavState('home');

  // ── Vendor Data ──────────────────────────────
  const VENDORS = {
    'clay-kin': {
      id:'clay-kin', name:'Clay & Kin', category:'Handmade', rating:'4.9', reviewCount:'(312 reviews)',
      bio:'Small-batch functional ceramics designed for daily rituals. Each piece is thrown on a kick wheel and fired in our solar-powered kiln using locally sourced clay. Based in Kyoto, shipping worldwide.',
      banner:'https://lh3.googleusercontent.com/aida-public/AB6AXuDe6vrZgwnUnjmi85qCKrhwjfIHc8cxvoVLo0iO9A2AEFCULpDUFx1-PdhL4YwLlg64o5CeOd10jF3AYe06kEBxbx_kZk4g4n5agmTL7eUoCNwKm0TmYy3epNLpdvj893nbgHpbuaVN5d_GmXVauhp9m6iU2M188DKZEWAE6Nt3yjJWlPbgXtCKUNQak6XOoK3lttzxeDRkLF5XGmpEWEDX3yZJPoA_e6s6_rf7PvIrZtysiSdJn0cf1Q',
      avatar:'https://lh3.googleusercontent.com/aida-public/AB6AXuBWc7s5SMmNTQt5TpFB2BKWK1_HRXelieB89r0J_uxT8Egz5EEeNgLaFxlK0UXs-Uxai3kYLKZjaCogqcU1CV1ExxyM7vE0e6-gAE1DWOFdCEecILswcJYwFZ5mi5DR9VcwVDl77O0J34Yo19LRm7Z_bmhF8EWpTSUOhAkbjhF5OtN1prKHQJA_1cMaqsedEqS3d-9PM--V6NGsY83V9yPW7ilXW4ivgB2r4Q2tG6ZO5lL87IyGS9KhFA',
      products:42, sales:'1.2k', since:'2020',
      items:[
        {id:10,name:'Kyoto Ceramic Pour-Over Set',vendor:'Clay & Kin',price:96.00,originalPrice:120,discount:20,image:'https://lh3.googleusercontent.com/aida-public/AB6AXuBwrJ_9oiKy4UB-GFoilg3ig0mIT_vAYOgS9UAJYEL1OZPzvAdOIQdO8Rh_3fJee5vX4_2VPfTQfFYOxyGRCDKF4PXr05GokdrsagJD1E39L07RsSMftb-iUH4cMs5v9xxVfZP3sIy8783r57e0HjxusEIS82qPeId5xlm5ITJM_oaPck0ObVhwGgtw5cVckMPyDsZ6gHt87Gy4nI7wrFyvY5V_9Yw3p8jRgNSb9yUMpvX9STWWZ3-_ug',description:'Handcrafted pour-over set thrown on a kick wheel and fired at 1280°C. Matte glaze with unique variations. Includes dripper, server, and two tasting cups.',variants:['Ash White','Forest Green','Natural Clay'],sizes:null,category:'Home Decor'},
        {id:11,name:'Wabi-Sabi Ramen Bowl',vendor:'Clay & Kin',price:48.00,originalPrice:null,discount:null,image:'https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?w=600&q=80',description:'A hand-formed ramen bowl celebrating the beauty of imperfection. Finished with an organic ash glaze. Microwave and dishwasher safe.',variants:['Storm Blue','Terracotta','Mist White'],sizes:null,category:'Home Decor'},
        {id:12,name:'Stoneware Mug Set (2)',vendor:'Clay & Kin',price:64.00,originalPrice:80,discount:20,image:'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80',description:'A matched pair of 12oz stoneware mugs with a comfortable thrown handle. Each mug is individually glazed creating subtle variations. Perfect for morning rituals.',variants:['Matte Black','Celadon','Speckled Cream'],sizes:null,category:'Home Decor'},
        {id:13,name:'Ceramic Bud Vase Trio',vendor:'Clay & Kin',price:72.00,originalPrice:90,discount:20,image:'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80',description:'Three complementary bud vases in varying heights. Each set is unique; no two are identical. Unglazed exterior for a raw, natural texture.',variants:['Natural Clay','Smoky Quartz','Midnight'],sizes:null,category:'Home Decor'},
        {id:14,name:'Hand-Pinched Incense Tray',vendor:'Clay & Kin',price:34.00,originalPrice:null,discount:null,image:'https://images.unsplash.com/photo-1602928309554-2f4b2b0b5e0c?w=600&q=80',description:'A meditative hand-pinched tray for incense sticks and cones. Organic edges and a smooth, heat-resistant glaze interior.',variants:['White Sand','River Stone'],sizes:null,category:'Home Decor'},
        {id:15,name:'Carved Soy Candle Vessel',vendor:'Clay & Kin',price:58.00,originalPrice:null,discount:null,image:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',description:'A hand-carved ceramic vessel filled with natural soy wax and cedarwood essential oil. Reuse as a planter or catch-all after the candle is spent.',variants:['Oatmeal','Graphite','Rust'],sizes:null,category:'Home Decor'}
      ]
    },
    'horology-haus': {
      id:'horology-haus', name:'Horology Haus', category:'Vintage', rating:'4.8', reviewCount:'(187 reviews)',
      bio:'Curated vintage timepieces from the 1950s–1980s, fully serviced by our certified watchmakers. Each piece comes with a 1-year movement guarantee. Headquartered in Geneva, trusted worldwide.',
      banner:'https://lh3.googleusercontent.com/aida-public/AB6AXuD9Jmc6JK3X79keqQVflll135Sc7ihED9cVdwZt4wdQ5OCCXPQML-ALu9nVF6JOTrqoudLGA1s0xGs6lLrIVd1US9o8MbN7Xxi9KuD1e7XHid5y3XjwB3qymbKo-PIZ_ytdjgZwWcBVSgALU6PlRyWGdKI8gDfSbObFjpCH4ob9e9zggr5qfdlq0fFzuwxqMatpcQA3kyp5bLa0Pl6Yxxg71-ySUYgj9YiMQR6SvNHLo8HU6G9WeNrHTA',
      avatar:'https://lh3.googleusercontent.com/aida-public/AB6AXuDr4roiCD5FjaKoyi-hgKn6UIqcl9Znd1qAJBrjQO79uoxGOXb3RpfQaWZ8GOQ7dQ6syBFFjhFMWcFED7g6jIL2uI3b2YIrUGq0abFP9c-2UHkGcyh9_zLSJ417oydZkqcxlTH5fA3OQb7ec5AZKAmfOxTYpQ8NLnJKzYMRRpoUUaLbZqFMwdJXA96C0J_coV6UvS33DeICAgMJsDnMAnrE-pFfdVU5-XNzqnXGFob2bs0B-m_gXd5IUw',
      products:28, sales:'890', since:'2019',
      items:[
        {id:20,name:'Omega Seamaster 1968',vendor:'Horology Haus',price:1240.00,originalPrice:1480,discount:16,image:'https://lh3.googleusercontent.com/aida-public/AB6AXuD9Jmc6JK3X79keqQVflll135Sc7ihED9cVdwZt4wdQ5OCCXPQML-ALu9nVF6JOTrqoudLGA1s0xGs6lLrIVd1US9o8MbN7Xxi9KuD1e7XHid5y3XjwB3qymbKo-PIZ_ytdjgZwWcBVSgALU6PlRyWGdKI8gDfSbObFjpCH4ob9e9zggr5qfdlq0fFzuwxqMatpcQA3kyp5bLa0Pl6Yxxg71-ySUYgj9YiMQR6SvNHLo8HU6G9WeNrHTA',description:'An iconic 1968 Omega Seamaster in near-mint condition. Cal. 565 automatic movement, recently serviced. Original matte silver dial with applied indices and signed crown.',variants:['Steel Bracelet','Leather Strap'],sizes:null,category:'Electronics'},
        {id:21,name:'Seiko 5 Sports 1975',vendor:'Horology Haus',price:320.00,originalPrice:390,discount:18,image:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',description:'A legendary Seiko 5 Sports from 1975 with the original green dial. 21-jewel automatic movement, day-date display, 70m water-resistance. Fully serviced.',variants:['Original Bracelet','NATO Strap'],sizes:null,category:'Electronics'},
        {id:22,name:'Longines Heritage 1972',vendor:'Horology Haus',price:890.00,originalPrice:null,discount:null,image:'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=600&q=80',description:'A graceful 1972 Longines in 18k gold-filled case. Manual-wound movement with a paper-thin profile. Sunburst cream dial and blued Breguet hands in exceptional condition.',variants:['Original Bracelet'],sizes:null,category:'Electronics'},
        {id:23,name:'Bulova Accutron 1966',vendor:'Horology Haus',price:680.00,originalPrice:750,discount:9,image:'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&q=80',description:'The groundbreaking Accutron Spaceview with its iconic skeletonized dial showcasing the tuning-fork movement. A true piece of horological history from the Space Age.',variants:['Gold-filled Case'],sizes:null,category:'Electronics'},
        {id:24,name:'Tissot Seastar 1971',vendor:'Horology Haus',price:540.00,originalPrice:620,discount:13,image:'https://images.unsplash.com/photo-1580287192246-0f0c5060b9be?w=600&q=80',description:'A robust 1971 Tissot Seastar dive watch. Cal. 784 automatic movement, 150m water resistance. Comes on a period-correct riveted bracelet.',variants:['Original Bracelet','Diver Strap'],sizes:null,category:'Electronics'}
      ]
    },
    'thread-form': {
      id:'thread-form', name:'Thread & Form', category:'Apparel', rating:'5.0', reviewCount:'(428 reviews)',
      bio:'Sustainable, ethically produced everyday wear focused on natural fibers and timeless silhouettes. All garments are cut and sewn in a certified fair-trade facility in Portugal. Zero synthetic fibers, ever.',
      banner:'https://lh3.googleusercontent.com/aida-public/AB6AXuAEW82vC8DQxH_F6MdgxIS0u9HHEl-JD1KpjJaFtkXLQQ2VF9Iq5xgwPet2fpAXFFD5knJaZ_fuaeJq-UH6DYYoZ74vreX2PaV3vDmGRem1rorbRN1Uh7IpAFtJubt3vkcp5wPBMcROZytbN7iyUpbCd3CZe5FvVAPz6neJv5h0OMyYJqo9Q1glWLT9dxlK8nuOAKyDfeIuuoNdOZBo35fcn9FQ_-iqz3kfUo-v0_cd4xbnzLhbO3FknA',
      avatar:'https://lh3.googleusercontent.com/aida-public/AB6AXuBoDuSBi3C_VJaPQ-9Sv1tWg1v2bjTlTtPISvqvcwLxdqcf1AsCgWQo6CChZRna-vZ8rqPkikGFfDesRIefguybznV6ZgQw3QiyxbmBnIfe_J6E4r1Le3K9QrpBT84AKwY-yh4aIjC2A9hOTS_sHcdXIycoWOySxekt5XIaSwQBQ9CZNCN6hrs-kHY0TX9KqJIG9TcTP8tgTEwzrlFCB1b_lj_1gjs_sVWpGvZuGuBfo1Y3Eve8vvUBFg',
      products:56, sales:'2.4k', since:'2018',
      items:[
        {id:30,name:'Chunky Merino Wool Throw',vendor:'Thread & Form',price:140.00,originalPrice:280,discount:50,image:'https://lh3.googleusercontent.com/aida-public/AB6AXuDdZpCsSCnqHMubh_MNEZaLFzVUBB2Oq0hFdX48e1O-gCE_lmhfmfG90hGduiKHlxizRNGIoJeFL6ZabNfqzDIixpNnpUj3gs3VIxKy3MilLJV0PmLHm17qgxpST88Y823-u41xFArn6cW9YWfNGZuYHG6_hXA26Q5_I74m3yZzdjWykyi-zRX11Uy1U1ku2gcHz_Rah-TBYPJVEuusKT_L6jSzT0xmmZxC1Stlng4Q9jk9lVdEeRKs_w',description:'Hand-knitted from 100% extra-fine Merino wool. Naturally temperature-regulating and hypoallergenic. Ethically sourced from free-range flocks in New Zealand.',variants:['Oatmeal','Charcoal','Dusty Rose'],sizes:['50x60 in','60x72 in','72x84 in'],category:'Fashion'},
        {id:31,name:'Linen Wide-Leg Trousers',vendor:'Thread & Form',price:118.00,originalPrice:145,discount:19,image:'https://images.unsplash.com/photo-1594938298603-c8148c4b4e28?w=600&q=80',description:'Cut from 100% Portuguese linen in a relaxed wide-leg silhouette with an elasticated waist. Pre-washed for softness.',variants:['Ecru','Slate','Forest'],sizes:['XS','S','M','L','XL'],category:'Fashion'},
        {id:32,name:'Organic Cotton Overshirt',vendor:'Thread & Form',price:98.00,originalPrice:null,discount:null,image:'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80',description:'A generously cut shirt in 100% GOTS-certified organic cotton with a relaxed body and dropped shoulders. Wear open as a light layer.',variants:['Ecru','Washed Black','Dusty Blue'],sizes:['XS','S','M','L','XL','XXL'],category:'Fashion'},
        {id:33,name:'Cashmere Roll-Neck Sweater',vendor:'Thread & Form',price:210.00,originalPrice:260,discount:19,image:'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80',description:'Luxuriously soft roll-neck in Grade-A Inner Mongolian cashmere. Relaxed fit and ribbed details for a contemporary yet timeless feel.',variants:['Oat','Midnight Navy','Burgundy'],sizes:['XS','S','M','L','XL'],category:'Fashion'},
        {id:34,name:'Natural Linen Tote Bag',vendor:'Thread & Form',price:58.00,originalPrice:null,discount:null,image:'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&q=80',description:'Heavyweight stonewashed linen tote with cotton canvas lining and interior zip pocket. Sturdy enough for groceries, books, or a full day at the beach.',variants:['Natural','Charcoal','Terracotta'],sizes:null,category:'Fashion'},
        {id:35,name:'Wool Felt Bucket Hat',vendor:'Thread & Form',price:74.00,originalPrice:88,discount:16,image:'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=600&q=80',description:'A sculptural bucket hat made from 100% boiled wool felt. Water-repellent and windproof, designed for the shoulder seasons.',variants:['Stone','Olive','Black'],sizes:['S/M','L/XL'],category:'Fashion'}
      ]
    }
  };

  // ── Open Vendor Detail ────────────────────────
  window.openVendorDetail = function(vendorId) {
    const v = VENDORS[vendorId];
    if (!v) return;
    document.getElementById('vd-banner').src = v.banner;
    document.getElementById('vd-avatar').src = v.avatar;
    document.getElementById('vd-name').textContent = v.name;
    document.getElementById('vd-category-badge').textContent = v.category;
    document.getElementById('vd-rating').textContent = v.rating;
    document.getElementById('vd-review-count').textContent = v.reviewCount;
    document.getElementById('vd-bio').textContent = v.bio;
    document.getElementById('vd-stat-products').textContent = v.products;
    document.getElementById('vd-stat-sales').textContent = v.sales;
    document.getElementById('vd-stat-since').textContent = v.since;
    document.getElementById('vd-product-count').textContent = v.items.length + ' items';

    const grid = document.getElementById('vd-product-grid');
    grid.innerHTML = '';
    const delays = ['delay-1','delay-2','delay-3','delay-4','delay-5','delay-6'];
    v.items.forEach((product, i) => {
      const dl = delays[i] || '';
      const badge = product.discount ? `<div class="absolute top-2 left-2 bg-error text-on-error px-2 py-0.5 rounded font-label-sm shadow-sm text-[11px]">-${product.discount}%</div>` : '';
      const orig = product.originalPrice ? `<span class="text-[11px] text-on-surface-variant line-through">$${product.originalPrice.toFixed(2)}</span>` : '';
      const safeData = JSON.stringify(product);
      const article = document.createElement('article');
      article.className = `bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col group hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative fade-in-up ${dl} cursor-pointer`;
      article.innerHTML = `
        <button class="fav-btn-vd absolute top-2 right-2 w-8 h-8 bg-surface/80 backdrop-blur-sm rounded-full flex items-center justify-center text-on-surface-variant z-10 hover:scale-110 transition-all">
          <span class="material-symbols-outlined mat-icon text-[20px]">favorite</span>
        </button>
        <div class="w-full aspect-[4/5] bg-surface-container-low overflow-hidden relative">
          ${badge}
          <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" src="${product.image}" alt="${product.name}">
        </div>
        <div class="p-3 flex flex-col gap-1 flex-1">
          <span class="text-[10px] text-on-surface-variant uppercase tracking-wider">${product.vendor}</span>
          <h3 class="font-label-md text-on-surface line-clamp-2 leading-tight flex-1">${product.name}</h3>
          <div class="flex items-end justify-between mt-auto pt-1">
            <div>${orig}<span class="font-title-lg text-secondary block">$${product.price.toFixed(2)}</span></div>
            <button class="vd-cart-btn w-8 h-8 bg-primary text-on-primary rounded-full flex items-center justify-center hover:bg-secondary transition-colors shadow-sm">
              <span class="material-symbols-outlined text-[16px]">add_shopping_cart</span>
            </button>
          </div>
        </div>`;
      article.addEventListener('click', () => openProductModal(product));
      article.querySelector('.vd-cart-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        const btn = e.currentTarget;
        btn.style.transform = 'scale(0.85)';
        setTimeout(() => { btn.style.transform = 'scale(1.15)'; }, 100);
        setTimeout(() => { btn.style.transform = 'scale(1)'; }, 220);
        addToCartState(product, 1);
        showCartToast();
      });
      article.querySelector('.fav-btn-vd').addEventListener('click', (e) => {
        e.stopPropagation();
        const icon = e.currentTarget.querySelector('.mat-icon');
        const active = icon.classList.contains('fav-active');
        icon.style.transform = 'scale(0.7)';
        setTimeout(() => { icon.style.transform = 'scale(1.3)'; icon.classList.toggle('fav-active', !active); icon.style.fontVariationSettings = active ? "'FILL' 0" : "'FILL' 1"; }, 100);
        setTimeout(() => { icon.style.transform = 'scale(1)'; }, 230);
      });
      grid.appendChild(article);
    });
    navigate('vendor-detail');
  };

  // ── Product Modal Logic ────────────────────────
  let modalQty = 1;
  let modalProduct = null;

  window.openProductModal = function(product) {
    modalProduct = product;
    modalQty = 1;

    // Populate image
    const img = document.getElementById('modal-product-img');
    img.src = product.image;
    img.alt = product.name;

    // Name, vendor, category, description
    document.getElementById('modal-product-name').textContent = product.name;
    document.getElementById('modal-vendor').textContent = product.vendor;
    document.getElementById('modal-category').textContent = product.category;
    document.getElementById('modal-description').textContent = product.description;

    // Price
    document.getElementById('modal-price').textContent = '$' + product.price.toFixed(2);
    const origEl = document.getElementById('modal-original-price');
    if (product.originalPrice) {
      origEl.textContent = '$' + product.originalPrice.toFixed(2);
      origEl.classList.remove('hidden');
    } else {
      origEl.classList.add('hidden');
    }

    // Discount badge
    const badge = document.getElementById('modal-discount-badge');
    if (product.discount) {
      badge.classList.remove('hidden');
      document.getElementById('modal-discount-text').textContent = '-' + product.discount + '%';
    } else {
      badge.classList.add('hidden');
    }

    // Variants
    const varSection = document.getElementById('modal-variants-section');
    const varList = document.getElementById('modal-variants-list');
    varList.innerHTML = '';
    if (product.variants && product.variants.length) {
      varSection.classList.remove('hidden');
      product.variants.forEach((v, i) => {
        const btn = document.createElement('button');
        btn.textContent = v;
        btn.className = 'variant-pill px-4 py-2 rounded-full border border-outline-variant font-label-md text-on-surface hover:border-secondary hover:text-secondary transition-all';
        if (i === 0) {
          btn.classList.add('selected');
          document.getElementById('modal-selected-variant').textContent = v;
        }
        btn.addEventListener('click', () => {
          varList.querySelectorAll('.variant-pill').forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
          document.getElementById('modal-selected-variant').textContent = v;
        });
        varList.appendChild(btn);
      });
    } else {
      varSection.classList.add('hidden');
    }

    // Sizes
    const sizeSection = document.getElementById('modal-sizes-section');
    const sizeList = document.getElementById('modal-sizes-list');
    sizeList.innerHTML = '';
    if (product.sizes && product.sizes.length) {
      sizeSection.classList.remove('hidden');
      product.sizes.forEach((s, i) => {
        const btn = document.createElement('button');
        btn.textContent = s;
        btn.className = 'variant-pill px-4 py-2 rounded-xl border border-outline-variant font-label-md text-on-surface hover:border-secondary hover:text-secondary transition-all';
        if (i === 0) {
          btn.classList.add('selected');
          document.getElementById('modal-selected-size').textContent = s;
        }
        btn.addEventListener('click', () => {
          sizeList.querySelectorAll('.variant-pill').forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
          document.getElementById('modal-selected-size').textContent = s;
        });
        sizeList.appendChild(btn);
      });
    } else {
      sizeSection.classList.add('hidden');
    }

    // Reset qty
    document.getElementById('modal-qty-display').textContent = '1';

    // Open overlay
    const overlay = document.getElementById('product-modal-overlay');
    const sheet = document.getElementById('product-modal-sheet');
    overlay.classList.add('open');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => { sheet.classList.add('open'); });
    });
    document.body.style.overflow = 'hidden';
  };

  window.closeProductModal = function() {
    const overlay = document.getElementById('product-modal-overlay');
    const sheet = document.getElementById('product-modal-sheet');
    sheet.classList.remove('open');
    setTimeout(() => {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }, 380);
  };

  window.handleModalOverlayClick = function(e) {
    if (e.target === document.getElementById('product-modal-overlay')) closeProductModal();
  };

  window.adjustModalQty = function(delta) {
    modalQty = Math.max(1, Math.min(99, modalQty + delta));
    document.getElementById('modal-qty-display').textContent = modalQty;
  };

  window.addModalItemToCart = function() {
    if (!modalProduct) return;
    const btn = document.getElementById('modal-add-to-cart-btn');
    btn.style.transform = 'scale(0.93)';
    btn.innerHTML = '<span class="material-symbols-outlined text-[20px]">check</span> Added!';
    setTimeout(() => {
      btn.style.transform = 'scale(1)';
      setTimeout(() => {
        btn.innerHTML = '<span class="material-symbols-outlined text-[20px]">add_shopping_cart</span> Add to Cart';
      }, 1200);
    }, 120);
    const selectedVariant = document.querySelector('#modal-variants-list .variant-pill.selected')?.textContent || null;
    addToCartState(modalProduct, modalQty, selectedVariant);
    showCartToast();
  };

  window.toggleModalWishlist = function(btn) {
    const icon = btn.querySelector('.mat-icon');
    const isActive = icon.classList.contains('fav-active');
    icon.style.transform = 'scale(0.7)';
    setTimeout(() => {
      icon.style.transform = 'scale(1.3)';
      icon.classList.toggle('fav-active', !isActive);
      icon.style.fontVariationSettings = isActive ? "'FILL' 0" : "'FILL' 1";
    }, 100);
    setTimeout(() => { icon.style.transform = 'scale(1)'; }, 230);
  };

  // Keyboard close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
      closeCartDrawer();
      closeSearchOverlay();
      closeOrderTracking();
    }
  });

  // ── Search Overlay ────────────────────────────
  function openSearchOverlay() {
    const overlay = document.getElementById('search-overlay');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => document.getElementById('search-overlay-input')?.focus(), 150);
  }
  window.closeSearchOverlay = function() {
    document.getElementById('search-overlay').classList.remove('open');
    document.getElementById('search-overlay-input').value = '';
    showSearchState('hint');
    document.body.style.overflow = '';
  };

  function showSearchState(state) {
    document.getElementById('search-overlay-hint').classList.toggle('hidden', state !== 'hint');
    document.getElementById('search-overlay-noresult').classList.toggle('hidden', state !== 'noresult');
    const res = document.getElementById('search-overlay-results');
    res.classList.toggle('hidden', state !== 'results');
    res.classList.toggle('flex', state === 'results');
  }

  document.getElementById('search-overlay-input')?.addEventListener('input', function() {
    const q = this.value.trim().toLowerCase();
    if (!q) { showSearchState('hint'); return; }
    const filtered = ALL_PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.vendor.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
    if (filtered.length === 0) { showSearchState('noresult'); return; }
    showSearchState('results');
    const container = document.getElementById('search-overlay-results');
    container.innerHTML = '';
    filtered.forEach(p => {
      const row = document.createElement('div');
      row.className = 'flex items-center gap-4 p-3 bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md cursor-pointer transition-all group';
      const discBadge = p.discount ? `<span class="ml-1 px-1.5 py-0.5 bg-error/10 text-error rounded font-label-sm text-[10px]">-${p.discount}%</span>` : '';
      row.innerHTML = `
        <div class="w-16 h-16 rounded-xl overflow-hidden bg-surface-container flex-shrink-0">
          <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">
        </div>
        <div class="flex-1 min-w-0">
          <p class="font-label-md text-on-surface line-clamp-1">${p.name}</p>
          <p class="font-label-sm text-on-surface-variant text-[11px] mt-0.5">${p.vendor} · ${p.category}</p>
          <div class="flex items-center gap-1 mt-1">
            <span class="font-title-lg text-secondary text-[15px]">$${p.price.toFixed(2)}</span>
            ${p.originalPrice ? `<span class="font-label-sm text-on-surface-variant text-[11px] line-through">$${p.originalPrice}</span>` : ''}${discBadge}
          </div>
        </div>
        <button class="search-add-cart w-10 h-10 bg-secondary text-on-secondary rounded-xl flex items-center justify-center shadow-sm hover:shadow-md hover:scale-110 active:scale-95 transition-all flex-shrink-0">
          <span class="material-symbols-outlined text-[18px]">add_shopping_cart</span>
        </button>`;
      row.querySelector('.search-add-cart').addEventListener('click', (e) => {
        e.stopPropagation();
        addToCartState(p, 1);
        showCartToast();
        const btn = e.currentTarget;
        btn.style.transform = 'scale(0.85)';
        setTimeout(() => btn.style.transform = 'scale(1)', 200);
      });
      row.addEventListener('click', () => {
        closeSearchOverlay();
        setTimeout(() => openProductModal(p), 200);
      });
      container.appendChild(row);
    });
  });

  // Wire search buttons to overlay
  document.getElementById('mobile-search-btn')?.addEventListener('click', openSearchOverlay);
  document.getElementById('desktop-search')?.addEventListener('focus', openSearchOverlay);

  // ── Order Tracking Modal ──────────────────────
  const ORDER_TRACKING_DATA = {
    '#TS-2847': {
      product: 'Obsidian Pro Smartwatch', vendor: 'Tech Haven · #TS-2847',
      amount: '$194.35', icon: 'watch', currentStep: 4, eta: 'Delivered on Aug 14, 2026',
      steps: [
        { label: 'Order Placed', desc: 'We received your order', time: 'Aug 9, 2026 · 2:14 PM', done: true },
        { label: 'Processing', desc: 'Vendor is preparing your item', time: 'Aug 10, 2026 · 9:03 AM', done: true },
        { label: 'Shipped', desc: 'Package handed to carrier (FedEx)', time: 'Aug 11, 2026 · 4:55 PM', done: true },
        { label: 'Out for Delivery', desc: 'On a vehicle near you', time: 'Aug 14, 2026 · 8:22 AM', done: true },
        { label: 'Delivered', desc: 'Package delivered to front door', time: 'Aug 14, 2026 · 1:47 PM', done: true }
      ]
    },
    '#TS-2791': {
      product: 'Kyoto Ceramic Pour-Over Set', vendor: 'Artisan Goods · #TS-2791',
      amount: '$96.00', icon: 'coffee', currentStep: 2, eta: 'Estimated delivery: Aug 19–21, 2026',
      steps: [
        { label: 'Order Placed', desc: 'We received your order', time: 'Aug 9, 2026 · 11:30 AM', done: true },
        { label: 'Processing', desc: 'Vendor is preparing your item', time: 'Aug 9, 2026 · 4:15 PM', done: true },
        { label: 'Shipped', desc: 'Package handed to carrier (DHL)', time: 'Aug 10, 2026 · 7:40 AM', done: true },
        { label: 'Out for Delivery', desc: 'Arriving soon', time: 'Expected Aug 19', done: false },
        { label: 'Delivered', desc: 'Awaiting delivery', time: '', done: false }
      ]
    },
    '#TS-2764': {
      product: 'Chunky Merino Wool Throw', vendor: 'Loom & Weave · #TS-2764',
      amount: '$140.00', icon: 'inventory_2', currentStep: 1, eta: 'Estimated dispatch: Aug 10, 2026',
      steps: [
        { label: 'Order Placed', desc: 'We received your order', time: 'Aug 3, 2026 · 9:01 AM', done: true },
        { label: 'Processing', desc: 'Vendor is preparing your item', time: 'In progress…', done: true },
        { label: 'Shipped', desc: 'Awaiting shipment', time: '', done: false },
        { label: 'Out for Delivery', desc: '', time: '', done: false },
        { label: 'Delivered', desc: '', time: '', done: false }
      ]
    },
    '#TS-2720': {
      product: 'Slate 65% Mechanical Board', vendor: 'KeyChroniks · #TS-2720',
      amount: '$127.50', icon: 'keyboard', currentStep: 4, eta: 'Delivered on Jul 31, 2026',
      steps: [
        { label: 'Order Placed', desc: 'We received your order', time: 'Jul 28, 2026 · 6:22 PM', done: true },
        { label: 'Processing', desc: 'Vendor prepared your item', time: 'Jul 29, 2026 · 10:10 AM', done: true },
        { label: 'Shipped', desc: 'Package handed to carrier (UPS)', time: 'Jul 29, 2026 · 3:30 PM', done: true },
        { label: 'Out for Delivery', desc: 'On a vehicle near you', time: 'Jul 31, 2026 · 7:55 AM', done: true },
        { label: 'Delivered', desc: 'Package delivered to mailbox', time: 'Jul 31, 2026 · 12:14 PM', done: true }
      ]
    }
  };

  window.openOrderTracking = function(orderId) {
    const data = ORDER_TRACKING_DATA[orderId];
    if (!data) return;
    document.getElementById('ot-order-id').textContent = orderId;
    document.getElementById('ot-product-name').textContent = data.product;
    document.getElementById('ot-vendor').textContent = data.vendor;
    document.getElementById('ot-amount').textContent = data.amount;
    document.getElementById('ot-icon').textContent = data.icon;
    document.getElementById('ot-eta').textContent = data.eta;

    const stepsEl = document.getElementById('ot-steps');
    stepsEl.innerHTML = '';
    data.steps.forEach((step, i) => {
      const isLast = i === data.steps.length - 1;
      const isCurrent = i === data.currentStep;
      const isDone = step.done;
      const iconName = isDone ? 'check_circle' : (isCurrent ? 'radio_button_checked' : 'radio_button_unchecked');
      const iconColor = isDone ? 'text-secondary' : (isCurrent ? 'text-secondary' : 'text-outline-variant');
      const iconFill = isDone ? "'FILL' 1" : "'FILL' 0";
      const labelColor = isDone ? 'text-on-surface font-semibold' : 'text-on-surface-variant';
      const wrapper = document.createElement('div');
      wrapper.className = 'flex gap-3';
      wrapper.innerHTML = `
        <div class="flex flex-col items-center">
          <span class="material-symbols-outlined text-[22px] ${iconColor} flex-shrink-0" style="font-variation-settings:${iconFill}">${iconName}</span>
          ${!isLast ? `<div class="track-step-line ${isDone ? 'done' : ''} flex-1 my-0.5" style="min-height:28px;"></div>` : ''}
        </div>
        <div class="flex-1 pb-4">
          <p class="font-label-md ${labelColor}">${step.label}</p>
          ${step.desc ? `<p class="font-body-md text-[13px] text-on-surface-variant">${step.desc}</p>` : ''}
          ${step.time ? `<p class="font-label-sm text-[11px] text-outline mt-0.5">${step.time}</p>` : ''}
        </div>`;
      stepsEl.appendChild(wrapper);
    });

    const overlay = document.getElementById('order-track-overlay');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.closeOrderTracking = function() {
    document.getElementById('order-track-overlay').classList.remove('open');
    document.body.style.overflow = '';
  };
  window.handleTrackOverlayClick = function(e) {
    if (e.target === document.getElementById('order-track-overlay')) closeOrderTracking();
  };

  // ── Checkout Flow ─────────────────────────
  let checkoutStep = 1;

  function renderMiniCart(containerId, showShipping = false) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    cartItems.forEach(item => {
      const row = document.createElement('div');
      row.className = 'flex items-center gap-3';
      row.innerHTML = `
        <div class="w-12 h-12 rounded-lg overflow-hidden bg-surface-container flex-shrink-0">
          <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover" loading="lazy">
        </div>
        <div class="flex-1 min-w-0">
          <p class="font-label-md text-on-surface text-[13px] line-clamp-1">${item.name}</p>
          <p class="font-label-sm text-on-surface-variant text-[11px]">${item.vendor} · Qty ${item.qty}</p>
        </div>
        <span class="font-label-md text-on-surface font-semibold text-[13px] flex-shrink-0">$${(item.price * item.qty).toFixed(2)}</span>`;
      container.appendChild(row);
    });
  }

  function getCartSubtotal() {
    return cartItems.reduce((s, i) => s + i.price * i.qty, 0);
  }
  function getShippingCost(subtotal) {
    return subtotal >= 75 ? 0 : 9.99;
  }

  window.openCheckout = function() {
    if (cartItems.length === 0) {
      showToastMsg('Your cart is empty!');
      return;
    }
    closeCartDrawer();
    checkoutStep = 1;
    setCheckoutStep(1);
    // Pre-fill email from user if logged in
    if (currentUser) {
      const emailEl = document.getElementById('co-email');
      if (emailEl && !emailEl.value) emailEl.value = currentUser.email || '';
      const nameEl = document.getElementById('co-first-name');
      if (nameEl && !nameEl.value && currentUser.name) {
        const parts = currentUser.name.split(' ');
        nameEl.value = parts[0] || '';
        const lastEl = document.getElementById('co-last-name');
        if (lastEl && parts.length > 1) lastEl.value = parts.slice(1).join(' ');
      }
    }
    // Populate step 1 mini cart
    renderMiniCart('co-step1-items');
    const subtotal = getCartSubtotal();
    const shipping = getShippingCost(subtotal);
    const total = subtotal + shipping;
    const t1 = document.getElementById('co-step1-total');
    if (t1) t1.textContent = '$' + total.toFixed(2);
    setTimeout(() => navigate('checkout'), 50);
  };

  function setCheckoutStep(step) {
    checkoutStep = step;
    // Update step contents
    for (let i = 1; i <= 3; i++) {
      const content = document.getElementById(`co-step-${i}`);
      if (content) {
        content.classList.remove('active', 'exit-left');
        if (i === step) {
          content.style.display = 'flex';
          requestAnimationFrame(() => {
            requestAnimationFrame(() => content.classList.add('active'));
          });
        } else {
          content.style.display = 'none';
        }
      }
      // Update step indicators
      const indicator = document.getElementById(`co-indicator-${i}`);
      const circle = document.getElementById(`co-circle-${i}`);
      if (indicator) {
        indicator.classList.remove('active', 'done');
        if (i < step) {
          indicator.classList.add('done');
          if (circle) circle.innerHTML = '<span class="material-symbols-outlined text-[16px]" style="font-variation-settings:\'FILL\' 1">check</span>';
        } else if (i === step) {
          indicator.classList.add('active');
          if (circle) circle.textContent = i;
        } else {
          if (circle) circle.textContent = i;
        }
      }
      // Update connecting lines
      if (i < 3) {
        const line = document.getElementById(`co-line-${i}`);
        if (line) line.classList.toggle('done', i < step);
      }
    }
  }

  window.checkoutNext = function() {
    const firstName = document.getElementById('co-first-name')?.value.trim();
    const lastName = document.getElementById('co-last-name')?.value.trim();
    const email = document.getElementById('co-email')?.value.trim();
    const address = document.getElementById('co-address')?.value.trim();
    const city = document.getElementById('co-city')?.value.trim();
    const zip = document.getElementById('co-zip')?.value.trim();
    if (!firstName || !lastName || !email || !address || !city || !zip) {
      showToastMsg('Please fill in all required fields.');
      return;
    }
    if (!email.includes('@')) {
      showToastMsg('Please enter a valid email address.');
      return;
    }
    // Populate step 2 mini cart
    renderMiniCart('co-step2-items');
    const subtotal = getCartSubtotal();
    const shipping = getShippingCost(subtotal);
    const s2sub = document.getElementById('co-step2-subtotal');
    const s2ship = document.getElementById('co-step2-shipping');
    const s2tot = document.getElementById('co-step2-total');
    if (s2sub) s2sub.textContent = '$' + subtotal.toFixed(2);
    if (s2ship) s2ship.textContent = shipping === 0 ? 'FREE' : '$' + shipping.toFixed(2);
    if (s2tot) s2tot.textContent = '$' + (subtotal + shipping).toFixed(2);
    setCheckoutStep(2);
    document.getElementById('page-checkout')?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.checkoutPrev = function() {
    setCheckoutStep(checkoutStep - 1);
    document.getElementById('page-checkout')?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.checkoutBack = function() {
    if (checkoutStep === 1) {
      openCartDrawer();
    } else if (checkoutStep === 3) {
      // Already done - go home
      navigate('home');
    } else {
      checkoutPrev();
    }
  };

  window.checkoutPlaceOrder = function() {
    const cardNum = document.getElementById('co-card-number')?.value.replace(/\s/g, '');
    const cardName = document.getElementById('co-card-name')?.value.trim();
    const expiry = document.getElementById('co-expiry')?.value.trim();
    const cvv = document.getElementById('co-cvv')?.value.trim();
    if (!cardNum || cardNum.length < 13) { showToastMsg('Please enter a valid card number.'); return; }
    if (!cardName) { showToastMsg('Please enter the cardholder name.'); return; }
    if (!expiry || expiry.length < 5) { showToastMsg('Please enter a valid expiry date.'); return; }
    if (!cvv || cvv.length < 3) { showToastMsg('Please enter a valid CVV.'); return; }

    // Generate order data
    const orderNum = '#TS-' + Math.floor(3000 + Math.random() * 9000);
    const firstName = document.getElementById('co-first-name')?.value.trim();
    const lastName = document.getElementById('co-last-name')?.value.trim();
    const email = document.getElementById('co-email')?.value.trim();
    const address = document.getElementById('co-address')?.value.trim();
    const city = document.getElementById('co-city')?.value.trim();
    const state = document.getElementById('co-state')?.value.trim();
    const zip = document.getElementById('co-zip')?.value.trim();
    const country = document.getElementById('co-country')?.value;

    // Estimated delivery: 5-8 business days
    const now = new Date();
    const estMin = new Date(now); estMin.setDate(now.getDate() + 5);
    const estMax = new Date(now); estMax.setDate(now.getDate() + 8);
    const fmt = d => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

    document.getElementById('co-order-number').textContent = orderNum;
    document.getElementById('co-est-delivery').textContent = `${fmt(estMin)} – ${fmt(estMax)}`;
    document.getElementById('co-confirm-email').textContent = email;
    document.getElementById('co-confirm-name').textContent = `${firstName} ${lastName}`;
    document.getElementById('co-confirm-address').textContent = `${address}, ${city}${state ? ', ' + state : ''} ${zip} · ${country}`;

    // Populate items
    const itemsContainer = document.getElementById('co-confirm-items');
    itemsContainer.innerHTML = '';
    cartItems.forEach(item => {
      const row = document.createElement('div');
      row.className = 'flex items-center gap-3 p-2 rounded-xl bg-surface-container';
      row.innerHTML = `
        <div class="w-14 h-14 rounded-lg overflow-hidden bg-surface-container-high flex-shrink-0">
          <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover" loading="lazy">
        </div>
        <div class="flex-1 min-w-0">
          <p class="font-label-md text-on-surface text-[13px] line-clamp-1">${item.name}</p>
          <p class="font-label-sm text-on-surface-variant text-[11px]">${item.vendor}${item.variant ? ' · ' + item.variant : ''}</p>
          <p class="font-label-sm text-on-surface-variant text-[11px]">Qty: ${item.qty}</p>
        </div>
        <span class="font-label-md text-secondary font-bold flex-shrink-0">$${(item.price * item.qty).toFixed(2)}</span>`;
      itemsContainer.appendChild(row);
    });

    const subtotal = getCartSubtotal();
    const shipping = getShippingCost(subtotal);
    const total = subtotal + shipping;
    document.getElementById('co-confirm-subtotal').textContent = '$' + subtotal.toFixed(2);
    document.getElementById('co-confirm-shipping').textContent = shipping === 0 ? 'FREE' : '$' + shipping.toFixed(2);
    document.getElementById('co-confirm-total').textContent = '$' + total.toFixed(2);

    setCheckoutStep(3);
    document.getElementById('page-checkout')?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.checkoutFinish = function() {
    // Clear cart
    cartItems = [];
    syncCartCount();
    // Navigate home
    navigate('home');
    showToastMsg('Thanks for your order! Happy shopping.');
  };

  // ── Card brand detection & formatting ─────────
  const cardInput = document.getElementById('co-card-number');
  if (cardInput) {
    cardInput.addEventListener('input', function() {
      // Strip non-digits and reformat in groups of 4
      let val = this.value.replace(/\D/g, '');
      let formatted = val.match(/.{1,4}/g)?.join(' ') || val;
      this.value = formatted.substring(0, 19);

      // Brand detection
      const badge = document.getElementById('co-card-brand-badge');
      if (!badge) return;
      const num = val;
      badge.className = 'card-brand-badge';
      if (num.length === 0) {
        badge.classList.add('hidden');
        return;
      }
      badge.classList.remove('hidden');
      if (/^4/.test(num)) {
        badge.textContent = 'VISA';
        badge.classList.add('card-brand-visa');
      } else if (/^5[1-5]|^2[2-7]/.test(num)) {
        badge.textContent = 'MC';
        badge.classList.add('card-brand-mc');
      } else if (/^3[47]/.test(num)) {
        badge.textContent = 'AMEX';
        badge.classList.add('card-brand-amex');
      } else if (/^6/.test(num)) {
        badge.textContent = 'DISC';
        badge.classList.add('card-brand-discover');
      } else {
        badge.textContent = 'CARD';
        badge.classList.add('card-brand-unknown');
      }
    });
  }

  const expiryInput = document.getElementById('co-expiry');
  if (expiryInput) {
    expiryInput.addEventListener('input', function(e) {
      let val = this.value.replace(/\D/g, '');
      if (val.length >= 2) val = val.substring(0,2) + ' / ' + val.substring(2,4);
      this.value = val;
    });
  }

  const cvvInput = document.getElementById('co-cvv');
  if (cvvInput) {
    cvvInput.addEventListener('input', function() {
      this.value = this.value.replace(/\D/g, '').substring(0, 4);
    });
  }

  // Make order rows clickable in Portal
  function wireOrderRows() {
    document.querySelectorAll('[data-order-id]').forEach(row => {
      row.style.cursor = 'pointer';
      row.addEventListener('click', () => openOrderTracking(row.dataset.orderId));
    });
  }
  // Wire after a short delay to ensure DOM is ready
  setTimeout(wireOrderRows, 200);

}); // end DOMContentLoaded
</script>

<script>window.onload=function(){var d=document.createElement("div");d.id="appLoadFinished";document.body.appendChild(d);};</script>
<script>window.onload=function(){var d=document.createElement("div");d.id="appLoadFinished";document.body.appendChild(d);};</script>
<script>window.onload=function(){var d=document.createElement("div");d.id="appLoadFinished";document.body.appendChild(d);};</script>
<script>window.onload=function(){var d=document.createElement("div");d.id="appLoadFinished";document.body.appendChild(d);};</script>
<script>window.onload=function(){var d=document.createElement("div");d.id="appLoadFinished";document.body.appendChild(d);};</script>
<script>window.onload=function(){var d=document.createElement("div");d.id="appLoadFinished";document.body.appendChild(d);};</script>
<script>window.onload=function(){var d=document.createElement("div");d.id="appLoadFinished";document.body.appendChild(d);};</script>
</body>






</html>
