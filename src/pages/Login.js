// Dependencies
import React, { Fragment, useState, useEffect } from "react";
import SwipeableViews from "react-swipeable-views";
// Conecction to Store
import { connect } from "react-redux";
// Actions Creators
import { hideSnackbar } from "../redux/actions/creators/snackbarCreator";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import SendRoundedIcon from "@material-ui/icons/SendRounded";
// Layouts
import EmployeeLogin from "../layouts/Forms/EmployeeLogin.js";
import PinLogin from "../layouts/Forms/PinLogin.js";
import AdminLogin from "../layouts/Forms/AdminLogin.js";
import SuperAdminLogin from "../layouts/Forms/SuperAdminLogin.js";
import EmailForm from "../layouts/Forms/EmailForm.js";
// core components
import FooterLogin from "../components/Footer/FooterLogin.js";
import SingleTabs from "../components/CustomTabs/SingleTabs.js";
import Card from "../components/Card/Card.js";
import CardImage from "../components/Card/CardImage.js";
import CardHeader from "../components/Card/CardHeader.js";
import CardBody from "../components/Card/CardBody.js";
import CardFooter from "../components/Card/CardFooter.js";
import TabPanel from "../components/Panel/TabPanel.js";
import CustomModal from "../components/Modal/CustomModal.js";
import CustomLoading from "../components/Loading/CustomLoading";
import CustomSnackbar from "../components/Snackbar/CustomSnackbar";
// Functions
import { companyShow } from "../functions/cruds/companyFunctions";
// Events
import { companies_WS } from "../events";
// Apis
import { API } from "../API/index";
// Assets
import logo from "../assets/img/brands/kroft-vertical.svg";
// Styles
import styles from "../styles/pages/LoginStyle.js";

const useStyles = makeStyles(styles);

function LoginPage({
  company,
  admin_loading,
  employee_loading,
  snackbar_show,
  snackbar_message,
  snackbar_severity,
}) {
  // Loading payloads state
  const [is_payload, set_is_payload] = useState(false);

  // Payloads
  useEffect(() => {
    if (is_payload === false) {
      companyShow();

      // Change is_payload state
      set_is_payload(true);
    }
  }, [is_payload, company]);

  // Events start
  companies_WS();

  // Dispatches
  const handleCloseSnackbar = () => hideSnackbar();

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
        <CustomSnackbar
          open={snackbar_show}
          message={snackbar_message}
          severity={snackbar_severity}
          onClose={handleCloseSnackbar}
        />

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
            <CardImage
              className={classes[cardAnimaton]}
              variant="cardSide"
              image={API + "images/companies/" + company.photo}
              imageAlt="Banner"
              text={company.name}
              textColor="warning"
            />
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
            <CustomLoading
              open={admin_loading || employee_loading}
              text={""}
              inside
            />

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
                    // tabIcon: AccountBoxIcon,
                  },
                  {
                    tabName: "Admin",
                    // tabIcon: AssignmentIndIcon,
                  },
                  {
                    tabName: "Super",
                    // tabIcon: AccountBoxIcon,
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
                  <PinLogin />
                </TabPanel>

                <TabPanel value={value} index={1}>
                  <AdminLogin />
                </TabPanel>

                <TabPanel value={value} index={2}>
                  <SuperAdminLogin />
                </TabPanel>
              </SwipeableViews>
            </CardBody>
            {/* <CardFooter className="cardFooterLogin">
              {value === 2 ? (
                <h4 onClick={handleOpen}>¿Olvidaste tu contraseña?</h4>
              ) : null}
            </CardFooter> */}
          </Card>
          {/* <Link to="/sales">
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
          text: "Ingresa tu correo electrónico",
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

// Connect to Store State
const mapStateToProps = (state) => {
  const { company, admin, employee, snackbar } = state;
  return {
    company: company.payload,
    admin_loading: admin.loading,
    employee_loading: employee.loading,
    snackbar_show: snackbar.show,
    snackbar_message: snackbar.message,
    snackbar_severity: snackbar.severity,
  };
};

export default connect(mapStateToProps, null)(LoginPage);
