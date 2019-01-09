import getAllProducts from '../services/getAllProducts';
import getProductById from '../services/getProductById';

export const Query = `
  getAllProducts: productsResultType
  getProductById(id: ID!): productResultType
`;

export const Resolvers = {
  getAllProducts: async () => {
    const result = await getAllProducts();
    return result;
  },
  getProductById: async (_, { id }) => {
    const result = await getProductById(id);
    return result;
  },
};
