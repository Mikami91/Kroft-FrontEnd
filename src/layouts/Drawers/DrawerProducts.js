// Dependencies
import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
// Conecction to Store
import { connect } from 'react-redux';
// Actions Creators
import { bindActionCreators } from 'redux';
import { orders } from '../../redux/actions/creators/productCreator';
// UI Material Components
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
// core components
import AppBarIcons from "../../components/AppBar/AppBarIcons.js";
import FooterAppBar from "../../components/Footer/FooterAppBar.js";
import TabPanel from "../../components/Panel/TabPanel";
import GridProducts from "../../components/Grid/GridProducts";
import CustomModal from "../../components/Modal/CustomModal.js";
import CustomTableList from "../../components/Table/CustomTableList.js";
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
import TableChartRoundedIcon from "@material-ui/icons/TableChartRounded";

// Assets
import image from "../../assets/img/backgrounds/productbackground.jpg";

// Variables
// import { tables } from "../../variables/tables";
// import { categories } from "../../variables/categories";
import { animes } from "../../variables/animes";
// import { products } from "../../variables/products";

// Styles
import styles from "../../styles/components/drawerStyle.js";

const useStyles = makeStyles(styles);

function DrawerProducts(props) {
  const {
    /* Redux */
    categories, subcategories, products, orders_list, current, loading,
    /* Props */
    direction, variant, open, close, background, table } = props;

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
  const [openPrints, setOpenPrints] = useState(false);
  const handleOpenPrints = () => setOpenPrints(true);
  const handleClosePrints = () => setOpenPrints(false);

  // State for Modal Total Amount
  const [openTotal, setOpenTotal] = useState(false);
  const handleOpenTotal = () => setOpenTotal(true);
  const handleCloseTotal = () => setOpenTotal(false);

  // Order make function
  const handleSetOrder = (arg) => {
    set_orders({
      table_id: current.table_id,
      environment_id: current.environment_id,
      ...arg
    });
  };

  let global_quantity = 0;
  if (open === true) {
    let env_index = orders_list.findIndex(index => index.environment_id === current.environment_id);
    let table_index = orders_list[env_index].tables.findIndex(index => index.table_id === current.table_id);
    global_quantity = orders_list[env_index].tables[table_index].global_quantity;
  }

  const handleOnClick = (arg) => alert(arg);

  // Styles
  const classes = useStyles();

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
        <AppBarIcons
          color="inherit"
          selectColor="secondary"
          hoverColor="secondary"
          data={categories}
          imagePath="images/categories/"
          value={value}
          onChange={handleChangeIndex}
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
            color: table.is_busy === 0 ? "success" : table.is_busy === 1 ? "danger" : table.is_busy === 2 ? "warning" : "gray",
            type: "icon",
            icon: TableChartRoundedIcon
          }}
          fabButton={{
            disabled: false,
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
              text: "/Kroft-FrontEnd/sales",
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
              text: `Bs. ${table.amount}`,
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
              disabled: false,
              onClick: handleOpenPrints,
            },
            {
              type: "icon",
              text: "Cuenta total",
              color: "default",
              icon: ListAltIcon,
              edge: false,
              size: "large",
              disabled: false,
              onClick: handleOpenTotal,
            },
            {
              type: "fab",
              text: "Enviar orden",
              color: "primary",
              icon: SendIcon,
              edge: "end",
              size: "large",
              disabled: false,
              onClick: () => {
                alert("Enviar orden");
              },
            },
          ]}
        />

        <CustomModal
          // background={"https://source.unsplash.com/random"}
          open={openTableOrders}
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
                  onClick: handleOnClick,
                },
                {
                  field: "name",
                  type: "text",
                  fontSize: "default",
                  align: "left",
                  color: "default",
                  colSpan: 2,
                },
                {
                  field: "price",
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
                  onClick: handleOnClick,
                },
                {
                  field: "quantity",
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
                  onClick: handleOnClick,
                },
                {
                  field: "delete",
                  type: "icon",
                  size: "medium",
                  align: "center",
                  icon: DeleteIcon,
                  iconColor: "secondary",
                  onClick: handleOnClick,
                },
              ]}
              data={animes}
            />
          }
          leftButtons={[
            {
              type: "button",
              text: "Eliminar",
              color: "danger",
              variant: "contained",
              icon: DeleteSweepIcon,
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
              text: " 258 Bs.",
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
            },
          ]}
          scroll="paper"
          maxWidth="md"
          fullWidth
        />

        <CustomModal
          open={openPrints}
          close={handleClosePrints}
          title={{
            text: "Historial de impresiones",
            size: "medium",
          }}
          content={
            <CustomTableList
              padding="none"
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
                  text: "Acccion",
                  align: "center",
                },
              ]}
              columns={[
                {
                  field: "id",
                  type: "text",
                  align: "center",
                  color: "default",
                  colSpan: 1,
                },
                {
                  field: "name",
                  type: "text",
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
                  iconColor: "inherit",
                  onClick: handleOnClick,
                },
              ]}
              data={animes}
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
            <CustomTableList
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
                  field: "name",
                  type: "text",
                  align: "left",
                  color: "default",
                  colSpan: 2,
                },
                {
                  field: "price",
                  type: "text",
                  align: "right",
                  variant: "h6",
                  color: "warning",
                },
                {
                  field: "quantity",
                  type: "text",
                  align: "right",
                  variant: "h6",
                  color: "warning",
                },
              ]}
              data={animes}
            />
          }
          leftButtons={[
            {
              field: "delete",
              type: "icon",
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
              size: "medium",
              margin: true,
              // color: "warning",
            },
            {
              type: "text",
              text: "258 Bs.",
              size: "medium",
              margin: true,
              color: "warning",
            },
          ]}
          scroll="paper"
          maxWidth="sm"
          fullWidth
        />
      </Drawer>
    );
  }, [open, openTableOrders, openPrints, openTotal, value, global_quantity]);
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
  const { category, subcategory, product } = state;
  return {
    categories: category.payload.filter(dataList => dataList.state === 1),
    loading: category.loading,
    subcategories: subcategory.payload.filter(dataList => dataList.state === 1),
    products: product.payload.filter(dataList => dataList.state === 1),
    orders_list: product.orders,
    current: product.current,
  }
};
// Functions to dispatching
const set_orders = (payload) => (orders(payload));
// Binding an object full of action creators
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ set_orders }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(DrawerProducts);
