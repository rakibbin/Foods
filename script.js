document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
  
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu');
    const bookButton = document.querySelector('.book');
  
    menuButton.addEventListener('click', () => {
      window.location.href = '/menu'; // Change this URL to your menu page
    });
  
    bookButton.addEventListener('click', () => {
      window.location.href = '/book'; // Change this URL to your booking page
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
    const modal = document.querySelector('.modal');
    const modalImage = modal.querySelector('img');
    
    document.querySelectorAll('.image-link').forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const src = this.getAttribute('data-src');
        modalImage.setAttribute('src', src);
        modal.style.display = 'flex';
      });
    });
    
    modal.addEventListener('click', function () {
      modal.style.display = 'none';
    });
  });
  // Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Define variables for the slideshow
    var slides = document.querySelectorAll('.slide');
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds (adjust as needed)

    // Function to show the next slide
    function nextSlide() {
        slides[currentSlide].classList.remove('show-slide');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('show-slide');
    }
});
document.addEventListener('DOMContentLoaded', (event) => {
  const form = document.getElementById('subscribe-form');
  const emailInput = document.getElementById('email');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = emailInput.value;
    
    if (validateEmail(email)) {
      // Here you can add the code to send the email to your server or API
      
      // Show a success message
      alert('Thank you for subscribing! Your promo code is ABC123');
      
      // Clear the input field
      emailInput.value = '';
    } else {
      alert('Please enter a valid email address.');
    }
  });
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
document.querySelector('.menu').addEventListener('click', () => {
  alert('Menu button clicked');
});

document.querySelector('.book').addEventListener('click', () => {
  alert('Book a table button clicked');
});
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.footer-nav');

  menuToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
  });
});
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {

  // Example: Toggle visibility of opening hours section
  const hourSection = document.getElementById("hour");
  const hourToggle = document.getElementById("toggle-hours");

  if (hourToggle) {
    hourToggle.addEventListener("click", function() {
      hourSection.classList.toggle("hidden");
    });
  }

  // Add other event listeners or interactions as needed

});

