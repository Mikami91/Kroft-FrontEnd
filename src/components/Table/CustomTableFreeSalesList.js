// Dependencies
import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "moment/locale/es";
import NumberFormat from "react-number-format";
// Conecction to Store
import { connect } from "react-redux";
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
  Collapse,
  Box,
  Typography,
} from "@material-ui/core";
// Core Components
import CustomText from "../Typography/CustomText";
// Icons
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import ExpandLessRoundedIcon from "@material-ui/icons/ExpandLessRounded";
// Functions
import { checkWillPay } from "../../functions/cruds/collectFunctions";

function CustomTableFreeSalesList(props) {
  const {
    // Props
    size,
    padding,
    sticky,
    header,
    columns,
    data,
    renderRefresh,
    //Redux
    fetching,
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

  let collects_filtered = [];
  for (let x in data) {
    if (check(data[x])) {
      collects_filtered.push({ ...data[x], pending_accounts: 1 });
    }
  }
  function check(index) {
    let flag = 0;
    for (let y in collects_filtered) {
      if (collects_filtered[y].nit === index.nit) {
        collects_filtered[y].pending_accounts++;
        flag = 1;
      }
    }
    if (flag === 0) return true;
    else return false;
  }

  // Send Order function
  const handleCheckWillPay = (id) => {
    checkWillPay({ id }).then((response) => {
      if (typeof response !== "undefined") {
        if (response.success === true) {
          setState({
            rowContent: [],
            isExpanded: false,
            index: null,
          });
          console.log("Check success");
        }
      }
    });
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
            {collects_filtered.map((index, key) => [
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
                // <ExpandedRow key={index.nit} index={index} />
                <TableRow key={state.index + "expandible"} tabIndex={1}>
                  <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={6}
                  >
                    <Collapse
                      in={state.isExpanded}
                      timeout="auto"
                      unmountOnExit
                    >
                      <Box margin={1}>
                        <Typography variant="h6" gutterBottom component="div">
                          {`Historial ${index.company_name}`}
                        </Typography>
                        <Table size="small" aria-label="history">
                          <TableHead>
                            <TableRow>
                              <TableCell colSpan={2}>Fecha</TableCell>
                              <TableCell colSpan={2}>Responsable</TableCell>
                              <TableCell align="center">Celular</TableCell>
                              <TableCell align="right">
                                Monto total (Bs)
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {state.rowContent.map((i) => (
                              <TableRow key={i.id + "expandible"} tabIndex={1}>
                                <TableCell colSpan={2} align="left">
                                  {moment(i.created_at).format(
                                    "d MMMM YYYY, h:m A"
                                  )}
                                </TableCell>
                                <TableCell colSpan={2} align="left">
                                  {i.responsable}
                                </TableCell>
                                <TableCell colSpan={1} align="center">
                                  {i.phone}
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
                                      <CustomText
                                        text={value}
                                        size="default"
                                        color="warning"
                                      />
                                    )}
                                  />
                                </TableCell>
                                <TableCell colSpan={1} align="right">
                                  <Button
                                    color="primary"
                                    variant="contained"
                                    disabled={fetching}
                                    onClick={() => handleCheckWillPay(i.id)}
                                  >
                                    Cobrar
                                  </Button>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              ) : null,
            ])}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }, [renderRefresh, collects_filtered, state, fetching]);
}
// PropTypes
CustomTableFreeSalesList.defaultProps = {
  size: "medium",
  padding: "default",
  sticky: false,
  header: [],
  columns: [],
  data: [],
  renderRefresh: null,
};
CustomTableFreeSalesList.propTypes = {
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
// Connect to Store State
const mapStateToProps = (state) => {
  const { collects } = state;
  return {
    fetching: collects.fetching,
  };
};

export default connect(mapStateToProps, null)(CustomTableFreeSalesList);
