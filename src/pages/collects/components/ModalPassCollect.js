// Dependencies
import React from "react";
// Conecction to Store
import { connect } from "react-redux";
// @material-ui/icons
import SendIcon from "@material-ui/icons/Send";
import PrintIcon from "@material-ui/icons/Print";
// core components
import CustomModal from "../../../components/Modal/CustomModal.js";
import CustomTotalAmountList from "../../../components/Table/CustomTotalAmountList.js";
// Functions
import { orderSend } from "../../../functions/cruds/orderFunctions";

function ModalPassCollect(props) {
  const {
    // Props
    open,
    close,
    state,
    handleTotalPrint,
    // Redux
    current,
    orders_filter,
    order_loading,
    collect_fetching,
  } = props;

  const HEADERS = [
    {
      text: "Cant.",
      align: "right",
    },
    {
      text: "Detalle",
      align: "left",
      colSpan: 2,
    },
    {
      text: "P./U.",
      align: "right",
    },

    {
      text: "SubTotal",
      align: "right",
    },
  ];

  const COLUMNS = [
    {
      field: "product_quantity",
      type: "text",
      align: "right",
      variant: "h6",
      color: "warning",
    },
    {
      field: "product_name",
      type: "text",
      align: "left",
      color: "default",
      colSpan: 2,
    },
    {
      field: "product_price",
      type: "number",
      align: "right",
      variant: "h6",
      color: "warning",
    },
    {
      multiplyFields: ["product_price", "product_quantity"],
      type: "multiply",
      align: "right",
      variant: "h6",
      color: "warning",
    },
  ];

  // Send Order function
  const handleSendOrder = (e) => {
    e.preventDefault();
    orderSend({
      order_id: state.order_id,
      table_id: state.id,
    }).then((response) => {
      if (typeof response !== "undefined") {
        if (response.success === true) {
          close();
        }
      }
    });
  };

  return (
    <CustomModal
      open={open}
      close={close}
      closeIcon={collect_fetching || order_loading === true ? false : true}
      title={{
        text: `${state.name} ${state.number}: `,
        margin: true,
        size: "medium",
        bold: true,
      }}
      subtitle={{
        text: `Bs. ${state.total_amount}`,
        color: "warning",
        margin: true,
        size: "medium",
        bold: true,
      }}
      content={
        <CustomTotalAmountList
          padding="default"
          header={HEADERS}
          columns={COLUMNS}
          data={orders_filter.filter((i) => i.table_id === current.table_id)}
          key_field="table_id"
          filter={state.id}
          renderRefresh={open}
        />
      }
      leftButtons={[
        {
          type: "icon",
          text: "Imprimir",
          color: "default",
          icon: PrintIcon,
          edge: false,
          size: "large",
          disabled: state.total_amount > 0 ? false : true,
          onClick: handleTotalPrint,
        },
      ]}
      rightButtons={[
        {
          type: "button",
          text: "Enviar a cobrar",
          color: "primary",
          icon: SendIcon,
          edge: "start",
          size: "large",
          variant: "contained",
          disabled: state.total_amount > 0 ? false : true,
          onClick: state.is_busy === 1 ? handleSendOrder : null,
        },
      ]}
      renderRefresh={[open, state.change, state.id, collect_fetching]}
      loading={collect_fetching || order_loading}
      scroll="paper"
      maxWidth="sm"
      fullWidth
    />
  );
}
// Connect to Store State
const mapStateToProps = (state) => {
  const { orders, product } = state;
  return {
    orders_filter: orders.orders_filter,
    order_loading: orders.loading,
    current: product.current,
  };
};

export default connect(mapStateToProps, null)(ModalPassCollect);
