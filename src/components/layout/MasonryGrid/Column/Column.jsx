import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./column.less";

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: "",
};

const Column = ({ children, className }) => {
  const columnClasses = classnames(styles.column, className);

  return (
    <div className={columnClasses}>
      {children}
    </div>
  );
};

Column.propTypes = propTypes;
Column.defaultProps = defaultProps;

export default Column;
