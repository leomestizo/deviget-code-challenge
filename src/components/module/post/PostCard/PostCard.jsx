import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import Image from "components/common/Image";

import styles from "./postCard.less";

const propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  // post: PropTypes.,
};

const defaultProps = {
  className: "",
  onClick: () => {},
  post: {},
};

const PostCard = ({
  className,
  onClick,
  post,
}) => {
  const {
    author,
    created,
    num_comments: numberOfComments,
    thumbnail,
    title,
  } = post;

  const postCardClasses = classnames(styles["post-card"], className);

  return (
    <div className={postCardClasses} onClick={() => onClick(post)}>
      <Image className={styles.image} src={thumbnail} />
      <div className={styles["information-container"]}>
        <div className={styles["title-wrapper"]}>
          <span className={styles.title}>{title}</span>
        </div>
        <div className={styles["author-and-creation-date-wrapper"]}>
          <span>{author}</span>
          <span>{created}</span>
        </div>
        <div className={styles["number-of-comments-wrapper"]}>
          <span>{numberOfComments}</span>
        </div>
      </div>
    </div>
  );
};

PostCard.propTypes = propTypes;
PostCard.defaultProps = defaultProps;

export default PostCard;
