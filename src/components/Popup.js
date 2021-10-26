export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._closeButton = this._popupSelector.querySelector('.popup__close');
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleOverlayClose = this._handleOverlayClose.bind(this);
    this.close = this.close.bind(this);
  }

  // Закртыие попапа при нажатии Esc
  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  // Закртыие попапа при клике на overlay
  _handleOverlayClose(evt) {
    if (this._popupSelector === evt.target) {
      this.close();
    }
  }

  // Обработчик для закрытия попапа
  setEventListeners() {
    this._closeButton.addEventListener('click', this.close);
  }

  // Открытие попапа с установкой слушателей
  open() {
    this._popupSelector.classList.add('popup_active');
    document.addEventListener('keyup', this._handleEscClose);
    this._popupSelector.addEventListener('mousedown', this._handleOverlayClose);
  }

  // Закрытие попапа со снятием слушателей
  close() {
    this._popupSelector.classList.remove('popup_active');
    document.removeEventListener('keyup', this._handleEscClose);
    this._popupSelector.removeEventListener('mousedown', this._handleOverlayClose);
  }
}
