import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";

import Button from "components/common/Button";
import Loader from "components/common/Loader";
import Paginator from "components/common/Paginator";

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
  postsPerPage: PropTypes.number,
};

const defaultProps = {
  className: "",
  postsPerPage: 10,
};

const slicePosts = (currentPage, postsPerPage, posts) => {
  const pageIndex = currentPage - 1;
  const beginIndex = pageIndex * postsPerPage;
  const endIndex = beginIndex + postsPerPage;

  return posts.slice(beginIndex, endIndex);
};

const resetInternalState = (setSelectedPost, setCurrentPage) => {
  setSelectedPost(null);
  setCurrentPage(1);
};

const handleDismissAllButtonClick = (setSelectedPost, setCurrentPage, dispatch) => {
  resetInternalState(setSelectedPost, setCurrentPage);
  dispatch(removeAllPosts());
};

const handleRefreshButtonClick = (setSelectedPost, setCurrentPage, dispatch) => {
  resetInternalState(setSelectedPost, setCurrentPage);
  dispatch(fetchPosts());
};

const handlePostClick = (setSelectedPost, post, dispatch) => {
  setSelectedPost(post);
  dispatch(markPostAsRead(post.id));
};

const PostPage = ({ className, postsPerPage }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const posts = useSelector(getPosts);
  const [selectedPost, setSelectedPost] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const sliceOfPosts = slicePosts(currentPage, postsPerPage, posts);

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
            isDisabled={sliceOfPosts.length === 0}
            label="Dismiss all"
            onClick={() => handleDismissAllButtonClick(setSelectedPost, setCurrentPage, dispatch)}
          />
          <Button
            className={styles.button}
            label="Refresh"
            onClick={() => handleRefreshButtonClick(setSelectedPost, setCurrentPage, dispatch)}
          />
        </div>
        {isLoading
          ? (
            <div className={styles["loader-container"]}>
              <Loader />
            </div>
          )
          : (
            <Fragment>
              <PostList
                className={styles["post-list"]}
                onPostClick={(post) => handlePostClick(setSelectedPost, post, dispatch)}
                posts={sliceOfPosts}
              />
              <Paginator
                className={styles.paginator}
                elementsPerPage={postsPerPage}
                onPageChange={(page) => setCurrentPage(page)}
                page={currentPage}
                totalElements={posts.length}
              />
            </Fragment>
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
