// Dependencies
import React, { useMemo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// Conecction to Store
import { connect } from 'react-redux';
// @material-ui/Componentes
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import Badge from '@material-ui/core/Badge';
import Tabs from "@material-ui/core/Tabs";
import { makeStyles } from "@material-ui/core/styles";
// Core Components
import CustomText from "../../components/Typography/CustomText";
// API
import { API } from '../../API/index';
// Icons
import WhatshotIcon from "@material-ui/icons/Whatshot";
// Styles
import styles from "../../styles/components/appBarIconStyle";

const useStyles = makeStyles(styles);

// Component
const AppBarIcons = (props) => {
  // Props
  const {
    // AppBar
    position,
    color,
    drawer,
    // Tabs
    data,
    imagePath,
    value,
    onChange,
    selectColor,
    hoverColor,
    // Orders array
    orders,
  } = props;

  // Find if Product Orders has SubCategory ID
  const found_category_id = (category_id) => {
    let found = orders.some(index => index.category_id === category_id);
    if (found === true) {
      return true;
    } else {
      return false;
    }
  }

  // Styles
  const classes = useStyles();
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes.dashAppBar]: drawer,
  });
  // Render
  return (
    <AppBar
      position={position}
      color={color}
      className={appBarClasses}
      variant="elevation"
    >
      <Tabs
        value={value}
        className={classes.gridIcons}
        // onChange={handleChange}
        indicatorColor={selectColor}
        textColor={selectColor}
        variant="scrollable"
        scrollButtons="auto"
        indicator="false"
        TabIndicatorProps={{
          // indicator: false,
          style: {
            paddingBottom: -18,
            display: "none",
          },
        }}
      >
        {data.map((index, key) => {
          // Using useMemo hook
          // return useMemo(() => {
          const imageFabClasses = classNames({
            [classes.fabButton]: true,
            [classes[selectColor + "SelectFabButton"]]: key === value,
            [classes[hoverColor + "HoverFabButton"]]: hoverColor,
          });
          return (
            <Grid
              key={key}
              item
              xs={2}
              sm={1}
              md={1}
              lg={1}
              xl={1}
              elevation={0}
              className={classes.gridIcons}
            >
              <Badge
                color="secondary"
                variant="dot"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                invisible={!found_category_id(index.id)}
              >
                <Fab
                  key={key}
                  disabled={index.disabled}
                  value={value}
                  onClick={(e) => onChange(e, key)}
                  color={color}
                  // size="small"
                  aria-label={index.label}
                  className={imageFabClasses}
                >
                  <img
                    src={API + imagePath + index.photo}
                    alt={index.name}
                    color={index.selectColor}
                    className={classes.imageIcon}
                  />
                </Fab>
              </Badge>
              <br />
              <CustomText text={index.name} adjust />
            </Grid>
          );
          // }, [data, value]);
        })}
      </Tabs>
    </AppBar>
  );
};

// PropTypes
AppBarIcons.defaultProps = {
  // AppBar
  position: "fixed",
  color: "primary",
  gutters: false,
  drawer: false,
  // Tabs
  data: [],
  imagePath: "",
  value: "",
  onChange: null,
  selectColor: "primary",
  hoverColor: "primary",
};
AppBarIcons.propTypes = {
  // AppBar
  position: PropTypes.oneOf([
    "absolute",
    "fixed",
    "relative",
    "static",
    "sticky",
  ]),
  color: PropTypes.oneOf([
    "default",
    "inherit",
    "primary",
    "secondary",
    "transparent",
  ]),
  disableGutters: PropTypes.bool,
  drawer: PropTypes.bool,
  // Tabs
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
  imagePath: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
  selectColor: PropTypes.oneOf([
    "primary",
    "secondary",
    "warning",
    "danger",
    "success",
    "info",
  ]),
  hoverColor: PropTypes.oneOf([
    "primary",
    "secondary",
    "warning",
    "danger",
    "success",
    "info",
  ]),
};
// Connect to Store State
const mapStateToProps = (state) => {
  const { product } = state;
  return {
    orders_list: product.orders,
  }
};
export default connect(mapStateToProps, null)(AppBarIcons);
