// ── Products List ──
// You can edit this array to change titles, prices, tags, or photos of the bouquets
const products = [
  {
    id: 1,
    name: "ბუჩქოვანი ვარდები",
    price: 65,
    tag: "ბესტსელერი",
    img: "https://scontent.fkut1-1.fna.fbcdn.net/v/t51.75761-15/479492974_18061527571941147_5113698789666429090_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFdGLoB7nJWsdZw2NatX4rVanqjXUNzDypqeqNdQ3MPKjWM9N-WaJYxzsWiwXIoJeobwsje4Pb937QYoBffUxSX&_nc_ohc=CgHfye3cgkwQ7kNvwEJMH86&_nc_oc=AdoDPqP-QsxGObR28s-anqePuCqrOPCHVda4hVdCZGspRMgoQxMPTpBBHUUQeItIRVu9R9I0eRgb4hvcYaGtPDdH&_nc_zt=23&_nc_ht=scontent.fkut1-1.fna&_nc_gid=zeku2OWTlOytvr-RySS7-Q&_nc_ss=7b2a8&oh=00_Af4vOfuPcF8EWrghoz6Ntf38ZE4V9wDqmOsqKY9QZyimqw&oe=6A1B6F96"
  },
  {
    id: 2,
    name: "ველური თაიგული",
    price: 45,
    tag: "ველური",
    img: "https://scontent.fkut1-1.fna.fbcdn.net/v/t51.75761-15/464906828_18050660098941147_2177758919750217736_n.jpg?stp=dst-jpegr_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGfEieM0ORiMMw0pRHBgwdL_ydxrJMLZ4L_J3Gskwtngv_VzQh-vJD5RFwuRSrp-UgQ8mWMAQSR8IWNIf5G4yqB&_nc_ohc=iQRzkQyn650Q7kNvwFW-lfy&_nc_oc=Adqe3mE5RPst9TOpQK4JyK0CRSxB1wrffcdP2BVuCQnPGGG-6jvOzKKm7pDHqTYJkO9qjS-FlMc_V5mwIAky75nj&_nc_zt=23&se=-1&_nc_ht=scontent.fkut1-1.fna&_nc_gid=9JpTHzz32RamLA0r18M9EQ&_nc_ss=7b2a8&oh=00_Af7GmhfaZcFyBz-IGmMCO5JZRpTyUt0jXfqKm4CWVtX95Q&oe=6A1B98D4"
  },
  {
    id: 3,
    name: "კლასიკური თაიგული",
    price: 50,
    tag: "კლასიკა",
    img: "https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/447958786_18035961493941147_7072933869909822742_n.jpg?stp=dst-jpegr_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEhr9YVrJIDdEbUNRylF3RRfPI09D-LGbx88jT0P4sZvIrxS8fSSxMKXRvxZcg8wYj9ROeTV5k8L_RwR6lsNSTE&_nc_ohc=G1dWoZ0he1UQ7kNvwE5V9a9&_nc_oc=Adpa3n1vgBfHFkVueNbXq9lTpTFbehU1y_DT0UKZR91BhFREoaV0XpxBdGjp8sThACWaPEo-4Tw4l8AE6BWMhS9q&_nc_zt=23&se=-1&_nc_ht=scontent.fkut1-1.fna&_nc_gid=bOk03p3_VFhenrDw4BciLA&_nc_ss=7b2a8&oh=00_Af5re1A--KKhLGYfk4i8z7aSsz9RODwlDUxFFJQeDqLXIQ&oe=6A1B7AF2"
  },
  {
    id: 4,
    name: "სეზონური კომპოზიცია",
    price: 80,
    tag: "სეზონური",
    img: "https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/482055772_954849570126590_3431705839345277835_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHgcBNcvGFtiJROQYXVF2JEIDV2xv5auVYgNXbG_lq5VlEVXj9Ph7HLLDx8dvAo6zMYevrYGOWq2QC0KwNIhaFG&_nc_ohc=eT3FiuxTQngQ7kNvwEN0sDB&_nc_oc=AdpVAHBlvUg8Gp1bvsiNBaLUUUj3-mFUEgYQh41j_LbNXtpKF8kco74EsLlpNitaEzCSTkE-2TInSTkBkc-TAKNq&_nc_zt=23&_nc_ht=scontent.fkut1-1.fna&_nc_gid=j5mzvM3bbfswyS0QJZDHKA&_nc_ss=7b2a8&oh=00_Af4_Qk1qdAjPYvKOcxpagAlvwg99fdYZ_-G-sXd0EN3BjQ&oe=6A1B6AE1"
  },
  {
    id: 5,
    name: "ფერადი კომპოზიცია",
    price: 50,
    tag: "ფერადი",
    img: "https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/481080124_953492703595610_2639523134252446872_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEpMXnotpGCwGw8rubUYlnooKpcqPEvvFmgqlyo8S-8WUGWCxUOvEyAiHQ2PPa1srOeXyMc7tRuvuufX4sv9wgR&_nc_ohc=5uef26jZCdAQ7kNvwHD6Xzk&_nc_oc=AdqQ7O6O_yEIj_VFH5N-jD9uyFwCONr58Fo-BcKM5BBwdk04T-nSKFLY45G1eomoY6zjZVPy87TxrkyK-yWeFo50&_nc_zt=23&_nc_ht=scontent.fkut1-1.fna&_nc_gid=iPdsqOeRtzH0U2ru-2TFGw&_nc_ss=7b2a8&oh=00_Af5hnuomCTkG8650uF9wrjaYmPf1nwGKmesp72hJzVu95g&oe=6A1B68B8"
  }
];

// ── Single Stems for Custom Bouquet Builder ──
// These are single flower sticks that customers can select and assemble stem-by-stem
const singleStems = [
  {
    id: 101,
    name: "წითელი ვარდი",
    price: 6,
    tag: "ყვავილი",
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&q=80"
  },
  {
    id: 102,
    name: "თეთრი ვარდი",
    price: 6,
    tag: "ყვავილი",
    img: "https://images.unsplash.com/photo-1533616688419-b7a585564566?w=500&q=80"
  },
  {
    id: 103,
    name: "ბუჩქოვანი ვარდი (ყვითელი)",
    price: 12,
    tag: "ბუჩქოვანი",
    img: "https://images.unsplash.com/photo-1559734899-7f30dfad37b7?w=500&q=80"
  },
  {
    id: 104,
    name: "ჰოლანდიური ტიტა (ვარდისფერი)",
    price: 8,
    tag: "სეზონური",
    img: "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=500&q=80"
  },
  {
    id: 105,
    name: "პეონი (სამეფო)",
    price: 18,
    tag: "პრემიუმი",
    img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=500&q=80"
  },
  {
    id: 106,
    name: "გიფსოფილა (თეთრი)",
    price: 10,
    tag: "დეკორი",
    img: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=500&q=80"
  },
  {
    id: 107,
    name: "ევკალიპტის ტოტი",
    price: 6,
    tag: "მწვანე",
    img: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?w=500&q=80"
  },
  {
    id: 108,
    name: "დეკორატიული მწვანე ფოთლები",
    price: 4,
    tag: "მწვანე",
    img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=500&q=80"
  },
  {
    id: 109,
    name: "პრემიუმ შესაფუთი ქაღალდი და ლენტი",
    price: 15,
    tag: "აქსესუარი",
    img: "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=500&q=80"
  }
];

// ── Other Flowers & Arrangements (Blank/Custom Catalog Template) ──
// Edit this array below to add new flower arrangements, boxes, or baskets.
// We've pre-populated 4 gorgeous slots that you can easily edit or change.
const otherFlowers = [
  {
    id: 201,
    name: "საგაზაფხულო ყვავილების ყუთი",
    price: 75,
    tag: "სეზონური",
    img: "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=500&q=80"
  },
  {
    id: 202,
    name: "პრემიუმ ვარდების კალათა",
    price: 120,
    tag: "პრემიუმი",
    img: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=500&q=80"
  },
  {
    id: 203,
    name: "გიფსოფილების ნაზი თაიგული",
    price: 60,
    tag: "ჰიტი",
    img: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=500&q=80"
  },
  {
    id: 204,
    name: "კოპწია ყვავილების ყუთი",
    price: 90,
    tag: "დეკორი",
    img: "https://images.unsplash.com/photo-1587334206506-696668478d1f?w=500&q=80"
  }
];

// ── Helper to find an item across all product database arrays ──
function getItemDetails(id) {
  return products.find(p => p.id === id) || 
         singleStems.find(s => s.id === id) || 
         otherFlowers.find(o => o.id === id);
}

// ── Shopping Cart State ──
let cart = JSON.parse(localStorage.getItem('flowersCart')) || [];

// ── DOM Elements ──
const collectionsGrid = document.getElementById('collectionsGrid');
const cartBtn = document.getElementById('cartBtn');
const cartCloseBtn = document.getElementById('cartCloseBtn');
const cartBackdrop = document.getElementById('cartBackdrop');
const cartDrawer = document.getElementById('cartDrawer');
const cartItemsList = document.getElementById('cartItemsList');
const cartTotalPrice = document.getElementById('cartTotalPrice');
const cartDrawerFooter = document.getElementById('cartDrawerFooter');
const cartBadge = document.getElementById('cartBadge');
const cartCheckoutBtn = document.getElementById('cartCheckoutBtn');

// Modals
const checkoutModal = document.getElementById('checkoutModal');
const checkoutCloseBtn = document.getElementById('checkoutCloseBtn');
const checkoutForm = document.getElementById('checkoutForm');
const successModal = document.getElementById('successModal');
const successCloseBtn = document.getElementById('successCloseBtn');
const successCloseBtnX = document.getElementById('successCloseBtnX');
const successWhatsappBtn = document.getElementById('successWhatsappBtn');
const orderSummaryBox = document.getElementById('orderSummaryBox');

// ── Render Single Stems Grid (custom.html) ──
function renderSingleStems() {
  const stemsGrid = document.getElementById('stemsGrid');
  if (!stemsGrid) return;
  stemsGrid.innerHTML = '';

  singleStems.forEach((stem, index) => {
    const card = document.createElement('div');
    card.className = `stem-card reveal reveal-delay-${index % 3}`;
    
    card.innerHTML = `
      <div class="stem-img-container">
        <img class="stem-img" src="${stem.img}" alt="${stem.name}" />
        <span class="stem-tag">${stem.tag}</span>
      </div>
      <div class="stem-details">
        <h3 class="stem-name">${stem.name}</h3>
        <p class="stem-price">₾ ${stem.price} / ყუნწი</p>
        <div class="stem-action-row">
          <div class="stem-qty-selector">
            <button class="stem-qty-btn stem-qty-minus">—</button>
            <span class="stem-qty-val" id="qty-val-${stem.id}">1</span>
            <button class="stem-qty-btn stem-qty-plus">+</button>
          </div>
          <button class="stem-btn-add" data-id="${stem.id}">კალათაში დამატება</button>
        </div>
      </div>
    `;

    // Local quantity buttons listeners
    const qtyValEl = card.querySelector(`#qty-val-${stem.id}`);
    let selectedQty = 1;

    card.querySelector('.stem-qty-minus').addEventListener('click', (e) => {
      e.preventDefault();
      if (selectedQty > 1) {
        selectedQty--;
        qtyValEl.textContent = selectedQty;
      }
    });

    card.querySelector('.stem-qty-plus').addEventListener('click', (e) => {
      e.preventDefault();
      selectedQty++;
      qtyValEl.textContent = selectedQty;
    });

    // Add to Cart with selected quantity
    card.querySelector('.stem-btn-add').addEventListener('click', (e) => {
      e.preventDefault();
      addToCart(stem.id, selectedQty);
      // Reset card selection quantity to 1 after addition
      selectedQty = 1;
      qtyValEl.textContent = 1;
    });

    stemsGrid.appendChild(card);
  });

  // Re-observe dynamic entries for scroll reveals
  if (typeof obs !== 'undefined') {
    document.querySelectorAll('.stems-grid .reveal').forEach(el => obs.observe(el));
  }
}

// ── Render Other Flowers Catalog Grid (custom.html) ──
function renderOtherFlowers() {
  const otherFlowersGrid = document.getElementById('otherFlowersGrid');
  if (!otherFlowersGrid) return;
  otherFlowersGrid.innerHTML = '';

  otherFlowers.forEach((flower, index) => {
    const card = document.createElement('div');
    card.className = `card reveal reveal-delay-${index % 3}`;

    card.innerHTML = `
      <div class="card-img-container">
        <img class="card-img" src="${flower.img}" alt="${flower.name}" />
        <span class="card-tag">${flower.tag}</span>
      </div>
      <div class="card-details">
        <h3 class="card-name">${flower.name}</h3>
        <p class="card-price">₾ ${flower.price}</p>
        <button class="card-btn-add" data-id="${flower.id}">კალათაში დამატება</button>
      </div>
    `;

    // Add to Cart
    card.querySelector('.card-btn-add').addEventListener('click', (e) => {
      e.preventDefault();
      addToCart(flower.id, 1);
    });

    otherFlowersGrid.appendChild(card);
  });

  // Re-observe dynamic entries for scroll reveals
  if (typeof obs !== 'undefined') {
    document.querySelectorAll('.other-flowers-grid .reveal').forEach(el => obs.observe(el));
  }
}

// ── Render Collections Grid ──
function renderCollections() {
  if (!collectionsGrid) return;
  collectionsGrid.innerHTML = '';
  
  products.forEach((product, index) => {
    const card = document.createElement('div');
    card.className = `card reveal reveal-delay-${index % 3}`;
    
    card.innerHTML = `
      <div class="card-img-container">
        <img class="card-img" src="${product.img}" alt="${product.name}" />
        <span class="card-tag">${product.tag}</span>
      </div>
      <div class="card-details">
        <h3 class="card-name">${product.name}</h3>
        <p class="card-price">₾ ${product.price}</p>
        <button class="card-btn-add" data-id="${product.id}">კალათაში დამატება</button>
      </div>
    `;
    
    // Add to Cart Event Listener
    card.querySelector('.card-btn-add').addEventListener('click', (e) => {
      e.preventDefault();
      const id = parseInt(e.target.getAttribute('data-id'));
      addToCart(id);
    });
    
    collectionsGrid.appendChild(card);
  });

  // Re-observe dynamic entries for scroll reveals
  if (typeof obs !== 'undefined') {
    document.querySelectorAll('.collections-grid .reveal').forEach(el => obs.observe(el));
  }
}

// ── Cart Operations ──
function addToCart(productId, qty = 1) {
  const existingItem = cart.find(item => item.productId === productId);
  if (existingItem) {
    existingItem.quantity += qty;
  } else {
    cart.push({ productId, quantity: qty });
  }
  updateCart();
  toggleCart(true); // Open cart drawer on add
}

function updateQuantity(productId, delta) {
  const item = cart.find(item => item.productId === productId);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      cart = cart.filter(i => i.productId !== productId);
    }
  }
  updateCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.productId !== productId);
  updateCart();
}

function calculateTotal() {
  return cart.reduce((sum, item) => {
    const product = getItemDetails(item.productId);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);
}

function updateCart() {
  // Save to localStorage
  localStorage.setItem('flowersCart', JSON.stringify(cart));
  
  // Render Badge
  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartBadge.textContent = totalItemsCount;
  
  // Render Cart List
  if (cart.length === 0) {
    cartItemsList.innerHTML = '<div class="cart-empty-message">კალათა ცარიელია</div>';
    cartDrawerFooter.style.display = 'none';
  } else {
    cartItemsList.innerHTML = '';
    cartDrawerFooter.style.display = 'block';
    
    cart.forEach(item => {
      const product = getItemDetails(item.productId);
      if (!product) return;
      
      const itemRow = document.createElement('div');
      itemRow.className = 'cart-item';
      itemRow.innerHTML = `
        <img src="${product.img}" alt="${product.name}" class="cart-item-img" />
        <div class="cart-item-details">
          <h4 class="cart-item-name">${product.name}</h4>
          <span class="cart-item-price">₾ ${product.price}</span>
          <div class="cart-item-quantity">
            <button class="qty-btn qty-minus" data-id="${product.id}">-</button>
            <span class="qty-val">${item.quantity}</span>
            <button class="qty-btn qty-plus" data-id="${product.id}">+</button>
          </div>
        </div>
        <button class="cart-item-remove" data-id="${product.id}">✕</button>
      `;
      
      // Quantity Buttons Listeners
      itemRow.querySelector('.qty-minus').addEventListener('click', () => updateQuantity(product.id, -1));
      itemRow.querySelector('.qty-plus').addEventListener('click', () => updateQuantity(product.id, 1));
      // Remove Button Listener
      itemRow.querySelector('.cart-item-remove').addEventListener('click', () => removeFromCart(product.id));
      
      cartItemsList.appendChild(itemRow);
    });
    
    // Render Total Price
    cartTotalPrice.textContent = `₾ ${calculateTotal()}`;
  }
}

// ── Toggle Functions ──
function toggleCart(isOpen) {
  if (isOpen) {
    cartDrawer.classList.add('open');
    cartBackdrop.classList.add('visible');
  } else {
    cartDrawer.classList.remove('open');
    cartBackdrop.classList.remove('visible');
  }
}

function toggleModal(modal, isOpen) {
  if (isOpen) {
    modal.classList.add('open');
  } else {
    modal.classList.remove('open');
  }
}

// ── Checkout Flow ──
function handleCheckoutSubmit(e) {
  e.preventDefault();
  
  const clientName = document.getElementById('clientName').value.trim();
  const clientPhone = document.getElementById('clientPhone').value.trim();
  const deliveryAddress = document.getElementById('deliveryAddress').value.trim();
  const deliveryDate = document.getElementById('deliveryDate').value;
  const deliveryTime = document.getElementById('deliveryTime').value;
  const cardText = document.getElementById('cardText').value.trim();
  const paymentMethodVal = document.getElementById('paymentMethod').value;
  
  const paymentText = paymentMethodVal === 'bank_transfer' ? 'საბანკო გადარიცხვა' : 'ნაღდი/ბარათი კურიერთან';
  const total = calculateTotal();
  
  // Detect if order has custom stems for WhatsApp special instructions
  const hasCustomStems = cart.some(item => singleStems.some(s => s.id === item.productId));
  
  // 1. Build dynamic receipt inside success modal
  let summaryHtml = `
    <div class="order-summary-title">${hasCustomStems ? 'შეკვეთილი პროდუქტები:' : 'შეკვეთილი თაიგულები:'}</div>
  `;
  
  let whatsappText = `გამარჯობა, მსურს ყვავილების შეკვეთა:\n\n`;
  whatsappText += `🌸 *შეკვეთა:*\n`;
  
  cart.forEach(item => {
    const product = getItemDetails(item.productId);
    if (product) {
      summaryHtml += `
        <div class="order-summary-item">
          <span>${product.name} (x${item.quantity})</span>
          <span>₾ ${product.price * item.quantity}</span>
        </div>
      `;
      whatsappText += `- ${product.name} x ${item.quantity} (₾ ${product.price * item.quantity})\n`;
    }
  });
  
  summaryHtml += `
    <div class="order-summary-total">
      <span>სულ ჯამი:</span>
      <span>₾ ${total}</span>
    </div>
  `;
  whatsappText += `\n💵 *სულ ჯამი:* ₾ ${total}\n\n`;
  
  whatsappText += `👤 *კლიენტის ინფორმაცია:*\n`;
  whatsappText += `სახელი: ${clientName}\n`;
  whatsappText += `ტელეფონი: ${clientPhone}\n`;
  whatsappText += `მისამართი: ${deliveryAddress}\n`;
  whatsappText += `მიტანის თარიღი: ${deliveryDate} / ${deliveryTime}\n`;
  
  if (cardText) {
    whatsappText += `✉️ *მისალოცი ბარათის ტექსტი:*\n"${cardText}"\n`;
  }
  whatsappText += `💳 *გადახდის მეთოდი:* ${paymentText}\n`;
  
  if (hasCustomStems) {
    whatsappText += `\n⚠️ *მნიშვნელოვანი შენიშვნა ფლორისტს:*\nგთხოვთ, ეს ცალკეული ყვავილების ღეროები ააწყოთ ერთ თაიგულად და მიწოდებამდე გამომიგზავნოთ ფოტო WhatsApp-ში! 📸\n`;
  }
  
  orderSummaryBox.innerHTML = summaryHtml;
  
  // 2. Set WhatsApp Link
  const whatsappUrl = `https://wa.me/995577779326?text=${encodeURIComponent(whatsappText)}`;
  successWhatsappBtn.onclick = () => window.open(whatsappUrl, '_blank');
  
  // 3. Clear Cart & Reset Form
  cart = [];
  updateCart();
  checkoutForm.reset();
  document.getElementById('clientPhone').value = "+995 ";
  
  // 4. Toggle Modals
  toggleModal(checkoutModal, false);
  toggleModal(successModal, true);
}

// ── Event Listeners ──
if (cartBtn) cartBtn.addEventListener('click', () => toggleCart(true));
if (cartCloseBtn) cartCloseBtn.addEventListener('click', () => toggleCart(false));
if (cartBackdrop) cartBackdrop.addEventListener('click', () => toggleCart(false));

if (cartCheckoutBtn) {
  cartCheckoutBtn.addEventListener('click', () => {
    toggleCart(false);
    toggleModal(checkoutModal, true);
  });
}

if (checkoutCloseBtn) checkoutCloseBtn.addEventListener('click', () => toggleModal(checkoutModal, false));
if (checkoutForm) checkoutForm.addEventListener('submit', handleCheckoutSubmit);

if (successCloseBtn) successCloseBtn.addEventListener('click', () => toggleModal(successModal, false));
if (successCloseBtnX) successCloseBtnX.addEventListener('click', () => toggleModal(successModal, false));

// ── Nav scroll ──
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// ── Scroll reveal ──
const revealEls = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => obs.observe(el));

// ── Initialization ──
document.addEventListener('DOMContentLoaded', () => {
  renderCollections();
  renderSingleStems();
  renderOtherFlowers();
  updateCart();
  
  // Set default min date to today for checkout
  const dateInput = document.getElementById('deliveryDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }
});
