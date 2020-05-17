// Dependencies
import React, { forwardRef } from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// Styles
import styles from "../../styles/components/modalStyle.js";

const useStyles = makeStyles(styles);

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export default function CustomModal(props) {
  const classes = useStyles();
  const {
    open,
    close,
    scroll,
    fullWidth,
    maxWidth,
    title,
    content,
    footer,
  } = props;
  return (
    <Dialog
      classes={{
        // root: classes.center,
        // paper: classes.modal,
      }}
      open={open}
      scroll={scroll}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      TransitionComponent={Transition}
      keepMounted
      onClose={close}
    >

{title}
{content}
{footer}
      {/* <DialogTitle>{title}</DialogTitle>
      <DialogContent className={classes.modalBody}>{content}</DialogContent>
      <DialogActions className={classes.modalFooter}>{footer}</DialogActions> */}
    
    </Dialog>
  );
}

// PropTypes
CustomModal.defaultProps = {
  open: false,
  close: null,
  scroll: "body",
  fullWidth: false,
  maxWidth: "md",
  title: "Titulo...",
  content: "Contenido...",
  footer: "Footer...",
};

CustomModal.propTypes = {
  open: PropTypes.bool,
  close: PropTypes.func,
  scroll: PropTypes.oneOf(["body", "paper"]),
  fullWidth: PropTypes.bool,
  maxWidth: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs", false]),
  title: PropTypes.object,
  content: PropTypes.object,
  footer: PropTypes.object,
};
