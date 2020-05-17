// Dependencies
import React, { Fragment, useState } from "react";
import { withRouter } from "react-router-dom";
import SwipeableViews from "react-swipeable-views";
import Modal from "react-awesome-modal";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// @material-ui/icons
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import PersonIcon from "@material-ui/icons/Person";
import RefreshIcon from "@material-ui/icons/Refresh";
import FormatListNumberedRtlIcon from "@material-ui/icons/FormatListNumberedRtl";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
// core components
import AppBarTabs from "../components/AppBar/AppBarTabs.js";
import TabPanel from "../components/Panel/TabPanel";
import GridTables from "../components/Grid/GridTables";
import FooterAppBar from "../components/Footer/FooterAppBar.js";
import CustomDrawer from "../components/Drawer/CustomDrawer.js";

// Pages
import Products from "./Products.js";
// Variables
import { environments } from "../variables/environments";
import { tables } from "../variables/tables";
// Styles
import styles from "../styles/pages/SalesStyle.js";

const useStyles = makeStyles(styles);

function SalesPage(props) {
  console.log(props.location);
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
    setOpenProducts(true);
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
                    onClick={handleOpenProducts}
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
          onClick: () => {
            alert("Continua practicando con el PAIFE (:");
          },
        }}
        rightButtons={[
          {
            type: "fab",
            text: "/",
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
            onClick: handleOpenProfile
          },
        ]}
        leftButtons={[
          {
            type: "icon",
            text: "Cambiar de Mesa",
            color: "default",
            icon: SwapHorizIcon,
            edge: "start",
            size: "large",
            disabled: false,
            onClick: handleOpenChangeTables
          },
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

      <Modal
        visible={openProducts}
        width="100%"
        height="100%"
        effect="fadeInUp"
        onClickAway={handleCloseProducts}
      >
        <Products handleClose={handleCloseProducts} />
      </Modal>

	  <Modal
        visible={openProfile}
        width="50%"
        height="50%"
        effect="fadeInUp"
        onClickAway={handleCloseProfile}
      >
        <p>Perfil de usuario</p>
      </Modal>

	  <Modal
        visible={openChangeTables}
        width="50%"
        height="50%"
        effect="fadeInUp"
        onClickAway={handleCloseChangeTables}
      >
        <p>Cambio de mesas</p>
      </Modal>

      <CustomDrawer
        direction="left"
        open={openDrawer}
        close={handleCloseDrawer}
      >
        
      </CustomDrawer>
    </Fragment>
  );
}

export default withRouter(SalesPage);
