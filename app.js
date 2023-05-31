const openMenu = function openMenuHandler(event) {
  event.preventDefault();
  document.querySelector('.mobile-menu').style.display = 'block';
};

const closeView = function closeNavHandler(event) {
  event.preventDefault();
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.style.display = 'none';
};

// Add click event listener to the logo
document.querySelector('.logo').addEventListener('click', (event) => {
  event.preventDefault();
  window.location.href = 'index.html';
});

document.querySelector('#open-menu').addEventListener('click', openMenu);
document.querySelector('#close-view').addEventListener('click', closeView);

// Add click event listeners to menu items
const menuItems = document.querySelectorAll('.mobile-menu-list-items');
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', closeView);
});
