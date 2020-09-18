import { RootState } from "redux/root";

export const getThemeOptions = (state: RootState) =>
  state.components.MuiThemeProvider;