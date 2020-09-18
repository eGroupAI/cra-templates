import { combineEpics } from 'redux-observable';
import { of, concat } from 'rxjs';
import makeBasicFetchEpic from '@e-group/utils/makeBasicFetchEpic';

import {
  fetchGetPosts,
  fetchGetPostsRequest,
  fetchGetPostsSuccess,
  fetchGetPostsFailure,
} from './redux';

export const fetchGetPostsEpic = makeBasicFetchEpic({
  actionType: fetchGetPosts.type,
  apiName: 'fetchGetPosts',
  fetchRequest: fetchGetPostsRequest,
  handleSuccess: (response) => [
    fetchGetPostsSuccess(response.data),
  ],
  handleFailure: (error, { state$, action, apiErrorsHandler }) =>
    concat(
      apiErrorsHandler(error, { state$, action }),
      of(fetchGetPostsFailure(error))
    ),
});

export default combineEpics(
  fetchGetPostsEpic,
);