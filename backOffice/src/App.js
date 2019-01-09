import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RoutesHome from './homeRoutes';
import Profil from './component/profil';
import Login from './component/login';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/signin" component={Login} />
        <Route exact path="/profil" component={Profil} />
        <Route
          path="/"
          component={() => <RoutesHome />}
        />
      </Switch>
    </div>
  );
}

export default App;

