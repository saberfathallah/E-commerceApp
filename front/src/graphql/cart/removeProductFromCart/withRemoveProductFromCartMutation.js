import { graphql } from 'react-apollo';
import REMOVE_PRODUCT_FROM_CART_MUTATION from './removeProductFromCartMutation';
import currentCart from '../currentCart';

const withRemoveProductFromCartMutation = graphql(REMOVE_PRODUCT_FROM_CART_MUTATION, {
  props: ({ mutate }) => ({
    addProductToCartMutation: (productId) => mutate({
      variables: { productId },
      refetchQueries: [
        {
          query: currentCart,
        },
      ],
    }),
  }),
});

export default withRemoveProductFromCartMutation;
