// Dependencies
import React from "react";
// Conecction to Store
import { connect } from "react-redux";
// core components
import CustomModal from "../../../components/Modal/CustomModal.js";
import CustomTableFreeSalesList from "../../../components/Table/CustomTableFreeSalesList.js";

function ModalPassCollect(props) {
  const {
    // Props
    open,
    close,
    // Redux
    payload,
    fetching,
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

  return (
    <CustomModal
      open={open}
      close={close}
      closeIcon={fetching || loading ? false : true}
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
          renderRefresh={[open, payload]}
        />
      }
      renderRefresh={[open, payload, loading]}
      loading={fetching || loading}
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
      (i) => i.state === 0 && i.payment_type === "will_pay"
    ),
    fetching: collects.fetching,
    loading: collects.loading,
  };
};

export default connect(mapStateToProps, null)(ModalPassCollect);
