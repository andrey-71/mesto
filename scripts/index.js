let container = document.querySelector(".content");
// Попап
let popup = container.querySelector(".popup");
// Открыть - закрыть
let popupOn = container.querySelector(".profile__edit-button");
let popupOff = container.querySelector(".popup__close");
// Поля с данными в профиле
let nameProfile = container.querySelector(".profile__name");
let jobProfile = container.querySelector(".profile__job");
// Поля формы
let nameInput = container.querySelector(".popup__name");
let jobInput = container.querySelector(".popup__job");
// Сохранить
let saveButton = container.querySelector(".popup__save-button");


// Открытие с записью/закрытие POPUP
function togglePopup() {
  popup.classList.toggle("popup_active");

  if (popup.classList.contains('popup_active')) {
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


// Закрытие POPUP через ESC
// container.addEventListener("keydown", function (e) {
//   if (e.keyCode === 27) {
//     togglePopup();
//   }
// });


