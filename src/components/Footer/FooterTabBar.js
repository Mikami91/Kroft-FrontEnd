// Dependencies
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link, withRouter } from "react-router-dom";
// @material-ui/Componentes
import AppBar from "@material-ui/core/AppBar";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// Core Components
import DialogButton from "../CustomButtons/DialogButton";
import DialogIcon from "../CustomButtons/DialogIcon";
import DialogFab from "../CustomButtons/DialogFab";
import DialogText from "../Typography/DialogText";
import FloatChip from "../Chip/FloatChip";
// Styles
import styles from "../../styles/components/footerStyle";

const useStyles = makeStyles(styles);

// Parent Component
function FooterTabBar(props) {
  // Props
  const {
    // AppBar
    witdh,
    color,
    position,
    // Tabs
    tabs,
    value,
    change,
    showLabels,
    tabsColor,
  } = props;
  // Styles
  const classes = useStyles();
  const footerClasses = classNames({
    [classes[witdh + "Width"]]: true,
    [classes.footerAppBar]: true,
  });
  const navClasses = classNames({
    [classes.buttonNavigation]: true,
    [classes[tabsColor + "SelectButtonNav"]]: true,
  });
  // Render
  return (
    <AppBar
      position={position}
      color={color}
      className={footerClasses}
      variant="elevation"
    >
        <BottomNavigation
          showLabels={showLabels}
          value={value}
          className={navClasses}
          onChange={change}
        >
          {tabs.map((tab, key) => {
            return (
              <BottomNavigationAction
                className={navClasses}
                key={key}
                label={<Typography>{tab.text}</Typography>}
                value={key}
                icon={<tab.icon fontSize="default" />}
              />
            );
          })}
        </BottomNavigation>
    </AppBar>
  );
}
// PropTypes
FooterTabBar.defaultProps = {
  // AppBar
  witdh: "full",
  position: "fixed",
  color: "primary",
  // Tabs
  tabs: [],
  value: null,
  change: null,
  showLabels: true,
  tabsColor: "primary"
};
FooterTabBar.propTypes = {
  // AppBar
  witdh: PropTypes.oneOf(["full", "dash", "drawer"]),
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
  // Tabs
  tabs: PropTypes.array,
  value: PropTypes.number,
  change: PropTypes.func,
  showLabels: PropTypes.bool,
  tabsColor: PropTypes.oneOf([
    "primary",
    "secondary",
  ]),
};

export default FooterTabBar;
