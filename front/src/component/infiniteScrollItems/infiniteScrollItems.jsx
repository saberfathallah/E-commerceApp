import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import InfiniteScroll from 'react-infinite-scroller';
import Item from '../item';

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
    const { loading, user, products } = this.props;
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
          loader={<div className="loader" key={0}>loading...</div>}
          style={{ textAlign: 'center' }}
        >
          {items.map((product) => (<Item
            user={user}
            img="../asset/product1.png"
            title={product.name}
            description={product.description}
            price={product.price}
            quantity={product.quantity}
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
};

export default InfiniteScrollItems;
