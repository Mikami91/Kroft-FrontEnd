// Dependencies
import React, { Fragment, useState, useMemo } from "react";
import PropTypes from "prop-types";
// UI Material Components
import {
  Badge,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
// Core Components
import CustomText from '../Typography/CustomText';
// Styles
// import "../../styles/index.css";
// Containers
// import ObservationPopover from '../popovers/ObservationPopover';

function CustomTableList(props) {
  const { size, padding, sticky, header, columns, data, renderRefresh } = props;

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
                  if (col.type === "text") {
                    return (
                      <TableCell
                        key={key + "cell-" + col.field}
                        align={col.align}
                        padding={col.padding}
                        size={col.size}
                        colSpan={col.colSpan}
                      >
                        <CustomText text={index[col.field]} size={col.fontSize} color={col.color} />
                      </TableCell>
                    );
                  } else {
                    return (
                      <TableCell
                        key={key + "icon-" + col.field}
                        align={col.align}
                        padding={col.padding}
                        size={col.size}
                        colSpan={col.colSpan}
                      >
                        <IconButton aria-describedby={col.variant === "pop" ? "simple-popover" : key + "icon"} onClick={col.variant === "pop" ? (event) => col.onClick(event, index.product_id, index.product_observation) : (event) => col.onClick(index.product_id)}>

                          {col.variant === "pop" ?
                            <Badge color="secondary" variant="dot" invisible={index.product_observation === "" ? true : false}>
                              <col.icon
                                fontSize={col.iconSize}
                                color={col.iconColor}
                              />
                            </Badge> :
                            <col.icon
                              fontSize={col.iconSize}
                              color={col.iconColor}
                            />}

                        </IconButton>
                      </TableCell>
                    );
                  }
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
CustomTableList.defaultProps = {
  size: "medium",
  padding: "default",
  sticky: false,
  header: [],
  columns: [],
  data: [],
  renderRefresh: null,
};
CustomTableList.propTypes = {
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
      type: PropTypes.oneOf(["text", "icon"]),
      size: PropTypes.oneOf(["medium", "small"]),
      fontSize: PropTypes.oneOf(["large", "medium", "small", "default"]),
      align: PropTypes.oneOf(["inherit", "right", "center", "left"]),
      colSpan: PropTypes.number,
      icon: PropTypes.object,
      iconSize: PropTypes.oneOf(["inherit", "small", "large", "default"]),
      iconColor: PropTypes.oneOf(["inherit", "primary", "secondary", "error"]),
      onClick: PropTypes.func,
    })
  ),
  data: PropTypes.array,
  renderRefresh: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.object,
  ]),
};

export default CustomTableList;
