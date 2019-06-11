/* eslint-disable consistent-return */

import { ADD_EVENT } from './constants';

export const addEvent = (type, selector) => ({
  // eslint-disable-next-line key-spacing
  type : ADD_EVENT,
  payload: {
    type,
    selector,
  },
});

export const dispatchEventA = (type, selector) => (dispatch) => {
  dispatch(() => {
    let evt;
    const element = document.querySelector(selector);
    if (!element) {
      return null;
    }
    // Add switch for futur usage different than MouseEvent ;)
    switch (type) {
      case 'click':
      case 'dblclick':
      case 'mouseup':
      case 'mousedown':
        evt = new MouseEvent(type, {
          bubbles: true,
          cancelable: true,
          view: window,
        });
        break;
      default:
        evt = null;
        break;
    }

    if (evt) {
      element.dispatchEvent(evt);
    }
  });
};
