import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { get, map } from 'lodash';
import { Icon } from 'semantic-ui-react';
import getAllProducts from '../../graphql/product/queries/getAllProducts';

import allItemsWrapper from './allItemsWrapper';
import Item from '../item';

function AllItems({ className, data }) {
  const products = get(data, 'getAllProducts.products', []);
  const numberOfproducts = products.length;
  const loading = get(data, 'loading', true);
  const items = map(products, (product, index) => (
    <Item
      key={index}
      img="../asset/product1.png"
      title={product.name}
      description={product.description}
      price={product.price}
    />));

  return (
    <div className={className}>
      {loading ?
        <Icon name="circle notched" loading />
        :
        <div>
          <p>Total: {numberOfproducts}</p>
          <div className="articles">
            {items}
          </div>
        </div>
      }
    </div>
  );
}

AllItems.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
};

export default compose(allItemsWrapper, graphql(getAllProducts))(AllItems);
