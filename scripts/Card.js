import {openPopupViewCard, setPopupData} from "./index.js";

export class Card {
  constructor(cardSelector, dataCard) {
    this._cardSelector = cardSelector;
    this._name = dataCard.name;
    this._link = dataCard.link;
  }

  // Удаление карточки со траницы
  _removeCard(evt) {
    evt.target.closest(".card").remove();
  }

  // Лайк на карточке
  _toggleLikeCard(evt) {
    evt.target.classList.toggle("card__heart_active");
  }

  // Добавление обработчиков событий для карточек
  _addEventListeners(cardElement) {
    cardElement.querySelector(".card__image")
      .addEventListener("click", (evt) => {
        setPopupData(evt.target);
        openPopupViewCard();
      });
    cardElement.querySelector(".card__delete")
      .addEventListener("click", this._removeCard);
    cardElement.querySelector(".card__heart")
      .addEventListener("click", this._toggleLikeCard);
  }

  // Перенос данных из карточек на страницу
  _generateCard() {
    const cardElement = this._cardSelector.querySelector(".card").cloneNode(true);
    cardElement.querySelector(".card__image").src = this._link;
    cardElement.querySelector(".card__caption").textContent = this._name;
    cardElement.querySelector(".card__image").alt = this._name;
    this._addEventListeners(cardElement);

    return cardElement;
  }

  get createCard() {
    return this._generateCard();
  }
}


