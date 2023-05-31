import { speakerData } from '../data.js';

const generateSpeakerCardHTML = (speaker) => {
  const {
    image, name, credential, description,
  } = speaker;
  const cardHTML = `
    <div class="speaker-card">
      <img src="${image}" alt="${name} Icon">
      <div class="text-content">
        <h3 class="speaker-card-title">${name}</h3>
        <p class="speaker-credential">${credential}</p>
        <div class="content-divider"></div>
        <p class="speaker-description">${description}</p>
      </div>
    </div>
  `;

  return cardHTML;
};

const displaySpeakerCards = () => {
  const speakerCardsContainer = document.querySelector(
    '#speakers-section .speaker-content',
  );
  speakerData.forEach((speaker) => {
    const cardHTML = generateSpeakerCardHTML(speaker);
    speakerCardsContainer.insertAdjacentHTML('beforeend', cardHTML);
  });
};

displaySpeakerCards();
