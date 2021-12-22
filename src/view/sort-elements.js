import {createElement} from '../render.js';

const createSortElements = () => (
  `<ul class="sort">
    <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button">Sort by rating</a></li>
  </ul>`
);

export default class SortElements {
  #element = null;

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
      // console.log(this.#element);
    }
    return this.#element;
  }

  get template() {
    return createSortElements();
  }

  removeElement() {
    this.#element = null;
  }
}
