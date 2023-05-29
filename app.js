const openMenu = function openMenuHandler() {
  document.querySelector('.mobile-menu').style.display = 'block';
};

const closeView = function closeNavHandler() {
  document.querySelector('.mobile-menu').style.display = 'none';
};

document.querySelector('#open-menu').addEventListener('click', openMenu);
document.querySelector('#close-view').addEventListener('click', closeView);
