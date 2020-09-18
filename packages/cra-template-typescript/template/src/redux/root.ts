
import { combineReducers } from "redux";
import { dialogs } from "@e-group/redux-modules/dialogs";
import { snackbars } from "@e-group/redux-modules/snackbars";
import { entities } from "@e-group/redux-modules/entities";
import { apis } from "@e-group/redux-modules/apis";

import { combineEpics } from "redux-observable";
import { connectRouter } from "connected-react-router";
import { Outcome } from "@e-group/utils/getDeviceInfo";
import { components } from "./components";
import { pages, pagesEpics } from "./pages";
import history from './history'

export const rootEpic = combineEpics(pagesEpics);

export const rootReducer = combineReducers({
  router: connectRouter(history),
  dialogs,
  snackbars,
  entities,
  apis,
  components,
  pages
})
export type RootState = ReturnType<typeof rootReducer>
export type LogPayload = {
  function: string;
  browserDescription: string;
  jsonData: {
    action: string;
    store: RootState;
    deviceInfo?: Outcome[];
  };
  level: "ERROR" | "INFO";
  message?: string;
};