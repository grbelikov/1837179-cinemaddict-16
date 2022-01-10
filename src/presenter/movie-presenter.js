import {calculateUserRating} from '../js/rangs.js';
import {render} from '../render.js';
import {DISPLAYED_CARDS_PER_STEP, RENDER_POSITIONS, ESC_KEYBUTTON} from '../js/consts.js';

import PopupView from '../view/popup-view.js';
import NoTaskView from '../view/no-task-view.js';
import UserRangView from '../view/user-rang-view.js';
import SiteMenuView from '../view/site-menu-view.js';
import SortElements from '../view/sort-elements.js';
import FilmCardTemplate from '../view/movie-card-view.js';
import FilmContainerView from '../view/film-container-view.js';
import MovieStatisticView from '../view/movie-statistics-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';

// import {createObjectsArray} from '../js';

export default class MovieListPresenter {
  #siteMainElement = null;

  #siteMenuComponent = new SiteMenuView();
  #sortComponent = new SortElements();
  #filmContainerComponent = new FilmContainerView();
  #noTaskComponent = new NoTaskView();
  // #showMoreButtonComponent = new ShowMoreButtonView();
  // #userRangComponent = new UserRangView(userRating);
  #movieStatisticComponent = new MovieStatisticView();

  #films = [];
  #userRating = '';

  constructor (siteMainElement) {
    this.#siteMainElement = siteMainElement;
  }

  init = (films) => {
    this.#films = [...films];
    this.#userRating = calculateUserRating(this.#films);
    this.#renderSiteMenu();
  }

  #renderSiteMenu = () => {
    render(this.#siteMainElement, this.#siteMenuComponent, RENDER_POSITIONS.BEFOREEND);
  }

  renderSort = () => {
    render(this.#siteMainElement, this.#sortComponent, RENDER_POSITIONS.BEFOREEND);
  }

  renderFilmContainer = () => {
    render(this.#siteMainElement, this.#filmContainerComponent, RENDER_POSITIONS.BEFOREEND);
  }

  renderNoTask = () => {
    render(this.#siteMainElement, this.#noTaskComponent, RENDER_POSITIONS.BEFOREEND);
  }

  #renderCard = () => {

  }

  #renderCards = () => {

  }

  #renderNoCards = () => {

  }

  renderShowMoreButton = (showMoreButtonComponent) => {
    render(this.#siteMainElement, showMoreButtonComponent, RENDER_POSITIONS.BEFOREEND);
  }

  #renderUserRating = () => {

  }

  #renderMovieStatistic = () => {

  }
}
