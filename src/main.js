// import {calculateUserRating} from './js/rangs.js';
import {render} from './render.js';
import {DISPLAYED_CARDS_PER_STEP, RENDER_POSITIONS, ESC_KEYBUTTON} from './js/consts.js';

import PopupView from './view/popup-view.js';
// import NoTaskView from './view/no-task-view.js';
// import UserRangView from './view/user-rang-view.js';
// import SiteMenuView from './view/site-menu-view.js';
// import SortElements from './view/sort-elements.js';
import FilmCardTemplate from './view/movie-card-view.js';
// import FilmContainerView from './view/film-container-view.js';
// import MovieStatisticView from './view/movie-statistics-view.js';
import ShowMoreButtonView from './view/show-more-button-view.js';

import {createObjectsArray} from '../src/mock/card.js';

import MovieListPresenter from './presenter/movie-presenter.js';

// const siteMainElement = document.querySelector('.main');
const moviePresenter = new MovieListPresenter(document.querySelector('.main'));

const objectsArray = createObjectsArray();
// const userRating = calculateUserRating(objectsArray);

// render(siteMainElement, new SiteMenuView(), RENDER_POSITIONS.BEFOREEND);

moviePresenter.init(objectsArray);

// render(siteMainElement, new SortElements(), RENDER_POSITIONS.BEFOREEND);
moviePresenter.renderSort();

// render(siteMainElement, new FilmContainerView(), RENDER_POSITIONS.BEFOREEND);
moviePresenter.renderFilmContainer();

// const siteFooterElement = document.querySelector('.footer');
// const footerStatisticsElement = siteFooterElement.querySelector('.footer__statistics');
const filmsListContainer = document.querySelector('.films-list__container');

const renderCard = (cardListElement, card) => {
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
};

if (objectsArray.length === 0) {
  // render(siteMainElement, new NoTaskView().element, RENDER_POSITIONS.BEFOREEND);
  moviePresenter.renderNoCards();
} else {

  for (let i = 0; i < Math.min(objectsArray.length, DISPLAYED_CARDS_PER_STEP); i++) {
    renderCard(filmsListContainer, objectsArray[i]);
  }

  if (objectsArray.length > DISPLAYED_CARDS_PER_STEP) {
    let renderedCardCount = DISPLAYED_CARDS_PER_STEP;
    const showMoreButtonComponent = new ShowMoreButtonView();

    // render(siteMainElement, showMoreButtonComponent, RENDER_POSITIONS.BEFOREEND);
    moviePresenter.renderShowMoreButton(showMoreButtonComponent);

    showMoreButtonComponent.setClickHandler(() => {
      objectsArray
        .slice(renderedCardCount, renderedCardCount + DISPLAYED_CARDS_PER_STEP)
        .forEach((card) => renderCard(filmsListContainer, card));

      renderedCardCount += DISPLAYED_CARDS_PER_STEP;

      if (renderedCardCount >= objectsArray.length) {
        showMoreButtonComponent.element.remove();
        showMoreButtonComponent.removeElement();
      }
    });
  }

  // const siteHeaderElement = document.querySelector('.header');
  // render(siteHeaderElement, new UserRangView(userRating), RENDER_POSITIONS.BEFOREEND);
  moviePresenter.renderUserRating();

  // render(footerStatisticsElement, new MovieStatisticView(), RENDER_POSITIONS.BEFOREEND);
  moviePresenter.renderMovieStatistic();

}
