// Dependencies
import React, { useMemo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// Components
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// Styles
import styles from "../../styles/components/panelStyle";

const useStyles = makeStyles(styles);

const TabPanel = (props) => {
  const { children, value, index, centered, sub } = props;
  const classes = useStyles();
  const panelClasses = classNames({
    [classes.content]: true,
    [classes.subContent]: sub,
  });

  return useMemo(() => {
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`tabpanel-${index}`}
        aria-labelledby={`tab-${index}`}
      >
        <Box
          p={3}
          className={panelClasses}
          style={{ textAlign: centered ? "-webkit-center" : null }}
        >
          {children}
        </Box>
      </Typography>
    );
  }, [children, value]);
};
// PropTypes
TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number,
  index: PropTypes.number,
  centered: PropTypes.bool,
  sub: PropTypes.bool,
};

export default TabPanel;
