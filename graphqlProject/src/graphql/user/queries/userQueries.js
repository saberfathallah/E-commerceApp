import getUserById from '../services/getUserById';
import getAllUsers from '../services/getAllUsers';
import { isAuthenticated } from '../../../utils/authorization';
import { combineResolvers } from 'graphql-resolvers';

export const Query =`
  getAllUsers: usersResultType
  getUserById(id: ID!): userResultType
`;

export const Resolvers = {
  getAllUsers: combineResolvers (
    isAuthenticated,
    async (_, $, { user }) => {
      const allUsers = await getAllUsers(user._id);
      return {users: allUsers};
    }
  ),
  getUserById: combineResolvers (
    isAuthenticated,
    async (_, { id }, { user }) => {
    const result = await getUserById(id, user._id);
    return result;
    }
  ),
};
