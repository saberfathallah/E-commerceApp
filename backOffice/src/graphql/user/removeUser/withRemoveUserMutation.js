import { graphql } from 'react-apollo';
import REMOVE_USER_MUTATION from './removeUserMutation';
import ALL_USERS from '../getAllUsers';

const withRemoveUserMutation = graphql(REMOVE_USER_MUTATION, {
  props: ({ mutate }) => ({
    removeUserMutation: (id) => mutate({
      variables: { id },
      refetchQueries: [
        {
          query: ALL_USERS,
        },
      ],
    }),
  }),
});

export default withRemoveUserMutation;
