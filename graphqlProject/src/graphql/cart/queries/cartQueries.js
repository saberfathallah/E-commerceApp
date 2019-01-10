/* eslint-disable no-underscore-dangle */
import { combineResolvers } from 'graphql-resolvers';
import currentCart from '../services/currentCart';
import { isAuthenticated } from '../../../utils/authorization';

export const Query = `
  currentCart: cartResultType
`;

export const Resolvers = {
  currentCart: combineResolvers(
    isAuthenticated,
    async (_, $, { user }) => {
      const cart = await currentCart(user._id);
      return { cart };
    },
  ),
};
