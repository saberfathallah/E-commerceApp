import addCategory from '../services/addCategory';
import { combineResolvers } from 'graphql-resolvers';
import { isAuthenticated } from '../../../utils/authorization';

export const categoryMutations =`
  addCategory(input: CategoryInput): categoryResultType
`;

export const Resolvers = {
  addCategory: combineResolvers(
    isAuthenticated,
    async (_, { input }, { user }) => {
    const result = await addCategory(input, user._id);
    return result;
    },
  ),
}