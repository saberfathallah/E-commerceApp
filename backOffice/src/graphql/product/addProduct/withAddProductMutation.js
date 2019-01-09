import { graphql } from 'react-apollo';
import ADD_PRODUCT_MUTATION from './addProductMutation';
import ALL_PRODUCTS from '../getAllProducts';
import ALL_CATEGORIES from '../../category/getAllCategories';

const withAddProductMutation = graphql(ADD_PRODUCT_MUTATION, {
  props: ({ mutate }) => ({
    addProductMutation: (input) => mutate({
      variables: { input },
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

export default withAddProductMutation;
