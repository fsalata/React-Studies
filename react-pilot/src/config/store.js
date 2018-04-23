// @flow

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';

import reducer from '../reducers';
import rootSaga from '../sagas/rootSagas';

const persistConfig = {
  key: 'loggedUser',
  storage,
  stateReconciler: autoMergeLevel1,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

// if (process.env.NODE_ENV === 'development') {
middleware.push(logger);
// }

const store = createStore(persistedReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default () => {
  const persistor = persistStore(store);
  return { store, persistor };
};
