// Dependencies
import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
// Conecction to Store
import { connect } from "react-redux";
// @material-ui/Componentes
import { CssBaseline, Drawer, Grid, Hidden } from "@material-ui/core";
import {
  BottomNavigation,
  BottomNavigationAction,
  Divider,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
// Components
import NavPills from "../../components/NavPills/NavPills";
//import SidebarList from "../../components/List/SidebarList";
// Layouts
//import DashAppBar from '../appBars/DashAppBar';
// Containers
import TabPanel from "../../components/Panel/TabPanel";
// Menu list
import MenuList from "../../components/List/MenuList";

const SidebarList = (props) => {
  const { value, change } = props;
  return (
    /*<NavPills
      color="rose"
      horizontal={{
        tabsGrid: { xs: 12, sm: 4, md: 4 },
        contentGrid: { xs: 12, sm: 8, md: 8 },
      }}
      value={value}
      onChange={change}
      tabs={MenuList.map((list, key) => {
        return {
          tabButton: list.name,
          tabIcon: list.icon,
          value: key
        };
      })}
    />*/
    <BottomNavigation
      showLabels
      value={value}
      style={{
        height: 63,
        paddingLeft: 5,
        paddingRight: 5,
        display: "grid",
        textAlign: "center",
        lineHeight: 100,
      }}
      onChange={change}
    >
      {MenuList.map((list, key) => {
        return (
          <BottomNavigationAction
            key={key}
            //classes={{ selected: style }}
            style={{ padding: 12 }}
            label={<Typography /*className={style}*/>{list.name}</Typography>}
            value={key}
            icon={<list.icon fontSize="large" />}
          />
        );
      })}
    </BottomNavigation>
  );
};

const DashboardSideBar = ({ style }) => {
  // TabPanel Swipeables Views
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  // Change Desktop and Mobile display
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Fragment>
      <div className={style.root}>
        <CssBaseline />

        {/*<DashAppBar style={style} click={handleDrawerToggle} />*/}
        <nav className={style.drawer} aria-label="mailbox folders">
          <Hidden smUp implementation="css">
            <BottomNavigation style={{ "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: "yellow"

    } }}  onClick={handleDrawerToggle} />

            <Drawer
              variant="temporary"
              anchor="left"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: style.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {
                <SidebarList
                  onClick={handleDrawerToggle}
                  value={value}
                  change={handleChange}
                />
              }
            </Drawer>
          </Hidden>

          <Hidden xsDown implementation="css">
            <Drawer
              variant="permanent"
              anchor="left"
              open
              classes={{
                paper: style.drawerPaper,
              }}
            >
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
                    <Typography variant="h6" className={""}>
                      KROFT
                    </Typography>
                  </ListItem>
                </List>
              </div>
              <Divider />
              <SidebarList value={value} change={handleChange} />
            </Drawer>
          </Hidden>
        </nav>

        <div className={style.rootMenu}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {MenuList.map((list, key) => {
                return (
                  <TabPanel key={key} value={value} index={key} style={style}>
                    {"list.component" + key}
                  </TabPanel>
                );
              })}
            </Grid>
          </Grid>
        </div>
      </div>
    </Fragment>
  );
};

DashboardSideBar.propTypes = {
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  ),
};

// Connect to Store State
const mapStateToProps = (state) => {
  return {
    // index: state.navigation.sideBarIndex
  };
};

//export default connect(mapStateToProps, null)(DashboardSideBar);
export default DashboardSideBar;
