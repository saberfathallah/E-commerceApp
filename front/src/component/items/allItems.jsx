import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { get, map } from 'lodash';
import { Icon } from 'semantic-ui-react';
import getAllProducts from '../../graphql/product/queries/getAllProducts';
import FAVORITE_LIST from '../../graphql/favorite/getFavoriteListQuery';
import allItemsWrapper from './allItemsWrapper';
import Item from '../item';

function AllItems({
  className, products, numberOfproducts, loading, favortieList, user,
}) {
  const items = map(products, (product, index) => (
    <Item
      key={index}
      user={user}
      favortieList={favortieList}
      img="../asset/product1.png"
      title={product.name}
      description={product.description}
      price={product.price}
      quantity={product.quantity}
      // eslint-disable-next-line no-underscore-dangle
      id={product._id}
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
  products: PropTypes.array,
  user: PropTypes.object,
  favortieList: PropTypes.array,
  numberOfproducts: PropTypes.number,
  loading: PropTypes.bool,
};

export default compose(
  allItemsWrapper,
  graphql(getAllProducts),
  graphql(FAVORITE_LIST, {
    skip: ({ user }) => !get(user, 'firstName', false),
    props: ({ data }) => {
      const list = get(data, 'getFavoriteList.favorites', []);
      // eslint-disable-next-line no-underscore-dangle
      const productsIds = map(list, (product) => product._id);

      return ({
        favortieList: productsIds,
      });
    },
  }),
)(AllItems);
