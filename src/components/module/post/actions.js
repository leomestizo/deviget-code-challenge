import { createActions } from "redux-actions";

export const {
  fetchPosts,
  removePost,
  removeAllPosts,
  markPostAsRead,
} = createActions(
  {
    FETCH_POSTS: (postList) => ({ postList }),
    REMOVE_POST: (id) => ({ id }),
    REMOVE_ALL_POSTS: () => {},
    MARK_POST_AS_READ: (id) => ({ id }),
  },
  {
    prefix: "POST",
  },
);
