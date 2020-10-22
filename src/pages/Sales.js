// Dependencies
import React, { Fragment, useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import SwipeableViews from "react-swipeable-views";
// Conecction to Store
import { connect } from 'react-redux';
// Actions Creators
import { bindActionCreators } from 'redux';
import { open, close } from '../redux/actions/creators/productCreator';
import { infoSnackbar, hideSnackbar } from '../redux/actions/creators/snackbarCreator';
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
import CustomModal from "../components/Modal/CustomModal.js";
import CustomLoading from '../components/Loading/CustomLoading';
import CustomSnackbar from '../components/Snackbar/CustomSnackbar';
// Assets
import image from '../assets/img/backgrounds/productbackground.jpg';
// Functions
import { environmentShow } from "../functions/environmentFunctions";
import { tableShow, tableChange } from "../functions/tableFunctions";
import { categoryShow } from "../functions/categoryFunctions";
import { subcategoryShow } from "../functions/subcategoryFunctions";
import { productShow } from "../functions/productFunctions";
import { orderShow } from "../functions/orderFunctions";
// Events
import {
  environments_WS,
  tables_WS,
  print_categories_WS,
  categories_WS,
  sub_categories_WS,
  products_WS,
  supplies_WS,
  orders_WS,
  order_details_WS,
  collects_WS
} from '../events';
// Styles
import styles from "../styles/pages/SalesStyle.js";

const useStyles = makeStyles(styles);

function SalesPage(props) {
  // Props
  const {
    environments,
    tables,
    orders_list,
    current,
    close_products,
    loading,
    tables_fetching,
    snackbar_show,
    snackbar_message,
    snackbar_severity } = props;
  // Loading payloads state
  const [is_payload, set_is_payload] = useState(false);

  let history = useHistory();

  // Change environments state
  const [value, setValue] = useState(0);
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
    environment_id: null,
    environment_name: "",
    waiter_id: null
  });

  // State for Modal Products
  // const [openProducts, setOpenProducts] = useState(false);
  const handleOpenProducts = (args) => {

    if (args.waiter_id === null) {

      setCurrentTable(args);
      open_products(args);

    } else {
      if (args.waiter_id === parseInt(localStorage.getItem("employee_id"))) {

        setCurrentTable(args);
        open_products(args);

      } else {
        infoSnackbar("Mesa ya antedida por otro mesero.");
      }
    }
  };
  const handleCloseProducts = () => {
    close_products();
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

  const [state, setState] = useState({
    from_table: "",
    from_table_name: "",
    from_table_number: null,

    to_table: "",
    to_table_name: "",
    to_table_number: null,
    isFetch: false
  });

  // Empty State values
  const handleEmpty = () => {
    setState({
      from_table: "",
      from_table_name: "",
      from_table_number: null,

      to_table: "",
      to_table_name: "",
      to_table_number: null,
      isFetch: false
    });
  };

  // Changes State values
  const handleChangeFrom = (arg) => {
    setState({
      ...state,
      from_table: arg.id,
      from_table_name: arg.name,
      from_table_number: arg.number,
    });
  };

  const handleChangeTo = (arg) => {
    setState({
      ...state,
      to_table: arg.id,
      to_table_name: arg.name,
      to_table_number: arg.number,
    });
  };

  const handleChangeTable = (e) => {
    e.preventDefault();
    tableChange(state).then((response) => {
      console.log(response);
      if (typeof response !== 'undefined') {
        if (response.success === true) {
          handleCloseChangeTables();
          handleEmpty();
        }
      }
    })
  };

  // State for Drawer
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };
  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  // Events
  environments_WS();
  tables_WS();
  print_categories_WS();
  categories_WS();
  sub_categories_WS();
  products_WS();
  supplies_WS();
  orders_WS()
  order_details_WS();
  collects_WS();

  // Dispatches
  const handleCloseSnackbar = () => hideSnackbar();

  // Refresh fetches
  const handleRefresh = () => {
    environmentShow();
    tableShow();
    categoryShow();
    subcategoryShow();
    productShow();
    orderShow();
  }

  // Payloads
  useEffect(() => {
    if (is_payload === false) {

      handleRefresh();

      // Change is_payload state
      set_is_payload(true);
    }
  }, [is_payload, environments, tables]);

  // Products Orders List
  let product_orders_list = [];

  // if (open === true) {
  if (current.env_index !== null && current.table_index !== null) {
    let current_location = orders_list[current.env_index].tables[current.table_index];
    product_orders_list = current_location.products;
  };

  // Logout function
  const handleLogout = () => {
    // Empty local storage
    localStorage.setItem('user', '');
    localStorage.setItem('employee_id', '');
    localStorage.setItem('token', '');
    localStorage.setItem("head_area", '');
    // Redirect to login page
    history.push("/Kroft-FrontEnd");
  }

  // Styles
  const classes = useStyles();

  return (
    <Fragment>

      <CustomLoading open={loading} />
      <CustomSnackbar open={snackbar_show} message={snackbar_message} severity={snackbar_severity} onClose={handleCloseSnackbar} />

      <AppBarTabs
        color="inherit"
        data={environments}
        iconType="img"
        imagePath="images/environments/"
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        scrollButtons="auto"
        orders={product_orders_list}
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
                    // value={value}
                    keyData={"environment_id"}
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
          onClick: handleRefresh,
        }}
        leftButtons={[
          {
            type: "fab",
            text: "Salir",
            color: "secondary",
            icon: KeyboardBackspaceIcon,
            size: "large",
            disabled: false,
            onClick: handleLogout
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
            text: "Cambiar de Mesa",
            color: "default",
            icon: SwapHorizIcon,
            edge: "start",
            size: "large",
            disabled: localStorage.getItem("head_area") === "1" ? false : true,
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
        closeIcon={tables_fetching === true ? false : true}
        title={{
          text: "Cambio de mesas",
          size: "medium",
        }}
        content={<ChangeTable environments={environments} tables={tables} state={state} onChangeFrom={handleChangeFrom} onChangeTo={handleChangeTo} />}
        centerButtons={[
          {
            type: "fab",
            text: "Realizar cambio",
            color: "primary",
            icon: SwapHorizIcon,
            size: "large",
            disabled: state.from_table && state.to_table !== "" ? false : true,
            onClick: handleChangeTable
          },
        ]}
        leftButtons={[
          {
            type: "button",
            text: state.from_table_name + " " + state.from_table_number,
            color: "danger",
            // icon: TableChartIcon,
            edge: "end",
            size: "small",
            variant: "contained",
            disabled: false,
          },
        ]}
        rightButtons={[
          {
            type: "button",
            text: state.to_table_name + " " + state.to_table_number,
            color: "success",
            // icon: TableChartIcon,
            edge: "start",
            size: "large",
            variant: "contained",
            disabled: false,
          },
        ]}
        renderRefresh={[state, tables_fetching]}
        loading={tables_fetching}
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
        itemOnClick={handleOpenProducts}
        filter="environment_id"
      />

      <DrawerProducts
        direction="bottom"
        variant="temporary"
        background={image}
        open={current.open}
        close={handleCloseProducts}
        table={currentTable}
      />

    </Fragment>
  );
}
// Connect to Store State
const mapStateToProps = (state) => {
  const { table, environment, product, snackbar } = state;
  return {
    environments: environment.payload.filter(dataList => dataList.state === 1),
    loading: environment.loading,
    tables: table.payload.filter(dataList => dataList.state === 1),
    tables_fetching: table.fetching,
    orders_list: product.orders,
    current: product.current,
    snackbar_show: snackbar.show,
    snackbar_message: snackbar.message,
    snackbar_severity: snackbar.severity,
  }
};
// Functions to dispatching
const open_products = (payload) => (open(payload));
const close_products = (value) => (close(value));
// Binding an object full of action creators
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ open_products, close_products }, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SalesPage));
