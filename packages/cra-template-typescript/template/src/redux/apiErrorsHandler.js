import { of, concat } from 'rxjs';
import { replace } from 'connected-react-router/immutable';
import getDeviceInfo from '@e-group/utils/getDeviceInfo';
import { openDialog, setDialogData } from '@e-group/redux-modules/dialogs';
import { DIALOG } from 'App';

import apis from './apis';

export default function apiErrorsHandler(error, { state$, action }) {
  let payload = {
    function: 'apiErrorsHandler',
    browserDescription: window.navigator.userAgent,
    jsonData: {
      action,
      store: state$.value.toJS(),
      deviceInfo: getDeviceInfo()
    },
    level: 'ERROR'
  };

  // handle server side errors
  if (error.response && error.response.status) {
    switch (error.response.status) {
      // log server side errors
      default:
        apis.tools.fetchPostLogs(payload);
        return of();
    }
  }

  // handle client side errors
  payload = {
    ...payload,
    message: error.message
  };
  apis.tools.fetchPostLogs(payload);
  return of();
}
