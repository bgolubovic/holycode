import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const fakeAuth = {
  isAuthenticated: true,
  authenticate() {
    fakeAuth.isAuthenticated = true;
  }
};

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() =>
        fakeAuth.isAuthenticated ? children : <Redirect to="/login" />
      }
    />
  );
}

export default PrivateRoute;
