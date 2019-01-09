import { graphql } from 'react-apollo';
import UPDATE_PRODUCT_MUTATION from './updateProductMutation';
import ALL_PRODUCTS from '../getAllProducts';

const withUpdateProductMutation = graphql(UPDATE_PRODUCT_MUTATION, {
  props: ({ mutate }) => ({
    updateProductMutation: (input, id) => mutate({
      variables: { input, id },
      refetchQueries: [
        {
          query: ALL_PRODUCTS,
        },
      ],
    }),
  }),
});

export default withUpdateProductMutation;
