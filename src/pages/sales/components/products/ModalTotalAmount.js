// Dependencies
import React from "react";
import NumberFormat from "react-number-format";
// Conecction to Store
import { connect } from "react-redux";
// @material-ui/icons
import PrintRounded from "@material-ui/icons/PrintRounded";
// Core components
import CustomModal from "../../../../components/Modal/CustomModal.js";
import CustomTotalAmountList from "../../../../components/Table/CustomTotalAmountList.js";

function ModalTotalAmount(props) {
  const {
    // Local
    open,
    toggle,
    global_quantity,
    table_amount,
    handleTotalAmountPrint,
    // Redux
    current,
    orders_filter,
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

  return (
    <CustomModal
      open={open}
      close={toggle}
      title={{
        text: "Cuenta total",
        size: "medium",
      }}
      content={
        <CustomTotalAmountList
          padding="default"
          header={HEADERS}
          columns={COLUMNS}
          data={orders_filter.filter(
            (i) =>
              i.table_id === current.table_id && i.order_id === current.order_id
          )}
          key_field="table_id"
          filter={current.table_id}
          renderRefresh={[orders_filter, global_quantity]}
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
      renderRefresh={[open, current.open, orders_filter]}
      fullWidth
    />
  );
}
// Connect to Store State
const mapStateToProps = (state) => {
  const { product, orders } = state;
  return {
    current: product.current,
    orders_filter: orders.orders_filter,
  };
};

export default connect(mapStateToProps, null)(ModalTotalAmount);
