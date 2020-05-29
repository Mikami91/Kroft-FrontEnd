// Dependencies
import React, { useMemo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// @material-ui/Componentes
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// Icons
import DeckRoundedIcon from "@material-ui/icons/DeckRounded";
// Styles
import styles from "../../styles/components/appBarStyle";

const useStyles = makeStyles(styles);

// Component
const AppBarTabs = (props) => {
  // Props
  const {
    // AppBar
    position,
    color,
    drawer,
    // Tabs
    data,
    value,
    onChange,
    indicatorColor,
    textColor,
    variant,
    orientation,
    scrollButtons,
    centered,
  } = props;
  // Styles
  const classes = useStyles();
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes.dashAppBar]: drawer,
  });
  // Render
  return (
    <AppBar
      position={position}
      color={color}
      className={appBarClasses}
      variant="elevation"
    >
      <Tabs
        orientation={orientation}
        value={value}
        onChange={onChange}
        indicatorColor={indicatorColor}
        textColor={textColor}
        variant={variant}
        scrollButtons={scrollButtons}
        centered={centered}
      >
        {data.map((index, key) => {
          return useMemo(() => {
            return (
              <Tab
                key={key}
                style={{ paddingTop: 2 }}
                label={
                  <Typography className={classes.text} noWrap>
                    {index.name}
                  </Typography>
                }
                icon={<DeckRoundedIcon className={classes.icons} />}
              />
            );
          }, [data]);
        })}
      </Tabs>
    </AppBar>
  );
};

// PropTypes
AppBarTabs.defaultProps = {
  // AppBar
  position: "fixed",
  color: "primary",
  gutters: false,
  drawer: false,
  // Tabs
  data: [],
  value: "",
  onChange: null,
  indicatorColor: "primary",
  textColor: "primary",
  variant: "fullWidth",
  orientation: "horizontal",
  scrollButtons: "off",
  centered: false,
};
AppBarTabs.propTypes = {
  // AppBar
  position: PropTypes.oneOf([
    "absolute",
    "fixed",
    "relative",
    "static",
    "sticky",
  ]),
  color: PropTypes.oneOf([
    "default",
    "inherit",
    "primary",
    "secondary",
    "transparent",
  ]),
  disableGutters: PropTypes.bool,
  drawer: PropTypes.bool,
  // Tabs
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
  indicatorColor: PropTypes.oneOf(["inherit", "primary", "secondary"]),
  textColor: PropTypes.oneOf(["inherit", "primary", "secondary"]),
  variant: PropTypes.oneOf(["standard", "fullWidth", "scrollable"]),
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  scrollButtons: PropTypes.oneOf(["on", "off", "auto", "desktop"]),
  centered: PropTypes.bool,
};

export default AppBarTabs;
