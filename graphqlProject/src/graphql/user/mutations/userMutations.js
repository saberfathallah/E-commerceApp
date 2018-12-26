/* eslint-disable no-underscore-dangle */
import { combineResolvers } from 'graphql-resolvers';
import loginUser from '../services/loginUser';
import registerMicroService from '../services/registerUser';
import deleteUser from '../services/deleteUser';
import { isAdmin } from '../../../utils/authorization';

export const userMutations = `
  registerUser(input: UserInput): User
  loginUser(mail: String, password: String): userLogged
  deleteUser(id: ID!): userdeletedType
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
};
