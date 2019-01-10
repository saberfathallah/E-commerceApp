import { graphql } from 'react-apollo';
import DELETE_FAVORITE_MUTATION from './deleteFavoriteMutation';
import FAVORITE_LIST from '../getFavoriteListQuery';

const withDeleteFavoriteMutation = graphql(DELETE_FAVORITE_MUTATION, {
  props: ({ mutate }) => ({
    deleteFavoriteMutation: (productId) => mutate({
      variables: { productId },
      refetchQueries: [
        {
          query: FAVORITE_LIST,
        },
      ],
    }),
  }),
});

export default withDeleteFavoriteMutation;
