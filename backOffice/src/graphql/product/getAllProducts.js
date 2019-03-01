import gql from 'graphql-tag';

const ALL_PRODUCTS = gql`
query {
  getAllProducts {
    products {
      name
      price
      quantity
      description
      _id
      isPromo
      promotions {
        startDatePromotion
        endDatePromotion
        value
        label
      }
    }
    error
  }
}
`;

export default ALL_PRODUCTS;
