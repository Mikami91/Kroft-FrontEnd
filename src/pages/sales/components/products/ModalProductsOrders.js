// Dependencies
import React, { useMemo } from "react";
import NumberFormat from "react-number-format";
// Conecction to Store
import { connect } from "react-redux";
// Actions creators
import { bindActionCreators } from "redux";
import {
  more,
  less,
  remove,
} from "../../../../redux/actions/creators/productCreator";
// @material-ui/icons
import InfoIcon from "@material-ui/icons/Info";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import DeleteIcon from "@material-ui/icons/Delete";
import PrintIcon from "@material-ui/icons/Print";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
// Core components
import CustomModal from "../../../../components/Modal/CustomModal.js";
import CustomTableList from "../../../../components/Table/CustomTableList.js";

function ModalProductsOrders(props) {
  // Props
  const {
    // Local
    open,
    toggle,
    product_orders_list,
    handleOpenObservation,
    handleOpenConfirmation,
    handleCreateOrder,
    global_quantity,
    global_amount,
    observationState,
    // Redux
    loading,
  } = props;

  // Add Product quantity
  const handleMoreQuantity = (product_id) =>
    more_quantity({ product_id: product_id });

  // Add Product quantity
  const handleLessQuantity = (product_id) =>
    less_quantity({ product_id: product_id });

  // Add Product quantity
  const handleRemoveProduct = (product_id) =>
    remove_product({ product_id: product_id });

  // Using useMemo hook
  return useMemo(() => {
    return (
      <CustomModal
        open={product_orders_list.length > 0 ? open : false}
        close={toggle}
        loading={loading}
        title={{
          text: "Lista de ordenes",
          size: "medium",
        }}
        content={
          <CustomTableList
            padding="none"
            header={[
              {
                text: "Obser.",
                align: "center",
              },
              {
                text: "Producto",
                align: "left",
                colSpan: 2,
              },
              {
                text: "P./U.",
                align: "center",
              },
              {
                text: "-",
                align: "center",
              },
              {
                text: "Cant.",
                align: "center",
              },
              {
                text: "+",
                align: "center",
              },
              {
                text: "Eliminar",
                align: "center",
              },
            ]}
            columns={[
              {
                field: "observation",
                type: "icon",
                size: "medium",
                align: "center",
                icon: InfoIcon,
                iconColor: "primary",
                variant: "pop",
                onClick: handleOpenObservation,
              },
              {
                field: "product_name",
                type: "text",
                fontSize: "default",
                align: "left",
                color: "default",
                colSpan: 2,
              },
              {
                field: "product_price",
                type: "text",
                fontSize: "default",
                align: "center",
                color: "warning",
              },
              {
                field: "rest",
                type: "icon",
                size: "medium",
                align: "center",
                icon: ChevronLeftIcon,
                iconSize: "large",
                onClick: handleLessQuantity,
              },
              {
                field: "product_quantity",
                type: "text",
                fontSize: "default",
                align: "center",
                color: "warning",
              },
              {
                field: "plus",
                type: "icon",
                size: "medium",
                align: "center",
                icon: ChevronRightIcon,
                iconSize: "large",
                onClick: handleMoreQuantity,
              },
              {
                field: "delete",
                type: "icon",
                size: "medium",
                align: "center",
                icon: DeleteIcon,
                iconColor: "secondary",
                onClick: handleRemoveProduct,
              },
            ]}
            data={product_orders_list}
            renderRefresh={[global_quantity, observationState]}
          />
        }
        leftButtons={[
          {
            type: "button",
            text: "Eliminar",
            color: "danger",
            variant: "contained",
            icon: DeleteSweepIcon,
            onClick: handleOpenConfirmation,
          },
        ]}
        centerButtons={[
          {
            type: "text",
            text: "Total:",
            align: "left",
            margin: true,
            size: "medium",
            display: "inline",
          },
          {
            type: "text",
            text: [
              <NumberFormat
                key={9999}
                value={global_amount}
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
            align: "right",
            margin: true,
            size: "medium",
            color: "warning",
            display: "inline",
          },
        ]}
        rightButtons={[
          {
            type: "button",
            text: "Aceptar",
            color: "primary",
            variant: "contained",
            icon: PrintIcon,
            onClick: handleCreateOrder,
          },
        ]}
        renderRefresh={[open, global_quantity]}
        scroll="paper"
        maxWidth="md"
        fullWidth
      />
    );
  }, [open, observationState, global_quantity]);
}
// Connect to Store State
const mapStateToProps = (state) => {
  const { orders } = state;
  return {
    loading: orders.loading,
  };
};
// Functions to dispatching
const more_quantity = (id) => more(id);
const less_quantity = (id) => less(id);
const remove_product = (id) => remove(id);
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { more_quantity, less_quantity, remove_product },
    dispatch
  );
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalProductsOrders);
