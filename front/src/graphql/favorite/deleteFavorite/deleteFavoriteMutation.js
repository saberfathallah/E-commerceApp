import gql from 'graphql-tag';
export default gql`
  mutation deleteFavoriteMutation($productId: ID!) {
    deleteFavorite(productId: $productId){
      success
      error
    }
  }
`;
