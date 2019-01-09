import { graphql } from 'react-apollo';
import LOGIN_MUTATION from './loginMutation';
import USER_LOGGED from '../user/getUserLogged';

const withLoginMutation = graphql(LOGIN_MUTATION, {
  props: ({ mutate }) => ({
    login: (mail, password) => mutate({
      variables: {
        mail,
        password,
      },
      refetchQueries: [
        {
          query: USER_LOGGED,
        },
      ],
    }),
  }),
});

export default withLoginMutation;

