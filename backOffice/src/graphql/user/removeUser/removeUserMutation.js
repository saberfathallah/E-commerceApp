import gql from 'graphql-tag';
export default gql`
  mutation removeUserMutation($id: ID!) {
    deleteUser(id: $id){
      success
      error
    }
  }
`;
