import { handleActions } from "redux-actions";

import * as actionCreators from "./actions";

const defaultState = {
  isLoading: false,
  postList: [],
};

const handleFetchPostsRequestAction = (state) => ({
  ...state,
  isLoading: true,
});

const handleFetchPostsResponseAction = (state, action) => ({
  ...state,
  isLoading: false,
  postList: action.payload.postList,
});

const handleRemovePostAction = (state) => state;

const handleRemoveAllPostsAction = (state) => state;

const handleMarkPostAsReadAction = (state) => state;

const reducer = handleActions(
  {
    [actionCreators.fetchPostsRequest]: handleFetchPostsRequestAction,
    [actionCreators.fetchPostsResponse]: handleFetchPostsResponseAction,
    [actionCreators.removePost]: handleRemovePostAction,
    [actionCreators.removeAllPosts]: handleRemoveAllPostsAction,
    [actionCreators.markPostAsRead]: handleMarkPostAsReadAction,
  },
  defaultState,
);

export default reducer;
