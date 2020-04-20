// Dependencies
import React, { Fragment } from "react";
//import { createSelector } from 'reselect'
// Conecction to Store
import { connect } from "react-redux";
// @material-ui/Componentes
import {
  BottomNavigation,
  BottomNavigationAction,
  Divider,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
// Icons
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import GroupRoundedIcon from "@material-ui/icons/GroupRounded";
import DeckRoundedIcon from "@material-ui/icons/DeckRounded";
import FastfoodRoundedIcon from "@material-ui/icons/FastfoodRounded";
import DescriptionRoundedIcon from "@material-ui/icons/DescriptionRounded";
import AssessmentRoundedIcon from "@material-ui/icons/AssessmentRounded";
import SettingsIcon from "@material-ui/icons/Settings";
// Menu list
import MenuList from "./MenuList";
// Styles
//import { MyStyle } from '../../themes/theme';

const MyStyle = () => {};

const SideBarList = (props) => {
  const { value, change } = props;

  const style = MyStyle();

  return (
    <Fragment>
      <div className={style}>
        <List
          style={{
            position: "fixed",
            zIndex: 999999,
            backgroundColor: "#0c1c26",
            width: 128.5,
          }}
        >
          <ListItem>
            <DashboardRoundedIcon fontSize="large" />
            <Typography variant="h6" className={style}>
              KROFT
            </Typography>
          </ListItem>
        </List>
      </div>
      <Divider />

      <BottomNavigation
        showLabels
        value={value}
        className={style}
        onChange={change}
      >
        {MenuList.map((list, key) => {
          return (
            <BottomNavigationAction
              key={key}
              classes={{ selected: style }}
              style={{ padding: 12 }}
              label={<Typography className={style}>{list.name}</Typography>}
              value={key}
              icon={<list.icon fontSize="large" />}
            />
          );
        })}
      </BottomNavigation>
    </Fragment>
  );
};

// Reselect
/*const selector = createSelector(
  state => state.navigation.sideBarIndex,
  (sideBarIndex) => (sideBarIndex + 1)
)*/

// Connect to Store State
/*const mapStateToProps = (state) => {
  return {
    //sideBarIndex: selector(state)
    sideBarIndex: state.navigation.sideBarIndex
  }
};

// Functions to dispatching
const showSideBarIndex = (value) => (sideBar(value));

// binding an object full of action creators
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ showSideBarIndex }, dispatch)
}*/

//export default connect(null, null)(SideBarList);
export default SideBarList;
