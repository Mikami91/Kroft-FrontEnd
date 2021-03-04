// Dependencies
import React from "react";
// Conecction to Store
import { connect } from "react-redux";
// core components
import CustomModal from "../../../components/Modal/CustomModal.js";
import CustomTableFreeSalesList from "../../../components/Table/CustomTableFreeSalesList.js";
// Functions
import { orderSend } from "../../../functions/cruds/orderFunctions";

function ModalPassCollect(props) {
  const {
    // Props
    open,
    close,
    // Redux
    payload,
    loading,
  } = props;

  const HEADERS = [
    {
      text: "Detalle",
      align: "center",
    },
    {
      text: "Empresa",
      align: "left",
      colSpan: 2,
    },
    {
      text: "NIT",
      align: "left",
      colSpan: 2,
    },
    {
      text: "Cuentas",
      align: "center",
      colSpan: 1,
    },
  ];

  const COLUMNS = [
    {
      field: "detail",
      type: "expand",
      iconSize: "large",
      align: "center",
    },
    {
      field: "company_name",
      type: "text",
      align: "left",
      color: "default",
      colSpan: 2,
    },
    {
      field: "nit",
      type: "text",
      align: "left",
      color: "warning",
      colSpan: 2,
    },
    {
      field: "pending_accounts",
      type: "text",
      align: "center",
      fontSize: "large",
      color: "secondary",
      colSpan: 1,
    },
  ];

  // Send Order function
  // const handleSendOrder = (e) => {
  //   e.preventDefault();
  //   orderSend({
  //     order_id: current.order_id,
  //     table_id: current.table_id,
  //   }).then((response) => {
  //     if (typeof response !== "undefined") {
  //       if (response.success === true) {
  //         // close();
  //       }
  //     }
  //   });
  // };

  return (
    <CustomModal
      open={open}
      close={close}
      closeIcon={loading === true ? false : true}
      title={{
        text: "Ventas libres",
        margin: true,
        size: "medium",
        bold: true,
      }}
      content={
        <CustomTableFreeSalesList
          padding="default"
          header={HEADERS}
          columns={COLUMNS}
          data={payload}
          key_field="payment_type"
          filter="will_pay"
          renderRefresh={[open, payload]}
        />
      }
      renderRefresh={[open, payload, loading]}
      loading={loading}
      scroll="paper"
      maxWidth="md"
      fullWidth
    />
  );
}
// Connect to Store State
const mapStateToProps = (state) => {
  const { collects } = state;
  return {
    payload: collects.payload.filter(
      (i) => i.state === 1 && i.payment_type === "will_pay"
    ),
    loading: collects.loading,
  };
};

export default connect(mapStateToProps, null)(ModalPassCollect);
