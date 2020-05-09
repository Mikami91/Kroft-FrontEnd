// Pages
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Sales from "../pages/Sales";

const routes = [
  {
    path: "https://mikami91.github.io/Kroft-FrontEnd/",
    name: "Login",
    component: Login,
  },
  {
    path: "https://mikami91.github.io/Kroft-FrontEnd/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "https://mikami91.github.io/Kroft-FrontEnd/sales",
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
