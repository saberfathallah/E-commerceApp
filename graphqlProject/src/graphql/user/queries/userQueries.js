/* eslint-disable no-underscore-dangle */
import { combineResolvers } from 'graphql-resolvers';
import getUserById from '../services/getUserById';
import getAllUsers from '../services/getAllUsers';
import { isAuthenticated } from '../../../utils/authorization';

export const Query = `
  getAllUsers: usersResultType
  getUserById(id: ID!): userResultType
  getUserlogged: User
`;

export const Resolvers = {
  getAllUsers: combineResolvers(
    isAuthenticated,
    async (_, $, { user }) => {
      const allUsers = await getAllUsers(user._id);
      return { users: allUsers };
    },
  ),
  getUserById: combineResolvers(
    isAuthenticated,
    async (_, { id }, { user }) => {
      const result = await getUserById(id, user._id);
      return result;
    },
  ),
  getUserlogged: combineResolvers(
    isAuthenticated,
    async (_, $, { user }) => user,
  ),
};
