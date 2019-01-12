/* eslint-disable no-underscore-dangle */
import { combineResolvers } from 'graphql-resolvers';
import { isAuthenticated } from '../../../utils/authorization';
import createOrderService from '../services/createOrderService';

export const orderMutations = `
  createOrder(input: orderInput): orderResultType
`;

export const Resolvers = {
  createOrder: combineResolvers(
    isAuthenticated,
    async (_, { input }, { user }) => {
      const result = await createOrderService(input, user._id);
      return result;
    },
  ),
};
