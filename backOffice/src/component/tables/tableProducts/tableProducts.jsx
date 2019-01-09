/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import { map, get } from 'lodash';
import { Button, Icon } from 'semantic-ui-react';
import ALL_PRODUCTS from '../../../graphql/product/getAllProducts';
import withRemoveProductMutation from '../../../graphql/product/removeProduct/withRemoveProductsMutation';
import HeaderContent from '../../headerContent';
import withTabelWrapper from '../withTabelWrapper';

function TableProducts({
  data,
  removeProductMutation,
  history,
  className,
}) {
  const products = get(data, 'getAllProducts.products', []);
  const loading = get(data, 'loading', true);

  if (loading) return <Icon name="circle notched" loading />;
  return (
    <div className={className}>
      <HeaderContent length={products.length} type="Product" />
      <section>
        <h1>Table produits</h1>
        <div className="tbl-header">
          <table cellPadding="0" cellSpacing="0">
            <thead>
              <tr>
                <th>NAME</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>DESCRIPTION</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="tbl-content">
          <table cellPadding="0" cellSpacing="0">
            <tbody>
              {map(products, (prod, index) => (
                <tr key={index}>
                  <td>{prod.name}</td>
                  <td>{prod.price}</td>
                  <td>{prod.quantity}</td>
                  <td>{prod.description}</td>
                  <td>
                    <Button
                      color="red"
                      content="Remove"
                      icon="remove"
                      labelPosition="left"
                      onClick={() => removeProductMutation(prod._id)}
                    />
                    <Button
                      color="green"
                      content="Edit"
                      icon="edit"
                      labelPosition="left"
                      onClick={() => history.push(`/editProduct/${prod._id}`)}
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
TableProducts.propTypes = {
  data: PropTypes.object,
  history: PropTypes.object,
  className: PropTypes.string,
  removeProductMutation: PropTypes.func,
};

export default
compose(
  withRemoveProductMutation,
  graphql(ALL_PRODUCTS),
  withRouter,
  withTabelWrapper
)(TableProducts);
