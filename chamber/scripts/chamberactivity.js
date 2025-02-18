
// const hamburger = document.querySelector('.hamburger');
// const navLinks = document.querySelector('.nav-links');

// hamburger.addEventListener('click', () => {
//     navLinks.classList.toggle('show');
// });


// Hamburger menu toggle
// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector("nav ul");

// hamburger.addEventListener("click", () => {
//   navMenu.classList.toggle("active");
//   hamburger.classList.toggle("active");
// });

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("visible");
});


const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
    document.getElementById("visit-message").textContent = "Welcome! Let us know if you have any questions.";
} else {
    const diff = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
    document.getElementById("visit-message").textContent =
        diff < 1 ? "Back so soon! Awesome!" : `You last visited ${diff} day${diff > 1 ? "s" : ""} ago.`;
}

localStorage.setItem("lastVisit", now);

fetch("data/members.json")
    .then(response => response.json())
    .then(data => {
        const directory = document.getElementById("directory");
        data.forEach(member => {
            const div = document.createElement("div");
            div.innerHTML = `
                <h4>${member.name}</h4>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}">Visit Website</a>
            `;
            directory.appendChild(div);
        });
    });

let gridView = true;
const viewToggle = document.getElementById("view-toggle");

viewToggle.addEventListener("click", () => {
  const directory = document.getElementById("directory");
  directory.classList.toggle("list-view");
  gridView = !gridView;
  viewToggle.textContent = gridView ? "Switch to List View" : "Switch to Grid View";
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

fetch("data/members.json")
    .then(response => response.json())
    .then(data => {
        const directory = document.getElementById("directory");
        data.forEach(member => {
            const div = document.createElement("div");
            div.innerHTML = `
                <h4>${member.name}</h4>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}">Visit Website</a>
            `;
            directory.appendChild(div);
        });
    });


