import gql from 'graphql-tag';

export default gql`
  query currentCart {
    currentCart {
      cart {
        total
        totalWithPromotion
        items {
          productId
          quantity
        }
      }
      error
    }
  }
`;
