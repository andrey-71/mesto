// Функция, показывающая текст ошибки валидации
const showInputError = (
  formElement,
  inputElement,
  inputErrorClass,
  errorClass
) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.classList.add(inputErrorClass);
  errorElement.classList.add(errorClass);
  errorElement.textContent = inputElement.validationMessage;
};

// Функция, скрывающая текст ошибки валидации
const hideInputError = (
  formElement,
  inputElement,
  inputErrorClass,
  errorClass
) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = inputElement.validationMessage;
};

// Функция для включения/выключения показа текста ошибки валидации
const checkInputValidity = (
  formElement,
  inputElement,
  inputErrorClass,
  errorClass
) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputErrorClass, errorClass);
  } else {
    hideInputError(formElement, inputElement, inputErrorClass, errorClass);
  }
};

// Неактивная кнопка
const disableSubmitButton = (button, inactiveButtonClass) => {
  button.classList.add(inactiveButtonClass);
  button.disabled = true;
};
// Активная кнопка
const enableSubmitButton = (button, inactiveButtonClass) => {
  button.classList.remove(inactiveButtonClass);
  button.disabled = false;
};

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
  inactiveButtonClass,
  inputErrorClass,
  errorClass /* ... */
) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  toggleButtonState(formElement, inputList, buttonElement, inactiveButtonClass);
  inputList.forEach((inputElement) => {
    checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
    inputElement.addEventListener("input", () => {
      checkInputValidity(
        formElement,
        inputElement,
        inputErrorClass,
        errorClass
      );
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
      config.inactiveButtonClass,
      config.inputErrorClass,
      config.errorClass
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
