import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { get, map } from 'lodash';
import { Icon } from 'semantic-ui-react';
import InfiniteScroll from 'react-infinite-scroller';
import Item from '../item';
import FAVORITE_LIST from '../../graphql/favorite/getFavoriteListQuery';

class InfiniteScrollItems extends Component {
  state = {
    items: [],
    hasMore: true,
  }

  loadItems = () => {
    const { products } = this.props;
    const { items } = this.state;
    if (products.length > items.length) {
      this.setState({
        items: [...items, ...products.slice(items.length, items.length + 5)],
      });
    } else {
      this.setState({ hasMore: false });
    }
  }

  render() {
    const {
      loading, user, products, favortieList,
    } = this.props;
    const { items, hasMore } = this.state;
    const numberOfproducts = products.length;

    if (loading) {
      return (
        <div
          style={{ textAlign: 'center' }}
        >
          <Icon name="circle notched" loading />
        </div>);
    }
    return (
      <div style={{ textAlign: 'center' }}>
        <p>Total: {numberOfproducts}</p>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadItems}
          hasMore={hasMore}
          loader={<div className="loader" key={0}><Icon name="circle notched" loading /></div>}
          style={{ textAlign: 'center' }}
        >
          {items.map((product) => (<Item
            user={user}
            favortieList={favortieList}
            // eslint-disable-next-line react/jsx-no-duplicate-props
            images={[
              'https://productimages.hepsiburada.net/s/18/135/9801259057202.jpg?v1',
              'https://productimages.hepsiburada.net/s/18/280-413/9801258663986.jpg?v1',
              'https://productimages.hepsiburada.net/s/18/280-413/9801258696754.jpg?v1',
              'https://productimages.hepsiburada.net/s/18/280-413/9801258729522.jpg?v1',
              'https://productimages.hepsiburada.net/s/18/280-413/9801258762290.jpg?v1',
            ]}
            title={product.name}
            description={product.description}
            price={product.price}
            quantity={product.quantity}
            rate={product.rate}
            userRateCount={product.userRateCount}
            isPromo={product.isPromo}
            promotions={product.promotions}
            // eslint-disable-next-line no-underscore-dangle
            id={product._id}
            // eslint-disable-next-line no-underscore-dangle
            key={product._id}
          />))}
        </InfiniteScroll>
      </div>
    );
  }
}

InfiniteScrollItems.propTypes = {
  loading: PropTypes.bool,
  products: PropTypes.array,
  user: PropTypes.object,
  favortieList: PropTypes.array,
};

export default graphql(FAVORITE_LIST, {
  skip: ({ user }) => !get(user, 'firstName', false),
  props: ({ data }) => {
    const list = get(data, 'getFavoriteList.favorites', []);
    // eslint-disable-next-line no-underscore-dangle
    const productsIds = map(list, (product) => get(product, '_id', ''));

    return ({
      favortieList: productsIds,
    });
  },
})(InfiniteScrollItems);
