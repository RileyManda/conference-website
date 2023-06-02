const openMenu = () => {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.style.display = 'block';
};

const closeMenu = () => {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.style.display = 'none';
};

document.querySelector('#open-menu').addEventListener('click', openMenu);
document.querySelector('#close-view').addEventListener('click', closeMenu);

// Hide the mobile menu on page load
window.addEventListener('load', () => {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.style.display = 'none';
});
