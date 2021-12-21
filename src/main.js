import {renderTemplate, renderElement} from './render.js';
import {RENDER_POSITIONS} from './js/consts.js';
import {createShowMoreButtonTemplate} from './view/show-more-button-view.js';
import {createFilmCardTemplate} from './view/movie-card-view.js';
import {createFilmContainer} from './view/film-container-view.js';
// import {createMovieStatisticTemplate} from './view/site-menu-view.js';
import SiteMenuView from './view/site-menu-view.js';
import MovieStatisticView from './view/movie-statistics-view.js';

import {createUserRankTemplate} from './view/user-rank-view.js';
import {addHiddenTagToPopup} from '../src/js/popup.js';
import {createPopupTemplate} from './view/popup.js';
import {createObjectsArray} from '../src/mock/card.js';
import {setShowingCardsByClick} from './js/button-show-more.js';

const objectsArray = createObjectsArray();

const siteMainElement = document.querySelector('.main');

renderElement(siteMainElement, new SiteMenuView().element, RENDER_POSITIONS.BEFOREEND);
// renderTemplate(siteMainElement, createSiteMenuTemplate(objectsArray), RENDER_POSITIONS.BEFOREEND);
renderTemplate(siteMainElement, createFilmContainer(objectsArray), RENDER_POSITIONS.BEFOREEND);

const filmsListContainer = document.querySelector('.films-list__container');
objectsArray.forEach((element) => {
  renderTemplate(filmsListContainer, createFilmCardTemplate(element), RENDER_POSITIONS.BEFOREEND);
});

renderTemplate(siteMainElement, createShowMoreButtonTemplate(), RENDER_POSITIONS.BEFOREEND);

const siteHeaderElement = document.querySelector('.header');
renderTemplate(siteHeaderElement, createUserRankTemplate(objectsArray), RENDER_POSITIONS.BEFOREEND);

const siteFooterElement = document.querySelector('.footer');
const footerStatisticsElement = siteFooterElement.querySelector('.footer__statistics');
renderTemplate(footerStatisticsElement, createMovieStatisticTemplate(objectsArray), RENDER_POSITIONS.BEFOREEND);

renderTemplate(siteFooterElement, createPopupTemplate(objectsArray), RENDER_POSITIONS.AFTEREND);

setShowingCardsByClick();
addHiddenTagToPopup();
