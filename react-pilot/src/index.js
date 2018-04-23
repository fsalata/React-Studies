import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

import createAppStore from './config/store';

import Login from './screens/login';

const { store } = createAppStore();

ReactDOM.render(
  <Provider store={store}>
    <Login />
  </Provider>,
  document.querySelector('.container'),
);
