const initialCards = [
  {
    title: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg',
  },
  {
    title: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg',
  },
  {
    title: 'Bald Mountains',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg',
  },
  {
    title: 'Latemar',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg',
  },
  {
    title: 'Vanoise National Park',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg',
  },
  {
    title: 'Lago di Braies',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg',
  },
];

console.log(initialCards);
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
const cardTemplate = document.querySelector('#card-template').content.firstElementChild;
/* -------------------------------------------------------------------------- */
/*                                  FUNCTIONS                                 */
/* -------------------------------------------------------------------------- */
function closePopUp() {
  profileEditModal.classList.remove('modal_opened');
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

// for (let i = 0; i < initialCards.length; i++) {
//   const card = initialCards[i];
// }
