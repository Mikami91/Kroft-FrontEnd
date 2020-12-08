// Dependencies
import React, { useState, useEffect, Fragment } from "react";
import { withRouter, useHistory } from "react-router-dom";
// Conecction to Store
import { connect } from "react-redux";
// Actions Creators
import {
  dangerSnackbar,
  hideSnackbar,
} from "../../redux/actions/creators/snackbarCreator";
import {
  open as setCurrentReduxState,
  close as emptyCurrentReduxState,
} from "../../redux/actions/creators/productCreator";
// Hooks
import { useDrawer } from "../../hooks/useDrawer";
import { useCurrentTable } from "../../hooks/useCurrentTable";
import {
  useBoxSelectModal,
  useBoxModal,
  usePassCollectModal,
  useAmountPay,
} from "../../hooks/useModal";
// Contexts
import CurrentTableContext from "../../hooks/contexts/TableContext";
// Layouts
import ComponentToPrint from "../../layouts/Prints/ComponentToPrint";
import ComponentPrintTotal from "../../layouts/Prints/ComponentPrintTotal";
// Local components
import EnvironmentsAppBar from "./components/EnvironmentsAppBar";
import TablesGrid from "./components/TablesGrid";
import CollectFooterBar from "./components/CollectFooterBar";
import DrawerTablesList from "./components/DrawerTablesList";
import ModalPassCollect from "./components/ModalPassCollect";
import ModalSelectBox from "./components/ModalSelectBox";
import ModalBox from "./components/ModalBox";
import ModalAmountToPay from "./components/ModalAmountToPay";
// core components
import CustomLoading from "../../components/Loading/CustomLoading";
import CustomSnackbar from "../../components/Snackbar/CustomSnackbar";
// Functions
import { companyShow } from "../../functions/cruds/companyFunctions";
import { isLoggedEmployee } from "../../functions/cruds/employeeFunctions";
import { boxShow } from "../../functions/cruds/boxFunctions";
import { paymentShow } from "../../functions/cruds/paymentFunctions";
import { environmentShow } from "../../functions/cruds/environmentFunctions";
import { tableShow } from "../../functions/cruds/tableFunctions";
import { orderShow } from "../../functions/cruds/orderFunctions";
import { collectShow } from "../../functions/cruds/collectFunctions";
import { orderCancel } from "../../functions/cruds/orderFunctions";
// Events
import { collectWebsocket } from "../../events";

function CollectsPage(props) {
  // Props
  const {
    employee_loading,
    orders_detail_payload,
    environments_loading,
    tables_loading,
    boxes_loading,
    snackbar_show,
    snackbar_message,
    snackbar_severity,
  } = props;

  // Tabs index state
  const [tabIndex, setTabIndex] = useState(0);

  // Change environments
  const changeTabIndex = (event, newValue) => {
    setTabIndex(newValue);
  };

  // Hooks for Modals
  const [
    selectBoxState,
    setSelectBox,
    toggleSelectBox,
    checkOpeningBox,
  ] = useBoxSelectModal();
  const [openBox, toggleBox] = useBoxModal();
  const [openPassCollect, togglePassCollect] = usePassCollectModal();
  const [openAmountPay, toggleAmountPay] = useAmountPay();
  // Hooks for Tables
  const [
    currentTableState,
    setCurrentTable,
    emptyCurrentTable,
    changeAmountBS,
    changeAmountUS,
    changePaymentType,
    changeCreditCard1,
    changeCreditCard2,
    changeCreditCard3,
    changeWillPay,
    TO_PAY,
    WITHOUT_CHANGE,
    WITH_CHANGE,
    PAID_OKAY,
    CARD_OKAY,
    cashValid,
    cardValid,
    cashCardValid,
    variousCardsValid,
    willPayValid,
    makeDynamicState,
  ] = useCurrentTable();
  // Hooks for Drawers
  const [openDrawer, toggleDrawer] = useDrawer();

  let history = useHistory();

  // Is Logged Employee state
  const [isLogged, setIsLogged] = useState(false);

  const handleOpenTotalAmount = (args) => {
    if (args.is_busy === 1) {
      togglePassCollect();
      setCurrentTable(args);
      setCurrentReduxState(args);
    }
    if (args.is_busy === 2) {
      toggleAmountPay();
      setCurrentTable(args);
      setCurrentReduxState(args);
    }
    return null;
  };

  const handleCloseModalPassCollect = () => {
    emptyCurrentReduxState();
    togglePassCollect();
  };

  // Events
  collectWebsocket();

  // Dispatches
  const handleCloseSnackbar = () => hideSnackbar();

  // Refresh fetches
  const handleRefresh = () => {
    companyShow();
    boxShow();
    environmentShow();
    tableShow();
    paymentShow();
    orderShow();
    collectShow();
  };

  useEffect(() => {
    if (isLogged === false) {
      localStorage.setItem("rol", "cashier");
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
            checkOpeningBox();
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

  const handleOpenTable = (args) => {
    if (args.is_busy > 0) {
      handleOpenTotalAmount(args);
    }
    toggleDrawer();
  };

  // State for Modal Prints
  const [printList, setPrintList] = useState([]);

  // Button for print
  let btn = document.getElementById("printTotal");

  // Total Print
  const handleTotalPrint = async (e) => {
    e.preventDefault();
    await setPrintList(
      orders_detail_payload.filter(
        (index) => index.order_id === currentTableState.order_id
      )
    );
    btn.click();
  };

  // Cancel Order function
  const handleCancelOrder = (e) => {
    e.preventDefault();
    orderCancel({
      order_id: currentTableState.order_id,
      table_id: currentTableState.id,
    }).then((response) => {
      if (typeof response !== "undefined") {
        if (response.success === true) {
          togglePassCollect();
        }
      }
    });
  };

  return (
    <Fragment>
      <CustomLoading
        open={
          employee_loading ||
          environments_loading ||
          tables_loading ||
          boxes_loading
        }
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
            changeBs: changeAmountBS,
            changeUs: changeAmountUS,
            changePaymentType: changePaymentType,
            changeCard1: changeCreditCard1,
            changeCard2: changeCreditCard2,
            changeCard3: changeCreditCard3,
            changeWillPay: changeWillPay,
            TO_PAY: TO_PAY,
            WITHOUT_CHANGE: WITHOUT_CHANGE,
            WITH_CHANGE: WITH_CHANGE,
            PAID_OKAY: PAID_OKAY,
            CARD_OKAY: CARD_OKAY,
            cashValid: cashValid,
            cardValid: cardValid,
            cashCardValid: cashCardValid,
            variousCardsValid: variousCardsValid,
            willPayValid: willPayValid,
            makeDynamicState: makeDynamicState,
          }}
        >
          <EnvironmentsAppBar
            tabIndex={tabIndex}
            changeTabIndex={changeTabIndex}
          />
          <TablesGrid
            tabIndex={tabIndex}
            changeTabIndex={changeTabIndex}
            onClick={handleOpenTotalAmount}
          />
          <CollectFooterBar
            refresh={handleRefresh}
            logout={handleLogout}
            openDrawer={toggleDrawer}
            openBox={toggleBox}
          />
          <ModalPassCollect
            open={openPassCollect}
            close={handleCloseModalPassCollect}
            state={currentTableState}
            handleTotalPrint={handleTotalPrint}
          />
          <ModalSelectBox
            state={selectBoxState}
            set={setSelectBox}
            close={toggleSelectBox}
            logout={handleLogout}
          />
          <ModalBox open={openBox} close={toggleBox} />
          <ModalAmountToPay open={openAmountPay} close={toggleAmountPay} />
          <DrawerTablesList
            open={openDrawer}
            close={toggleDrawer}
            openTable={handleOpenTable}
          />
          {/* <ComponentToPrint
            btnID="printTotal"
            printList={printList}
            refresh={[openPassCollect, currentTableState.id]}
          /> */}
          <ComponentPrintTotal btnID="printTotal" refresh={[openPassCollect]} />
        </CurrentTableContext.Provider>
      ) : null}
    </Fragment>
  );
}
// Connect to Store State
const mapStateToProps = (state) => {
  const { employee, tables, environments, orders, boxes, snackbar } = state;
  return {
    employee_loading: employee.loading,
    environments_loading: environments.loading,
    tables_loading: tables.loading,
    boxes_loading: boxes.loading,
    orders_detail_payload: orders.orders_detail,
    snackbar_show: snackbar.show,
    snackbar_message: snackbar.message,
    snackbar_severity: snackbar.severity,
  };
};

export default withRouter(connect(mapStateToProps, null)(CollectsPage));
