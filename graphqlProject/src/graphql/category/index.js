import * as queries from './queries/categoryQueries';
import * as mutations from './mutations/categoryMutations';
import category from './types/category';

export const { Query } = queries;

export const type = category;

export const Mutation = mutations.categoryMutations;

export const Resolvers = {
  Query : queries.Resolvers,
  Mutation: mutations.Resolvers,
};