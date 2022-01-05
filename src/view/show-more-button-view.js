import AbstractView from './abstract-view.js';

const createShowMoreButtonTemplate = () => (
  `<button class="films-list__show-more">Show more</button>
  `
);

export default class MovieStatisticView extends AbstractView {
  get template() {
    return createShowMoreButtonTemplate();
  }

  setClickHandler = (cb) => {
    this._callback.editClick = cb;
    this.element.addEventListener('click', this.#editClickHandler);
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.editClick();
  }
}
