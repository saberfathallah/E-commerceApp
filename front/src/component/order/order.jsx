import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { get, map } from 'lodash';
import { Icon } from 'semantic-ui-react';
import USER_LOGGED from '../../../src/graphql/user/getUserLogged';
import getOrderById from '../../graphql/order/getOrderById';
import getItemsCurrentCart from '../../graphql/cart/getItemsCurrentCart';
import AllItems from '../items';

function Order({ data, user, orderDetails }) {
  const products = get(data, 'getItemsCurrentCart.items', []);
  const adressUSer = get(orderDetails, 'getOrderById.order.adress', '');
  const NumCommande = get(orderDetails, 'getOrderById.order._id', '');
  const total = get(orderDetails, 'getOrderById.order.total', 0);
  const loading = get(data, 'loading', []);
  if (loading) return <Icon name="circle notched" loading />;

  return (
    <div style={{ textAlign: 'center' }}>
      <p>N° commande: {NumCommande}</p>
      <p>adresse de livraison: {adressUSer}</p>
      <p>prix de commande: {total}</p>
      <p>nombre des produits : {products.length}</p>
      <AllItems
        isOrder
        products={products}
        user={user}
        loading={loading}
      />
    </div>

  );
}

Order.propTypes = {
  data: PropTypes.object,
  user: PropTypes.object,
  orderDetails: PropTypes.object,
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
  graphql(getOrderById, {
    options: (props) => ({
      variables: {
        orderId: props.match.params.id,
      },
    }),
    props: ({ data }) => ({ orderDetails: data }),
  }),
  graphql(getItemsCurrentCart, {
    options: ({ orderDetails }) => {
      const products = get(orderDetails, 'getOrderById.order.items', []);
      const ids = map(products, (product) => product.productId);
      return {
        variables: {
          ids,
        },
      };
    },
  }),
)(Order);
