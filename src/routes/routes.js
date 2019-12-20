import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import PrivateRoute from './privateRoute';
import Home from 'containers/Home';
import Login from 'containers/Login';
import NotFound from 'containers/NotFound';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/home">
        <Home />
      </PrivateRoute>
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);
