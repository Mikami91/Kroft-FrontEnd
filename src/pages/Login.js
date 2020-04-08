// Dependencies
import React, { Fragment, useState } from "react";
import SwipeableViews from 'react-swipeable-views';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// @material-ui/icons
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
// Layouts
import EmployeeLogin from '../layouts/Forms/EmployeeLogin.js'
import AdminLogin from '../layouts/Forms/AdminLogin.js'
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
import TabPanel from '../components/Panel/TabPanel.js';

import styles from "../styles/pages/LoginStyle.js";

import image from "../assets/img/bg7.jpg";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = index => {
    setValue(index);
  };
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
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

          <Card className={classes[cardAnimaton] + " cardLogin"}>

            <CardHeader color="primary" className={classes.cardHeaderLogin}>
              <h4>Login</h4>
              <SingleTabs
                centered
                value={value}
                onChange={handleChange}
                plainTabs
                headerColor="primary"
                tabs={[
                  {
                    tabName: "Personal",
                    tabIcon: AccountBoxIcon,
                  },
                  {
                    tabName: "Gerencia",
                    tabIcon: AssignmentIndIcon,
                  },
                ]}
              />
            </CardHeader>

            <CardBody className="cardBodyLogin">
              <SwipeableViews
                axis="x"
                index={value}
                onChangeIndex={handleChangeIndex}
              >

                <TabPanel value={value} index={0}>
                  <EmployeeLogin />
                </TabPanel>

                <TabPanel value={value} index={1}>
                  <AdminLogin />
                </TabPanel>

              </SwipeableViews>
              {/* <EmployeeLogin /> */}
            </CardBody>

            <CardFooter className="cardFooterLogin">
              {value === 0 ? <h4>Inicio rapido</h4> : <h4>¿Olvidaste tu contraseña?</h4>} 
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
