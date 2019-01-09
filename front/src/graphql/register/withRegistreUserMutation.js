import { graphql } from 'react-apollo';
import REGISTER_USER_MUTATION from './registreUserMutation';

const withRegistreUserMutation = graphql(REGISTER_USER_MUTATION, {
  props: ({ mutate }) => ({
    registreUser: (input) => mutate({
      variables: {
        input,
      },
    }),
  }),
});

export default withRegistreUserMutation;
