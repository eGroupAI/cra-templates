// import { combineEpics } from 'redux-observable';
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";

import { dialogs } from "@e-group/redux-modules/dialogs";
import { snackbars } from "@e-group/redux-modules/snackbars";
import { entities } from "@e-group/redux-modules/entities";
import { apis } from "@e-group/redux-modules/apis";
import { components } from "./components";

// export const rootEpic = combineEpics();

// root reducer
export const createRootReducer = (history: History<unknown>) =>
  combineReducers({
    router: connectRouter(history),
    dialogs,
    snackbars,
    entities,
    apis,
    components,
  });
