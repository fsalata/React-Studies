import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Header from '../components/header';

import Login from '../screens/login';
import Register from '../screens/register';
import Employees from '../screens/employees';
import Profile from '../screens/profile';
import Todos from '../screens/todos';
import Posts from '../screens/posts';
import Comments from '../screens/comments';

const AppRoute = () => (
  <BrowserRouter>
    <div>
      <Header />
      <div className="container pageContainer">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/cadastro" component={Register} />
          <Route exact path="/perfil" component={Profile} />
          <Route exact path="/funcionarios" component={Employees} />
          <Route exact path="/todos/:id" component={Todos} />
          <Route exact path="/albuns/:id" component={Todos} />
          <Route exact path="/posts/:id" component={Posts} />
          <Route exact path="/posts/:id/:post" component={Comments} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRoute;
