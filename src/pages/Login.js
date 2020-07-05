// Dependencies
import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import SwipeableViews from "react-swipeable-views";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import SendRoundedIcon from '@material-ui/icons/SendRounded';
// Layouts
import EmployeeLogin from "../layouts/Forms/EmployeeLogin.js";
import PinLogin from "../layouts/Forms/PinLogin.js";
import AdminLogin from "../layouts/Forms/AdminLogin.js";
import EmailForm from "../layouts/Forms/EmailForm.js";
// core components
import FooterLogin from "../components/Footer/FooterLogin.js";
import SingleTabs from "../components/CustomTabs/SingleTabs.js";
import Card from "../components/Card/Card.js";
import CardHeader from "../components/Card/CardHeader.js";
import CardBody from "../components/Card/CardBody.js";
import CardFooter from "../components/Card/CardFooter.js";
import TabPanel from "../components/Panel/TabPanel.js";
import Modal from "../components/Modal/Modal.js";
import CustomModal from "../components/Modal/CustomModal.js";
// Assets
import logo from "../assets/img/brands/kroft-vertical.svg";
// Styles
import styles from "../styles/pages/LoginStyle.js";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  // State for Panel Tabs
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
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
      <Grid
        container
        className={classes.rootLogin}
        justify="center"
        alignItems="center"
      >
        <Hidden only={["xs", "sm"]}>
          <Grid
            item
            xs={false}
            sm={false}
            md={8}
            lg={8}
            xl={9}
            className={classes.containerSide}
          >
            <Card className={classes[cardAnimaton]} variant="cardSide"></Card>
          </Grid>
        </Hidden>

        <Grid
          item
          xs={12}
          sm={9}
          md={4}
          lg={4}
          xl={3}
          elevation={6}
          square="true"
          className={classes.container}
        >
          <Card className={classes[cardAnimaton]} variant="cardLogin">
            <CardHeader color="primary" className={classes.cardHeaderLogin}>
              <img
                alt="Logo"
                src={logo}
                style={{ width: "70%", height: "30%" }}
              />
            </CardHeader>
            <CardBody login>
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
              <SwipeableViews
                axis="x"
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                <TabPanel value={value} index={0} centered>
                  <EmployeeLogin />
                  <Link to="/Kroft-FrontEnd/collects">
                    <p className={classes.divider}>Inicio rápido</p>
                  </Link>
                  <PinLogin />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <AdminLogin />
                </TabPanel>
              </SwipeableViews>
            </CardBody>
            <CardFooter className="cardFooterLogin">
              {value === 0 ? null : (
                <h4 onClick={handleOpen}>¿Olvidaste tu contraseña?</h4>
              )}
            </CardFooter>
          </Card>
          {/* <Link to="/Kroft-FrontEnd/sales">
            Home
          </Link> */}
          <FooterLogin whiteFont />
        </Grid>
      </Grid>

      {/* <Modal
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
      /> */}

      <CustomModal
        open={open}
        close={handleClose}
        title={{
          text: "Ingresa tu correo electronicos",
          size: "medium",
        }}
        content={<EmailForm />}
        rightButtons={[
          {
            type: "button",
            text: "Cancelar",
            color: "transparent",
            edge: "start",
            size: "large",
            variant: "contained",
            margin: true,
            disabled: false,
            onClick: handleClose,
          },
          {
            type: "button",
            text: "Enviar",
            color: "primary",
            icon: SendRoundedIcon,
            edge: "start",
            size: "large",
            variant: "contained",
            margin: true,
            disabled: false,
            html: "email-form",
            onClick: null,
          },
        ]}
        // scroll="paper"
        maxWidth="sm"
        fullWidth
      />
    </Fragment>
  );
}
