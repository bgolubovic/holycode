import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from 'containers/Home';
import AddBook from 'containers/AddBook';
import NotFound from 'containers/NotFound';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/add-book" component={AddBook} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);
