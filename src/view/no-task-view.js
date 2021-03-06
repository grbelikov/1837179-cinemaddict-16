import AbstractView from './abstract-view.js';

// Значение отображаемого текста зависит от выбранного фильтра:
//   * All movies – 'There are no movies in our database'
//   * Watchlist — 'There are no movies to watch now';
//   * History — 'There are no watched movies now';
//   * Favorites — 'There are no favorite movies now'.

const createNoTaskTemplate = () => (
  `<section class="films">
    <section class="films-list">
      <h2 class="films-list__title">There are no movies in our database</h2>
    </section>
  </section>`
);

export default class NoTaskView extends AbstractView {
  get template() {
    return createNoTaskTemplate();
  }
}
