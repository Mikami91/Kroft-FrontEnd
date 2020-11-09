// Dependencies
import React, { Fragment, Component, useState, useMemo, useRef } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import NumberFormat from "react-number-format";
// Print
import ReactToPrint from "react-to-print";
// Conecction to Store
import { connect } from "react-redux";
// Actions Creators
import { bindActionCreators } from "redux";
import {
  orders,
  more,
  less,
  remove,
  add_obs,
  delete_obs,
  delete_all,
} from "../../redux/actions/creators/productCreator";
// UI Material Components
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
// core components
import AppBarIcons from "../../components/AppBar/AppBarIcons.js";
import FooterAppBar from "../../components/Footer/FooterAppBar.js";
import TabPanel from "../../components/Panel/TabPanel";
import GridProducts from "../../components/Grid/GridProducts";
import CustomModal from "../../components/Modal/CustomModal.js";
import CustomTableList from "../../components/Table/CustomTableList.js";
import CustomTableFilter from "../../components/Table/CustomTableFilter.js";
import CustomTableListPrints from "../../components/Table/CustomTableListPrints";
import CustomTableToPrints from "../../components/Table/CustomTableToPrints";
import ObservationPopover from "../../components/Popover/ObservationPopover";
import CustomPopover from "../../components/Popover/CustomPopover";
import CustomLoading from "../../components/Loading/CustomLoading";
// Icons
import UndoIcon from "@material-ui/icons/Undo";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import InfoIcon from "@material-ui/icons/Info";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import DeleteIcon from "@material-ui/icons/Delete";
import PrintIcon from "@material-ui/icons/Print";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import ListAltIcon from "@material-ui/icons/ListAlt";
import SendIcon from "@material-ui/icons/Send";
import RestoreIcon from "@material-ui/icons/Restore";
import TableChartRoundedIcon from "@material-ui/icons/TableChartRounded";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
// Functions
import {
  orderCreate,
  orderSend,
  orderCancel,
} from "../../functions/cruds/orderFunctions";

// Styles
import styles from "../../styles/components/drawerStyle.js";

const useStyles = makeStyles(styles);

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

function DrawerProducts(props) {
  const {
    /* Redux */
    categories,
    products,
    tables,
    orders_list,
    current,
    orders_detail_payload,
    order_loading,
    /* Props */
    direction,
    variant,
    open,
    close,
    background,
    table,
  } = props;

  // Categories index State
  const [value, setValue] = useState(0);
  const handleChangeIndex = (e, newValue) => {
    setValue(newValue);
  };

  // State for Modal Orders
  const [openTableOrders, setOpenTableOrders] = useState(false);
  const handleOpenOrders = () => setOpenTableOrders(true);
  const handleCloseOrders = () => setOpenTableOrders(false);

  // State for Modal Prints
  const [openPrints, setOpenPrints] = useState({
    open: false,
    list: [],
  });
  const handleOpenPrints = () =>
    setOpenPrints({
      ...state,
      open: true,
    });
  const handleClosePrints = () =>
    setOpenPrints({
      open: false,
      list: [],
    });

  // State for Modal Total Amount
  const [openTotal, setOpenTotal] = useState(false);
  const handleOpenTotal = () => setOpenTotal(true);
  const handleCloseTotal = () => setOpenTotal(false);

  // Order make function
  const handleSetOrder = (arg) => {
    set_orders(arg);
  };

  // Set state, amount and order_id of current Table
  let table_state = 0;
  let table_amount = 0;
  let current_order_id = null;

  tables.reduce(
    (index, cur) =>
      cur.id === current.table_id
        ? [
            (table_state = cur.is_busy),
            (current_order_id = cur.order_id),
            (table_amount = cur.amount),
          ]
        : null,
    []
  );

  // Products Orders List
  let product_orders_list = [];

  // calculate Global quantity and global amount from current Table
  let global_quantity = 0;
  let global_amount = 0;

  if (open === true) {
    if (current.env_index !== null && current.table_index !== null) {
      let current_location =
        orders_list[current.env_index].tables[current.table_index];
      product_orders_list = current_location.products;
      global_quantity = current_location.global_quantity;
      global_amount = current_location.global_amount;
    }
  }

  // Add Product quantity
  const handleMoreQuantity = (product_id) =>
    more_quantity({ product_id: product_id });

  // Add Product quantity
  const handleLessQuantity = (product_id) =>
    less_quantity({ product_id: product_id });

  // Add Product quantity
  const handleRemoveProduct = (product_id) =>
    remove_product({ product_id: product_id });

  // Open and Close Observation Popopver
  const [state, setState] = useState({
    open: false,
    anchorEl: null,
    product_id: null,
    observation: "",
  });

  const handleOpenObservation = (e, id, observation) => {
    setState({
      open: true,
      anchorEl: e.currentTarget,
      product_id: id,
      observation: observation,
    });
  };
  const handleCloseObservation = () => {
    setState({
      open: false,
      anchorEl: null,
      product_id: null,
      observation: "",
    });
  };
  // Delete observation
  const handleDelete = () => {
    delete_obs({ product_id: state.product_id });
    handleCloseObservation();
  };

  // Save observation
  const handleSave = () => {
    add_obs({
      product_id: state.product_id,
      observation: document.getElementById("textarea").value,
    });
    handleCloseObservation();
  };

  // Open and Close Confirmation Popopver
  const [state2, setState2] = useState({
    open: false,
    anchorEl: null,
  });

  const handleOpenConfirmation = (e) => {
    console.log(e);
    setState2({
      open: true,
      anchorEl: e.currentTarget,
    });
  };
  const handleCloseConfirmation = () => {
    setState2({
      open: false,
      anchorEl: null,
    });
  };

  // Delete Orders List
  const handleDeleteOrders = () => {
    delete_all();
    handleCloseConfirmation();
    handleCloseOrders();
  };

  let btn = document.getElementById("printOrder");
  let btn2 = document.getElementById("printHistory");

  // Print Order History
  async function handlePrintHistory(e, arg) {
    e.preventDefault();
    await setOpenPrints({
      ...state,
      list: orders_detail_payload.filter(
        (index) =>
          index.order_number === arg.order_number &&
          index.order_id === arg.order_id
      ),
    });
    btn2.click();
  }

  // Create Order function
  async function handleCreateOrder() {
    handleCloseOrders();
    orderCreate({
      employee_id: localStorage.getItem("employee_id"),
      table_id: current.table_id,
      total_amount: global_amount,
      products: product_orders_list,
    }).then((response) => {
      if (typeof response !== "undefined") {
        if (response.success === true) {
          // Delete Orders List
          delete_all();
          // Close Product Orders Table
          handleCloseOrders();
          // Printing
          btn.click();
        }
      }
    });
  }

  // Send Order function
  const handleSendOrder = (e) => {
    e.preventDefault();
    orderSend({
      order_id: current_order_id,
      table_id: current.table_id,
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
      table_id: current.table_id,
    }).then((response) => {
      if (typeof response !== "undefined") {
        if (response === true) {
          console.log("Order cancel");
        }
      }
    });
  };

  const handleOnClick = (e) => console.log(e.currentTarget);

  // Styles
  const classes = useStyles();

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
        //   className={classes.drawer}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <CustomLoading open={order_loading} text="Enviando orden..." />

        <AppBarIcons
          color="inherit"
          selectColor="secondary"
          hoverColor="secondary"
          data={categories}
          imagePath="images/categories/"
          value={value}
          onChange={handleChangeIndex}
          orders={product_orders_list}
        />
        {/* https://source.unsplash.com/random */}
        <div
          className={classes.content}
          style={{ backgroundImage: `url(${background})` }}
        >
          <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
            {categories.map((index, key) => {
              return (
                <TabPanel key={key} value={value} index={key}>
                  <Grid
                    container
                    spacing={0}
                    direction="row"
                    // className={classes.content}
                    justify="flex-start"
                    alignItems="flex-start"
                  >
                    <GridProducts
                      data={products}
                      keyCategory="category_id"
                      keySubcategory="sub_category_id"
                      filter={index.id}
                      imagePath="images/products/"
                      imagePath2="images/sub_categories/"
                      onClick={handleSetOrder}
                      color="secondary"
                      orders={product_orders_list}
                      renderRefresh={global_quantity}
                    />
                  </Grid>
                </TabPanel>
              );
            })}
          </SwipeableViews>
        </div>

        <FooterAppBar
          color="inherit"
          variant="dense"
          floatChip={{
            primary: `${table.name} ${table.number}`,
            secondary: table.environment_name,
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
            onClick: handleOpenOrders,
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
              onClick: close,
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
          rightButtons={[
            {
              type: "icon",
              text: "Impresiones",
              color: "default",
              icon: PrintIcon,
              edge: "start",
              size: "large",
              disabled: table_amount > 0 ? false : true,
              onClick: handleOpenPrints,
            },
            {
              type: "icon",
              text: "Cuenta total",
              color: "default",
              icon: ListAltIcon,
              edge: false,
              size: "large",
              disabled: table_amount > 0 ? false : true,
              onClick: handleOpenTotal,
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

        <CustomModal
          // background={"https://source.unsplash.com/random"}
          open={product_orders_list.length > 0 ? openTableOrders : false}
          close={handleCloseOrders}
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
              renderRefresh={[global_quantity, state.observation]}
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
          renderRefresh={[openTableOrders, global_quantity]}
          scroll="paper"
          maxWidth="md"
          fullWidth
        />

        <CustomModal
          open={openPrints.open}
          close={handleClosePrints}
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
                  onClick: handlePrintHistory,
                },
              ]}
              data={orders_detail_payload}
              key_field="table_id"
              filter={current.table_id}
              renderRefresh={[openPrints]}
            />
          }
          variant="paper"
          maxWidth="sm"
          fullWidth
        />

        <CustomModal
          open={openTotal}
          close={handleCloseTotal}
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
              filter={current.table_id}
              renderRefresh={[global_quantity, state.observation]}
            />
          }
          leftButtons={[
            {
              type: "icon",
              text: "Imprimir",
              size: "medium",
              align: "center",
              icon: DeleteIcon,
              iconColor: "secondary",
              onClick: handleOnClick,
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

        <ObservationPopover
          state={state}
          handleClose={handleCloseObservation}
          content={
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <TextField
                autoFocus={state.observation === "" ? true : false}
                id="textarea"
                label="Observación"
                multiline
                rowsMax="4"
                inputProps={{ maxLength: 40 }}
                name="observation"
                defaultValue={state.observation}
                margin="normal"
                variant="outlined"
              />
              <Tooltip placement="bottom" title="Cancelar" arrow>
                <IconButton
                  aria-label="Cancelar"
                  color="inherit"
                  onClick={handleCloseObservation}
                >
                  <CancelRoundedIcon fontSize="large" />
                </IconButton>
              </Tooltip>
              <Tooltip placement="bottom" title="Eliminar" arrow>
                <span>
                  <IconButton
                    aria-label="Eliminar"
                    color="secondary"
                    disabled={state.observation === "" ? true : false}
                    onClick={handleDelete}
                  >
                    <DeleteIcon fontSize="large" />
                  </IconButton>
                </span>
              </Tooltip>
              <Tooltip placement="bottom" title="Guardar" arrow>
                <IconButton
                  aria-label="Guardar"
                  color="primary"
                  onClick={handleSave}
                >
                  <CheckCircleRoundedIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            </div>
          }
        />

        <CustomPopover
          state={state2}
          handleClose={handleCloseConfirmation}
          content={
            <Fragment>
              <p>¿Eliminar toda la lista?</p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Tooltip placement="bottom" title="Cancelar" arrow>
                  <IconButton
                    aria-label="Cancelar"
                    color="inherit"
                    onClick={handleCloseConfirmation}
                  >
                    <CancelRoundedIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
                <Tooltip placement="bottom" title="Eliminar" arrow>
                  <IconButton
                    aria-label="Eliminar"
                    color="secondary"
                    onClick={handleDeleteOrders}
                  >
                    <DeleteIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
              </div>
            </Fragment>
          }
        />

        <TabPanel value={1} index={0}>
          <ReactToPrint
            trigger={() => (
              <button id="printOrder" style={{ display: "none" }}>
                Print
              </button>
            )}
            content={() => componentRef}
            // onPrintError={printError}
            // onAfterPrint={printOk}
          />

          <ReactToPrint
            trigger={() => (
              <button id="printHistory" style={{ display: "none" }}>
                Print
              </button>
            )}
            content={() => componentRef2}
          />

          <ComponentToPrint
            ref={(el) => (componentRef = el)}
            data={product_orders_list}
            refresh={openTableOrders}
          />
          <ComponentToPrint
            ref={(el2) => (componentRef2 = el2)}
            data={openPrints.list}
            refresh={openPrints.open}
          />
        </TabPanel>
      </Drawer>
    );
  }, [
    open,
    openTableOrders,
    openPrints.open,
    openTotal,
    value,
    current,
    global_quantity,
    tables,
    table_state,
    state.open,
    state2.open,
    order_loading,
  ]);
}
// PropTypes
DrawerProducts.defaultProps = {
  direction: "left",
  variant: "temporary",
  open: false,
  close: null,
  background: "",
};
DrawerProducts.propTypes = {
  direction: PropTypes.oneOf(["left", "right", "top", "bottom"]),
  variant: PropTypes.oneOf(["permanent", "persistent", "temporary"]),
  open: PropTypes.bool,
  close: PropTypes.func,
  background: PropTypes.string,
};
// Connect to Store State
const mapStateToProps = (state) => {
  const { category, product, orders, tables } = state;
  return {
    categories: category.payload,
    products: product.payload,
    tables: tables.payload,
    orders_list: product.orders,
    current: product.current,
    orders_detail_payload: orders.orders_detail,
    order_loading: orders.loading,
  };
};
// Functions to dispatching
const set_orders = (payload) => orders(payload);
const more_quantity = (id) => more(id);
const less_quantity = (id) => less(id);
const remove_product = (id) => remove(id);
// Binding an object full of action creators
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ set_orders }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(DrawerProducts);
