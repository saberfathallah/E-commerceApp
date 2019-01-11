/* eslint-disable no-underscore-dangle */
import { combineResolvers } from 'graphql-resolvers';
import currentCart from '../services/currentCart';
import getItemsCurrentCart from '../services/getItemsCurrentCart';
import { isAuthenticated } from '../../../utils/authorization';

export const Query = `
  currentCart: cartResultType
  getItemsCurrentCart(ids: [ID]): itemsCartResultType
`;

export const Resolvers = {
  currentCart: combineResolvers(
    isAuthenticated,
    async (_, $, { user }) => {
      const cart = await currentCart(user._id);
      return { cart };
    },
  ),
  getItemsCurrentCart: combineResolvers(
    isAuthenticated,
    async (_, { ids }, { user }) => {
      const items = await getItemsCurrentCart(ids, user._id);
      return items;
    },
  ),
};
