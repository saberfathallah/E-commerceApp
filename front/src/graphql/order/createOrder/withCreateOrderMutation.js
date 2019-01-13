import { graphql } from 'react-apollo';
import CREATE_ORDER_MUTATION from './createOrderMutation';
import GET_ALL_ORDERS from '../getAllOrders';
import GET_CURRENT_CART from '../../cart/currentCart';
const withCreateOrderMutation = graphql(CREATE_ORDER_MUTATION, {
  props: ({ mutate }) => ({
    createOrderMutation: (input) => mutate({
      variables: { input },
      refetchQueries: [
        {
          query: GET_ALL_ORDERS,
        },
        {
          query: GET_CURRENT_CART,
        },
      ],
    }),
  }),
});

export default withCreateOrderMutation;
