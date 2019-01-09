import gql from 'graphql-tag';

const ALL_USERS = gql`
query {
  getAllUsers {
    users {
      firstName
      lastName
      age
      adress
      mail
      _id
    }
    error
  }
}
`;

export default ALL_USERS;
