// Get the menu toggle button and menu
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

// Add an event listener to the menu toggle button
menuToggle.addEventListener('click', function() {
  // Toggle the is-open class on the menu
  menu.classList.toggle('is-open');
});


