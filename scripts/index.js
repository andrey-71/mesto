let container = document.querySelector(".content");
// Попап
let popUp = container.querySelector(".popup");
// Поля формы
let nameInput = container.querySelector('.popup__name');
let jobInput = container.querySelector('.popup__job');
// Сохранить
let saveButton = container.querySelector('.popup__save-button');
// Поля с данными в профиле
let nameProfile = container.querySelector('.profile__name');
let jobProfile = container.querySelector('.profile__job');
// Открыть - закрыть
let editButtonOn = container.querySelector(".profile__edit-button");
let editButtonOff = container.querySelector(".popup__close");


// Отправка формы - ШО С ЭТИМ ДЕЛАТЬ?--------
function formSubmitHandler(evt) {
  evt.preventDefault();

}
//-------------------------------------------


popUp.addEventListener('submit', formSubmitHandler);

// Открытие POPUP
function editProfileOn() {
  popUp.classList.add("popup_active");

  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

editButtonOn.addEventListener("click", editProfileOn);

// Cохранение результата
function saveEditProfile() {
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  editProfileOff();
}

saveButton.addEventListener('click', saveEditProfile);

// Закрытие POPUP
function editProfileOff() {
  popUp.classList.remove("popup_active");
}

editButtonOff.addEventListener("click", editProfileOff);

// Закрытие POPUP через ESC
container.addEventListener('keydown', function(e) {
  if (e.keyCode === 27) {
    editProfileOff();
  }
});
