export default class FormValidator {
  constructor(config, formElement) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement
      .querySelectorAll(this._inputSelector));
  }

  // Показать текст ошибки валидации
  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = inputElement.validationMessage;
  }

  // Скрыть текст ошибки валидации
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }

  // Проверка условия для переключения состояния текста ошибки валидации
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  // Проверка инпутов на валидацию
  _hasInvalidInput() {
    const inputList = Array.from(this._formElement
      .querySelectorAll(this._inputSelector));
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  // Установка неактивной кнопки
  _disableSubmitButton() {
    const button = this._formElement
      .querySelector(this._submitButtonSelector);
    button.classList.add(this._inactiveButtonClass);
    button.disabled = true;
  }

  // Установка активной кнопки
  _enableSubmitButton() {
    const button = this._formElement
      .querySelector(this._submitButtonSelector);
    button.classList.remove(this._inactiveButtonClass);
    button.disabled = false;
  }

  // Переключение состояния кнопки
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disableSubmitButton();
    } else {
      this._enableSubmitButton();
    }
  }

  // Переключение состояния кнопки и установка слушателя на инпуты
  _setEventListeners() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  // Сброс ошибок валидации при открытии попапов и изменение соостояния кнопки
  resetValidation() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });

    this._toggleButtonState();
  }

  enableValidation() {
    this._setEventListeners();
  }
}