// Dependencies
import React, { useMemo } from "react";
import NumberFormat from "react-number-format";
// Conecction to Store
import { connect } from "react-redux";
// @material-ui/icons
import PrintRounded from "@material-ui/icons/PrintRounded";
// Core components
import CustomModal from "../../../../components/Modal/CustomModal.js";
import CustomTableFilter from "../../../../components/Table/CustomTableFilter.js";

function ModalTotalAmount(props) {
  const {
    // Local
    open,
    toggle,
    global_quantity,
    table_amount,
    handleTotalAmountPrint,
    // Redux
    currentOpenTable,
    orders_detail_payload,
  } = props;

  // Using useMemo hook
  return useMemo(() => {
    return (
      <CustomModal
        open={open}
        close={toggle}
        title={{
          text: "Cuenta total",
          size: "medium",
        }}
        content={
          <CustomTableFilter
            padding="default"
            header={[
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
            ]}
            columns={[
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
            ]}
            data={orders_detail_payload}
            key_field="table_id"
            filter={currentOpenTable.table_id}
            renderRefresh={[orders_detail_payload, global_quantity]}
          />
        }
        leftButtons={[
          {
            type: "icon",
            text: "Imprimir",
            size: "medium",
            align: "center",
            icon: PrintRounded,
            iconColor: "secondary",
            onClick: handleTotalAmountPrint,
          },
        ]}
        rightButtons={[
          {
            type: "text",
            text: "Total:",
            margin: true,
            size: "medium",
            bold: true,
          },
          {
            type: "text",
            text: [
              <NumberFormat
                key={999}
                value={table_amount}
                displayType={"text"}
                thousandSeparator={true}
                allowNegative={false}
                allowEmptyFormatting={false}
                allowLeadingZeros={false}
                decimalScale={2}
                isNumericString={true}
                renderText={(value) => <span>Bs. {value}</span>}
              />,
            ],
            color: "warning",
            margin: true,
            size: "medium",
            bold: true,
          },
        ]}
        scroll="paper"
        maxWidth="sm"
        fullWidth
      />
    );
  }, [open, orders_detail_payload]);
}
// Connect to Store State
const mapStateToProps = (state) => {
  const { product, orders } = state;
  return {
    currentOpenTable: product.current,
    orders_detail_payload: orders.orders_detail,
  };
};

export default connect(mapStateToProps, null)(ModalTotalAmount);
