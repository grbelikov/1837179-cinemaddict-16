const addHiddenTagToPopup = () => {
  const filmDetails = document.querySelector('.film-details');
  const closeButton = document.querySelector('.film-details__close-btn');
  closeButton.addEventListener('click', () => {
    filmDetails.classList.add('visually-hidden');
  }) ;
};

export {addHiddenTagToPopup};
