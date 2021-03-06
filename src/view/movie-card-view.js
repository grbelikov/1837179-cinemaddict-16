import AbstractView from './abstract-view.js';

const createFilmCardTemplate = (objectCard) => {
  const {inWatchlist, isFavorite, isWatched} = objectCard;

  const inWatchlistClassName = inWatchlist
    ? 'film-card__controls-item film-card__controls-item--active'
    : 'film-card__controls-item';

  const favoriteClassName = isFavorite
    ? 'film-card__controls-item film-card__controls-item--active'
    : 'film-card__controls-item';

  const watchedClassName = isWatched
    ? 'film-card__controls-item film-card__controls-item--active'
    : 'film-card__controls-item';

  return `<article class="film-card">
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
    <button class="${inWatchlistClassName} film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
    <button class="${watchedClassName} film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
    <button class="${favoriteClassName} film-card__controls-item--favorite" type="button">Mark as favorite</button>
    </div>
  </article>`;
};

export default class FilmCardTemplate extends AbstractView {
  #card = null;

  constructor(card) {
    super();
    this.#card = card;
  }

  get template() {
    return createFilmCardTemplate(this.#card);
  }

  setClickHandler = (cb) => {
    this._callback.editClick = cb;
    this.element.querySelector('.film-card__link').addEventListener('click', this.#editClickHandler);
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.editClick();
  }

  // ???????????? ?????? ???????????????????? ???????????? ?? ???????????????? ?????? ??????????
  setClickAddToWatchList = (cb) => {
    this._callback.clickAddToWatchList = cb;
    this.element.querySelector('.film-card__controls-item--add-to-watchlist').addEventListener('click', this.#editClickAddToWatchList);
  }

  #editClickAddToWatchList = () => {
    this._callback.clickAddToWatchList();
  }

  // ???????????? ?????? ???????????????????? ???????????? ?? ?????????????????????????? ?????? ??????????
  setClickMarkAsWatched = (cb) => {
    this._callback.clickMarkAsWatched = cb;
    this.element.querySelector('.film-card__controls-item--mark-as-watched')
      .addEventListener('click', this.#editClickMarkAsWatched);
  }

  #editClickMarkAsWatched = () => {
    this._callback.clickMarkAsWatched();
  }

  // ???????????? ?????? ???????????????????? ???????????? ?? ?????????????? ?????? ??????????
  setClickAddToFavorite = (cb) => {
    this._callback.clickAddToFavorite = cb;
    this.element.querySelector('.film-card__controls-item--favorite')
      .addEventListener('click', this.#editClickAddToFavorite);
  }

  #editClickAddToFavorite = () => {
    this._callback.clickAddToFavorite();
  }
}
