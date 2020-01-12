import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import NotFound from './pages/NotFound';
import withAuth from './hocs/withAuth.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/" component={withAuth(Home)} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
