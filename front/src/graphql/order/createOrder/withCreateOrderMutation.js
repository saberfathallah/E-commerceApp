import { graphql } from 'react-apollo';
import CREATE_ORDER_MUTATION from './createOrderMutation';
import GET_ALL_ORDERS from '../getAllOrders';

const withCreateOrderMutation = graphql(CREATE_ORDER_MUTATION, {
  props: ({ mutate }) => ({
    createOrderMutation: (input) => mutate({
      variables: { input },
      refetchQueries: [
        {
          query: GET_ALL_ORDERS,
        },
      ],
    }),
  }),
});

export default withCreateOrderMutation;
