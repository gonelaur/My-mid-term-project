/* Crea tu propia lógica para hacer fetch de 3 posts distintos y enseñarlos en la homepage con DOM manipulation */

// JavaScript for navigation toggle
const toggleButton = document.getElementById('js-navbar-toggle');
const menu = document.getElementById('js-menu');

toggleButton.addEventListener('click', function () {
  menu.classList.toggle('show');
});
