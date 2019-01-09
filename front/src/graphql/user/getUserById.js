import gql from 'graphql-tag';

const GET_USER_BY_ID = gql`
query getUserById($id: ID!) {
    getUserById(id: $id) {
    user {
      firstName
      lastName
      age
      adresse
      mail
      password
      _id
    }
    error
  }
}
`;

export default GET_USER_BY_ID;
