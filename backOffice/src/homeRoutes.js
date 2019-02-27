import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { get } from 'lodash';
import Navigation from './component/navigation';
import Content from './component/content';
import USER_LOGGED from './graphql/user/getUserLogged';
import ProductFormCreation from './component/forms/productForm/productFormCreation';
import ProductFormEdition from './component/forms/productForm/productFormEdition';
import CategoryFormCreation from './component/forms/categoryForm/categoryFormCreation';
import CategoryFormEdition from './component/forms/categoryForm/categoryFormEdition';
import UserFormCreation from './component/forms/userForm/userFormCreation';
import PieChart from './component/statistics/pieChart';
import { getCookie } from './utils/cookiesStore';

function RoutesHome({ data }) {
  const user = get(data, 'getUserlogged', {});
  const token = getCookie('token');

  if (!token) {
    return <Redirect to="/signin" />;
  }
  return (
    <div>
      <Navigation user={user} />
      <Switch>
        <Route path="/" component={PieChart} exact />
        <Route path="/products" render={() => <Content user={user} />} exact />
        <Route path="/categories" render={() => <Content user={user} />} exact />
        <Route path="/users" render={() => <Content user={user} />} exact />
        <Route path="/addProduct" component={ProductFormCreation} exact />
        <Route path="/editProduct/:id" component={withRouter(ProductFormEdition)} exact />
        <Route path="/addCategory" component={CategoryFormCreation} exact />
        <Route path="/editCategory/:id" component={withRouter(CategoryFormEdition)} exact />
        <Route path="/addUser" component={UserFormCreation} exact />
      </Switch>
    </div>
  );
}
RoutesHome.propTypes = {
  data: PropTypes.object,
};

export default graphql(USER_LOGGED)(RoutesHome);
