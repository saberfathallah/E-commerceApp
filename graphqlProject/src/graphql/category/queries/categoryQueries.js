import getAllCategories from '../services/getAllCategories';
import getCategoryBId from '../services/getCategoryBId';
import { combineResolvers } from 'graphql-resolvers';
import { isAuthenticated } from '../../../utils/authorization';

export const Query =`
  getAllCategories: categoriesResultType
  getCategoryBId(id: ID!): categoryResultType
`;

export const Resolvers = {
  getAllCategories:
    async (_, $) => {
    const result = await getAllCategories();
    return result;
  },
  getCategoryBId: async (_, { id }) => {
    const result = await getCategoryBId(id);
    return result;
  },
};
