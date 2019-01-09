import gql from 'graphql-tag';
export default gql`
  mutation addUserMutation($input: UserInput) {
    addUser(input: $input){
      firstName
    }
  }
`;
