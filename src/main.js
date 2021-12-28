import {calculateUserRating} from './js/rangs.js';
import {render} from './render.js';
import {RENDER_POSITIONS} from './js/consts.js';

import UserRangView from './view/user-rang-view.js';
import SiteMenuView from './view/site-menu-view.js';
import SortElements from './view/sort-elements.js';
import PopupView from './view/popup-view.js';
import FilmCardTemplate from './view/movie-card-view.js';
import FilmContainerView from './view/film-container-view.js';
import MovieStatisticView from './view/movie-statistics-view.js';
import ShowMoreButtonView from './view/show-more-button-view.js';

import {addHiddenTagToPopup} from '../src/js/popup.js';
import {createObjectsArray} from '../src/mock/card.js';
import {setShowingCardsByClick} from './js/button-show-more.js';

const objectsArray = createObjectsArray();
const userRating = calculateUserRating(objectsArray);

const siteMainElement = document.querySelector('.main');

render(siteMainElement, new SiteMenuView().element, RENDER_POSITIONS.BEFOREEND);
render(siteMainElement, new SortElements().element, RENDER_POSITIONS.BEFOREEND);
render(siteMainElement, new FilmContainerView().element, RENDER_POSITIONS.BEFOREEND);

const siteFooterElement = document.querySelector('.footer');
const footerStatisticsElement = siteFooterElement.querySelector('.footer__statistics');
const filmsListContainer = document.querySelector('.films-list__container');

objectsArray.forEach((elem, i) => {
  const filmCardTemplate = new FilmCardTemplate(elem);
  render(filmsListContainer, filmCardTemplate.element, RENDER_POSITIONS.BEFOREEND);
  console.log(filmCardTemplate.element);

  const filmCard = filmCardTemplate.element.querySelector('.film-card__link');

  // const filmCardsPosters = document.querySelectorAll('.film-card__poster');
  // // const filmDetails = document.querySelector('.film-details');
  filmCard.addEventListener('click', () => {
    render(siteFooterElement, new PopupView(elem).element, RENDER_POSITIONS.AFTEREND);
    addHiddenTagToPopup();
  });
});

render(siteMainElement, new ShowMoreButtonView().element, RENDER_POSITIONS.BEFOREEND);

const siteHeaderElement = document.querySelector('.header');
render(siteHeaderElement, new UserRangView(userRating).element, RENDER_POSITIONS.BEFOREEND);

render(footerStatisticsElement, new MovieStatisticView().element, RENDER_POSITIONS.BEFOREEND);

setShowingCardsByClick();

