import React from 'react';
import { graphql, compose } from 'react-apollo';
import { get } from 'lodash';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import Navigation from '../src/component/navigation';
import SideBare from '../src/component/sidebar';
import USER_LOGGED from '../src/graphql/user/getUserLogged';
import Content from '../src/component/content';
import CatalogPage from '../src/component/catalogPage';
import FavoriteList from '../src/component/favoriteList';
import Cart from '../src/component/cart';
import currentCart from './graphql/cart/currentCart';
import Orders from '../src/component/orders';
import Order from '../src/component/order';
import Clients from '../src/component/clients';
import ItemDetails from '../src/pages/itemDetails';

function RoutesHome({
  data, loading, cart,
}) {
  const user = get(data, 'getUserlogged', {});

  if (loading) return <Icon name="circle notched" loading />;
  return (
    <div>
      <Navigation user={user} cart={cart} />
      <div style={{ display: 'flex' }}>
        <SideBare />
        <Switch>
          <Route path="/" render={() => <Content user={user} />} exact />
          <Route path="/favoriteList" render={() => <FavoriteList user={user} />} exact />
          <Route path="/cart" render={() => <Cart user={user} cart={cart} />} exact />
          <Route exact path="/category/:id" component={withRouter(CatalogPage)} />
          <Route path="/orders" render={() => <Orders user={user} />} exact />
          <Route exact path="/order/:id" component={withRouter(Order)} />
          <Route exact path="/clients" component={Clients} />
          <Route exact path="/itemDetails/:id" component={withRouter(ItemDetails)} />
        </Switch>
      </div>
    </div>
  );
}

RoutesHome.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.object,
  cart: PropTypes.object,
};

export default compose(
  graphql(USER_LOGGED),
  graphql(currentCart, {
    props: ({ data }) => ({ cart: data }),
  })
)(RoutesHome);

