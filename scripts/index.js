// Попапы
const popupProfile = document.querySelector(".popup_type_edit-profile");
const popupAddCard = document.querySelector(".popup_type_add-card");
const popupViewCard = document.querySelector(".popup_type_card-view");
// Массив всех popup'ов
const popupList = Array.from(document.querySelectorAll(".popup"));
// Кнопки открыть/закрыть
const popupProfileOn = document.querySelector(".profile__edit-button");
const popupProfileOff = popupProfile.querySelector(
  ".popup__close_type_profile"
);
const popupAddCardOn = document.querySelector(".profile__add-button");
const popupAddCardOff = popupAddCard.querySelector(".popup__close_type_card");
const popupViewCardOff = popupViewCard.querySelector(
  ".popup__close_type_card-view"
);
// Формы
const popupFormEditProfile = popupProfile.querySelector(
  ".popup__form_type_profile"
);
const popupFormAddCards = popupAddCard.querySelector(".popup__form_type_card");
// Данные из профиля
const nameProfile = document.querySelector(".profile__name");
const jobProfile = document.querySelector(".profile__job");
// Поля формы редактирования профиля
const nameProfileInput = popupProfile.querySelector(
  ".popup__input_type_profile-name"
);
const jobProfileInput = popupProfile.querySelector(
  ".popup__input_type_profile-job"
);
// Template
const cardTemplate = document.querySelector("#card-template").content;
// HTML-контейнер с карточками
const cardsElement = document.querySelector(".card-gallery");
//Данные для валидации
const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_visible",
};

// Функция открытия/закрытия popup'ов
const openPopup = (popup) => popup.classList.add("popup_active");
const closePopup = (popup) => popup.classList.remove("popup_active");

// Функция отправки формы из edit-profile с сохранением результата в профиль
const saveProfileData = (evt) => {
  evt.preventDefault();
  nameProfile.textContent = nameProfileInput.value;
  jobProfile.textContent = jobProfileInput.value;
  closePopup(popupProfile);
};

//Функция создания карточки
const createCard = (data) => {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__image").src = data.link;
  cardElement.querySelector(".card__caption").textContent = data.name;
  cardElement.querySelector(".card__image").alt = data.name;
  //Обработчики событий
  cardElement.querySelector(".card__image").addEventListener("click", () => {
    openPopupViewCard(data);
  });
  cardElement
    .querySelector(".card__delete")
    .addEventListener("click", removeCard);
  cardElement
    .querySelector(".card__heart")
    .addEventListener("click", addLikeCard);

  return cardElement;
};

//Функция добавления карточек из массива на страницу
const addCard = (card) => {
  cardsElement.prepend(createCard(card));
};

// Функция открытия фотографии карточки
const openPopupViewCard = (data) => {
  popupViewCard.querySelector(".popup__card-view-photo").src = data.link;
  popupViewCard.querySelector(".popup__card-view-caption").textContent =
    data.name;
  popupViewCard.querySelector(".popup__card-view-photo").alt = data.name;
  openPopup(popupViewCard);
};
// Функция удаления карточки
const removeCard = (evt) => {
  evt.target.closest(".card").remove();
};
// Функция для лайка
const addLikeCard = (evt) => {
  evt.target.closest(".card__heart").classList.toggle("card__heart_active");
};

//Функция добавления карточек из формы на страницу
const addCardFromForm = (evt) => {
  evt.preventDefault();
  const addCardFormName = popupAddCard.querySelector(
    ".popup__input_type_card-name"
  ).value;
  const addCardFormLink = popupAddCard.querySelector(
    ".popup__input_type_card-link"
  ).value;
  addCard({
    name: addCardFormName,
    link: addCardFormLink,
  });
  popupFormAddCards.reset();
  closePopup(popupAddCard);
};

// Слушатель клика для открытия/закрытия popup'ов:
// - редактирования профиля
popupProfileOn.addEventListener("click", () => {
  nameProfileInput.value = nameProfile.textContent;
  jobProfileInput.value = jobProfile.textContent;
  openPopup(popupProfile);
  enableValidation(validationConfig);
});
popupProfileOff.addEventListener("click", () => closePopup(popupProfile));
// - добавления карточек
popupAddCardOn.addEventListener("click", () => {
  openPopup(popupAddCard);
  enableValidation(validationConfig);
});
popupAddCardOff.addEventListener("click", () => closePopup(popupAddCard));
// - просмотра фотографии карточки (только закрытие popup'а, слушатель открытия - внутри createCard)
popupViewCardOff.addEventListener("click", () => closePopup(popupViewCard));

// Обработчик события для формы редактирования профиля
popupFormEditProfile.addEventListener("submit", (evt) => {
  saveProfileData(evt);
});

// Обработчик события для формы добавления карточек
popupFormAddCards.addEventListener("submit", (evt) => {
  addCardFromForm(evt);
  enableValidation(validationConfig);
});

// Добавление карточек на страницу
initialCards.forEach((card) => {
  addCard(card);
});

enableValidation(validationConfig);

// Перебор всех popup'ов
popupList.forEach((popup) => {
  // Закрытие popup'ов при нажатии на Esc
  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      closePopup(popup);
    }
  });
  // Закрытие popup'ов при клике на overlay
  popup.addEventListener("click", (evt) => {
    if (popup === evt.target) {
      closePopup(popup);
    }
  });
});
