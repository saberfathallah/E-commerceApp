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
  billsEdit,
} from './order';

import {
  topUserCommandes,
} from './statistics';

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
  billsEdit,
};

const statisticsHanlers = {
  topUserCommandes,
};

export {
  favoriteHandlers,
  cartHandlers,
  orderHandlers,
  statisticsHanlers,
};
