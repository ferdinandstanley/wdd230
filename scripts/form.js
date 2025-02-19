document.addEventListener("DOMContentLoaded", () => {
    const ratingInput = document.getElementById("rating");
    const ratingValue = document.getElementById("ratingValue");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const passwordMessage = document.getElementById("passwordMessage");
    const form = document.getElementById("myForm");
  
    // Update rating value dynamically
    ratingInput.addEventListener("input", () => {
      ratingValue.textContent = ratingInput.value;
    });
  
    // Validate password match with UI feedback
    confirmPassword.addEventListener("input", () => {
      if (password.value !== confirmPassword.value) {
        passwordMessage.textContent = "Passwords do not match!";
        passwordMessage.style.color = "red";
        password.style.border = "2px solid red";
        confirmPassword.style.border = "2px solid red";
      } else {
        passwordMessage.textContent = "";
        password.style.border = "2px solid green";
        confirmPassword.style.border = "2px solid green";
      }
    });
  
    // Prevent form submission if passwords do not match
    form.addEventListener("submit", (event) => {
      if (password.value !== confirmPassword.value) {
        event.preventDefault();
        alert("Passwords do not match! Please check again.");
      }
    });
  });
  