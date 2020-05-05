// Dependencies
import React from "react";
import PropTypes from "prop-types";
// @material-ui/Componentes
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// Core Components
import SidebarList from "../../components/List/SidebarList";
// Styles
import styles from '../../styles/components/siderbarStyle';

const useStyles = makeStyles(styles);

const Sidebar = (props) => {
  const classes = useStyles();
  const { value, change } = props;
  return (
    <div style={{ height: "100%", overflowY: "auto" }}>
      <BottomNavigation
        showLabels
        value={value}
        className={classes.buttonNavDash}
        onChange={change}
      >
        {SidebarList.map((list, key) => {
          return (
            <BottomNavigationAction
              key={key}
              //classes={{ selected: style }}
              style={{ padding: "5px 15px 5px 15px" }}
              label={<Typography>{list.name}</Typography>}
              value={key}
              icon={<list.icon fontSize="default" />}
            />
          );
        })}
      </BottomNavigation>
    </div>
  );
};

// PropTypes
Sidebar.defaultProps = {
  value: null,
  change: null,
};
Sidebar.propTypes = {
  value: PropTypes.number,
  change: PropTypes.func,
};

export default Sidebar;
