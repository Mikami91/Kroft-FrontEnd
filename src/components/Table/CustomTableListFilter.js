// Dependencies
import React, { Fragment, useMemo } from "react";
import PropTypes from "prop-types";
// UI Material Components
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
// Core Components
import CustomText from "../Typography/CustomText";

function CustomTableListFilter(props) {
  const {
    size,
    padding,
    sticky,
    header,
    columns,
    data,
    key_field,
    filter,
    renderRefresh,
  } = props;

  // Using useMemo hook
  return useMemo(() => {
    return (
      <Fragment>
        <Table size={size} padding={padding} stickyHeader={sticky}>
          <TableHead>
            <TableRow>
              {header.map((index, key) => (
                <TableCell
                  key={key + "head"}
                  align={index.align}
                  colSpan={index.colSpan}
                >
                  {index.text}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((index, key) => (
              <TableRow key={key + "row"}>
                {columns.map((col) => {
                  if (index[key_field] === filter) {
                    return (
                      <TableCell
                        key={key + "cell-" + col.field}
                        align={col.align}
                        padding={col.padding}
                        size={col.size}
                        colSpan={col.colSpan}
                      >
                        <CustomText
                          text={index[col.field]}
                          size={col.fontSize}
                          color={col.color}
                        />
                      </TableCell>
                    );
                  }
                  return null;
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Fragment>
    );
  }, [renderRefresh]);
}
// PropTypes
CustomTableListFilter.defaultProps = {
  size: "medium",
  padding: "default",
  sticky: false,
  header: [],
  columns: [],
  data: [],
  key_field: null,
  filter: null,
  renderRefresh: null,
};
CustomTableListFilter.propTypes = {
  size: PropTypes.oneOf(["small", "medium"]),
  padding: PropTypes.oneOf(["default", "checkbox", "none"]),
  sticky: PropTypes.bool,
  header: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      align: PropTypes.oneOf(["inherit", "right", "center", "left"]),
      colSpan: PropTypes.number,
    })
  ),
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string,
      size: PropTypes.oneOf(["medium", "small"]),
      fontSize: PropTypes.oneOf(["large", "medium", "small", "default"]),
      align: PropTypes.oneOf(["inherit", "right", "center", "left"]),
      colSpan: PropTypes.number,
    })
  ),
  data: PropTypes.array,
  key_field: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  filter: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  renderRefresh: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.object,
  ]),
};

export default CustomTableListFilter;
