document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const rating = document.getElementById('rating');
    const ratingValue = document.getElementById('ratingValue');
  
    // Display current rating value
    rating.addEventListener('input', () => {
      ratingValue.textContent = rating.value;
    });
  
    // Password confirmation validation
    form.addEventListener('submit', (event) => {
      if (password.value !== confirmPassword.value) {
        event.preventDefault();
        alert('Passwords do not match. Please try again.');
        password.value = '';
        confirmPassword.value = '';
        password.focus();
      }
    });
  });
  