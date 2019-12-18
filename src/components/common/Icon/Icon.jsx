import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./icon.less";

const propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number,
  icon: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  viewBox: PropTypes.string,
  width: PropTypes.number,
};

const defaultProps = {
  className: "",
  color: "#000",
  height: 24,
  isDisabled: false,
  onClick: null,
  viewBox: "0 0 24 24",
  width: 24,
};

const handleOnClick = (isDisabled, onClick) => {
  if (!isDisabled) {
    onClick();
  }
};

const Icon = ({
  className,
  color,
  height,
  icon,
  isDisabled,
  onClick,
  viewBox,
  width,
}) => {
  const iconClasses = classnames(styles.icon, className, {
    [styles.clickable]: !!onClick,
  });

  return (
    <svg
      className={iconClasses}
      height={height}
      onClick={() => handleOnClick(isDisabled, onClick)}
      viewBox={viewBox}
      width={width}
    >
      <path d={icon} fill={color} />
    </svg>
  );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
