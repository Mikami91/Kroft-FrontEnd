// Pages
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Sales from "../pages/Sales";

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
  // {
  //   path: "/collects",
  //   name: "Collects",
  //   component: Login,
  // },
];

export default routes;
