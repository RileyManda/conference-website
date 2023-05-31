import { pastSummitsData } from '../data.js';

const generatePastCardHTML = (pastSummit) => {
  const {
    year, location, image, alt,
  } = pastSummit;
  const cardHTML = `
    <div class="card-container">
      <div class="card-content">
          <h2>${year}</h2>
          <p>${location}</p>
      </div>
      <img src="${image}" alt="${alt}">
    </div>
  `;

  return cardHTML;
};

const generatePastSummitsHTML = () => {
  let pastSummitsHTML = '';

  pastSummitsData.forEach((pastSummit) => {
    const cardHTML = generatePastCardHTML(pastSummit);
    pastSummitsHTML += cardHTML;
  });

  return pastSummitsHTML;
};

const displayPastSummits = () => {
  const pastSummitsContainer = document.querySelector(
    '#past-section .past-content',
  );
  pastSummitsContainer.innerHTML = generatePastSummitsHTML();
};

displayPastSummits();
