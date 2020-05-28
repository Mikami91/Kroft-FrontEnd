// Dependencies
import React, { Fragment, useState, useMemo } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
// UI Material Components
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import UndoIcon from "@material-ui/icons/Undo";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import PrintIcon from "@material-ui/icons/Print";
import ListAltIcon from "@material-ui/icons/ListAlt";
import SendIcon from "@material-ui/icons/Send";
// core components
import TabPanel from "../../components/Panel/TabPanel";
import FooterAppBar from "../../components/Footer/FooterAppBar.js";

import AppBarIcons from "../../components/AppBar/AppBarIcons.js";
import GridProducts from "../../components/Grid/GridProducts";
import CustomModal from "../../components/Modal/CustomModal.js";
// Variables
import { tables } from "../../variables/tables";
import { categories } from "../../variables/categories";

import styles from "../../styles/views/Products/ProductsStyles.js";
const useStyles = makeStyles(styles);

// Transsition effect
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" in={true} ref={ref} {...props} />;
});

function Products(props) {
  const { open, close } = props;
  // State for Panels
  const [value, setValue] = useState(0);
  // State for Swipeable
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  // Styles
  const classes = useStyles();
  // Using useMemo hook
  return useMemo(() => {
    // Render
    return (
      <Fragment>
        <Dialog
          fullScreen
          fullWidth
          maxWidth="xl"
          scroll="paper"
          open={open}
          TransitionComponent={Transition}
        >
          <AppBarIcons
              color="primary"
              selectColor="secondary"
              hoverColor="secondary"
              data={categories}
              value={value}
              onChange={handleChangeIndex}
            />
          {console.log("REner")}
          <DialogContent className={classes.content}>
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
          </DialogContent>
          <DialogActions>
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
                onClick: () => {
                  alert("Lista de ordenes");
                },
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
                {
                  type: "icon",
                  text: "Impresiones",
                  color: "default",
                  // icon: PrintIcon,
                  edge: "start",
                  size: "large",
                  disabled: false,
                  onClick: () => {
                    alert("Impresiones");
                  },
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
                  onClick: () => {
                    alert("Impresiones");
                  },
                },
                {
                  type: "icon",
                  text: "Cuenta total",
                  color: "default",
                  icon: ListAltIcon,
                  edge: false,
                  size: "large",
                  disabled: false,
                  onClick: () => {
                    alert("Cuenta total");
                  },
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
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }, [open, value]);
}
// PropTypes
Products.defaultProps = {
  open: false,
  close: null,
};

Products.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

// Connect to Store State
// const mapStateToProps = state => {
//     const data = state.product.dialogProductList;
//     const { user, environment, table, category, product } = state;
//     return {
//         tableID: data.tableID,
//         tableName: data.tableName,
//         showDialog: data.isOpen,
//         showProgress: user.isFetch || environment.isFetch || table.isFetch || category.isFetch || product.isFetch
//     }
// }

// export default connect(mapStateToProps, null)(Products);
export default Products;
