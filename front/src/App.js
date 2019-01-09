import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from '../src/component/register';
import Login from './component/login';
import RoutesHome from './homeRoutes';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route
          path="/"
          component={() => <RoutesHome />}
        />
      </Switch>
    </div>
  );
}

export default App;

