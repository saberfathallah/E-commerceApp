import { graphql } from 'react-apollo';
import ADD_CATEGORY_MUTATION from './addCategoryMutation';
import ALL_CATEGORIES from '../getAllCategories';

const withAddCategoryMutation = graphql(ADD_CATEGORY_MUTATION, {
  props: ({ mutate }) => ({
    addCategoryMutation: (input) => mutate({
      variables: { input },
      refetchQueries: [
        {
          query: ALL_CATEGORIES,
        },
      ],
    }),
  }),
});

export default withAddCategoryMutation;
