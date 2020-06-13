import { connectRouter } from 'connected-react-router';
import { createBrowserHistory, History } from 'history';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

export interface StoreState {}

export const history = createBrowserHistory();
const createRootReducer = (connectedHistory: History<any>) =>
  combineReducers({
    router: connectRouter(connectedHistory),
  });

const connectedRootReducer = createRootReducer(history);

const composeEnhancers =
  process.env.NODE_ENV === 'development' ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

const middleware = applyMiddleware(createSagaMiddleware());

export const store = (() => {
  return createStore(connectedRootReducer, composeEnhancers(middleware));
})();
