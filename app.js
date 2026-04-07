const catalog = {
  seafood: {
    title: "Seafood",
    subtitle: "Chef-selected seafood essentials",
    description: "Fresh and frozen fish, shellfish, and premium proteins for modern kitchens.",
    products: [
      {
        name:"Atlantic Salmon Portions",
        brand:"PACKER",
        item:"5400210",
        price:128.50,
        pack:"1 x 10lb",
        status:"In Stock",
        cls:"in-stock",
        desc:"Premium salmon portions prepared for consistent B2B kitchen ordering and clear pack-size visibility.",
        image:"https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&w=900&q=80",
        tags:["seafood","salmon","fish","protein"]
      },
      {
        name:"U-10 Dry Pack Scallops",
        brand:"FISHERKING SEAFOODS",
        item:"5482104",
        price:156.00,
        pack:"2 x 5lb",
        status:"Low Stock",
        cls:"low-stock",
        desc:"Large dry-pack scallops with a low-stock alert to help chefs plan substitutions early.",
        image:"https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=900&q=80",
        tags:["seafood","scallops","shellfish"]
      },
      {
        name:"Tail-Off IQF Shrimp 16/20",
        brand:"AMERICANPR",
        item:"5330205",
        price:89.75,
        pack:"5 x 2lb",
        status:"In Stock",
        cls:"in-stock",
        desc:"Consistent frozen shrimp with quick add-to-cart ordering for repeat buyers.",
        image:"https://images.unsplash.com/photo-1565680018434-b513d1e5fd47?auto=format&fit=crop&w=900&q=80",
        tags:["seafood","shrimp","shellfish"]
      },
      {
        name:"Spanish Octopus 4/6lb",
        brand:"OCTOFINO",
        item:"5509007",
        price:149.00,
        pack:"1 x 32lb",
        status:"Request Quote",
        cls:"quote-only",
        desc:"Quote-required premium seafood item with a clearer workflow than unclear market-price buttons.",
        image:"https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=900&q=80",
        tags:["seafood","octopus","premium"]
      },
      {
        name:"Cape Hake Fillet IQF",
        brand:"PANAPESCA",
        item:"5447014",
        price:64.10,
        pack:"5 x 2lb",
        status:"Restocking Soon",
        cls:"restock",
        desc:"Restocking indicator helps buyers understand availability before reaching cart or checkout.",
        image:"https://images.unsplash.com/photo-1510130387422-82bed34b37e9?auto=format&fit=crop&w=900&q=80",
        tags:["seafood","fish","fillet"]
      },
      {
        name:"Lobster Claw & Knuckle Meat",
        brand:"FISHERKING SEAFOODS",
        item:"5474006",
        price:143.79,
        pack:"6 x 2lb",
        status:"In Stock",
        cls:"in-stock",
        desc:"High-value seafood with clear price, pack size, and direct cart interaction.",
        image:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
        tags:["seafood","lobster","premium"]
      }
    ]
  },

  produce: {
    title: "Produce",
    subtitle: "Seasonal produce and chef staples",
    description: "Fresh greens, herbs, citrus, mushrooms, and specialty vegetables for service-ready prep.",
    products: [
      {
        name:"Microgreens Assortment",
        brand:"PACKER",
        item:"4900538",
        price:39.50,
        pack:"1 x 12ct",
        status:"Low Stock",
        cls:"low-stock",
        desc:"Microgreens with low-stock messaging for faster menu planning and substitution decisions.",
        image:"https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80",
        tags:["produce","greens","microgreens"]
      },
      {
        name:"Fresh Black Winter Truffles",
        brand:"URBANI",
        item:"7756405",
        price:245.00,
        pack:"1 x 4oz",
        status:"Request Quote",
        cls:"quote-only",
        desc:"Premium produce item where quote flow is intentionally separated from normal add-to-cart logic.",
        image:"https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&w=900&q=80",
        tags:["produce","truffles","premium"]
      },
      {
        name:"Blood Oranges",
        brand:"PACKER",
        item:"4900111",
        price:41.50,
        pack:"1 x 54ct",
        status:"In Stock",
        cls:"in-stock",
        desc:"Citrus product displayed with cleaner card structure and pack-size clarity.",
        image:"https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=900&q=80",
        tags:["produce","fruit","citrus"]
      },
      {
        name:"Asian Pears",
        brand:"PACKER",
        item:"4900221",
        price:68.00,
        pack:"1 x 24ct",
        status:"In Stock",
        cls:"in-stock",
        desc:"Fresh produce example showing improved item differentiation and buyer-focused catalog presentation.",
        image:"https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=900&q=80",
        tags:["produce","fruit","pears"]
      },
      {
        name:"Mushroom Mix",
        brand:"PACKER",
        item:"4834000",
        price:58.20,
        pack:"1 x 5lb",
        status:"Low Stock",
        cls:"low-stock",
        desc:"Mixed mushrooms with clear alert state and easier add-to-cart experience.",
        image:"https://images.unsplash.com/photo-1504545102780-26774c1bb073?auto=format&fit=crop&w=900&q=80",
        tags:["produce","mushrooms"]
      },
      {
        name:"Limes",
        brand:"PACKER",
        item:"4900144",
        price:81.50,
        pack:"1 x 175ct",
        status:"In Stock",
        cls:"in-stock",
        desc:"Bulk produce item displayed in a cleaner B2B card format.",
        image:"https://images.unsplash.com/photo-1582284540020-8acbe03f4924?auto=format&fit=crop&w=900&q=80",
        tags:["produce","fruit","citrus"]
      }
    ]
  },

  frozen: {
    title: "Frozen",
    subtitle: "Fast-moving frozen inventory",
    description: "Seafood, vegetables, desserts, bakery, and ready-to-bake products with clear status messaging.",
    products: [
      {
        name:"Artisan Brioche Rolls",
        brand:"MARTIN'S FAMOUS",
        item:"5872600",
        price:28.25,
        pack:"6 x 8ct",
        status:"In Stock",
        cls:"in-stock",
        desc:"Bakery item designed to show catalog consistency and quick repeat-order interactions.",
        image:"https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=900&q=80",
        tags:["frozen","bakery","bread"]
      },
      {
        name:"Chocolate Gelato",
        brand:"LONGFORD'S",
        item:"8920110",
        price:61.38,
        pack:"1 x 5qt",
        status:"In Stock",
        cls:"in-stock",
        desc:"Frozen dessert with clear pack-size visibility and direct add-to-cart flow.",
        image:"https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80",
        tags:["frozen","dessert","gelato"]
      },
      {
        name:"Tater Tot Puffs",
        brand:"LAMBWESTON",
        item:"8712007",
        price:89.62,
        pack:"6 x 5lb",
        status:"Low Stock",
        cls:"low-stock",
        desc:"Bulk frozen side with low-stock indication.",
        image:"https://images.unsplash.com/photo-1639744092480-7d5d6e27bb1e?auto=format&fit=crop&w=900&q=80",
        tags:["frozen","sides","potato"]
      },
      {
        name:"Spinach & Feta Danishes",
        brand:"DUFOUR GOURMET",
        item:"6078004",
        price:128.84,
        pack:"1 x 112ct",
        status:"Restocking Soon",
        cls:"restock",
        desc:"Restocking state improves visibility before ordering decisions are made.",
        image:"https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
        tags:["frozen","bakery","pastry"]
      },
      {
        name:"Frozen Mirepoix Mix",
        brand:"ARTICGARDE",
        item:"4555004",
        price:55.27,
        pack:"6 x 4.4lb",
        status:"In Stock",
        cls:"in-stock",
        desc:"Back-of-house prep item displayed in a cleaner product layout.",
        image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
        tags:["frozen","vegetables","prep"]
      },
      {
        name:"Diced Mango",
        brand:"PACKER",
        item:"4555003",
        price:38.42,
        pack:"2 x 5lb",
        status:"Request Quote",
        cls:"quote-only",
        desc:"Shows how quote-required frozen products can be handled more clearly.",
        image:"https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=900&q=80",
        tags:["frozen","fruit","mango"]
      }
    ]
  },

  cheese: {
    title: "Cheese & Charcuterie",
    subtitle: "Premium cheese and board-ready selections",
    description: "Imported cheeses, cured meats, soft cheeses, and chef-selected charcuterie essentials.",
    products: [
      {
        name:"Parmigiano Reggiano Wheel",
        brand:"ITALIAN IMPORTS",
        item:"2100441",
        price:299.00,
        pack:"1 x 72lb",
        status:"In Stock",
        cls:"in-stock",
        desc:"Large-format imported cheese with account-oriented B2B visibility.",
        image:"https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=900&q=80",
        tags:["cheese","imported","parmigiano"]
      },
      {
        name:"Fresh Burrata",
        brand:"BELGIOIOSO",
        item:"2101098",
        price:42.75,
        pack:"8 x 2ct",
        status:"Low Stock",
        cls:"low-stock",
        desc:"Premium fresh cheese with clearer availability guidance.",
        image:"https://images.unsplash.com/photo-1626201850125-a96f2600eeae?auto=format&fit=crop&w=900&q=80",
        tags:["cheese","fresh","burrata"]
      },
      {
        name:"Prosciutto di Parma",
        brand:"PARMA RESERVE",
        item:"2103033",
        price:189.50,
        pack:"1 x 14lb",
        status:"In Stock",
        cls:"in-stock",
        desc:"Charcuterie item displayed with better product hierarchy and clean actions.",
        image:"https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
        tags:["charcuterie","prosciutto","imported"]
      },
      {
        name:"Triple Cream Brie",
        brand:"FROMAGERIE",
        item:"2102201",
        price:58.20,
        pack:"2 x 3kg",
        status:"In Stock",
        cls:"in-stock",
        desc:"Imported cheese showcased in a premium product-detail flow.",
        image:"https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=900&q=80",
        tags:["cheese","brie","soft cheese"]
      },
      {
        name:"Spanish Manchego",
        brand:"IBERIA FOODS",
        item:"2105112",
        price:74.40,
        pack:"1 x 12lb",
        status:"Restocking Soon",
        cls:"restock",
        desc:"Restocking alerts reduce buyer uncertainty during ordering.",
        image:"https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=900&q=80",
        tags:["cheese","manchego","imported"]
      },
      {
        name:"Soppressata Piccante",
        brand:"SALUMI",
        item:"2106007",
        price:67.90,
        pack:"12 x 8oz",
        status:"In Stock",
        cls:"in-stock",
        desc:"Better organization for premium cheese and cured meat browsing.",
        image:"https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80",
        tags:["charcuterie","salumi","spicy"]
      }
    ]
  },

  meat: {
    title: "Meat & Poultry",
    subtitle: "Center-of-plate proteins",
    description: "Premium beef, pork, lamb, and poultry selections for chef-driven kitchens.",
    products: [
      {
        name:"Chef Ready Tenderloin",
        brand:"COMPART",
        item:"1816666",
        price:189.75,
        pack:"2 x 5lb",
        status:"Restocking Soon",
        cls:"restock",
        desc:"High-value protein with clear status indicators and simplified item actions.",
        image:"https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=900&q=80",
        tags:["meat","beef","tenderloin"]
      },
      {
        name:"Ground Lamb",
        brand:"PACKER",
        item:"1740201",
        price:95.20,
        pack:"2 x 5lb",
        status:"In Stock",
        cls:"in-stock",
        desc:"Protein item displayed in a cleaner, more professional B2B card layout.",
        image:"https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=900&q=80",
        tags:["meat","lamb","ground"]
      },
      {
        name:"Bone-In Short Rib",
        brand:"PACKER",
        item:"1740321",
        price:144.00,
        pack:"2 x 5lb",
        status:"In Stock",
        cls:"in-stock",
        desc:"Bulk protein with clear pack-size and direct quantity adjustment.",
        image:"https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
        tags:["meat","beef","short rib"]
      },
      {
        name:"Air-Chilled Chicken Supreme",
        brand:"FARMHOUSE",
        item:"1740880",
        price:72.10,
        pack:"4 x 5lb",
        status:"Low Stock",
        cls:"low-stock",
        desc:"Low stock state helps buyers act faster before checkout friction happens.",
        image:"https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=900&q=80",
        tags:["poultry","chicken","protein"]
      },
      {
        name:"Pork Cheeks",
        brand:"COMPART",
        item:"1816700",
        price:47.30,
        pack:"2 x 5lb",
        status:"In Stock",
        cls:"in-stock",
        desc:"Cleaner product discovery for specialty meat products.",
        image:"https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&w=900&q=80",
        tags:["meat","pork","specialty"]
      },
      {
        name:"Duck Breast",
        brand:"ROULAND",
        item:"1740991",
        price:112.60,
        pack:"1 x 12ct",
        status:"Request Quote",
        cls:"quote-only",
        desc:"Quote-required premium protein with clearer buyer guidance.",
        image:"https://images.unsplash.com/photo-1518492104633-130d0cc84637?auto=format&fit=crop&w=900&q=80",
        tags:["poultry","duck","premium"]
      }
    ]
  },

  pantry: {
    title: "Pantry",
    subtitle: "Back-of-house essentials and imported staples",
    description: "Oils, vinegars, canned goods, dry goods, grains, and specialty pantry products.",
    products: [
      {
        name:"Extra Virgin Olive Oil",
        brand:"MEDITERRA",
        item:"3300400",
        price:84.50,
        pack:"4 x 3L",
        status:"In Stock",
        cls:"in-stock",
        desc:"Pantry staple displayed with cleaner pricing and pack-size structure.",
        image:"https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=900&q=80",
        tags:["pantry","oil","imported"]
      },
      {
        name:"Aged Balsamic Vinegar",
        brand:"MODENA",
        item:"3300501",
        price:63.20,
        pack:"6 x 500ml",
        status:"In Stock",
        cls:"in-stock",
        desc:"Imported pantry item designed to feel more premium and professional.",
        image:"https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&w=900&q=80",
        tags:["pantry","vinegar","imported"]
      },
      {
        name:"Ruby Tuna in Water",
        brand:"RUBY TUNA",
        item:"5539000",
        price:118.61,
        pack:"6 x 66oz",
        status:"Low Stock",
        cls:"low-stock",
        desc:"Pantry protein with clear status chips and faster ordering interactions.",
        image:"https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80",
        tags:["pantry","tuna","protein"]
      },
      {
        name:"San Marzano Tomatoes",
        brand:"ITALIA",
        item:"3302010",
        price:42.00,
        pack:"6 x 102oz",
        status:"In Stock",
        cls:"in-stock",
        desc:"High-use kitchen staple in a cleaner card layout.",
        image:"https://images.unsplash.com/photo-1592928302636-c83cf1e1c887?auto=format&fit=crop&w=900&q=80",
        tags:["pantry","tomatoes","imported"]
      },
      {
        name:"Arborio Rice",
        brand:"RISERIA",
        item:"3303112",
        price:37.60,
        pack:"4 x 5lb",
        status:"Restocking Soon",
        cls:"restock",
        desc:"Restocking pantry staple with improved visibility earlier in the ordering flow.",
        image:"https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=900&q=80",
        tags:["pantry","rice","grains"]
      },
      {
        name:"Imported Capers",
        brand:"SICILIA",
        item:"3304500",
        price:28.90,
        pack:"12 x 32oz",
        status:"In Stock",
        cls:"in-stock",
        desc:"Imported pantry item with easier add and save flows.",
        image:"https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?auto=format&fit=crop&w=900&q=80",
        tags:["pantry","capers","imported"]
      }
    ]
  }
};

const allProducts = Object.values(catalog).flatMap(category =>
  category.products.map(p => ({ ...p, categoryTitle: category.title }))
);

const suggestedOrderMap = {
  italian_restaurant: ["2101098", "3300400", "3302010", "2100441", "3303112"],
  italian_cafe: ["2101098", "3300400", "3302010", "5872600"],
  italian_catering: ["2100441", "3302010", "3300400", "2103033", "3303112"],
  italian_hotel: ["2101098", "3300400", "3302010", "2100441", "3300501"],
  italian_finedining: ["2101098", "2100441", "3300501", "3300400", "2102201"],

  american_restaurant: ["1740321", "1740880", "8712007", "5872600"],
  american_cafe: ["5872600", "8920110", "4900111"],
  american_catering: ["1740321", "5872600", "8712007", "1740880"],
  american_hotel: ["1740321", "1740880", "8712007", "4900111"],
  american_finedining: ["1816666", "1740321", "4834000", "3303112"],

  asian_restaurant: ["5400210", "5330205", "4900144", "4834000"],
  asian_cafe: ["4555003", "4900144", "4900111"],
  asian_catering: ["5400210", "5482104", "4900538", "4900144"],
  asian_hotel: ["5400210", "5482104", "4834000", "4900144"],
  asian_finedining: ["5400210", "5482104", "4900538", "4834000", "4900144"],

  mediterranean_restaurant: ["3300400", "3300501", "4900144", "2102201"],
  mediterranean_cafe: ["3300400", "3300501", "2102201", "3304500"],
  mediterranean_catering: ["3300400", "3300501", "2103033", "4900144", "3304500"],
  mediterranean_hotel: ["3300400", "3300501", "4900144", "2102201", "3304500"],
  mediterranean_finedining: ["3300400", "3300501", "2100441", "2102201"],

  bakery_restaurant: ["5872600", "6078004", "8920110"],
  bakery_cafe: ["5872600", "8920110", "6078004", "4555003"],
  bakery_catering: ["5872600", "6078004", "8920110", "4900111"],
  bakery_hotel: ["5872600", "6078004", "8920110", "4900111"],
  bakery_finedining: ["8920110", "6078004", "4555003"]
};

const smartPairings = {
  "5400210": ["4900144", "4834000", "3300400"],
  "2101098": ["3302010", "3300400", "3300501"],
  "1740321": ["4834000", "3303112", "4900111"],
  "8920110": ["4555003", "4900111", "5872600"],
  "5482104": ["4900144", "3300400", "4900538"],
  "1740880": ["3302010", "3300400", "4555004"]
};

let currentCategory = "seafood";
let statusFilter = "all";
let currentDetailProduct = null;
let activeDrawerTab = "cart";
let currentSuggestedItems = [];

const cart = JSON.parse(localStorage.getItem("js_cart") || "[]");
const saved = JSON.parse(localStorage.getItem("js_saved") || "[]");
const requisitions = JSON.parse(localStorage.getItem("js_requisitions") || "{}");

function persist() {
  localStorage.setItem("js_cart", JSON.stringify(cart));
  localStorage.setItem("js_saved", JSON.stringify(saved));
  localStorage.setItem("js_requisitions", JSON.stringify(requisitions));
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}

function scrollToCatalog() {
  document.getElementById("catalog").scrollIntoView({ behavior: "smooth" });
}

function scrollToHome() {
  document.getElementById("home").scrollIntoView({ behavior: "smooth" });
}

function getFilteredProducts(categoryKey, query = "") {
  const data = catalog[categoryKey];
  return data.products.filter(p => {
    const matchesQuery = [p.name, p.brand, p.item, ...(p.tags || [])].join(" ").toLowerCase().includes(query.toLowerCase());
    const matchesStatus = statusFilter === "all" ? true : p.status === statusFilter;
    return matchesQuery && matchesStatus;
  });
}

function renderProducts(categoryKey, query = "") {
  const data = catalog[categoryKey];
  const grid = document.getElementById("productGrid");
  const title = document.getElementById("categoryTitle");
  const subtitle = document.getElementById("categorySubtitle");
  const desc = document.getElementById("categoryDescription");
  const count = document.getElementById("categoryCount");
  const sidebar = document.getElementById("sidebarCategory");

  title.textContent = data.title;
  subtitle.textContent = data.subtitle;
  desc.textContent = data.description;
  sidebar.innerHTML = `<span>Category: ${data.title}</span><span>✓</span>`;

  const filtered = getFilteredProducts(categoryKey, query);
  count.textContent = `${filtered.length} products`;

  if (!filtered.length) {
    grid.innerHTML = `<div class="empty-state">No products found in this category for your search or availability filter.</div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => renderProductCard(p)).join("");
}

function renderProductCard(p) {
  return `
    <article class="product">
      <div class="product-image" style="background-image:url('${p.image}')" onclick="openProduct('${escapeHtml(p.item)}')"></div>
      <div class="product-body">
        <h3 onclick="openProduct('${escapeHtml(p.item)}')">${p.name}</h3>
        <small>${p.brand}<br>Item#: ${p.item}</small>
        <div class="case-pill">CASE</div>
        <div class="price-row">
          <div class="price">$${p.price.toFixed(2)}</div>
          <div class="subprice">${p.pack}</div>
        </div>
        <div class="status-row">
          <span class="status ${p.cls}">${p.status}</span>
        </div>
        <div class="buy-row">
          <div class="qty">
            <button onclick="changeQty(this,-1)">−</button>
            <span>1</span>
            <button onclick="changeQty(this,1)">+</button>
          </div>
          <button class="add" onclick="addToCartFromCard('${escapeJs(p.item)}', this)">Add</button>
          <button class="save" onclick="saveFromCard('${escapeJs(p.item)}')">♡</button>
          <button class="req" onclick="addToKitchenListFromCard('${escapeJs(p.item)}')">List</button>
        </div>
      </div>
    </article>
  `;
}

function showCategory(categoryKey, btn) {
  currentCategory = categoryKey;
  statusFilter = "all";
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
  document.getElementById("productDetailSection").style.display = "none";
  renderProducts(currentCategory, document.getElementById("searchInput").value);
  scrollToCatalog();
}

function filterByStatus(status) {
  statusFilter = status;
  renderProducts(currentCategory, document.getElementById("searchInput").value);
}

function changeQty(button, delta) {
  const qtyBox = button.parentElement.querySelector("span");
  let value = parseInt(qtyBox.textContent, 10);
  value += delta;
  if (value < 1) value = 1;
  qtyBox.textContent = value;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeJs(str) {
  return String(str).replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}

function findProductByItem(item) {
  return allProducts.find(p => p.item === item) || null;
}

function addItem(targetArray, product, qty) {
  const existing = targetArray.find(item => item.item === product.item);
  if (existing) {
    existing.qty += qty;
  } else {
    targetArray.push({
      item: product.item,
      name: product.name,
      price: product.price,
      qty,
      pack: product.pack,
      image: product.image,
      categoryTitle: product.categoryTitle
    });
  }
}

function addToCartFromCard(item, btn) {
  const product = findProductByItem(item);
  if (!product) return;
  const card = btn.closest(".product");
  const qty = parseInt(card.querySelector(".qty span").textContent, 10);
  addItem(cart, product, qty);

  const savedIndex = saved.findIndex(s => s.item === product.item);
  if (savedIndex > -1) saved.splice(savedIndex, 1);

  persist();
  updateDrawerUI();
  updateRelatedByCart();
  openDrawer("cart");
  showToast(`${product.name} added to cart`);
}

function saveFromCard(item) {
  const product = findProductByItem(item);
  if (!product) return;
  addItem(saved, product, 1);
  persist();
  updateDrawerUI();
  openDrawer("saved");
  showToast(`${product.name} saved for later`);
}

function addToKitchenList(product, listName, qty = 1) {
  if (!requisitions[listName]) requisitions[listName] = [];
  const existing = requisitions[listName].find(item => item.item === product.item);
  if (existing) {
    existing.qty += qty;
  } else {
    requisitions[listName].push({
      item: product.item,
      name: product.name,
      price: product.price,
      qty,
      pack: product.pack,
      image: product.image,
      categoryTitle: product.categoryTitle
    });
  }
  persist();
  updateDrawerUI();
}

function addToKitchenListFromCard(item) {
  const product = findProductByItem(item);
  if (!product) return;
  const listName = prompt("Enter kitchen list name:", "Weekly Prep");
  if (!listName) return;
  addToKitchenList(product, listName.trim(), 1);
  openDrawer("requisition");
  showToast(`${product.name} added to kitchen list`);
}

function openProduct(item) {
  const product = findProductByItem(item);
  if (!product) return;

  currentDetailProduct = product;
  document.getElementById("detailImage").style.backgroundImage = `url('${product.image}')`;
  document.getElementById("detailName").textContent = product.name;
  document.getElementById("detailDescription").textContent = product.desc;
  document.getElementById("detailBrand").textContent = product.brand;
  document.getElementById("detailItem").textContent = product.item;
  document.getElementById("detailPack").textContent = product.pack;
  document.getElementById("detailPrice").textContent = `$${product.price.toFixed(2)}`;
  document.getElementById("detailQty").textContent = "1";
  document.getElementById("detailBreadcrumb").textContent = `${product.categoryTitle} / ${product.name}`;

  const status = document.getElementById("detailStatus");
  status.textContent = product.status;
  status.className = `status ${product.cls}`;

  document.getElementById("productDetailSection").style.display = "block";
  document.getElementById("productDetailSection").scrollIntoView({ behavior: "smooth", block: "start" });

  renderRelatedProducts(product, "Based on this product");
  history.replaceState(null, "", `#product-${product.item}`);
}

function backToCatalog() {
  document.getElementById("productDetailSection").style.display = "none";
  currentDetailProduct = null;
  history.replaceState(null, "", "#catalog");
  document.getElementById("catalog").scrollIntoView({ behavior: "smooth", block: "start" });
}

function changeDetailQty(delta) {
  const qty = document.getElementById("detailQty");
  let value = parseInt(qty.textContent, 10) + delta;
  if (value < 1) value = 1;
  qty.textContent = value;
}

function addCurrentDetailToCart() {
  if (!currentDetailProduct) return;
  const qty = parseInt(document.getElementById("detailQty").textContent, 10);
  addItem(cart, currentDetailProduct, qty);

  const savedIndex = saved.findIndex(s => s.item === currentDetailProduct.item);
  if (savedIndex > -1) saved.splice(savedIndex, 1);

  persist();
  updateDrawerUI();
  updateRelatedByCart();
  openDrawer("cart");
  showToast(`${currentDetailProduct.name} added to cart`);
}

function saveCurrentDetailItem() {
  if (!currentDetailProduct) return;
  addItem(saved, currentDetailProduct, 1);
  persist();
  updateDrawerUI();
  openDrawer("saved");
  showToast(`${currentDetailProduct.name} saved for later`);
}

function addCurrentDetailToKitchenList() {
  if (!currentDetailProduct) return;
  const listName = prompt("Enter kitchen list name:", "Service Order");
  if (!listName) return;
  const qty = parseInt(document.getElementById("detailQty").textContent, 10);
  addToKitchenList(currentDetailProduct, listName.trim(), qty);
  openDrawer("requisition");
  showToast(`${currentDetailProduct.name} added to kitchen list`);
}

function scoreRelated(base, candidate) {
  let score = 0;
  if (base.item === candidate.item) return -1;
  if (base.categoryTitle === candidate.categoryTitle) score += 4;
  if (base.brand === candidate.brand) score += 2;

  const baseTags = base.tags || [];
  const candTags = candidate.tags || [];
  baseTags.forEach(tag => {
    if (candTags.includes(tag)) score += 3;
  });

  if (Math.abs(base.price - candidate.price) < 30) score += 1;
  return score;
}

function getRelatedProducts(product) {
  return [...allProducts]
    .map(candidate => ({ candidate, score: scoreRelated(product, candidate) }))
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(x => x.candidate);
}

function renderRelatedProducts(product, reasonText) {
  const relatedGrid = document.getElementById("relatedGrid");
  const relatedReason = document.getElementById("relatedReason");
  relatedReason.textContent = reasonText;

  const related = getRelatedProducts(product);
  if (!related.length) {
    relatedGrid.innerHTML = `<div class="empty-state">No related products available.</div>`;
    return;
  }

  relatedGrid.innerHTML = related.map(p => renderProductCard(p)).join("");
}

function updateRelatedBySearch(query) {
  if (!query.trim()) return;

  const matches = allProducts.filter(p =>
    [p.name, p.brand, p.item, ...(p.tags || [])].join(" ").toLowerCase().includes(query.toLowerCase())
  );
  if (!matches.length) return;

  const base = matches[0];
  document.getElementById("productDetailSection").style.display = "block";
  renderRelatedProducts(base, `Related to search: "${query}"`);
  document.getElementById("detailBreadcrumb").textContent = `Search / ${base.name}`;
  document.getElementById("detailImage").style.backgroundImage = `url('${base.image}')`;
  document.getElementById("detailName").textContent = base.name;
  document.getElementById("detailDescription").textContent = base.desc;
  document.getElementById("detailBrand").textContent = base.brand;
  document.getElementById("detailItem").textContent = base.item;
  document.getElementById("detailPack").textContent = base.pack;
  document.getElementById("detailPrice").textContent = `$${base.price.toFixed(2)}`;

  const status = document.getElementById("detailStatus");
  status.textContent = base.status;
  status.className = `status ${base.cls}`;

  currentDetailProduct = base;
}

function updateRelatedByCart() {
  if (!cart.length) return;
  const last = cart[cart.length - 1];
  const base = findProductByItem(last.item);
  if (!base) return;
  document.getElementById("productDetailSection").style.display = "block";
  renderRelatedProducts(base, "Because you added this item to cart");
}

function getRequisitionCount() {
  return Object.values(requisitions).reduce(
    (sum, list) => sum + list.reduce((s, item) => s + item.qty, 0),
    0
  );
}

function getSmartCartRecommendations() {
  if (!cart.length) return [];
  const recommendedIds = [];

  cart.forEach(item => {
    const pairings = smartPairings[item.item] || [];
    pairings.forEach(id => {
      if (!recommendedIds.includes(id) && !cart.some(cartItem => cartItem.item === id)) {
        recommendedIds.push(id);
      }
    });
  });

  return recommendedIds.slice(0, 3).map(findProductByItem).filter(Boolean);
}

function openDrawer(tab) {
  activeDrawerTab = tab;
  document.getElementById("cartTabBtn").classList.toggle("active", tab === "cart");
  document.getElementById("savedTabBtn").classList.toggle("active", tab === "saved");
  document.getElementById("reqTabBtn").classList.toggle("active", tab === "requisition");
  document.getElementById("drawerPanel").classList.add("open");
  document.getElementById("overlay").classList.add("show");
  updateDrawerUI();
}

function addRecommendedToCart(itemId) {
  const product = findProductByItem(itemId);
  if (!product) return;
  addItem(cart, product, 1);
  persist();
  updateDrawerUI();
  showToast(`${product.name} added to cart`);
}

function updateDrawerUI() {
  const drawerItems = document.getElementById("drawerItems");
  const cartTotal = document.getElementById("cartTotal");
  const cartCount = document.getElementById("cartCount");
  const savedCount = document.getElementById("savedCount");
  const reqCount = document.getElementById("reqCount");

  let total = 0;
  let count = 0;

  cart.forEach(item => {
    total += item.price * item.qty;
    count += item.qty;
  });

  cartTotal.textContent = "$" + total.toFixed(2);
  cartCount.textContent = count;
  savedCount.textContent = saved.reduce((sum, item) => sum + item.qty, 0);
  reqCount.textContent = getRequisitionCount();

  if (activeDrawerTab === "requisition") {
    const reqNames = Object.keys(requisitions);
    if (!reqNames.length) {
      drawerItems.innerHTML = `<div class="empty-state">No kitchen lists yet.</div>`;
      return;
    }

    drawerItems.innerHTML = reqNames.map(name => `
      <div class="item-card">
        <h4>${name}</h4>
        <p>${requisitions[name].length} item(s)</p>
        ${requisitions[name].map((item, index) => `
          <div class="item-card" style="margin-top:12px; padding-bottom:10px; border-bottom:1px dashed #dfe6ef;">
            <h4 style="font-size:16px;">${item.name}</h4>
            <p>$${item.price.toFixed(2)} • ${item.pack} • Qty: ${item.qty}</p>
            <div class="item-row">
              <button class="move-btn" onclick="moveRequisitionItemToCart('${escapeJs(name)}', ${index})">Move to cart</button>
              <button class="remove-btn" onclick="removeRequisitionItem('${escapeJs(name)}', ${index})">Remove</button>
            </div>
          </div>
        `).join("")}
      </div>
    `).join("");
    return;
  }

  const source = activeDrawerTab === "cart" ? cart : saved;
  if (!source.length) {
    drawerItems.innerHTML = `<div class="empty-state">${activeDrawerTab === "cart" ? "Your cart is empty." : "No saved items yet."}</div>`;
  } else {
    drawerItems.innerHTML = source.map((item, index) => `
      <div class="item-card">
        <h4>${item.name}</h4>
        <p>$${item.price.toFixed(2)} • ${item.pack}</p>
        <div class="item-row">
          <div class="qty">
            <button onclick="updateQty('${activeDrawerTab}', ${index}, -1)">−</button>
            <span>${item.qty}</span>
            <button onclick="updateQty('${activeDrawerTab}', ${index}, 1)">+</button>
          </div>
          <div style="display:flex; gap:8px; flex-wrap:wrap; justify-content:flex-end;">
            ${activeDrawerTab === "cart"
              ? `<button class="move-btn" onclick="moveToSaved(${index})">Save for later</button>`
              : `<button class="move-btn" onclick="moveToCart(${index})">Move to cart</button>`}
            <button class="move-btn" onclick="quickAddToKitchenList('${escapeJs(item.item)}')">Kitchen List</button>
            <button class="remove-btn" onclick="removeItem('${activeDrawerTab}', ${index})">Remove</button>
          </div>
        </div>
      </div>
    `).join("");
  }

  if (activeDrawerTab === "cart" && cart.length) {
    const recs = getSmartCartRecommendations();
    if (recs.length) {
      drawerItems.innerHTML += `
        <div class="smart-cart-box">
          <h4>You May Also Need</h4>
          <p>Selected based on products already in your cart.</p>
          <div class="smart-cart-list">
            ${recs.map(item => `
              <div class="smart-cart-item">
                <div>
                  <strong>${item.name}</strong>
                  <span>${item.pack} • $${item.price.toFixed(2)}</span>
                </div>
                <button class="mini-add" onclick="addRecommendedToCart('${item.item}')">Add</button>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    }
  }
}

function updateQty(sourceName, index, delta) {
  const source = sourceName === "cart" ? cart : saved;
  source[index].qty += delta;
  if (source[index].qty <= 0) source.splice(index, 1);
  persist();
  updateDrawerUI();
}

function removeItem(sourceName, index) {
  const source = sourceName === "cart" ? cart : saved;
  source.splice(index, 1);
  persist();
  updateDrawerUI();
}

function moveToSaved(index) {
  const item = cart[index];
  addItem(saved, item, item.qty);
  cart.splice(index, 1);
  persist();
  openDrawer("saved");
  showToast("Item moved to saved");
}

function moveToCart(index) {
  const item = saved[index];
  addItem(cart, item, item.qty);
  saved.splice(index, 1);
  persist();
  openDrawer("cart");
  showToast("Item moved to cart");
}

function quickAddToKitchenList(itemId) {
  const product = findProductByItem(itemId);
  if (!product) return;
  const listName = prompt("Enter kitchen list name:", "Chef Order List");
  if (!listName) return;
  addToKitchenList(product, listName.trim(), 1);
  openDrawer("requisition");
  showToast("Item added to kitchen list");
}

function moveRequisitionItemToCart(listName, index) {
  const item = requisitions[listName][index];
  addItem(cart, item, item.qty);
  requisitions[listName].splice(index, 1);
  if (!requisitions[listName].length) delete requisitions[listName];
  persist();
  openDrawer("cart");
  updateRelatedByCart();
  showToast("Kitchen list item moved to cart");
}

function removeRequisitionItem(listName, index) {
  requisitions[listName].splice(index, 1);
  if (!requisitions[listName].length) delete requisitions[listName];
  persist();
  updateDrawerUI();
}

function closeAllPanels() {
  document.getElementById("drawerPanel").classList.remove("open");
  document.getElementById("overlay").classList.remove("show");
}

function generateSuggestedOrder() {
  const cuisine = document.getElementById("cuisineSelect").value;
  const business = document.getElementById("businessSelect").value;

  const exactKey = `${cuisine}_${business}`;
  let ids = suggestedOrderMap[exactKey];

  if (!ids || !ids.length) {
    const cuisineFallback = Object.keys(suggestedOrderMap).find(key => key.startsWith(`${cuisine}_`));
    if (cuisineFallback) {
      ids = suggestedOrderMap[cuisineFallback];
    }
  }

  if (!ids || !ids.length) {
    ids = ["5400210", "2101098", "3300400", "3302010"];
  }

  currentSuggestedItems = ids.map(findProductByItem).filter(Boolean);

  const builderResults = document.getElementById("builderResults");
  const suggestedGrid = document.getElementById("suggestedGrid");
  const builderTitle = document.getElementById("builderTitle");
  const builderDescription = document.getElementById("builderDescription");

  builderTitle.textContent = "Suggested Order";
  builderDescription.textContent = `Recommended for ${capitalize(cuisine)} ${readableBusiness(business)} service.`;

  builderResults.classList.add("show");

  if (!currentSuggestedItems.length) {
    suggestedGrid.innerHTML = `<div class="empty-state">No suggested order found for this selection.</div>`;
    return;
  }

  suggestedGrid.innerHTML = currentSuggestedItems.map(renderProductCard).join("");
}

function addSuggestedOrderToCart() {
  if (!currentSuggestedItems.length) return;
  currentSuggestedItems.forEach(item => addItem(cart, item, 1));
  persist();
  updateDrawerUI();
  openDrawer("cart");
  showToast("Suggested order added to cart");
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function readableBusiness(value) {
  const map = {
    restaurant: "Restaurant",
    cafe: "Cafe",
    catering: "Catering",
    hotel: "Hotel Kitchen",
    finedining: "Fine Dining"
  };
  return map[value] || value;
}

document.getElementById("searchInput").addEventListener("input", function () {
  const query = this.value;
  renderProducts(currentCategory, query);
  if (query.trim().length >= 2) updateRelatedBySearch(query);
});

const rotatingAlerts = [
  ["Atlantic Salmon — In Stock", "alert-chip in-stock"],
  ["Microgreens — Low Stock", "alert-chip low-stock"],
  ["Black Winter Truffles — Quote Required", "alert-chip quote-only"],
  ["Scallops — Restocking Tomorrow", "alert-chip restock"]
];

let alertIndex = 0;
setInterval(() => {
  const first = document.querySelector("#inventoryAlerts .alert-chip");
  if (!first) return;
  alertIndex = (alertIndex + 1) % rotatingAlerts.length;
  first.textContent = rotatingAlerts[alertIndex][0];
  first.className = rotatingAlerts[alertIndex][1];
}, 2400);

function toggleChatbot() {
  document.getElementById("chatbot").classList.toggle("open");
}

function addChatMessage(text, type) {
  const messages = document.getElementById("chatMessages");
  const div = document.createElement("div");
  div.className = `chat-msg ${type}`;
  div.textContent = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function sendChat() {
  const input = document.getElementById("chatInput");
  const text = input.value.trim();
  if (!text) return;

  addChatMessage(text, "user");
  const lower = text.toLowerCase();
  let reply = "I could not find a direct answer for that. You can contact support at 856(526)0268";

  if (lower.includes("cart")) {
    reply = "You can add items from the catalog or product page. The cart also shows recommended add-ons.";
  } else if (lower.includes("save")) {
    reply = "Use the heart button to save items for later. Saved items can be moved back into the cart.";
  } else if (lower.includes("kitchen list") || lower.includes("requisition")) {
    reply = "Use the List button to create or add to a kitchen list. Items can later move into cart.";
  } else if (lower.includes("suggested order") || lower.includes("build my order")) {
    reply = "Use Build My Order to generate a curated starting order based on cuisine and service type.";
  } else if (lower.includes("support") || lower.includes("contact") || lower.includes("help")) {
    reply = "Please contact support at 856(526)0268";
  } else {
    const found = allProducts.find(p =>
      [p.name, p.brand, ...(p.tags || [])].join(" ").toLowerCase().includes(lower)
    );
    if (found) {
      reply = `I found ${found.name}. I opened the product detail so you can review it.`;
      openProduct(found.item);
    }
  }

  addChatMessage(reply, "bot");
  input.value = "";
}

document.getElementById("chatInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendChat();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeAllPanels();
});

renderProducts(currentCategory);
updateDrawerUI();
generateSuggestedOrder();
