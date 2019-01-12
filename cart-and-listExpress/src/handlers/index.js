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
  getOrderById,
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
  getOrderById,
};

export {
  favoriteHandlers,
  cartHandlers,
  orderHandlers,
};
