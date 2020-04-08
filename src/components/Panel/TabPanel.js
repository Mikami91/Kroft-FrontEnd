// Dependencies
import React from 'react';
// Components
import {  Box, Typography } from "@material-ui/core";

const TabsPanel = (props) => {

  const { children, value, index } = props;
  
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}

    >
      <Box p={3} /*className={style? style.rootDash : null }*/ >{children}</Box>
    </Typography>
  );
};

export default TabsPanel;