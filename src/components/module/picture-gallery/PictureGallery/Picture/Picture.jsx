import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import Button from "components/common/Button";
import Image from "components/common/Image";

import { DELETE_ICON } from "constants/svgIcons";

import { removePicture } from "../../actions";

import styles from "./picture.less";

const propTypes = {
  id: PropTypes.string.isRequired,
  imageClassName: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
};

const defaultProps = {
  imageClassName: "",
};

const Picture = ({
  id,
  imageClassName,
  imageSrc,
}) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.picture}>
      <div className={styles["delete-button-container"]}>
        <Button
          className={styles["delete-button"]}
          label="Remove picture"
          onClick={() => dispatch(removePicture(id))}
        />
      </div>
      <Image
        className={imageClassName}
        src={imageSrc}
      />
    </div>
  );
};

Picture.propTypes = propTypes;
Picture.defaultProps = defaultProps;

export default Picture;
