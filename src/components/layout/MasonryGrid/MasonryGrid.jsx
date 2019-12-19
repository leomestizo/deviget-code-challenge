import React, { Children, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import { debounce } from "utils/function";
import { isNil, isNumber } from "utils/type";

import Column from "./Column";
import Tile from "./Tile";

import styles from "./masonryGrid.less";

const DEFAULT_NUMBER_OF_COLUMNS = 4;

const propTypes = {
  columnBreakpoints: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.shape({
        columns: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
      }),
    ),
  ]),
  columnClassName: PropTypes.string,
  gridClassName: PropTypes.string,
  tileClassName: PropTypes.string,
};

const defaultProps = {
  columnBreakpoints: DEFAULT_NUMBER_OF_COLUMNS,
  columnClassName: "",
  gridClassName: "",
  tileClassName: "",
};

const renderGrid = (children, numberOfColumns, columnClassName, tileClassName) => {
  const arrayOfChildren = Children.toArray(children);
  const columnElements = [];

  for (let i = 0, j = numberOfColumns; i < j; i++) {
    const childrenElements = [];

    for (let k = i, l = arrayOfChildren.length; k < l; k += numberOfColumns) {
      childrenElements.push(
        <Tile key={`tile-${k}`} className={tileClassName}>
          {arrayOfChildren[k]}
        </Tile>
      );
    }

    columnElements.push(
      <Column key={`column-${i}`} className={columnClassName}>
        {childrenElements}
      </Column>
    );
  }

  return columnElements;
};

const updateGridWidth = (setGridWidth, gridElement) => setGridWidth(gridElement.current.offsetWidth);

const getNumberOfColumns = (columnBreakpoints, gridWidth) => {
  if (isNumber(columnBreakpoints)) {
    return columnBreakpoints;
  }

  let numberOfColumns = null;
  columnBreakpoints.forEach((breakpoint) => {
    // TODO: I should sort the breakpoints by `width` in descending order so that this logic always work.
    numberOfColumns = breakpoint.width >= gridWidth ? breakpoint.columns : numberOfColumns;
  });

  return isNil(numberOfColumns) ? DEFAULT_NUMBER_OF_COLUMNS : numberOfColumns;
};

const MasonryGrid = ({
  children,
  columnBreakpoints,
  columnClassName,
  gridClassName,
  tileClassName,
}) => {
  const gridElement = useRef(null);
  const [gridWidth, setGridWidth] = useState(null);

  useEffect(() => {
    const handleResize = debounce(() => updateGridWidth(setGridWidth, gridElement));
    window.addEventListener("resize", handleResize);

    // Initial width of the grid.
    updateGridWidth(setGridWidth, gridElement);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const numberOfColumns = getNumberOfColumns(columnBreakpoints, gridWidth);

  const gridClasses = classnames(styles["masonry-grid"], gridClassName);

  return (
    <div className={gridClasses} ref={gridElement}>
      {renderGrid(children, numberOfColumns, columnClassName, tileClassName)}
    </div>
  );
};

MasonryGrid.propTypes = propTypes;
MasonryGrid.defaultProps = defaultProps;

export default MasonryGrid;
