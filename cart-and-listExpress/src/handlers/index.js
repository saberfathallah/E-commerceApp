import {
  addProductToListFavorite,
  getFavoriteList,
  deleteFavorite,
} from './favorites';

import {
  addProductToCart,
  currentCart,
  deleteCart,
  removeItems,
  updateItemQuantity,
  updateQuantityOrRemoveProduct,
} from './cart';

import {
  createOrder,
} from './order';

const favoriteHandlers = {
  addProductToListFavorite,
  getFavoriteList,
  deleteFavorite,
};

const cartHandlers = {
  addProductToCart,
  currentCart,
  deleteCart,
  removeItems,
  updateItemQuantity,
  updateQuantityOrRemoveProduct,
};

const orderHandlers = {
  createOrder,
};

export {
  favoriteHandlers,
  cartHandlers,
  orderHandlers,
};
