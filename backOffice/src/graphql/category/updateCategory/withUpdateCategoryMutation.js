import { graphql } from 'react-apollo';
import UPDATE_CATEGORY_MUTATION from './updateCategoryMutation';
import ALL_CATGORIES from '../getAllCategories';

const withUpdateCategoryMutation = graphql(UPDATE_CATEGORY_MUTATION, {
  props: ({ mutate }) => ({
    updateCategoryMutation: (input, id) => mutate({
      variables: { input, id },
      refetchQueries: [
        {
          query: ALL_CATGORIES,
        },
      ],
    }),
  }),
});

export default withUpdateCategoryMutation;
