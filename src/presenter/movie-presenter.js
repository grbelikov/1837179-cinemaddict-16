import {calculateUserRating} from './js/rangs.js';
import {render} from './render.js';
import {DISPLAYED_CARDS_PER_STEP, RENDER_POSITIONS, ESC_KEYBUTTON} from './js/consts.js';

import PopupView from './view/popup-view.js';
import NoTaskView from './view/no-task-view.js';
import UserRangView from './view/user-rang-view.js';
import SiteMenuView from './view/site-menu-view.js';
import SortElements from './view/sort-elements.js';
import FilmCardTemplate from './view/movie-card-view.js';
import FilmContainerView from './view/film-container-view.js';
import MovieStatisticView from './view/movie-statistics-view.js';
import ShowMoreButtonView from './view/show-more-button-view.js';

import {createObjectsArray} from '../src/mock/card.js';


export default class MovieListPresenter {
  #movieContainer = null;

  #siteMenuComponent = new SiteMenuView();
  #sortComponent = new SortElements();
  #filmContainerComponent = new FilmContainerView();
  #noTaskComponent = new NoTaskView();
  #showMoreButtonComponent = new ShowMoreButtonView();
  // #userRangComponent = new UserRangView(userRating);
  #movieStatisticComponent = new MovieStatisticView();

  #cardsList = [];

  constructor taskContainer(movieContainer) {
    this.#movieContainer = movieContainer;
  }

  init = (cardsList) => {
    this.#cardsList = [...cardsList];
  }

  #renderSiteMenu = () => {

  }

  #renderSort = () => {

  }

  #renderCard = () => {

  }

  #renderCards = () => {

  }

  #renderNoCards = () => {

  }

  #renderShowMoreButton = () => {

  }

  #renderUserRating = () => {

  }

  #renderMovieStatistic = () => {

  }
}


// export default class MoviePresenter {

// };

