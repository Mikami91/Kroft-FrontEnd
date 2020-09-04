// Dependencies
import React, { Fragment, useState, useMemo, useEffect } from "react";
import { withRouter } from "react-router-dom";
// Conecction to Store
import { connect } from 'react-redux';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
// @material-ui/icons
import MenuIcon from "@material-ui/icons/Menu";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Explore from "@material-ui/icons/Explore";
import Face from "@material-ui/icons/Face";
// Layouts
import Sidebar from "../layouts/Sidebars/Sidebar.js";
// Core Components
import CustomAppBar from "../components/AppBar/CustomAppBar";
import TabPanel from "../components/Panel/TabPanel";
import SidebarList from "../components/List/SidebarList";
// Functions
import { employeeShow } from "../functions/employeeFunctions";
import { environmentShow } from "../functions/environmentFunctions";
import { tableShow } from "../functions/tableFunctions";
import { printCategoryShow } from "../functions/printCategoryFunctions";
import { categoryShow } from "../functions/categoryFunctions";
import { subcategoryShow } from "../functions/subcategoryFunctions";
import { productShow } from "../functions/productFunctions";
import { customerShow } from "../functions/customerFunctions";
import { orderShow } from "../functions/orderFunctions";
// Events
import { handleEvents } from '../events';
// Assets
import logo from "../assets/img/brands/kroft-horizontal.svg";
// Styles
import styles from "../styles/pages/DashboardStyle.js";

const useStyles = makeStyles(styles);

function DashboardPage({ employees, loading }) {

  // Loading payloads state
  const [is_payload, set_is_payload] = useState(false);
  // TabPanel Swipeables Views
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // Change Desktop and Mobile display
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Events start
  handleEvents();

  // Refresh fetches
  const handleRefresh = () => {
    // employeeShow();
    // environmentShow();
    // tableShow();
    printCategoryShow();
    // categoryShow();
    // subcategoryShow();
    // productShow();
    // customerShow();
    // orderShow();
  }

  // Payloads
  useEffect(() => {
    if (is_payload === false) {

      handleRefresh();

      // Change is_payload state
      set_is_payload(true);
    }
  }, [is_payload, employees]);

  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.root}>
        <CssBaseline />

        <nav className={classes.drawer}>
          {/* Small Display Render */}

          <Hidden mdUp implementation="css">
            {/* AppBar Render */}

            <CustomAppBar
              gutters
              position="fixed"
              color="primary"
              variant="dense"
              drawer
              leftButtons={[
                {
                  type: "icon",
                  text: "Menu",
                  color: "default",
                  icon: MenuIcon,
                  size: "large",
                  disabled: false,
                  onClick: handleDrawerToggle,
                },
                {
                  type: "icon",
                  text: "Perfil",
                  color: "default",
                  icon: AccountBoxIcon,
                  size: "large",
                  disabled: false,
                  onClick: null,
                },
              ]}
              rightButtons={[
                {
                  type: "button",
                  text: "Ventas",
                  color: "default",
                  icon: Explore,
                  size: "medium",
                  variant: "text",
                  disabled: false,
                  onClick: null,
                },
                {
                  type: "button",
                  text: "Cobranzas",
                  color: "default",
                  icon: Face,
                  size: "medium",
                  variant: "text",
                  disabled: false,
                  onClick: null,
                },
              ]}
            />

            {/* Panel Render */}

            <Drawer
              variant="temporary"
              anchor="left"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              <Typography className={classes.titleV}>KROFT V</Typography>
              <Divider />
              <Sidebar
                onClick={handleDrawerToggle}
                value={value}
                change={handleChange}
              />
            </Drawer>
          </Hidden>

          {/* Large display Render */}

          <Hidden smDown implementation="css">
            {/* AppBar Render */}

            <CustomAppBar
              position="fixed"
              color="primary"
              variant="regular"
              drawer
              leftButtons={[
                {
                  type: "button",
                  text: "Perfil",
                  color: "default",
                  icon: AccountBoxIcon,
                  size: "small",
                  variant: "text",
                  disabled: false,
                  onClick: null,
                },
              ]}
              rightButtons={[
                {
                  type: "button",
                  text: "Ventas",
                  color: "default",
                  icon: Explore,
                  size: "small",
                  variant: "text",
                  disabled: false,
                  onClick: null,
                },
                {
                  type: "button",
                  text: "Cobranzas",
                  color: "default",
                  icon: Face,
                  size: "small",
                  variant: "text",
                  disabled: false,
                  onClick: null,
                },
              ]}
            />

            {/* Panel Render */}

            <Drawer
              variant="permanent"
              anchor="left"
              open
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {/* <Typography className={classes.titleH}>KROFT H</Typography> */}
              <img
                alt="Logo"
                src={logo}
                style={{
                  width: "100%",
                  height: "15%",
                  padding: 10,
                  backgroundColor: "#aaaaaa",
                }}
              />

              <Divider />
              <Sidebar value={value} change={handleChange} />
            </Drawer>
          </Hidden>
        </nav>

        {/* Contents Render */}

        <div className={classes.rootMenu}>
          {SidebarList.map((list, key) => {
            return useMemo(() => {
              return (
                <TabPanel key={key} value={value} index={key} classes={classes}>
                  <Grid
                    container
                    className={classes.content}
                    justify="center"
                    alignItems="center"
                  >
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}
                      elevation={6}
                      square="true"
                    // className={classes.container}
                    >
                      <list.component />
                    </Grid>
                  </Grid>
                </TabPanel>
              );
            }, [SidebarList, value]);
          })}
        </div>
      </div>
    </Fragment>
  );
};
// Connect to Store State
const mapStateToProps = (state) => {
  const { employee, environment, table, product } = state;
  return {
    employees: employee.payload,
    loading: employee.loading,
    environments: environment,
    // loading: environment.loading,
    tables: table.payload,
    orders_list: product.orders,
    current: product.current,
  }
};
// // Functions to dispatching
// const open_products = (payload) => (open(payload));
// const close_products = (value) => (close(value));
// // Binding an object full of action creators
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ open_products, close_products }, dispatch);
// };

export default withRouter(connect(mapStateToProps, null)(DashboardPage));
