// Dependencies
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Explore from "@material-ui/icons/Explore";
import Face from "@material-ui/icons/Face";
// @material-ui/icons
import MenuIcon from "@material-ui/icons/Menu";
import React, { Fragment, useEffect, useState } from "react";
// Conecction to Store
import { connect } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";
// Assets
import logo from "../../assets/img/brands/kroft-horizontal.svg";
// Core Components
import CustomAppBar from "../../components/AppBar/CustomAppBar";
import CustomLoading from "../../components/Loading/CustomLoading";
import CustomSnackbar from "../../components/Snackbar/CustomSnackbar";
// Events
import { dashboardWebsocket } from "../../events";
// Functions
import {
  adminLogout,
  adminShow,
  isLoggedAdmin,
} from "../../functions/cruds/adminFunctions";
import { boxShow } from "../../functions/cruds/boxFunctions";
import { categoryShow } from "../../functions/cruds/categoryFunctions";
import { companyShow } from "../../functions/cruds/companyFunctions";
import { customerShow } from "../../functions/cruds/customerFunctions";
import { employeeShow } from "../../functions/cruds/employeeFunctions";
import { environmentShow } from "../../functions/cruds/environmentFunctions";
import { orderShow } from "../../functions/cruds/orderFunctions";
import { printCategoryShow } from "../../functions/cruds/printCategoryFunctions";
import { productShow } from "../../functions/cruds/productFunctions";
import { rolShow } from "../../functions/cruds/rolFunctions";
import { subcategoryShow } from "../../functions/cruds/subcategoryFunctions";
import {
  isLoggedSuperAdmin,
  superAdminShow,
  superAdminLogout,
} from "../../functions/cruds/superAdminFunctions";
import { supplierShow } from "../../functions/cruds/supplierFunctions";
import { tableShow } from "../../functions/cruds/tableFunctions";
// Hooks
import { useLogoutModal } from "../../hooks/useModal";
import LogoutConfirmation from "../../layouts/Dialogs/LogoutConfirmation";
// Layouts
import Sidebar from "../../layouts/Sidebars/Sidebar.js";
// Actions Creators
import {
  dangerSnackbar,
  hideSnackbar,
} from "../../redux/actions/creators/snackbarCreator";
// Styles
import styles from "../../styles/pages/DashboardStyle.js";
// Local components
import SideBar from "./components/SideBar";

const useStyles = makeStyles(styles);

function DashboardPage(props) {
  // Props
  const {
    // companies_loading,
    superadmin_loading,
    admins_loading,
    // boxes_loading,
    // roles_loading,
    // employees_loading,
    // environments_loading,
    // tables_loading,
    // printcategories_loading,
    // categories_loading,
    // subcategories_loading,
    // products_loading,
    // customers_loading,
    // suppliers_loading,
    // orders_loading,
    // collects_loading,
    snackbar_show,
    snackbar_message,
    snackbar_severity,
  } = props;

  let history = useHistory();

  // Is Logged Employee state
  const [isLogged, setIsLogged] = useState(false);

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

  // Events
  dashboardWebsocket();

  // Dispatches
  const handleCloseSnackbar = () => hideSnackbar();

  // Refresh fetches
  const handleRefresh = () => {
    companyShow();
    adminShow();
    boxShow();
    rolShow();
    employeeShow();
    environmentShow();
    tableShow();
    printCategoryShow();
    categoryShow();
    subcategoryShow();
    productShow();
    customerShow();
    supplierShow();
    orderShow();
  };

  let rol_type = localStorage.getItem("rol");

  const getLoginPage = () => {
    // Empty local storage
    localStorage.setItem("user", "");
    localStorage.setItem("admin_id", "");
    localStorage.setItem("token", "");
    localStorage.setItem("rol", "");
    localStorage.setItem("head_area", "");
    localStorage.setItem("first_name", "");
    localStorage.setItem("last_name", "");
    // Redirect to login page
    history.push("/");
  };

  useEffect(() => {
    if (isLogged === false) {
      switch (rol_type) {
        case "admin":
          isLoggedAdmin({
            token: localStorage.getItem("token"),
            admin_id: localStorage.getItem("admin_id"),
            rol: localStorage.getItem("rol"),
          }).then((response) => {
            if (typeof response === "string") {
              if (response.includes("401")) {
                dangerSnackbar("Autentificación incorrecta, inicie sesión.");
                history.push("/");
              }
            }
            if (typeof response !== "undefined") {
              if (response.success === true) {
                setIsLogged(true);
                handleRefresh();
              } else {
                dangerSnackbar("Autentificación incorrecta, inicie sesión.");
                history.push("/");
              }
            }
          });
          break;

        case "super_admin":
          isLoggedSuperAdmin({
            token: localStorage.getItem("token"),
            admin_id: localStorage.getItem("admin_id"),
            rol: localStorage.getItem("rol"),
          }).then((response) => {
            if (typeof response === "string") {
              if (response.includes("401")) {
                dangerSnackbar("Autentificación incorrecta, inicie sesión.");
                history.push("/");
              }
            }
            if (typeof response !== "undefined") {
              if (response.success === true) {
                setIsLogged(true);
                superAdminShow();
                handleRefresh();
              } else {
                dangerSnackbar("Autentificación incorrecta, inicie sesión.");
                history.push("/");
              }
            }
          });
          break;

        default:
          getLoginPage();
          break;
      }
    }
  }, [isLogged]);

  const classes = useStyles();

  const [openLogout, toggleLogout] = useLogoutModal();
  // Logout function
  const handleLogout = (e) => {
    if (openLogout) {
      toggleLogout();
    }
    e.preventDefault();

    switch (rol_type) {
      case "admin":
        adminLogout({
          token: localStorage.getItem("token"),
        }).then((response) => {
          if (typeof response !== "undefined") {
            if (response.success === true) {
              getLoginPage();
            }
          }
        });
        break;

      case "super_admin":
        superAdminLogout({
          token: localStorage.getItem("token"),
        }).then((response) => {
          if (typeof response !== "undefined") {
            if (response.success === true) {
              getLoginPage();
            }
          }
        });
        break;

      default:
        getLoginPage();
        break;
    }
  };

  let user_complete_name = `${localStorage.getItem(
    "first_name"
  )} ${localStorage.getItem("last_name")}`;

  return (
    <Fragment>
      <CustomLoading
        open={
          admins_loading || superadmin_loading
          // isLogged
          // admins ||
          // roles ||
          // employees ||
          // environments ||
          // tables ||
          // printcategories ||
          // categories ||
          // subcategories ||
          // products ||
          // customers ||
          // suppliers ||
          // orders ||
          // collects
        }
      />
      <CustomSnackbar
        open={snackbar_show}
        message={snackbar_message}
        severity={snackbar_severity}
        onClose={handleCloseSnackbar}
      />

      {isLogged ? (
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
                    text: user_complete_name,
                    color: "default",
                    icon: AccountBoxIcon,
                    size: "large",
                    disabled: false,
                    onClick: toggleLogout,
                  },
                ]}
                // rightButtons={[
                //   {
                //     type: "button",
                //     text: "Ventas",
                //     color: "default",
                //     icon: Explore,
                //     size: "medium",
                //     variant: "text",
                //     disabled: false,
                //     onClick: null,
                //   },
                //   {
                //     type: "button",
                //     text: "Cobranzas",
                //     color: "default",
                //     icon: Face,
                //     size: "medium",
                //     variant: "text",
                //     disabled: false,
                //     onClick: null,
                //   },
                // ]}
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
                    text: user_complete_name,
                    color: "default",
                    icon: AccountBoxIcon,
                    size: "small",
                    variant: "text",
                    disabled: false,
                    onClick: toggleLogout,
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
          <SideBar value={value} refreshRender={isLogged} />

          <LogoutConfirmation
            open={openLogout}
            close={toggleLogout}
            handleLogout={handleLogout}
          />
        </div>
      ) : null}
    </Fragment>
  );
}
// Connect to Store State
const mapStateToProps = (state) => {
  const {
    company,
    superadmin,
    admin,
    rol,
    employee,
    environments,
    tables,
    printcategory,
    category,
    subcategory,
    product,
    customer,
    supplier,
    orders,
    collects,
    snackbar,
  } = state;
  return {
    companies_loading: company.payload,
    superadmin_loading: superadmin.loading,
    admins_loading: admin.loading,
    roles_loading: rol.loading,
    employees_loading: employee.loading,
    environments_loading: environments.loading,
    tables_loading: tables.loading,
    printcategories_loading: printcategory.loading,
    categories_loading: category.loading,
    subcategories_loading: subcategory.loading,
    products_loading: product.loading,
    customers_loading: customer.loading,
    suppliers_loading: supplier.loading,
    orders_loading: orders.loading,
    collects_loading: collects.loading,
    snackbar_show: snackbar.show,
    snackbar_message: snackbar.message,
    snackbar_severity: snackbar.severity,
  };
};
// // Functions to dispatching
// const open_products = (payload) => (open(payload));
// const close_products = (value) => (close(value));
// // Binding an object full of action creators
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ open_products, close_products }, dispatch);
// };

export default withRouter(connect(mapStateToProps, null)(DashboardPage));
