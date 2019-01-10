/* eslint-disable no-underscore-dangle */
import { combineResolvers } from 'graphql-resolvers';
import addProductToCart from '../services/addProductToCart';
import { isAuthenticated } from '../../../utils/authorization';
import updateQuantityOrRemoveProductFromCart from '../services/updateQuantityOrRemoveProductFromCart';

export const cartMutations = `
addProductToCart(productId: ID!, quantity: Int): cartResultType
updateQuantityOrRemoveProductFromCart(productId: ID!, quantity: Int): cartResultType
`;

export const Resolvers = {
  addProductToCart: combineResolvers(
    isAuthenticated,
    async (_, { productId, quantity }, { user }) => {
      const result = await addProductToCart(productId, quantity, user._id);
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
};
