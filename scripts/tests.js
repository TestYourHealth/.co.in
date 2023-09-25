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
// search barconst searchInput = document.getElementById('searchInput');
const productCards = document.querySelectorAll('.product-card');

searchInput.addEventListener('input', function () {
  const searchTerm = searchInput.value.toLowerCase();

  productCards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();

    if (title.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});
//fun btn
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
// for cart

const cartButtons = document.querySelectorAll(".cartbtn");
  const cartCount = document.getElementById("cart-count");

  let itemCount = 0;

  cartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.textContent === "Add To Cart") {
        button.textContent = "Added To Cart";
        itemCount++;
        cartCount.textContent = itemCount;
      } else {
        button.textContent = "Add To Cart";
        itemCount--;
        cartCount.textContent = itemCount;
      }
    });
  });







// const cartButtons = document.querySelectorAll(".cartbtn");

// cartButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     if (button.textContent === "Add To Cart") {
//       button.textContent = "Added To Cart";
//     } else {
//       button.textContent = "Add To Cart";
//     }
//   });
// });