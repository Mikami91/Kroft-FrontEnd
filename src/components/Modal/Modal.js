// Dependencies
import React, { forwardRef } from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import Button from "../CustomButtons/Button.js";

import styles from "../../styles/components/modalStyle.js";

const useStyles = makeStyles(styles);

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export default function Modal(props) {
  const classes = useStyles();
  const { open, close, scroll, fullWidth, maxWidth, title, closeText, actionText, content, form } = props;
  return (
    <Dialog
      classes={{
        root: classes.center,
        paper: classes.modal
      }}
      open={open}
      scroll={scroll}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      TransitionComponent={Transition}
      keepMounted
      onClose={close}
      aria-labelledby="modal-slide-title"
      aria-describedby="modal-slide-description"
    >
      <DialogTitle
        id="modal-slide-title"
        disableTypography
        className={classes.modalHeader}
      >
        <IconButton
          className={classes.modalCloseButton}
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={close}
        >
          <Close className={classes.modalClose} />
        </IconButton>
        <h4 className={classes.modalTitle}>{title}</h4>
      </DialogTitle>
      <DialogContent
        id="modal-slide-description"
        className={classes.modalBody}
      >
        {content}
      </DialogContent>
      <DialogActions className={classes.modalFooter}>
        <Button 
          color="transparent" 
          simple
          onClick={close}
        >
          {closeText}
        </Button>
        <Button
          // onClick={close}
          color="primary"
          simple
          form={form}
          margin="dense"
          variant="text"
          type="submit"
        >
          {actionText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

// PropTypes
Modal.defaultProps = {
  open: false,
  close: null,
  scroll: "body",
  fullWidth: false,
  maxWidth: "md",
  title: "Titulo",
  closeText: "Cancelar",
  openText: "Accion",
  content: "Contenido...",
  form: ""
}

Modal.propTypes = {
  open: PropTypes.bool,
  close: PropTypes.func,
  scroll: PropTypes.oneOf([
    "body",
    "paper"
  ]),
  fullWidth: PropTypes.bool,
  maxWidth: PropTypes.oneOf([
    "lg",
    "md",
    "sm",
    "xl",
    "xs",
    false
  ]),
  title: PropTypes.string,
  closeText: PropTypes.string,
  actionText: PropTypes.string,
  content: PropTypes.object,
  form: PropTypes.string
};
