const openMenu = function openMenuHandler() {
  document.querySelector('.mobile-menu').style.display = 'block';
};

const closeView = function closeNavHandler(event) {
  event.preventDefault(); // Prevent the default link behavior

  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.style.display = 'none';

  const clickedLink = event.target.closest('a');

  // Check if the clicked link corresponds to the home section
  if (clickedLink && clickedLink.getAttribute('href') === '#home-section') {
    window.location.href = 'index.html';
  }
};

document.querySelector('#open-menu').addEventListener('click', openMenu);
document.querySelector('#close-view').addEventListener('click', closeView);
