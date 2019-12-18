import { createSelector } from "reselect";

export const getIsLoading = (state) => state.post.isLoading;

export const getPosts = (state) => state.post.postList;

export const getReadPosts = createSelector(
  getPosts,
  (posts) => posts.filter((post) => post.hasBeenRead),
);

export const getUnreadPosts = createSelector(
  getPosts,
  (posts) => posts.filter((post) => !post.hasBeenRead),
);
