import getIn from '@e-group/utils/getIn'
import { createSelector } from '@reduxjs/toolkit'
import { RootState } from "redux/root";

/**
 * API States
 */
const getUiStates = (state: RootState) => getIn(state, ['pages', 'Home'], {});

export const getCounts = createSelector(getUiStates, (uiStates) =>
  getIn(uiStates, ['counts'])
);