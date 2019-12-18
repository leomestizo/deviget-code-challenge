import React from "react";
import PropTypes from "prop-types";

import styles from "./loader.less";

const propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

const defaultProps = {
  color: "#000",
  size: 100,
};

// TODO: Improve the component to show a real loader!
const Loader = ({
  color,
  size,
}) => {
  return (
    <span className={styles.loader}>Loading...</span>
  );
};

Loader.propTypes = propTypes;
Loader.defaultProps = defaultProps;

export default React.memo(Loader);
