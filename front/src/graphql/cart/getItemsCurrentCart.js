import gql from 'graphql-tag';

export default gql`
  query getItemsCurrentCart($ids: [ID]) {
    getItemsCurrentCart(ids: $ids) {
      items {
        name
        description
        price
        quantity
        image
        rate
        userRateCount
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
