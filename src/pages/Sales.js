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
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import TableChartIcon from '@material-ui/icons/TableChart';
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
// Assets
import image from '../assets/img/backgrounds/productbackground.jpg'
// Variables
import { environments } from "../variables/environments";
import { tables } from "../variables/tables";
// Styles
import styles from "../styles/pages/SalesStyle.js";

const useStyles = makeStyles(styles);

function SalesPage(props) {
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
  const [openProducts, setOpenProducts] = useState(true);
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
          onClick: () => null,
        }}
        leftButtons={[
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
            text: "Mesero N°",
            color: "default",
            margin: true,
            autoSize: true,
          },
        ]}
        rightButtons={[
          {
            type: "icon",
            text: "Cambiar de Mesa",
            color: "default",
            icon: SwapHorizIcon,
            edge: "start",
            size: "large",
            disabled: false,
            onClick: handleOpenChangeTables,
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
        title="Cambio de mesas"
        content={<ChangeTable environments={environments} tables={tables} />}
        centerButtons={[
          {
            type: "fab",
            text: "/Kroft-FrontEnd/",
            color: "primary",
            icon: SwapHorizIcon,
            size: "large",
            disabled: false,
          },
        ]}
        leftButtons={[
          {
            type: "button",
            text: "Mesa N° 1",
            color: "danger",
            icon: TableChartIcon,
            edge: "end",
            size: "small",
            variant: "contained",
            disabled: false,
            onClick: handleOpenProfile,
          },
          // {
          //   type: "text",
          //   text: "Typography",
          //   color: "default",
          // },
        ]}
        rightButtons={[
          // {
          //   type: "text",
          //   text: "Typography",
          //   color: "default",
          // },
          {
            type: "button",
            text: "Mesa N° 2",
            color: "success",
            icon: TableChartIcon,
            edge: "start",
            size: "large",
            variant: "contained",
            disabled: false,
            onClick: handleOpenProfile,
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
        background={image}
        open={openProducts}
        close={handleCloseProducts}
      />

    </Fragment>
  );
}

export default withRouter(SalesPage);
