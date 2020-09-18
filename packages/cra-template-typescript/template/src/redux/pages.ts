import { combineEpics } from 'redux-observable';
import { combineReducers } from "redux";

import Home from "pages/Home/reducers";

import PrivateHomeEpics from 'pages/PrivateHome/epics';

export const pages = combineReducers({
  Home,
});

export const pagesEpics = combineEpics(
  PrivateHomeEpics
);