// Попапы
let popupProfile = document.querySelector("#popup-edit-profile");
let popupCard = document.querySelector("#popup-add-card");
// Кнопки открыть/закрыть
let popupProfileOn = document.querySelector(".profile__edit-button");
let popupProfileOff = popupProfile.querySelector(".popup__close_type_profile");
let popupCardOn = document.querySelector(".profile__add-button");
let popupCardOff = popupCard.querySelector(".popup__close_type_card");
// Кнопка лайка
let like = document.querySelector(".photo__heart");
//Формы
let popupFormEditProfile = popupProfile.querySelector(
  ".popup__form_type_profile"
);
// Поля с данными в профиле
let nameProfile = document.querySelector(".profile__name");
let jobProfile = document.querySelector(".profile__job");
// Поля формы редактирования профиля
let nameProfileInput = popupProfile.querySelector(
  ".popup__input_type_profile-name"
);
let jobProfileInput = popupProfile.querySelector(
  ".popup__input_type_profile-job"
);

// Открытие с записью/закрытие edit-profile
function togglePopupProfile() {
  popupProfile.classList.toggle("popup_type_edit-profile");

  if (popupProfile.classList.contains("popup_type_edit-profile")) {
    nameProfileInput.value = nameProfile.textContent;
    jobProfileInput.value = jobProfile.textContent;
  }
}

popupProfileOn.addEventListener("click", togglePopupProfile);
popupProfileOff.addEventListener("click", togglePopupProfile);

// Отправка формы из edit-profile с сохранением результата в профиль
function saveProfileData(evt) {
  evt.preventDefault();

  nameProfile.textContent = nameProfileInput.value;
  jobProfile.textContent = jobProfileInput.value;
  togglePopupProfile();
}

popupFormEditProfile.addEventListener("submit", saveProfileData);

// Открытие/закрытие add-card
function togglePopupCard() {
  popupCard.classList.toggle("popup_type_add-card");
}

popupCardOn.addEventListener("click", togglePopupCard);
popupCardOff.addEventListener("click", togglePopupCard);

// Лайк фотографии
function togglePhotoLike() {
  like.classList.toggle("photo__heart_active");
}

like.addEventListener("click", togglePhotoLike);

