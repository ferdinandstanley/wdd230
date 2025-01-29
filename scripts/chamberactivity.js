
// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Last modification date in footer
document.querySelector(".last-modified").textContent = `Last modified: ${document.lastModified}`;

// Weather card placeholder interaction
const weatherCard = document.querySelector(".weather-card");
if (weatherCard) {
  weatherCard.addEventListener("click", () => {
    alert("Weather updates coming soon!");
  });
}

// Example spotlight card hover effect
const spotlightCards = document.querySelectorAll(".spotlights .card");

spotlightCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "none";
  });
});
