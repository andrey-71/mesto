import Popup from './Popup.js';

export default class PopupWithDeleteCard extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popupSelector.querySelector('.popup__form');
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm();
    });
  }

  submitRequestDeleteCard(submitCallback) {
    this._submitForm = submitCallback;
  }
}
