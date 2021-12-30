import {calculateUserRating} from './js/rangs.js';
import {render} from './render.js';
import {DISPLAYED_CARDS_PER_STEP, RENDER_POSITIONS, ESC_KEYBUTTON} from './js/consts.js';

import UserRangView from './view/user-rang-view.js';
import SiteMenuView from './view/site-menu-view.js';
import SortElements from './view/sort-elements.js';
import PopupView from './view/popup-view.js';
import FilmCardTemplate from './view/movie-card-view.js';
import FilmContainerView from './view/film-container-view.js';
import MovieStatisticView from './view/movie-statistics-view.js';
import ShowMoreButtonView from './view/show-more-button-view.js';
import NoTaskView from './view/no-task-view.js';

import {createObjectsArray} from '../src/mock/card.js';

const objectsArray = createObjectsArray();
const userRating = calculateUserRating(objectsArray);

const siteMainElement = document.querySelector('.main');

render(siteMainElement, new SiteMenuView().element, RENDER_POSITIONS.BEFOREEND);
render(siteMainElement, new SortElements().element, RENDER_POSITIONS.BEFOREEND);
render(siteMainElement, new FilmContainerView().element, RENDER_POSITIONS.BEFOREEND);

const siteFooterElement = document.querySelector('.footer');
const footerStatisticsElement = siteFooterElement.querySelector('.footer__statistics');
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

  cardComponent.element.querySelector('.film-card__link').addEventListener('click', () => {
    addPopupToCard();
    document.addEventListener('keydown', onEscKeyDown);
  });

  popupElem.element.querySelector('.film-details__close-btn').addEventListener('click', () => {
    removePopupFromCard();
  });

  render(cardListElement, cardComponent.element, RENDER_POSITIONS.BEFOREEND);
};


if (objectsArray.length === 0) {
  render(siteMainElement, new NoTaskView().element, RENDER_POSITIONS.BEFOREEND);
} else {

  for (let i = 0; i < Math.min(objectsArray.length, DISPLAYED_CARDS_PER_STEP); i++) {
    renderCard(filmsListContainer, objectsArray[i]);
  }

  if (objectsArray.length > DISPLAYED_CARDS_PER_STEP) {
    let renderedCardCount = DISPLAYED_CARDS_PER_STEP;
    const showMoreButtonComponent = new ShowMoreButtonView();

    render(siteMainElement, showMoreButtonComponent.element, RENDER_POSITIONS.BEFOREEND);

    showMoreButtonComponent.element.addEventListener('click', (evt) => {
      evt.preventDefault();
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

  const siteHeaderElement = document.querySelector('.header');
  render(siteHeaderElement, new UserRangView(userRating).element, RENDER_POSITIONS.BEFOREEND);

  render(footerStatisticsElement, new MovieStatisticView().element, RENDER_POSITIONS.BEFOREEND);
}
