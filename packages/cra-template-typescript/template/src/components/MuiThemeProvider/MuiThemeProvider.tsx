import React, { FC } from "react";

import { createMuiTheme } from "@material-ui/core";
import Theme, { ThemeProps } from "@e-group/material/Theme";
import theme from "./theme";

/**
 * Customized Mui Theme Provider.
 */
const MuiThemeProvider: FC<Omit<ThemeProps, "theme">> = (props) => {
  return <Theme theme={createMuiTheme(theme)} {...props} />;
};

export default MuiThemeProvider;
