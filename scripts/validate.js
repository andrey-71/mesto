// Функция, показывающая текст ошибки валидации
const checkInputValidity(/* ... */) {

}

// Функция, скрывающая текст ошибки валидации
const checkInputValidity(/* ... */) {

}


// Функция для включения/выключения показа текста ошибки валидации
const checkInputValidity = (inputElement /* ... */) => {
  if (!inputElement.validity.valid) {
    showInputError(/* ... */);
  } else {
  hideInputError(/* ... */);
  }
};

// Неактивная кнопка
const disableSubmitButton = (button, inactiveButtonClass) => {
  button.classList.add(inactiveButtonClass);
  button.disabled = true;
}
// Активная кнопка
const enableSubmitButton = (button, inactiveButtonClass) => {
  button.classList.remove(inactiveButtonClass);
  button.disabled = false;
}


// Функция для проверки инпутов на валидацию
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

// Функция для включения/выключения неактивной кнопки
const toggleButtonState = (
  formElement,
  inputList,
  buttonElement,
  inactiveButtonClass
) => {
  const button = formElement.querySelector(buttonElement);
  if (hasInvalidInput(inputList)) {
    disableSubmitButton(button, inactiveButtonClass);
  } else {
    enableSubmitButton(button, inactiveButtonClass);
  }
};

// Функция для установки слушателя на инпуты
const setEventListeners = (
  formElement,
  inputSelector,
  buttonElement,
  inactiveButtonClass /* ... */
) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  toggleButtonState(
    formElement,
    inputList,
    buttonElement,
    inactiveButtonClass
  );
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(inputElement /* ... */);
      toggleButtonState(
        formElement,
        inputList,
        buttonElement,
        inactiveButtonClass
      );
    });
  });
};

// Функция проверки всех форм на валидацию
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(
      formElement,
      config.inputSelector,
      config.submitButtonSelector,
      config.inactiveButtonClass /* ... */
    );
  });
};

// Запуск валидации
// enableValidation({
//   formSelector: ".popup__form",
//   inputSelector: ".popup__input",
//   submitButtonSelector: ".popup__save-button",
//   inactiveButtonClass: "popup__save-button_disabled",
//   inputErrorClass: "popup__input_type_error",
//   errorClass: "popup__input-error_visible",
// });

