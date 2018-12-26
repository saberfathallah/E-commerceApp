/* eslint-disable no-underscore-dangle */
import { combineResolvers } from 'graphql-resolvers';
import addCategory from '../services/addCategory';
import { isAuthenticated } from '../../../utils/authorization';

export const categoryMutations = `
  addCategory(input: CategoryInput): categoryResultType
`;

export const Resolvers = {
  addCategory: combineResolvers(
    isAuthenticated,
    async (_, { input }, { user }) => {
      const result = await addCategory(input, user._id);
      return result;
    },
  ),
};
