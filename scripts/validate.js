// Функция показывающая текст ошибки валидации
const showInputError = (
  formElement,
  inputElement,
  inputErrorClass,
  errorClass
) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.classList.add(errorClass);
  errorElement.textContent = inputElement.validationMessage;
};

// Функция скрывающая текст ошибки валидации
const hideInputError = (
  formElement,
  inputElement,
  inputErrorClass,
  errorClass
) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = "";
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

// Функция неактивной кнопки
const disableSubmitButton = (button, inactiveButtonClass) => {
  button.classList.add(inactiveButtonClass);
  button.disabled = true;
};
// Функция активной кнопки
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
  errorClass
) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  toggleButtonState(formElement, inputList, buttonElement, inactiveButtonClass);
  inputList.forEach((inputElement) => {
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

// Функция валидации всех форм
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

// Сброс ошибок валидации при открытии попапов и изменение соостояния кнопки
const resetValidation = (formElement, config) => {
  const inputList = Array.from(
    formElement.querySelectorAll(config.inputSelector)
  );
  inputList.forEach((inputElement) => {
    hideInputError(
      formElement,
      inputElement,
      config.inputErrorClass,
      config.errorClass
    );
  });
  toggleButtonState(
    formElement,
    inputList,
    config.submitButtonSelector,
    config.inactiveButtonClass
  );
};
