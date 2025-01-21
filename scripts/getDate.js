// current year
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("currentyear").textContent = new Date().getFullYear();
  
    // last modified date
    document.getElementById("lastModified").textContent =
      "Last Modified: " + document.lastModified
    });
