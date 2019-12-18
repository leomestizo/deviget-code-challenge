import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

// import post from "types/post";

import PostListItem from "./PostListItem";

import styles from "./postList.less";

const propTypes = {
  className: PropTypes.string,
  onPostClick: PropTypes.func,
  // posts: PropTypes.arrayOf(PropTypes.shape(post)),
};

const defaultProps = {
  className: "",
  onPostClick: () => {},
  // posts: [],
};

const renderPostListItems = (posts, onPostClick) => posts.map((post) => (
  <PostListItem
    key={post.id}
    onClick={onPostClick}
    post={post}
  />
));

const PostList = ({
  className,
  onPostClick,
  posts,
}) => {
  const postListClasses = classnames(styles["post-list"], className);

  return (
    <div className={postListClasses}>
      {renderPostListItems(posts, onPostClick)}
    </div>
  );
};

PostList.propTypes = propTypes;
PostList.defaultProps = defaultProps;

export default PostList;
