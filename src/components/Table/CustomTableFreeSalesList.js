// Dependencies
import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "moment/locale/es";
import NumberFormat from "react-number-format";
// UI Material Components
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  IconButton,
  Button,
} from "@material-ui/core";
// Core Components
import CustomText from "../Typography/CustomText";
// Icons
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import ExpandLessRoundedIcon from "@material-ui/icons/ExpandLessRounded";

function CustomTotalAmountList(props) {
  const {
    size,
    padding,
    sticky,
    header,
    columns,
    data,
    renderRefresh,
  } = props;

  // Local State
  const [state, setState] = useState({
    rowContent: [],
    isExpanded: false,
    index: null,
  });

  // Expanded functions
  const handleOpenExpanded = (index) => {
    setState({
      ...state,
      rowContent: data.filter((i) => i.nit === index.nit),
      isExpanded: true,
      index: index.nit,
    });
  };

  const handleCloseExpanded = () => {
    setState({
      ...state,
      rowContent: [],
      isExpanded: false,
      index: null,
    });
  };

  let orders_filtered = [];
  for (let x in data) {
      if (check(data[x])) {
        orders_filtered.push(data[x]);
      }
  }
  function check(index) {
    let flag = 0;
    for (let y in orders_filtered) {
      if (orders_filtered[y].nit === index.nit) {
        flag = 1;
      }
    }
    if (flag === 0) return true;
    else return false;
  }

  const ExpandedRow = () => {
    return state.rowContent.map((i) => (
      <TableRow key={i.id + "expandible"} tabIndex={1}>
        <TableCell colSpan={2} />
        <TableCell colSpan={1.5} align="left">
          {moment(i.created_at).format("d MMMM YYYY, h:m A")}
        </TableCell>
        <TableCell colSpan={1} align="right">
          <NumberFormat
            value={i.total_amount}
            displayType={"text"}
            thousandSeparator={true}
            allowNegative={false}
            allowEmptyFormatting={true}
            allowLeadingZeros={true}
            decimalScale={2}
            isNumericString={true}
            renderText={(value) => (
              <CustomText text={`Bs ${value}`} size="default" color="warning" />
            )}
          />
        </TableCell>
        <TableCell colSpan={0.5} align="center">
          <Button color="primary" variant="contained" onClick={() => alert(i.id)}>
            Cobrar
          </Button>
        </TableCell>
      </TableRow>
    ));
  };

  // Using useMemo hook
  return useMemo(() => {
    return (
      <TableContainer>
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
            {orders_filtered.map((index, key) => [
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
                        <CustomText
                          text={index[col.field]}
                          size={col.fontSize}
                          color={col.color}
                        />
                      </TableCell>
                    );
                  }
                  if (col.type === "date") {
                    return (
                      <TableCell
                        key={key + "cell-" + col.field}
                        align={col.align}
                        padding={col.padding}
                        size={col.size}
                        colSpan={col.colSpan}
                      >
                        <CustomText
                          text={moment(index[col.field]).format(
                            "d MMMM YYYY, h:m A"
                          )}
                          size={col.fontSize}
                          color={col.color}
                        />
                      </TableCell>
                    );
                  }
                  if (col.type === "icon") {
                    return (
                      <TableCell
                        key={key + "icon-" + col.field}
                        align={col.align}
                        padding={col.padding}
                        size={col.size}
                        colSpan={col.colSpan}
                      >
                        <IconButton
                          aria-describedby={key + "icon"}
                          onClick={(e) => col.onClick}
                        >
                          <col.icon
                            fontSize={col.iconSize}
                            color={col.iconColor}
                          />
                        </IconButton>
                      </TableCell>
                    );
                  }
                  if (col.type === "expand") {
                    return (
                      <TableCell
                        key={key + "expand-" + col.field}
                        align={col.align}
                        padding={col.padding}
                        size={col.size}
                        colSpan={col.colSpan}
                      >
                        {state.isExpanded && index.nit === state.index ? (
                          <IconButton onClick={handleCloseExpanded}>
                            <ExpandLessRoundedIcon
                              fontSize={col.iconSize}
                              color={col.iconColor}
                            />
                          </IconButton>
                        ) : (
                          <IconButton onClick={() => handleOpenExpanded(index)}>
                            <ExpandMoreRoundedIcon
                              fontSize={col.iconSize}
                              color={col.iconColor}
                            />
                          </IconButton>
                        )}
                      </TableCell>
                    );
                  }
                  return null;
                })}
              </TableRow>,

              state.isExpanded && state.index === index.nit ? (
                <ExpandedRow key={index.nit} />
              ) : null,
            ])}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }, [renderRefresh, state]);
}
// PropTypes
CustomTotalAmountList.defaultProps = {
  size: "medium",
  padding: "default",
  sticky: false,
  header: [],
  columns: [],
  data: [],
  renderRefresh: null,
};
CustomTotalAmountList.propTypes = {
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
      multiplyFields: PropTypes.array,
      type: PropTypes.oneOf([
        "text",
        "number",
        "date",
        "icon",
        "multiply",
        "expand",
      ]),
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
    PropTypes.bool,
  ]),
};

export default CustomTotalAmountList;
