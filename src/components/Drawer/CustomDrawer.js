// Dependencies
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from '@material-ui/core/Button';
// Styles
import styles from "../../styles/components/drawerStyle.js";

const useStyles = makeStyles(styles);

export default function CustomDrawer(props) {
  const { direction, open, close, childrem } = props;
  const classes = useStyles();

  return (
    <Drawer
      open={open}
      onClose={close}
      className={classes.drawer}
      variant="temporary"
      anchor={direction}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      {childrem}
    </Drawer>
  );
}
