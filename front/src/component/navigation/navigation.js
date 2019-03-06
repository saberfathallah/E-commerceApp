/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// /* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { compose, graphql } from 'react-apollo';
import { get } from 'lodash';
import WrapperNavigation from './withNavigationWrapper';
import ALL_INVITATIONS from '../../graphql/invitation/getAllInvitation';
import PopupInv from '../modals/popup';

const Navigation = ({
  className, user, cart, history, usersInvitations,
}) => {
  const total = get(cart, 'currentCart.cart.totalWithPromotion', '');

  return (
    <div className={className}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">Ecommerce</NavLink>
          {user.firstName &&
          <div>
            <Link className="link-navigation" to="/cart">Panier</Link>
            <Link className="link-navigation" to="/orders">Commandes</Link>
            <Link className="link-navigation" to="/clients">clients</Link>
          </div>
          }
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            {user.firstName ?
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <p
                    className="nav-link"
                    aria-hidden="true"
                  >{user.firstName}
                  </p>
                </li>
                <li className="nav-item">
                  <p
                    className="nav-link"
                    aria-hidden="true"
                  >Total panier: {total} $
                  </p>
                </li>
                <li className="nav-item">
                  <span
                    className="nav-link"
                    onClick={() => {
                      localStorage.removeItem('token');
                      window.location.reload();
                      history.push('/');
                    }}
                  >
                    <i
                      className="fa fa-shopping-cart mr-2"
                      aria-hidden="true"
                    /> déconnexion
                  </span>
                </li>
                <li className="nav-item">
                  <PopupInv className="nav-link" usersInvitations={usersInvitations} />
                </li>
              </ul> :
              <ul className="navbar-nav ml-auto">
                <li className="nav-item" style={{ color: 'white' }}>
                  <span
                    onClick={() => history.push('/register')}
                  >
                    <i
                      className="fa fa-shopping-cart mr-2"
                      aria-hidden="true"
                    /> register
                  </span>
                </li>

                <li className="nav-item" style={{ color: 'white' }}>
                  <span
                    onClick={() => history.push('/Login')}
                  >
                    <i
                      className="link-navigation"
                      aria-hidden="true"
                    /> login
                  </span>
                </li>
              </ul>
            }
          </div>
        </div>
      </nav>
    </div>
  );
};
Navigation.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object,
  cart: PropTypes.object,
  history: PropTypes.object,
  usersInvitations: PropTypes.array,
};

export default compose(
  WrapperNavigation,
  withRouter,
  graphql(ALL_INVITATIONS, {
    skip: ({ user }) => !get(user, 'firstName', false),
    props: ({ data, loading }) => {
      const usersInvitations = get(data, 'getAllInvitation.users', []);

      return ({
        usersInvitations,
        loading,
      });
    },
  })
)(Navigation);
