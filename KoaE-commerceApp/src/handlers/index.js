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
} from './Category';

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
};

export {
  userHandlers,
  categoryHandlers,
};
