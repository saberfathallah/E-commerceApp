import getAllUsers from '../services/getAllUsers';

export const Query =`
  getAllUsers: [User]
`;

export const Resolvers = {
  getAllUsers: async () => {
    const allUsers = await getAllUsers();
    return allUsers;    
  },    
};
