import { graphql } from 'react-apollo';
import REMOVE_PRODUCT_MUTATION from './removeProductMutation';
import ALL_PRODUCTS from '../getAllProducts';
import ALL_CATEGORIES from '../../category/getAllCategories';

const withRemoveProductMutation = graphql(REMOVE_PRODUCT_MUTATION, {
  props: ({ mutate }) => ({
    removeProductMutation: (id) => mutate({
      variables: { id },
      refetchQueries: [
        {
          query: ALL_PRODUCTS,
        },
        {
          query: ALL_CATEGORIES,
        },
      ],
    }),
  }),
});

export default withRemoveProductMutation;
