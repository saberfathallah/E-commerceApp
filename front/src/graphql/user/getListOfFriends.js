import gql from 'graphql-tag';

const ALL_FRIENDS = gql`
query {
  getListOfFriends {
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

export default ALL_FRIENDS;
