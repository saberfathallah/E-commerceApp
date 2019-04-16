/* eslint-disable no-underscore-dangle */
import { combineResolvers } from 'graphql-resolvers';
import addProduct from '../services/addProduct';
import updateProduct from '../services/updateProduct';
import deleteProduct from '../services/deleteProduct';
import { isAuthenticated } from '../../../utils/authorization';
import modifyRatingProduct from '../services/modifyRatingProduct';

export const productMutations = `
  addProduct(input: ProductInput): productResultType
  updateProduct(input: ProductInput, id: ID!): productResultType
  deleteProduct(id: ID!): productDeletedType  
  modifyRatingProduct(id: ID!, rate: Int): productResultType  
`;

export const Resolvers = {
  addProduct: combineResolvers(
    isAuthenticated,
    async (_, { input }, { user }) => {
      const result = await addProduct(input, user._id);
      return result;
    },
  ),
  deleteProduct: combineResolvers(
    isAuthenticated,
    async (_, { id }, { user }) => {
      const result = await deleteProduct(id, user._id);
      return result;
    },
  ),
  updateProduct:
    async (_, { input, id }) => {
      const result = await updateProduct(input, id);
      return result;
    },
  modifyRatingProduct: combineResolvers(
    isAuthenticated,
    async (_, { id, rate }) => {
      const result = await modifyRatingProduct(rate, id);
      return result;
    },
  ),
};
