// Dependencies
import React, { forwardRef, useMemo } from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Zoom from "@material-ui/core/Zoom";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// Core Components
import DialogButton from "../CustomButtons/DialogButton";
import DialogIcon from "../CustomButtons/DialogIcon";
import DialogFab from "../CustomButtons/DialogFab";
import DialogText from "../Typography/DialogText";
import CustomText from "../Typography/CustomText";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// Styles
import styles from "../../styles/components/modalStyle.js";

const useStyles = makeStyles(styles);

// Childs Components
const Transition = forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
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
    subtitle,
    content,
    centerButtons,
    rightButtons,
    leftButtons,
    background,
    renderRefresh,
  } = props;
  
  // Using useMemo hook
  return useMemo(() => {
    // Render
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
          <div className={classes.contentTitle}>
            <div className={classes.contentTitleText}>
              <CustomText {...title} />
              {typeof subtitle !== "undefined" ? <CustomText {...subtitle} /> : null}
            </div>
            <div className={classes.contentTitleButton}>
              {closeIcon === true ? (
                <IconButton
                  className={classes.modalCloseButton}
                  key="close"
                  aria-label="Close"
                  color="inherit"
                  onClick={close}
                >
                  <Close className={classes.modalClose} />
                </IconButton>
              ) : null}
            </div>
          </div>
        </DialogTitle>
        <DialogContent style={{ backgroundImage: `url(${background})` }}>{content}</DialogContent>
        <DialogActions className={classes.modalFooter}>
          <div className={classes.contentLeft}>
            {leftButtons.map((index, key) => {
              // Button type
              if (index.type === "button") {
                return <DialogButton key={key} index={index} />;
              }
              // Icon type
              if (index.type === "icon" && typeof index.icon == "undefined") {
                return <DialogIcon key={key} index={index} />;
              }
              // Fab type
              if (index.type === "fab" && typeof index.icon !== "undefined") {
                return <DialogFab key={key} index={index} align="leftFab" />;
              }
              // Text type
              if (index.type === "text") {
                return <DialogText key={key} index={index} />;
              }
            })}
          </div>

          <div className={classes.contentCenter}>
            {centerButtons.map((index, key) => {
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
                return <DialogFab key={key} index={index} align="centerFab" />;
              }
              // Text type
              if (index.type === "text") {
                return <DialogText key={key} index={index} />;
              }
            })}
          </div>

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
                return <DialogFab key={key} index={index} align="rightFab" />;
              }
              // Text type
              if (index.type === "text") {
                return <DialogText key={key} index={index} />;
              }
            })}
          </div>
        </DialogActions>
      </Dialog>
    );
  }, [open, renderRefresh]);
}
// PropTypes
CustomModal.defaultProps = {
  open: false,
  close: null,
  closeIcon: true,
  scroll: "body",
  fullWidth: false,
  maxWidth: "md",
  title: {},
  content: null,
  footer: null,
  background: "",
  renderRefresh: null,
  // Buttons
  fabButton: {},
  centerButtons: [],
  rightButtons: [],
  leftButtons: [],
};
CustomModal.propTypes = {
  open: PropTypes.bool,
  close: PropTypes.func,
  closeIcon: PropTypes.bool,
  scroll: PropTypes.oneOf(["body", "paper"]),
  fullWidth: PropTypes.bool,
  maxWidth: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs", false]),
  title: PropTypes.object,
  content: PropTypes.object,
  rightButtons: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(["button", "icon", "fab", "text"]),
      icon: PropTypes.object,
    })
  ),
  centerButtons: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(["button", "icon", "fab", "text"]),
      icon: PropTypes.object,
    })
  ),
  leftButtons: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(["button", "icon", "fab", "text"]),
      icon: PropTypes.object,
    })
  ),
  background: PropTypes.string,
  renderRefresh: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.object,
  ]),
};
