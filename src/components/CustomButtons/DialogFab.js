// Dependencies
import React, { createElement } from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
// Styles
import styles from "../../styles/components/buttonStyle.js";

const useStyles = makeStyles(styles);

function DialogFab(props) {
  const { disabled, color, onClick, text, icon } = props.index;
  const classes = useStyles();
  if (disabled) {
    return (
      <Fab
        disabled
        color={color}
        // size="small"
        aria-label={text}
        className={classes.fabButton + " " + classes[props.align + "Fab"]}
      >
        {typeof icon !== "undefined"
          ? createElement(icon, { className: classes.dialogIcon })
          : null}
      </Fab>
    );
  } else {
    return (
      <Tooltip placement="bottom" title={text}>
        <Fab
          color={color}
          // size="small"
          aria-label={text}
          onClick={onClick}
          className={classes.fabButton + " " + classes[props.align + "Fab"]}
        >
          {typeof icon !== "undefined"
            ? createElement(icon, { className: classes.dialogIcon })
            : null}
        </Fab>
      </Tooltip>
    );
  }
}
// PropTypes
DialogFab.defaultProps = {
  disabled: false,
  color: "primary",
  icon: null,
  onClick: null,
  edge: false,
  text: "Button",
};
DialogFab.propTypes = {
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(["start", "end", false]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
    "white",
    "transparent",
  ]),
  icon: PropTypes.object,
  onClick: PropTypes.func,
  text: PropTypes.string,
};

export default DialogFab;
