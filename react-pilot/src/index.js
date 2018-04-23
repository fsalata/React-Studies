import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';

import createAppStore from './config/store';

import AppRoute from './config/routes';

const { store } = createAppStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppRoute />
    </Router>
  </Provider>,
  document.querySelector('.container'),
);
