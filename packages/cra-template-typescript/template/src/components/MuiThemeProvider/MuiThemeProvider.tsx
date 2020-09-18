import React, { FC } from "react";

import { useSelector } from "react-redux";
import { createMuiTheme } from "@material-ui/core";
import Theme, { ThemeProps } from "@e-group/material/Theme";
import { getThemeOptions } from "./selectors";

/**
 * Customized Mui Theme Provider.
 */
const MuiThemeProvider: FC<Omit<ThemeProps, "theme">> = (props) => {
  const themeOptions = useSelector(getThemeOptions);

  return <Theme theme={createMuiTheme(themeOptions)} {...props} />;
};

export default MuiThemeProvider;
