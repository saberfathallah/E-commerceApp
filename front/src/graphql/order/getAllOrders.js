import gql from 'graphql-tag';

export default gql`
  query getAllOrders {
    getAllOrders {
      orders {
        _id
        total
        totalWithPromotion
        items {
          productId
        }
      }
      error
    }
  }
`;
