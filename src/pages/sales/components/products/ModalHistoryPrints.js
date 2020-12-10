// Dependencies
import React, { useMemo } from "react";
// Conecction to Store
import { connect } from "react-redux";
// @material-ui/icons
import PrintIcon from "@material-ui/icons/Print";
// Core components
import CustomModal from "../../../../components/Modal/CustomModal.js";
import CustomTableListPrints from "../../../../components/Table/CustomTableListPrints";

function ModalHistoryPrints(props) {
  const {
    // Local
    open,
    toggle,
    handleHistoryPrint,
    // Redux
    currentOpenTable,
    orders_detail,
  } = props;

  // Using useMemo hook
  return useMemo(() => {
    return (
      <CustomModal
        open={open}
        close={toggle}
        title={{
          text: "Historial de impresiones",
          size: "medium",
        }}
        content={
          <CustomTableListPrints
            padding="default"
            header={[
              {
                text: "Detalle",
                align: "center",
              },
              {
                text: "N°",
                align: "center",
              },
              {
                text: "Realizado",
                align: "left",
                colSpan: 2,
              },
              {
                text: "Imprimir",
                align: "center",
              },
            ]}
            columns={[
              {
                field: "detail",
                type: "expand",
                size: "medium",
                align: "center",
              },
              {
                field: "order_number",
                type: "text",
                align: "center",
                color: "default",
              },
              {
                field: "created_at",
                type: "text",
                time: true,
                align: "left",
                color: "default",
                colSpan: 2,
              },
              {
                field: "delete",
                type: "icon",
                size: "medium",
                align: "center",
                icon: PrintIcon,
                onClick: handleHistoryPrint,
              },
            ]}
            data={orders_detail}
            key_field="table_id"
            filter={currentOpenTable.table_id}
            renderRefresh={[open]}
          />
        }
        variant="paper"
        maxWidth="sm"
        fullWidth
      />
    );
  }, [open]);
}
// Connect to Store State
const mapStateToProps = (state) => {
  const { product, orders } = state;
  return {
    currentOpenTable: product.current,
    orders_detail: orders.orders_detail,
  };
};

export default connect(mapStateToProps, null)(ModalHistoryPrints);
