import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import Button from "components/common/Button";
import Icon from "components/common/Icon";
import Image from "components/common/Image";

import { savePicture } from "components/module/picture-gallery/actions";

import { CLOSE_ICON } from "constants/svgIcons";

import { isNil } from "utils/type";

import postType from "types/post";

import styles from "./postDetailViewer.less";

const propTypes = {
  onClose: PropTypes.func,
  selectedPost: postType,
};

const defaultProps = {
  onClose: () => {},
  selectedPost: null,
};

const PostDetailViewer = ({
  onClose,
  selectedPost,
}) => {
  const dispatch = useDispatch();
  const [imageError, setImageError] = useState(false);

  return (
    <div className={styles["post-detail-viewer"]}>
      {/* eslint-disable react/jsx-curly-newline */}
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
              <h1>{`Post by ${selectedPost.author}`}</h1>
              <Image
                onError={() => setImageError(true)}
                onLoad={() => setImageError(false)}
                src={selectedPost.url}
              />
              <div className={styles["title-wrapper"]}>
                <span>{selectedPost.title}</span>
              </div>
            </div>
            {!imageError && (
              <Button
                label="Save to gallery"
                onClick={() => dispatch(savePicture(selectedPost.url))}
              />
            )}
          </div>
        )
      }
      {/* eslint-enable react/jsx-curly-newline */}
    </div>
  );
};

PostDetailViewer.propTypes = propTypes;
PostDetailViewer.defaultProps = defaultProps;

export default PostDetailViewer;
