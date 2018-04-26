import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Header from '../components/header';

import Login from '../screens/login';
import Register from '../screens/register';
import Employees from '../screens/employees';

const AppRoute = () => (
  <BrowserRouter>
    <div>
      <Header />
      <div className="container pageContainer">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/cadastro" component={Register} />
          <Route exact path="/funcionarios" component={Employees} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRoute;
