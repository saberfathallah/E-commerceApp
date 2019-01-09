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
    categoriesDetails: async (root) => {
      const categories = await getCategoriesByParentId(root._id);
      return {
        categories: { categories: categories.categories },
        numberOfCategories: categories.categories.length,
      };
    },
    productsDetails: async (root) => {
      const products = await getProductsByCategoryId(root._id);
      return {
        products: { products: products.products },
        numberOfProducts: products.products.length,
      };
    },
  },
};

export const Resolvers = {
  Query: queries.Resolvers,
  Mutation: mutations.Resolvers,
  TypeResolvers,
};
