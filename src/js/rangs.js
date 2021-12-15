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

export {calculateUserRating};
