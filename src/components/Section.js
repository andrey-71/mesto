export default class Section {
  constructor({items, renderer}, cardsSelector) {
    this._renderer = renderer;
    this._cardSelector = cardsSelector;
  }

  // Добавление карточки
  addItem(element) {
    this._cardSelector.prepend(element);
  }

  // Создание карточек
  renderItems(data) {
    data.reverse().forEach(item => {
      this._renderer(item);
    });
  }
}
