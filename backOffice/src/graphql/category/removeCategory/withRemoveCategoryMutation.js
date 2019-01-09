import { graphql } from 'react-apollo';
import REMOVE_CATEGORY_MUTATION from './removeCategoryMutation';
import ALL_CATEGORIES from '../getAllCategories';
import ALL_PRODUCTS from '../../product/getAllProducts';

const withRemoveCategoryMutation = graphql(REMOVE_CATEGORY_MUTATION, {
  props: ({ mutate }) => ({
    removeCategoryMutation: (id) => mutate({
      variables: { id },
      refetchQueries: [
        {
          query: ALL_CATEGORIES,
        },
        {
          query: ALL_PRODUCTS,
        },
      ],
    }),
  }),
});

export default withRemoveCategoryMutation;
