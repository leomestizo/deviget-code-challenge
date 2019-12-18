import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import Icon from "components/common/Icon";

import {
  LEFT_ARROW,
  RIGHT_ARROW,
} from "constants/svgIcons";

import styles from "./paginator.less";

const propTypes = {
  className: PropTypes.string,
  elementsPerPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func,
  page: PropTypes.number,
  totalElements: PropTypes.number.isRequired,
};

const defaultProps = {
  className: "",
  onPageChange: () => {},
  page: 1,
};

const getMaximumLimit = (totalElements, elementsPerPage) => Math.ceil(totalElements / elementsPerPage);

const handleOnClick = (newPage, maximumLimit, onPageChange) => {
  if (newPage > 0 && newPage <= maximumLimit) {
    onPageChange(newPage);
  }
};

const Paginator = ({
  className,
  elementsPerPage,
  onPageChange,
  page,
  totalElements,
}) => {
  const maximumLimit = getMaximumLimit(totalElements, elementsPerPage);

  const paginatorClasses = classnames(styles.paginator, className);

  return (
    <div className={paginatorClasses}>
      <Icon
        isDisabled={page === 1}
        icon={LEFT_ARROW}
        onClick={() => handleOnClick(page - 1, maximumLimit, onPageChange)}
      />
      <span>{page}</span>
      <Icon
        isDisabled={page === maximumLimit}
        icon={RIGHT_ARROW}
        onClick={() => handleOnClick(page + 1, maximumLimit, onPageChange)}
      />
    </div>
  );
};

Paginator.propTypes = propTypes;
Paginator.defaultProps = defaultProps;

export default Paginator;
