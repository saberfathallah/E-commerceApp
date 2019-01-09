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
    }
    error
  }
}
`;

export default ALL_PRODUCTS;
