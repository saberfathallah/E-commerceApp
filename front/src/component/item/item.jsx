/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';
import { includes, find, get } from 'lodash';
import { connect } from 'react-redux';
import format from 'date-fns/format';
import AddOrRemoveFavorite from '../buttonHeart';
import AddOrRemoveToCart from './addorRemoveToCart';
import RemoveProductFromCart from './removeProductFromCart';
import WrapperItem from './itemWrapper';
import currentCart from '../../graphql/cart/currentCart';
import RatingProduct from '../rating';
import getPromotionPrice from '../../utils/getPromotionPrice';
import { cumulativeOffSet } from '../../utils/cumulativeOffSet';
import SlideDots from '../slideDots';
import withUpdateProductMutation from '../../graphql/product/mutations/updateProduct/withUpdateProductMutation';
import { addEvent } from '../../utils/events/actions';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: this.props.images[0],
      aItem: 0,
      expireDate: '',
    };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.setTimer();
  }

  shouldComponentUpdate(nextProps, nextState) {
    const isFavorite = includes(this.props.favortieList, this.props.id);
    const isFavoriteNext = includes(
      nextProps.favortieList,
      nextProps.id
    );
    return (
      this.props.cartItemQuantity !== nextProps.cartItemQuantity ||
      isFavorite !== isFavoriteNext || this.state.aItem !== nextState.aItem
      || this.state.expireDate !== nextState.expireDate
    );
  }

  setTimer() {
    const { isPromo, promotions } = this.props;
    if (isPromo && promotions) {
      setInterval(async () => {
        const dateNow = new Date();
        const expireD = Number(get(this.props.promotions, 'endDatePromotion', null));
        const dateNowStamp = new Date(dateNow).getTime();
        const diff = expireD - dateNowStamp;
        const dateEnd = new Date(expireD);
        if (diff > 0) {
          let seconds = Math.floor((dateEnd - dateNow) / 1000);
          let minutes = Math.floor(seconds / 60);
          let hours = Math.floor(minutes / 60);
          const days = Math.floor(hours / 24);
          hours -= (days * 24);
          minutes = minutes - (days * 24 * 60) - (hours * 60);
          seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);
          const expireDate = `reste: ${days} Jours, ${hours} Heurs, ${minutes} Minutes et ${seconds} Secondes`;
          this.setState({ expireDate });
        } else {
          await this.props.updateProductMutation({
            isPromo: false,
          }, this.props.id);
        }
      }, 1000);
    }
  }

  // fix validation date date end > date start and date start> date now

  handleImageChange = (e) => {
    const { images } = this.props;
    const currentX = e.clientX - cumulativeOffSet(this.imageRef.current).left;
    // hover actuel par aport a l''image
    const part = this.imageRef.current.clientWidth / images.length;

    let imgIndex = Math.ceil(currentX / part) - 1;
    if (imgIndex < 0) {
      imgIndex = 0;
    }

    if (imgIndex >= images.length) {
      imgIndex = images.length - 1;
    }
    this.setState({ aItem: imgIndex });
    this.setState({ img: images[imgIndex] });
  };

  handleMouseOut = () => {
    this.setState({ img: this.props.images[0] });
    this.setState({ aItem: 0 });
  };

changeImage = (i) => {
  this.setState({ img: this.props.images[i] });
  this.setState({ aItem: i });
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
    addEventhandler,
  } = this.props;
  const { expireDate } = this.state;
  const isFavorite = includes(favortieList, id);
  const promotionPrice = isPromo ? getPromotionPrice(price, promotions.value) : 0;
  const dateStart = new Date(Number(get(promotions, 'startDatePromotion', null)));
  const dateEnd = new Date(Number(get(promotions, 'endDatePromotion', null)));
  return (
    <div className={className}>
      {isCartItem && <RemoveProductFromCart productId={id} />}
      <AddOrRemoveFavorite
        isFavorite={isFavorite}
        user={user}
        productId={id}
        addEventhandler={addEventhandler}
      />
      <div style={styles.card}>
        <Link to={`/itemDetails/${id}`} className="product__link">
          <img
            onMouseMove={(e) => this.handleImageChange(e)}
            onMouseOut={() => this.handleMouseOut()}
            style={{ width: 209, height: 251 }}
            src={this.state.img}
            alt={title}
            ref={this.imageRef}
          />
          <SlideDots
            len={this.props.images.length}
            activeItem={this.state.aItem}
            changeItem={() => this.changeImage}
          />
        </Link>
        <h3>{title}</h3>
        <div className="item__price-tag">
          {isPromo ?
            <div>
              <p className="item__price-line-through">
                {price} {'$'}
              </p>
              <p>{price - promotionPrice} {'$'}</p>
            </div>
            :
            <p>
              {price} {'$'}
            </p>
          }
        </div>
        <p style={styles.title}>{description}</p>
        <div className="item-promotion">
          {isPromo &&
            <div>
              <img className="item_img-promo" src="../asset/Label-offre-ic@2x.png" />
              <p>{promotions.label}</p>
              <div className="item-promotion-date">
                <div>
                  <div>{`de ${format(dateStart, 'YYYY-MM-DDThh:mm:ss')}`}</div>
                  <div>{`jusqu'a ${format(dateEnd, 'YYYY-MM-DDThh:mm:ss')}`}</div>
                </div>
                <div>{expireDate}</div>
              </div>
            </div>
          }
        </div>
        <RatingProduct id={id} rate={rate} addEventhandle={addEventhandler} />
        <p style={{ fontSize: '7px', float: 'right' }}>{userRateCount} personnes</p>
        {!isOrder &&
          <AddOrRemoveToCart
            addEventhandler={addEventhandler}
            user={user}
            id={id}
            maxQuantity={quantity}
            cartItemQuantity={cartItemQuantity}
            price={price}
            isPromo={isPromo}
            promotionPrice={promotionPrice}
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
  images: PropTypes.array,
  id: PropTypes.string,
  user: PropTypes.object,
  isCartItem: PropTypes.bool,
  isOrder: PropTypes.bool,
  cartItemQuantity: PropTypes.number,
  rate: PropTypes.number,
  userRateCount: PropTypes.number,
  isPromo: PropTypes.bool,
  promotions: PropTypes.object,
  updateProductMutation: PropTypes.func,
  addEventhandler: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  addEventhandler: (type, selector) => {
    dispatch(addEvent(type, selector));
  },
});

export default compose(
  WrapperItem,
  connect(null, mapDispatchToProps),
  withUpdateProductMutation,
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

