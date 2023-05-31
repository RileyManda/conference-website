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

  const screenWidth = window.innerWidth;

  // Check if screen size is greater than 768 pixels
  if (screenWidth > 768) {
    // Display all speaker cards
    for (let i = 0; i < speakerData.length; i += 1) {
      const speaker = speakerData[i];
      const cardHTML = generateSpeakerCardHTML(speaker);
      speakerCardsContainer.insertAdjacentHTML('beforeend', cardHTML);
    }
  } else {
    // Display only two speaker cards
    const maxCards = Math.min(2, speakerData.length);
    for (let i = 0; i < maxCards; i += 1) {
      const speaker = speakerData[i];
      const cardHTML = generateSpeakerCardHTML(speaker);
      speakerCardsContainer.insertAdjacentHTML('beforeend', cardHTML);
    }
  }
};

displaySpeakerCards();
