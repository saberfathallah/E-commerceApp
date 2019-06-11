import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import { Button, Image } from 'semantic-ui-react';
import withAddProductToCartMutation from '../../graphql/cart/addProductToCart/withAddProductToCartMutation';
import withUpdateQuantityOrRemoveProductMutation from '../../graphql/cart/updateQuantityOrRemoveProduct/withUpdateQuantityOrRemoveProductMutation';
class AddOrRemoveToCart extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.cartItemQuantity !== nextProps.cartItemQuantity;
  }
  render() {
    const {
      className,
      addProductToCartMutation,
      updateQuantityOrRemoveProductFromCart,
      cartItemQuantity,
      maxQuantity,
      price,
      id,
      isPromo,
      promotionPrice,
      addEventhandler,
      history,
    } = this.props;

    return (
      <div className={className}>
        {cartItemQuantity > 0 ?

          <Button.Group className="product__plus-and-minus" attached="bottom" size="small">
            <Button
              basic
              icon
              color="red"
              size="small"
              onClick={() => updateQuantityOrRemoveProductFromCart(id, 1)}
            >
              <Image name="minus" src="../asset/btn-minus_2x.png" />
            </Button>
            <Button style={{ background: 'white' }} size="small">{cartItemQuantity}</Button>
            <Button
              disabled={maxQuantity === cartItemQuantity}
              basic
              color="green"
              size="small"
              onClick={() =>
                addProductToCartMutation(id, 1, price, isPromo, price - promotionPrice)}
            >
              <Image name="plus" src="../asset/btn-plus_2x.png" />
            </Button>
          </Button.Group>
          :
          <button
            style={styles.add}
            id={`event-${id}`}
            onClick={() => {
              if (localStorage.getItem('token')) {
                addProductToCartMutation(id, 1, price, isPromo, price - promotionPrice);
              } else {
                addEventhandler('click', `#event-${id}`);
                history.push('/login');
              }
            }
            }
          >
            <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
            Add to basket
          </button>
        }
      </div>
    );
  }
}

AddOrRemoveToCart.propTypes = {
  className: PropTypes.string,
  addProductToCartMutation: PropTypes.func,
  updateQuantityOrRemoveProductFromCart: PropTypes.func,
  price: PropTypes.number,
  maxQuantity: PropTypes.number,
  cartItemQuantity: PropTypes.number,
  id: PropTypes.string,
  isPromo: PropTypes.bool,
  promotionPrice: PropTypes.number,
  addEventhandler: PropTypes.func,
  history: PropTypes.object,
};

export default compose(
  withRouter,
  withAddProductToCartMutation,
  withUpdateQuantityOrRemoveProductMutation,
)(AddOrRemoveToCart);
const styles = {
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
};
