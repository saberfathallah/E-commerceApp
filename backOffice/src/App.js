import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './component/home';
import Profil from './component/profil';
import Login from './component/login';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/profil" component={Profil} />
      </Switch>
    </div>
  );
}

export default App;

