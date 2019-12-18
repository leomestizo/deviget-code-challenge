import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import Image from "components/common/Image";

import devigetLogo from "assets/images/deviget-logo.png";

import styles from "./header.less";

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: "",
};

const Header = ({ className }) => {
  const headerClasses = classnames(styles.header, className);

  return (
    <header className={headerClasses}>
      <Image
        alt="Deviget logo"
        className={styles.logo}
        src={devigetLogo}
      />
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
