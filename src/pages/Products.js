// Dependencies
import React, { Fragment, useState } from "react";
import { withRouter } from "react-router-dom";
import SwipeableViews from "react-swipeable-views";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
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
import AppBarTabs from '../components/AppBar/AppBarTabs.js';
import TabPanel from '../components/Panel/TabPanel';
import GridTables from '../components/Grid/GridTables';
import FooterAppBar from '../components/Footer/FooterAppBar.js';

import AppBarIcons from "../components/AppBar/AppBarIcons.js";
import GridProducts from "../components/Grid/GridProducts";
import CustomModal from "../components/Modal/CustomModal.js";
// Variables
import { environments } from '../variables/environments';
import { tables } from '../variables/tables';
import { categories } from "../variables/categories";
// Styles
import styles from "../styles/pages/SalesStyle.js";

const useStyles = makeStyles(styles);

function ProductsPage(props) {
  const { handleClose } = props;
  // console.log(props.location.state);
  // State for Panels
  const [value, setValue] = useState(0);
  const handleChange = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  // State for Modal
  const [open, setOpen] = useState(false);
  const handleOpenList = () => {
    setOpen(true);
    console.log(open);
  };
  const handleCloseList = () => {
    setOpen(false);
  };
  // State for Swipeable
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const handleBack = (index) => {
    setValue(index);
  };
  const classes = useStyles();
  return (
    <Fragment>
      <AppBarIcons
        color="primary"
        selectColor="secondary"
        hoverColor="secondary"
        data={categories}
        value={value}
        onChange={handleChange}
      />

      <div className={classes.rootMenu}>
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
                    onClick={handleOpenList}
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
            onClick: handleClose
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

      {/* <CustomModal
        open={open}
        close={handleClose}
        // scroll
        // fullWidth
        // maxWidth
        title={
          <AppBarIcons
            color="primary"
            selectColor="secondary"
            hoverColor="secondary"
            data={categories}
            value={value}
            onChange={handleChange}
          />
        }
        content={
          <div className={classes.rootMenu}>
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
                        onClick={handleOpen}
                        color="secondary"
                      />
                    </Grid>
                  </TabPanel>
                );
              })}
            </SwipeableViews>
          </div>
        }
        footer={
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
                text: categories[value].name,
                color: "primary",
                icon: UndoIcon,
                size: "large",
                disabled: false,
                onClick: () => {
                  alert("Salir");
                },
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
        }
      /> */}
    </Fragment>
  );
};

export default withRouter(ProductsPage);
