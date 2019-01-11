import { graphql } from 'react-apollo';
import ADD_PRODUCT_TO_CART_MUTATION from './addProductToCartMutation';
import currentCart from '../currentCart';

const withAddProductToCartMutation = graphql(ADD_PRODUCT_TO_CART_MUTATION, {
  props: ({ mutate }) => ({
    addProductToCartMutation: (productId, quantity, price) => mutate({
      variables: { productId, quantity, price },
      refetchQueries: [
        {
          query: currentCart,
        },
      ],
    }),
  }),
});

export default withAddProductToCartMutation;
