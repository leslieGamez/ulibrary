import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BookListPage from './pages/Books';
import LoginPage from './pages/Login';

const Routes = () => {
  return (
    <Switch>
      <Route path="/booklist" component={BookListPage} />
      <Route path="/login" component={LoginPage} />
     
    </Switch>
  );
};

export default Routes;
