import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { get } from 'lodash';
import getAllProducts from '../../graphql/product/queries/getAllProducts';
import AllItems from '../items';

function Content({
  data, user,
}) {
  const products = get(data, 'getAllProducts.products', []);
  const numberOfproducts = products.length;
  const loading = get(data, 'loading', true);

  return (
    <AllItems
      products={products}
      user={user}
      numberOfproducts={numberOfproducts}
      loading={loading}
    />
  );
}

Content.propTypes = {
  data: PropTypes.object,
  user: PropTypes.object,
};

export default graphql(getAllProducts)(Content);
