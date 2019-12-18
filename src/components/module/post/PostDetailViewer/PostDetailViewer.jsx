import React from "react";
import PropTypes from "prop-types";

import Icon from "components/common/Icon";
import Image from "components/common/Image";

import { CLOSE_ICON } from "constants/svgIcons";

import { isNil } from "utils/type";

// import post from "types/post";

import styles from "./postDetailViewer.less";

const propTypes = {
  onClose: PropTypes.func,
};

const defaultProps = {
  onClose: () => {},
};

const PostDetailViewer = ({
  onClose,
  selectedPost,
}) => (
  <div className={styles["post-detail-viewer"]}>
    {isNil(selectedPost)
      ? (
        <div className={styles["no-post-selected-message-container"]}>
          <span className={styles["no-post-selected-message"]}>
            No post selected
          </span>
        </div>
      )
      : (
        <div className={styles["post-detail-container"]}>
          <Icon
            className={styles["close-icon"]}
            height={50}
            icon={CLOSE_ICON}
            onClick={onClose}
            width={50}
          />
          <div className={styles["post-information-container"]}>
            <h1>Post by {selectedPost.author}</h1>
            <Image
              onError={() => setImageError(true)}
              onLoad={() => setImageError(false)}
              src={selectedPost.url}
            />
            <div className={styles["title-wrapper"]}>
              <span>{selectedPost.title}</span>
            </div>
          </div>
        </div>
      )
    }
  </div>
);

PostDetailViewer.propTypes = propTypes;
PostDetailViewer.defaultProps = defaultProps;

export default PostDetailViewer;
