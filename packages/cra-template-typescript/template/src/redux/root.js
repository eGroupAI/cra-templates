import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import { reducer as formReducer } from 'redux-form/immutable';

import { reducer as dialogs } from '@e-group/redux-modules/dialogs';
import { reducer as snackbars } from '@e-group/redux-modules/snackbars';
import { reducer as entities } from '@e-group/redux-modules/entities';
import { reducer as apis } from '@e-group/redux-modules/apis';
import { components } from './components';

// export const rootEpic = combineEpics();

// root reducer
export const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    form: formReducer,
    dialogs,
    snackbars,
    entities,
    apis,
    components
  });
