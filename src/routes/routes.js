// Pages
import Login from "../pages/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import Sales from "../pages/sales/Sales";
import Collects from "../pages/collects/Collects";
import Products from "../pages/Products";
//Kroft-FrontEnd
const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/sales",
    name: "Sales",
    component: Sales,
  },
  {
    path: "/collects",
    name: "Collects",
    component: Collects,
  },
  {
    path: "/products",
    name: "products",
    component: Products,
  },

  // {
  //   path: "/Kroft-FrontEnd/",
  //   name: "Login",
  //   component: Login,
  // },
  // {
  //   path: "/Kroft-FrontEnd/dashboard",
  //   name: "Dashboard",
  //   component: Dashboard,
  // },
  // {
  //   path: "/Kroft-FrontEnd/sales",
  //   name: "Sales",
  //   component: Sales,
  // },
  // {
  //   path: "/Kroft-FrontEnd/collects",
  //   name: "Collects",
  //   component: Collects,
  // },
  // {
  //   path: "/Kroft-FrontEnd/products",
  //   name: "products",
  //   component: Products,
  // },
];

export default routes;
