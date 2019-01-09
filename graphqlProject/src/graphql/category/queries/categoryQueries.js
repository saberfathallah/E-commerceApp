import getAllCategories from '../services/getAllCategories';
import getCategoryBId from '../services/getCategoryBId';
import getProductsByCategoryId from '../services/getProductsByCategoryId';

export const Query = `
  getAllCategories(hasLevel: Boolean): categoriesResultType
  getCategoryById(id: ID!): categoryResultType
  getProductsByCategoryId(id: ID!): productsResultType
`;

export const Resolvers = {
  getAllCategories:
    async (_, { hasLevel }) => {
      const result = await getAllCategories(hasLevel);
      return result;
    },
  getCategoryById: async (_, { id }) => {
    const result = await getCategoryBId(id);
    return result;
  },
  getProductsByCategoryId: async (_, { id }) => {
    const result = await getProductsByCategoryId(id);
    return result;
  },
};
