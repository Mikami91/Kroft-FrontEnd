// Dependencies
import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import SwipeableViews from "react-swipeable-views";
// Conecction to Store
import { connect } from 'react-redux';
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
// core components
import AppBarTabs from "../components/AppBar/AppBarTabs.js";
import TabPanel from "../components/Panel/TabPanel";
import GridTables from "../components/Grid/GridTables";
import FooterAppBar from "../components/Footer/FooterAppBar.js";
import CustomDrawer from "../components/Drawer/CustomDrawer.js";
import CustomModal from "../components/Modal/CustomModal.js";
import CustomLoading from '../components/Loading/CustomLoading';
// Functions
import { environmentShow } from "../functions/environmentFunctions";
import { tableShow } from "../functions/tableFunctions";

import IconInput from "../components/CustomInput/IconInput.js";

// Variables
import { environments } from "../variables/environments";
import { tables } from "../variables/tables";
// Styles
import styles from "../styles/pages/SalesStyle.js";

const useStyles = makeStyles(styles);

function CollectsPage({ environments, tables, loading }) {
  // Loading payloads state
  const [is_payload, set_is_payload] = useState(false);
  const [value, setValue] = useState(0);

  // Change environments state
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  // State Current Table
  const [currentTable, setCurrentTable] = useState({
    id: null,
    name: "",
    prefix: "",
    amount: 0,
    state: null,
    environment_id: null,
    environment_name: "",
  });

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

  // Refresh fetches
  const handleRefresh = () => {
    environmentShow();
    tableShow();
  }

  // Payloads
  useEffect(() => {
    if (is_payload === false) {

      handleRefresh();

      // Change is_payload state
      set_is_payload(true);
    }
  }, [is_payload, environments, tables]);

  // Styles
  const classes = useStyles();
  return (
    <Fragment>

      <CustomLoading open={loading} />

      <AppBarTabs
        color="inherit"
        data={environments}
        iconType="img"
        environmentFolder="images/environments/"
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
                    data={tables}
                    keyData={"environment_id"}
                    filter={index.id}
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
          onClick: handleRefresh,
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
            onClick: null,
          },
          {
            type: "text",
            text: localStorage.getItem('user'),
            color: "default",
            margin: true,
            autoSize: true,
          },
        ]}
        rightButtons={[
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
        title={{
          text: "Perfil de Usuario",
          size: "medium",
        }}
        content={<EmployeeAdd />}
        maxWidth="sm"
        fullWidth
      />

      <CustomModal
        open={openChangeTables}
        close={handleCloseChangeTables}
        title={{
          text: "Total:",
          margin: true,
          size: "medium",
          bold: true,
        }}
        subtitle={{
          text: "Bs. 258",
          color: "warning",
          margin: true,
          size: "medium",
          bold: true,
        }}
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
                  type="number"
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
                  type="number"
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
        leftButtons={[
          {
            type: "text",
            text: "Cambio:",
            size: "default",
            align: "left",
            margin: true,
            display: "inline",
            bold: true,
          },
          {
            type: "text",
            text: "Bs. 258",
            size: "default",
            align: "right",
            margin: true,
            color: "success",
            display: "inline",
            bold: true,
          },
        ]}
        centerButtons={[

        ]}
        rightButtons={[
          {
            type: "button",
            text: "Cobrar",
            color: "primary",
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
        filter="environment_id"
      />

    </Fragment>
  );
}
// Connect to Store State
const mapStateToProps = (state) => {
  const { table, environment } = state;
  return {
    environments: environment.payload.filter(dataList => dataList.state === 1),
    loading: environment.loading,
    tables: table.payload.filter(dataList => dataList.state === 1),
  }
};

export default withRouter(connect(mapStateToProps, null)(CollectsPage));
