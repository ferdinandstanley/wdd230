document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const rootElement = document.body;

    // Toggle Dark Mode
    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", () => {
            rootElement.classList.toggle("dark");
            rootElement.classList.toggle("light");
            darkModeToggle.textContent = rootElement.classList.contains("dark") ? "☀️" : "🌙";
        });
    }

    const hamburger = document.querySelector(".hamburger-menu");
    const navMenu = document.querySelector("Menu");

    // Hamburger Menu Toggle
    if (hamburger && menu) {
        hamburger.addEventListener("click", () => {
            menu.classList.toggle("visible");
            const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
            hamburger.setAttribute("aria-expanded", !isExpanded);
            hamburger.textContent = isExpanded ? "☰" : "X";
        });
    }
});


