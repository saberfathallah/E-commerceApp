import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { get, map } from 'lodash';
import AllItems from '../items';
import getItemsCurrentCart from '../../graphql/cart/getItemsCurrentCart';

function Cart({ data, user }) {
  const products = get(data, 'getItemsCurrentCart.items', []);
  const loading = get(data, 'loading', true);
  const numberOfproducts = products.length;

  return (
    <AllItems
      isCartItem
      products={products}
      user={user}
      numberOfproducts={numberOfproducts}
      loading={loading}
    />
  );
}

Cart.propTypes = {
  data: PropTypes.object,
  user: PropTypes.object,
};


export default graphql(getItemsCurrentCart, {
  options: ({ cart }) => {
    const products = get(cart, 'currentCart.cart.items', []);
    const ids = map(products, (product) => product.productId);
    return {
      variables: {
        ids,
      },
    };
  },
})(Cart);
