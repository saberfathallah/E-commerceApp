import * as queries from './queries/orderQueries';
import * as mutations from './mutations/orderMutations';
import order from './types/order';

export const { Query } = queries;

export const type = order;

export const Mutation = mutations.orderMutations;

export const Resolvers = {
  Query: queries.Resolvers,
  Mutation: mutations.Resolvers,
};
