import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
import {initialCards} from './initial-cards.js';

// Попапы
const popupProfile = document.querySelector(".popup_type_edit-profile");
const popupAddCard = document.querySelector(".popup_type_add-card");
const popupViewCard = document.querySelector(".popup_type_card-view");
// Массив всех popup'ов
const popupList = Array.from(document.querySelectorAll(".popup"));
// Кнопки открыть/закрыть
const popupProfileOn = document.querySelector(".profile__edit-button");
const popupProfileOff = popupProfile.querySelector(".popup__close_type_profile");
const popupAddCardOn = document.querySelector(".profile__add-button");
const popupAddCardOff = popupAddCard.querySelector(".popup__close_type_card");
const popupViewCardOff = popupViewCard.querySelector(".popup__close_type_card-view");
// Формы
const formPopupEditProfile = popupProfile.querySelector(".popup__form_type_profile");
const formPopupAddCards = popupAddCard.querySelector(".popup__form_type_card");
// Инпуты из формы добавления карточки
const addCardFormName = formPopupAddCards.querySelector(".popup__input_type_card-name");
const addCardFormLink = formPopupAddCards.querySelector(".popup__input_type_card-link");
// Данные из профиля
const nameProfile = document.querySelector(".profile__name");
const jobProfile = document.querySelector(".profile__job");
// Поля формы редактирования профиля
const nameProfileInput = popupProfile.querySelector(".popup__input_type_profile-name");
const jobProfileInput = popupProfile.querySelector(".popup__input_type_profile-job");
// Template
const cardTemplate = document.querySelector("#card-template").content;
// HTML-контейнер с карточками
const cardsElement = document.querySelector(".card-gallery");
//Данные для валидации
const validationConfig = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_visible",
};


// Функция открытия/закрытия popup'ов
const openPopup = (popup) => {
  document.addEventListener("keydown", closeEscPopup);
  popup.classList.add("popup_active");
};
const closePopup = (popup) => {
  document.removeEventListener("keydown", closeEscPopup);
  popup.classList.remove("popup_active");
};

// Функция закрытия popup'а при нажатии на Esc
const closeEscPopup = (evt) => {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_active"));
  }
};

// Функция закрытия popup'а для слушателя клика на overlay
const closeOverlayPopup = (event) => {
  if (event.currentTarget === event.target) {
    closePopup(event.currentTarget);
  }
};

// Функция отправки формы из edit-profile с сохранением результата в профиль
const saveProfileData = (evt) => {
  evt.preventDefault();
  nameProfile.textContent = nameProfileInput.value;
  jobProfile.textContent = jobProfileInput.value;
  closePopup(popupProfile);
};

//Функция добавления карточек из массива на страницу
const addCard = (cardSelector, dataCard) => {
  const card = new Card(cardSelector, dataCard);
  cardsElement.prepend(card.createCard);
};

// Функция открытия фотографии карточки
export const openPopupViewCard = () => {
  openPopup(popupViewCard);
}

//Функция добавления карточек из формы на страницу
const addCardFromForm = (evt) => {
  evt.preventDefault();
  addCard(cardTemplate, {
    name: addCardFormName.value,
    link: addCardFormLink.value,
  });
  formPopupAddCards.reset();
  validatorFormAddCards.resetValidation();
  closePopup(popupAddCard);
};

// Слушатель клика для открытия/закрытия popup'ов:
// - редактирования профиля
popupProfileOn.addEventListener("click", () => {
  nameProfileInput.value = nameProfile.textContent;
  jobProfileInput.value = jobProfile.textContent;
  openPopup(popupProfile);
  validatorFormEditProfile.resetValidation();
});
popupProfileOff.addEventListener("click", () => closePopup(popupProfile));
// - добавления карточек
popupAddCardOn.addEventListener("click", () => openPopup(popupAddCard));
popupAddCardOff.addEventListener("click", () => closePopup(popupAddCard));
// - просмотра фотографии карточки (только закрытие popup'а, слушатель открытия - внутри createCard)
popupViewCardOff.addEventListener("click", () => closePopup(popupViewCard));

// Установка слушателей клика на overlay
popupList.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    closeOverlayPopup(evt);
  });
});

// Обработчик события для формы редактирования профиля
formPopupEditProfile.addEventListener("submit", (evt) => {
  saveProfileData(evt);
});

// Обработчик события для формы добавления карточек
formPopupAddCards.addEventListener("submit", (evt) => {
  addCardFromForm(evt);
});

// Добавление карточек на страницу
initialCards.forEach((initialCard) => {
  addCard(cardTemplate, initialCard);
  // openPopupViewCard();
});

const validatorFormEditProfile = new FormValidator(validationConfig, formPopupEditProfile);
const validatorFormAddCards = new FormValidator(validationConfig, formPopupAddCards);
validatorFormEditProfile.enableValidation();
validatorFormAddCards.enableValidation();
