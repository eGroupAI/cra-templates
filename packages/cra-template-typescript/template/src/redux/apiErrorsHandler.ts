import { of } from 'rxjs';
import getDeviceInfo from '@e-group/utils/getDeviceInfo';

import { Outcome } from '@e-group/utils/getDeviceInfo/getDeviceInfo';
import apis from './apis';

type ErrorPayload = {
  function: string;
  browserDescription: string;
  jsonData: {
    action: string;
    store: any;
    deviceInfo?: Outcome[];
  };
  level: 'ERROR' | 'INFO';
  message?: string;
};

export default function apiErrorsHandler(error: any, { state$, action }: any) {
  let payload: ErrorPayload = {
    function: 'apiErrorsHandler',
    browserDescription: window.navigator.userAgent,
    jsonData: {
      action,
      store: state$.value,
      deviceInfo: getDeviceInfo(),
    },
    level: 'ERROR',
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
