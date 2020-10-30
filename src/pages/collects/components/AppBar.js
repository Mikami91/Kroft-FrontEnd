// Dependencies
import React, { useState } from "react";
// Conecction to Store
import { connect } from "react-redux";
// core components
import AppBarTabs from "../../../components/AppBar/AppBarTabs.js";

function AppBar(props) {
  // Props
  const { environments } = props;

  // Local State
  const [value, setValue] = useState(0);

  // Change environments
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBarTabs
      color="inherit"
      data={environments}
      iconType="img"
      imagePath="images/environments/"
      value={value}
      onChange={handleChange}
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

export default connect(mapStateToProps, null)(AppBar);
