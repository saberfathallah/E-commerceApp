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
} from './cart';

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
};

export {
  favoriteHandlers,
  cartHandlers,
};
