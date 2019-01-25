import { combineReducers } from 'redux';
import cartReducer from './component/cart/reducer';

const reducers = combineReducers({
  cartReducer,
});

export default reducers;
