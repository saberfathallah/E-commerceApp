/* eslint-disable no-underscore-dangle */
import { combineResolvers } from 'graphql-resolvers';
import getUserById from '../services/getUserById';
import getAllUsers from '../services/getAllUsers';
import { isAuthenticated } from '../../../utils/authorization';
import getAllClients from '../services/getAllClients';
import getListOfClientsInvited from '../services/getListOfClientsInvited';
import getAllInvitation from '../services/getAllInvitation';
import getListOfFriends from '../services/getListOfFriends';

export const Query = `
  getAllUsers: usersResultType
  getListOfClientsInvited: usersInvetedResultType
  getAllInvitation: usersResultType
  getAllClients: usersResultType
  getListOfFriends: usersResultType
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
  getAllClients: combineResolvers(
    isAuthenticated,
    async (_, $, { user }) => {
      const clients = await getAllClients(user._id);
      return { users: clients };
    },
  ),
  getListOfFriends: combineResolvers(
    isAuthenticated,
    async (_, $, { user }) => {
      const clients = await getListOfFriends(user._id);
      return clients;
    },
  ),
  getListOfClientsInvited: combineResolvers(
    isAuthenticated,
    async (_, $, { user }) => {
      const invitations = await getListOfClientsInvited(user._id);
      return invitations;
    },
  ),
  getAllInvitation: combineResolvers(
    isAuthenticated,
    async (_, $, { user }) => {
      const users = await getAllInvitation(user._id);
      return users;
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
