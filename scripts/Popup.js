export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._closeButton = this._popupSelector.querySelector('.popup__close');
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  _handleOverlayClose(evt) {
    if (this._popupSelector === evt.target) {
      this.close();
    }
  }

  setEventListeners() {
    this._closeButton.addEventListener('click', () => {
      this.close();
    });
    document.addEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    });
    this._popupSelector.addEventListener('mousedown', (evt) => {
      this._handleOverlayClose(evt);
    });
  }

  _removeEventListeners() {
    this._closeButton.removeEventListener('click', () => {
      this.close();
    });
    document.removeEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    });
    this._popupSelector.removeEventListener('mousedown', (evt) => {
      this._handleOverlayClose(evt);
    });
  }

  open() {
    this.setEventListeners();
    this._popupSelector.classList.add("popup_active");
  }

  close() {
    this._removeEventListeners();
    this._popupSelector.classList.remove("popup_active");
  }
}
