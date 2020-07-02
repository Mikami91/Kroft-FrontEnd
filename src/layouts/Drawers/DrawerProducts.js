// Dependencies
import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
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
import { tables } from "../../variables/tables";
import { categories } from "../../variables/categories";
import { animes } from "../../variables/animes";
import { products } from "../../variables/products";
// Styles
import styles from "../../styles/components/drawerStyle.js";

const useStyles = makeStyles(styles);

function DrawerProducts(props) {
  const { direction, variant, open, close, background, table } = props;
  // Categories index State
  const [value, setValue] = useState(0);
  const handleChangeIndex = (e, newValue) => {
    setValue(newValue);
  };
  // State for Modal Orders
  const [openOrders, setOpenOrders] = useState(false);
  const handleOpenOrders = () => setOpenOrders(true);
  const handleCloseOrders = () => setOpenOrders(false);
  // State for Modal Prints
  const [openPrints, setOpenPrints] = useState(false);
  const handleOpenPrints = () => setOpenPrints(true);
  const handleClosePrints = () => setOpenPrints(false);
  // State for Modal Total Amount
  const [openTotal, setOpenTotal] = useState(false);
  const handleOpenTotal = () => setOpenTotal(true);
  const handleCloseTotal = () => setOpenTotal(false);

  const handleOnClick = (arg) => alert(arg);

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
                      keyCategory="id_category"
                      keySubcategory="id_subcategory"
                      filter={index.id}
                      onClick={handleOpenTotal}
                      color="secondary"
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
            primary: table.name,
            secondary: table.environment_name,
            color: table.state === 0 ? "success" : table.state === 1 ? "danger" : table.state === 2 ? "warning" : "gray",
            type: "icon",
            icon: TableChartRoundedIcon
          }}
          fabButton={{
            disabled: false,
            color: "secondary",
            label: "Lista de ordenes",
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
              variant: "h4",
              margin: true,
              large: true,
              bold: true,
            },
            {
              type: "text",
              text: `Bs. ${table.amount}`,
              variant: "h4",
              color: "warning",
              margin: true,
              large: true,
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
          open={openOrders}
          close={handleCloseOrders}
          title="Lista de ordenes"
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
                  align: "left",
                  color: "default",
                  colSpan: 2,
                },
                {
                  field: "price",
                  type: "text",
                  align: "center",
                  variant: "h6",
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
                  align: "center",
                  variant: "h6",
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
              variant: "h6",
              display: "inline",
            },
            {
              type: "text",
              text: " 258 Bs.",
              align: "right",
              margin: true,
              variant: "h6",
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
          title="Historial de impresiones"
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
          maxWidth="sm"
          fullWidth
        />

        <CustomModal
          open={openTotal}
          close={handleCloseTotal}
          title="Cuenta total"
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
              variant: "h6",
              margin: true,
              // color: "warning",
            },
            {
              type: "text",
              text: "258 Bs.",
              variant: "h6",
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
  }, [open, openOrders, openPrints, openTotal, value]);
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

export default DrawerProducts;
