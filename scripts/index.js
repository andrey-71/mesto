// Попап
let popup = document.querySelector(".popup");
// Кнопки открыть/закрыть
let popupOn = document.querySelector(".profile__edit-button");
let popupOff = document.querySelector(".popup__close");
// Поля с данными в профиле
let nameProfile = document.querySelector(".profile__name");
let jobProfile = document.querySelector(".profile__job");
// Поля формы
let nameInput = document.querySelector("#popup__name");
let jobInput = document.querySelector("#popup__job");
// Кнопка сохранить
let saveButton = document.querySelector(".popup__save-button");

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

saveButton.addEventListener("click", saveProfileData);
