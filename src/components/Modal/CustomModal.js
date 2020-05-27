// Dependencies
import React, { forwardRef } from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
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
    closeIcon,
    scroll,
    fullWidth,
    maxWidth,
    title,
    content,
    footer,
  } = props;
  return (
    <Dialog
      classes={
        {
          // root: classes.center,
          // paper: classes.modal,
        }
      }
      open={open}
      scroll={scroll}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      TransitionComponent={Transition}
      keepMounted
      onClose={close}
    >
      <DialogTitle className={classes.modalHeader}>
        {closeIcon === true ? <IconButton
          className={classes.modalCloseButton}
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={close}
        >
          <Close className={classes.modalClose} />
        </IconButton> : null }
        {/* <h4 className={classes.modalTitle}>{title}</h4> */}
        {title}
      </DialogTitle>
      <DialogContent >{content}</DialogContent>
      <DialogActions className={classes.modalFooter}>{footer}</DialogActions>
    </Dialog>
  );
}

// PropTypes
CustomModal.defaultProps = {
  open: false,
  close: null,
  closeIcon: true,
  scroll: "body",
  fullWidth: false,
  maxWidth: "md",
  title: "Titulo...",
  content: null,
  footer: null,
};

CustomModal.propTypes = {
  open: PropTypes.bool,
  close: PropTypes.func,
  closeIcon: PropTypes.bool,
  scroll: PropTypes.oneOf(["body", "paper"]),
  fullWidth: PropTypes.bool,
  maxWidth: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs", false]),
  title: PropTypes.string,
  content: PropTypes.object,
  footer: PropTypes.object,
};
