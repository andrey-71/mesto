export class Card {
  constructor(cardSelector, dataCard) {
    this._cardSelector = cardSelector;
    this._name = dataCard.name;
    this._link = dataCard.link;
  }

  // Перенос данных из карточки в попап просмотра фотографии карточки
  _setPopupData() {
    const popupViewCard = document.querySelector(".popup_type_card-view");
    popupViewCard.querySelector(".popup__card-view-photo").src =
      this._link;
    popupViewCard.querySelector(".popup__card-view-caption").textContent =
      this._name;
    popupViewCard.querySelector(".popup__card-view-photo").alt =
      this._name;
  }

  // Удаление карточки со траницы
  _removeCard(evt) {
    evt.target.closest(".card").remove();
  }

  // Лайк на карточке
  _toggleLikeCard(evt) {
    evt.target.classList.toggle("card__heart_active");
  }

  // Перенос данных из карточек на страницу, установка слушателей на карточки
  _generateCard() {
    const cardElement = this._cardSelector.querySelector(".card").cloneNode(true);
    cardElement.querySelector(".card__image").src = this._link;
    cardElement.querySelector(".card__caption").textContent = this._name;
    cardElement.querySelector(".card__image").alt = this._name;
    //Обработчики событий
    cardElement.querySelector(".card__image")
      .addEventListener("click", () => {
        this._setPopupData();
      });
    cardElement.querySelector(".card__delete")
      .addEventListener("click", this._removeCard);
    cardElement.querySelector(".card__heart")
      .addEventListener("click", this._toggleLikeCard);

    return cardElement;
  }

  get createCard() {
    return this._generateCard();
  }
}

