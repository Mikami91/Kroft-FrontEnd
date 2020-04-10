// Dependencies
import React from 'react';
// Components
import {  Box, Typography } from "@material-ui/core";

const TabsPanel = (props) => {

  const { children, value, index, centered } = props;
  
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}

    >
      <Box p={3} style={{ textAlign: centered ? "-webkit-center" : null }}>{children}</Box>
    </Typography>
  );
};

export default TabsPanel;