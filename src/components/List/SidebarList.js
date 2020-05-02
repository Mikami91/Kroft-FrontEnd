// Pages
import Login from "../../pages/Login";
// Views
import Started from '../../views/Dashboard/Started';
import Employees from '../../views/Dashboard/Employees';
import Environments from '../../views/Dashboard/Environments';
import Tables from '../../views/Dashboard/Tables';
import Categories from '../../views/Dashboard/Categories';
import Subcategories from '../../views/Dashboard/Subcategories';
import Products from '../../views/Dashboard/Products';
// @material-ui/icons
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import DeckRoundedIcon from '@material-ui/icons/DeckRounded';
import TableChartRounded from '@material-ui/icons/TableChartRounded';
import FastfoodRoundedIcon from '@material-ui/icons/FastfoodRounded';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import AssessmentRoundedIcon from '@material-ui/icons/AssessmentRounded';
import SettingsRounded from '@material-ui/icons/SettingsRounded';

const SidebarList = [
  {
    name: "Inicio",
    icon: DashboardRoundedIcon,
    component: Started,
  },
  {
    name: "Personal",
    icon: GroupRoundedIcon,
    component: Employees,
  },
  {
    name: "Ambientes",
    icon: DeckRoundedIcon,
    component: Environments,
  },
  {
    name: "Mesas",
    icon: TableChartRounded,
    component: Tables,
  },
  {
    name: "Categorías",
    icon: DescriptionRoundedIcon,
    component: Categories,
  },
  {
    name: "Subcategorías",
    icon: AssessmentRoundedIcon,
    component: Subcategories,
  },
  {
    name: "Productos",
    icon: FastfoodRoundedIcon,
    component: Products,
  },
  // {
  //   name: "Ambientes",
  //   icon: DeckRoundedIcon,
  //   component: Login,
  // },
  // {
  //   name: "Mesas",
  //   icon: TableChartRounded,
  //   component: Login,
  // },
  // {
  //   name: "Productos",
  //   icon: FastfoodRoundedIcon,
  //   component: Login,
  // },
  // {
  //   name: "Ajustes",
  //   icon: SettingsRounded,
  //   component: Login,
  // },
];

export default SidebarList;
