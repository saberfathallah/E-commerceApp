import { graphql } from 'react-apollo';
import ADD_FAVORITE_MUTATION from './addFavoriteMutation';
import FAVORITE_LIST from '../getFavoriteListQuery';

const withAddFavoriteMutation = graphql(ADD_FAVORITE_MUTATION, {
  props: ({ mutate }) => ({
    addFavoriteMutation: (productId) => mutate({
      variables: { productId },
      refetchQueries: [
        {
          query: FAVORITE_LIST,
        },
      ],
    }),
  }),
});

export default withAddFavoriteMutation;
