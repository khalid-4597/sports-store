let cart = [];
let total = 0;

function addToCart(button) {
  const product = button.closest(".product");

  const size = product.querySelector(".size").value;
  const quantity = parseInt(product.querySelector(".quantity").value);

  if (quantity <= 0) {
    alert("Please enter a valid quantity");
    return;
  }

  if (size === "") {
    alert("Please select a size");
    return;
  }

  const name = product.querySelector("h3").textContent;
  const price = parseInt(product.querySelector("p").textContent.replace("$", ""));

  cart.push({ name, size, quantity, price });
  total += quantity;

  const cartList = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartList.innerHTML = "";
  let totalPrice = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} (${item.size}) - Quantity: ${item.quantity} - $${item.price * item.quantity}`;
    cartList.appendChild(li);
    totalPrice += item.price * item.quantity;
  });

  cartTotal.textContent = `Total Items: ${total} | Total Price: $${totalPrice}`;

  product.querySelector(".quantity").value = 1;
  product.querySelector(".size").value = "";

  alert("Item added to cart");
}
document.getElementById("visitor-form").addEventListener("submit", function (e) {
  e.preventDefault();

  if (cart.length === 0) {
    alert("Your cart is empty. Please add items first.");
    return;
  }

  const name = document.getElementById("name").value;

  alert("Thank you " + name + "! Your order has been submitted.");

  this.reset();
  cart = [];
  total = 0;
  document.getElementById("cart-items").innerHTML = "";
  document.getElementById("cart-total").textContent = "";
});
function checkPassword() {
  const password = prompt("Enter password:");

  if (password === "4597") {
    window.location.href = "admin.html";
  } else {
    alert("Wrong password!");
  }
}
