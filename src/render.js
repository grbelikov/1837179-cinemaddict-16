import {RENDER_POSITIONS} from './js/consts.js';

export const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

export const renderElement = (container, element, place) => {
  switch (place) {
    case RENDER_POSITIONS.BEFOREBEGIN:
      container.before(element);
      break;
    case RENDER_POSITIONS.AFTERBEGIN:
      container.prepend(element);
      break;
    case RENDER_POSITIONS.BEFOREEND:
      container.append(element);
      break;
    case RENDER_POSITIONS.AFTEREND:
      container.after(element);
      break;
  }
};

export const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  return newElement.firstChild;
};
