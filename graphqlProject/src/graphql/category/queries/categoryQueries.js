import getAllCategories from '../services/getAllCategories';
import getCategoryBId from '../services/getCategoryBId';
import { combineResolvers } from 'graphql-resolvers';
import { isAuthenticated } from '../../../utils/authorization';

export const Query =`
  getAllCategories: categoriesResultType
  getCategoryBId(id: ID!): categoryResultType
`;

export const Resolvers = {
  getAllCategories: combineResolvers(
    isAuthenticated,
    async (_, $, { user }) => {
    const result = await getAllCategories(user._id);
    return result;
    },
  ),
  getCategoryBId: combineResolvers(
    isAuthenticated,
    async (_, { id }, { user }) => {
    const result = await getCategoryBId(id, user._id);
    return result;
    },
  ),
};
