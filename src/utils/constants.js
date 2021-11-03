//Данные для валидации
export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible',
};

// Попапы
export const popupSelector = {
  userInfo: '.popup_type_edit-profile',
  editAvatar: '.popup_type_edit-avatar',
  addCard: '.popup_type_add-card',
  deleteCard: '.popup_type_delete-card',
  viewCard: '.popup_type_card-view'
}

// Кнопки открытия попапов
export const openPopupUserInfo = document.querySelector('.profile__edit-button');
export const openPopupAddCard = document.querySelector('.profile__add-button');
export const openPopupEditAvatar = document.querySelector('.profile__edit-avatar');

//Кнопка сабмита формы
export const submitButtonSelector = '.popup__submit-button';

// Данные из профиля
export const nameUserInfo = document.querySelector('.profile__name');
export const aboutUserInfo = document.querySelector('.profile__job');
export const avatarUserInfo = document.querySelector('.profile__avatar');

// Поля формы редактирования профиля
export const nameUserInfoInput = document
  .querySelector(popupSelector.userInfo)
  .querySelector('.popup__input_type_profile-name');
export const aboutUserInfoInput = document
  .querySelector(popupSelector.userInfo)
  .querySelector('.popup__input_type_profile-job');

// Template
export const cardTemplate = document.querySelector('#card-template').content;

// HTML-контейнер с карточками
export const cardsElement = document.querySelector('.card-gallery');

