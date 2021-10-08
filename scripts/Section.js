export default class Section {
  constructor({items, renderer}, cardsSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._cardSelector = cardsSelector;
  }

  addItem(element) {
    this._cardSelector.prepend(element);
  }

  setItem() {
    this._renderedItems.forEach(item => {
      this._renderer(item);
    });
  }
}
