import {createCardsList} from '../src/mock/card.js';
import MovieListPresenter from './presenter/movie-presenter.js';

const moviePresenter = new MovieListPresenter(document.querySelector('.main'));
const cardsArray = createCardsList();

moviePresenter.init(cardsArray);

