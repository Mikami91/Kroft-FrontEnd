// Dependencies
import React, { Component } from "react";
// Conecction to Store
import { connect } from "react-redux";
// @material-ui/icons
import SendIcon from "@material-ui/icons/Send";
import PrintIcon from "@material-ui/icons/Print";
// core components
import TabPanel from "../../../components/Panel/TabPanel";
import CustomModal from "../../../components/Modal/CustomModal.js";
import CustomTableFilter from "../../../components/Table/CustomTableFilter.js";
import CustomTableToPrints from "../../../components/Table/CustomTableToPrints";
// Functions
import { orderSend } from "../../../functions/cruds/orderFunctions";

class ComponentToPrint extends Component {
  render() {
    return (
      <CustomTableToPrints
        data={this.props.data}
        renderRefresh={this.props.refresh}
      />
    );
  }
}

function ModalPassCollect(props) {
  // Props
  const {
    // Local
    open,
    close,
    state,
    handleTotalPrint,
    // Redux
    orders_detail_payload,
    order_loading,
    collect_fetching,
  } = props;

  const HEADERS = [
    {
      text: "ID",
      align: "center",
    },
    {
      text: "Producto",
      align: "left",
      colSpan: 2,
    },
    {
      text: "P./U.",
      align: "right",
    },
    {
      text: "Cantidad",
      align: "right",
    },
  ];

  const COLUMNS = [
    {
      field: "id",
      type: "text",
      align: "center",
      color: "default",
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
      type: "text",
      align: "right",
      variant: "h6",
      color: "warning",
    },
    {
      field: "product_quantity",
      type: "text",
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
        <CustomTableFilter
          padding="default"
          header={HEADERS}
          columns={COLUMNS}
          data={orders_detail_payload}
          key_field="table_id"
          filter={state.id}
          renderRefresh={[state, open]}
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
  const { orders } = state;
  return {
    orders_detail_payload: orders.orders_detail,
    order_loading: orders.loading,
  };
};

export default connect(mapStateToProps, null)(ModalPassCollect);
