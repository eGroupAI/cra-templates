import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router/immutable';
import createHandleApisMiddleware from '@e-group/redux-modules/createHandleApisMiddleware';

import { createRootReducer } from './root';
import apis from './apis';
import * as schema from './schema';
import apiErrorsHandler from './apiErrorsHandler';

// create middlewares
export const epicMiddleware = createEpicMiddleware({
  dependencies: { apis, schema, apiErrorsHandler }
});
export const history = createBrowserHistory({
  basename: process.env.REACT_APP_ROUTER_BASENAME
});
const middlewares = [
  epicMiddleware,
  routerMiddleware(history),
  createHandleApisMiddleware()
];

// create store
export const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(...middlewares))
);

// run after create store
// epicMiddleware.run(rootEpic);
