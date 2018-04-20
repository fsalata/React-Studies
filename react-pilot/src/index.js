import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './config/store';

import Home from './screens/home';

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.querySelector('.container'),
);
