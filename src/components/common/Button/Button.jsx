import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import { BUTTON_TYPE, RESET_TYPE, SUBMIT_TYPE } from "constants/buttonTypes";

import styles from "./button.less";

const propTypes = {
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf([BUTTON_TYPE, RESET_TYPE, SUBMIT_TYPE]),
};

const defaultProps = {
  className: "",
  isDisabled: false,
  label: "",
  onClick: () => {},
  type: BUTTON_TYPE,
};

const handleOnClick = (event, isDisabled, onClick) => {
  if (!isDisabled) {
    onClick(event);
  }
};

const Button = ({
  className,
  isDisabled,
  label,
  onClick,
  type,
}) => {
  const buttonClasses = classnames(styles.button, className, {
    [styles.active]: !isDisabled,
    [styles.disabled]: isDisabled,
  });

  return (
    <button
      className={buttonClasses}
      disabled={isDisabled}
      onClick={(event) => handleOnClick(event, isDisabled, onClick)}
      type={type}
    >
      {label}
    </button>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
