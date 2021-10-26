export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

//Данные для валидации
export const validationConfig = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible',
};

// Попапы
export const popupUserInfo = document.querySelector('.popup_type_edit-profile');
export const popupAddCard = document.querySelector('.popup_type_add-card');
export const popupViewCard = document.querySelector('.popup_type_card-view');

// Кнопки открытия попапов
export const openPopupUserInfo = document.querySelector('.profile__edit-button');
export const openPopupAddCard = document.querySelector('.profile__add-button');

// Формы
export const formPopupUserInfo = popupUserInfo.querySelector('.popup__form_type_profile');
export const formPopupAddCards = popupAddCard.querySelector('.popup__form_type_card');

// Данные из профиля
export const nameUserInfo = document.querySelector('.profile__name');
export const aboutUserInfo = document.querySelector('.profile__job');

// Поля формы редактирования профиля
export const nameUserInfoInput = popupUserInfo.querySelector('.popup__input_type_profile-name');
export const aboutUserInfoInput = popupUserInfo.querySelector('.popup__input_type_profile-job');

// Template
export const cardTemplate = document.querySelector('#card-template').content;

// HTML-контейнер с карточками
export const cardsElement = document.querySelector('.card-gallery');

