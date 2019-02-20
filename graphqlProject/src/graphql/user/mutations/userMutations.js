/* eslint-disable no-underscore-dangle */
import { combineResolvers } from 'graphql-resolvers';
import loginUser from '../services/loginUser';
import registerMicroService from '../services/registerUser';
import deleteUser from '../services/deleteUser';
import { isAdmin, isAuthenticated } from '../../../utils/authorization';
import sendInvitation from '../services/sendInvitation';
import annulateInvitation from '../services/annulateInvitation';
import acceptInvitation from '../services/acceptInvitation';
import refuseInvitation from '../services/refuseInvitation';

export const userMutations = `
  registerUser(input: UserInput): User
  addUser(input: UserInput): User
  loginUser(mail: String, password: String): userLogged
  deleteUser(id: ID!): userdeletedType
  sendInvitation(idInvited: ID!): userdeletedType
  annulateInvitation(idInvited: ID!): userdeletedType
  refuseInvitation(idInvited: ID!): userdeletedType
  acceptInvitation(idInvited: ID!): userdeletedType
`;

export const Resolvers = {
  registerUser: async (_, { input }) => {
    const result = await registerMicroService(input);
    const data = await result.json();
    return data;
  },
  loginUser: async (_, { mail, password }) => {
    const result = await loginUser(mail, password);
    return result;
  },
  deleteUser: combineResolvers(
    isAdmin,
    async (_, { id }, { user }) => {
      const result = await deleteUser(id, user._id);
      return result;
    },
  ),
  addUser: combineResolvers(
    isAdmin,
    async (_, { input }) => {
      const result = await registerMicroService(input);
      const data = await result.json();
      return data;
    },
  ),
  sendInvitation: combineResolvers(
    isAuthenticated,
    async (_, { idInvited }, { user }) => {
      const result = await sendInvitation(idInvited, user._id);
      return result;
    },
  ),
  annulateInvitation: combineResolvers(
    isAuthenticated,
    async (_, { idInvited }, { user }) => {
      const result = await annulateInvitation(idInvited, user._id);
      return result;
    },
  ),
  refuseInvitation: combineResolvers(
    isAuthenticated,
    async (_, { idInvited }, { user }) => {
      const result = await refuseInvitation(idInvited, user._id);
      return result;
    },
  ),
  acceptInvitation: combineResolvers(
    isAuthenticated,
    async (_, { idInvited }, { user }) => {
      const result = await acceptInvitation(idInvited, user._id);
      return result;
    },
  ),
};
