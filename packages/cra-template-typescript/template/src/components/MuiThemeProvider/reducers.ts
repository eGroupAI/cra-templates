import { createReducer } from '@reduxjs/toolkit';
import merge from 'lodash.merge';
import { HANDLE_CHANGE_THEME_OPTIONS } from './redux';
import theme from './theme';

const reducer = createReducer(
  theme,
  {
    [HANDLE_CHANGE_THEME_OPTIONS]: (state, action) =>
      merge(state, action.payload)
  }
);

export default reducer;
