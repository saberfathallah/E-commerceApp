import { graphql } from 'react-apollo';
import ADD_USER_MUTATION from './addUserMutation';
import ALL_USERS from '../getAllUsers';

const withAddUserMutation = graphql(ADD_USER_MUTATION, {
  props: ({ mutate }) => ({
    addUserMutation: (input) => mutate({
      variables: { input },
      refetchQueries: [
        {
          query: ALL_USERS,
        },
      ],
    }),
  }),
});

export default withAddUserMutation;
