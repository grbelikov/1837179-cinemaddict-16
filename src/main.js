import {renderTemplate, RenderPosition} from './render.js';
import {createShowMoreButtonTemplate} from './view/show-more-button-view.js';
// import {createMoreDetailsTemplate} from './view/more-details-view.js';
import {createFilmCardTemplate} from './view/movie-card-view.js';
import {createSiteMenuTemplate, createMovieStatisticTemplate} from './view/site-menu-view.js';
import {createUserRankTemplate} from './view/user-rank-view.js';

const siteMainElement = document.querySelector('.main');
renderTemplate(siteMainElement, createSiteMenuTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createFilmCardTemplate(), RenderPosition.BEFOREEND);

renderTemplate(siteMainElement, createShowMoreButtonTemplate(), RenderPosition.BEFOREEND);

const siteHeaderElement = document.querySelector('.header');
renderTemplate(siteHeaderElement, createUserRankTemplate(), RenderPosition.BEFOREEND);

const siteFooterElement = document.querySelector('.footer');
const footerStatisticsElement = siteFooterElement.querySelector('.footer__statistics');
renderTemplate(footerStatisticsElement, createMovieStatisticTemplate(), RenderPosition.BEFOREEND);
