// Dependencies
import React, { Fragment, useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
// Conecction to Store
import { connect } from "react-redux";
// Actions Creators
import { bindActionCreators } from "redux";
import { open, close } from "../../redux/actions/creators/productCreator";
import {
  infoSnackbar,
  dangerSnackbar,
  hideSnackbar,
} from "../../redux/actions/creators/snackbarCreator";
// Hooks
import { useDrawer } from "../../hooks/useDrawer";
import { useCurrentTable } from "../../hooks/useCurrentTable";
import { useChangeTableModal } from "../../hooks/useModal";
// Contexts
import CurrentTableContext from "../../hooks/contexts/TableContext";
// Local Layouts
import Products from "./components/Products";
// Local components
import EnvironmentsAppBar from "./components/EnvironmentsAppBar";
import TablesGrid from "./components/TablesGrid";
import SalesFooterBar from "./components/SalesFooterBar";
import DrawerTablesList from "./components/DrawerTablesList";
import ModalChangeTable from "./components/ModalChangeTable";
// core components
import CustomLoading from "../../components/Loading/CustomLoading";
import CustomSnackbar from "../../components/Snackbar/CustomSnackbar";
// Functions
import { companyShow } from "../../functions/cruds/companyFunctions";
import { isLoggedEmployee } from "../../functions/cruds/employeeFunctions";
import { environmentShow } from "../../functions/cruds/environmentFunctions";
import { tableShow } from "../../functions/cruds/tableFunctions";
import { categoryShow } from "../../functions/cruds/categoryFunctions";
import { subcategoryShow } from "../../functions/cruds/subcategoryFunctions";
import { productShow } from "../../functions/cruds/productFunctions";
import { orderShow } from "../../functions/cruds/orderFunctions";
// Events
import { salesWebsocket } from "../../events";
// Assets
import image from "../../assets/img/backgrounds/productbackground.jpg";

function CollectsPage(props) {
  const {
    employee_loading,
    environments_loading,
    tables_loading,
    snackbar_show,
    snackbar_message,
    snackbar_severity,
  } = props;

  console.log(`%c SALES RENDER`, "color: lightgreen; font-size: large");

  // Tabs index state
  const [tabIndex, setTabIndex] = useState(0);

  // Change environments
  const changeTabIndex = (event, newValue) => {
    setTabIndex(newValue);
  };

  // Hooks for Modals
  const [changeTableOpen, toggleChangeTable] = useChangeTableModal();
  // Hooks for Tables
  const [
    currentTableState,
    setCurrentTable,
    emptyCurrentTable,
  ] = useCurrentTable();
  // Hooks for Drawers
  const [openDrawer, toggleDrawer] = useDrawer();

  let history = useHistory();

  // Is Logged Employee state
  const [isLogged, setIsLogged] = useState(false);

  // Events
  salesWebsocket();

  // Dispatches
  const handleCloseSnackbar = () => hideSnackbar();

  // Refresh fetches
  const handleRefresh = () => {
    companyShow();
    environmentShow();
    tableShow();
    categoryShow();
    subcategoryShow();
    productShow();
    orderShow();
  };

  useEffect(() => {
    if (isLogged === false) {
      localStorage.setItem("rol", "waiter");
      isLoggedEmployee({
        token: localStorage.getItem("token"),
        employee_id: localStorage.getItem("employee_id"),
        rol: localStorage.getItem("rol"),
      }).then((response) => {
        if (typeof response === "string") {
          if (response.includes("401")) {
            dangerSnackbar("Autentificación incorrecta, inicie sesión.");
            history.push("/");
          }
        }
        if (typeof response !== "undefined") {
          if (response.success === true) {
            setIsLogged(true);
            handleRefresh();
          } else {
            dangerSnackbar("Autentificación incorrecta, inicie sesión.");
            history.push("/");
          }
        }
      });
    }
  }, [isLogged]);

  // Logout function
  const handleLogout = () => {
    // Empty local storage
    localStorage.setItem("user", "");
    localStorage.setItem("employee_id", "");
    localStorage.setItem("token", "");
    localStorage.setItem("head_area", "");
    // Redirect to login page
    history.push("/");
  };

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

  return (
    <Fragment>
      <CustomLoading
        open={employee_loading || environments_loading || tables_loading}
      />
      <CustomSnackbar
        open={snackbar_show}
        message={snackbar_message}
        severity={snackbar_severity}
        onClose={handleCloseSnackbar}
      />
      {isLogged ? (
        <CurrentTableContext.Provider
          value={{
            state: currentTableState,
            setState: setCurrentTable,
            emptyState: emptyCurrentTable,
          }}
        >
          <EnvironmentsAppBar
            tabIndex={tabIndex}
            changeTabIndex={changeTabIndex}
          />
          <TablesGrid
            tabIndex={tabIndex}
            changeTabIndex={changeTabIndex}
            onClick={handleOpenProducts}
          />
          <SalesFooterBar
            refresh={handleRefresh}
            logout={handleLogout}
            openDrawer={toggleDrawer}
            toggleChangeTable={toggleChangeTable}
          />
          <ModalChangeTable open={changeTableOpen} close={toggleChangeTable} />
          <DrawerTablesList
            open={openDrawer}
            close={toggleDrawer}
            openProducts={handleOpenProducts}
          />
          <Products
            direction="bottom"
            variant="temporary"
            background={image}
            currentTable={currentTableState}
          />
        </CurrentTableContext.Provider>
      ) : null}
    </Fragment>
  );
}
// Connect to Store State
const mapStateToProps = (state) => {
  const { employee, tables, environments, snackbar } = state;
  return {
    employee_loading: employee.loading,
    environments_loading: environments.loading,
    tables_loading: tables.loading,
    snackbar_show: snackbar.show,
    snackbar_message: snackbar.message,
    snackbar_severity: snackbar.severity,
  };
};
// Functions to dispatching
const open_products = (payload) => open(payload);
const close_products = (value) => close(value);
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ open_products, close_products }, dispatch);
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CollectsPage)
);
