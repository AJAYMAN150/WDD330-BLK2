import { getLocalStorage } from './utils.mjs';

function renderCartContents() {
  // Get cart items safely (default to empty array if nothing in localStorage)
  let cartItems = getLocalStorage('so-cart') || [];

  const productList = document.querySelector('.product-list');

  // Safety check in case the element doesn't exist
  if (!productList) return;

  // Handle empty cart
  if (cartItems.length === 0) {
    productList.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  // Render items if they exist
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  productList.innerHTML = htmlItems.join('');
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

renderCartContents();