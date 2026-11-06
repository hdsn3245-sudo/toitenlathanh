const products = [
  { id: 1, name: "Áo thun Basic", category: "ao", price: 159000, image: "images/ao-thun.svg" },
  { id: 2, name: "Áo sơ mi Casual", category: "ao", price: 289000, image: "images/ao-so-mi.svg" },
  { id: 3, name: "Quần jeans Classic", category: "quan", price: 399000, image: "images/quan-jeans.svg" },
  { id: 4, name: "Quần kaki ống suông", category: "quan", price: 349000, image: "images/quan-kaki.svg" },
  { id: 5, name: "Áo khoác Streetwear", category: "ao", price: 499000, image: "images/ao-khoac.svg" },
  { id: 6, name: "Túi tote Everyday", category: "phukien", price: 99000, image: "images/tui-tote.svg" },
  { id: 7, name: "Mũ lưỡi trai", category: "phukien", price: 129000, image: "images/mu.svg" },
  { id: 8, name: "Áo polo Minimal", category: "ao", price: 259000, image: "images/ao-polo.svg" }
];

let cart = [];
const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const cartPanel = document.getElementById("cartPanel");
const overlay = document.getElementById("overlay");

const money = value => new Intl.NumberFormat("vi-VN", {
  style: "currency", currency: "VND"
}).format(value);

function renderProducts() {
  const keyword = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;
  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(keyword) &&
    (category === "all" || product.category === category)
  );

  productGrid.innerHTML = filtered.length ? filtered.map(product => `
    <article class="product-card">
      <div class="product-image"><img src="${product.image}" alt="${product.name}"></div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <div class="product-meta">
          <span class="price">${money(product.price)}</span>
          <button class="add-button" data-add="${product.id}">Thêm vào giỏ</button>
        </div>
      </div>
    </article>
  `).join("") : "<p>Không tìm thấy sản phẩm phù hợp.</p>";
}

function addToCart(id) {
  const product = products.find(item => item.id === id);
  const existing = cart.find(item => item.id === id);
  if (existing) existing.quantity += 1;
  else cart.push({ ...product, quantity: 1 });
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  renderCart();
}

function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  document.getElementById("cartCount").textContent = count;
  document.getElementById("cartTotal").textContent = money(total);
  document.getElementById("cartItems").innerHTML = cart.length ? cart.map(item => `
    <div class="cart-row">
      <span>${item.name} × ${item.quantity}<br><strong>${money(item.price * item.quantity)}</strong></span>
      <button data-remove="${item.id}">Xóa</button>
    </div>
  `).join("") : '<p class="empty-cart">Giỏ hàng đang trống.</p>';
}

function openCart() {
  cartPanel.classList.add("open");
  overlay.classList.add("show");
  cartPanel.setAttribute("aria-hidden", "false");
}
function closeCart() {
  cartPanel.classList.remove("open");
  overlay.classList.remove("show");
  cartPanel.setAttribute("aria-hidden", "true");
}

productGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-add]");
  if (button) addToCart(Number(button.dataset.add));
});
document.getElementById("cartItems").addEventListener("click", event => {
  const button = event.target.closest("[data-remove]");
  if (button) removeFromCart(Number(button.dataset.remove));
});
searchInput.addEventListener("input", renderProducts);
categoryFilter.addEventListener("change", renderProducts);
document.getElementById("cartButton").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);
document.getElementById("checkoutButton").addEventListener("click", () => {
  if (!cart.length) return alert("Bạn chưa có sản phẩm trong giỏ hàng.");
  alert("Đây là website demo. Hãy bổ sung chức năng đặt hàng và thanh toán ở phía máy chủ.");
});

renderProducts();
renderCart();
