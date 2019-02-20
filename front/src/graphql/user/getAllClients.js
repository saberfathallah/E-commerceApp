import gql from 'graphql-tag';

const ALL_CLIENTS = gql`
query {
  getAllClients {
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

export default ALL_CLIENTS;
