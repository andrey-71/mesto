import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._cardImage = this._popup.querySelector('.popup__card-view-photo');
    this._cardCaption = this._popup.querySelector('.popup__card-view-caption');
  }

  // Открытие просмотра карточки с записью данных из карточки в окно просмотра
  open(cardElement) {
    this._cardImage.src = cardElement.link;
    this._cardImage.alt = cardElement.name;
    this._cardCaption.textContent = cardElement.name;
    super.open();
  }
}
