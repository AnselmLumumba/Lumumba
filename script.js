/* script.js */

// Smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Toggle mobile navigation menu
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu-show');
  });
  
  // Form validation
  const form = document.querySelector('#contact-form');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  
    // Perform form validation
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');
  
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
  
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields.');
      return;
    }
  
    // Submit the form
    // You can add your own code here to handle form submission, such as sending an AJAX request or redirecting to a thank you page.
    alert('Form submitted successfully!');
    form.reset();
  });
  document.getElementById("subscribe-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the email input value
    var email = document.getElementById("email-input").value;
  
    // Display the congratulations message
    document.getElementById("congratulations").classList.remove("hidden");
  
    // Optional: You can do additional processing with the email value, like sending it to a server or storing it in a database
  });
  
  