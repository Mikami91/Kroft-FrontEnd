// Dependencies
import React, { Component, useState, useMemo, useRef } from "react";
import PropTypes from "prop-types";
// Print
import ReactToPrint from "react-to-print";
// Conecction to Store
import { connect } from "react-redux";
// Actions Creators
import { close as closeModalProducts } from "../../../redux/actions/creators/productCreator";
import { delete_all } from "../../../redux/actions/creators/productCreator";
import {
  useProductsOrdersModal,
  useTotalAmountModal,
  useHistoryPrintsModal,
} from "../../../hooks/useModal";
import {
  useObservationPopover,
  useConfirmationPopover,
} from "../../../hooks/usePopover";
// UI Material Components
import Drawer from "@material-ui/core/Drawer";
// Local components
import CategoriesAppBar from "./products/CategoriesAppBar";
import ListProducts from "./products/ListProducts";
import ProductsFooterBar from "./products/ProductsFooterBar";
import ModalProductsOrders from "./products/ModalProductsOrders";
import ModalHistoryPrints from "./products/ModalHistoryPrints";
import ModalTotalAmount from "./products/ModalTotalAmount";
import PopoverObservation from "./products/PopoverObservation";
import PopoverConfirmation from "./products/PopoverConfirmation";
// core components
import TabPanel from "../../../components/Panel/TabPanel";
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
    currentTable,
  } = props;

  console.log(currentTable);

  console.log(`%c PRODUCTS RENDER`, "color: lightgreen; font-size: large");

  // Tabs index state
  const [tabIndex, setTabIndex] = useState(0);
  // Change categories
  const changeTabIndex = (event, newValue) => {
    setTabIndex(newValue);
  };

  // Hooks
  const [openProductsOrders, toggleProductsOrders] = useProductsOrdersModal();
  const [
    totalAmount,
    setTotalAmount,
    toggleTotalAmount,
  ] = useTotalAmountModal();
  const [
    historyPrints,
    setHistoryPrints,
    toggleHistoryPrints,
  ] = useHistoryPrintsModal();
  const [
    observationState,
    openObservation,
    closeObservation,
    saveObservation,
    deleteObservation,
  ] = useObservationPopover();
  const [
    confirmationState,
    openConfirmation,
    closeConfirmation,
  ] = useConfirmationPopover();

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

  useMemo(() => {
    console.log(`%c ENTER FUNC`, "color: orange");
    if (
      currentOpenTable.env_index !== null &&
      currentOpenTable.table_index !== null
    ) {
      console.log(`%c IF PASS`, "color: orange");

      let current_location =
        orders_list[currentOpenTable.env_index].tables[
          currentOpenTable.table_index
        ];
      product_orders_list = current_location.products;
      global_quantity = current_location.global_quantity;
      global_amount = current_location.global_amount;

      console.log(`%c RESPONSE`, "color: orange");
    }
    console.log(`%c PRODUCTS QUANTITY: ${global_quantity}`, "color: skyblue");
  }, [open, global_quantity, global_amount, product_orders_list]);

  let btn = document.getElementById("printOrder");
  let btn2 = document.getElementById("printHistory");
  let btn3 = document.getElementById("printTotal");

  // ORDERS ACTIONS

  // Create Order function
  async function handleCreateOrder() {
    toggleProductsOrders();
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
          toggleProductsOrders();
          // Printing
          btn.click();
        }
      }
    });
  }

  // Delete Orders List function
  const handleDeleteOrders = () => {
    delete_all();
    closeConfirmation();
    toggleProductsOrders();
  };

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

  // Print Order History
  async function handleHistoryPrint(e, arg) {
    e.preventDefault();
    await setHistoryPrints(orders_detail_payload, arg);
    btn2.click();
  }

  // Total Amount Print
  const handleTotalAmountPrint = async (e) => {
    e.preventDefault();
    await setTotalAmount(orders_detail_payload, currentTable.order_id);
    btn3.click();
  };

  // Component to Refer
  let componentRef = useRef();
  let componentRef2 = useRef();

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
        <ListProducts
          background={background}
          tabIndex={tabIndex}
          changeTabIndex={changeTabIndex}
          product_orders_list={product_orders_list}
          global_quantity={global_quantity}
          open={open}
        />
        <ProductsFooterBar
          table_state={table_state}
          table_amount={table_amount}
          global_quantity={global_quantity}
          handleSendOrder={handleSendOrder}
          handleCancelOrder={handleCancelOrder}
          handleCloseProducts={closeModalProducts}
          toggleProductsOrders={toggleProductsOrders}
          toggleHistoryPrints={toggleHistoryPrints}
          toggleTotalAmount={toggleTotalAmount}
        />
        <ModalProductsOrders
          open={openProductsOrders}
          toggle={toggleProductsOrders}
          product_orders_list={product_orders_list}
          openObservation={openObservation}
          openConfirmation={openConfirmation}
          handleCreateOrder={handleCreateOrder}
          global_quantity={global_quantity}
          global_amount={global_amount}
          observationState={observationState}
        />
        <ModalHistoryPrints
          open={historyPrints.open}
          toggle={toggleHistoryPrints}
          handleHistoryPrint={handleHistoryPrint}
        />
        <ModalTotalAmount
          open={totalAmount.open}
          toggle={toggleTotalAmount}
          global_quantity={global_quantity}
          table_amount={table_amount}
          handleTotalAmountPrint={handleTotalAmountPrint}
        />
        <PopoverObservation
          open={observationState.open}
          close={closeObservation}
          state={observationState}
          saveObs={saveObservation}
          deleteObs={deleteObservation}
        />
        <PopoverConfirmation
          open={confirmationState.open}
          close={closeConfirmation}
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
            refresh={openProductsOrders}
          />
          <ComponentToPrint2
            ref={(el2) => (componentRef2 = el2)}
            data={historyPrints.list}
            refresh={historyPrints}
          />
        </TabPanel>
        <ComponentToPrint
          btnID="printTotal"
          printList={totalAmount.list}
          refresh={totalAmount}
        />
      </Drawer>
    );
  }, [
    open,
    tabIndex,
    global_quantity,
    tables,
    table_state,
    openProductsOrders,
    totalAmount,
    historyPrints,
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

export default connect(mapStateToProps, null)(Products);
