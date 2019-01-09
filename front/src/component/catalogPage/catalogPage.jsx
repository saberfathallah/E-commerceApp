import React from 'react';
import { graphql, compose } from 'react-apollo';
import { map, get } from 'lodash';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import Item from '../item';
import getProductsByCategoryId from '../../graphql/product/queries/getProductsByCategoryId';
import allItemsWrapper from '../items/allItemsWrapper';

function CatalogPage({ className, data }) {
  const products = get(data, 'getProductsByCategoryId.products', []);
  const loading = get(data, 'loading', []);
  const numberOfproducts = products.length;

  const allProducts = map(products, (prod, index) => (
    <Item
      key={index}
      img="../asset/product1.png"
      title={prod.name}
      description={prod.description}
      price={prod.price}
    />
  ));

  return (
    <div className={className} >
      {loading ?
        <Icon name="circle notched" loading />
        :
        <div>
          {numberOfproducts === 0 ?
            <p>impty products</p>
            :
            <div>
              <p>Total: {numberOfproducts}</p>
              <div className="articles">
                {allProducts}
              </div>
            </div>
          }
        </div>
      }
    </div>
  );
}

CatalogPage.propTypes = {
  data: PropTypes.object,
  className: PropTypes.string,
};


export default compose(
  graphql(getProductsByCategoryId, {
    options: (props) => ({
      variables: {
        id: props.match.params.id,
      },
    }),
  }),
  allItemsWrapper
)(CatalogPage);
