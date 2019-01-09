import gql from 'graphql-tag';
export default gql`
  mutation updateUserMutation($input: UserInput, $id: ID!) {
    updateUser(input: $input, id: $id){
      user {
        firstName
      }
      error
    }
  }
`;
