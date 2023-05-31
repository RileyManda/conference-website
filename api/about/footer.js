const logoImg = document.querySelector('.footer-column img');

if (window.innerWidth >= 768) {
  logoImg.src = './assets/images/logo-white.svg';
} else {
  logoImg.src = './assets/images/logo.svg';
}
