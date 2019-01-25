import {
  DISPLAY_POPUP_CART,
  HIDE_POPUP_CART,
} from './constants';

const initialState = {
  isOpen: false,
  message: '',
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_POPUP_CART:
      return {
        isOpen: true,
        message: action.payload,
      };

    case HIDE_POPUP_CART:
      return {
        isOpen: false,
      };

    default:
      return state;
  }
}

export default cartReducer;
