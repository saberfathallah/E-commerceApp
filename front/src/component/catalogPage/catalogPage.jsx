import React from 'react';
import { graphql, compose } from 'react-apollo';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import USER_LOGGED from '../../../src/graphql/user/getUserLogged';
import getProductsByCategoryId from '../../graphql/product/queries/getProductsByCategoryId';
import AllItems from '../items';

function CatalogPage({ data, user }) {
  const products = get(data, 'getProductsByCategoryId.products', []);
  const loading = get(data, 'loading', []);
  const numberOfproducts = products.length;

  return (
    <AllItems
      products={products}
      user={user}
      numberOfproducts={numberOfproducts}
      loading={loading}
    />
  );
}

CatalogPage.propTypes = {
  data: PropTypes.object,
  user: PropTypes.object,
};


export default compose(
  graphql(USER_LOGGED, {
    props: ({ data }) => {
      const user = get(data, 'getUserlogged', {});
      return ({
        user,
      });
    },
  }),
  graphql(getProductsByCategoryId, {
    options: (props) => ({
      variables: {
        id: props.match.params.id,
      },
    }),
  }),
)(CatalogPage);
