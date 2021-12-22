import {createElement} from '../render.js';

const createFilmCardTemplate = (objectCard) => (
  `<article class="film-card">
      <a class="film-card__link">
        <h3 class="film-card__title">${objectCard.title}</h3>
        <p class="film-card__rating">${objectCard.rating}</p>
        <p class="film-card__info">
          <span class="film-card__year">${objectCard.year}</span>
          <span class="film-card__duration">${objectCard.duration}</span>
          <span class="film-card__genre">${objectCard.genres}</span>
        </p>
        <img src="${objectCard.poster}" alt="" class="film-card__poster">
        <p class="film-card__description">${objectCard.description}</p>
        <span class="film-card__comments">${objectCard.comments.length} comments</span>
      </a>
      <div class="film-card__controls">
        <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
        <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
        <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
      </div>
    </article>`
);

export default class SiteMenuView {
  #element = null;
  #card = null;

  constructor(card) {
    this.#card = card;
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template() {
    return createFilmCardTemplate(this.#card);
  }

  removeElement() {
    this.#element = null;
  }
}