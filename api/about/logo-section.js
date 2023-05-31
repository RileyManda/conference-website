import { logoData } from '../data.js';

const generateLogoCardHTML = (logo) => {
  const { image, alt } = logo;
  const cardHTML = `
    <div class="creative-logo-card">
      <img src="${image}" alt="${alt}">
    </div>
  `;

  return cardHTML;
};

const generateCreativeContentHTML = () => {
  let contentHTML = '<p>The logo of CC Global Summit 2023 was decided through the logo competition from 8, June to 7, July.</p>';

  logoData.forEach((logo) => {
    const cardHTML = generateLogoCardHTML(logo);
    contentHTML += cardHTML;
  });

  return contentHTML;
};

const displayCreativeContent = () => {
  const creativeContentContainer = document.getElementById('creative-content');

  const contentHTML = generateCreativeContentHTML();
  creativeContentContainer.innerHTML = contentHTML;
};

displayCreativeContent();