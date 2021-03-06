// Dependencies
import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
// @material-ui/Componentes
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
// Core Components
import CustomAppBar from "../../components/AppBar/CustomAppBar";
import TabPanel from "../../components/Panel/TabPanel";
import SidebarList from "../../components/List/SidebarList";
import Card from "../../components/Card/Card.js";
// @material-ui/icons
import Explore from "@material-ui/icons/Explore";
import Face from "@material-ui/icons/Face";
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
// Styles
import styles from '../../styles/components/siderbarStyle';

const useStyles = makeStyles(styles);

const ListToRender = (props) => {
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
ListToRender.defaultProps = {
  value: null,
  change: null,
};
ListToRender.propTypes = {
  value: PropTypes.number,
  change: PropTypes.func,
};


// Component parent
const Sidebar = () => {
  const classes = useStyles();
  // TabPanel Swipeables Views
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
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
      <div className={classes.root}>
        <CssBaseline />

        <nav className={classes.drawer} aria-label="mailbox folders">

          <Hidden mdUp implementation="css">
            <CustomAppBar position="fixed" color="primary" variant="dense">
              <IconButton
                edge="start"
                //className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>

              <Button style={{ marginRight: "auto" }} color="inherit">Login V</Button>

              <div style={{ marginLeft: "auto" }}>
                <Button
                  className={classes.navLink + " " + classes.navLinkActive}
                  onClick={e => e.preventDefault()}
                  color="inherit"
                >
                  <Explore className={classes.icons} /> Ventas
                </Button>
                <Button
                  className={classes.navLink + " " + classes.navLinkActive}
                  onClick={e => e.preventDefault()}
                  color="inherit"
                >
                  <Face className={classes.icons} /> Cobranzas
                </Button>
              </div>
            </CustomAppBar>
            <Drawer
              variant="temporary"
              anchor="left"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              <Typography className={classes.titleV} >KROFT V</Typography>
              <Divider />
              <ListToRender
                onClick={handleDrawerToggle}
                value={value}
                change={handleChange}
              />
            </Drawer>
          </Hidden>

          <Hidden smDown implementation="css">

            <CustomAppBar position="fixed" color="primary" variant="regular" drawer>
              <Button style={{ marginRight: "auto" }} color="inherit">Login H</Button>

              <div style={{ marginLeft: "auto" }}>
                <Button
                  className={classes.navLink + " " + classes.navLinkActive}
                  onClick={e => e.preventDefault()}
                  color="inherit"
                >
                  <Explore className={classes.icons} /> Ventas
                </Button>
                <Button
                  className={classes.navLink + " " + classes.navLinkActive}
                  onClick={e => e.preventDefault()}
                  color="inherit"
                >
                  <Face className={classes.icons} /> Cobranzas
                </Button>
              </div>
            </CustomAppBar>
            <Drawer
              variant="permanent"
              anchor="left"
              open
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <Typography className={classes.titleH}>KROFT H</Typography>
              <Divider />
              <ListToRender
                value={value}
                change={handleChange}
              />
            </Drawer>
          </Hidden>

        </nav>

        <div className={classes.rootMenu}>
          <Grid container spacing={3}>
            <Grid item xs={12}>

              {SidebarList.map((list, key) => {
                return (
                  <TabPanel key={key} value={value} index={key} classes={classes}>
                    <Grid
                      container
                      className={classes.content}
                      justify="center"
                      alignItems="center"
                    >
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                        elevation={6}
                        square="true"
                        className={classes.container}
                      >
                        <list.component />
                      </Grid>
                    </Grid>
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
