import { handleActions } from "redux-actions";

import { removeElementFromArray } from "utils/array";

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

const handleRemovePostAction = (state, action) => ({
  ...state,
  postList: removeElementFromArray(state.postList, action.payload.id),
});

const handleRemoveAllPostsAction = (state) => ({
  ...state,
  postList: [],
});

const handleMarkPostAsReadAction = (state, action) => ({
  ...state,
  postList: state.postList.map((post) => {
    if (post.id === action.payload.id) {
      return {
        ...post,
        hasBeenRead: true,
      };
    }

    return post;
  }),
});

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
