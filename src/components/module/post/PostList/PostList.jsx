import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import PostCard from "./PostCard";

import styles from "./postList.less";

const propTypes = {
  className: PropTypes.string,
  onPostClick: PropTypes.func,
  // posts: PropTypes.arrayOf(),
};

const defaultProps = {
  className: "",
  onPostClick: () => {},
  // posts: [],
};

const renderPostCards = (posts, onPostClick) => posts.map((post) => (
  <PostCard
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
      {renderPostCards(posts, onPostClick)}
    </div>
  );
};

PostList.propTypes = propTypes;
PostList.defaultProps = defaultProps;

export default PostList;
