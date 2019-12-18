import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import Loader from "components/common/Loader";

import styles from "./image.less";

const propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  onLoad: PropTypes.func,
  src: PropTypes.string.isRequired,
};

const defaultProps = {
  alt: "",
  className: "",
  onLoad: () => {},
};

const handleOnLoad = (setIsLoading, onLoad) => {
  setIsLoading(false);
  onLoad();
};

const Image = ({
  alt,
  className,
  onLoad,
  src,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const imageClasses = classnames(styles.image, className, {
    [styles.hide]: isLoading,
  });

  return (
    <Fragment>
      {isLoading && <Loader />}
      <img
        alt={alt}
        className={imageClasses}
        onLoad={() => handleOnLoad(setIsLoading, onLoad)}
        src={src}
      />
    </Fragment>
  );
};

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
