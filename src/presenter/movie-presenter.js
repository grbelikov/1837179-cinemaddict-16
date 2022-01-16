import {calculateUserRating} from '../js/rangs.js';
import {render, replace, remove} from '../render.js';
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

export default class MovieListPresenter {
  #siteMainElement = null;

  #siteMenuComponent = new SiteMenuView();
  #sortComponent = new SortElements();
  #filmContainerComponent = new FilmContainerView();
  #noTaskComponent = new NoTaskView();
  #movieStatisticComponent = new MovieStatisticView();
  #filmCardTemplateComponent = new FilmCardTemplate();

  #filmTemplatesList = new Map();
  #popupTemplatesList = new Map();
  #cardPresenter = new Map();

  #films = [];
  #userRating = '';

  constructor (siteMainElement) {
    this.#siteMainElement = siteMainElement;
  }

  init = (films) => {
    this.#films = [...films];
    this.#renderSiteMenu();
    this.#userRating = calculateUserRating(this.#films);

    this.renderSort();
    this.renderFilmContainer();
    this.renderCards();
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

  renderCards = () => {
    const filmsListContainer = document.querySelector('.films-list__container');
    if (this.#films.length === 0) {
      this.#renderNoCards();
    } else {

      for (let i = 0; i < Math.min(this.#films.length, DISPLAYED_CARDS_PER_STEP); i++) {
        this.#renderCard(filmsListContainer, this.#films[i], i);
      }

      if (this.#films.length > DISPLAYED_CARDS_PER_STEP) {
        this.#renderShowMoreButton();
      }

      this.#renderUserRating();
      this.#renderMovieStatistic();
    }
  }

  #renderNoCards = () => {
    render(this.#siteMainElement, this.#noTaskComponent, RENDER_POSITIONS.BEFOREEND);
  }

  #renderCard = (cardListElement, card) => {

    this.#cardPresenter.set(card.id, cardListElement);

    const cardComponent = new FilmCardTemplate(card);
    const popupElem = new PopupView(card);

    // const removePopupFromCard = () => {
    //   remove(popupElem);
    // };

    const onEscKeyDown = (evt) => {
      if (evt.keyCode === ESC_KEYBUTTON) { // 27 = ESC
        remove(popupElem);
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };

    const addPopupToCard = () => {
      remove(popupElem);
      render(document.body, popupElem, RENDER_POSITIONS.AFTEREND);
      this.#popupTemplatesList.set(card.id, popupElem);

      popupElem.setCloseClickHandler(() => {
        remove(popupElem);
        document.removeEventListener('keydown', onEscKeyDown);
      });

      popupElem.setClickAddToWatchList(() => {
        card.inWatchlist = !card.inWatchlist;
        this.#renderCard(cardListElement, card, card.id);
        addPopupToCard();
      });

      popupElem.setClickMarkAsWatched(() => {
        card.isWatched = !card.isWatched;
        this.#renderCard(cardListElement, card, card.id);
        addPopupToCard();
      });

      popupElem.setClickAddToFavorite(() => {
        card.isFavorite = !card.isFavorite;
        this.#renderCard(cardListElement, card, card.id);
        addPopupToCard();
      });
    };

    cardComponent.setClickHandler(() => {
      addPopupToCard();
      document.addEventListener('keydown', onEscKeyDown);
    });


    cardComponent.setClickAddToWatchList(() => {
      card.inWatchlist = !card.inWatchlist;
      this.#renderCard(cardListElement, card, card.id);
    });

    cardComponent.setClickMarkAsWatched(() => {
      card.isWatched = !card.isWatched;
      this.#renderCard(cardListElement, card, card.id);
    });

    cardComponent.setClickAddToFavorite(() => {
      card.isFavorite = !card.isFavorite;
      this.#renderCard(cardListElement, card, card.id);
    });

    if (this.#filmTemplatesList.has(card.id)) {
      replace(cardComponent, this.#filmTemplatesList.get(card.id));
    } else {
      render(cardListElement, cardComponent, RENDER_POSITIONS.BEFOREEND);
    }

    this.#filmTemplatesList.set(card.id, cardComponent);
  }


  #renderShowMoreButton = () => {
    const showMoreButtonComponent = new ShowMoreButtonView();
    let renderedCardCount = DISPLAYED_CARDS_PER_STEP;

    render(this.#siteMainElement, showMoreButtonComponent, RENDER_POSITIONS.BEFOREEND);

    showMoreButtonComponent.setClickHandler(() => {
      this.#films
        .slice(renderedCardCount, renderedCardCount + DISPLAYED_CARDS_PER_STEP)
        .forEach((card) => this.#renderCard(document.querySelector('.films-list__container'), card));

      renderedCardCount += DISPLAYED_CARDS_PER_STEP;

      if (renderedCardCount >= this.#films.length) {
        showMoreButtonComponent.element.remove();
        showMoreButtonComponent.removeElement();
      }

    });
  }

  //!!!!! почему, если вызвать как переменную, то не работает???
  // #userRangComponent = new UserRangView(this.#userRating);
  #renderUserRating = () => {
    render(document.querySelector('.header'), new UserRangView(this.#userRating), RENDER_POSITIONS.BEFOREEND);
  }

  #renderMovieStatistic = () => {
    render(document.querySelector('.footer__statistics'), this.#movieStatisticComponent, RENDER_POSITIONS.BEFOREEND);
  }
}
