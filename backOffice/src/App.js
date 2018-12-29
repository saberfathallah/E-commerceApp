import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './component/home';
import Profil from './component/profil';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profil" component={Profil} />
      </Switch>
    </div>
  );
}

export default App;

