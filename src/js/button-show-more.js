import {MAX_DISPLAYED_CARDS} from './consts';

const showFirstComments = (cardsAll) => {
  // отображаем только первые MAX_DISPLAYED_CARDS комментариев, остальные прячем
  for (let i = MAX_DISPLAYED_CARDS; i < cardsAll.length; i++) {
    cardsAll[i].classList.add('visually-hidden');
  }
};

const showMoreCards = () => {
  // убираем тег hidden у следующих комментариев
  const buttonShowMoreCards = document.querySelector('.films-list__show-more');
  const hiddenCards = document.querySelectorAll('.film-card.visually-hidden');
  const maxAddCards = (MAX_DISPLAYED_CARDS >= hiddenCards.length) ? hiddenCards.length: MAX_DISPLAYED_CARDS;

  if (hiddenCards.length === MAX_DISPLAYED_CARDS) {
    buttonShowMoreCards.classList.add('visually-hidden');
  }

  for (let i = 0; i < maxAddCards; i++) {
    hiddenCards[i].classList.remove('visually-hidden');
  }
};

// показывать больше комментариев при нажатии на кнопку 'Загрузить еще'
const setShowingCardsByClick = () => {
  const cardsAll = document.querySelectorAll('.film-card');
  showFirstComments(cardsAll);
  // ищем все скрытые комментарии
  const buttonShowMoreCards = document.querySelector('.films-list__show-more');
  buttonShowMoreCards.addEventListener('click', showMoreCards);
};

export {setShowingCardsByClick};
