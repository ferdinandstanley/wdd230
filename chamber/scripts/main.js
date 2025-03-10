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

document.addEventListener("DOMContentLoaded", function () {
    let timestampInput = document.getElementById("timestamp");
    let now = new Date();
    timestampInput.value = now.toISOString();
});

document.addEventListener("DOMContentLoaded", () => {
    const visitMessage = document.getElementById("visit-message");

    // Get last visit from localStorage
    const lastVisit = localStorage.getItem("lastVisit");
    const now = new Date();

    if (!lastVisit) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitDate = new Date(lastVisit);
        const timeDifference = now - lastVisitDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else {
            visitMessage.textContent = `You last visited ${daysDifference} ${daysDifference === 1 ? "day" : "days"} ago.`;
        }
    }

    // Store current visit in localStorage
    localStorage.setItem("lastVisit", now);
});


// document.addEventListener('DOMContentLoaded', function() {
//     var calendarEl = document.getElementById('calendar');
//     var calendar = new FullCalendar.Calendar(calendarEl, {
//         initialView: 'dayGridMonth',
//         height: 'auto',
//         events: [
//             { title: 'Business Networking', start: '2025-02-20' },
//             { title: 'Annual Meeting', start: '2025-02-25' }
//         ]
//     });
//     calendar.render();
// });



