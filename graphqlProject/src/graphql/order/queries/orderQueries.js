/* eslint-disable no-underscore-dangle */
import { combineResolvers } from 'graphql-resolvers';
import getAllOrdersService from '../services/getAllOrdersService';
import getOrderByIdService from '../services/getOrderByIdService';
import billsEditService from '../services/billsEditService';
import { isAuthenticated } from '../../../utils/authorization';

export const Query = `
  getAllOrders: ordersResultType
  getOrderById(orderId: ID!): orderResultType
  billsEdit(orderId: ID!): billsEditType
`;

export const Resolvers = {
  getAllOrders: combineResolvers(
    isAuthenticated,
    async (_, $, { user }) => {
      const orders = await getAllOrdersService(user._id);
      return { orders };
    },
  ),
  getOrderById: combineResolvers(
    isAuthenticated,
    async (_, { orderId }, { user }) => {
      const order = await getOrderByIdService(orderId, user._id);
      return { order };
    },
  ),
  billsEdit: combineResolvers(
    isAuthenticated,
    async (_, { orderId }, { user }) => {
      const base64 = await billsEditService(orderId, user._id);
      return { base64 };
    },
  ),
};
