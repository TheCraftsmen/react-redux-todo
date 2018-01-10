import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger'

export const configureStore = () => {
  const storeWithMiddlewares = applyMiddleware(
    thunk,
    promise,
    createLogger(),
  );
  return createStore(reducers, storeWithMiddlewares);
};