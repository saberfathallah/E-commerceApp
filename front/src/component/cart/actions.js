import {
  DISPLAY_POPUP_CART,
  HIDE_POPUP_CART,
} from './constants';

export function openPopUp(message) {
  return {
    type: DISPLAY_POPUP_CART,
    payload: message,
  };
}

export function hidePopup() {
  return {
    type: HIDE_POPUP_CART,
  };
}

