import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { useDispatch } from "react-redux";

import Button from "components/common/Button";

import postType from "types/post";

import PostCard from "../../PostCard";

import { removePost } from "../../actions";

import styles from "./postListItem.less";

const propTypes = {
  onClick: PropTypes.func,
  post: postType,
};

const defaultProps = {
  onClick: () => {},
  post: {},
};

const handleOnTransitionEnd = (setStartTransition, dispatch, post) => {
  setStartTransition(false);
  dispatch(removePost(post.id));
};

const PostListItem = ({
  onClick,
  post,
}) => {
  const dispatch = useDispatch();
  const [startTransition, setStartTransition] = useState(false);

  const postListItemClasses = classnames(styles["post-list-item"], {
    [styles["elimination-transition"]]: startTransition,
  });

  return (
    <div
      className={postListItemClasses}
      onTransitionEnd={() => handleOnTransitionEnd(setStartTransition, dispatch, post)}
    >
      {post.hasBeenRead && <span className={styles["read-indicator"]}>Read</span>}
      <PostCard
        onClick={onClick}
        post={post}
      />
      <Button
        className={styles["dismiss-button"]}
        label="Dismiss"
        onClick={() => setStartTransition(true)}
      />
    </div>
  );
};

PostListItem.propTypes = propTypes;
PostListItem.defaultProps = defaultProps;

export default PostListItem;
