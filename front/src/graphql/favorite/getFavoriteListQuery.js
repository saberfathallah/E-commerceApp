import gql from 'graphql-tag';

const FAVORITE_LIST = gql`
query {
  getFavoriteList {
    error
    favorites {
      _id
      name
      brand
      price
      quantity
      description
    }
  }
}
`;

export default FAVORITE_LIST;
