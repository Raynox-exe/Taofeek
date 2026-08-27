<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>T-Shop — Multi-Vendor Marketplace</title>
  <meta name="description" content="T-Shop: Discover unique products from hundreds of independent vendors. Shop smarter, support small businesses." />
  <meta property="og:title" content="T-Shop — Multi-Vendor Marketplace" />
  <meta property="og:description" content="Discover unique products from hundreds of independent vendors." />
  <meta property="og:url" content="https://www.onspace.ai" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="OnSpace.AI" />
  <meta property="og:image" content="https://via.placeholder.com/1200x630.png?text=T-Shop+Marketplace" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="T-Shop — Multi-Vendor Marketplace" />
  <meta name="twitter:description" content="Discover unique products from hundreds of independent vendors." />
  <meta name="twitter:image" content="https://via.placeholder.com/1200x630.png?text=T-Shop+Marketplace" />
  <meta name="twitter:url" content="https://www.onspace.ai" />
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet" />
  <style>
    * { font-family: 'Inter', sans-serif; }
    .page-view { display: none; }
    .page-view.active { display: block; }
    .drawer-overlay { display: none; }
    .drawer-overlay.open { display: flex; }
    .cart-drawer { transform: translateX(100%); transition: transform 0.3s ease; }
    .cart-drawer.open { transform: translateX(0); }
    .modal-overlay { display: none; opacity: 0; transition: opacity 0.2s; }
    .modal-overlay.open { display: flex; opacity: 1; }
    .search-overlay { display: none; }
    .search-overlay.open { display: flex; }
    .bottom-nav-item.active span { color: #6366f1; }
    .bottom-nav-item.active .nav-dot { opacity: 1; }
    .nav-dot { opacity: 0; width: 4px; height: 4px; border-radius: 50%; background: #6366f1; margin: 2px auto 0; transition: opacity 0.2s; }
    .product-card:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(0,0,0,0.12); }
    .product-card { transition: transform 0.2s, box-shadow 0.2s; }
    .btn-primary { background: linear-gradient(135deg, #6366f1, #8b5cf6); }
    .btn-primary:hover { background: linear-gradient(135deg, #4f46e5, #7c3aed); }
    .hero-gradient { background: linear-gradient(135deg, #eef2ff 0%, #f5f3ff 50%, #fdf4ff 100%); }
    .qty-btn:hover { background: #6366f1; color: white; }
    .step-active { background: #6366f1; color: white; }
    .step-done { background: #10b981; color: white; }
    .step-inactive { background: #e5e7eb; color: #9ca3af; }
    .pill-active { background: #6366f1; color: white; }
    .toast { position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%) translateY(20px); opacity: 0; transition: all 0.3s; z-index: 9999; pointer-events: none; }
    .toast.show { transform: translateX(-50%) translateY(0); opacity: 1; }
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: #f1f1f1; }
    ::-webkit-scrollbar-thumb { background: #c7d2fe; border-radius: 4px; }
    .vendor-badge { background: linear-gradient(135deg, #6366f1, #8b5cf6); }
    .tracking-step.done .step-circle { background: #10b981; border-color: #10b981; }
    .tracking-step.active .step-circle { background: #6366f1; border-color: #6366f1; }
    .tracking-step.pending .step-circle { background: white; border-color: #d1d5db; }
    .wishlist-btn.wishlisted span { color: #ef4444 !important; }
    .page-transition { animation: fadeIn 0.25s ease; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
  </style>
</head>
<body class="bg-gray-50 max-w-md mx-auto min-h-screen relative overflow-x-hidden">

<!-- ===== TOAST ===== -->
<div id="toast" class="toast bg-gray-900 text-white text-sm px-5 py-3 rounded-full shadow-lg">Added to cart</div>

<!-- ===== SEARCH OVERLAY ===== -->
<div id="searchOverlay" class="search-overlay fixed inset-0 bg-white z-50 flex-col p-4 pt-safe">
  <div class="flex items-center gap-3 mb-4 mt-2">
    <button onclick="closeSearchOverlay()" class="p-2 rounded-full hover:bg-gray-100">
      <span class="material-icons-round text-gray-700">arrow_back</span>
    </button>
    <div class="flex-1 flex items-center bg-gray-100 rounded-2xl px-4 py-3 gap-2">
      <span class="material-icons-round text-gray-400 text-xl">search</span>
      <input id="searchInput" type="text" placeholder="Search products, brands..." class="flex-1 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400" oninput="handleSearch(this.value)" />
      <button id="clearSearchBtn" onclick="clearSearch()" class="hidden">
        <span class="material-icons-round text-gray-400 text-xl">close</span>
      </button>
    </div>
  </div>
  <div id="searchResults" class="overflow-y-auto flex-1">
    <p class="text-gray-400 text-sm text-center mt-8">Type to search products…</p>
  </div>
</div>

<!-- ===== CART DRAWER OVERLAY ===== -->
<div id="cartDrawerOverlay" class="drawer-overlay fixed inset-0 bg-black bg-opacity-40 z-40 items-end" onclick="closeCartDrawer()">
  <div id="cartDrawer" class="cart-drawer bg-white w-full max-w-md mx-auto rounded-t-3xl max-h-screen overflow-hidden flex flex-col" onclick="event.stopPropagation()">
    <div class="flex items-center justify-between p-5 border-b border-gray-100">
      <h2 class="text-lg font-bold text-gray-900">My Cart</h2>
      <button onclick="closeCartDrawer()" class="p-2 rounded-full hover:bg-gray-100">
        <span class="material-icons-round text-gray-600">close</span>
      </button>
    </div>
    <div id="cartItemsList" class="flex-1 overflow-y-auto p-4 space-y-3"></div>
    <div id="cartFooter" class="p-5 border-t border-gray-100 bg-white"></div>
  </div>
</div>

<!-- ===== PRODUCT DETAIL MODAL ===== -->
<div id="productModal" class="modal-overlay fixed inset-0 bg-black bg-opacity-50 z-50 items-end" onclick="closeProductModal()">
  <div class="bg-white w-full max-w-md mx-auto rounded-t-3xl max-h-screen overflow-y-auto" onclick="event.stopPropagation()">
    <div class="relative">
      <img id="modalImg" src="" alt="" class="w-full h-64 object-cover rounded-t-3xl" />
      <button onclick="closeProductModal()" class="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
        <span class="material-icons-round text-gray-700">close</span>
      </button>
      <button id="modalWishlistBtn" onclick="toggleWishlistFromModal()" class="absolute top-4 left-4 bg-white rounded-full p-2 shadow-md">
        <span class="material-icons-round text-gray-700 text-xl">favorite_border</span>
      </button>
    </div>
    <div class="p-5">
      <div class="flex items-start justify-between mb-2">
        <div>
          <h2 id="modalTitle" class="text-xl font-bold text-gray-900"></h2>
          <p id="modalVendor" class="text-sm text-indigo-500 mt-1"></p>
        </div>
        <p id="modalPrice" class="text-2xl font-bold text-indigo-600"></p>
      </div>
      <div class="flex items-center gap-1 mb-3">
        <span class="material-icons-round text-amber-400 text-sm">star</span>
        <span id="modalRating" class="text-sm font-medium text-gray-700"></span>
        <span id="modalReviews" class="text-sm text-gray-400"></span>
      </div>
      <p id="modalDesc" class="text-sm text-gray-600 leading-relaxed mb-5"></p>
      <div class="flex items-center justify-between mb-5">
        <span class="text-sm font-medium text-gray-700">Quantity</span>
        <div class="flex items-center gap-3">
          <button onclick="changeModalQty(-1)" class="qty-btn w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center transition-colors">
            <span class="material-icons-round text-sm">remove</span>
          </button>
          <span id="modalQtyDisplay" class="w-6 text-center font-bold text-gray-900">1</span>
          <button onclick="changeModalQty(1)" class="qty-btn w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center transition-colors">
            <span class="material-icons-round text-sm">add</span>
          </button>
        </div>
      </div>
      <button onclick="addToCartFromModal()" class="btn-primary w-full py-4 rounded-2xl text-white font-semibold flex items-center justify-center gap-2">
        <span class="material-icons-round">shopping_bag</span>
        Add to Cart
      </button>
    </div>
  </div>
</div>

<!-- ===== ORDER TRACKING MODAL ===== -->
<div id="orderModal" class="modal-overlay fixed inset-0 bg-black bg-opacity-50 z-50 items-end" onclick="closeOrderTracking()">
  <div class="bg-white w-full max-w-md mx-auto rounded-t-3xl max-h-screen overflow-y-auto p-5" onclick="event.stopPropagation()">
    <div class="flex items-center justify-between mb-5">
      <h2 class="text-lg font-bold text-gray-900">Track Order</h2>
      <button onclick="closeOrderTracking()" class="p-2 rounded-full hover:bg-gray-100">
        <span class="material-icons-round text-gray-600">close</span>
      </button>
    </div>
    <div id="orderTrackingContent"></div>
  </div>
</div>

<!-- ===== TOP NAV ===== -->
<header class="fixed top-0 left-0 right-0 max-w-md mx-auto bg-white z-30 border-b border-gray-100">
  <div class="flex items-center justify-between px-4 py-3">
    <button onclick="navigate('home')" class="text-2xl font-black text-indigo-600 tracking-tight">T-Shop</button>
    <div class="flex items-center gap-1">
      <button onclick="openSearchOverlay()" class="p-2 rounded-full hover:bg-gray-100">
        <span class="material-icons-round text-gray-700">search</span>
      </button>
      <button onclick="openCartDrawer()" class="p-2 rounded-full hover:bg-gray-100 relative">
        <span class="material-icons-round text-gray-700">shopping_bag</span>
        <span id="cartBadge" class="hidden absolute -top-0.5 -right-0.5 bg-indigo-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">0</span>
      </button>
    </div>
  </div>
</header>

<!-- ===== MAIN CONTENT ===== -->
<main class="pt-16 pb-20">

  <!-- ======== HOME PAGE ======== -->
  <div id="page-home" class="page-view active page-transition">
    <!-- Hero -->
    <section class="hero-gradient px-4 py-8">
      <div class="mb-2">
        <p id="heroGreeting" class="text-sm text-gray-500">Good morning 👋</p>
        <h1 class="text-2xl font-black text-gray-900 mt-1">Discover <span class="text-indigo-600">Amazing</span><br/>Products Today</h1>
      </div>
      <div class="flex items-center bg-white rounded-2xl px-4 py-3 gap-2 shadow-sm mt-4 cursor-pointer" onclick="openSearchOverlay()">
        <span class="material-icons-round text-gray-400">search</span>
        <span class="text-gray-400 text-sm">Search products, brands…</span>
      </div>
      <div class="flex gap-3 mt-4 overflow-x-auto pb-1 no-scrollbar">
        <button onclick="navigate('categories')" class="flex-shrink-0 bg-indigo-600 text-white text-xs px-4 py-2 rounded-full font-medium">All Categories</button>
        <button onclick="navigate('deals')" class="flex-shrink-0 bg-white text-gray-700 text-xs px-4 py-2 rounded-full font-medium shadow-sm border border-gray-100">🔥 Hot Deals</button>
        <button onclick="navigate('vendors')" class="flex-shrink-0 bg-white text-gray-700 text-xs px-4 py-2 rounded-full font-medium shadow-sm border border-gray-100">🏪 Vendors</button>
        <button onclick="navigate('deals')" class="flex-shrink-0 bg-white text-gray-700 text-xs px-4 py-2 rounded-full font-medium shadow-sm border border-gray-100">⚡ Flash Sale</button>
      </div>
    </section>

    <!-- Featured Banner -->
    <section class="px-4 py-4">
      <div class="relative rounded-3xl overflow-hidden h-40 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-between px-6">
        <div class="text-white">
          <p class="text-xs font-medium opacity-80 uppercase tracking-wider">Limited Time</p>
          <h2 class="text-2xl font-black mt-1">50% OFF</h2>
          <p class="text-sm opacity-80 mt-1">On selected items</p>
          <button onclick="navigate('deals')" class="mt-3 bg-white text-indigo-700 text-xs font-bold px-4 py-2 rounded-full">Shop Now</button>
        </div>
        <div class="text-7xl">🛍️</div>
      </div>
    </section>

    <!-- Categories -->
    <section class="px-4 py-2">
      <div class="flex items-center justify-between mb-3">
        <h2 class="text-base font-bold text-gray-900">Categories</h2>
        <button onclick="navigate('categories')" class="text-indigo-600 text-sm font-medium">See all</button>
      </div>
      <div class="grid grid-cols-4 gap-3">
        <button onclick="navigateToCategory('Electronics')" class="flex flex-col items-center gap-2 bg-white rounded-2xl p-3 shadow-sm border border-gray-50">
          <div class="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-xl">💻</div>
          <span class="text-xs text-gray-600 font-medium">Tech</span>
        </button>
        <button onclick="navigateToCategory('Fashion')" class="flex flex-col items-center gap-2 bg-white rounded-2xl p-3 shadow-sm border border-gray-50">
          <div class="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center text-xl">👗</div>
          <span class="text-xs text-gray-600 font-medium">Fashion</span>
        </button>
        <button onclick="navigateToCategory('Home & Living')" class="flex flex-col items-center gap-2 bg-white rounded-2xl p-3 shadow-sm border border-gray-50">
          <div class="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-xl">🏡</div>
          <span class="text-xs text-gray-600 font-medium">Home</span>
        </button>
        <button onclick="navigateToCategory('Sports')" class="flex flex-col items-center gap-2 bg-white rounded-2xl p-3 shadow-sm border border-gray-50">
          <div class="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-xl">⚽</div>
          <span class="text-xs text-gray-600 font-medium">Sports</span>
        </button>
      </div>
    </section>

    <!-- Flash Sale -->
    <section class="px-4 py-4">
      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center gap-2">
          <h2 class="text-base font-bold text-gray-900">Flash Sale</h2>
          <span class="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">LIVE</span>
        </div>
        <button onclick="navigate('deals')" class="text-indigo-600 text-sm font-medium">See all</button>
      </div>
      <div class="flex gap-3 overflow-x-auto pb-2 no-scrollbar" id="flashSaleCards"></div>
    </section>

    <!-- Featured Products -->
    <section class="px-4 py-2">
      <div class="flex items-center justify-between mb-3">
        <h2 class="text-base font-bold text-gray-900">Featured Products</h2>
        <button onclick="navigate('categories')" class="text-indigo-600 text-sm font-medium">See all</button>
      </div>
      <div class="grid grid-cols-2 gap-3" id="featuredProductsGrid"></div>
    </section>

    <!-- Top Vendors -->
    <section class="px-4 py-4">
      <div class="flex items-center justify-between mb-3">
        <h2 class="text-base font-bold text-gray-900">Top Vendors</h2>
        <button onclick="navigate('vendors')" class="text-indigo-600 text-sm font-medium">See all</button>
      </div>
      <div class="space-y-3" id="homeVendorsList"></div>
    </section>

    <!-- Footer -->
    <footer class="px-4 py-6 bg-gray-900 mt-4">
      <div class="text-center mb-4">
        <p class="text-2xl font-black text-white">T-Shop</p>
        <p class="text-gray-400 text-xs mt-1">Your trusted marketplace</p>
      </div>
      <div class="grid grid-cols-2 gap-x-8 gap-y-2 mb-4">
        <button onclick="showFooterPage('about')" class="text-gray-400 text-xs text-left hover:text-white transition-colors">About Us</button>
        <button onclick="showFooterPage('privacy')" class="text-gray-400 text-xs text-left hover:text-white transition-colors">Privacy Policy</button>
        <button onclick="showFooterPage('help')" class="text-gray-400 text-xs text-left hover:text-white transition-colors">Help Center</button>
        <button onclick="navigate('vendors')" class="text-gray-400 text-xs text-left hover:text-white transition-colors">Sell on T-Shop</button>
      </div>
      <p class="text-gray-600 text-xs text-center">© 2024 T-Shop. All rights reserved.</p>
    </footer>
  </div>

  <!-- ======== CATEGORIES PAGE ======== -->
  <div id="page-categories" class="page-view page-transition">
    <div class="px-4 py-4">
      <h1 class="text-xl font-black text-gray-900 mb-4">All Categories</h1>
      <div class="grid grid-cols-2 gap-3 mb-6" id="categoriesGrid"></div>

      <!-- Filtered Products Section -->
      <div id="categoryFilterSection" class="hidden">
        <div class="flex items-center justify-between mb-3">
          <div>
            <h2 id="categoryFilterTitle" class="text-base font-bold text-gray-900"></h2>
            <p id="categoryFilterCount" class="text-xs text-gray-400 mt-0.5"></p>
          </div>
          <button onclick="clearCategoryFilter()" class="text-indigo-600 text-sm font-medium flex items-center gap-1">
            <span class="material-icons-round text-sm">close</span> Clear
          </button>
        </div>
        <div class="grid grid-cols-2 gap-3" id="categoryFilteredGrid"></div>
      </div>

      <!-- All products fallback -->
      <div id="allProductsSection">
        <h2 class="text-base font-bold text-gray-900 mb-3">All Products</h2>
        <div class="grid grid-cols-2 gap-3" id="allProductsGrid"></div>
      </div>
    </div>
  </div>

  <!-- ======== DEALS PAGE ======== -->
  <div id="page-deals" class="page-view page-transition">
    <div class="px-4 py-4">
      <h1 class="text-xl font-black text-gray-900 mb-4">🔥 Hot Deals</h1>
      <!-- Filter pills -->
      <div class="flex gap-2 overflow-x-auto pb-2 no-scrollbar mb-4" id="dealPills"></div>
      <!-- Deals grid -->
      <div class="grid grid-cols-2 gap-3" id="dealsGrid"></div>
    </div>
  </div>

  <!-- ======== VENDORS PAGE ======== -->
  <div id="page-vendors" class="page-view page-transition">
    <div class="px-4 py-4">
      <h1 class="text-xl font-black text-gray-900 mb-1">Our Vendors</h1>
      <p class="text-gray-500 text-sm mb-5">Shop directly from trusted independent sellers</p>

      <!-- Apply CTA -->
      <div class="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-5 mb-5 flex items-center justify-between">
        <div class="text-white">
          <p class="font-bold text-base">Start Selling Today</p>
          <p class="text-xs opacity-80 mt-1">Join 200+ vendors on T-Shop</p>
        </div>
        <button onclick="showApplyVendor()" class="bg-white text-indigo-700 text-sm font-bold px-4 py-2 rounded-full flex-shrink-0">Apply Now</button>
      </div>

      <div id="vendorsList" class="space-y-4"></div>

      <!-- Load More -->
      <div id="loadMoreVendorsContainer" class="mt-4">
        <button id="loadMoreVendorsBtn" onclick="loadMoreVendors()" class="w-full border-2 border-dashed border-gray-200 rounded-2xl py-4 text-sm text-gray-500 font-medium flex items-center justify-center gap-2 hover:border-indigo-300 hover:text-indigo-500 transition-colors">
          <span class="material-icons-round text-xl">expand_more</span>
          Load More Vendors
        </button>
      </div>
    </div>
  </div>

  <!-- ======== VENDOR DETAIL PAGE ======== -->
  <div id="page-vendor-detail" class="page-view page-transition">
    <div id="vendorDetailContent"></div>
  </div>

  <!-- ======== PORTAL PAGE ======== -->
  <div id="page-portal" class="page-view page-transition">
    <!-- Logged Out -->
    <div id="portalLoggedOut" class="px-4 py-8">
      <div class="text-center mb-8">
        <div class="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span class="material-icons-round text-indigo-600 text-4xl">person</span>
        </div>
        <h1 class="text-xl font-black text-gray-900">Welcome to T-Shop</h1>
        <p class="text-gray-500 text-sm mt-2">Sign in to access your orders, wishlist, and more</p>
      </div>
      <!-- Login Form -->
      <div id="loginForm" class="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
        <h2 class="text-lg font-bold text-gray-900 mb-4">Sign In</h2>
        <div class="space-y-3">
          <input id="loginEmail" type="email" placeholder="Email address" class="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm outline-none focus:border-indigo-400" />
          <input id="loginPassword" type="password" placeholder="Password" class="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm outline-none focus:border-indigo-400" />
        </div>
        <button onclick="handleLogin()" class="btn-primary w-full py-3.5 rounded-2xl text-white font-bold mt-4">Sign In</button>
        <p class="text-center text-sm text-gray-500 mt-3">Don't have an account? <button onclick="showSignup()" class="text-indigo-600 font-semibold">Sign Up</button></p>
      </div>
      <!-- Signup Form -->
      <div id="signupForm" class="hidden bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
        <h2 class="text-lg font-bold text-gray-900 mb-4">Create Account</h2>
        <div class="space-y-3">
          <input id="signupName" type="text" placeholder="Full name" class="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm outline-none focus:border-indigo-400" />
          <input id="signupEmail" type="email" placeholder="Email address" class="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm outline-none focus:border-indigo-400" />
          <input id="signupPassword" type="password" placeholder="Password (min 6 chars)" class="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm outline-none focus:border-indigo-400" />
        </div>
        <button onclick="handleSignup()" class="btn-primary w-full py-3.5 rounded-2xl text-white font-bold mt-4">Create Account</button>
        <p class="text-center text-sm text-gray-500 mt-3">Already have an account? <button onclick="showLogin()" class="text-indigo-600 font-semibold">Sign In</button></p>
      </div>
    </div>

    <!-- Logged In -->
    <div id="portalLoggedIn" class="hidden">
      <div class="bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-8 text-white">
        <div class="flex items-center gap-4">
          <div class="w-14 h-14 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <span class="material-icons-round text-white text-3xl">person</span>
          </div>
          <div>
            <p id="portalUserName" class="text-lg font-bold"></p>
            <p id="portalUserEmail" class="text-xs opacity-80 mt-0.5"></p>
          </div>
        </div>
      </div>
      <div class="px-4 py-4">
        <!-- Quick Access -->
        <div class="grid grid-cols-4 gap-2 mb-5">
          <button onclick="openOrderTracking()" class="flex flex-col items-center gap-2 bg-white rounded-2xl p-3 shadow-sm border border-gray-50">
            <span class="material-icons-round text-indigo-600 text-2xl">local_shipping</span>
            <span class="text-xs text-gray-600 font-medium text-center">Orders</span>
          </button>
          <button onclick="navigate('wishlist')" class="flex flex-col items-center gap-2 bg-white rounded-2xl p-3 shadow-sm border border-gray-50">
            <span class="material-icons-round text-red-500 text-2xl">favorite</span>
            <span class="text-xs text-gray-600 font-medium text-center">Wishlist</span>
          </button>
          <button onclick="openCartDrawer()" class="flex flex-col items-center gap-2 bg-white rounded-2xl p-3 shadow-sm border border-gray-50">
            <span class="material-icons-round text-indigo-600 text-2xl">shopping_bag</span>
            <span class="text-xs text-gray-600 font-medium text-center">Cart</span>
          </button>
          <button onclick="showApplyVendor()" class="flex flex-col items-center gap-2 bg-white rounded-2xl p-3 shadow-sm border border-gray-50">
            <span class="material-icons-round text-amber-500 text-2xl">store</span>
            <span class="text-xs text-gray-600 font-medium text-center">My Shop</span>
          </button>
        </div>
        <!-- Menu -->
        <div class="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <button onclick="openOrderTracking()" class="w-full flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors border-b border-gray-50">
            <span class="material-icons-round text-gray-400">receipt_long</span>
            <span class="text-sm font-medium text-gray-800 flex-1 text-left">My Orders</span>
            <span class="material-icons-round text-gray-300 text-xl">chevron_right</span>
          </button>
          <button onclick="navigate('wishlist')" class="w-full flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors border-b border-gray-50">
            <span class="material-icons-round text-gray-400">favorite_border</span>
            <span class="text-sm font-medium text-gray-800 flex-1 text-left">Wishlist</span>
            <span id="wishlistCountBadge" class="hidden bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full font-semibold mr-2"></span>
            <span class="material-icons-round text-gray-300 text-xl">chevron_right</span>
          </button>
          <button onclick="showFooterPage('help')" class="w-full flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors border-b border-gray-50">
            <span class="material-icons-round text-gray-400">help_outline</span>
            <span class="text-sm font-medium text-gray-800 flex-1 text-left">Help Center</span>
            <span class="material-icons-round text-gray-300 text-xl">chevron_right</span>
          </button>
          <button onclick="showFooterPage('about')" class="w-full flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors border-b border-gray-50">
            <span class="material-icons-round text-gray-400">info_outline</span>
            <span class="text-sm font-medium text-gray-800 flex-1 text-left">About T-Shop</span>
            <span class="material-icons-round text-gray-300 text-xl">chevron_right</span>
          </button>
          <button onclick="handleLogout()" class="w-full flex items-center gap-4 px-5 py-4 hover:bg-red-50 transition-colors">
            <span class="material-icons-round text-red-400">logout</span>
            <span class="text-sm font-medium text-red-500 flex-1 text-left">Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- ======== WISHLIST PAGE ======== -->
  <div id="page-wishlist" class="page-view page-transition">
    <div class="px-4 py-4">
      <div class="flex items-center gap-3 mb-5">
        <button onclick="navigate('portal')" class="p-2 rounded-full hover:bg-gray-100">
          <span class="material-icons-round text-gray-700">arrow_back</span>
        </button>
        <h1 class="text-xl font-black text-gray-900">My Wishlist</h1>
      </div>
      <div id="wishlistContent"></div>
    </div>
  </div>

  <!-- ======== CHECKOUT PAGE ======== -->
  <div id="page-checkout" class="page-view page-transition">
    <div class="px-4 py-4">
      <div class="flex items-center gap-3 mb-5">
        <button onclick="navigate('home')" class="p-2 rounded-full hover:bg-gray-100">
          <span class="material-icons-round text-gray-700">arrow_back</span>
        </button>
        <h1 class="text-xl font-black text-gray-900">Checkout</h1>
      </div>
      <!-- Steps -->
      <div class="flex items-center justify-center gap-2 mb-6">
        <div id="step1Indicator" class="flex items-center gap-1.5">
          <div class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold step-active">1</div>
          <span class="text-xs font-medium text-gray-700">Shipping</span>
        </div>
        <div class="w-6 h-px bg-gray-300"></div>
        <div id="step2Indicator" class="flex items-center gap-1.5">
          <div class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold step-inactive">2</div>
          <span class="text-xs font-medium text-gray-400">Payment</span>
        </div>
        <div class="w-6 h-px bg-gray-300"></div>
        <div id="step3Indicator" class="flex items-center gap-1.5">
          <div class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold step-inactive">3</div>
          <span class="text-xs font-medium text-gray-400">Confirm</span>
        </div>
      </div>
      <!-- Mini Cart -->
      <div id="checkoutMiniCart" class="bg-gray-50 rounded-2xl p-4 mb-5"></div>
      <!-- Step Forms -->
      <div id="checkoutStep1" class="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
        <h2 class="text-base font-bold text-gray-900 mb-4">Shipping Information</h2>
        <div class="space-y-3">
          <input id="shippingName" type="text" placeholder="Full name" class="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm outline-none focus:border-indigo-400" />
          <input id="shippingPhone" type="tel" placeholder="Phone number" class="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm outline-none focus:border-indigo-400" />
          <input id="shippingAddress" type="text" placeholder="Street address" class="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm outline-none focus:border-indigo-400" />
          <div class="grid grid-cols-2 gap-3">
            <input id="shippingCity" type="text" placeholder="City" class="border border-gray-200 rounded-2xl px-4 py-3 text-sm outline-none focus:border-indigo-400" />
            <input id="shippingZip" type="text" placeholder="ZIP Code" class="border border-gray-200 rounded-2xl px-4 py-3 text-sm outline-none focus:border-indigo-400" />
          </div>
        </div>
        <button onclick="setCheckoutStep(2)" class="btn-primary w-full py-3.5 rounded-2xl text-white font-bold mt-5">Continue to Payment</button>
      </div>
      <div id="checkoutStep2" class="hidden bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
        <h2 class="text-base font-bold text-gray-900 mb-4">Payment Details</h2>
        <div class="space-y-3">
          <input id="cardNumber" type="text" placeholder="Card number (16 digits)" maxlength="19" class="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm outline-none focus:border-indigo-400" />
          <input id="cardName" type="text" placeholder="Cardholder name" class="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm outline-none focus:border-indigo-400" />
          <div class="grid grid-cols-2 gap-3">
            <input id="cardExpiry" type="text" placeholder="MM/YY" maxlength="5" class="border border-gray-200 rounded-2xl px-4 py-3 text-sm outline-none focus:border-indigo-400" />
            <input id="cardCVV" type="text" placeholder="CVV" maxlength="3" class="border border-gray-200 rounded-2xl px-4 py-3 text-sm outline-none focus:border-indigo-400" />
          </div>
        </div>
        <button onclick="setCheckoutStep(3)" class="btn-primary w-full py-3.5 rounded-2xl text-white font-bold mt-5">Review Order</button>
        <button onclick="setCheckoutStep(1)" class="w-full py-3 rounded-2xl text-gray-500 font-medium mt-2 hover:bg-gray-50">← Back</button>
      </div>
      <div id="checkoutStep3" class="hidden bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
        <h2 class="text-base font-bold text-gray-900 mb-4">Order Confirmation</h2>
        <div id="orderSummary" class="space-y-2 mb-4"></div>
        <div class="border-t border-gray-100 pt-4 mb-5">
          <div class="flex justify-between text-sm text-gray-600 mb-1"><span>Subtotal</span><span id="confirmSubtotal"></span></div>
          <div class="flex justify-between text-sm text-gray-600 mb-1"><span>Shipping</span><span class="text-green-600 font-medium">FREE</span></div>
          <div class="flex justify-between font-bold text-gray-900 mt-2"><span>Total</span><span id="confirmTotal" class="text-indigo-600"></span></div>
        </div>
        <button onclick="placeOrder()" class="btn-primary w-full py-3.5 rounded-2xl text-white font-bold">Place Order 🎉</button>
        <button onclick="setCheckoutStep(2)" class="w-full py-3 rounded-2xl text-gray-500 font-medium mt-2 hover:bg-gray-50">← Back to Payment</button>
      </div>
    </div>
  </div>

  <!-- ======== FOOTER PAGES ======== -->
  <div id="page-footer-about" class="page-view page-transition">
    <div class="px-4 py-4">
      <div class="flex items-center gap-3 mb-5">
        <button onclick="history.back(); navigate('home')" class="p-2 rounded-full hover:bg-gray-100">
          <span class="material-icons-round text-gray-700">arrow_back</span>
        </button>
        <h1 class="text-xl font-black text-gray-900">About T-Shop</h1>
      </div>
      <div class="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 space-y-4">
        <div class="text-center py-4">
          <p class="text-5xl font-black text-indigo-600">T-Shop</p>
          <p class="text-gray-500 text-sm mt-2">Your trusted multi-vendor marketplace</p>
        </div>
        <p class="text-sm text-gray-600 leading-relaxed">T-Shop was founded in 2020 with a simple mission: to connect independent sellers with buyers who value quality, uniqueness, and community. We believe shopping should be personal.</p>
        <p class="text-sm text-gray-600 leading-relaxed">Today, we host over 200 verified vendors across electronics, fashion, home goods, sports, beauty, and more — all carefully curated to ensure you receive only the best.</p>
        <div class="grid grid-cols-3 gap-3 py-3">
          <div class="text-center"><p class="text-2xl font-black text-indigo-600">200+</p><p class="text-xs text-gray-500">Vendors</p></div>
          <div class="text-center"><p class="text-2xl font-black text-indigo-600">50K+</p><p class="text-xs text-gray-500">Products</p></div>
          <div class="text-center"><p class="text-2xl font-black text-indigo-600">1M+</p><p class="text-xs text-gray-500">Customers</p></div>
        </div>
      </div>
    </div>
  </div>

  <div id="page-footer-privacy" class="page-view page-transition">
    <div class="px-4 py-4">
      <div class="flex items-center gap-3 mb-5">
        <button onclick="navigate('home')" class="p-2 rounded-full hover:bg-gray-100">
          <span class="material-icons-round text-gray-700">arrow_back</span>
        </button>
        <h1 class="text-xl font-black text-gray-900">Privacy Policy</h1>
      </div>
      <div class="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 space-y-4 text-sm text-gray-600 leading-relaxed">
        <h3 class="font-bold text-gray-900">1. Information We Collect</h3>
        <p>We collect information you provide directly, such as your name, email address, and purchase history, to provide our services.</p>
        <h3 class="font-bold text-gray-900">2. How We Use Your Data</h3>
        <p>Your data is used to process orders, send updates, and improve your shopping experience. We never sell your personal data to third parties.</p>
        <h3 class="font-bold text-gray-900">3. Cookies</h3>
        <p>We use cookies to remember your preferences, keep your cart, and analyze site usage anonymously.</p>
        <h3 class="font-bold text-gray-900">4. Security</h3>
        <p>All transactions are encrypted using industry-standard TLS. We take data security very seriously.</p>
        <h3 class="font-bold text-gray-900">5. Contact</h3>
        <p>For privacy concerns, email us at privacy@t-shop.com</p>
      </div>
    </div>
  </div>

  <div id="page-footer-help" class="page-view page-transition">
    <div class="px-4 py-4">
      <div class="flex items-center gap-3 mb-5">
        <button onclick="navigate('home')" class="p-2 rounded-full hover:bg-gray-100">
          <span class="material-icons-round text-gray-700">arrow_back</span>
        </button>
        <h1 class="text-xl font-black text-gray-900">Help Center</h1>
      </div>
      <div class="space-y-3">
        <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <p class="font-bold text-gray-900 text-sm mb-2">How do I track my order?</p>
          <p class="text-xs text-gray-500">Go to Portal → My Orders, then tap any order to see real-time tracking with step-by-step updates.</p>
        </div>
        <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <p class="font-bold text-gray-900 text-sm mb-2">Can I return an item?</p>
          <p class="text-xs text-gray-500">Yes! We have a 30-day return policy. Contact the vendor directly via the vendor's page.</p>
        </div>
        <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <p class="font-bold text-gray-900 text-sm mb-2">How do I become a vendor?</p>
          <p class="text-xs text-gray-500">Visit the Vendors page and tap "Apply Now". Our team will review your application within 2–3 business days.</p>
        </div>
        <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <p class="font-bold text-gray-900 text-sm mb-2">Is my payment secure?</p>
          <p class="text-xs text-gray-500">Absolutely. We use encrypted payment gateways and never store raw card information on our servers.</p>
        </div>
        <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <p class="font-bold text-gray-900 text-sm mb-2">Contact Support</p>
          <p class="text-xs text-gray-500">Email: support@t-shop.com | Hours: Mon–Fri, 9am–6pm</p>
        </div>
      </div>
    </div>
  </div>

</main>

<!-- ===== BOTTOM NAV ===== -->
<nav class="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-100 z-30">
  <div class="grid grid-cols-4 py-2">
    <button class="bottom-nav-item active" onclick="navigate('home')" id="nav-home">
      <span class="material-icons-round text-2xl text-gray-400">home</span>
      <span class="text-xs text-gray-400 font-medium">Home</span>
      <div class="nav-dot"></div>
    </button>
    <button class="bottom-nav-item" onclick="navigate('categories')" id="nav-categories">
      <span class="material-icons-round text-2xl text-gray-400">grid_view</span>
      <span class="text-xs text-gray-400 font-medium">Explore</span>
      <div class="nav-dot"></div>
    </button>
    <button class="bottom-nav-item" onclick="navigate('deals')" id="nav-deals">
      <span class="material-icons-round text-2xl text-gray-400">local_offer</span>
      <span class="text-xs text-gray-400 font-medium">Deals</span>
      <div class="nav-dot"></div>
    </button>
    <button class="bottom-nav-item" onclick="navigate('portal')" id="nav-portal">
      <span class="material-icons-round text-2xl text-gray-400">person</span>
      <span class="text-xs text-gray-400 font-medium">Portal</span>
      <div class="nav-dot"></div>
    </button>
  </div>
</nav>

<script>
// ============================================================
//  DATA
// ============================================================
const ALL_PRODUCTS = [
  { id: 1,  title: "Wireless Noise-Cancelling Headphones", vendor: "AudioTech Pro", price: 129.99, originalPrice: 199.99, rating: 4.8, reviews: 2341, category: "Electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80", desc: "Premium over-ear headphones with 40hr battery, active noise cancellation, and studio-quality sound. Foldable design perfect for travel." },
  { id: 2,  title: "Minimalist Leather Wallet", vendor: "UrbanCraft", price: 49.99, originalPrice: 69.99, rating: 4.6, reviews: 876, category: "Fashion", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80", desc: "Slim genuine leather wallet with RFID blocking. Holds up to 8 cards plus cash. Available in black and tan." },
  { id: 3,  title: "Ceramic Pour-Over Coffee Set", vendor: "HomeBrew Co", price: 59.99, originalPrice: 84.99, rating: 4.9, reviews: 1123, category: "Home & Living", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80", desc: "Hand-thrown ceramic pour-over set with matching mug and wooden stand. The perfect morning ritual upgrade." },
  { id: 4,  title: "Running Shoes – Pro Series", vendor: "SpeedFit", price: 119.99, originalPrice: 159.99, rating: 4.7, reviews: 3201, category: "Sports", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80", desc: "Lightweight and responsive running shoes with carbon fiber plate and breathable mesh upper. For serious runners." },
  { id: 5,  title: "Portable Bluetooth Speaker", vendor: "AudioTech Pro", price: 79.99, originalPrice: 99.99, rating: 4.5, reviews: 1567, category: "Electronics", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80", desc: "360° surround sound with IPX7 waterproof rating. 20hr battery. Connect two speakers for stereo mode." },
  { id: 6,  title: "Linen Summer Dress", vendor: "StyleHaven", price: 69.99, originalPrice: 89.99, rating: 4.4, reviews: 654, category: "Fashion", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80", desc: "Breathable 100% linen dress with adjustable straps. Perfect for warm weather. Available in 6 colors." },
  { id: 7,  title: "Smart LED Desk Lamp", vendor: "HomeBrew Co", price: 39.99, originalPrice: 54.99, rating: 4.6, reviews: 892, category: "Home & Living", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=80", desc: "Touch-controlled desk lamp with 10 brightness levels, 3 color modes, and USB charging port. Memory function included." },
  { id: 8,  title: "Yoga Mat Premium", vendor: "SpeedFit", price: 44.99, originalPrice: 64.99, rating: 4.8, reviews: 2109, category: "Sports", image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&q=80", desc: "Extra thick 6mm yoga mat with alignment lines, non-slip texture, and carrying strap. Eco-friendly TPE material." },
  { id: 9,  title: "Mechanical Keyboard TKL", vendor: "AudioTech Pro", price: 149.99, originalPrice: 189.99, rating: 4.9, reviews: 4312, category: "Electronics", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80", desc: "Tenkeyless mechanical keyboard with hot-swap switches, RGB backlighting, and aluminium body. PBT doubleshot keycaps." },
  { id: 10, title: "Scented Soy Candle Set", vendor: "HomeBrew Co", price: 34.99, originalPrice: 44.99, rating: 4.7, reviews: 765, category: "Home & Living", image: "https://images.unsplash.com/photo-1602178506450-c2c5b2d4a0f5?w=400&q=80", desc: "Set of 3 hand-poured soy candles in lavender, vanilla, and eucalyptus. 40hr burn time each. Gift-ready packaging." },
  { id: 11, title: "Classic Oxford Shirt", vendor: "StyleHaven", price: 54.99, originalPrice: 74.99, rating: 4.5, reviews: 432, category: "Fashion", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&q=80", desc: "Crisp oxford cotton shirt with button-down collar. Slim fit with chest pocket. Machine washable." },
  { id: 12, title: "Resistance Bands Set", vendor: "SpeedFit", price: 24.99, originalPrice: 39.99, rating: 4.6, reviews: 1876, category: "Sports", image: "https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?w=400&q=80", desc: "5-band set with levels from 10–50 lbs resistance. Includes door anchor, handles, and ankle straps. Home gym essential." },
  { id: 13, title: "Wireless Charging Pad", vendor: "AudioTech Pro", price: 29.99, originalPrice: 44.99, rating: 4.4, reviews: 987, category: "Electronics", image: "https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?w=400&q=80", desc: "15W fast wireless charging pad compatible with all Qi-enabled devices. Slim, non-slip surface, LED indicator." },
];

const CATEGORIES = [
  { name: "Electronics", emoji: "💻", color: "bg-blue-100", textColor: "text-blue-700" },
  { name: "Fashion", emoji: "👗", color: "bg-pink-100", textColor: "text-pink-700" },
  { name: "Home & Living", emoji: "🏡", color: "bg-amber-100", textColor: "text-amber-700" },
  { name: "Sports", emoji: "⚽", color: "bg-green-100", textColor: "text-green-700" },
  { name: "Beauty", emoji: "💄", color: "bg-rose-100", textColor: "text-rose-700" },
  { name: "Books", emoji: "📚", color: "bg-indigo-100", textColor: "text-indigo-700" },
];

const VENDORS_ALL = [
  { id: 1, name: "AudioTech Pro", category: "Electronics & Audio", rating: 4.9, reviews: 8431, followers: 12400, emoji: "🎧", color: "from-blue-500 to-indigo-600", items: ALL_PRODUCTS.filter(p=>p.vendor==="AudioTech Pro"), bio: "Premium audio equipment and tech accessories since 2015. We believe everyone deserves studio-quality sound.", badge: "Top Seller" },
  { id: 2, name: "StyleHaven", category: "Fashion & Apparel", rating: 4.7, reviews: 3210, followers: 8750, emoji: "👗", color: "from-pink-500 to-rose-600", items: ALL_PRODUCTS.filter(p=>p.vendor==="StyleHaven"), bio: "Sustainable fashion for the modern wardrobe. Ethically made, stylishly designed.", badge: "Eco Verified" },
  { id: 3, name: "HomeBrew Co", category: "Home & Kitchen", rating: 4.8, reviews: 5670, followers: 9200, emoji: "☕", color: "from-amber-500 to-orange-600", items: ALL_PRODUCTS.filter(p=>p.vendor==="HomeBrew Co"), bio: "Curated home goods for a life well-lived. Every product is hand-selected for quality and design.", badge: "Curated" },
  { id: 4, name: "SpeedFit", category: "Sports & Fitness", rating: 4.8, reviews: 7234, followers: 15600, emoji: "🏃", color: "from-green-500 to-emerald-600", items: ALL_PRODUCTS.filter(p=>p.vendor==="SpeedFit"), bio: "Professional-grade sports equipment and apparel. Trusted by athletes at every level.", badge: "Pro Verified" },
  { id: 5, name: "UrbanCraft", category: "Accessories & Leather", rating: 4.6, reviews: 2100, followers: 5400, emoji: "👜", color: "from-stone-500 to-brown-600", items: ALL_PRODUCTS.filter(p=>p.vendor==="UrbanCraft"), bio: "Handcrafted leather goods made to last a lifetime. Small-batch production for uncompromising quality.", badge: "Handmade" },
  { id: 6, name: "GreenLeaf", category: "Beauty & Wellness", rating: 4.5, reviews: 1890, followers: 4200, emoji: "🌿", color: "from-teal-500 to-green-600", items: [], bio: "Natural, vegan, cruelty-free beauty products. Because what you put on your skin matters.", badge: "Vegan" },
  { id: 7, name: "TechNova", category: "Gadgets & Smart Home", rating: 4.7, reviews: 3450, followers: 9800, emoji: "🔌", color: "from-purple-500 to-violet-600", items: [], bio: "Next-generation smart home gadgets and IoT devices. Making homes smarter, one device at a time.", badge: "Innovative" },
];

const ORDER_TRACKING_DATA = {
  "TSH-2024-001": { id: "TSH-2024-001", product: "Wireless Headphones", status: "In Transit", date: "Dec 12, 2024", steps: [
    { label: "Order Placed", time: "Dec 10, 9:00 AM", done: true, active: false },
    { label: "Processing", time: "Dec 10, 2:00 PM", done: true, active: false },
    { label: "Shipped", time: "Dec 11, 10:30 AM", done: true, active: false },
    { label: "In Transit", time: "Dec 12, 8:00 AM", done: false, active: true },
    { label: "Delivered", time: "Expected Dec 14", done: false, active: false },
  ]},
  "TSH-2024-002": { id: "TSH-2024-002", product: "Yoga Mat + Resistance Bands", status: "Processing", date: "Dec 13, 2024", steps: [
    { label: "Order Placed", time: "Dec 13, 11:00 AM", done: true, active: false },
    { label: "Processing", time: "Dec 13, 12:30 PM", done: false, active: true },
    { label: "Shipped", time: "Expected Dec 14", done: false, active: false },
    { label: "In Transit", time: "–", done: false, active: false },
    { label: "Delivered", time: "Expected Dec 16", done: false, active: false },
  ]},
  "TSH-2024-003": { id: "TSH-2024-003", product: "Leather Wallet", status: "Delivered", date: "Dec 8, 2024", steps: [
    { label: "Order Placed", time: "Dec 4", done: true, active: false },
    { label: "Processing", time: "Dec 4", done: true, active: false },
    { label: "Shipped", time: "Dec 5", done: true, active: false },
    { label: "In Transit", time: "Dec 6–7", done: true, active: false },
    { label: "Delivered", time: "Dec 8, 2:15 PM", done: true, active: false },
  ]},
};

// ============================================================
//  STATE
// ============================================================
let currentPage = 'home';
let cartItems = [];
let wishlistItems = [];
let currentUser = null;
let checkoutStep = 1;
let modalProduct = null;
let modalQty = 1;
let vendorsLoaded = 3; // How many vendors are visible
const VENDORS_PER_LOAD = 2;

// ============================================================
//  PERSISTENCE — CART & WISHLIST
// ============================================================
function saveCart() {
  localStorage.setItem('tshop_cart', JSON.stringify(cartItems));
}

function loadCart() {
  try {
    const saved = localStorage.getItem('tshop_cart');
    if (saved) cartItems = JSON.parse(saved);
  } catch(e) { cartItems = []; }
}

function saveWishlist() {
  localStorage.setItem('tshop_wishlist', JSON.stringify(wishlistItems));
}

function loadWishlist() {
  try {
    const saved = localStorage.getItem('tshop_wishlist');
    if (saved) wishlistItems = JSON.parse(saved);
  } catch(e) { wishlistItems = []; }
}

function isWishlisted(productId) {
  return wishlistItems.some(i => i.id === productId);
}

// ============================================================
//  INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  loadCart();
  loadWishlist();
  try { currentUser = JSON.parse(localStorage.getItem('tshop_user')); } catch(e) {}
  updateCartBadge();
  updateWishlistBadge();
  renderHomePage();
  updateGreeting();
  // Format card number input
  const cardEl = document.getElementById('cardNumber');
  if (cardEl) cardEl.addEventListener('input', (e) => {
    let v = e.target.value.replace(/\D/g,'').substring(0,16);
    e.target.value = v.replace(/(.{4})/g,'$1 ').trim();
  });
  const expiryEl = document.getElementById('cardExpiry');
  if (expiryEl) expiryEl.addEventListener('input', (e) => {
    let v = e.target.value.replace(/\D/g,'').substring(0,4);
    if (v.length >= 3) v = v.substring(0,2)+'/'+v.substring(2);
    e.target.value = v;
  });
});

function updateGreeting() {
  const h = new Date().getHours();
  const greet = h < 12 ? 'Good morning 👋' : h < 17 ? 'Good afternoon 👋' : 'Good evening 👋';
  const el = document.getElementById('heroGreeting');
  if (el) el.textContent = greet;
}

// ============================================================
//  NAVIGATION
// ============================================================
function navigate(page, extra) {
  document.querySelectorAll('.page-view').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + page);
  if (target) { target.classList.add('active'); target.classList.remove('page-transition'); void target.offsetWidth; target.classList.add('page-transition'); }
  currentPage = page;
  // Update bottom nav
  document.querySelectorAll('.bottom-nav-item').forEach(b => b.classList.remove('active'));
  const navMap = { home: 'nav-home', categories: 'nav-categories', deals: 'nav-deals', portal: 'nav-portal', wishlist: 'nav-portal' };
  const activeNav = document.getElementById(navMap[page]);
  if (activeNav) activeNav.classList.add('active');
  // Page-specific init
  if (page === 'home') renderHomePage();
  if (page === 'categories') renderCategoriesPage();
  if (page === 'deals') renderDealsPage();
  if (page === 'vendors') renderVendorsPage();
  if (page === 'portal') renderPortalPage();
  if (page === 'wishlist') renderWishlistPage();
  if (page === 'checkout') initCheckoutPage();
  if (page === 'vendor-detail' && extra) renderVendorDetail(extra);
  window.scrollTo(0, 0);
}

function navigateToCategory(cat) {
  navigate('categories');
  setTimeout(() => filterByCategory(cat), 100);
}

function showFooterPage(which) {
  const map = { about: 'footer-about', privacy: 'footer-privacy', help: 'footer-help' };
  navigate(map[which]);
}

// ============================================================
//  HOME PAGE
// ============================================================
function renderHomePage() {
  renderFlashSale();
  renderFeaturedProducts();
  renderHomeVendors();
}

function renderFlashSale() {
  const el = document.getElementById('flashSaleCards');
  if (!el) return;
  const deals = ALL_PRODUCTS.filter(p => p.originalPrice > p.price).slice(0, 5);
  el.innerHTML = deals.map(p => {
    const disc = Math.round((1 - p.price/p.originalPrice)*100);
    const w = isWishlisted(p.id);
    return `<div class="flex-shrink-0 w-36 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-50 cursor-pointer product-card" onclick="openProductModal(${p.id})">
      <div class="relative">
        <img src="${p.image}" alt="${p.title}" class="w-full h-24 object-cover" loading="lazy"/>
        <span class="absolute top-1.5 left-1.5 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full font-bold">-${disc}%</span>
        <button class="absolute top-1.5 right-1.5 bg-white rounded-full p-1 shadow wishlist-btn${w?' wishlisted':''}" onclick="event.stopPropagation();toggleWishlist(${p.id},this)">
          <span class="material-icons-round text-sm ${w?'text-red-500':'text-gray-400'}">${w?'favorite':'favorite_border'}</span>
        </button>
      </div>
      <div class="p-2">
        <p class="text-xs text-gray-700 font-medium truncate">${p.title}</p>
        <p class="text-sm font-black text-indigo-600 mt-1">$${p.price}</p>
        <p class="text-xs text-gray-400 line-through">$${p.originalPrice}</p>
      </div>
    </div>`;
  }).join('');
}

function renderFeaturedProducts() {
  const el = document.getElementById('featuredProductsGrid');
  if (!el) return;
  el.innerHTML = ALL_PRODUCTS.slice(0, 6).map(p => productCard(p)).join('');
}

function renderHomeVendors() {
  const el = document.getElementById('homeVendorsList');
  if (!el) return;
  el.innerHTML = VENDORS_ALL.slice(0, 3).map(v => vendorCard(v)).join('');
}

// ============================================================
//  PRODUCT CARD TEMPLATE
// ============================================================
function productCard(p) {
  const disc = p.originalPrice > p.price ? Math.round((1 - p.price/p.originalPrice)*100) : 0;
  const w = isWishlisted(p.id);
  return `<div class="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-50 cursor-pointer product-card" onclick="openProductModal(${p.id})">
    <div class="relative">
      <img src="${p.image}" alt="${p.title}" class="w-full h-36 object-cover" loading="lazy"/>
      ${disc ? `<span class="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">-${disc}%</span>` : ''}
      <button class="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow wishlist-btn${w?' wishlisted':''}" onclick="event.stopPropagation();toggleWishlist(${p.id},this)">
        <span class="material-icons-round text-sm ${w?'text-red-500':'text-gray-400'}">${w?'favorite':'favorite_border'}</span>
      </button>
    </div>
    <div class="p-3">
      <p class="text-xs text-indigo-500 font-medium mb-1">${p.vendor}</p>
      <p class="text-sm font-bold text-gray-900 leading-snug line-clamp-2 mb-2">${p.title}</p>
      <div class="flex items-center justify-between">
        <div>
          <p class="text-base font-black text-indigo-600">$${p.price}</p>
          ${p.originalPrice > p.price ? `<p class="text-xs text-gray-400 line-through">$${p.originalPrice}</p>` : ''}
        </div>
        <button onclick="event.stopPropagation();addToCartQuick(${p.id})" class="btn-primary w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
          <span class="material-icons-round text-white text-sm">add</span>
        </button>
      </div>
    </div>
  </div>`;
}

// ============================================================
//  CATEGORIES PAGE
// ============================================================
function renderCategoriesPage() {
  const grid = document.getElementById('categoriesGrid');
  if (grid) {
    grid.innerHTML = CATEGORIES.map(c => `
      <button onclick="filterByCategory('${c.name}')" class="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-sm border border-gray-50 hover:border-indigo-200 transition-colors">
        <div class="w-12 h-12 ${c.color} rounded-xl flex items-center justify-center text-2xl flex-shrink-0">${c.emoji}</div>
        <div class="text-left">
          <p class="text-sm font-bold text-gray-900">${c.name}</p>
          <p class="text-xs text-gray-400 mt-0.5">${ALL_PRODUCTS.filter(p=>p.category===c.name).length} items</p>
        </div>
      </button>`).join('');
  }
  const allGrid = document.getElementById('allProductsGrid');
  if (allGrid) allGrid.innerHTML = ALL_PRODUCTS.map(p => productCard(p)).join('');
  // Show all section, hide filter section
  clearCategoryFilter();
}

function filterByCategory(cat) {
  const filtered = ALL_PRODUCTS.filter(p => p.category === cat);
  const filterSection = document.getElementById('categoryFilterSection');
  const allSection = document.getElementById('allProductsSection');
  const title = document.getElementById('categoryFilterTitle');
  const count = document.getElementById('categoryFilterCount');
  const grid = document.getElementById('categoryFilteredGrid');
  if (!filterSection) return;
  title.textContent = cat;
  count.textContent = `${filtered.length} product${filtered.length !== 1 ? 's' : ''} found`;
  grid.innerHTML = filtered.length ? filtered.map(p => productCard(p)).join('') : '<p class="col-span-2 text-center text-gray-400 py-8">No products found in this category.</p>';
  filterSection.classList.remove('hidden');
  allSection.classList.add('hidden');
  filterSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function clearCategoryFilter() {
  document.getElementById('categoryFilterSection')?.classList.add('hidden');
  document.getElementById('allProductsSection')?.classList.remove('hidden');
}

// ============================================================
//  DEALS PAGE
// ============================================================
const DEAL_CATEGORIES = ['All', 'Electronics', 'Fashion', 'Home & Living', 'Sports'];
let activeDealFilter = 'All';

function renderDealsPage() {
  // Render pills
  const pillsEl = document.getElementById('dealPills');
  if (pillsEl) {
    pillsEl.innerHTML = DEAL_CATEGORIES.map(cat => `
      <button onclick="setDealFilter('${cat}')" id="pill-${cat.replace(/\s/g,'_')}" class="flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors border ${activeDealFilter===cat ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-600 border-gray-200'}">${cat}</button>`).join('');
  }
  // Render products
  renderDealsGrid();
}

function setDealFilter(cat) {
  activeDealFilter = cat;
  renderDealsPage();
}

function renderDealsGrid() {
  const el = document.getElementById('dealsGrid');
  if (!el) return;
  const products = activeDealFilter === 'All'
    ? ALL_PRODUCTS.filter(p => p.originalPrice > p.price)
    : ALL_PRODUCTS.filter(p => p.category === activeDealFilter && p.originalPrice > p.price);
  el.innerHTML = products.length
    ? products.map(p => productCard(p)).join('')
    : `<div class="col-span-2 text-center py-10"><p class="text-4xl mb-3">🔍</p><p class="text-gray-500 text-sm">No deals in this category right now.</p></div>`;
}

// ============================================================
//  VENDORS PAGE
// ============================================================
function vendorCard(v) {
  const followed = JSON.parse(localStorage.getItem('tshop_followed') || '[]');
  const isFollowed = followed.includes(v.id);
  return `<div class="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
    <div class="h-16 bg-gradient-to-r ${v.color} relative flex items-center px-4">
      <span class="text-3xl">${v.emoji}</span>
      <span class="ml-auto bg-white bg-opacity-20 text-white text-xs px-2 py-0.5 rounded-full font-medium">${v.badge}</span>
    </div>
    <div class="px-4 pb-4 pt-3">
      <div class="flex items-start justify-between mb-1">
        <div>
          <h3 class="font-bold text-gray-900">${v.name}</h3>
          <p class="text-xs text-gray-400">${v.category}</p>
        </div>
        <button onclick="toggleFollow(${v.id},this)" class="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${isFollowed ? 'bg-indigo-600 text-white border-indigo-600' : 'text-indigo-600 border-indigo-200 hover:bg-indigo-50'}" data-vendor-id="${v.id}">
          ${isFollowed ? 'Following' : '+ Follow'}
        </button>
      </div>
      <div class="flex items-center gap-1 mb-2">
        <span class="material-icons-round text-amber-400 text-sm">star</span>
        <span class="text-sm font-bold text-gray-700">${v.rating}</span>
        <span class="text-xs text-gray-400">(${v.reviews.toLocaleString()} reviews)</span>
        <span class="mx-1 text-gray-200">•</span>
        <span class="text-xs text-gray-400">${(v.followers/1000).toFixed(1)}k followers</span>
      </div>
      <p class="text-xs text-gray-500 mb-3 line-clamp-2">${v.bio}</p>
      <div class="flex gap-2">
        <button onclick="navigate('vendor-detail',${v.id})" class="flex-1 btn-primary py-2.5 rounded-xl text-white text-xs font-semibold">View Shop</button>
        <button onclick="showMessageVendor('${v.name}')" class="px-3 py-2.5 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
          <span class="material-icons-round text-gray-500 text-lg">chat_bubble_outline</span>
        </button>
      </div>
    </div>
  </div>`;
}

function renderVendorsPage() {
  const el = document.getElementById('vendorsList');
  if (!el) return;
  el.innerHTML = VENDORS_ALL.slice(0, vendorsLoaded).map(v => vendorCard(v)).join('');
  // Hide load more if all loaded
  const btn = document.getElementById('loadMoreVendorsContainer');
  if (btn) btn.style.display = vendorsLoaded >= VENDORS_ALL.length ? 'none' : 'block';
}

function loadMoreVendors() {
  vendorsLoaded = Math.min(vendorsLoaded + VENDORS_PER_LOAD, VENDORS_ALL.length);
  const el = document.getElementById('vendorsList');
  if (!el) return;
  // Append new cards
  const newVendors = VENDORS_ALL.slice(vendorsLoaded - VENDORS_PER_LOAD, vendorsLoaded);
  newVendors.forEach(v => {
    const div = document.createElement('div');
    div.innerHTML = vendorCard(v);
    el.appendChild(div.firstElementChild);
  });
  const btn = document.getElementById('loadMoreVendorsContainer');
  if (btn) btn.style.display = vendorsLoaded >= VENDORS_ALL.length ? 'none' : 'block';
  showToast(`Loaded ${newVendors.length} more vendor${newVendors.length!==1?'s':''}`);
}

function toggleFollow(vendorId, btn) {
  let followed = JSON.parse(localStorage.getItem('tshop_followed') || '[]');
  const idx = followed.indexOf(vendorId);
  if (idx > -1) {
    followed.splice(idx, 1);
    btn.textContent = '+ Follow';
    btn.className = btn.className.replace('bg-indigo-600 text-white border-indigo-600', 'text-indigo-600 border-indigo-200 hover:bg-indigo-50');
    showToast('Unfollowed vendor');
  } else {
    followed.push(vendorId);
    btn.textContent = 'Following';
    btn.className = btn.className.replace('text-indigo-600 border-indigo-200 hover:bg-indigo-50', 'bg-indigo-600 text-white border-indigo-600');
    showToast('Now following this vendor!');
  }
  localStorage.setItem('tshop_followed', JSON.stringify(followed));
}

function showMessageVendor(name) {
  const modal = document.createElement('div');
  modal.id = 'msgModal';
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end';
  modal.innerHTML = `<div class="bg-white w-full max-w-md mx-auto rounded-t-3xl p-5">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-base font-bold text-gray-900">Message ${name}</h3>
      <button onclick="document.getElementById('msgModal').remove()" class="p-2 rounded-full hover:bg-gray-100"><span class="material-icons-round text-gray-600">close</span></button>
    </div>
    <textarea class="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm outline-none focus:border-indigo-400 resize-none h-28 mb-3" placeholder="Write your message to ${name}..."></textarea>
    <button onclick="sendMessage(this)" class="btn-primary w-full py-3.5 rounded-2xl text-white font-bold">Send Message</button>
  </div>`;
  document.body.appendChild(modal);
}

function sendMessage(btn) {
  document.getElementById('msgModal')?.remove();
  showToast('Message sent to vendor!');
}

function showApplyVendor() {
  const modal = document.createElement('div');
  modal.id = 'applyModal';
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end';
  modal.innerHTML = `<div class="bg-white w-full max-w-md mx-auto rounded-t-3xl p-5">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-base font-bold text-gray-900">Apply to Sell on T-Shop</h3>
      <button onclick="document.getElementById('applyModal').remove()" class="p-2 rounded-full hover:bg-gray-100"><span class="material-icons-round text-gray-600">close</span></button>
    </div>
    <div class="space-y-3 mb-4">
      <input type="text" placeholder="Business / Shop name" class="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm outline-none focus:border-indigo-400"/>
      <input type="email" placeholder="Business email" class="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm outline-none focus:border-indigo-400"/>
      <select class="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm outline-none focus:border-indigo-400 bg-white">
        <option value="">Product category</option>
        ${CATEGORIES.map(c=>`<option>${c.name}</option>`).join('')}
      </select>
      <textarea class="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm outline-none focus:border-indigo-400 resize-none h-20" placeholder="Tell us about your products..."></textarea>
    </div>
    <button onclick="submitVendorApp()" class="btn-primary w-full py-3.5 rounded-2xl text-white font-bold">Submit Application</button>
  </div>`;
  document.body.appendChild(modal);
}

function submitVendorApp() {
  document.getElementById('applyModal')?.remove();
  showToast('Application submitted! We\'ll contact you within 2–3 days.');
}

// ============================================================
//  VENDOR DETAIL
// ============================================================
function renderVendorDetail(vendorId) {
  const v = VENDORS_ALL.find(x => x.id === vendorId);
  if (!v) return;
  const el = document.getElementById('vendorDetailContent');
  const followed = JSON.parse(localStorage.getItem('tshop_followed') || '[]');
  const isFollowed = followed.includes(v.id);
  el.innerHTML = `
    <div class="h-36 bg-gradient-to-r ${v.color} relative flex flex-col justify-end px-4 pb-4">
      <button onclick="navigate('vendors')" class="absolute top-4 left-4 bg-white bg-opacity-20 rounded-full p-2">
        <span class="material-icons-round text-white">arrow_back</span>
      </button>
      <span class="text-5xl mb-2">${v.emoji}</span>
      <span class="inline-block bg-white bg-opacity-20 text-white text-xs px-3 py-1 rounded-full font-medium w-fit">${v.badge}</span>
    </div>
    <div class="px-4 py-4">
      <div class="flex items-start justify-between mb-3">
        <div>
          <h1 class="text-xl font-black text-gray-900">${v.name}</h1>
          <p class="text-sm text-gray-400 mt-0.5">${v.category}</p>
        </div>
        <button id="vendorFollowBtn" onclick="toggleVendorDetailFollow(${v.id})" class="px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${isFollowed ? 'bg-indigo-600 text-white border-indigo-600' : 'text-indigo-600 border-indigo-200'}">
          ${isFollowed ? 'Following' : '+ Follow'}
        </button>
      </div>
      <div class="flex items-center gap-3 mb-3">
        <div class="flex items-center gap-1"><span class="material-icons-round text-amber-400 text-sm">star</span><span class="text-sm font-bold text-gray-700">${v.rating}</span><span class="text-xs text-gray-400">(${v.reviews.toLocaleString()})</span></div>
        <span class="text-gray-200">•</span>
        <span class="text-xs text-gray-400">${(v.followers/1000).toFixed(1)}k followers</span>
      </div>
      <p class="text-sm text-gray-600 mb-4">${v.bio}</p>
      <button onclick="showMessageVendor('${v.name}')" class="w-full border border-indigo-200 text-indigo-600 py-3 rounded-2xl text-sm font-semibold mb-5 hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2">
        <span class="material-icons-round text-xl">chat_bubble_outline</span> Send Message
      </button>
      ${v.items.length ? `<h2 class="text-base font-bold text-gray-900 mb-3">Products (${v.items.length})</h2><div class="grid grid-cols-2 gap-3">${v.items.map(p => productCard(p)).join('')}</div>` : '<p class="text-center text-gray-400 py-8">No products listed yet.</p>'}
    </div>`;
}

function toggleVendorDetailFollow(vendorId) {
  const btn = document.getElementById('vendorFollowBtn');
  let followed = JSON.parse(localStorage.getItem('tshop_followed') || '[]');
  const idx = followed.indexOf(vendorId);
  if (idx > -1) {
    followed.splice(idx, 1);
    if (btn) { btn.textContent = '+ Follow'; btn.className = 'px-4 py-2 rounded-full text-sm font-semibold border transition-colors text-indigo-600 border-indigo-200'; }
    showToast('Unfollowed');
  } else {
    followed.push(vendorId);
    if (btn) { btn.textContent = 'Following'; btn.className = 'px-4 py-2 rounded-full text-sm font-semibold border transition-colors bg-indigo-600 text-white border-indigo-600'; }
    showToast('Now following!');
  }
  localStorage.setItem('tshop_followed', JSON.stringify(followed));
}

// ============================================================
//  WISHLIST
// ============================================================
function toggleWishlist(productId, btn) {
  const idx = wishlistItems.findIndex(i => i.id === productId);
  if (idx > -1) {
    wishlistItems.splice(idx, 1);
    if (btn) {
      const icon = btn.querySelector('span');
      if (icon) { icon.textContent = 'favorite_border'; icon.className = 'material-icons-round text-sm text-gray-400'; }
      btn.classList.remove('wishlisted');
    }
    showToast('Removed from wishlist');
  } else {
    const p = ALL_PRODUCTS.find(x => x.id === productId);
    if (p) wishlistItems.push(p);
    if (btn) {
      const icon = btn.querySelector('span');
      if (icon) { icon.textContent = 'favorite'; icon.className = 'material-icons-round text-sm text-red-500'; }
      btn.classList.add('wishlisted');
    }
    showToast('Added to wishlist ❤️');
  }
  saveWishlist();
  updateWishlistBadge();
}

function toggleWishlistFromModal() {
  if (!modalProduct) return;
  const btn = document.getElementById('modalWishlistBtn');
  const icon = btn?.querySelector('span');
  const idx = wishlistItems.findIndex(i => i.id === modalProduct.id);
  if (idx > -1) {
    wishlistItems.splice(idx, 1);
    if (icon) { icon.textContent = 'favorite_border'; icon.className = 'material-icons-round text-gray-700 text-xl'; }
    showToast('Removed from wishlist');
  } else {
    wishlistItems.push(modalProduct);
    if (icon) { icon.textContent = 'favorite'; icon.className = 'material-icons-round text-red-500 text-xl'; }
    showToast('Added to wishlist ❤️');
  }
  saveWishlist();
  updateWishlistBadge();
}

function updateWishlistBadge() {
  const badge = document.getElementById('wishlistCountBadge');
  if (!badge) return;
  if (wishlistItems.length > 0) {
    badge.textContent = wishlistItems.length;
    badge.classList.remove('hidden');
  } else {
    badge.classList.add('hidden');
  }
}

function renderWishlistPage() {
  const el = document.getElementById('wishlistContent');
  if (!el) return;
  if (wishlistItems.length === 0) {
    el.innerHTML = `<div class="text-center py-16">
      <span class="material-icons-round text-6xl text-gray-200">favorite_border</span>
      <p class="text-gray-500 font-medium mt-4">Your wishlist is empty</p>
      <p class="text-gray-400 text-sm mt-1">Tap the heart icon on any product to save it</p>
      <button onclick="navigate('categories')" class="btn-primary text-white px-6 py-3 rounded-2xl font-semibold mt-5 inline-block">Browse Products</button>
    </div>`;
    return;
  }
  el.innerHTML = `<p class="text-sm text-gray-400 mb-4">${wishlistItems.length} saved item${wishlistItems.length!==1?'s':''}</p>
    <div class="grid grid-cols-2 gap-3">${wishlistItems.map(p => productCard(p)).join('')}</div>`;
}

// ============================================================
//  CART
// ============================================================
function addToCartQuick(productId) {
  const p = ALL_PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  const existing = cartItems.find(i => i.id === productId);
  if (existing) existing.qty += 1;
  else cartItems.push({ ...p, qty: 1 });
  saveCart();
  updateCartBadge();
  showToast(`${p.title.substring(0,20)}... added!`);
}

function addToCartFromModal() {
  if (!modalProduct) return;
  const existing = cartItems.find(i => i.id === modalProduct.id);
  if (existing) existing.qty += modalQty;
  else cartItems.push({ ...modalProduct, qty: modalQty });
  saveCart();
  updateCartBadge();
  closeProductModal();
  showToast(`${modalProduct.title.substring(0,20)}... added to cart!`);
}

function updateCartBadge() {
  const total = cartItems.reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById('cartBadge');
  if (!badge) return;
  if (total > 0) { badge.textContent = total; badge.classList.remove('hidden'); }
  else badge.classList.add('hidden');
}

function openCartDrawer() {
  renderCartDrawer();
  document.getElementById('cartDrawerOverlay').classList.add('open');
  setTimeout(() => document.getElementById('cartDrawer').classList.add('open'), 10);
}

function closeCartDrawer() {
  document.getElementById('cartDrawer').classList.remove('open');
  setTimeout(() => document.getElementById('cartDrawerOverlay').classList.remove('open'), 300);
}

function renderCartDrawer() {
  const list = document.getElementById('cartItemsList');
  const footer = document.getElementById('cartFooter');
  if (cartItems.length === 0) {
    list.innerHTML = `<div class="text-center py-12"><span class="material-icons-round text-5xl text-gray-200">shopping_bag</span><p class="text-gray-400 mt-3">Your cart is empty</p><button onclick="closeCartDrawer();navigate('categories')" class="btn-primary text-white px-5 py-2.5 rounded-xl font-semibold mt-4 text-sm">Start Shopping</button></div>`;
    footer.innerHTML = '';
    return;
  }
  list.innerHTML = cartItems.map(item => `
    <div class="flex items-center gap-3 bg-gray-50 rounded-2xl p-3">
      <img src="${item.image}" alt="${item.title}" class="w-14 h-14 rounded-xl object-cover flex-shrink-0" loading="lazy"/>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-semibold text-gray-800 truncate">${item.title}</p>
        <p class="text-xs text-gray-400">${item.vendor}</p>
        <p class="text-sm font-black text-indigo-600 mt-0.5">$${item.price}</p>
      </div>
      <div class="flex items-center gap-2 flex-shrink-0">
        <button onclick="changeCartQty(${item.id},-1)" class="qty-btn w-7 h-7 rounded-full border border-gray-200 bg-white flex items-center justify-center transition-colors">
          <span class="material-icons-round text-xs">remove</span>
        </button>
        <span class="text-sm font-bold text-gray-900 w-4 text-center">${item.qty}</span>
        <button onclick="changeCartQty(${item.id},1)" class="qty-btn w-7 h-7 rounded-full border border-gray-200 bg-white flex items-center justify-center transition-colors">
          <span class="material-icons-round text-xs">add</span>
        </button>
      </div>
    </div>`).join('');
  const total = cartItems.reduce((s, i) => s + i.price * i.qty, 0);
  footer.innerHTML = `<div class="flex justify-between text-sm font-medium text-gray-600 mb-3"><span>Subtotal (${cartItems.reduce((s,i)=>s+i.qty,0)} items)</span><span class="font-black text-indigo-600">$${total.toFixed(2)}</span></div>
    <button onclick="closeCartDrawer();navigate('checkout')" class="btn-primary w-full py-4 rounded-2xl text-white font-bold text-base">Checkout — $${total.toFixed(2)}</button>`;
}

function changeCartQty(productId, delta) {
  const item = cartItems.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cartItems = cartItems.filter(i => i.id !== productId);
  saveCart();
  updateCartBadge();
  renderCartDrawer();
}

// ============================================================
//  PRODUCT MODAL
// ============================================================
function openProductModal(productId) {
  const p = ALL_PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  modalProduct = p;
  modalQty = 1;
  document.getElementById('modalImg').src = p.image;
  document.getElementById('modalImg').alt = p.title;
  document.getElementById('modalTitle').textContent = p.title;
  document.getElementById('modalVendor').textContent = p.vendor;
  document.getElementById('modalPrice').textContent = `$${p.price}`;
  document.getElementById('modalRating').textContent = p.rating;
  document.getElementById('modalReviews').textContent = `(${p.reviews.toLocaleString()} reviews)`;
  document.getElementById('modalDesc').textContent = p.desc;
  document.getElementById('modalQtyDisplay').textContent = 1;
  // Wishlist icon
  const wBtn = document.getElementById('modalWishlistBtn');
  const wIcon = wBtn?.querySelector('span');
  if (wIcon) {
    if (isWishlisted(p.id)) { wIcon.textContent = 'favorite'; wIcon.className = 'material-icons-round text-red-500 text-xl'; }
    else { wIcon.textContent = 'favorite_border'; wIcon.className = 'material-icons-round text-gray-700 text-xl'; }
  }
  const modal = document.getElementById('productModal');
  modal.style.display = 'flex';
  requestAnimationFrame(() => modal.classList.add('open'));
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  modal.classList.remove('open');
  setTimeout(() => { modal.style.display = 'none'; }, 200);
}

function changeModalQty(delta) {
  modalQty = Math.max(1, modalQty + delta);
  document.getElementById('modalQtyDisplay').textContent = modalQty;
}

// ============================================================
//  ORDER TRACKING
// ============================================================
function openOrderTracking() {
  const el = document.getElementById('orderTrackingContent');
  const orders = Object.values(ORDER_TRACKING_DATA);
  el.innerHTML = orders.map(o => `
    <div class="mb-6 bg-gray-50 rounded-2xl p-4 cursor-pointer hover:bg-indigo-50 transition-colors" onclick="showOrderDetail('${o.id}')">
      <div class="flex items-center justify-between mb-1">
        <span class="font-bold text-gray-900 text-sm">${o.id}</span>
        <span class="text-xs px-2 py-1 rounded-full font-semibold ${o.status==='Delivered'?'bg-green-100 text-green-700':o.status==='In Transit'?'bg-blue-100 text-blue-700':'bg-amber-100 text-amber-700'}">${o.status}</span>
      </div>
      <p class="text-xs text-gray-500">${o.product}</p>
      <p class="text-xs text-gray-400 mt-1">${o.date}</p>
    </div>`).join('');
  const modal = document.getElementById('orderModal');
  modal.style.display = 'flex';
  requestAnimationFrame(() => modal.classList.add('open'));
}

function showOrderDetail(orderId) {
  const o = ORDER_TRACKING_DATA[orderId];
  if (!o) return;
  const el = document.getElementById('orderTrackingContent');
  el.innerHTML = `<button onclick="openOrderTracking()" class="flex items-center gap-1 text-indigo-600 text-sm font-medium mb-4"><span class="material-icons-round text-sm">arrow_back</span> All Orders</button>
    <div class="mb-4"><h3 class="font-bold text-gray-900">${o.id}</h3><p class="text-sm text-gray-500 mt-0.5">${o.product}</p></div>
    <div class="space-y-0">
      ${o.steps.map((s, i) => `<div class="tracking-step flex gap-4 ${s.done?'done':s.active?'active':'pending'}">
        <div class="flex flex-col items-center">
          <div class="step-circle w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${s.done?'bg-green-500 border-green-500':s.active?'bg-indigo-600 border-indigo-600':'bg-white border-gray-300'}">
            <span class="material-icons-round text-sm ${s.done||s.active?'text-white':'text-gray-300'}">${s.done?'check':s.active?'radio_button_checked':'radio_button_unchecked'}</span>
          </div>
          ${i < o.steps.length-1 ? `<div class="w-0.5 h-8 ${s.done?'bg-green-500':'bg-gray-200'} my-1"></div>` : ''}
        </div>
        <div class="pb-4">
          <p class="text-sm font-bold ${s.done||s.active?'text-gray-900':'text-gray-400'}">${s.label}</p>
          <p class="text-xs text-gray-400 mt-0.5">${s.time}</p>
        </div>
      </div>`).join('')}
    </div>`;
}

function closeOrderTracking() {
  const modal = document.getElementById('orderModal');
  modal.classList.remove('open');
  setTimeout(() => { modal.style.display = 'none'; }, 200);
}

// ============================================================
//  PORTAL / AUTH
// ============================================================
function renderPortalPage() {
  const loggedIn = document.getElementById('portalLoggedIn');
  const loggedOut = document.getElementById('portalLoggedOut');
  if (currentUser) {
    loggedOut.classList.add('hidden');
    loggedIn.classList.remove('hidden');
    document.getElementById('portalUserName').textContent = currentUser.name;
    document.getElementById('portalUserEmail').textContent = currentUser.email;
  } else {
    loggedIn.classList.add('hidden');
    loggedOut.classList.remove('hidden');
    showLogin();
  }
  updateWishlistBadge();
}

function showLogin() {
  document.getElementById('loginForm').classList.remove('hidden');
  document.getElementById('signupForm').classList.add('hidden');
}

function showSignup() {
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById('signupForm').classList.remove('hidden');
}

function handleLogin() {
  const email = document.getElementById('loginEmail').value.trim();
  const pass = document.getElementById('loginPassword').value;
  if (!email || !pass) { showToast('Please fill in all fields'); return; }
  if (pass.length < 4) { showToast('Password too short'); return; }
  currentUser = { name: email.split('@')[0].replace(/[^a-z]/gi, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'User', email };
  localStorage.setItem('tshop_user', JSON.stringify(currentUser));
  renderPortalPage();
  showToast('Welcome back! 👋');
}

function handleSignup() {
  const name = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const pass = document.getElementById('signupPassword').value;
  if (!name || !email || !pass) { showToast('Please fill in all fields'); return; }
  if (pass.length < 6) { showToast('Password must be at least 6 characters'); return; }
  currentUser = { name, email };
  localStorage.setItem('tshop_user', JSON.stringify(currentUser));
  renderPortalPage();
  showToast(`Welcome, ${name}! 🎉`);
}

function handleLogout() {
  currentUser = null;
  localStorage.removeItem('tshop_user');
  renderPortalPage();
  showToast('Signed out successfully');
}

// ============================================================
//  CHECKOUT
// ============================================================
function initCheckoutPage() {
  checkoutStep = 1;
  setCheckoutStep(1);
  renderMiniCart();
}

function renderMiniCart() {
  const el = document.getElementById('checkoutMiniCart');
  if (!el || cartItems.length === 0) { if (el) el.innerHTML = '<p class="text-gray-400 text-sm text-center">No items in cart</p>'; return; }
  const total = cartItems.reduce((s, i) => s + i.price * i.qty, 0);
  el.innerHTML = `<div class="flex items-center justify-between mb-2">
    <p class="text-sm font-bold text-gray-800">${cartItems.reduce((s,i)=>s+i.qty,0)} items</p>
    <p class="text-sm font-black text-indigo-600">$${total.toFixed(2)}</p>
  </div>
  <div class="space-y-2">${cartItems.map(i=>`<div class="flex items-center gap-2">
    <img src="${i.image}" alt="${i.title}" class="w-8 h-8 rounded-lg object-cover" loading="lazy"/>
    <p class="text-xs text-gray-600 flex-1 truncate">${i.title}</p>
    <p class="text-xs font-bold text-gray-800">×${i.qty}</p>
    <p class="text-xs font-black text-indigo-600">$${(i.price*i.qty).toFixed(2)}</p>
  </div>`).join('')}</div>`;
}

function setCheckoutStep(step) {
  checkoutStep = step;
  // Validate
  if (step === 2) {
    const name = document.getElementById('shippingName').value.trim();
    const addr = document.getElementById('shippingAddress').value.trim();
    if (!name || !addr) { showToast('Please fill in required fields'); return; }
  }
  if (step === 3) {
    const card = document.getElementById('cardNumber').value.replace(/\s/g,'');
    if (card.length < 16) { showToast('Please enter a valid card number'); return; }
    renderOrderSummary();
  }
  ['checkoutStep1','checkoutStep2','checkoutStep3'].forEach((id,i) => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('hidden', i+1 !== step);
  });
  // Update step indicators
  for (let i = 1; i <= 3; i++) {
    const ind = document.getElementById(`step${i}Indicator`);
    if (!ind) continue;
    const circle = ind.querySelector('div');
    const label = ind.querySelector('span');
    if (i < step) { circle.className = 'w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold step-done'; label.className = 'text-xs font-medium text-green-600'; }
    else if (i === step) { circle.className = 'w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold step-active'; label.className = 'text-xs font-medium text-indigo-700'; }
    else { circle.className = 'w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold step-inactive'; label.className = 'text-xs font-medium text-gray-400'; }
  }
}

function renderOrderSummary() {
  const el = document.getElementById('orderSummary');
  const subtotalEl = document.getElementById('confirmSubtotal');
  const totalEl = document.getElementById('confirmTotal');
  if (!el) return;
  const subtotal = cartItems.reduce((s, i) => s + i.price * i.qty, 0);
  el.innerHTML = cartItems.map(i=>`<div class="flex items-center gap-3">
    <img src="${i.image}" alt="${i.title}" class="w-10 h-10 rounded-xl object-cover" loading="lazy"/>
    <div class="flex-1 min-w-0"><p class="text-sm font-medium text-gray-800 truncate">${i.title}</p><p class="text-xs text-gray-400">Qty: ${i.qty}</p></div>
    <p class="text-sm font-black text-gray-800">$${(i.price*i.qty).toFixed(2)}</p>
  </div>`).join('');
  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${subtotal.toFixed(2)}`;
}

function placeOrder() {
  cartItems = [];
  saveCart();
  updateCartBadge();
  navigate('home');
  setTimeout(() => showToast('🎉 Order placed successfully! Track in Portal → Orders'), 400);
}

// ============================================================
//  SEARCH
// ============================================================
function openSearchOverlay() {
  document.getElementById('searchOverlay').classList.add('open');
  setTimeout(() => document.getElementById('searchInput').focus(), 100);
}

function closeSearchOverlay() {
  document.getElementById('searchOverlay').classList.remove('open');
  document.getElementById('searchInput').value = '';
  document.getElementById('clearSearchBtn').classList.add('hidden');
  document.getElementById('searchResults').innerHTML = '<p class="text-gray-400 text-sm text-center mt-8">Type to search products…</p>';
}

function clearSearch() {
  document.getElementById('searchInput').value = '';
  document.getElementById('clearSearchBtn').classList.add('hidden');
  document.getElementById('searchResults').innerHTML = '<p class="text-gray-400 text-sm text-center mt-8">Type to search products…</p>';
  document.getElementById('searchInput').focus();
}

function handleSearch(query) {
  const clearBtn = document.getElementById('clearSearchBtn');
  const results = document.getElementById('searchResults');
  clearBtn.classList.toggle('hidden', !query);
  if (!query.trim()) { results.innerHTML = '<p class="text-gray-400 text-sm text-center mt-8">Type to search products…</p>'; return; }
  const q = query.toLowerCase();
  const matched = ALL_PRODUCTS.filter(p => p.title.toLowerCase().includes(q) || p.vendor.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
  if (!matched.length) { results.innerHTML = `<div class="text-center py-12"><p class="text-4xl mb-3">🔍</p><p class="text-gray-500 text-sm">No results for "<strong>${query}</strong>"</p></div>`; return; }
  results.innerHTML = `<p class="text-xs text-gray-400 mb-3">${matched.length} result${matched.length!==1?'s':''} for "<strong>${query}</strong>"</p><div class="grid grid-cols-2 gap-3">${matched.map(p => productCard(p)).join('')}</div>`;
}

// ============================================================
//  TOAST
// ============================================================
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}
</script>
<script>window.onload=function(){var d=document.createElement("div");d.id="appLoadFinished";document.body.appendChild(d);};</script>
</body>

</html>
