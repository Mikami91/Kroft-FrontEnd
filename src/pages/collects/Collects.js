// Dependencies
import React, { useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
// Conecction to Store
import { connect } from "react-redux";
// Actions Creators
import { hideSnackbar } from "../../redux/actions/creators/snackbarCreator";
// Hooks
import {
  useBoxSelectModal,
  useBoxModal,
  usePassCollectModal,
  useAmountPay,
} from "../../hooks/useModal";
import { useDrawer } from "../../hooks/useDrawer";
import { useCurrentTable } from "../../hooks/useTable";
// Contexts
import CurrentTableContext from "../../hooks/contexts/TableContext";
// Layouts
import ComponentToPrint from "../../layouts/Prints/ComponentToPrint";
// Local components
import AppBar from "./components/AppBar";
import TablesGrid from "./components/TablesGrid";
import FooterBar from "./components/FooterBar";
import DrawerTablesList from "./components/DrawerTablesList";
import ModalPassCollect from "./components/ModalPassCollect";
import ModalSelectBox from "./components/ModalSelectBox";
import ModalBox from "./components/ModalBox";
import ModalAmountToPay from "./components/ModalAmountToPay";
// core components
import CustomLoading from "../../components/Loading/CustomLoading";
import CustomSnackbar from "../../components/Snackbar/CustomSnackbar";
// Functions
import {
  boxShow,
  boxState as boxStateFunc,
} from "../../functions/cruds/boxFunctions";
import { paymentShow } from "../../functions/cruds/paymentFunctions";
import { environmentShow } from "../../functions/cruds/environmentFunctions";
import { tableShow } from "../../functions/cruds/tableFunctions";
import { orderShow } from "../../functions/cruds/orderFunctions";
import {
  collectCreate,
  collectShow,
} from "../../functions/cruds/collectFunctions";
import {
  orderCreate,
  orderSend,
  orderCancel,
} from "../../functions/cruds/orderFunctions";
// Events
import { collectWebsocket } from "../../events";

function CollectsPage(props) {
  // Props
  const {
    environments,
    tables,
    orders_detail_payload,
    loading,
    snackbar_show,
    snackbar_message,
    snackbar_severity,
  } = props;

  // Hooks for Modals
  const [selectBoxState, setSelectBox, toggleSelectBox] = useBoxSelectModal();
  const [openBox, toggleBox] = useBoxModal();
  const [openPassCollect, togglePassCollect] = usePassCollectModal();
  const [openAmountPay, toggleAmountPay] = useAmountPay();
  // Hooks for Tables
  const [
    currentTableState,
    setCurrentTable,
    emptyCurrentTable,
    handleChangeAmountBS,
    handleChangeAmountUS,
    handleChangePaymentType,
    handleChangeCreditCard,
  ] = useCurrentTable();
  // Hooks for Drawers
  const [openDrawer, toggleDrawer] = useDrawer();

  let history = useHistory();

  // Loading payloads state
  const [is_payload, set_is_payload] = useState(false);

  const handleOpenTotalAmount = (args) => {
    if (args.is_busy === 1) {
      togglePassCollect();
      setCurrentTable(args);
    }
    if (args.is_busy === 2) {
      toggleAmountPay();
      setCurrentTable(args);
    }
    return null;
  };

  // Events
  collectWebsocket();

  // Dispatches
  const handleCloseSnackbar = () => hideSnackbar();

  // Refresh fetches
  const handleRefresh = () => {
    boxShow();
    environmentShow();
    tableShow();
    paymentShow();
    orderShow();
    collectShow();
  };

  // Payloads
  useEffect(() => {
    if (is_payload === false) {
      handleRefresh();

      // Change is_payload state
      set_is_payload(true);
    }
  }, [is_payload, environments, tables]);

  // Logout function
  const handleLogout = () => {
    // Empty local storage
    localStorage.setItem("user", "");
    localStorage.setItem("employee_id", "");
    localStorage.setItem("token", "");
    localStorage.setItem("head_area", "");
    // Redirect to login page
    history.push("/Kroft-FrontEnd");
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
    <CurrentTableContext.Provider
      value={{
        state: currentTableState,
        setState: setCurrentTable,
        emptyState: emptyCurrentTable,
        changeBs: handleChangeAmountBS,
        changeUs: handleChangeAmountUS,
        changePaymentType: handleChangePaymentType,
        changeCard: handleChangeCreditCard,
      }}
    >
      <CustomLoading open={loading} />
      <CustomSnackbar
        open={snackbar_show}
        message={snackbar_message}
        severity={snackbar_severity}
        onClose={handleCloseSnackbar}
      />

      <AppBar />
      <TablesGrid onClick={handleOpenTotalAmount} />
      <FooterBar
        refresh={handleRefresh}
        logout={handleLogout}
        openDrawer={toggleDrawer}
        openBox={toggleBox}
      />

      <ModalPassCollect
        open={openPassCollect}
        close={togglePassCollect}
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

      <ModalAmountToPay
        open={openAmountPay}
        close={toggleAmountPay}
        state={currentTableState}
        emptyState={emptyCurrentTable}
      />

      <DrawerTablesList open={openDrawer} close={toggleDrawer} />

      <ComponentToPrint
        btnID="printTotal"
        printList={printList}
        refresh={[openPassCollect, currentTableState.id]}
      />
    </CurrentTableContext.Provider>
  );
}
// Connect to Store State
const mapStateToProps = (state) => {
  const { tables, environments, orders, snackbar } = state;
  return {
    environments: environments.payload,
    loading: environments.loading,
    tables: tables.payload,
    orders_detail_payload: orders.orders_detail,
    snackbar_show: snackbar.show,
    snackbar_message: snackbar.message,
    snackbar_severity: snackbar.severity,
  };
};

export default withRouter(connect(mapStateToProps, null)(CollectsPage));
