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
const profileNameInput = document.querySelector('.modal__name-input');
const profileDescriptionInput = document.querySelector('.modal__description-input');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileEditForm = profileEditModal.querySelector('.modal__form');

// Modal for adding a card
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

// Function to close the modal
function closePopUp(modal) {
  modal.classList.remove('modal_opened');
}

// Function to open the modal
function openPopUp(modal) {
  modal.classList.add('modal_opened');
}

// Function to create a card element
function getCardEl(cardData) {
  const cardEl = cardTemplate.cloneNode(true);
  const imageEl = cardEl.querySelector('.card__image');
  const titleEl = cardEl.querySelector('.card__title');
  const likeButton = cardEl.querySelector('.card__like-button');
  const trashButton = cardEl.querySelector('.card__trash-button');

  // Set card content
  titleEl.textContent = cardData.name;
  imageEl.src = cardData.link;
  imageEl.alt = cardData.name;

  // Like button event listener
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('card__like-button_active');
  });

  // Trash button event listener
  trashButton.addEventListener('click', () => {
    cardEl.remove();
  });

  return cardEl;
}

// Function to reset the input fields in the add card form
function resetAddCardForm() {
  cardTitleInput.value = '';
  cardUrlInput.value = '';
}

/* -------------------------------------------------------------------------- */
/*                               EVENT HANDLERS                               */
/* -------------------------------------------------------------------------- */

// Profile edit submit handler
function handleProfileEditSubmit(event) {
  event.preventDefault();
  profileTitle.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopUp(profileEditModal);
}

// Add card submit handler
function handleAddCardSubmit(event) {
  event.preventDefault();
  const cardData = {
    name: cardTitleInput.value,
    link: cardUrlInput.value,
  };
  const cardEl = getCardEl(cardData);
  cardListEl.prepend(cardEl);
  closePopUp(addCardModal);
  resetAddCardForm(); // Reset the input fields after adding the card
}

/* -------------------------------------------------------------------------- */
/*                               EVENT LISTENERS                              */
/* -------------------------------------------------------------------------- */

// For profile editing modal
profileEditButton.addEventListener('click', () => {
  profileNameInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopUp(profileEditModal);
});
profileModalCloseButton.addEventListener('click', () => closePopUp(profileEditModal));
profileEditForm.addEventListener('submit', handleProfileEditSubmit);

// For adding a new card modal
addCardButton.addEventListener('click', () => openPopUp(addCardModal));
cardModalCloseButton.addEventListener('click', () => closePopUp(addCardModal));
addCardForm.addEventListener('submit', handleAddCardSubmit);

/* -------------------------------------------------------------------------- */
/*                              CARD RENDERING                                */
/* -------------------------------------------------------------------------- */
initialCards.forEach((cardData) => {
  const cardEl = getCardEl(cardData);
  cardListEl.prepend(cardEl);
});
