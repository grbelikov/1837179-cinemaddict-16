import {RENDER_POSITIONS} from './js/consts.js';
import AbstractView from './view/abstract-view.js';

export const render = (container, element, place) => {
  const parent = container instanceof AbstractView ? container.element : container;
  const child = element instanceof AbstractView ? element.element : element;

  switch (place) {
    case RENDER_POSITIONS.BEFOREBEGIN:
      parent.before(child);
      break;
    case RENDER_POSITIONS.AFTERBEGIN:
      parent.prepend(child);
      break;
    case RENDER_POSITIONS.BEFOREEND:
      parent.append(child);
      break;
    case RENDER_POSITIONS.AFTEREND:
      parent.after(child);
      break;
  }
};

export const replace = (newElement, oldElement) => {
  if (newElement === null || oldElement === null) {
    throw new Error('Can\'t replace unexisting elements');
  }

  const newChild = newElement instanceof AbstractView ? newElement.element : newElement;
  const oldChild = oldElement instanceof AbstractView ? oldElement.element : oldElement;

  const parent = oldChild.parentElement;

  if (parent === null) {
    throw new Error('Parent element doesn\'t exist');
  }

  parent.replaceChild(newChild, oldChild);
};


// export const appendElement = (component) => {
//   // на будущее, дописать
//   if (component === null) {
//     return;
//   }

//   if (!(component instanceof AbstractView)) {
//     throw new Error('Can append only components.');
//   }

//   component.element.append();
//   component.appendElement();
// };

// export const remove = (component) => {
//   // на будущее, дописать
//   if (component === null) {
//     return;
//   }

//   if (!(component instanceof AbstractView)) {
//     throw new Error('Can remove only components.');
//   }

//   component.element.remove();
//   component.removeElement();
// };

export const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstChild;
};
