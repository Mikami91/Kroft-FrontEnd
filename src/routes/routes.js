// Pages
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Dashboard,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/sales",
    name: "Sales",
    component: Login,
  },
  {
    path: "/collects",
    name: "Collects",
    component: Login,
  },
];

export default routes;
