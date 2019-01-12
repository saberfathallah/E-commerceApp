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
  getAllOrders,
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
  getAllOrders,
};

export {
  favoriteHandlers,
  cartHandlers,
  orderHandlers,
};
