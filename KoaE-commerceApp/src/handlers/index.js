import {
  login,
  register,
  getAllUsers,
  getUserById,
  deleteUser,
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
} from './Product';

const userHandlers = {
  login,
  register,
  getAllUsers,
  getUserById,
  deleteUser,
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
};

export {
  userHandlers,
  categoryHandlers,
  productHandlers,
};
