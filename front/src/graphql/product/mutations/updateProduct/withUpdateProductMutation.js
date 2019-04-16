import { graphql } from 'react-apollo';
import UPDATE_PRODUCT_MUTATION from './updateProductMutation';

const withUpdateProductMutation = graphql(UPDATE_PRODUCT_MUTATION, {
  props: ({ mutate }) => ({
    updateProductMutation: (input, id) => mutate({
      variables: { input, id },
    }),
  }),
});

export default withUpdateProductMutation;
