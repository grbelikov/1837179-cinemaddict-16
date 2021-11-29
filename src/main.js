import {renderTemplate, RenderPosition} from './render.js';
// import {createShowMoreButtonTemplate} from './view/show-more-button-view.js';
// import {createMoreDetailsTemplate} from './view/more-details-view.js';
import {createFilmCardTemplate} from './view/movie-card-view.js';
import {createSiteMenuTemplate, createMovieStatisticTemplate} from './view/site-menu-view.js';
import {createUserRankTemplate} from './view/user-rank-view.js';

const siteMainElement = document.querySelector('.main');
renderTemplate(siteMainElement, createSiteMenuTemplate(), RenderPosition.BEFOREEND);

for (let i = 0; i < 5; i++) {
  renderTemplate(siteMainElement, createFilmCardTemplate(), RenderPosition.BEFOREEND);
}

const siteHeaderElement = document.querySelector('.header');
const siteHeaderLogo = siteHeaderElement.querySelector('.header__logo.logo');
renderTemplate(siteHeaderLogo, createUserRankTemplate(), RenderPosition.BEFOREEND);

const siteFooterElement = document.querySelector('.footer');
const footerStatisticsElement = siteFooterElement.querySelector('.footer__statistics');
renderTemplate(footerStatisticsElement, createMovieStatisticTemplate(), RenderPosition.BEFOREEND);

