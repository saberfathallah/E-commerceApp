import { graphql } from 'react-apollo';
import UPDATE_QUANTITY_OR_REMOVE_PRODUCT_MUTATION from './updateQuantityOrRemoveProductMutation';
import currentCart from '../currentCart';

const withUpdateQuantityOrRemoveProductMutation =
  graphql(UPDATE_QUANTITY_OR_REMOVE_PRODUCT_MUTATION, {
    props: ({ mutate }) => ({
      updateQuantityOrRemoveProductFromCart: (productId, quantity) => mutate({
        variables: { productId, quantity },
        refetchQueries: [
          {
            query: currentCart,
          },
        ],
      }),
    }),
  });

export default withUpdateQuantityOrRemoveProductMutation;
