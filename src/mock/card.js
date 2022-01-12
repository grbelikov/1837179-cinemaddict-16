import {EMOTIONS, CARDS_COUNT} from '../js/consts.js';

const objectsArray = [];

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

// текущая дата в формате: год/месяц/день часы:минуты (например «2019/12/31 23:59»).
const generateCurrentDate = () => {
  const dateNow = new Date();
  // eslint-disable-next-line prefer-template
  const dateInFormat = dateNow.getFullYear() + '/'
    + dateNow.getMonth() + '/'
    + dateNow.getDate() + ' '
    + dateNow.getHours() + ':'
    + dateNow.getMinutes();

  return dateInFormat;
};

// названия фильмов
const generateTitle = () => {
  const titlesArray = [
    'Back to the Future',
    'Men in black',
    'Matrix',
    'Resident Evil',
    'Forrest Gump',
    'Spanglish',
  ];

  const randomIndex = getRandomInteger(0, titlesArray.length - 1);
  return titlesArray[randomIndex];
};

// путь до постера
const generatePoster = () => {
  const postersArray = [
    'made-for-each-other.png',
    'popeye-meets-sinbad.png',
    'sagebrush-trail.jpg',
    'santa-claus-conquers-the-martians.jpg',
    'the-dance-of-life.jpg',
    'the-great-flamarion.jpg',
    'the-man-with-the-golden-arm.jpg',
  ];

  const randomIndex = getRandomInteger(0, postersArray.length - 1);
  return `./images/posters/${postersArray[randomIndex]}`;
};

// рандомная эмоция
const generateEmotion = () => {
  const randomIndex = getRandomInteger(0, EMOTIONS.length - 1);
  return EMOTIONS[randomIndex];
};

const generateComments = () => {
  const commentsArray = [];
  const randomIndex = getRandomInteger(0, 5);
  for (let i = 1; i <= randomIndex; i++) {
    const commentsDictionary = {
      emotion: generateEmotion(),
      date: generateCurrentDate(),
      author: 'Paul Mccartney',
      text: 'some text'
    };
    commentsArray.push(commentsDictionary);
  }
  return commentsArray;
};

// описание фильма
const generateDescription = () => {
  let descriptions = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Cras aliquet varius magna, non porta ligula feugiat eget.
    Fusce tristique felis at fermentum pharetra.
    Aliquam id orci ut lectus varius viverra.
    Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.
    Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.
    Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.
    Sed sed nisi sed augue convallis suscipit in sed felis.
    Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.
    In rutrum ac purus sit amet tempus.`;

  descriptions = descriptions.split('.');
  let description = '';

  const randomAmount = getRandomInteger(1, 5);

  for (let i = 0; i < randomAmount; i++) {
    description += descriptions[getRandomInteger(0, descriptions.length - 1)].trim();
    description += '. ';
  }
  return description.trim();
};

export const generateCard = () => ({
  fullSizePoster: 'FullSizePoster',
  poster: generatePoster(),
  title: generateTitle(),
  originalTitle: 'OriginalTitle',
  rating: `${getRandomInteger(6, 9)  }.${  getRandomInteger(0, 9)}`,
  ratio: null,
  director: 'Director',
  writers: 'Writers',
  actors: 'Actors',
  year: '30 March 1995',
  duration: '1h 18m',
  country: 'Country',
  genres: ['action', 'adventure', 'comedy'],
  description: generateDescription(),
  comments: generateComments(),
  ageLimit: null,
  inWatchlist: Boolean(getRandomInteger(0, 1)),
  isFavorite: Boolean(getRandomInteger(0, 1)),
  isWatched: Boolean(getRandomInteger(0, 1)),
});

export const createCardsList = () => {
  for (let i = 0; i < CARDS_COUNT; i++) {
    objectsArray.push(generateCard());
  }
  return objectsArray;
};
