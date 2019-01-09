import { graphql } from 'react-apollo';
import UPDATE_USER_MUTATION from './updateUserMutation';
import ALL_USERS from '../getAllUsers';

const withUpdateUserMutation = graphql(UPDATE_USER_MUTATION, {
  props: ({ mutate }) => ({
    updateUserMutation: (input, id) => mutate({
      variables: { input, id },
      refetchQueries: [
        {
          query: ALL_USERS,
        },
      ],
    }),
  }),
});

export default withUpdateUserMutation;
