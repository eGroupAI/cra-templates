import React from "react";

import history from "redux/history";
import { withReduxDialog } from "@e-group/redux-modules/dialogs";
import { withReduxSnackbar } from "@e-group/redux-modules/snackbars";
import DateFnsUtils from "@date-io/date-fns";

import AlertDialog from "@e-group/material-module/AlertDialog";
import Snackbar, { SnackbarProps } from "@e-group/material-lab/Snackbar";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import MuiThemeProvider from "components/MuiThemeProvider";
import RouterRoot from "components/RouterRoot";
import { store } from "redux/configureAppStore";

export const DIALOG = "globalAlertDialog";
export const SNACKBAR = "globalSnackbar";
const GlobalAlertDialog = withReduxDialog(DIALOG)(AlertDialog);
const GlobalSnackbar = withReduxSnackbar(SNACKBAR)<HTMLDivElement, SnackbarProps>(
  Snackbar
);

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <CookiesProvider>
          <MuiThemeProvider>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <GlobalAlertDialog />
              <GlobalSnackbar
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                autoHideDuration={2000}
              />
              <RouterRoot />
            </MuiPickersUtilsProvider>
          </MuiThemeProvider>
        </CookiesProvider>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
