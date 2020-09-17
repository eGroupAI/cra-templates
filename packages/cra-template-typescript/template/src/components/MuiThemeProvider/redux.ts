import { createAction } from "@reduxjs/toolkit";

/** Actions */
export const handleChangeThemeOptions = createAction(
  "components/muiThemeProvider/handleChangeThemeOptions"
);

/** Types */
export const HANDLE_CHANGE_THEME_OPTIONS = handleChangeThemeOptions().toString();

/**
 * Selectors
 */
export const getThemeOptions = (state: any) =>
  state.components.MuiThemeProvider;
