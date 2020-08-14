// Views
import Started from '../../views/Dashboard/Started';
import Employees from '../../views/Dashboard/Employees';
import Providers from '../../views/Dashboard/Providers';
import Environments from '../../views/Dashboard/Environments';
// import Tables from '../../views/Dashboard/Tables';
// import Categories from '../../views/Dashboard/Categories';
// import Subcategories from '../../views/Dashboard/Subcategories';
import Products from '../../views/Dashboard/Products';
// @material-ui/icons
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import DeckRoundedIcon from '@material-ui/icons/DeckRounded';
import FastfoodRoundedIcon from '@material-ui/icons/FastfoodRounded';
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';

const SidebarList = [
  {
    name: "Personal",
    icon: GroupRoundedIcon,
    component: Employees,
  },
  {
    name: "Inicio",
    icon: DashboardRoundedIcon,
    component: Started,
  },
  // {
  //   name: "Personal",
  //   icon: GroupRoundedIcon,
  //   component: Employees,
  // },
  {
    name: "Ambientes",
    icon: DeckRoundedIcon,
    component: Environments,
  },
  {
    name: "Productos",
    icon: FastfoodRoundedIcon,
    component: Products,
  },
  {
    name: "Proveedores",
    icon: PeopleRoundedIcon,
    component: Providers,
  },
  // {
  //   name: "Reportes",
  //   icon: DescriptionRoundedIcon,
  //   component: "Reportes",
  // },
  // {
  //   name: "Almacenes",
  //   icon: AssessmentRoundedIcon,
  //   component: "Almacenes",
  // },
  // {
  //   name: "Ajustes",
  //   icon: SettingsRounded,
  //   component: "Ajustes",
  // },


  // {
  //   name: "Inicio",
  //   icon: DashboardRoundedIcon,
  //   component: Started,
  // },
  // {
  //   name: "Personal",
  //   icon: GroupRoundedIcon,
  //   component: Employees,
  // },
  // {
  //   name: "Proveedores",
  //   icon: SettingsRounded,
  //   component: Providers,
  // },
  // {
  //   name: "Ambientes",
  //   icon: DeckRoundedIcon,
  //   component: Environments,
  // },
  // {
  //   name: "Mesas",
  //   icon: TableChartRounded,
  //   component: Tables,
  // },
  // {
  //   name: "Categorías",
  //   icon: DescriptionRoundedIcon,
  //   component: Categories,
  // },
  // {
  //   name: "Subcategorías",
  //   icon: AssessmentRoundedIcon,
  //   component: Subcategories,
  // },
  // {
  //   name: "Productos",
  //   icon: FastfoodRoundedIcon,
  //   component: Products,
  // },
];

export default SidebarList;
