// Dependencies
import React, { useMemo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// @material-ui/Componentes
import AppBar from "@material-ui/core/AppBar";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { makeStyles } from "@material-ui/core/styles";
// Core Components
import CustomText from "../Typography/CustomText";
// Icons
import ErrorIcon from "@material-ui/icons/Error";
// Styles
import styles from "../../styles/components/appBarIconStyle";

const useStyles = makeStyles(styles);

// Component
const AppBarButtonNav = (props) => {
  // Props
  const {
    // AppBar
    position,
    color,
    drawer,
    // Button Nav
    data,
    value,
    onChange,
    showLabels,
  } = props;
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
      <BottomNavigation
        value={value}
        onChange={onChange}
        showLabels={showLabels}
        className={classes.root}
      >
        {data.map((index, key) => {
          // Using useMemo hook
          return useMemo(() => {
            return (
              <BottomNavigationAction
                key={key}
                label={<CustomText text={index.name} color="inherit" adjust />}
                value={key}
                className={classes.adjustContent}
                icon={
                  typeof index.photo === "object" ? (
                    <index.photo />
                  ) : (
                    <img
                      src={index.photo}
                      alt={index.name}
                      color={index.selectColor}
                      className={classes.imageButton}
                    />
                  )
                }
              />
            );
          }, [data, value]);
        })}
      </BottomNavigation>
    </AppBar>
  );
};

// PropTypes
AppBarButtonNav.defaultProps = {
  // AppBar
  position: "fixed",
  color: "primary",
  gutters: false,
  drawer: false,
  // Tabs
  data: [],
  value: "",
  onChange: null,
  showLabels: false,
};
AppBarButtonNav.propTypes = {
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
  // Button Nav
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
  showLabels: PropTypes.bool,
};

export default AppBarButtonNav;
