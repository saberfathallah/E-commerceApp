import { graphql } from 'react-apollo';
import LOGIN_MUTATION from './loginMutation';

const withLoginMutation = graphql(LOGIN_MUTATION, {
  props: ({ mutate }) => ({
    login: (mail, password) => mutate({
      variables: {
        mail,
        password,
      },
    }),
  }),
});

export default withLoginMutation;

