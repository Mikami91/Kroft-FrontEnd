// Dependencies
import React, { Fragment, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
// Layouts
import SalesAppBar from '../layouts/AppBars/SalesAppBar.js';
// core components
import CustomTabs from "../components/CustomTabs/CustomTabs.js";
import Tasks from "../components/Tasks/Tasks.js";
import Card from "../components/Card/Card.js";
import FooterLogin from "../components/Footer/FooterLogin.js";
// Variables
import { bugs, website, server } from "../variables/general.js";
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

        <SalesAppBar />
        {/* <CustomTabs
          // dense
          title="Tasks:"
          headerColor="primary"
          tabs={[
            {
              tabName: "Bugs",
              tabIcon: Store,
              tabContent: (
                <Tasks
                  checkedIndexes={[0, 3]}
                  tasksIndexes={[0, 1, 2, 3]}
                  tasks={bugs}
                />
              )
            },
            {
              tabName: "Website",
              tabIcon: Store,
              tabContent: (
                <Tasks
                  checkedIndexes={[0]}
                  tasksIndexes={[0, 1]}
                  tasks={website}
                />
              )
            },
          ]}
        /> */}

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
