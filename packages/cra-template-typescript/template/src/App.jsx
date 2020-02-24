import React from 'react';

import withReduxDialog from '@e-group/redux-modules/withReduxDialog';
import withReduxSnackbar from '@e-group/redux-modules/withReduxSnackbar';
import { history, store } from 'redux/configureStore';
import MomentUtils from '@date-io/moment';

import AlertDialog from '@e-group/material-module/AlertDialog';
import Snackbar from '@e-group/material-lab/Snackbar';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import MuiThemeProvider from 'components/MuiThemeProvider';

export const DIALOG = 'globalAlertDialog';
export const SNACKBAR = 'globalSnackbar';
const GlobalAlertDialog = withReduxDialog(DIALOG)(AlertDialog);
const GlobalSnackbar = withReduxSnackbar(SNACKBAR)(Snackbar);

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <CookiesProvider>
          <MuiThemeProvider>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <GlobalAlertDialog />
              <GlobalSnackbar
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'center'
                }}
                autoHideDuration={2000}
              />
              <div className="App">
                <header className="App-header">
                  <p>
                    Edit <code>src/App.jsx</code> and save to reload.
                  </p>
                </header>
              </div>
            </MuiPickersUtilsProvider>
          </MuiThemeProvider>
        </CookiesProvider>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;