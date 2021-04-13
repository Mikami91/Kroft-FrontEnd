// Dependencies
// @material-ui/Componentes
import AppBar from "@material-ui/core/AppBar";
import Badge from '@material-ui/core/Badge';
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import FloatChip from "../../components/Chip/FloatChip";
// Styles
import styles from "../../styles/components/footerStyle";
// Core Components
import DialogButton from "../CustomButtons/DialogButton";
import DialogFab from "../CustomButtons/DialogFab";
import DialogIcon from "../CustomButtons/DialogIcon";
import DialogText from "../Typography/DialogText";

const useStyles = makeStyles(styles);

// Parent Component
function FooterAppBar(props) {
  // Props
  const {
    witdh,
    floatChip,
    fabButton,
    rightButtons,
    leftButtons,
    color,
    position,
    variant,
    drawer,
  } = props;
  // Styles
  const classes = useStyles();
  const footerClasses = classNames({
    [classes[witdh + "Width"]]: true,
    [classes.footerAppBar]: true,
    [classes.footerLogin]: drawer,
  });
  // Render
  return (
    <AppBar
      position={position}
      color={color}
      className={footerClasses}
      variant="elevation"
    >
      <Toolbar variant={variant} className={classes.toolbar}>

        {typeof floatChip !== "undefined" ? <div className={classes.floatChip}>
          <FloatChip {...floatChip} />
        </div> : null}

        <div className={classes.contentLeft}>
          {leftButtons.map((index, key) => {
            // Button type
            if (index.type === "button") {
              return <DialogButton key={key} index={index} />;
            }
            // Icon type
            if (index.type === "icon" && typeof index.icon !== "undefined") {
              return <DialogIcon key={key} index={index} />;
            }
            // Fab type
            if (index.type === "fab" && typeof index.icon !== "undefined") {
              return <DialogFab key={key} index={index} align="left" />;
            }
            // Text type
            if (index.type === "text") {
              return <DialogText key={key} index={index} />;
            }
          })}
        </div>

        {Object.keys(fabButton).length >= 1 &&
          typeof fabButton.icon !== "undefined" ? (
            <Fab
              disabled={fabButton.disabled}
              color={fabButton.color}
              // size="small"
              aria-label={fabButton.label}
              onClick={fabButton.onClick}
              className={
                classes.fabButtonFloat +
                " " +
                classes[fabButton.align + "FabFloat"]
              }
            >
              <Badge color="primary" badgeContent={fabButton.quantity}>
                <fabButton.icon className={classes.icons} />
              </Badge>
            </Fab>
          ) : null}

        <div className={classes.contentRight}>
          {rightButtons.map((index, key) => {
            // Button type
            if (index.type === "button") {
              return <DialogButton key={key} index={index} />;
            }
            // Icon type
            if (index.type === "icon" && typeof index.icon !== "undefined") {
              return <DialogIcon key={key} index={index} />;
            }
            // Fab type
            if (index.type === "fab" && typeof index.icon !== "undefined") {
              return <DialogFab key={key} index={index} align="right" />;
            }
            // Text type
            if (index.type === "text") {
              return <DialogText key={key} index={index} />;
            }
          })}
        </div>
      </Toolbar>
    </AppBar>
  );
}
// PropTypes
FooterAppBar.defaultProps = {
  // AppBar
  witdh: "full",
  position: "fixed",
  color: "primary",
  // TooolBar
  variant: "regular",
  // Buttons
  fabButton: {},
  rightButtons: [],
  leftButtons: [],
};
FooterAppBar.propTypes = {
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
  // TooolBar
  variant: PropTypes.oneOf(["regular", "dense"]),
  // Buttons
  fabButton: PropTypes.shape({
    disabled: PropTypes.bool,
    color: PropTypes.oneOf([
      "default",
      "inherit",
      "primary",
      "secondary",
      "transparent",
    ]),
    label: PropTypes.string,
    float: PropTypes.bool,
    align: PropTypes.oneOf(["right", "center", "left"]),
    icon: PropTypes.object,
    onClick: PropTypes.func,
  }),
  rightButtons: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(["icon", "fab", "text"]),
      text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.array,
      ]),
      color: PropTypes.oneOf([
        "inherit",
        "default",
        "white",
        "warning",
        "success",
        "danger",
        "info",
        "primary",
        "secondary",
      ]),
      icon: PropTypes.object,
      edge: PropTypes.oneOf(["start", "end", false]),
      size: PropTypes.oneOf(["large", "medium", "small", "default"]),
      disabled: PropTypes.bool,
      onClick: PropTypes.func,
    })
  ),
  leftButtons: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(["icon", "fab", "text"]),
      text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.array,
      ]),
      color: PropTypes.oneOf([
        "inherit",
        "default",
        "white",
        "warning",
        "success",
        "danger",
        "info",
        "primary",
        "secondary",
      ]),
      icon: PropTypes.object,
      edge: PropTypes.oneOf(["start", "end", false]),
      size: PropTypes.oneOf(["large", "medium", "small", "default"]),
      disabled: PropTypes.bool,
      onClick: PropTypes.func,
    })
  ),
};

export default FooterAppBar;
