// Dependencies
import React, { createElement } from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
// Styles
import styles from "../../styles/components/buttonStyle.js";

const useStyles = makeStyles(styles);

function DialogIcon(props) {
  const { disabled, color, onClick, text, icon, edge } = props.index;
  const classes = useStyles();
  if (disabled) {
    return (
      <IconButton edge={edge} disabled>
        {typeof icon !== "undefined"
          ? createElement(icon, { className: classes.dialogIcon })
          : null}
      </IconButton>
    );
  } else {
    return (
      <Tooltip placement="bottom" title={text}>
        <IconButton edge={edge} color={color} onClick={onClick}>
          {typeof icon !== "undefined"
            ? createElement(icon, { className: classes.dialogIcon })
            : null}
        </IconButton>
      </Tooltip>
    );
  }
}
// PropTypes
DialogIcon.defaultProps = {
  disabled: false,
  color: "primary",
  icon: null,
  onClick: null,
  edge: false,
  text: "Button",
};
DialogIcon.propTypes = {
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

export default DialogIcon;
