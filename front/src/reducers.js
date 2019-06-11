import { combineReducers } from 'redux';
import cartReducer from './component/cart/reducer';
import eventReducer from './utils/events/reducer';

const reducers = combineReducers({
  cartReducer,
  eventReducer,
});

export default reducers;
