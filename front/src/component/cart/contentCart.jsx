import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { get, map } from 'lodash';
import AllItems from '../items';
import getItemsCurrentCart from '../../graphql/cart/getItemsCurrentCart';

function ContentCart({
  data, user, active, cart,
}) {
  const products = get(data, 'getItemsCurrentCart.items', []);
  const loading = get(data, 'loading', true);
  const numberOfproducts = products.length;
  const totalCart = get(cart, 'currentCart.cart.total', 0);

  if (active === 'cartDetails') {
    return (
      <div style={{ width: '100%' }}>
        <AllItems
          isCartItem
          products={products}
          user={user}
          numberOfproducts={numberOfproducts}
          loading={loading}
        />
      </div>
    );
  }

  if (active === 'deliveryDetails') {
    return (
      <div style={{ width: '100%' }}>
        <p>adresse de livraion: {user.adress}</p>
        <p>Total panier: {totalCart}</p>
        <p>Total produits: {numberOfproducts}</p>
      </div>
    );
  }

  return (
    <div style={{ width: '100%' }}>
      <button>achéter</button>
    </div>
  );
}

ContentCart.propTypes = {
  data: PropTypes.object,
  user: PropTypes.object,
  cart: PropTypes.object,
  active: PropTypes.string,
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
})(ContentCart);
