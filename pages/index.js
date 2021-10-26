import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

import {
  initialCards,
  popupUserInfo,
  popupAddCard,
  popupViewCard,
  openPopupUserInfo,
  openPopupAddCard,
  formPopupUserInfo,
  formPopupAddCards,
  nameUserInfo,
  aboutUserInfo,
  nameUserInfoInput,
  aboutUserInfoInput,
  cardTemplate,
  cardsElement,
  validationConfig
} from '../utils/constants.js';


// Функция открытия попапа просмотра карточки
const handleCardClick = (evt) => {
  cardViewPopup.open(evt.target);
}

// Добавление карточек на страницу
const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(cardTemplate, item, handleCardClick);
    const cardElement = card.createCard();
    cardList.addItem(cardElement);
  }
}, cardsElement);

// Загрузка карточек на страницу
cardList.setItem();

//Создание новой карточки
const createNewCard = (data) => {
  const formCard = new Card(cardTemplate, {
    name: data.nameImage,
    link: data.linkImage
  });

  const formCardElement = formCard.createCard();
  cardList.addItem(formCardElement);
};


// Валидация формы профиля
const validatorFormEditProfile = new FormValidator(validationConfig, formPopupUserInfo);
validatorFormEditProfile.enableValidation();
// Валидация формы карточки
const validatorFormAddCards = new FormValidator(validationConfig, formPopupAddCards);
validatorFormAddCards.enableValidation();


// Данные пользователя
const userInfo = new UserInfo({
  name: nameUserInfo,
  info: aboutUserInfo
});


// Попап просмотра фотографии
const cardViewPopup = new PopupWithImage(popupViewCard);
// Попап редактирования профиля
const userInfoPopup = new PopupWithForm(popupUserInfo,
  function submitUserInfoForm(data) {
    userInfo.setUserInfo(data);
  });
// Попап добавления карточки
const addCardPopup = new PopupWithForm(popupAddCard,
  function submitAddCardForm(data) {
    createNewCard(data);
  });


// Обработчики события для попапов:
// - редактирования профиля
openPopupUserInfo.addEventListener('click', () => {
  nameUserInfoInput.value = userInfo.getUserInfo().name;
  aboutUserInfoInput.value = userInfo.getUserInfo().info;
  validatorFormEditProfile.resetValidation();
  userInfoPopup.open();
});
// - добавления карточки
openPopupAddCard.addEventListener('click', () => {
  validatorFormAddCards.resetValidation();
  addCardPopup.open();
});

// Установка обработчиков на попапы
cardViewPopup.setEventListeners();
userInfoPopup.setEventListeners();
addCardPopup.setEventListeners();
