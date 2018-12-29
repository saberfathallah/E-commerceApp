import gql from 'graphql-tag';

export default gql`
query borni {
  users {
    firstName
  }
}
`;
