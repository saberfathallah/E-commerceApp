/* eslint-disable no-underscore-dangle */
import { combineResolvers } from 'graphql-resolvers';
import getFavoriteList from '../services/getFavoriteList';
import { isAuthenticated } from '../../../utils/authorization';

export const Query = `
  getFavoriteList: favoriteListResultType
`;

export const Resolvers = {
  getFavoriteList: combineResolvers(
    isAuthenticated,
    async (_, $, { user }) => {
      const favorites = await getFavoriteList(user._id);
      return { favorites };
    },
  ),
};
