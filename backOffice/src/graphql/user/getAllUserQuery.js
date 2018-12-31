import gql from 'graphql-tag';

const ALL_USER_QUERY = gql`
query {
  getAllUsers {
    error
    users {
      firstName
    }
  }
}
`;

export default ALL_USER_QUERY;
