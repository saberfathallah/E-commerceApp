import gql from 'graphql-tag';
export default gql`
  mutation addFavoriteMutation($productId: ID!) {
    addFavorite(productId: $productId){
      favorite {
        productId
      }
      error
    }
  }
`;
