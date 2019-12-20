import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import pluralize from "pluralize";
import { formatDistanceToNow } from "date-fns";

import Image from "components/common/Image";

import postType from "types/post";

import styles from "./postCard.less";

const propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  post: postType,
};

const defaultProps = {
  className: "",
  onClick: () => {},
  post: {},
};

const renderCreationDateInformation = (creationTimestamp) => {
  const correctedTimestamp = creationTimestamp * 1000;

  return formatDistanceToNow(correctedTimestamp, {
    addSuffix: true,
    includeSeconds: true,
  });
};

const renderCommentInformation = (numberOfComments) => {
  const pluralizedNoun = pluralize("comment", numberOfComments);

  return `${numberOfComments} ${pluralizedNoun}`;
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
          <span>{renderCreationDateInformation(created)}</span>
        </div>
        <div className={styles["number-of-comments-wrapper"]}>
          <span>{renderCommentInformation(numberOfComments)}</span>
        </div>
      </div>
    </div>
  );
};

PostCard.propTypes = propTypes;
PostCard.defaultProps = defaultProps;

export default PostCard;
