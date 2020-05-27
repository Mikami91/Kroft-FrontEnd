// Dependencies
import React, { Fragment, useState } from "react";
import SwipeableViews from "react-swipeable-views";

import { makeStyles } from "@material-ui/core/styles";

//import { bindActionCreators } from 'redux'
// Conecction to Store
// import { connect } from 'react-redux';
// UI Material Components
import {
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  Slide,
} from "@material-ui/core";

// @material-ui/icons
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import PersonIcon from '@material-ui/icons/Person';
import RefreshIcon from '@material-ui/icons/Refresh';
import FormatListNumberedRtlIcon from '@material-ui/icons/FormatListNumberedRtl';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';

import UndoIcon from "@material-ui/icons/Undo";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import PrintIcon from "@material-ui/icons/Print";
import ListAltIcon from "@material-ui/icons/ListAlt";
import SendIcon from "@material-ui/icons/Send";
// core components
import AppBarTabs from '../../components/AppBar/AppBarTabs.js';
import TabPanel from '../../components/Panel/TabPanel';
import GridTables from '../../components/Grid/GridTables';
import FooterAppBar from '../../components/Footer/FooterAppBar.js';

import AppBarIcons from "../../components/AppBar/AppBarIcons.js";
import GridProducts from "../../components/Grid/GridProducts";
import CustomModal from "../../components/Modal/CustomModal.js";
// Variables
import { environments } from '../../variables/environments';
import { tables } from '../../variables/tables';
import { categories } from "../../variables/categories";

import styles from "../../styles/pages/SalesStyle.js";
const useStyles = makeStyles(styles);


// Transsition effect
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" in={true} ref={ref} {...props} />;
});

function Products({ open, close, handleChange }) {

      // State for Panels
  const [value, setValue] = useState(0);
  // State for Swipeable
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const classes = useStyles();


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
        <DialogContent
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/326311/pexels-photo-326311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")',
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

          {/* <div className={classes.rootMenu}> */}
          <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
            {categories.map((index, key) => {
              return (
                <TabPanel key={key} value={value} index={key}>
                  <Grid
                    container
                    spacing={0}
                    direction="row"
                    className={classes.content}
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
          {/* </div> */}
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
}

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
