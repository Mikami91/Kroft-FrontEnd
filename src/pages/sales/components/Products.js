// Dependencies
import React, { Fragment, Component, useState, useMemo, useRef } from "react";
import PropTypes from "prop-types";
// Print
import ReactToPrint from "react-to-print";
// Conecction to Store
import { connect } from "react-redux";
// Actions Creators
import { bindActionCreators } from "redux";
import { close } from "../../../redux/actions/creators/productCreator";
import {
  orders,
  add_obs,
  delete_obs,
  delete_all,
} from "../../../redux/actions/creators/productCreator";
// UI Material Components
import Drawer from "@material-ui/core/Drawer";
// Local components
import CategoriesAppBar from "./products/CategoriesAppBar";
import ProductsGrid from "./products/ProductsGrid";
import ProductsFooterBar from "./products/ProductsFooterBar";
import ModalProductsOrders from "./products/ModalProductsOrders";
import ModalPrintsHistory from "./products/ModalPrintsHistory";
import ModalTotalAmount from "./products/ModalTotalAmount";
import PopoverObservation from "./products/PopoverObservation";
import PopoverConfirmation from "./products/PopoverConfirmation";
// core components
import TabPanel from "../../../components/Panel/TabPanel";
import CustomModal from "../../../components/Modal/CustomModal.js";
import CustomTableToPrints from "../../../components/Table/CustomTableToPrints";
import ComponentToPrint from "../../../layouts/Prints/ComponentToPrint";
import CustomLoading from "../../../components/Loading/CustomLoading";

// Functions
import {
  orderCreate,
  orderSend,
  orderCancel,
} from "../../../functions/cruds/orderFunctions";

class ComponentToPrint2 extends Component {
  render() {
    return (
      <CustomTableToPrints
        data={this.props.data}
        renderRefresh={this.props.refresh}
      />
    );
  }
}

function Products(props) {
  const {
    /* Redux */
    close_products,
    tables,
    orders_list,
    currentOpenTable,
    orders_detail_payload,
    order_loading,
    /* Props */
    direction,
    variant,
    open,
    close,
    background,
    table,
  } = props;

  console.log(open);

  // Close Products drawer
  const handleCloseProducts = () => {
    close_products();
  };
  // Tabs index state
  const [tabIndex, setTabIndex] = useState(0);
  // Change categories
  const changeTabIndex = (event, newValue) => {
    setTabIndex(newValue);
  };

  // Categories index State
  const [value, setValue] = useState(0);
  const handleChangeIndex = (e, newValue) => {
    setValue(newValue);
  };

  // State for Modal Orders
  const [openTableOrders, setOpenTableOrders] = useState(false);
  const toggleOpenOrders = () => setOpenTableOrders(!openTableOrders);

  // State for Modal Prints
  const [openPrints, setOpenPrints] = useState({
    open: false,
    list: [],
  });
  const toggleOpenPrints = () =>
    setOpenPrints({
      ...openPrints,
      open: !openPrints.open,
      list: openPrints.open ? openPrints.list : [],
    });

  // State for Modal Total Amount
  const [openTotal, setOpenTotal] = useState(false);
  const toggleOpenTotal = () => setOpenTotal(!openTotal);

  // Order make function
  const handleSetOrder = (arg) => {
    set_orders(arg);
  };

  // Set state, amount and order_id of current Table
  let table_state = 0;
  let table_amount = 0;
  let current_order_id = null;

  tables.reduce(
    (index, cur) =>
      cur.id === currentOpenTable.table_id
        ? [
            (table_state = cur.is_busy),
            (current_order_id = cur.order_id),
            (table_amount = cur.total_amount),
          ]
        : null,
    []
  );

  // Products Orders List
  let product_orders_list = [];

  // calculate Global quantity and global amount from current Table
  let global_quantity = 0;
  let global_amount = 0;

  if (open === true) {
    if (
      currentOpenTable.env_index !== null &&
      currentOpenTable.table_index !== null
    ) {
      let current_location =
        orders_list[currentOpenTable.env_index].tables[
          currentOpenTable.table_index
        ];
      product_orders_list = current_location.products;
      global_quantity = current_location.global_quantity;
      global_amount = current_location.global_amount;
    }
  }

  // Open and Close Observation Popopver
  const [observationState, setObservationState] = useState({
    open: false,
    anchorEl: null,
    product_id: null,
    observation: "",
  });

  const handleOpenObservation = (e, id, observation) => {
    setObservationState({
      open: true,
      anchorEl: e.currentTarget,
      product_id: id,
      observation: observation,
    });
  };

  const handleCloseObservation = () => {
    setObservationState({
      open: false,
      anchorEl: null,
      product_id: null,
      observation: "",
    });
  };

  // Delete observation
  const handleDelete = () => {
    delete_obs({ product_id: observationState.product_id });
    handleCloseObservation();
  };

  // Save observation
  const handleSave = () => {
    add_obs({
      product_id: observationState.product_id,
      observation: document.getElementById("textarea").value,
    });
    handleCloseObservation();
  };

  // Open and Close Confirmation Popopver
  const [confirmationState, setConfirmationState] = useState({
    open: false,
    anchorEl: null,
  });

  const handleOpenConfirmation = (e) => {
    setConfirmationState({
      open: true,
      anchorEl: e.currentTarget,
    });
  };
  const handleCloseConfirmation = () => {
    setConfirmationState({
      open: false,
      anchorEl: null,
    });
  };

  // Delete Orders List
  const handleDeleteOrders = () => {
    delete_all();
    handleCloseConfirmation();
    toggleOpenOrders();
  };

  let btn = document.getElementById("printOrder");
  let btn2 = document.getElementById("printHistory");
  let btn3 = document.getElementById("printTotal");

  // Print Order History
  async function handlePrintHistory(e, arg) {
    e.preventDefault();
    await setOpenPrints({
      ...openPrints,
      list: orders_detail_payload.filter(
        (index) =>
          index.order_number === arg.order_number &&
          index.order_id === arg.order_id
      ),
    });
    btn2.click();
  }

  // Create Order function
  async function handleCreateOrder() {
    toggleOpenOrders();
    orderCreate({
      employee_id: localStorage.getItem("employee_id"),
      table_id: currentOpenTable.table_id,
      total_amount: global_amount,
      products: product_orders_list,
    }).then((response) => {
      if (typeof response !== "undefined") {
        if (response.success === true) {
          // Delete Orders List
          delete_all();
          // Close Product Orders Table
          toggleOpenOrders();
          // Printing
          btn.click();
        }
      }
    });
  }

  // Send Order function
  const handleSendOrder = (e) => {
    e.preventDefault();
    orderSend({
      order_id: current_order_id,
      table_id: currentOpenTable.table_id,
    }).then((response) => {
      if (typeof response !== "undefined") {
        if (response === true) {
          close();
        }
      }
    });
  };

  // Cancel Order function
  const handleCancelOrder = (e) => {
    e.preventDefault();
    orderCancel({
      order_id: current_order_id,
      table_id: currentOpenTable.table_id,
    }).then((response) => {
      if (typeof response !== "undefined") {
        if (response === true) {
          console.log("Order cancel");
        }
      }
    });
  };

  // State for Modal Prints
  const [printList, setPrintList] = useState([]);

  // Total Print
  const handleTotalPrint = async (e) => {
    e.preventDefault();
    await setPrintList(
      orders_detail_payload.filter((index) => index.order_id === table.order_id)
    );
    btn3.click();
  };

  // Component to Refer
  let componentRef = useRef();
  let componentRef2 = useRef();
  let componentRef3 = useRef();

  // Using useMemo hook
  return useMemo(() => {
    // Render
    return (
      <Drawer
        open={open}
        onClose={close}
        variant={variant}
        anchor={direction}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <CustomLoading open={order_loading} text="Enviando orden..." />

        <CategoriesAppBar
          tabIndex={tabIndex}
          changeTabIndex={changeTabIndex}
          product_orders_list={product_orders_list}
        />
        <ProductsGrid
          background={background}
          tabIndex={tabIndex}
          changeTabIndex={changeTabIndex}
          onClick={handleSetOrder}
          product_orders_list={product_orders_list}
          global_quantity={global_quantity}
        />
        <ProductsFooterBar
          table_state={table_state}
          table_amount={table_amount}
          global_quantity={global_quantity}
          handleCloseProducts={handleCloseProducts}
          toggleOpenOrders={toggleOpenOrders}
          toggleOpenPrints={toggleOpenPrints}
          toggleOpenTotal={toggleOpenTotal}
        />

        <ModalProductsOrders
          open={openTableOrders}
          toggle={toggleOpenOrders}
          product_orders_list={product_orders_list}
          handleOpenObservation={handleOpenObservation}
          handleOpenConfirmation={handleOpenConfirmation}
          handleCreateOrder={handleCreateOrder}
          global_quantity={global_quantity}
          observationState={observationState}
        />

        <ModalPrintsHistory
          open={openPrints.open}
          toggle={toggleOpenPrints}
          handlePrintHistory={handlePrintHistory}
        />

        <ModalTotalAmount
          open={openTotal}
          toggle={toggleOpenTotal}
          global_quantity={global_quantity}
          table_amount={table_amount}
          handleTotalPrint={handleTotalPrint}
        />

        <PopoverObservation
          open={observationState.open}
          close={handleCloseObservation}
          state={observationState}
          saveObs={handleSave}
          deleteObs={handleDelete}
        />
        <PopoverConfirmation
          open={confirmationState.open}
          close={handleCloseConfirmation}
          state={confirmationState}
          deleteOrders={handleDeleteOrders}
        />

        <TabPanel value={1} index={0}>
          <ReactToPrint
            trigger={() => (
              <button id="printOrder" style={{ display: "none" }}>
                Print
              </button>
            )}
            content={() => componentRef}
          />

          <ReactToPrint
            trigger={() => (
              <button id="printHistory" style={{ display: "none" }}>
                Print
              </button>
            )}
            content={() => componentRef2}
          />

          <ComponentToPrint2
            ref={(el) => (componentRef = el)}
            data={product_orders_list}
            refresh={openTableOrders}
          />
          <ComponentToPrint2
            ref={(el2) => (componentRef2 = el2)}
            data={openPrints.list}
            refresh={openPrints.open}
          />
        </TabPanel>

        <ComponentToPrint
          btnID="printTotal"
          printList={printList}
          refresh={[openTotal, printList]}
        />
      </Drawer>
    );
  }, [
    open,
    tabIndex,
    openTableOrders,
    openPrints.open,
    openTotal,
    value,
    currentOpenTable,
    global_quantity,
    tables,
    table_state,
    observationState.open,
    confirmationState.open,
    order_loading,
  ]);
}
// PropTypes
Products.defaultProps = {
  direction: "left",
  variant: "temporary",
  open: false,
  close: null,
  background: "",
};
Products.propTypes = {
  direction: PropTypes.oneOf(["left", "right", "top", "bottom"]),
  variant: PropTypes.oneOf(["permanent", "persistent", "temporary"]),
  open: PropTypes.bool,
  close: PropTypes.func,
  background: PropTypes.string,
};
// Connect to Store State
const mapStateToProps = (state) => {
  const { product, orders, tables } = state;
  return {
    tables: tables.payload,
    orders_list: product.orders,
    currentOpenTable: product.current,
    orders_detail_payload: orders.orders_detail,
    order_loading: orders.loading,
  };
};
// Functions to dispatching
const close_products = (value) => close(value);
const set_orders = (payload) => orders(payload);
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ close_products, set_orders }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);
