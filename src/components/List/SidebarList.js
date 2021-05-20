// Views
// import Started from '../../views/Dashboard/Started';
import Employees from '../../views/Dashboard/Employees';
import Environments from '../../views/Dashboard/Environments';
import Products from '../../views/Dashboard/Products';
import Customers from '../../views/Dashboard/Customers';
import OpenBoxes from '../../views/Dashboard/OpenBoxes';
import Reports from '../../views/Dashboard/Reports';
import Settings from '../../views/Dashboard/Settings';
// @material-ui/icons
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import DeckRoundedIcon from '@material-ui/icons/DeckRounded';
import FastfoodRoundedIcon from '@material-ui/icons/FastfoodRounded';
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';

const SidebarList = [
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
    name: "Productos",
    icon: FastfoodRoundedIcon,
    component: Products,
  },
  {
    name: "Proveedores",
    icon: PeopleRoundedIcon,
    component: Customers,
  },
  {
    name: "Cajas",
    icon: OpenInBrowserIcon,
    component: OpenBoxes,
  },
  {
    name: "Reportes",
    icon: DescriptionRoundedIcon,
    component: Reports,
  },
  {
    name: "Ajustes",
    icon: SettingsRoundedIcon,
    component: Settings,
  },
];

export default SidebarList;
