/* eslint-disable no-underscore-dangle */
import { combineResolvers } from 'graphql-resolvers';
import addFavorite from '../services/addFavorite';
import { isAuthenticated } from '../../../utils/authorization';
import deleteFavorite from '../services/deleteFavorite';

export const favoriteMutations = `
  addFavorite(productId: ID!): favoriteResultType
  deleteFavorite(productId: ID!): favoriteDeletedType
`;

export const Resolvers = {
  addFavorite: combineResolvers(
    isAuthenticated,
    async (_, { productId }, { user }) => {
      const result = await addFavorite(productId, user._id);
      return result;
    },
  ),
  deleteFavorite: combineResolvers(
    isAuthenticated,
    async (_, { productId }, { user }) => {
      const result = await deleteFavorite(productId, user._id);
      return result;
    },
  ),
};
