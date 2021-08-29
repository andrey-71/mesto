// Попапы
const popupProfile = document.querySelector("#popup-edit-profile");
const popupAddCard = document.querySelector("#popup-add-card");
// Кнопки открыть/закрыть
const popupProfileOn = document.querySelector(".profile__edit-button");
const popupProfileOff = popupProfile.querySelector(
  ".popup__close_type_profile"
);
const popupAddCardOn = document.querySelector(".profile__add-button");
const popupAddCardOff = popupAddCard.querySelector(".popup__close_type_card");
//Формы
const popupFormEditProfile = popupProfile.querySelector(
  ".popup__form_type_profile"
);
const popupFormAddCards = popupAddCard.querySelector('.popup__form_type_card');

//Открытие/закрытие popup'ов
const togglePopup = (popup) => popup.classList.toggle("popup_active");
// Обработчики событий на popup'ах
popupProfileOn.addEventListener("click", () => {
  togglePopup(popupProfile);
  if (popupProfile.classList.contains("popup_active")) {
    nameProfileInput.value = nameProfile.textContent;
    jobProfileInput.value = jobProfile.textContent;
  }
});
popupProfileOff.addEventListener("click", () => togglePopup(popupProfile));
popupAddCardOn.addEventListener("click", () => togglePopup(popupAddCard));
popupAddCardOff.addEventListener("click", () => togglePopup(popupAddCard));

// Поля с данными в профиле
const nameProfile = document.querySelector(".profile__name");
const jobProfile = document.querySelector(".profile__job");
// Поля формы редактирования профиля
const nameProfileInput = popupProfile.querySelector(
  ".popup__input_type_profile-name"
);
const jobProfileInput = popupProfile.querySelector(
  ".popup__input_type_profile-job"
);

// Отправка формы из edit-profile с сохранением результата в профиль
const saveProfileData = (evt) => {
  evt.preventDefault();

  nameProfile.textContent = nameProfileInput.value;
  jobProfile.textContent = jobProfileInput.value;
  togglePopup(popupProfile);
}

popupFormEditProfile.addEventListener("submit", saveProfileData);


// Template card
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const cardTemplate = document.querySelector('#card-template').content;
const cardsElement = document.querySelector('.photo-gallery');
//Добавление карточек из массива
const addCard = (data) => {
  const cardElement = cardTemplate.querySelector('.photo').cloneNode(true);
  cardElement.querySelector('.photo__image').src = data.link;
  cardElement.querySelector('.photo__caption').textContent = data.name;
  cardElement.querySelector('.photo__image').alt = data.name;

  cardsElement.prepend(cardElement);
};

initialCards.forEach((card) => {
  addCard(card);
});

//Добавление карточек из формы
const addCardFromForm = (evt) => {
  const addCardFormName = popupAddCard.querySelector('.popup__input_type_card-name').value;
  const addCardFormLink = popupAddCard.querySelector('.popup__input_type_card-link').value;
  console.log(addCardFormName);
  console.log(addCardFormLink);
  evt.preventDefault();

  addCard({
    name: addCardFormName,
    link: addCardFormLink
  });

  popupFormAddCards.reset();
  togglePopup(popupAddCard);
}
popupFormAddCards.addEventListener("submit", addCardFromForm);








// Кнопка лайка
const like = document.querySelector(".photo__heart");

// Лайк фотографии - ПЕРЕДЕЛАТЬ ВКЛ/ВЫКЛ НА РАЗНЫЕ ФУНКЦИИ
// function togglePhotoLike() {
//   like.classList.toggle("photo__heart_active");
// }

// like.addEventListener("click", togglePhotoLike);




