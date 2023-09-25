
// Function to render product items
function renderProducts() {
  const productList = document.getElementById("product-list");

  products.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add("product");

    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = product.name;

    const productName = document.createElement("div");
    productName.classList.add("product-name");
    productName.innerText = product.name;

    const productPrice = document.createElement("div");
    productPrice.classList.add("product-price");
    productPrice.innerText = "₹" + product.price;

    const addToCartButton = document.createElement("button");
    addToCartButton.innerText = "Add to Cart";
    addToCartButton.addEventListener("click", () => {
      addToCart(product);
    });

    productItem.appendChild(productImage);
    productItem.appendChild(productName);
    productItem.appendChild(productPrice);
    productItem.appendChild(addToCartButton);

    productList.appendChild(productItem);
  });
}
// Render initial product list
renderProducts();

function showSection(sectionId) {
  var sections = document.getElementsByClassName("section");
  var buttons = document.getElementsByClassName("button");

  // Hide all sections
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }

  // Deactivate all buttons
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  // Show the selected section and activate its button
  document.getElementById(sectionId).style.display = "block";
  document.getElementById(sectionId + "-button").classList.add("active");
}

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', () => {
  //Animate Links
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});
//search bar