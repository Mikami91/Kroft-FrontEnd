// Pages
import Login from "../../pages/Login";
// Views
import Started from '../../views/Dashboard/Started';
// @material-ui/icons
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import DeckRoundedIcon from '@material-ui/icons/DeckRounded';
import TableChartRounded from '@material-ui/icons/TableChartRounded';
import FastfoodRoundedIcon from '@material-ui/icons/FastfoodRounded';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import AssessmentRoundedIcon from '@material-ui/icons/AssessmentRounded';
import SettingsRounded from '@material-ui/icons/SettingsRounded';
import EmployeeLogin from '../../layouts/Forms/EmployeeLogin'

const SidebarList = [
  {
    name: "Inicio",
    icon: DashboardRoundedIcon,
    component: Started,
  },
  {
    name: "Personal",
    icon: GroupRoundedIcon,
    component: EmployeeLogin,
  },
  {
    name: "Ambientes",
    icon: DeckRoundedIcon,
    component: Login,
  },
  {
    name: "Mesas",
    icon: TableChartRounded,
    component: Login,
  },
  {
    name: "Productos",
    icon: FastfoodRoundedIcon,
    component: Login,
  },
  {
    name: "Ajustes",
    icon: SettingsRounded,
    component: Login,
  },
];

export default SidebarList;
