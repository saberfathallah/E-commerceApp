import gql from 'graphql-tag';
export default gql`
  mutation removeProductsMutation($id: ID!) {
    deleteProduct(id: $id){
      success
      error
    }
  }
`;
