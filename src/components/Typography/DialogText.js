// Dependencies
import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// Styles
import styles from "../../styles/components/typographyStyle.js";

const useStyles = makeStyles(styles);

function DialogButton(props) {
  const { text  } = props.index;
  const classes = useStyles();
  return (
    <Typography className={classes.text} noWrap>
      {text} 
    </Typography>
  );
}
// PropTypes
DialogButton.defaultProps = {
  text: "",
};
DialogButton.propTypes = {
  text: PropTypes.string,
};

export default DialogButton;
