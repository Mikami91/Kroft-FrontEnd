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

export default function MultiTabs(props) {
  const classes = useStyles();
  const { centered, headerColor, onChange, value, tabs } = props;
  return (
    <Tabs
      variant="fullWidth"
      indicatorColor="secondary"
      centered={centered}
      textColor={headerColor}
      value={value}
      onChange={onChange}
      // classes={{
      //   root: classes.tabsRoot,
      //   indicator: classes.tabSelected
      // }}
    >
      {tabs.map((prop, key) => {
        var icon = {};
        if (prop.tabIcon) {
          icon = {
            icon:
              typeof prop.tabIcon === "string" ? (
                <Icon>{prop.tabIcon}</Icon>
              ) : (
                  <prop.tabIcon />
                )
          };
        }
        return (
          <Tab
            classes={{
              // root: classes.tabRootButton,
              label: classes.tabLabel,
              selected: classes.tabSelected,
              // wrapper: classes.tabWrapper
            }}
            key={key}
            label={prop.tabName}
            {...icon}
          />
        );
      })}
    </Tabs>
  );
}

// PropTypes
MultiTabs.propTypes = {
  centered: PropTypes.bool,
  headerColor: PropTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "secondary",
    "rose"
  ]),
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabName: PropTypes.string.isRequired,
      tabIcon: PropTypes.object,
      tabContent: PropTypes.node
    })
  ),
};
