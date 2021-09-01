// Попапы
const popupProfile = document.querySelector("#popup-edit-profile");
const popupAddCard = document.querySelector("#popup-add-card");
const popupViewCard = document.querySelector("#popup-card-view");
// Кнопки открыть/закрыть
const popupProfileOn = document.querySelector(".profile__edit-button");
const popupProfileOff = popupProfile.querySelector(".popup__close_type_profile");
const popupAddCardOn = document.querySelector(".profile__add-button");
const popupAddCardOff = popupAddCard.querySelector(".popup__close_type_card");
const popupViewCardOff = popupViewCard.querySelector(".popup__close_type_card-view");
// Формы
const popupFormEditProfile = popupProfile.querySelector(".popup__form_type_profile");
const popupFormAddCards = popupAddCard.querySelector(".popup__form_type_card");
// Данные из профиля
const nameProfile = document.querySelector(".profile__name");
const jobProfile = document.querySelector(".profile__job");
// Поля формы редактирования профиля
const nameProfileInput = popupProfile.querySelector(".popup__input_type_profile-name");
const jobProfileInput = popupProfile.querySelector(".popup__input_type_profile-job");

// Открытие/закрытие popup'ов
const togglePopup = (popup) => popup.classList.toggle("popup_active");

// Слушатель клика для открытия/закрытия popup'ов:
// - редактирования рофиля
popupProfileOn.addEventListener("click", () => {
  togglePopup(popupProfile);
  if (popupProfile.classList.contains("popup_active")) {
    nameProfileInput.value = nameProfile.textContent;
    jobProfileInput.value = jobProfile.textContent;
  }
});
popupProfileOff.addEventListener("click", () => togglePopup(popupProfile));
// - добавления карточек
popupAddCardOn.addEventListener("click", () => togglePopup(popupAddCard));
popupAddCardOff.addEventListener("click", () => togglePopup(popupAddCard));
// - просмотра фотографии карточки (только закрытие popup'а, открытие - внутри addCard)
popupViewCardOff.addEventListener("click", () => togglePopup(popupViewCard));

// Отправка формы из edit-profile с сохранением результата в профиль
const saveProfileData = (evt) => {
  evt.preventDefault();
  nameProfile.textContent = nameProfileInput.value;
  jobProfile.textContent = jobProfileInput.value;
  togglePopup(popupProfile);
};
// Обработчик события для формы редактирования профиля
popupFormEditProfile.addEventListener("submit", saveProfileData);

// Template
const cardTemplate = document.querySelector("#card-template").content;
// Контейнер с карточками
const cardsElement = document.querySelector(".card-gallery");

//Добавление карточек из массива на страницу
const addCard = (data) => {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__image").src = data.link;
  cardElement.querySelector(".card__caption").textContent = data.name;
  cardElement.querySelector(".card__image").alt = data.name;
  //Обработчики событий
  cardElement.querySelector(".card__image").addEventListener("click", () => {
    OpenPopupViewCard(data);
  });
  cardElement.querySelector(".card__delete").addEventListener("click", removeCard);
  cardElement.querySelector(".card__heart").addEventListener("click", addLikeCard);

  cardsElement.prepend(cardElement);
};

// Функция открытия фотографии карточки
const OpenPopupViewCard = (data) => {
  togglePopup(popupViewCard);
  popupViewCard.querySelector(".popup__card-view-photo").src = data.link;
  popupViewCard.querySelector(".popup__card-view-caption").textContent = data.name;
  popupViewCard.querySelector(".popup__card-view-photo").alt = data.name;
};
// Функция удаления карточки
const removeCard = (evt) => {
  evt.target.closest(".card").remove();
};
// Функция для лайка
const addLikeCard = (evt) => {
  evt.target.closest(".card__heart").classList.toggle("card__heart_active");
};

//Добавление карточек из формы на страницу
const addCardFromForm = (evt) => {
  evt.preventDefault();
  const addCardFormName = popupAddCard.querySelector(".popup__input_type_card-name").value;
  const addCardFormLink = popupAddCard.querySelector(".popup__input_type_card-link").value;
  addCard({
    name: addCardFormName,
    link: addCardFormLink,
  });

  popupFormAddCards.reset();
  togglePopup(popupAddCard);
};
// Обработчик события для формы добавления карточек
popupFormAddCards.addEventListener("submit", addCardFromForm);

// Перебор массива
initialCards.forEach((card) => {
  addCard(card);
});
