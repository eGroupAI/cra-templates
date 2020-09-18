import getIn from '@e-group/utils/getIn'
import { createSelector } from '@reduxjs/toolkit'
import { RootState } from "redux/root";

/**
 * API States
 */
const getApiStates = (state: RootState) => getIn(state, ['apis', 'pages', 'home'], {});

const getFetchGetPosts = createSelector(getApiStates, (apiStates) =>
  getIn(apiStates, ['fetchGetPosts'], {})
);

export const getPosts = createSelector(getFetchGetPosts, (fetchResult) =>
  getIn(fetchResult, ['response'])
);