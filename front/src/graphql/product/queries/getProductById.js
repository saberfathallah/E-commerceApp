import gql from 'graphql-tag';

const GET_PRODUCT_BY_ID = gql`
query getProductById($id: ID!) {
    getProductById(id: $id) {
    product {
      name
      brand
      price
      quantity
      description
      image
      categoryId
      _id
    }
    error
  }
}
`;

export default GET_PRODUCT_BY_ID;
