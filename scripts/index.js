const initialCards = [
  {
    name: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg',
  },
  {
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg',
  },
  {
    name: 'Bald Mountains',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg',
  },
  {
    name: 'Latemar',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg',
  },
  {
    name: 'Vanoise National Park',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg',
  },
  {
    name: 'Lago di Braies',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg',
  },
];

/* -------------------------------------------------------------------------- */
/*                                  ELEMENTS                                  */
/* -------------------------------------------------------------------------- */
const profileEditButton = document.querySelector('#profile-edit-button');
const profileEditModal = document.querySelector('#profile-edit-modal');
const profileModalCloseButton = profileEditModal.querySelector('.modal__close-button');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileTitleInput = document.querySelector('.profile__title-input');
const profileDescriptionInput = document.querySelector('.profile__description-input');
const profileEditForm = profileEditModal.querySelector('.modal__form');
const cardListEl = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('#card-template').content.firstElementChild;
/* -------------------------------------------------------------------------- */
/*                                  FUNCTIONS                                 */
/* -------------------------------------------------------------------------- */
function closePopUp() {
  profileEditModal.classList.remove('modal_opened');
}

function getCardEl(cardData) {
  const cardEl = cardTemplate.cloneNode(true);
  const imageEl = cardEl.querySelector('.card__image');
  const titleEl = cardEl.querySelector('.card__title');
  titleEl.textContent = cardData.name;
  imageEl.src = cardData.link;
  return cardEl;
}

/* -------------------------------------------------------------------------- */
/*                               EVENT HANDLERS                               */
/* -------------------------------------------------------------------------- */
function handleProfileEditSubmit(event) {
  event.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopUp();
}
/* -------------------------------------------------------------------------- */
/*                               EVENT LISTENERS                              */
/* -------------------------------------------------------------------------- */

profileEditButton.addEventListener('click', () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileEditModal.classList.add('modal_opened');
});
profileModalCloseButton.addEventListener('click', closePopUp);

profileEditForm.addEventListener('submit', handleProfileEditSubmit);

/* -------------------------------------------------------------------------- */
/*                              CARD RENDERING                                */
// /* -------------------------------------------------------------------------- */
// initialCards.forEach((cardData) => {
//   // Clone the template content
//   const cardEl = cardTemplate.cloneNode(true); // Correct way to clone the template

//   // Find the elements in the cloned template
//   const imageEl = cardEl.querySelector('.card__image');
//   const titleEl = cardEl.querySelector('.card__title');

//   // Set the image and title
//   imageEl.src = cardData.link;
//   imageEl.alt = cardData.name;
//   titleEl.textContent = cardData.name;

//   // Append the card to the card list
//   cardListEl.prepend(cardEl);
// });

initialCards.forEach((cardData) => {
  const cardEl = getCardEl(cardData);
  cardListEl.prepend(cardEl);
});
