export default class Card {
  constructor(
    cardSelector,
    dataCard,
    userId,
    {
      handleCardClick,
      handleDeleteCard,
      addLike,
      removeLike
    })
  {
    this._cardSelector = cardSelector;
    this._dataCard = dataCard;
    this._userId = userId;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._putLike = addLike;
    this._deleteLike = removeLike;
    this._card = this._cardSelector.querySelector('.card').cloneNode(true);
    this._cardImage = this._card.querySelector('.card__image');
    this._cardCaption = this._card.querySelector('.card__caption');
    this._toggleStateLikeOnServer = this._toggleStateLikeOnServer.bind(this);
    this.removeCard = this.removeCard.bind(this);
  }

  // Переключение состояния лайка на странице
  toggleStateLikeOnClient() {
    this._card.querySelector('.card__like').classList.toggle('card__like_active');
  }


  // Переключение состояния лайка на сервере
  _toggleStateLikeOnServer() {
    if (this._card.querySelector('.card__like').classList.contains('card__like_active')) {
      this._removeLikeCard(this._dataCard);
    } else {
      this._addLikeCard(this._dataCard);
    }
  }


  // Поставить лайк
  _addLikeCard() {
    // this._card.querySelector('.card__like').classList.add('card__like_active');
    this._putLike();
  }
  // Снять лайк
  _removeLikeCard() {
    // this._card.querySelector('.card__like').classList.remove('card__like_active');
    this._deleteLike();
  }

  // Отрисовка активных лайков при загрузке страницы
  _setLikesCard() {
    this._dataCard.likes.forEach((like) => {
      if (like._id === this._userId) {
        this._card.querySelector('.card__like').classList.add('card__like_active');
      }
    });
  }
  // Отрисовка количества лайков на карточке при загрузке страницы
  setNumberLikes(data) {
    this._card.querySelector('.card__like-number').textContent = data.likes.length;
  }

  // Переключение видимости значка удаления на карточках
  _toggleVisibilityDeleteIcon() {
    if(this._userId !== this._dataCard.owner._id) {
      this._card.querySelector('.card__delete').style.display = 'none';
    }
  }
  // Удаление карточки со страницы
  removeCard() {
    this._card.remove();
    this._card = null;
  }

  // Добавление обработчиков событий для карточек
  _addEventListeners(cardElement) {
    cardElement.querySelector('.card__image')
      .addEventListener('click', this._handleCardClick);
     cardElement.querySelector('.card__delete')
       .addEventListener('click', this._handleDeleteCard);
    cardElement.querySelector('.card__like')
      .addEventListener('click', this._toggleStateLikeOnServer);
  }

  // Отрисовка карточек на странице
  _generateCard() {
    this._cardImage.src = this._dataCard.link;
    this._cardCaption.textContent = this._dataCard.name;
    this._cardImage.alt = this._dataCard.name;
    this._toggleVisibilityDeleteIcon();
    this._setLikesCard();
    this.setNumberLikes(this._dataCard);
    this._addEventListeners(this._card);
    return this._card;
  }

  createCard() {
    return this._generateCard();
  }
}


