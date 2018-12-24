import fetch from 'node-fetch';
import dotenv from 'dotenv';
import loginUser from '../services/loginUser';
import registerMicroService from '../services/registerUser';

export const userMutations =`
  registerUser(input: UserInput): User
  loginUser(mail: String, password: String): userLogged
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
    }
}