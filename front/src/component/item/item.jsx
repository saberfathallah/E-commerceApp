import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { includes, find, get } from 'lodash';
import AddOrRemoveFavorite from '../buttonHeart';
import AddOrRemoveToCart from './addorRemoveToCart';
import RemoveProductFromCart from './removeProductFromCart';
import WrapperItem from './itemWrapper';
import currentCart from '../../graphql/cart/currentCart';
class Item extends Component {
  shouldComponentUpdate(nextProps) {
    const isFavorite = includes(this.props.favortieList, this.props.id);
    const isFavoriteNext = includes(
      nextProps.favortieList,
      nextProps.id
    );
    return (
      this.props.cartItemQuantity !== nextProps.cartItemQuantity ||
      isFavorite !== isFavoriteNext);
  }
  render() {
    const {
      className,
      img,
      title,
      price,
      description,
      favortieList,
      id,
      user,
      quantity,
      cartItemQuantity,
      isCartItem,
      isOrder,
    } = this.props;
    const isFavorite = includes(favortieList, id);

    return (
      <div className={className}>
        {isCartItem && <RemoveProductFromCart productId={id} />}
        <AddOrRemoveFavorite isFavorite={isFavorite} user={user} productId={id} />
        <div style={styles.card}>
          <img
            src={img}
            style={{ width: '100%', height: 250 }}
            alt=""
          />
          <h3>{title}</h3>
          <h3>{price} {'$'}</h3>
          <p style={styles.title}>{description}</p>
          {!isOrder &&
          <AddOrRemoveToCart
            user={user}
            id={id}
            maxQuantity={quantity}
            cartItemQuantity={cartItemQuantity}
            price={price}
          />
          }
        </div>
      </div>
    );
  }
}
Item.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  favortieList: PropTypes.array,
  id: PropTypes.string,
  user: PropTypes.object,
  isCartItem: PropTypes.bool,
  isOrder: PropTypes.bool,
  cartItemQuantity: PropTypes.number,
};

export default compose(
  WrapperItem,
  graphql(currentCart, {
    props: ({ data, ownProps }) => {
      const items = get(data, 'currentCart.cart.items', []);
      const item = find(items, (i) => i.productId === ownProps.id);
      const cartItemQuantity = get(item, 'quantity', 0);
      return {
        cartItemQuantity,
      };
    },
  })
)(Item);

const styles = {
  title: {
    color: '#808080',
    fontSize: 15,
    textAlign: 'center',
  },
  add: {
    border: 'none',
    padding: 8,
    color: 'white',
    backgroundColor: '#000',
    textAlign: 'center',
    cursor: 'pointer',
    width: '100%',
    fontSize: 18,

  },
  delete: {
    border: 'none',
    padding: 8,
    color: 'white',
    backgroundColor: '#F09125',
    textAlign: 'center',
    cursor: 'pointer',
    width: '100%',
    fontSize: 18,

  },
  card: {
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    maxWidth: 300,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
  },
};

