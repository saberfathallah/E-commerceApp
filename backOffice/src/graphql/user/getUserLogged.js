import gql from 'graphql-tag';

const USER_LOGGED = gql`
query {
  getUserlogged {
    firstName
    lastName
    type
  }
}
`;

export default USER_LOGGED;
