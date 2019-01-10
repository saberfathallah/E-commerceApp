import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { includes } from 'lodash';
import AddOrRemoveFavorite from '../buttonHeart';
import WrapperItem from './itemWrapper';

class Item extends Component {
  shouldComponentUpdate(nextProps) {
    const isFavorite = includes(this.props.favortieList, this.props.id);
    const isFavoriteNext = includes(
      nextProps.favortieList,
      nextProps.id
    );
    return (
      isFavorite !== isFavoriteNext);
  }
  render() {
    const {
      className, img, title, price, description, favortieList, id, user,
    } = this.props;
    const isFavorite = includes(favortieList, id);
    return (
      <div className={className}>
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
          <p>
            <Link to="/panier" href>
              <button style={styles.add}>
                <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
              Add to basket
              </button>
            </Link>
          </p>
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
  favortieList: PropTypes.array,
  id: PropTypes.string,
  user: PropTypes.object,
};

export default WrapperItem(Item);
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

