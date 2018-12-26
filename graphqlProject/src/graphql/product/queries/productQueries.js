import getAllProducts from '../services/getAllProducts';
import getProductById from '../services/getProductById';
import { combineResolvers } from 'graphql-resolvers';
import { isAuthenticated } from '../../../utils/authorization';

export const Query = `
  getAllProducts: productsResultType
  getProductById(id: ID!): productResultType
`;

export const Resolvers = {
  getAllProducts: async (_, $) => {
    const result = await getAllProducts();
    return result;
  },
  getProductById: async (_, { id }) => {
    const result = await getProductById(id);
    return result;
  },
};
