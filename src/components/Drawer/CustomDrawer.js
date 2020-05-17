// Dependencies
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

const useStyles = makeStyles({
  list: {
    width: 250,
    backgroundImage: "linear-gradient(to bottom, #0D1522 0%, #0b463b 100%);",
  },
});

export default function CustomDrawer(props) {
  const { direction, open, close, childrem } = props;
  const classes = useStyles();

  return (
    <Drawer
      open={open}
      onClose={close}
      className={classes.list}
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
