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
};

export {
  userHandlers,
  categoryHandlers,
};
