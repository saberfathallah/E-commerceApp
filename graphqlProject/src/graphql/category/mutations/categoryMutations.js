/* eslint-disable no-underscore-dangle */
import { combineResolvers } from 'graphql-resolvers';
import addCategory from '../services/addCategory';
import { isAuthenticated } from '../../../utils/authorization';
import deleteCategory from '../services/deleteCategory';
import updateCategory from '../services/updateCategory';

export const categoryMutations = `
  addCategory(input: CategoryInput): categoryResultType
  updateCategory(input: CategoryInput, id: ID!): categoryResultType
  deleteCategory(id: ID!): productDeletedType  
`;

export const Resolvers = {
  addCategory: combineResolvers(
    isAuthenticated,
    async (_, { input }, { user }) => {
      const result = await addCategory(input, user._id);
      return result;
    },
  ),
  deleteCategory: combineResolvers(
    isAuthenticated,
    async (_, { id }, { user }) => {
      const result = await deleteCategory(id, user._id);
      return result;
    },
  ),
  updateCategory: combineResolvers(
    isAuthenticated,
    async (_, { input, id }, { user }) => {
      const result = await updateCategory(input, id, user._id);
      return result;
    },
  ),
};
