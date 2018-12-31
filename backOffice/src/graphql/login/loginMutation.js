import gql from 'graphql-tag';
export default gql`
  mutation login($mail: String, $password: String) {
    loginUser(mail: $mail, password: $password){
      token
      user {
        firstName
      }
      error
    }
  }
`;
