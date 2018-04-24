import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

import createAppStore from './config/store';

import AppRoute from './config/routes';

const { store } = createAppStore();

ReactDOM.render(
  <Provider store={store}>
    <AppRoute />
  </Provider>,
  document.querySelector('.container'),
);
