export default class Card {
  constructor(cardSelector, dataCard, handleCardClick, {handleDeleteCard}) {
    this._cardSelector = cardSelector;
    this._name = dataCard.name;
    this._link = dataCard.link;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._card = this._cardSelector.querySelector('.card').cloneNode(true);
    this.removeCard = this.removeCard.bind(this);
  }

  // Удаление карточки со страницы
  removeCard() {
    this._card.remove();
    this._card = null;
  }

  // Лайк на карточке
  _toggleLikeCard(evt) {
    evt.target.classList.toggle('card__like_active');
  }

  // Добавление обработчиков событий для карточек
  _addEventListeners(cardElement) {
    cardElement.querySelector('.card__image')
      .addEventListener('click', (evt) => {
        this._handleCardClick(evt);
      });
     cardElement.querySelector('.card__delete')
       .addEventListener('click', this._handleDeleteCard);
    cardElement.querySelector('.card__like')
      .addEventListener('click', this._toggleLikeCard);
  }

  // Перенос данных из карточек на страницу
  _generateCard() {
    this._card.querySelector('.card__image').src = this._link;
    this._card.querySelector('.card__caption').textContent = this._name;
    this._card.querySelector('.card__image').alt = this._name;
    this._addEventListeners(this._card);
    return this._card;
  }

  createCard() {
    return this._generateCard();
  }
}


