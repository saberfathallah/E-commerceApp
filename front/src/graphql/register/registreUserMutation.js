import gql from 'graphql-tag';
export default gql`
  mutation registreUser($input: UserInput!) {
    registerUser(input: $input){
      firstName
    }
  }
`;
