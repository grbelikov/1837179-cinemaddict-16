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

render(siteMainElement, new SiteMenuView(), RENDER_POSITIONS.BEFOREEND);
render(siteMainElement, new SortElements(), RENDER_POSITIONS.BEFOREEND);
render(siteMainElement, new FilmContainerView(), RENDER_POSITIONS.BEFOREEND);

const siteFooterElement = document.querySelector('.footer');
const footerStatisticsElement = siteFooterElement.querySelector('.footer__statistics');
const filmsListContainer = document.querySelector('.films-list__container');

objectsArray.forEach((elem, i) => {
  const filmCardTemplate = new FilmCardTemplate(elem);
  // console.log(filmCardTemplate);
  // console.log(filmCardTemplate.element);
  render(filmsListContainer, filmCardTemplate, RENDER_POSITIONS.BEFOREEND);

  const filmCardsPosters = document.querySelectorAll('.film-card__poster');
  // const filmDetails = document.querySelector('.film-details');
  filmCardsPosters[i].addEventListener('click', () => {
    render(siteFooterElement, new PopupView(objectsArray[i]), RENDER_POSITIONS.AFTEREND);
    // console.log(`Click! ${i}`);
    addHiddenTagToPopup();
  });
});

render(siteMainElement, new ShowMoreButtonView(), RENDER_POSITIONS.BEFOREEND);

const siteHeaderElement = document.querySelector('.header');
render(siteHeaderElement, new UserRangView(userRating), RENDER_POSITIONS.BEFOREEND);

render(footerStatisticsElement, new MovieStatisticView(), RENDER_POSITIONS.BEFOREEND);

setShowingCardsByClick();

