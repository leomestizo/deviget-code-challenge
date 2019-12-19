import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./tile.less";

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
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
