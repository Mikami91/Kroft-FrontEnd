// Dependencies
import React, { useContext } from "react";
import NumberFormat from "react-number-format";
// Conecction to Store
import { connect } from "react-redux";
// @material-ui/icons
import UndoIcon from "@material-ui/icons/Undo";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import PrintIcon from "@material-ui/icons/Print";
import ListAltIcon from "@material-ui/icons/ListAlt";
import SendIcon from "@material-ui/icons/Send";
import RestoreIcon from "@material-ui/icons/Restore";
import TableChartRoundedIcon from "@material-ui/icons/TableChartRounded";
// core components
import FooterAppBar from "../../../../components/Footer/FooterAppBar.js";
// Contexts
import CurrentTableContext from "../../../../hooks/contexts/TableContext";

function ProductsFooterBar(props) {
  const {
    // Local
    table_state,
    table_amount,
    global_quantity,
    handleSendOrder,
    handleCancelOrder,
    handleCloseProducts,
    toggleProductsOrders,
    toggleHistoryPrints,
    toggleTotalAmount,
  } = props;

  // Use Contexts
  const { state } = useContext(CurrentTableContext);

  return (
    <FooterAppBar
      color="inherit"
      variant="dense"
      floatChip={{
        primary: `${state.name} ${state.number}`,
        secondary: state.environment_name,
        color:
          table_state === 0
            ? "success"
            : table_state === 1
            ? "danger"
            : table_state === 2
            ? "warning"
            : "gray",
        type: "icon",
        icon: TableChartRoundedIcon,
      }}
      fabButton={{
        disabled:
          global_quantity <= 0 ? true : table_state === 2 ? true : false,
        color: "secondary",
        label: "Lista de ordenes",
        quantity: global_quantity,
        float: false,
        align: "center",
        icon: FormatListBulletedIcon,
        onClick: toggleProductsOrders,
      }}
      leftButtons={[
        {
          type: "fab",
          text: "Atras",
          value: "",
          color: "primary",
          icon: UndoIcon,
          size: "large",
          disabled: false,
          onClick: handleCloseProducts,
        },
        {
          type: "text",
          text: "Total:",
          color: "inherit",
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
              fixedDecimalScale={true}
              isNumericString={true}
              renderText={(value) => (
                <span>Bs. {table_amount > 0 ? value : "0.00"}</span>
              )}
            />,
          ],
          color: "warning",
          margin: true,
          size: "medium",
          bold: true,
        },
      ]}
      rightButtons={[
        {
          type: "icon",
          text: "Impresiones",
          color: "default",
          icon: PrintIcon,
          edge: "start",
          size: "large",
          disabled: table_amount > 0 ? false : true,
          onClick: toggleHistoryPrints,
        },
        {
          type: "icon",
          text: "Cuenta total",
          color: "default",
          icon: ListAltIcon,
          edge: false,
          size: "large",
          disabled: table_amount > 0 ? false : true,
          onClick: toggleTotalAmount,
        },
        {
          type: "fab",
          text: table_state === 1 ? "Enviar orden" : "Cancelar orden",
          color: table_state === 1 ? "primary" : "secondary",
          icon:
            table_state === 1
              ? SendIcon
              : table_state === 2
              ? RestoreIcon
              : SendIcon,
          edge: "end",
          size: "large",
          disabled: table_amount > 0 ? false : true,
          onClick:
            table_state === 1
              ? handleSendOrder
              : table_state === 2
              ? handleCancelOrder
              : null,
        },
      ]}
    />
  );
}

export default connect(null, null)(ProductsFooterBar);
