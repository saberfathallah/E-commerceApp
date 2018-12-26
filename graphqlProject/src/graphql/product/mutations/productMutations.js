/* eslint-disable no-underscore-dangle */
import addProduct from '../services/addProduct';
import updateProduct from '../services/updateProduct';
import deleteProduct from '../services/deleteProduct';
import { combineResolvers } from 'graphql-resolvers';
import { isAuthenticated } from '../../../utils/authorization';

export const productMutations = `
  addProduct(input: ProductInput): productResultType
  updateProduct(input: ProductInput, id: ID!): productResultType
  deleteProduct(id: ID!): productDeletedType  
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
  updateProduct: combineResolvers(
    isAuthenticated,
    async (_, { input, id }, { user }) => {
    const result = await updateProduct(input, id, user._id);
    return result;
    },
  ),
}