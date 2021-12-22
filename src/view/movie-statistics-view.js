import {createElement} from '../render.js';

const createMovieStatisticTemplate = () => (
  `<p>130 291 movies inside</p>
  `
);

export default class MovieStatisticView {
  #element = null;

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {
    return createMovieStatisticTemplate();
  }

  removeElement() {
    this.#element = null;
  }
}
