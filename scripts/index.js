/* -------------------------------------------------------------------------- */
/*                                    CARDS                                   */
/* -------------------------------------------------------------------------- */

const initialCards = [
  { name: 'San Fran', link: './images/sanfran.jpg' },
  { name: 'Washington DC', link: './images/washingtondc.jpg' },
  { name: 'New York', link: './images/newyork.jpg' },
  { name: 'Cape Cod', link: './images/capecod.jpg' },
  { name: 'Santa Monica', link: './images/california.jpg' },
  { name: 'Colorado', link: './images/colorado.jpg' },
];

/* -------------------------------------------------------------------------- */
/*                                  ELEMENTS                                  */
/* -------------------------------------------------------------------------- */
const profileEditButton = document.querySelector('#profile-edit-button');
const profileEditModal = document.querySelector('#profile-edit-modal');
const profileModalCloseButton = profileEditModal.querySelector('.modal__close-button');

// Updated to use modal__name-input and modal__description-input
const profileNameInput = document.querySelector('.modal__name-input');
const profileDescriptionInput = document.querySelector('.modal__description-input');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileEditForm = profileEditModal.querySelector('.modal__form');

// New modal for adding a card
const addCardModal = document.querySelector('#add-card-modal');
const addCardButton = document.querySelector('.profile__add-button');
const addCardForm = addCardModal.querySelector('.modal__form');
const cardTitleInput = addCardModal.querySelector('.modal__title-input');
const cardUrlInput = addCardModal.querySelector('.modal__url-input');
const cardModalCloseButton = addCardModal.querySelector('.modal__close-button');

const cardListEl = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('#card-template').content.firstElementChild;

/* -------------------------------------------------------------------------- */
/*                                  FUNCTIONS                                 */
/* -------------------------------------------------------------------------- */
function closePopUp(modal) {
  modal.classList.remove('modal_opened');
}

function openPopUp(modal) {
  modal.classList.add('modal_opened');
}

function getCardEl(cardData) {
  const cardEl = cardTemplate.cloneNode(true);
  const imageEl = cardEl.querySelector('.card__image');
  const titleEl = cardEl.querySelector('.card__title');
  titleEl.textContent = cardData.name;
  imageEl.src = cardData.link;
  imageEl.alt = cardData.name;
  return cardEl;
}

/* -------------------------------------------------------------------------- */
/*                               EVENT HANDLERS                               */
/* -------------------------------------------------------------------------- */
function handleProfileEditSubmit(event) {
  event.preventDefault();
  profileTitle.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopUp(profileEditModal);
}

function handleAddCardSubmit(event) {
  event.preventDefault();
  const cardData = {
    name: cardTitleInput.value,
    link: cardUrlInput.value,
  };
  const cardEl = getCardEl(cardData);
  cardListEl.prepend(cardEl);
  closePopUp(addCardModal);
}

/* -------------------------------------------------------------------------- */
/*                               EVENT LISTENERS                              */
/* -------------------------------------------------------------------------- */

// For profile editing modal
profileEditButton.addEventListener('click', () => {
  profileNameInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileEditModal.classList.add('modal_opened');
});
profileModalCloseButton.addEventListener('click', () => closePopUp(profileEditModal));
profileEditForm.addEventListener('submit', handleProfileEditSubmit);

// For adding a new card modal
addCardButton.addEventListener('click', () => {
  addCardModal.classList.add('modal_opened');
});
cardModalCloseButton.addEventListener('click', () => closePopUp(addCardModal));
addCardForm.addEventListener('submit', handleAddCardSubmit);

/* -------------------------------------------------------------------------- */
/*                              CARD RENDERING                                */
/* -------------------------------------------------------------------------- */
initialCards.forEach((cardData) => {
  const cardEl = getCardEl(cardData);
  cardListEl.prepend(cardEl);
});
