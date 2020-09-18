import { createReducer } from "@reduxjs/toolkit";
import merge from "lodash.merge";
import { handleChangeThemeOptions } from "./redux";
import theme from "./theme";

const reducer = createReducer(theme, {
  [handleChangeThemeOptions.type]: (state, action) =>
    merge(state, action.payload),
});

export default reducer;
