import React from 'react';
import { graphql } from 'react-apollo';
import { get } from 'lodash';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import Navigation from '../src/component/navigation';
import SideBare from '../src/component/sidebar';
import USER_LOGGED from '../src/graphql/user/getUserLogged';
import Content from '../src/component/content';
import CatalogPage from '../src/component/catalogPage';

function RoutesHome({ data, loading }) {
  const user = get(data, 'getUserlogged', {});

  if (loading) return <Icon name="circle notched" loading />;
  return (
    <div>
      <Navigation user={user} />
      <div style={{ display: 'flex' }}>
        <SideBare />
        <Switch>
          <Route path="/" render={() => <Content user={user} />} exact />
          <Route exact path="/category/:id" component={withRouter(CatalogPage)} />
        </Switch>
      </div>
    </div>
  );
}

RoutesHome.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.object,
};

export default graphql(USER_LOGGED)(RoutesHome);

