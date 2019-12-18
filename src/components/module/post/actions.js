import { createActions } from "redux-actions";

import { getPosts } from "./api";

export const {
  fetchPostsRequest,
  fetchPostsResponse,
  removePost,
  removeAllPosts,
  markPostAsRead,
} = createActions(
  {
    FETCH_POSTS_REQUEST: () => {},
    FETCH_POSTS_RESPONSE: (postList) => ({ postList }),
    REMOVE_POST: (id) => ({ id }),
    REMOVE_ALL_POSTS: () => {},
    MARK_POST_AS_READ: (id) => ({ id }),
  },
  {
    prefix: "POST",
  },
);

export const fetchPosts = (urlParameters) => (dispatch) => {
  dispatch(fetchPostsRequest());

  getPosts(urlParameters)
    .then((response) => dispatch(fetchPostsResponse(response.data)))
    // TODO: Check what to do when receiving an error.
    .catch((error) => console.error(error));
};
