import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Login from '../screens/login';
import Register from '../screens/register';
import Employees from '../screens/employees';

const AppRoute = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/cadastro" component={Register} />
      <Route exact path="/funcionarios" component={Employees} />
    </Switch>
  </BrowserRouter>
);

export default AppRoute;
