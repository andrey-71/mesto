export const initialCards = [
  {
    nameImage: 'Архыз',
    linkImage: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    nameImage: 'Челябинская область',
    linkImage: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    nameImage: 'Иваново',
    linkImage: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    nameImage: 'Камчатка',
    linkImage: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    nameImage: 'Холмогорский район',
    linkImage: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    nameImage: 'Байкал',
    linkImage: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

//Данные для валидации
export const validationConfig = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible',
};

// Попапы
export const popupUserInfo = document.querySelector('.popup_type_edit-profile');
export const popupEditAvatar = document.querySelector('.popup_type_edit-avatar')
export const popupAddCard = document.querySelector('.popup_type_add-card');
export const popupDeleteCard = document.querySelector('.popup_type_delete-card');
export const popupViewCard = document.querySelector('.popup_type_card-view');

// Кнопки открытия попапов
export const openPopupUserInfo = document.querySelector('.profile__edit-button');
export const openPopupAddCard = document.querySelector('.profile__add-button');
export const openPopupEditAvatar = document.querySelector('.profile__edit-avatar');

// Формы
export const formPopupUserInfo = popupUserInfo.querySelector('.popup__form_type_profile');
export const formPopupEditAvatar = popupEditAvatar.querySelector('.popup__form_type_edit-avatar');
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

