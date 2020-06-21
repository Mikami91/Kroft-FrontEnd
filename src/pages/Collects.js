// Dependencies
import React, { Fragment, useState } from "react";
import { withRouter } from "react-router-dom";
import SwipeableViews from "react-swipeable-views";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// @material-ui/icons
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import PersonIcon from "@material-ui/icons/Person";
import RefreshIcon from "@material-ui/icons/Refresh";
import FormatListNumberedRtlIcon from "@material-ui/icons/FormatListNumberedRtl";
import DoneRoundedIcon from "@material-ui/icons/DoneRounded";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CreditCardIcon from '@material-ui/icons/CreditCard';
// Views
import Products from "../views/Sales/Products.js";
// Layouts
import EmployeeAdd from "../layouts/Forms/EmployeeAdd.js";
import ChangeTable from "../layouts/Forms/ChangeTable.js";
import DrawerList from "../layouts/Drawers/DrawerTablesList.js";
import DrawerProducts from "../layouts/Drawers/DrawerProducts.js";
// core components
import AppBarTabs from "../components/AppBar/AppBarTabs.js";
import TabPanel from "../components/Panel/TabPanel";
import GridTables from "../components/Grid/GridTables";
import FooterAppBar from "../components/Footer/FooterAppBar.js";
import CustomDrawer from "../components/Drawer/CustomDrawer.js";
import CustomModal from "../components/Modal/CustomModal.js";
import CustomBotton from "../components/CustomButtons/Button.js";

import IconInput from "../components/CustomInput/IconInput.js";

// Variables
import { environments } from "../variables/environments";
import { tables } from "../variables/tables";
// Styles
import styles from "../styles/pages/SalesStyle.js";

const useStyles = makeStyles(styles);

function CollectsPage(props) {
  // console.log(props.location);
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    // console.log(newValue);
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  // State for Modal Products
  const [openProducts, setOpenProducts] = useState(false);
  const handleOpenProducts = () => {
    setOpenProducts(false);
    // setOpenProducts(true);
  };
  const handleCloseProducts = () => {
    setOpenProducts(false);
  };
  // State for Modal Profile
  const [openProfile, setOpenProfile] = useState(false);
  const handleOpenProfile = () => {
    setOpenProfile(true);
  };
  const handleCloseProfile = () => {
    setOpenProfile(false);
  };
  // State for Modal Change Tables
  const [openChangeTables, setOpenChangeTables] = useState(false);
  const handleOpenChangeTables = () => {
    setOpenChangeTables(true);
  };
  const handleCloseChangeTables = () => {
    setOpenChangeTables(false);
  };
  // State for Drawer
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };
  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };
  // // UseEffect
  // useEffect(() => {
  // 	if (typeof props.location.state !== "undefined") {
  // 		setValue(props.location.state.value);
  // 	}
  // 	return null;
  //   }, [value]);
  // Styles
  const classes = useStyles();
  return (
    <Fragment>
      <AppBarTabs
        color="inherit"
        data={environments}
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        scrollButtons="auto"
      />

      <div className={classes.rootMenu}>
        <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
          {environments.map((index, key) => {
            return (
              <TabPanel key={key} value={value} index={key}>
                <Grid
                  container
                  spacing={0}
                  direction="row"
                  className={classes.content}
                  justify="flex-start"
                  alignItems="flex-start"
                >
                  <GridTables
                    value={value}
                    filter={index.id}
                    data={tables}
                    onClick={handleOpenChangeTables}
                    color="primary"
                  />
                </Grid>
              </TabPanel>
            );
          })}
        </SwipeableViews>
      </div>

      <FooterAppBar
        color="inherit"
        variant="dense"
        fabButton={{
          disabled: false,
          color: "primary",
          label: "Actualizar",
          float: false,
          align: "center",
          icon: RefreshIcon,
          onClick: () => null,
        }}
        rightButtons={[
          {
            type: "fab",
            text: "/Kroft-FrontEnd/",
            color: "secondary",
            icon: KeyboardBackspaceIcon,
            size: "large",
            disabled: false,
            // onClick: () => {
            // 	alert('Salir');
            // }
          },
          {
            type: "icon",
            text: "Perfil",
            color: "default",
            icon: PersonIcon,
            edge: "end",
            size: "large",
            disabled: false,
            onClick: handleOpenProfile,
          },
          {
            type: "text",
            text: "Cajero N°",
            color: "default",
          },
        ]}
        leftButtons={[
          {
            type: "icon",
            text: "Lista de Mesas",
            color: "default",
            icon: FormatListNumberedRtlIcon,
            edge: "end",
            size: "large",
            disabled: false,
            onClick: handleOpenDrawer,
          },
        ]}
      />

      <CustomModal
        open={openProfile}
        close={handleCloseProfile}
        title="Perfil de usuario"
        content={<EmployeeAdd />}
        maxWidth="sm"
        fullWidth
      />

      <CustomModal
        open={openChangeTables}
        close={handleCloseChangeTables}
        title="Cuenta total"
        content={
          <Fragment>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                <IconInput
                  variant={"standard"}
                  margin={"dense"}
                  color="primary"
                  // disabled={showProgress}
                  type="numeric"
                  label={"Bolivianos"}
                  name="user"
                  onChange={handleChange}
                  // value={state.user}
                  required
                  icon={<CreditCardIcon />}
                  iconPosition="end"
                />
              </Grid>
              <Grid item xs={12}>
                <IconInput
                  variant={"standard"}
                  margin={"dense"}
                  color="primary"
                  // disabled={showProgress}
                  type="numeric"
                  label={"Dolares"}
                  name="user"
                  onChange={handleChange}
                  // value={state.user}
                  required
                  icon={<AttachMoneyIcon />}
                  iconPosition="end"
                />
              </Grid>
            </Grid>
          </Fragment>
        }
        rightButtons={[
          {
            type: "text",
            text: "Total: 258 Bs.",
            color: "default",
          },
        ]}
        centerButtons={[
          {
            type: "text",
            text: "Cambio: 100 Bs.",
            color: "default",
          },
        ]}
        leftButtons={[
          {
            type: "button",
            text: "Cobrar",
            color: "success",
            icon: DoneRoundedIcon,
            edge: "start",
            size: "large",
            variant: "contained",
            disabled: false,
            onClick: null,
          },
        ]}
        scroll="paper"
        maxWidth="sm"
        fullWidth
      />

      <DrawerList
        direction="right"
        open={openDrawer}
        close={handleCloseDrawer}
        categoryList={environments}
        itemList={tables}
        filter="id_environment"
      />

      <DrawerProducts
        direction="bottom"
        variant="temporary"
        open={openProducts}
        close={handleCloseProducts}
      />
    </Fragment>
  );
}

export default withRouter(CollectsPage);
