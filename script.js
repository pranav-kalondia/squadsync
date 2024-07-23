document.addEventListener('DOMContentLoaded', function() {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true
    });
  
    // Reveal elements
    sr.reveal('.tagline', { delay: 100 });
    sr.reveal('.uiux', { delay: 200 });
    sr.reveal('.carousel-inner', { delay: 300 });
    sr.reveal('.aboutheading', { delay: 100 });
    sr.reveal('.animationpage', { delay: 200 });
    sr.reveal('.partners', { delay: 300 });
    sr.reveal('.teammember', { delay: 100 });
  
    const menuItems = document.querySelectorAll('.menu-item');
    const navToggle = document.getElementById('nav-toggle');
  
    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        navToggle.checked = false;
      });
    });
  });


// Get the logo element
const logo = document.querySelector('.logo');

// Add an event listener to the logo
logo.addEventListener('click', () => {
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

    