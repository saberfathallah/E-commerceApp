/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { includes, find, get } from 'lodash';
import format from 'date-fns/format';
import AddOrRemoveFavorite from '../buttonHeart';
import AddOrRemoveToCart from './addorRemoveToCart';
import RemoveProductFromCart from './removeProductFromCart';
import WrapperItem from './itemWrapper';
import currentCart from '../../graphql/cart/currentCart';
import RatingProduct from '../rating';

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
      rate,
      userRateCount,
      isPromo,
      promotions,
    } = this.props;
    const isFavorite = includes(favortieList, id);

    return (
      <div className={className}>
        {isCartItem && <RemoveProductFromCart productId={id} />}
        <AddOrRemoveFavorite isFavorite={isFavorite} user={user} productId={id} />
        <div style={styles.card}>
          <img
            src={img}
            style={{ width: '100%', height: 200 }}
            alt=""
          />
          <h3>{title}</h3>
          <div className="item__price-tag">
            <p className="item__price-line-through">
              {price} {'$'}
            </p>
            <p>{price / 2 } {'$'}</p>
          </div>
          <p style={styles.title}>{description}</p>
          <div className="item-promotion">
            {isPromo &&
            <div>
              <img className="item_img-promo" src="../asset/Label-offre-ic@2x.png" />
              <p style={{ float: 'left' }}>{promotions.label}</p>
              <div className="item-promotion-date">
                <p>{`de ${format(new Date(Number(promotions.startDatePromotion)), 'DD/MM/YYYY')}`}</p>
                <p>{`jusqu'a ${format(new Date(Number(promotions.endDatePromotion)), 'DD/MM/YYYY')}`}</p>
              </div>
            </div>
            }
          </div>
          <RatingProduct id={id} rate={rate} />
          <p style={{ fontSize: '7px', float: 'right' }}>{userRateCount} personnes</p>
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
  rate: PropTypes.number,
  userRateCount: PropTypes.number,
  isPromo: PropTypes.bool,
  promotions: PropTypes.object,
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

