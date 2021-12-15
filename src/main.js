import {renderTemplate, renderPosition} from './render.js';
import {createShowMoreButtonTemplate} from './view/show-more-button-view.js';
import {createFilmCardTemplate, createFilmContainer} from './view/movie-card-view.js';
import {createSiteMenuTemplate, createMovieStatisticTemplate} from './view/site-menu-view.js';
import {createUserRankTemplate} from './view/user-rank-view.js';
import {addHiddenTagToPopup} from '../src/js/popup.js';
import {createPopupTemplate} from './view/popup.js';
import {createObjectsArray} from '../src/mock/card.js';
import {setShowingCommentsByClick} from './js/button-show-more.js';

const objectsArray = createObjectsArray();
console.log(objectsArray);

const siteMainElement = document.querySelector('.main');

renderTemplate(siteMainElement, createSiteMenuTemplate(objectsArray), renderPosition.BEFOREEND);
renderTemplate(siteMainElement, createFilmContainer(objectsArray), renderPosition.BEFOREEND);

const filmsListContainer = document.querySelector('.films-list__container');
objectsArray.forEach((element) => {
  renderTemplate(filmsListContainer, createFilmCardTemplate(element), renderPosition.BEFOREEND);
});

renderTemplate(siteMainElement, createShowMoreButtonTemplate(), renderPosition.BEFOREEND);

const siteHeaderElement = document.querySelector('.header');
renderTemplate(siteHeaderElement, createUserRankTemplate(objectsArray), renderPosition.BEFOREEND);

const siteFooterElement = document.querySelector('.footer');
const footerStatisticsElement = siteFooterElement.querySelector('.footer__statistics');
renderTemplate(footerStatisticsElement, createMovieStatisticTemplate(objectsArray), renderPosition.BEFOREEND);
renderTemplate(siteFooterElement, createPopupTemplate(objectsArray), renderPosition.AFTEREND);

setShowingCommentsByClick();
addHiddenTagToPopup();
