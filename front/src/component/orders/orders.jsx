/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import { map, get } from 'lodash';
import { Button, Icon } from 'semantic-ui-react';
import GET_ALL_ORDERS from '../../graphql/order/getAllOrders';
import withOrdersWrapper from './withOrdersWrapper';

function Orders({
  data,
  history,
  className,
}) {
  const orders = get(data, 'getAllOrders.orders', []);
  const loading = get(data, 'loading', true);

  if (loading) return <Icon name="circle notched" loading />;
  return (
    <div className={className}>
      <section>
        <h1>Vos Commandes</h1>
        <div className="tbl-header">
          <table cellPadding="0" cellSpacing="0">
            <thead>
              <tr>
                <th>N° commande</th>
                <th>total</th>
                <th>NUMBER OF PRODUCTS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="tbl-content">
          <table cellPadding="0" cellSpacing="0">
            <tbody>
              {map(orders, (order, index) => (
                <tr key={index}>
                  <td>{order._id}</td>
                  <td>{order.total}</td>
                  <td>{order.items.length}</td>
                  <td>
                    <Button
                      color="green"
                      content="details"
                      icon="edit"
                      labelPosition="left"
                      onClick={() => history.push(`/detailsORder/${order._id}`)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
Orders.propTypes = {
  data: PropTypes.object,
  history: PropTypes.object,
  className: PropTypes.string,
};

export default compose(
  graphql(GET_ALL_ORDERS),
  withRouter,
  withOrdersWrapper,
)(Orders);
