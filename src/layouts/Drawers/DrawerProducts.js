// Dependencies
import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
// UI Material Components
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
// core components
import AppBarIcons from "../../components/AppBar/AppBarIcons.js";
import FooterAppBar from "../../components/Footer/FooterAppBar.js";
import TabPanel from "../../components/Panel/TabPanel";
import Grid from "@material-ui/core/Grid";
import GridProducts from "../../components/Grid/GridProducts";
import CustomModal from "../../components/Modal/CustomModal.js";
// Icons
import UndoIcon from "@material-ui/icons/Undo";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import PrintIcon from "@material-ui/icons/Print";
import ListAltIcon from "@material-ui/icons/ListAlt";
import SendIcon from "@material-ui/icons/Send";
// Variables
import { tables } from "../../variables/tables";
import { categories } from "../../variables/categories";
// Styles
import styles from "../../styles/components/drawerStyle.js";

const useStyles = makeStyles(styles);

function DrawerProducts(props) {
  const { direction, variant, open, close } = props;
  // Categories index State
  const [value, setValue] = useState(0);
  const handleChangeIndex = (index) => {
    setValue(index);
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
          color="primary"
          selectColor="secondary"
          hoverColor="secondary"
          data={categories}
          value={value}
          onChange={handleChangeIndex}
        />

        <div className={classes.content}>
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
                      filter={index.id}
                      data={tables}
                      //   onClick={handleOpenList}
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
          fabButton={{
            disabled: false,
            color: "secondary",
            label: "Lista de ordenes",
            float: false,
            align: "center",
            icon: FormatListBulletedIcon,
            onClick: handleOpenOrders,
          }}
          rightButtons={[
            {
              type: "fab",
              text: "/sales",
              value: "",
              color: "primary",
              icon: UndoIcon,
              size: "large",
              disabled: false,
              onClick: close,
            },
          ]}
          leftButtons={[
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
          open={openOrders}
          close={handleCloseOrders}
          title="Lista de ordenes"
          // content={<EmployeeAdd />}
          maxWidth="sm"
          fullWidth
        />

        <CustomModal
          open={openPrints}
          close={handleClosePrints}
          title="Historial de impresiones"
          // content={<EmployeeAdd />}
          maxWidth="sm"
          fullWidth
        />

        <CustomModal
          open={openTotal}
          close={handleCloseTotal}
          title="Cuenta total"
          // content={<EmployeeAdd />}
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
};
DrawerProducts.propTypes = {
  direction: PropTypes.oneOf(["left", "right", "top", "bottom"]),
  variant: PropTypes.oneOf(["permanent", "persistent", "temporary"]),
  open: PropTypes.bool,
  close: PropTypes.func,
};

export default DrawerProducts;
