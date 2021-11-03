import Popup from './Popup.js';

export default class PopupWithDeleteCard extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._submitForm = () => true;
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
