import React from 'react';

import { useSelector } from 'react-redux';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { getThemeOptions } from './redux';

import Theme from '@e-group/material/Theme';

/**
 * Customized Mui Theme Provider.
 */
const MuiThemeProvider = props => {
  const themeOptions = useSelector(getThemeOptions);

  return <Theme theme={createMuiTheme(themeOptions.toJS())} {...props} />;
};

export default MuiThemeProvider;
