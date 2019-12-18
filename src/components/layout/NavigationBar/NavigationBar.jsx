import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Link } from "react-router-dom";

import styles from "./navigationBar.less";

const propTypes = {
  className: PropTypes.string,
  navigationItems: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
};

const defaultProps = {
  className: "",
  navigationItems: [],
};

const renderNavigationItems = (navigationItems) => navigationItems.map((navigationItem) => (
  <Link
    className={styles["navigation-item"]}
    key={navigationItem.link}
    to={navigationItem.link}
  >
    {navigationItem.text}
  </Link>
));

const NavigationBar = ({ className, navigationItems }) => {
  const navigationBarClasses = classnames(styles["navigation-bar"], className);

  return (
    <nav className={navigationBarClasses}>
      {renderNavigationItems(navigationItems)}
    </nav>
  );
};

NavigationBar.propTypes = propTypes;
NavigationBar.defaultProps = defaultProps;

export default NavigationBar;
