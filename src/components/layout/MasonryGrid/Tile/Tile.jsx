import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./tile.less";

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const defaultProps = {
  children: null,
  className: "",
};

const Tile = ({ children, className }) => {
  const tileClasses = classnames(styles.tile, className);

  return (
    <div className={tileClasses}>
      {children}
    </div>
  );
};

Tile.propTypes = propTypes;
Tile.defaultProps = defaultProps;

export default Tile;
