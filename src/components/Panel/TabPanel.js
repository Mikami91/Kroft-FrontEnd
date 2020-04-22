// Dependencies
import React from 'react';
// Components
import {  Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// Styles
import styles from '../../styles/components/panelStyle';

const useStyles = makeStyles(styles);

const TabPanel = (props) => {
  const classes = useStyles();
  const { children, value, index, centered } = props;
  
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
    >
      <Box p={3} className={classes.content} style={{ textAlign: centered ? "-webkit-center" : null }}>{children}</Box>
    </Typography>
  );
};

export default TabPanel;