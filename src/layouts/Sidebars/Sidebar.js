// Dependencies
import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
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
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
// Core Components
import CustomAppBar from "../../components/AppBar/CustomAppBar";
import TabPanel from "../../components/Panel/TabPanel";
import MenuList from "../../components/List/MenuList";

const SidebarList = (props) => {
  const { value, change } = props;
  return (
    <BottomNavigation
      showLabels
      value={value}
      //className={style}
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

// PropTypes
SidebarList.defaultProps = {
  value: null,
  change: null,
};

SidebarList.propTypes = {
  value: PropTypes.number,
  change: PropTypes.func,
};

const Sidebar = ({ style }) => {
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

        <CustomAppBar position="fixed" color="secondary">
          <IconButton
            edge="start"
            //className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          
          <Button color="inherit">Login</Button>
        </CustomAppBar>

        <nav className={style.drawer}>
          <Hidden smUp implementation="css">
            <BottomNavigation
              style={{
                "&,&:hover": {
                  color: "#FFFFFF",
                  backgroundColor: "yellow",
                },
              }}
              onClick={handleDrawerToggle}
            />

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
              {/*<div className={style}>
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
                <Divider />*/}
              {/*<SidebarList value={value} change={handleChange} />*/}
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

// PropTypes
Sidebar.propTypes = {
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  ),
};

export default Sidebar;
