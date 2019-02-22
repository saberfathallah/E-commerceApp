import { graphql } from 'react-apollo';
import MODIFY_RATING_PRODUCT_MUTATION from './modifyRatingProductMutation';

const withModifyRatingProductMutation = graphql(MODIFY_RATING_PRODUCT_MUTATION, {
  props: ({ mutate }) => ({
    modifyRatingProductMutation: (id, rate) => mutate({
      variables: { id, rate },
    }),
  }),
});

export default withModifyRatingProductMutation;
