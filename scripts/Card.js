export class Card {
  constructor(cardSelector, dataCard) {
    this._cardSelector = cardSelector;
    this._dataCard = dataCard;
  }

  _setPopupData() {
    const popupViewCard = document.querySelector(".popup_type_card-view");
    popupViewCard.querySelector(".popup__card-view-photo").src =
      this._dataCard.link;
    popupViewCard.querySelector(".popup__card-view-caption").textContent =
      this._dataCard.name;
    popupViewCard.querySelector(".popup__card-view-photo").alt =
      this._dataCard.name;
  }

  _removeCard(evt) {
    evt.target.closest(".card").remove();
  }

  _toggleLikeCard(evt) {
    evt.target.classList.toggle("card__heart_active");
  }

  _generateCard() {
    const cardElement = this._cardSelector.querySelector(".card").cloneNode(true);
    cardElement.querySelector(".card__image").src = this._dataCard.link;
    cardElement.querySelector(".card__caption").textContent = this._dataCard.name;
    cardElement.querySelector(".card__image").alt = this._dataCard.name;
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

