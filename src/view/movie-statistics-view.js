import AbstractView from './abstract-view.js';

const createMovieStatisticTemplate = () => (
  `<p>130 291 movies inside</p>
  `
);

export default class MovieStatisticView extends AbstractView {
  get template() {
    return createMovieStatisticTemplate();
  }
}
