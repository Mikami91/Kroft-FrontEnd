// Dependencies
import React, { Fragment, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
// Layouts
import Sidebar from '../layouts/Sidebars/Sidebar.js';
import DashAppBar from '../layouts/AppBars/DashAppBar.js';
// core components
import Card from "../components/Card/Card.js";
import FooterLogin from "../components/Footer/FooterLogin.js";
// Styles
import styles from "../styles/pages/SalesStyle.js";

const useStyles = makeStyles(styles);

export default function SalesPage(props) {
  // State for Card animation
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  return (
    <Fragment>
      <Sidebar />

      {/* <Grid
        container
        className={classes.content}
        justify="center"
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          elevation={6}
          square="true"
          className={classes.container}
        >
          <Card variant="cardDash">{"MMM"}</Card>
        </Grid>
      </Grid> */}
    </Fragment>
  );
}
