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
import EmployeeLogin from '../layouts/Forms/EmployeeLogin.js';
import PinLogin from '../layouts/Forms/PinLogin.js';
import AdminLogin from '../layouts/Forms/AdminLogin.js';
import EmailForm from '../layouts/Forms/EmailForm.js';
// core components
import FooterLogin from "../components/Footer/FooterLogin.js";
import SingleTabs from '../components/CustomTabs/SingleTabs.js';
import Card from "../components/Card/Card.js";
import CardHeader from "../components/Card/CardHeader.js";
import CardBody from "../components/Card/CardBody.js";
import CardFooter from "../components/Card/CardFooter.js";
import TabPanel from '../components/Panel/TabPanel.js';
import Modal from '../components/Modal/Modal.js';
// Styles
import styles from "../styles/pages/LoginStyle.js";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  // State for Panel Tabs
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = index => {
    setValue(index);
  };
  // State for Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // State for Card animation
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container component="main" className={classes.rootLogin}>
        <Grid item xs={false} sm={6} md={7} lg={8} className={classes.imageSide} />
        <Grid item xs={12} sm={6} md={5} lg={4} elevation={6} square="true" className={classes.container}>
          <Card className={classes[cardAnimaton]} login>
            <CardHeader color="primary" className={classes.cardHeaderLogin}>
              <h3>KROFT SOLUTIONS</h3>
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
                <TabPanel value={value} index={0} centered>
                  <EmployeeLogin />
                  <p className={classes.divider}>Inicio rápido</p>
                  <PinLogin />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <AdminLogin />
                </TabPanel>
              </SwipeableViews>
            </CardBody>
            <CardFooter className="cardFooterLogin">
              {value === 0 ? null : <h4 onClick={handleOpen} >¿Olvidaste tu contraseña?</h4>}
            </CardFooter>
          </Card>
          <FooterLogin whiteFont />
        </Grid>
      </Grid>

      <Modal 
        open={open} 
        close={handleClose}
        scroll="body"
        fullWidth={true}
        maxWidth="xs"
        title="Ingresa tu correo electronico"
        closeText="Cerrar"
        actionText="Enviar"
        content={<EmailForm />}
        form="email-form"
      />

    </Fragment>
  );
}
