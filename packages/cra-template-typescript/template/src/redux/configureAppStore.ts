import { createEpicMiddleware } from "redux-observable";
import { configureStore } from '@reduxjs/toolkit' 
import { routerMiddleware } from "connected-react-router";
import createHandleApisMiddleware from "@e-group/redux-modules/createHandleApisMiddleware";
import history from './history'

import { rootEpic, rootReducer } from "./root";
import apis from "./apis";
import * as schema from "./schema";
import apiErrorsHandler from "./apiErrorsHandler";

function configureAppStore() {// create middlewares
  const epicMiddleware = createEpicMiddleware({
    dependencies: {
      apis,
      schema,
      apiErrorsHandler
    },
  });
  const store = configureStore({
    reducer: rootReducer,
    // Correct typings for the Dispatch type
    // https://redux-toolkit.js.org/usage/usage-with-typescript
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredPaths: ["components.MuiThemeProvider"]
        }
      })
        .prepend(
          epicMiddleware,
          routerMiddleware(history),
          createHandleApisMiddleware(),
        ),
    devTools: process.env.NODE_ENV !== 'production',
  })

  // epicMiddleware need run after create store
  epicMiddleware.run(rootEpic);

  return store
}

export const store = configureAppStore()
export type AppDispatch = typeof store.dispatch;