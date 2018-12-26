/* eslint-disable no-underscore-dangle */
import * as queries from './queries/categoryQueries';
import * as mutations from './mutations/categoryMutations';
import category from './types/category';
import getCategoriesByParentId from './services/getCategriesByParentId';
import getProductsByCategoryId from './services/getProductsByCategoryId';

export const { Query } = queries;

export const type = category;

export const Mutation = mutations.categoryMutations;

const TypeResolvers = {
  Category: {
    categories: async (root) => {
      const result = await getCategoriesByParentId(root._id);
      return result;
    },
    products: async (root) => {
      const result = await getProductsByCategoryId(root._id);
      return result;
    },
  },
};

export const Resolvers = {
  Query: queries.Resolvers,
  Mutation: mutations.Resolvers,
  TypeResolvers,
};
