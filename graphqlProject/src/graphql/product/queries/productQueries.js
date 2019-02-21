import getAllProducts from '../services/getAllProducts';
import getProductById from '../services/getProductById';
import getTopSales from '../services/getTopSales';

export const Query = `
  getAllProducts: productsResultType
  getProductById(id: ID!): productResultType
  getTopSales: productsResultType
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
  getTopSales: async () => {
    const result = await getTopSales();
    return result;
  },
};
