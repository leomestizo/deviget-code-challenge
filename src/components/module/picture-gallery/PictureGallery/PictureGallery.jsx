import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { useSelector } from "react-redux";

import MasonryGrid from "components/layout/MasonryGrid";

import Picture from "./Picture";

import masonryConfig from "./masonryConfig";

import { getPictures } from "../selectors";

import styles from "./pictureGallery.less";

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: "",
};

const renderPictures = (pictureList) => pictureList.map((picture) => (
  <Picture
    id={picture.id}
    imageClassName={styles.picture}
    imageSrc={picture.src}
    key={picture.id}
  />
));

const PictureGallery = ({ className }) => {
  const pictureList = useSelector(getPictures);

  const pictureGalleryClasses = classnames(styles["picture-gallery"], className);

  return (
    <div className={pictureGalleryClasses}>
      {/* eslint-disable react/jsx-curly-newline */}
      {pictureList.length === 0
        ? (
          <div className={styles["no-pictures-message-container"]}>
            <span className={styles["no-pictures-message"]}>No saved pictures</span>
          </div>
        )
        : (
          <MasonryGrid
            columnBreakpoints={masonryConfig}
            columnClassName={styles["grid-column"]}
            gridClassName={styles.grid}
            tileClassName={styles["grid-tile"]}
          >
            {renderPictures(pictureList)}
          </MasonryGrid>
        )
      }
      {/* eslint-enable react/jsx-curly-newline */}
    </div>
  );
};

PictureGallery.propTypes = propTypes;
PictureGallery.defaultProps = defaultProps;

export default PictureGallery;
