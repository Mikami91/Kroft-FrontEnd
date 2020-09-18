// Dependencies
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// Conecction to Store
import { connect } from 'react-redux';
// @material-ui/Componentes
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Badge from '@material-ui/core/Badge';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// API
import { API } from '../../API/index';
// Icons
import DeckRoundedIcon from "@material-ui/icons/DeckRounded";
// Styles
import styles from "../../styles/components/appBarStyle";

const useStyles = makeStyles(styles);

// Component
function AppBarTabs(props) {
  // Props
  const {
    // AppBar
    position,
    color,
    drawer,
    // Tabs
    data,
    iconType,
    imagePath,
    value,
    onChange,
    indicatorColor,
    textColor,
    variant,
    orientation,
    scrollButtons,
    centered,
    // Orders array
    orders,
  } = props;

  // Find if Product Orders has SubCategory ID
  const found_environment_id = (environment_id) => {

    // if (orders_list.lenght > 0) {
    //   let env_index = orders_list.findIndex(index => index.environment_id === current.environment_id);
    //   let table_index = orders_list[env_index].tables.findIndex(index => index.table_id === current.table_id);
    //   orders_list[env_index].tables[table_index].global_quantity;
    // }

    let found = orders.some(index => index.environment_id === environment_id);
    if (found === true) {
      return true;
    } else {
      return false;
    }
  }

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
          return (
            <Tab
              key={key}
              style={{ paddingTop: 2 }}
              label={
                <Typography className={classes.text} noWrap>
                  {index.name}
                </Typography>
              }
              icon={iconType === "icon" ?
                <Badge
                  color="secondary"
                  variant="dot"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  invisible={!found_environment_id(index.id)}
                >
                  <DeckRoundedIcon className={classes.icons} />
                </Badge>
                :
                <Badge
                  color="secondary"
                  variant="dot"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  invisible={!found_environment_id(index.id)}
                >
                  <img
                    src={API + imagePath + index.photo}
                    alt={index.name}
                    color={index.selectColor}
                    className={classes.icons}
                  />
                </Badge>
              }
            />
          );
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
  iconType: "icon",
  imagePath: "",
  value: "",
  onChange: null,
  indicatorColor: "primary",
  textColor: "primary",
  variant: "fullWidth",
  orientation: "horizontal",
  scrollButtons: "off",
  centered: false,
  // Orders array
  orders: [],
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
  iconType: PropTypes.oneOf(["icon", "img"]),
  imagePath: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
  indicatorColor: PropTypes.oneOf(["inherit", "primary", "secondary"]),
  textColor: PropTypes.oneOf(["inherit", "primary", "secondary"]),
  variant: PropTypes.oneOf(["standard", "fullWidth", "scrollable"]),
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  scrollButtons: PropTypes.oneOf(["on", "off", "auto", "desktop"]),
  centered: PropTypes.bool,
  // Orders array
  orders: PropTypes.array,
};
// Connect to Store State
// const mapStateToProps = (state) => {
//   const {  } = state;
//   return {

//   }
// };

export default connect(null, null)(AppBarTabs);
