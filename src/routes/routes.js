// Pages
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Sales from "../pages/Sales";

const routes = [
  {
    path: "/Kroft-FrontEnd",
    name: "Login",
    component: Login,
  },
  {
    path: "/Kroft-FrontEnd/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/Kroft-FrontEnd/sales",
    name: "Sales",
    component: Sales,
  },
  // {
  //   path: "/collects",
  //   name: "Collects",
  //   component: Login,
  // },
];

export default routes;
