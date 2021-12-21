import {createElement} from '../render.js';

export const createFilmContainer = () => (
  `
  <div class="films-list__container">
  </div>
  `
);

export default class FilmContainerView {
  #element = null;

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {
    return createFilmContainer();
  }

  removeElement() {
    this.#element = null;
  }
}
