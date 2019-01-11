import gql from 'graphql-tag';

export default gql`
  query currentCart {
    currentCart {
      cart {
        total
        items {
          productId
          quantity
        }
      }
      error
    }
  }
`;
