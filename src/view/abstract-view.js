
import {createElement} from '../../src/render.js';
export default class AbstractView {
  #element = null;

  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Can  not create abstract class ${new.target}`);
    }
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {
    throw new Error('Abstract method not implemented: get template');
  }

  removeElement() {
    this.#element = null;
  }
}
