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
import {
  useBoxSelectModal,
  useBoxModal,
  usePassCollectModal,
  useAmountPay,
} from "../../hooks/useModal";
import { useLogoutModal } from "../../hooks/useModal";
// Layouts
import ComponentPrintTotalAmount from "../../layouts/Prints/ComponentPrintTotalAmount";
import LogoutConfirmation from "../../layouts/Dialogs/LogoutConfirmation";
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
import {
  isLoggedEmployee,
  employeeLogout,
} from "../../functions/cruds/employeeFunctions";
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
    orders_detail,
    environments_loading,
    tables_loading,
    boxes_loading,
    boxes_fetching,
    current,
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
  const [openLogout, toggleLogout] = useLogoutModal();
  // Hooks for Drawers
  const [openDrawer, toggleDrawer] = useDrawer();

  let history = useHistory();

  // Is Logged Employee state
  const [isLogged, setIsLogged] = useState(false);

  const handleOpenTotalAmount = (args) => {
    if (args.is_busy === 1) {
      togglePassCollect();
      setCurrentReduxState(args);
    }
    if (args.is_busy === 2) {
      toggleAmountPay();
      setCurrentReduxState(args);
    }
    return null;
  };

  const handleCloseModalPassCollect = () => {
    if (openPassCollect) {
      emptyCurrentReduxState();
    }
    togglePassCollect();
  };

  const handleCloseModalAmountPay = () => {
    if (openAmountPay) {
      emptyCurrentReduxState();
    }
    toggleAmountPay();
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
      orders_detail.filter((index) => index.order_id === current.order_id)
    );
    btn.click();
  };

  // Cancel Order function
  const handleCancelOrder = (e) => {
    e.preventDefault();
    orderCancel({
      order_id: current.order_id,
      table_id: current.table_id,
    }).then((response) => {
      if (typeof response !== "undefined") {
        if (response.success === true) {
          togglePassCollect();
        }
      }
    });
  };

  // Logout function
  const handleLogout = (e) => {
    if (openLogout) {
      toggleLogout();
    }
    e.preventDefault();
    employeeLogout({
      token: localStorage.getItem("token"),
    }).then((response) => {
      if (typeof response !== "undefined") {
        if (response.success === true) {
          // Empty local storage
          localStorage.setItem("user", "");
          localStorage.setItem("employee_id", "");
          localStorage.setItem("token", "");
          localStorage.setItem("head_area", "");
          // Redirect to login page
          history.push("/");
        }
      }
    });
  };

  // Logout and Close Boxfunction
  const handleLogoutCloseBox = (e) => {
    e.preventDefault();
    employeeLogout({
      token: localStorage.getItem("token"),
    }).then((response) => {
      if (typeof response !== "undefined") {
        if (response.success === true) {
          // Empty local storage
          localStorage.setItem("user", "");
          localStorage.setItem("employee_id", "");
          localStorage.setItem("token", "");
          localStorage.setItem("head_area", "");
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
          boxes_loading ||
          boxes_fetching
        }
      />
      <CustomSnackbar
        open={snackbar_show}
        message={snackbar_message}
        severity={snackbar_severity}
        onClose={handleCloseSnackbar}
      />
      {isLogged ? (
        <Fragment>
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
            logout={toggleLogout}
            openDrawer={toggleDrawer}
            openBox={toggleBox}
          />
          <ModalPassCollect
            open={openPassCollect}
            close={handleCloseModalPassCollect}
            handleTotalPrint={handleTotalPrint}
          />
          <ModalSelectBox
            state={selectBoxState}
            set={setSelectBox}
            close={toggleSelectBox}
            logout={handleLogout}
          />
          <ModalBox
            open={openBox}
            close={toggleBox}
            handleLogout={handleLogoutCloseBox}
          />
          <ModalAmountToPay
            open={openAmountPay}
            close={handleCloseModalAmountPay}
          />
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
          <LogoutConfirmation
            open={openLogout}
            close={toggleLogout}
            isCashier={true}
            handleLogout={handleLogout}
          />
          <ComponentPrintTotalAmount
            btnID="printTotal"
            refresh={[openPassCollect]}
          />
        </Fragment>
      ) : null}
    </Fragment>
  );
}
// Connect to Store State
const mapStateToProps = (state) => {
  const {
    employee,
    tables,
    environments,
    orders,
    boxes,
    snackbar,
    product,
  } = state;
  return {
    employee_loading: employee.loading,
    environments_loading: environments.loading,
    tables_loading: tables.loading,
    boxes_loading: boxes.loading,
    boxes_fetching: boxes.fetching,
    orders_detail: orders.orders_detail,
    current: product.current,
    snackbar_show: snackbar.show,
    snackbar_message: snackbar.message,
    snackbar_severity: snackbar.severity,
  };
};

export default withRouter(connect(mapStateToProps, null)(CollectsPage));
