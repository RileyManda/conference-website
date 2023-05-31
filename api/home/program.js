import { programData } from '../data.js';

const generateProgramCardHTML = (programCard) => {
  const { title, description, icon } = programCard;
  const cardHTML = `
    <div class="program-card">
      <div class="card-content">
        <img src="${icon}" alt="${title} Icon">
        <h3 class="card-title">${title}</h3>
        <p class="card-description">${description}</p>
      </div>
    </div>
  `;

  return cardHTML;
};

const displayProgramCards = () => {
  const programCardsContainer = document.querySelector('.program-content');
  programData.forEach((programCard) => {
    const cardHTML = generateProgramCardHTML(programCard);
    programCardsContainer.insertAdjacentHTML('beforeend', cardHTML);
  });
};

displayProgramCards();
