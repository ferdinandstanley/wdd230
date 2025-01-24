document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");
    const darkModeToggle = document.getElementById("darkModeToggle");
    const rootElement = document.body;

    // Toggle Hamburger Menu
    hamburger.addEventListener("click", () => {
        menu.classList.toggle("visible"); // Toggles the "visible" class on the menu
    });

    // Toggle Dark Mode
    darkModeToggle.addEventListener("click", () => {
        rootElement.classList.toggle("dark");
        rootElement.classList.toggle("light");
        darkModeToggle.textContent = rootElement.classList.contains("dark") ? "☀️" : "🌙"; // Updates the toggle button's icon
    });
});
