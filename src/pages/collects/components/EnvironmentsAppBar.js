// Dependencies
import React from "react";
// Conecction to Store
import { connect } from "react-redux";
// core components
import AppBarTabs from "../../../components/AppBar/AppBarTabs.js";

function EnvironmentsAppBar(props) {
  // Props
  const { environments, tabIndex, changeTabIndex } = props;

  return (
    <AppBarTabs
      color="inherit"
      data={environments}
      iconType="img"
      imagePath="images/environments/"
      value={tabIndex}
      onChange={changeTabIndex}
      variant="fullWidth"
      scrollButtons="auto"
    />
  );
}
// Connect to Store State
const mapStateToProps = (state) => {
  const { environments } = state;
  return {
    environments: environments.payload,
  };
};

export default connect(mapStateToProps, null)(EnvironmentsAppBar);
