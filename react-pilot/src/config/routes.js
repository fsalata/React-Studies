import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../screens/login';
import Employees from '../screens/employees';

const AppRoute = () => (
  <main>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/funcionarios" component={Employees} />
    </Switch>
  </main>
);

export default AppRoute;
