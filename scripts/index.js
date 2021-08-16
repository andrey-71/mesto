// Попап
let popup = document.querySelector(".popup");
// Кнопки открыть/закрыть
let popupOn = document.querySelector(".profile__edit-button");
let popupOff = document.querySelector(".popup__close");
//Форма
let popupForm = popup.querySelector(".popup__form");
// Поля с данными в профиле
let nameProfile = document.querySelector(".profile__name");
let jobProfile = document.querySelector(".profile__job");
// Поля формы
let nameInput = popup.querySelector("#popup__name");
let jobInput = popup.querySelector("#popup__job");

// Открытие с записью/закрытие POPUP
function togglePopup() {
  popup.classList.toggle("popup_active");

  if (popup.classList.contains("popup_active")) {
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
  }
}

popupOn.addEventListener("click", togglePopup);
popupOff.addEventListener("click", togglePopup);

// Отправка формы с сохранением результата в профиль
function saveProfileData(evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  togglePopup();
}

popupForm.addEventListener("submit", saveProfileData);
