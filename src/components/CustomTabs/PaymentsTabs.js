// Dependencies
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Icon from "@material-ui/core/Icon";
// Styles
import styles from "../../styles/components/customTabsStyle.js";

const useStyles = makeStyles(styles);

export default function PaymentsTabs(props) {
  const classes = useStyles();
  const { tabs, tabText, value, onChange, centered, headerColor } = props;
  return (
    <Tabs
      centered={centered}
      textColor={headerColor}
      value={value}
      onChange={onChange}
      classes={{
        root: classes.tabsRoot,
        indicator: classes.displayNone,
      }}
    >
      {tabs.map((index, key) => {
        return (
          <Tab
            classes={{
              root: classes.tabRootButton,
              label: classes.tabLabel,
              selected: classes.tabSelected,
              wrapper: classes.tabWrapper,
            }}
            key={key}
            label={index[tabText]}
          />
        );
      })}
    </Tabs>
  );
}

PaymentsTabs.propTypes = {
  centered: PropTypes.bool,
  headerColor: PropTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "secondary",
    "rose",
  ]),
  tabs: PropTypes.arrayOf(PropTypes.objectOf),
  tabText: PropTypes.string,
};
