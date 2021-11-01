import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._formElement = this._popupSelector.querySelector('.popup__form');
  }

  // Закрытие попапа со сбросом формы
  close() {
    super.close();
    this._formElement.reset();
  }

  // Запись данных из инпутов формы
  _getInputValues() {
    const inputValuesForm = {};
    const inputList = Array.from(this._formElement.querySelectorAll('.popup__input'));
    inputList.forEach((inputElement) => {
      inputValuesForm[inputElement.name] = inputElement.value;
    });

    return inputValuesForm;
  }

  // Слушатель сабмита формы
  setEventListeners() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues());
      this.close();
    });
    super.setEventListeners();
  }
}
