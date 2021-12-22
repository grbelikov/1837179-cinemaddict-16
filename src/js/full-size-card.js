const fullSizeCard = () => {
  const filmCardsPosters = document.querySelectorAll('.film-card__poster');
  const filmDetails = document.querySelector('.film-details');

  for (let i = 0; i < filmCardsPosters.length; i++) {
    filmCardsPosters[i].addEventListener('click', () => {
      filmDetails.classList.remove('visually-hidden');
    });
  }
};

export {fullSizeCard};
