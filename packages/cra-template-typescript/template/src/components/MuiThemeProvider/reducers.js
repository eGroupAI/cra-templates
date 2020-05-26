import { handleActions } from 'redux-actions';
import { HANDLE_CHANGE_THEME_OPTIONS } from './redux';
import theme from './theme';

const reducer = handleActions(
  {
    [HANDLE_CHANGE_THEME_OPTIONS]: (state, action) =>
      state.mergeDeep(action.payload)
  },
  theme
);

export default reducer;
