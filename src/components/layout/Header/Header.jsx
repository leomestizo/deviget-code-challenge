import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import Image from "components/common/Image";

import {
  TOP_POSTS_ROUTE,
  PICTURE_GALLERY_ROUTE,
} from "constants/routes";

import devigetLogo from "assets/images/deviget-logo.png";

import NavigationBar from "../NavigationBar";

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
      <NavigationBar
        navigationItems={[
          {
            link: TOP_POSTS_ROUTE,
            text: "Top posts",
          },
          {
            link: PICTURE_GALLERY_ROUTE,
            text: "Picture gallery",
          },
        ]}
      />
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
