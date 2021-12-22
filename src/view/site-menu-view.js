import {createElement} from '../render.js';

const createSiteMenuTemplate = () => (
  `<nav class="main-navigation">
    <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item">All movies</a>
      <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
      <a href="#history" class="main-navigation__item main-navigation__item--active">History <span class="main-navigation__item-count">4</span></a>
      <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
    </div>
  <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`
);

export default class SiteMenuView {
  #element = null;

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
      // console.log(this.#element);
    }
    return this.#element;
  }

  get template() {
    return createSiteMenuTemplate();
  }

  removeElement() {
    this.#element = null;
  }
}
