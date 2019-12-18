import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import Loader from "components/common/Loader";

import { isNil } from "utils/type";

import styles from "./image.less";

const propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  onError: PropTypes.func,
  onLoad: PropTypes.func,
  src: PropTypes.string.isRequired,
};

const defaultProps = {
  alt: "",
  className: "",
  onError: () => {},
  onLoad: () => {},
};

const handleOnLoad = (setIsLoading, setHasError, onLoad) => {
  setIsLoading(false);
  setHasError(false);
  onLoad();
};

const handleOnError = (setHasError, onError) => {
  setHasError(true);
  onError();
};

const Image = ({
  alt,
  className,
  onError,
  onLoad,
  src,
}) => {
  const isSrcNil = isNil(src);

  if (isSrcNil && !alt) {
    return null;
  }

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const imageClasses = classnames(styles.image, className, {
    [styles.hide]: isLoading,
  });

  return (
    <Fragment>
      {!hasError && !isSrcNil && isLoading && <Loader />}
      <img
        alt={alt}
        className={imageClasses}
        onLoad={() => handleOnLoad(setIsLoading, setHasError, onLoad)}
        src={src}
        onError={() => handleOnError(setHasError, onError)}
      />
    </Fragment>
  );
};

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
