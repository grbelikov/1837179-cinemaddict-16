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

// import {createObjectsArray} from '../js';

export default class MovieListPresenter {
  #siteMainElement = null;

  #siteMenuComponent = new SiteMenuView();
  #sortComponent = new SortElements();
  #filmContainerComponent = new FilmContainerView();
  #noTaskComponent = new NoTaskView();
  #movieStatisticComponent = new MovieStatisticView();
  #filmCardTemplateComponent = new FilmCardTemplate();

  #films = [];
  #userRating = '';

  constructor (siteMainElement) {
    this.#siteMainElement = siteMainElement;
  }

  init = (films) => {
    this.#films = [...films];
    this.#renderSiteMenu();
    this.#userRating = calculateUserRating(this.#films);
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

  renderNoCards = () => {
    render(this.#siteMainElement, this.#noTaskComponent, RENDER_POSITIONS.BEFOREEND);
  }

  renderCard = (cardListElement, card) => {
    const cardComponent = new FilmCardTemplate(card);
    const popupElem = new PopupView(card);

    const addPopupToCard = () => {
      cardListElement.appendChild(popupElem.element);
      document.body.classList.add('hide-overflow');
    };

    const removePopupFromCard = () => {
      cardListElement.removeChild(popupElem.element);
      document.body.classList.remove('hide-overflow');
    };

    const onEscKeyDown = (evt) => {
      if (evt.keyCode === ESC_KEYBUTTON) { // 27 = ESC
        evt.preventDefault();
        removePopupFromCard();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };

    cardComponent.setClickHandler(() => {
      addPopupToCard();
      document.addEventListener('keydown', onEscKeyDown);
    });

    popupElem.setCloseClickHandler(() => {
      removePopupFromCard();
      document.removeEventListener('keydown', onEscKeyDown);
    });

    render(cardListElement, cardComponent, RENDER_POSITIONS.BEFOREEND);
  }








  renderShowMoreButton = (showMoreButtonComponent) => {
    render(this.#siteMainElement, showMoreButtonComponent, RENDER_POSITIONS.BEFOREEND);
  }

  //!!!!! почему, если вызвать как переменную, то не работает???
  // #userRangComponent = new UserRangView(this.#userRating);
  renderUserRating = () => {
    render(document.querySelector('.header'), new UserRangView(this.#userRating), RENDER_POSITIONS.BEFOREEND);
  }

  renderMovieStatistic = () => {
    render(document.querySelector('.footer__statistics'), this.#movieStatisticComponent, RENDER_POSITIONS.BEFOREEND);
  }
}
