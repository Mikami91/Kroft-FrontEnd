// Dependencies
import React, { Fragment } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import Lock from "@material-ui/icons/Lock";
import Visibility from '@material-ui/icons/Visibility';
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";
// Layouts
import EmployeeLogin from '../layouts/Forms/EmployeeLogin.js'
// core components
import FooterLogin from "../components/Footer/FooterLogin.js";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import NavPills from '../components/NavPills/NavPills.js';
import SingleTabs from '../components/CustomTabs/SingleTabs.js';
import Card from "../components/Card/Card.js";
import CardHeader from "../components/Card/CardHeader.js";
import CardBody from "../components/Card/CardBody.js";
import CardFooter from "../components/Card/CardFooter.js";

import styles from "../styles/pages/LoginStyle.js";

import image from "../assets/img/bg7.jpg";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <Fragment>
      <Grid container component="main" className={classes.rootLogin}>

        <Grid item xs={false} sm={6} md={7} className={classes.imageSide} />

        <Grid item xs={12} sm={6} md={5} elevation={6} square="true" className={classes.container}>

          <Card className={classes[cardAnimaton]}>
            <CardHeader color="primary" className={classes.cardHeaderLogin}>
              <h4>Login</h4>
              
            </CardHeader>
            <CardBody>
            <SingleTabs
                  plainTabs
                  headerColor="primary"
                  tabs={[
                      {
                          tabName: "Profile",
                          tabIcon: Dashboard,
                      },
                      {
                          tabName: "Messages",
                          tabIcon: Schedule,
                      },
                  ]}
              />
              <EmployeeLogin />
            </CardBody>
            <CardFooter>
              <h4>Login</h4>
            </CardFooter>
          </Card>

          <FooterLogin whiteFont />

        </Grid>

      </Grid>
      {/* <div className={classes.container}>
        <GridContainer container component="main" justify="center">
          <Grid item xs={false} sm={6} md={7} className={classes.imageSide} />
          <GridItem item xs={12} sm={6} md={5} elevation={6} square="true">
            <Card className={classes[cardAnimaton]}>
              <CardHeader color="primary" className={classes.cardHeaderLogin}>
              <h4>Login</h4>
              </CardHeader>
              <CardBody>
                <EmployeeLogin />
              </CardBody>
              <CardFooter>
              <h4>Login</h4>
              </CardFooter>
            </Card>

            <FooterLogin whiteFont />

          </GridItem>
        </GridContainer>
      </div> */}
    </Fragment>
  );
}
