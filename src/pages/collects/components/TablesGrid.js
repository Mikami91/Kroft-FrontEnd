// Dependencies
import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
// Conecction to Store
import { connect } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// core components
import TabPanel from "../../../components/Panel/TabPanel";
import GridTables from "../../../components/Grid/GridTables";
// Styles
import styles from "../../../styles/pages/SalesStyle.js";

const useStyles = makeStyles(styles);

function TablesGrid(props) {
  // Props
  const { environments, tables, onClick } = props;

  // Local State
  const [value, setValue] = useState(0);

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  // Styles
  const classes = useStyles();

  return (
    <div className={classes.rootMenu}>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        {environments.map((index, key) => {
          return (
            <TabPanel key={key} value={value} index={key}>
              <Grid
                container
                spacing={0}
                direction="row"
                className={classes.content}
                justify="flex-start"
                alignItems="flex-start"
              >
                <GridTables
                  value={value}
                  data={tables}
                  keyData={"environment_id"}
                  filter={index.id}
                  onClick={onClick}
                  color="primary"
                />
              </Grid>
            </TabPanel>
          );
        })}
      </SwipeableViews>
    </div>
  );
}
// Connect to Store State
const mapStateToProps = (state) => {
  const { environments, tables } = state;
  return {
    environments: environments.payload,
    tables: tables.payload,
  };
};

export default connect(mapStateToProps, null)(TablesGrid);
