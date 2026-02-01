// --- Data ---
const menuItems = [
  // Appetizers / Starters
  { id: 1, name: 'Samosa', price: 60, category: 'veg', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80', desc: 'Crispy pastry filled with spiced potatoes & peas', nutrition: { kcal: 260, protein: '4g', carbs: '32g', fat: '14g' } },
  { id: 2, name: 'Truffle Pakora', price: 180, category: 'veg', image: 'https://images.openai.com/static-rsc-3/FEtNfTRyqSNHdk5bMGVM3WqLfp0Zs2F65nqFY8Jp4Th-lO-Ghk-Fhe1n1g2YCeN4daGwRGYK7YxoRColFMvfIdfQqmhI9q7XXXhP9Xc0hsc?purpose=fullsize', desc: 'Artisanal fritters infused with truffle oil', nutrition: { kcal: 180, protein: '3g', carbs: '20g', fat: '10g' } },
  { id: 3, name: 'Chicken 65', price: 250, category: 'non-veg', image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80', desc: 'Spicy, deep-fried chicken marinated in ginger', nutrition: { kcal: 350, protein: '25g', carbs: '8g', fat: '22g' } },
  { id: 4, name: 'Gol Gappa Shots', price: 150, category: 'veg', image: 'https://images.openai.com/static-rsc-3/GxNaecaa2ndVNNFHXYMe-R9vZ76wHE5Ye-ZdzlhtpKzkU99oPDgAbG6I5WIIAotE1afu4QBXJpn0C3VoNHjZlmndyL7mwiq5L5_E-lMnmZI?purpose=fullsize', desc: 'Crispy puris serving vodka-infused spiced water', nutrition: { kcal: 120, protein: '2g', carbs: '25g', fat: '3g' } },
  
  // Main Course (Vegetarian)
  { id: 7, name: 'Paneer Butter Masala', price: 380, category: 'veg', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80', desc: 'Cottage cheese simmered in rich tomato gravy', nutrition: { kcal: 450, protein: '18g', carbs: '15g', fat: '35g' } },
  { id: 9, name: 'Chole Masala', price: 220, category: 'veg', image: 'https://images.openai.com/static-rsc-3/h4F7uuWFVXt83Gnqx56d3hwo0Z8dtgvx-NBAHs93RQD6jaGhLI8UCi_Ud39flGcTTcB3khgmnefvReXwDwfYOMfEDrnr2FVXnZtMZj0G4zM?purpose=fullsize', desc: 'Spiced chickpeas cooked in a robust onion-tomato gravy', nutrition: { kcal: 320, protein: '12g', carbs: '45g', fat: '10g' } },
  { id: 40, name: 'Veg Biryani', price: 350, category: 'veg', image: 'https://images.openai.com/static-rsc-3/USOlKwNR3tQoDYDfbUdFJG5Tw7Q9YRWd5paHt5QNpEtby3CZcupirpJ5ZHoZwsuyDb6QdVO60oMzgOiDJnqsyRk63Ye97r-t4tWeC5KC6bM?purpose=fullsize', desc: 'Aromatic basmati rice cooked with mixed vegetables and spices', nutrition: { kcal: 400, protein: '8g', carbs: '60g', fat: '12g' } },
  { id: 41, name: 'Margherita Pizza', price: 400, category: 'veg', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80', desc: 'Classic pizza with fresh mozzarella, basil, and tomato sauce', nutrition: { kcal: 700, protein: '25g', carbs: '80g', fat: '28g' } },
  { id: 42, name: 'Vegetable Burger', price: 250, category: 'veg', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80', desc: 'Grilled vegetable patty with fresh lettuce and tangy sauce', nutrition: { kcal: 480, protein: '12g', carbs: '55g', fat: '22g' } },
  { id: 43, name: 'Pasta Primavera', price: 320, category: 'veg', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=600&q=80', desc: 'Seasonal vegetables tossed with pasta in a light garlic sauce', nutrition: { kcal: 380, protein: '10g', carbs: '65g', fat: '8g' } },
  { id: 44, name: 'Veg Fried Rice', price: 280, category: 'veg', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80', desc: 'Wok-tossed rice with crunchy vegetables and soy sauce', nutrition: { kcal: 350, protein: '6g', carbs: '55g', fat: '10g' } },
  { id: 45, name: 'Masala Dosa', price: 200, category: 'veg', image: 'https://images.openai.com/static-rsc-3/r_ywmOceRA8769nbZCEGZl1JTQMIq_XXh4KKoHhTmPlzsn3Gl9F_QdrgfykCRDRsNWHNMbyr4YsF_g3yoLsYCLES8wso5UsC7enTByODF5w?purpose=fullsize', desc: 'Crispy rice crepe stuffed with spiced potato filling', nutrition: { kcal: 300, protein: '6g', carbs: '45g', fat: '8g' } },
  
  // Non-Veg
  { id: 13, name: 'Butter Chicken', price: 450, category: 'non-veg', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80', desc: 'Chicken marinated in yogurt and spices, cooked in tomato butter sauce', nutrition: { kcal: 480, protein: '30g', carbs: '12g', fat: '32g' } },
  { id: 14, name: 'Chicken Biryani', price: 400, category: 'non-veg', image: 'https://images.openai.com/static-rsc-3/y_GoZgBc8qgGIzPtkqCpeE-Zejgf0LCQ_Agucbk2M2Yt2u01XjX9DrF2VtfK0ld5d7azg3o-qTiTtzrlQ4zZuaBYeTiNW3ZIU3a57CWgU0A?purpose=fullsize', desc: 'Aromatic basmati rice cooked with tender chicken and spices', nutrition: { kcal: 550, protein: '28g', carbs: '55g', fat: '20g' } },
  { id: 15, name: 'Grilled Chicken', price: 350, category: 'non-veg', image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=600&q=80', desc: 'Juicy chicken breast grilled with herbs and served with veggies', nutrition: { kcal: 320, protein: '35g', carbs: '5g', fat: '15g' } },
  { id: 16, name: 'Chicken Burger', price: 280, category: 'non-veg', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80', desc: 'Crispy chicken fillet with lettuce, tomato and mayo on a bun', nutrition: { kcal: 520, protein: '22g', carbs: '45g', fat: '25g' } },
  { id: 17, name: 'Fish Fry', price: 320, category: 'non-veg', image: 'https://www.allrecipes.com/thmb/F5zlkqY_bPtSJS3txt6cNLyMB6Q%3D/1500x0/filters%3Ano_upscale%28%29%3Amax_bytes%28150000%29%3Astrip_icc%28%29/AR-42814-crispy-fried-fish-DDMFS-4x3-428ed46bde964bd3a0a052c3e143c0d8.jpg', desc: 'Fresh fish coated in spices and shallow fried to perfection', nutrition: { kcal: 380, protein: '26g', carbs: '15g', fat: '20g' } },
  { id: 18, name: 'Chicken Tikka', price: 300, category: 'non-veg', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80', desc: 'Boneless chicken chunks marinated in spices and yogurt, roasted in tandoor', nutrition: { kcal: 280, protein: '32g', carbs: '4g', fat: '12g' } },
  { id: 19, name: 'Mutton Curry', price: 520, category: 'non-veg', image: 'https://images.openai.com/static-rsc-3/0xSus6E7p8LOJcBrDt61xp2gOCuihWNHhPAOe1IDcUI0m1PrZzCARBljf_xZjyTZqv4KVQNESgznWkqg3M01BUf753FxMCBaBFDTeyRTN18?purpose=fullsize', desc: 'Tender mutton pieces slow cooked in a spicy onion tomato gravy', nutrition: { kcal: 520, protein: '28g', carbs: '10g', fat: '35g' } },
  { id: 50, name: 'Prawn Masala', price: 550, category: 'non-veg', image: 'https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=600&q=80', desc: 'Succulent prawns cooked in a spicy coconut based masala', nutrition: { kcal: 360, protein: '24g', carbs: '12g', fat: '22g' } },
  
  // Breads
  { id: 20, name: 'Butter Naan', price: 60, category: 'veg', image: 'https://images.openai.com/static-rsc-3/dvv_7_uWcD6xngnB3Xc1JXtd3bmoCCGhadLPA2jJYBiSYerVin6YctD0nmzsyJI2JtCGsJgWxZ0nYk5omEFLF7m9ukhZ78USN-L5YjsfePE?purpose=fullsize', desc: 'Soft leavened bread cooked in tandoor', nutrition: { kcal: 180, protein: '5g', carbs: '30g', fat: '6g' } },
  
  // Desserts
  { id: 31, name: 'Gulab Jamun', price: 150, category: 'desserts', image: 'https://images.openai.com/static-rsc-3/lL3U5NNofLJ_krgdGCS-tVRvidcJ1gBbotOG_iS2CI0R-A08tm3hUN2KyScKZhHTwcIajRh3zlcYRSXXPxLDoP_DCQPLXi-ROmt7d2gI4Dw?purpose=fullsize', desc: 'Milk solids soaked in saffron sugar syrup', nutrition: { kcal: 320, protein: '4g', carbs: '45g', fat: '12g' } },
  { id: 32, name: 'Chocolate Brownie', price: 180, category: 'desserts', image: 'https://images.openai.com/static-rsc-3/Z1YTrvxcOmMEju8-tOmVHvofwpBjxJ-LvcIBJLJv7x3y_scmNYLPWTSX-ZUgH2LHo2mf_e6SqGTLEHFA8xnYVqpcWR8LDqCOOtRxKLs8cKQ?purpose=fullsize', desc: 'Fudgy walnut brownie served warm', nutrition: { kcal: 350, protein: '5g', carbs: '42g', fat: '18g' } },
  { id: 33, name: 'Ice Cream Sundae', price: 220, category: 'desserts', image: 'https://images.openai.com/static-rsc-3/QxC4bQn6KYgaELnJx422LtESRXPe2EobIzeC72HmrekpDC-z9fzULTUVE09pcCRTy5mOaLS6bOmxHLOjqlrtLKu2XlPb6Aa28ybTUQRi_JE?purpose=fullsize', desc: 'Scoops of vanilla and chocolate with fudge sauce', nutrition: { kcal: 420, protein: '6g', carbs: '52g', fat: '20g' } },
  { id: 34, name: 'Cheesecake', price: 250, category: 'desserts', image: 'https://images.openai.com/static-rsc-3/9h_eDi3_pFO0rcjzT5Ew-q-7KdnKEb9pRYIQmaiKdwfx6_gfNx4zmX7VT73bnoVDCUm25AhJ0EFfWDIhdevCAUme_XIhQncKRFtJfWxLKgY?purpose=fullsize', desc: 'Classic New York style cheesecake with berry topping', nutrition: { kcal: 450, protein: '8g', carbs: '38g', fat: '28g' } },
  { id: 35, name: 'Fruit Custard', price: 160, category: 'desserts', image: 'https://images.openai.com/static-rsc-3/Fa0UsfRRPOd_fx6p7yK9MpQHtCcE9cRabcPkmJePNm5H6MHfVTA7YPAPZSE5gowThO6O31Op3GGAyuh4uiwbNPn48u2FJl_gPg-BKqpMtLM?purpose=fullsize', desc: 'Seasonal fruits in creamy vanilla custard', nutrition: { kcal: 280, protein: '6g', carbs: '40g', fat: '10g' } },
  { id: 36, name: 'Chocolate Lava Cake', price: 240, category: 'desserts', image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=600&q=80', desc: 'Molten chocolate cake with a gooey center', nutrition: { kcal: 380, protein: '6g', carbs: '48g', fat: '20g' } },
  { id: 37, name: 'Donuts', price: 120, category: 'desserts', image: 'https://images.openai.com/static-rsc-3/fQT2QbKSWAF1JSVTGkrULjmdtSSKzVvFlVTGs_y7SY6kOIh3foETNrayK-80qp7W1yqFPXKRYodgYrahKUaUrGjMhQp5eZ1ZGL8wFjzj9TA?purpose=fullsize', desc: 'Glazed ring donuts with sprinkles', nutrition: { kcal: 250, protein: '3g', carbs: '30g', fat: '12g' } },
  { id: 38, name: 'Apple Pie', price: 200, category: 'desserts', image: 'https://images.openai.com/static-rsc-3/XFJDe9ZJQA5IKkiI_vzWgCowo_w8qD2RohSNJkmmF37iAWwVnZh2386xRu_XcKeaGVypmOZEnNqR8xEhnX5FOAdCbkgmXZ-TLr50hXATTfE?purpose=fullsize', desc: 'Warm pie filled with spiced apples and crust', nutrition: { kcal: 320, protein: '3g', carbs: '46g', fat: '14g' } },
  
  // Beverages
  // Beverages
  { id: 27, name: 'Mango Lassi', price: 120, category: 'drinks', image: 'https://images.openai.com/static-rsc-3/OkJBjQs5Ihj1IOjGYvIUp04tyqKjXIY3XyGHJvpIZaOrTEmz5reX2RivgUOYrCz24PwiQ5TQxHn2XqN-NrfFCbZRzn_lzdex5DF5e3ncUqk?purpose=fullsize', desc: 'Creamy yogurt drink with mango pulp', nutrition: { kcal: 220, protein: '6g', carbs: '35g', fat: '8g' } },
  { id: 28, name: 'Masala Chai', price: 50, category: 'drinks', image: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=600&q=80', desc: 'Spiced Indian tea', nutrition: { kcal: 120, protein: '4g', carbs: '18g', fat: '4g' } },
  { id: 60, name: 'Fresh Lime Soda', price: 110, category: 'drinks', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80', desc: 'Refreshing lime drink with soda and mint', nutrition: { kcal: 90, protein: '0g', carbs: '22g', fat: '0g' } },
  { id: 61, name: 'Mango Smoothie', price: 180, category: 'drinks', image: 'https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/B6821ADB-CB37-47B2-8091-C61A43487506/Derivates/35e35439-6bf2-4840-9c46-971393239c29.jpg', desc: 'Thick creamy smoothie made with fresh alphonso mangoes', nutrition: { kcal: 280, protein: '5g', carbs: '45g', fat: '8g' } },
  { id: 62, name: 'Cold Coffee', price: 160, category: 'drinks', image: 'https://www.heinens.com/content/uploads/2022/05/Mocha-Iced-Coffee-with-Vanilla-Cold-Foam-800x550-1.jpg', desc: 'Chilled coffee blend with ice cream and chocolate sauce', nutrition: { kcal: 320, protein: '6g', carbs: '40g', fat: '15g' } },
  { id: 63, name: 'Chocolate Milkshake', price: 190, category: 'drinks', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80', desc: 'Decadent chocolate shake topped with whipped cream', nutrition: { kcal: 450, protein: '8g', carbs: '55g', fat: '20g' } },
  { id: 64, name: 'Green Tea', price: 80, category: 'drinks', image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&w=600&q=80', desc: 'Healthy antioxidant-rich hot green tea', nutrition: { kcal: 5, protein: '0g', carbs: '1g', fat: '0g' } },
  { id: 65, name: 'Iced Tea', price: 120, category: 'drinks', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80', desc: 'Chilled lemon infused tea served with ice', nutrition: { kcal: 80, protein: '0g', carbs: '20g', fat: '0g' } },
  { id: 66, name: 'Soft Drinks', price: 60, category: 'drinks', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80', desc: 'Choice of Coke, Pepsi, Sprite or Fanta', nutrition: { kcal: 140, protein: '0g', carbs: '35g', fat: '0g' } },
  { id: 67, name: 'Mineral Water', price: 40, category: 'drinks', image: 'https://waiakea.com/cdn/shop/products/500mL_Oceanplast_Tropical.png?v=1643139499&width=500', desc: 'Packaged mineral water bottle', nutrition: { kcal: 0, protein: '0g', carbs: '0g', fat: '0g' } }
];

let cart = [];
let currentFilter = 'all';

let vantaEffect = null;

// --- Vanta.js Background (Fog) ---
function initBackground() {
    try {
        vantaEffect = VANTA.FOG({
            el: "#canvas-container",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            highlightColor: 0xD35400, // Def: Orange
            midtoneColor: 0xD4AF37,   // Def: Gold
            lowlightColor: 0x0f1014,
            baseColor: 0x0f1014,
            blurFactor: 0.6,
            speed: 1.5,
            zoom: 1.2
        });
    } catch (e) {
        console.error("Vanta.js failed to load:", e);
    }
}

// --- Theme Switcher ---
// --- Theme Switcher ---
const themes = [
    { id: 'default', icon: '🎨', colors: { high: 0xD35400, mid: 0xD4AF37 } },
    { id: 'green',   icon: '🌿', colors: { high: 0x27ae60, mid: 0x2ecc71 } },
    { id: 'blue',    icon: '🌊', colors: { high: 0x2980b9, mid: 0x3498db } }
];
let currentThemeIndex = 0;

function cycleTheme() {
    // 1. Next Theme
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    const theme = themes[currentThemeIndex];

    // 2. Update Button UI
    const btn = document.getElementById('theme-toggle');
    // Using cart-btn class for style, but we can add theme-specific color if desired
    btn.textContent = theme.icon; 
    
    // 3. Remove old theme classes & Add new
    document.body.classList.remove('theme-green', 'theme-blue');
    if (theme.id !== 'default') {
        document.body.classList.add(`theme-${theme.id}`);
    }

    // 4. Update Vanta
    if(vantaEffect) {
        vantaEffect.setOptions({
            highlightColor: theme.colors.high,
            midtoneColor: theme.colors.mid
        });
    }
}

// --- Menu Rendering & Filtering ---
function renderMenu(items = menuItems) {
    const menuGrid = document.getElementById('menuGrid');
    menuGrid.innerHTML = '';
  
    if (items.length === 0) {
      menuGrid.innerHTML = '<div style="text-align:center; color:#666; width:100%; padding:40px; grid-column:1/-1;">No delicacies found matching your taste.</div>';
      return;
    }
  
    items.forEach((item, index) => {
      const isVeg = item.category === 'veg' || item.category === 'desserts' || item.category === 'drinks';
      const badgeClass = isVeg ? 'veg-badge' : 'non-veg-badge'; // Can customize further
      const badgeIcon = isVeg ? '🟢' : '🔴';
  
      const card = document.createElement('div');
      card.className = 'menu-card';
      // Data attribute for GSAP filtering if we wanted to get fancy, but innerHTML replace works too
      card.innerHTML = `
        <div class="img-wrapper">
          <img src="${item.image}" alt="${item.name}" class="card-image">
          <div class="badge">${item.category === 'veg' ? '🌿' : item.category === 'non-veg' ? '🍗' : '🍹'}</div>
          <!-- Nutrition Button -->
          ${item.nutrition ? `<button class="nutri-btn" onclick="openNutritionModal(${item.id}, event)" title="View Nutrition Info">ℹ️</button>` : ''}
        </div>
        <div class="card-content">
          <div class="card-title">${item.name}</div>
          <div class="card-desc">${item.desc}</div>
          <div class="card-footer">
            <span class="price">₹${item.price}</span>
            <button class="add-btn" onclick="addToCart(${item.id})">Add to Cart</button>
          </div>
        </div>
      `;
      menuGrid.appendChild(card);
    });

    // GSAP Stagger Animation for Cards
    gsap.fromTo(".menu-card", 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" }
    );
}

function filterMenu(category) {
    currentFilter = category;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.dataset.filter === category) btn.classList.add('active');
    });

    const filtered = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    
    renderMenu(filtered);
}

function searchItems() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = menuItems.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.desc.toLowerCase().includes(query)
    );
    renderMenu(filtered);
}

// --- Cart Logic ---
function addToCart(id) {
    const item = menuItems.find(i => i.id === id);
    const existing = cart.find(i => i.id === id);

    if(existing) {
        existing.qty++;
    } else {
        cart.push({ ...item, qty: 1 });
    }

    updateCartUI();
    
    // Tiny bounce animation on cart icon
    gsap.fromTo('.cart-count', 
        { scale: 1.5 }, 
        { scale: 1, duration: 0.3, ease: 'elastic.out(1, 0.3)' }
    );
}

function updateCartUI() {
    document.getElementById('cart-count').textContent = cart.reduce((acc, item) => acc + item.qty, 0);
    
    const cartItemsEl = document.getElementById('cart-items');
    cartItemsEl.innerHTML = '';
    
    let subtotal = 0;

    cart.forEach(item => {
        subtotal += item.price * item.qty;
        
        const el = document.createElement('div');
        el.className = 'cart-item';
        el.innerHTML = `
            <div class="cart-item-info">
                <div class="item-name">${item.name}</div>
                <div class="item-price">₹${item.price}</div>
            </div>
            <div class="qty-controls">
                <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
                <span>${item.qty}</span>
                <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
            </div>
            <button class="remove-btn" onclick="changeQty(${item.id}, -999)">×</button>
        `;
        cartItemsEl.appendChild(el);
    });

    if(cart.length === 0) {
        cartItemsEl.innerHTML = '<div style="text-align:center; color:#666; margin-top:50px;">Your plate is empty.<br>Add some flavor!</div>';
    }

    // Totals
    const delivery = subtotal > 500 ? 0 : (subtotal > 0 ? 50 : 0);
    const tax = subtotal * 0.05;
    const total = subtotal + delivery + tax;

    document.getElementById('subtotal').textContent = `₹${subtotal}`;
    document.getElementById('delivery-fee').textContent = `₹${delivery}`;
    document.getElementById('tax').textContent = `₹${tax.toFixed(0)}`;
    document.getElementById('total').textContent = `₹${total.toFixed(0)}`;

    // --- Nutrition Analyser ---
    updateNutritionAnalysis();
}

function changeQty(id, change) {
    const item = cart.find(i => i.id === id);
    if(!item) return;

    item.qty += change;
    if(item.qty <= 0) {
        cart = cart.filter(i => i.id !== id);
    }
    updateCartUI();
}

// --- Nutrition Modal Logic ---
function openNutritionModal(id, e) {
    if(e) e.stopPropagation(); // Prevent card click if any
    
    const item = menuItems.find(i => i.id === id);
    if(!item || !item.nutrition) return;

    // Populate Modal
    document.getElementById('nutri-modal-title').textContent = item.name;
    document.getElementById('nutri-modal-img').src = item.image;
    
    document.getElementById('nm-kcal').textContent = item.nutrition.kcal;
    document.getElementById('nm-prot').textContent = item.nutrition.protein;
    document.getElementById('nm-carb').textContent = item.nutrition.carbs;
    document.getElementById('nm-fat').textContent = item.nutrition.fat;

    // Show Modal
    const modal = document.getElementById('nutrition-modal');
    const overlay = document.getElementById('nutrition-overlay');
    
    overlay.classList.add('active');
    modal.classList.add('nutrition-active');
}

function closeNutritionModal() {
    const modal = document.getElementById('nutrition-modal');
    const overlay = document.getElementById('nutrition-overlay');
    
    modal.classList.remove('nutrition-active');
    overlay.classList.remove('active');
}

function updateNutritionAnalysis() {
    let stats = { kcal: 0, protein: 0, carbs: 0, fat: 0 };
    
    cart.forEach(item => {
        if(item.nutrition) {
            stats.kcal += item.nutrition.kcal * item.qty;
            stats.protein += parseFloat(item.nutrition.protein) * item.qty;
            stats.carbs += parseFloat(item.nutrition.carbs) * item.qty;
            stats.fat += parseFloat(item.nutrition.fat) * item.qty;
        }
    });

    // Check if we need to insert the nutrition container (only once)
    const cartFooter = document.querySelector('.cart-footer');
    let nutritionUI = document.getElementById('nutrition-analyser');
    
    if(!nutritionUI) {
        nutritionUI = document.createElement('div');
        nutritionUI.id = 'nutrition-analyser';
        nutritionUI.className = 'nutrition-panel';
        nutritionUI.innerHTML = `
            <h4>📊 Nutritional Overview</h4>
            <div class="nutri-grid">
                <div class="nutri-item"><span class="n-val" id="n-kcal">0</span><span class="n-label">Kcal</span></div>
                <div class="nutri-item"><span class="n-val" id="n-prot">0g</span><span class="n-label">Protein</span></div>
                <div class="nutri-item"><span class="n-val" id="n-carb">0g</span><span class="n-label">Carbs</span></div>
                <div class="nutri-item"><span class="n-val" id="n-fat">0g</span><span class="n-label">Fats</span></div>
            </div>
        `;
        // Insert before the footer buttons
        cartFooter.insertBefore(nutritionUI, cartFooter.firstChild);
    }

    document.getElementById('n-kcal').textContent = stats.kcal;
    document.getElementById('n-prot').textContent = Math.round(stats.protein) + 'g';
    document.getElementById('n-carb').textContent = Math.round(stats.carbs) + 'g';
    document.getElementById('n-fat').textContent = Math.round(stats.fat) + 'g';
}

// --- Chatbot Logic ---
let isChatOpen = false;

function toggleChat() {
    const widget = document.getElementById('chatbot-widget');
    const fab = document.getElementById('chat-fab');
    
    if(isChatOpen) {
        widget.classList.remove('chat-open');
        gsap.to(fab, { scale: 1, duration: 0.3 });
    } else {
        widget.classList.add('chat-open');
        gsap.to(fab, { scale: 0, duration: 0.3 });
    }
    isChatOpen = !isChatOpen;
}

function handleChatInput(e) {
    if(e.key === 'Enter') sendChatMessage();
}

function sendChatMessage() {
    const input = document.getElementById('chat-input');
    const msg = input.value.trim();
    if(!msg) return;

    // Add User Message
    addMessage(msg, 'user');
    input.value = '';

    // Simulate Bot Delay
    setTimeout(() => {
        const reply = getBotResponse(msg);
        addMessage(reply, 'bot');
    }, 600);
}

function addMessage(text, sender) {
    const body = document.getElementById('chat-body');
    const div = document.createElement('div');
    div.className = `chat-msg ${sender}`;
    div.innerText = text;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
}

function getBotResponse(input) {
    const lower = input.toLowerCase();
    
    // Simple Keywords Matching
    if(lower.includes('hello') || lower.includes('hi')) return "Hello gourmet lover! How can I help you decide today? 🥘";
    if(lower.includes('spicy')) {
        const spicyItems = menuItems.filter(i => i.desc.toLowerCase().includes('spicy') || i.name.includes('Chili') || i.name.includes('Masala'));
        const names = spicyItems.map(i => i.name).slice(0,3).join(', ');
        return `Looking for some heat? 🔥 Try our ${names}.`;
    }
    if(lower.includes('sweet') || lower.includes('dessert')) return "For your sweet tooth, I highly recommend our Gulab Jamun or Molten Lava Cake! 🍫";
    if(lower.includes('vegan') || lower.includes('veg')) return "We have delicious Veg options! Try the Paneer Butter Masala or Truffle Pakora. 🥦";
    if(lower.includes('recommend') || lower.includes('best')) return "Our Chef's Special today is the Butter Chicken and Mutton Curry. Simply irresistible! 👨‍🍳";
    if(lower.includes('price') || lower.includes('cost')) return "Our dishes range from ₹40 to ₹550. Great value for premium taste!";
    
    return "I'm still learning the menu! Try asking about 'spicy food', 'desserts', or just ask for a 'recommendation'. 😊";
}


let isCartOpen = false;

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    const overlay = document.getElementById('overlay');

    if(isCartOpen) {
        gsap.to(modal, { x: '100%', duration: 0.4, ease: 'power2.in' });
        overlay.classList.remove('active');
        isCartOpen = false;
    } else {
        overlay.classList.add('active');
        gsap.to(modal, { x: '0%', duration: 0.5, ease: 'power3.out' });
        isCartOpen = true;
    }
}

function checkout() {
    if(cart.length === 0) {
        alert("Your cart is empty! Add some delicious items first.");
        return;
    }
    // Save to local storage (optional backup)
    localStorage.setItem('cart', JSON.stringify(cart));
    const total = document.getElementById('total').textContent.replace('₹', '');
    localStorage.setItem('cartTotal', total);
    
    // Animate Body out
    gsap.to('body', { opacity: 0, duration: 0.5, onComplete: () => {
        // Pass total in URL so checkout.html can read it
        window.location.href = `checkout.html?total=${total}`;
    }});
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    initBackground();
    renderMenu();
    updateCartUI();

    // GSAP Hero Animation
    gsap.to('.hero-title', { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" });
    gsap.to('.hero-subtitle', { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: "power3.out" });
    gsap.from('.search-container', { width: '50px', opacity:0, duration: 1, delay: 1.2, ease: "bounce.out" });
});
