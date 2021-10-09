import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._cardImage = this._popupSelector.querySelector('.popup__card-view-photo');
    this._cardCaption = this._popupSelector.querySelector('.popup__card-view-caption');
  }

  open(cardElement) {
    this._cardImage.src = cardElement.src;
    this._cardImage.alt = cardElement.alt;
    this._cardCaption.textContent = cardElement.alt;
    super.open();
  }
}
