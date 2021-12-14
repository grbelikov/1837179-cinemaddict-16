import {RANGS} from '../js/consts.js';

const calculateUserRating = (objectsArray) => {
  let watchedFilms = 0;
  objectsArray.forEach((element) => {
    watchedFilms += element.isWatched;
  });

  if ((watchedFilms > 1) && (watchedFilms <= 10)) {
    return RANGS.NOVICE;
  }
  if ((watchedFilms > 10) && (watchedFilms <= 20)) {
    return RANGS.FAN;
  }
  if (watchedFilms > 20) {
    return RANGS.MOVIE_BUFF;
  }
};

export const createUserRankTemplate = (objectsArray) => (
  `<section class="header__profile profile">
      <p class="profile__rating">${calculateUserRating(objectsArray)}</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`
);
