/* eslint-disable no-underscore-dangle */
import { combineResolvers } from 'graphql-resolvers';
import addProductToCart from '../services/addProductToCart';
import { isAuthenticated } from '../../../utils/authorization';
import updateQuantityOrRemoveProductFromCart from '../services/updateQuantityOrRemoveProductFromCart';
import removeProductFromCart from '../services/removeProductFromCart';

export const cartMutations = `
  addProductToCart(productId: ID!, quantity: Int, price: Float): cartResultType
  removeProductFromCart(productId: ID!): cartResultType
  updateQuantityOrRemoveProductFromCart(productId: ID!, quantity: Int): cartResultType
`;

export const Resolvers = {
  addProductToCart: combineResolvers(
    isAuthenticated,
    async (_, { productId, quantity, price }, { user }) => {
      const result = await addProductToCart(productId, quantity, price, user._id);
      return result.cart;
    },
  ),
  updateQuantityOrRemoveProductFromCart: combineResolvers(
    isAuthenticated,
    async (_, { productId, quantity }, { user }) => {
      const result = await updateQuantityOrRemoveProductFromCart(productId, quantity, user._id);
      return result;
    },
  ),
  removeProductFromCart: combineResolvers(
    isAuthenticated,
    async (_, { productId }, { user }) => {
      const result = await removeProductFromCart(productId, user._id);
      return result;
    },
  ),
};
