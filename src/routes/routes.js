// Pages
import Dashboard from "../pages/Dashboard";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Dashboard,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },{
    path: "/sales",
    name: "Sales",
    component: Dashboard,
  },{
    path: "/collects",
    name: "Collects",
    component: Dashboard
  }
];

export default routes;
