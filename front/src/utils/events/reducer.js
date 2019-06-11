import { ADD_EVENT, DISPASH_EVENT } from './constants';

const initialState = {
  selector: '',
  type: '',
};

function eventReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_EVENT:
      return { ...state, selector: action.payload.selector, type: action.payload.type };
    case DISPASH_EVENT:
      return { ...state };

    default:
      return state;
  }
}

export default eventReducer;
