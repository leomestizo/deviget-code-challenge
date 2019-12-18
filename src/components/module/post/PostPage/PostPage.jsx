import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";

import Button from "components/common/Button";
import Loader from "components/common/Loader";

import { isNil } from "utils/type";

import PostList from "../PostList";
import PostDetailViewer from "../PostDetailViewer";

import { getIsLoading, getPosts } from "../selectors";

import {
  fetchPosts,
  markPostAsRead,
  removeAllPosts,
} from "../actions";

import styles from "./postPage.less";

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: "",
};

const handleDismissAllButtonClick = (setSelectedPost, dispatch) => {
  setSelectedPost(null);
  dispatch(removeAllPosts());
};

const handleRefreshButtonClick = (setSelectedPost, dispatch) => {
  setSelectedPost(null);
  dispatch(fetchPosts());
};

const handlePostClick = (setSelectedPost, post, dispatch) => {
  setSelectedPost(post);
  dispatch(markPostAsRead(post.id));
};

const PostPage = ({ className }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const posts = useSelector(getPosts);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => dispatch(fetchPosts()), []);

  const postPageClasses = classnames(styles["post-page"], className);
  const detailViewerContainerClasses = classnames(styles["post-detail-viewer-container"], {
    [styles["show-detail-viewer"]]: !isNil(selectedPost),
  });

  return (
    <div className={postPageClasses}>
      <aside className={styles["post-list-container"]}>
        <div className={styles["button-container"]}>
          <Button
            className={styles.button}
            isDisabled={posts.length === 0}
            label="Dismiss all"
            onClick={() => handleDismissAllButtonClick(setSelectedPost, dispatch)}
          />
          <Button
            className={styles.button}
            label="Refresh"
            onClick={() => handleRefreshButtonClick(setSelectedPost, dispatch)}
          />
        </div>
        {isLoading
          ? (
            <div className={styles["loader-container"]}>
              <Loader />
            </div>
          )
          : (
            <PostList
              className={styles["post-list"]}
              onPostClick={(post) => handlePostClick(setSelectedPost, post, dispatch)}
              posts={posts}
            />
          )
        }
      </aside>
      <section className={detailViewerContainerClasses}>
        <PostDetailViewer
          onClose={() => setSelectedPost(null)}
          selectedPost={selectedPost}
        />
      </section>
    </div>
  );
};

PostPage.propTypes = propTypes;
PostPage.defaultProps = defaultProps;

export default PostPage;
