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

//Формы
const popupFormEditProfile = popupProfile.querySelector(
  ".popup__form_type_profile"
);
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
function saveProfileData(evt) {
  evt.preventDefault();

  nameProfile.textContent = nameProfileInput.value;
  jobProfile.textContent = jobProfileInput.value;
  togglePopup(popupProfile);
}

popupFormEditProfile.addEventListener("submit", saveProfileData);



// Кнопка лайка
const like = document.querySelector(".photo__heart");

// Лайк фотографии - ПЕРЕДЕЛАТЬ ВКЛ/ВЫКЛ НА РАЗНЫЕ ФУНКЦИИ
function togglePhotoLike() {
  like.classList.toggle("photo__heart_active");
}

like.addEventListener("click", togglePhotoLike);




