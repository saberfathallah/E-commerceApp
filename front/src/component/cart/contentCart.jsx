import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { get, map } from 'lodash';
import { withRouter } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import AllItems from '../items';
import getItemsCurrentCart from '../../graphql/cart/getItemsCurrentCart';
import withCreateOrderMutation from '../../graphql/order/createOrder/withCreateOrderMutation';

function ContentCart({
  data, user, active, cart, createOrderMutation, history,
}) {
  const products = get(data, 'getItemsCurrentCart.items', []);
  const loading = get(data, 'loading', true);
  const numberOfproducts = products.length;
  const total = get(cart, 'currentCart.cart.total', 0);
  const itemsToOrder = get(cart, 'currentCart.cart.items', []);

  const createOrder = async () => {
    const items = map(itemsToOrder, (item) => ({
      quantity: item.quantity,
      productId: item.productId,
    }));

    await createOrderMutation({ total, items, adress: user.adress });
    history.push('/');
  };

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
        <p>Total panier: {total}</p>
        <p>Total produits: {numberOfproducts}</p>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <p>Si vous voulez commander cette pannier cliquer sur ACHETER</p>
      <Button color="green" onClick={() => createOrder()}>ACHETER</Button>
    </div>
  );
}

ContentCart.propTypes = {
  history: PropTypes.object,
  data: PropTypes.object,
  user: PropTypes.object,
  cart: PropTypes.object,
  active: PropTypes.string,
  createOrderMutation: PropTypes.func,
};

export default compose(
  withRouter,
  graphql(getItemsCurrentCart, {
    options: ({ cart }) => {
      const products = get(cart, 'currentCart.cart.items', []);
      const ids = map(products, (product) => product.productId);
      return {
        variables: {
          ids,
        },
      };
    },
  }),
  withCreateOrderMutation
)(ContentCart);
