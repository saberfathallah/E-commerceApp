import {
  login,
  register,
  getAllUsers,
  getUserById,
  deleteUser,
  getAllClients,
  sendInvitation,
  getAllInvitation,
  getListOfFriends,
  annulateInvitation,
  acceptInvitation,
  refuseInvitation,
  getListOfClientsInvited,
} from './User';

import {
  addCategory,
  getAllCategories,
  getCategoryById,
  getCategoriesByParentId,
  updateCategory,
  deleteCategory,
} from './Category';

import {
  addProduct,
  getAllProducts,
  deleteProduct,
  getProductById,
  updateProduct,
  getProductsByCategoryId,
  modifyTopSales,
  getTopSales,
  modifyRatingProduct,
} from './Product';

const userHandlers = {
  login,
  register,
  getAllUsers,
  getUserById,
  deleteUser,
  getAllClients,
  sendInvitation,
  getAllInvitation,
  getListOfFriends,
  annulateInvitation,
  acceptInvitation,
  refuseInvitation,
  getListOfClientsInvited,
};

const categoryHandlers = {
  addCategory,
  getAllCategories,
  getCategoryById,
  getCategoriesByParentId,
  updateCategory,
  deleteCategory,
};

const productHandlers = {
  addProduct,
  getAllProducts,
  deleteProduct,
  getProductById,
  updateProduct,
  getProductsByCategoryId,
  modifyTopSales,
  getTopSales,
  modifyRatingProduct,
};

export {
  userHandlers,
  categoryHandlers,
  productHandlers,
};
