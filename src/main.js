import {renderTemplate, RenderPosition} from './render.js';
import {createSiteMenuTemplate} from './view/site-menu-view.js';
// import {} from './view/more-details-view.js';
// import {} from './view/movie-card-view.js';
// import {} from './view/show-more-button-view.js';
// import {} from './view/user-rank-view.js';

const siteMainElement = document.querySelector('.main');

renderTemplate(siteMainElement, createSiteMenuTemplate(), RenderPosition.BEFOREEND);
