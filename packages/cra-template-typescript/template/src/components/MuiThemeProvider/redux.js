import actionCreators from 'redux/actionCreators';

/** Actions */
export const {
  handleChangeThemeOptions
} = actionCreators.components.muiThemeProvider;

/** Types */
export const HANDLE_CHANGE_THEME_OPTIONS = handleChangeThemeOptions().type;

/**
 * Selectors
 */
export const getThemeOptions = state => state.components.MuiThemeProvider;
