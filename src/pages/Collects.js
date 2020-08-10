// Dependencies
import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import SwipeableViews from "react-swipeable-views";
import NumberFormat from 'react-number-format';
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
import CustomMoneyInput from "../components/CustomInput/CustomMoneyInput.js";
// Functions
import { environmentShow } from "../functions/environmentFunctions";
import { tableShow } from "../functions/tableFunctions";
import { orderShow } from "../functions/orderFunctions";
import { collectCreate, collectShow } from "../functions/collectFunctions";
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
    is_busy: null,
    order_id: null,
    state: null,
    environment_id: null,
    environment_name: "",
  });

  console.log(currentTable);

  // State for Modal Total Amount
  const [openTotalAmount, setTotalAmount] = useState(false);

  const handleOpenTotalAmount = (arg) => {
    setTotalAmount(true);
    setCurrentTable(arg);
  };
  const handleCloseTotalAmount = () => {
    setTotalAmount(false);
    setCurrentTable({
      id: null,
      name: "",
      prefix: "",
      amount: 0,
      is_busy: null,
      order_id: null,
      state: null,
      environment_id: null,
      environment_name: "",
    });
  };

  // Local State
  const [dialogState, setDialogState] = useState({
    sale_id: null,
    user_id: null,
    environment_id: null,
    table_id: null,
    payment_type: 1,
    box: 1,
    amount: 0,
    currency: 0,
    paid_BS: 0,
    paid_US: 0,
    change: 0,
  });

  // Changes State values
  const handleChangeValues = (e) => {
    setDialogState({
      ...dialogState,
      [e.target.name]: e.target.value,
    });
  };

  // Check if values is number
  const isEmptyValue = (value) => {
    if (value === '' || value === null || value === undefined) {
      return true
    } else {
      return false
    }
  }

  // Changes amount to paid value
  const handleChangeAmountBS = (e) => {
    console.log(e.value)
    if (isEmptyValue(e.value) === false) {
      let result = (parseInt(e.value) + (dialogState.paid_US * 6.94)) - (currentTable.amount);
      setDialogState({
        ...dialogState,
        paid_BS: parseInt(e.value),
        change: Math.abs(result)
      });
    }
  };

  const handleChangeAmountUS = (e) => {
    console.log(e.value)
    if (isEmptyValue(e.value) === false) {
      let result = (dialogState.paid_BS + (parseInt(e.value) * 6.94)) - (currentTable.amount);
      setDialogState({
        ...dialogState,
        paid_US: parseInt(e.value),
        change: Math.abs(result)
      });
    }
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
    orderShow();
    collectShow();
  }

  // Payloads
  useEffect(() => {
    if (is_payload === false) {

      handleRefresh();

      // Change is_payload state
      set_is_payload(true);
    }
  }, [is_payload, environments, tables]);

  // Send Order function
  const handleMakeCollected = (e) => {
    e.preventDefault();
    collectCreate({
      table_id: currentTable.id,
      order_id: currentTable.order_id,
      cashier_id: 1,
      box_id: 1,
      payment_id: 1,
      total_amount: currentTable.amount,
      currency: "bs"
    }).then((response) => {
      console.log(response);
      if (typeof response !== 'undefined') {
        if (response === true) {
          console.log("Collected made");
        }
      }
    });
  };

  // Styles
  const classes = useStyles();
  return (
    <Fragment>

      <CustomLoading open={loading} />

      <AppBarTabs
        color="inherit"
        data={environments}
        iconType="img"
        imagePath="images/environments/"
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
                    onClick={handleOpenTotalAmount}
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
        open={openTotalAmount}
        close={handleCloseTotalAmount}
        title={{
          text: "Total:",
          margin: true,
          size: "medium",
          bold: true,
        }}
        subtitle={{
          text: `Bs. ${currentTable.amount}`,
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
              <Grid item xs={6} sm={6} md={6} lg={6}>
                <NumberFormat
                  value={dialogState.paid_BS === 0 ? '' : dialogState.paid_BS}
                  onValueChange={handleChangeAmountBS}
                  displayType={'input'}
                  thousandSeparator={true}
                  allowNegative={false}
                  allowEmptyFormatting={false}
                  allowLeadingZeros={true}
                  decimalScale={2}
                  isNumericString={true}
                  customInput={CustomMoneyInput}
                />
              </Grid>

              <Grid item xs={6} sm={6} md={6} lg={6}>
                <NumberFormat
                  value={dialogState.paid_US === 0 ? '' : dialogState.paid_US}
                  onValueChange={handleChangeAmountUS}
                  displayType={'input'}
                  thousandSeparator={true}
                  allowNegative={false}
                  allowEmptyFormatting={false}
                  allowLeadingZeros={false}
                  decimalScale={0}
                  isNumericString={true}
                  customInput={CustomMoneyInput}
                />
              </Grid>
            </Grid>
          </Fragment>
        }
        leftButtons={[
          {
            type: "text",
            text: (dialogState.paid_BS + (dialogState.paid_US * 6.94)) < currentTable.amount && dialogState.change > 0 ? 'Por pagar: ' : (dialogState.paid_BS + (dialogState.paid_US * 6.94)) === currentTable.amount ? 'Sin cambio: ' : 'Cambio: ',
            size: "default",
            align: "left",
            margin: true,
            display: "inline",
            bold: true,
          },
          {
            type: "text",
            text: <NumberFormat
              value={dialogState.change}
              displayType={'text'}
              thousandSeparator={true}
              allowNegative={false}
              allowEmptyFormatting={false}
              allowLeadingZeros={false}
              decimalScale={2}
              isNumericString={true}
              renderText={value =>
                <span>
                  Bs. {value}
                </span>
              }
            />,
            size: "default",
            align: "right",
            margin: true,
            color: (dialogState.paid_BS + (dialogState.paid_US * 6.94)) < currentTable.amount && dialogState.change > 0 ? 'danger' : (dialogState.paid_BS + (dialogState.paid_US * 6.94)) === currentTable.amount ? 'default' : 'success',
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
            disabled: dialogState.change >= currentTable.amount ? false : true,
            onClick: handleMakeCollected,
          },
        ]}
        renderRefresh={dialogState.change}
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
        itemOnClick={handleCloseDrawer}
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
