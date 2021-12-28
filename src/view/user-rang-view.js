import {createElement} from '../render.js';
import AbstractView from './abstract-view.js';

const createUserRankTemplate = (userRang) => (
  `<section class="header__profile profile">
      <p class="profile__rating">${userRang}</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`
);

export default class SiteMenuView {
  #element = null;
  #userRating = null;

  constructor(userRating) {
    this.#userRating = userRating;
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template() {
    return createUserRankTemplate(this.#userRating);
  }

  removeElement() {
    this.#element = null;
  }
}
