document.querySelector(".menu-icon").addEventListener("click", () => {
  const navLinks = document.querySelector(".nav-links");
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});

function filterProducts(category) {
  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach((card) => {
    if (category === "all" || card.getAttribute("data-category") === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
