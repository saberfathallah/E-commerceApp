import * as queries from './queries/cartQueries';
import * as mutations from './mutations/cartMutations';
import cart from './types/cart';

export const { Query } = queries;

export const type = cart;

export const Mutation = mutations.cartMutations;

export const Resolvers = {
  Query: queries.Resolvers,
  Mutation: mutations.Resolvers,
};
