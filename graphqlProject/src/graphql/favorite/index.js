import * as queries from './queries/favoriteQueries';
import * as mutations from './mutations/favoriteMutations';
import favorite from './types/favorite';

export const { Query } = queries;

export const type = favorite;

export const Mutation = mutations.favoriteMutations;

export const Resolvers = {
  Query: queries.Resolvers,
  Mutation: mutations.Resolvers,
};
