// Dependencies
import React, { useMemo } from "react";
// Conecction to Store
import { connect } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// core components
import TabPanel from "../../../components/Panel/TabPanel";
import SidebarList from "../../../components/List/SidebarList";
// Styles
import styles from "../../../styles/pages/DashboardStyle.js";

const useStyles = makeStyles(styles);

function SideBar(props) {
  // Props
  const { value, refreshRender } = props;

  // Styles
  const classes = useStyles();

  return (
    <div className={classes.rootMenu}>
      {SidebarList.map((list, key) => {
        return useMemo(() => {
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
                >
                  <list.component />
                </Grid>
              </Grid>
            </TabPanel>
          );
        }, [SidebarList, value, refreshRender]);
      })}
    </div>
  );
}

export default connect(null, null)(SideBar);
