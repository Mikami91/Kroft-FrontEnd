// Dependencies
import React, { useMemo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// @material-ui/Componentes
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import Fab from "@material-ui/core/Fab";
import Tabs from "@material-ui/core/Tabs";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// Core Components
import CustomText from "../../components/Typography/CustomText";
// Icons
import WhatshotIcon from "@material-ui/icons/Whatshot";
// Styles
import styles from "../../styles/components/appBarIconStyle";

const useStyles = makeStyles(styles);

// Component
const AppBarIcons2 = (props) => {
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
    selectColor,
    hoverColor,
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
      {/* <Toolbar> */}
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        {data.map((index, key) => {
          // Using useMemo hook
          return useMemo(() => {
            const imageFabClasses = classNames({
              [classes.fabButton]: true,
              [classes[selectColor + "SelectFabButton"]]: key === value,
              [classes[hoverColor + "HoverFabButton"]]: hoverColor,
            });
            return (
              <Grid
                key={key}
                item
                xs={2}
                sm={1}
                md={1}
                lg={1}
                xl={1}
                elevation={1}
                className={classes.gridIcons}
              >
                    <Fab
                      key={key}
                      disabled={index.disabled}
                      value={value}
                      onClick={() => onChange(key)}
                      color={color}
                      // size="small"
                      aria-label={index.label}
                      className={imageFabClasses}
                    >
                      <img
                        src={index.photo}
                        alt={index.name}
                        color={index.selectColor}
                        className={classes.image2}
                      />
                    </Fab>
                    <br/>
                    <CustomText text={index.name} adjust />
              </Grid>
            );
          }, [data, value]);
        })}
      </Grid>
      {/* </Toolbar> */}
    </AppBar>
  );
};

// PropTypes
AppBarIcons2.defaultProps = {
  // AppBar
  position: "fixed",
  color: "primary",
  gutters: false,
  drawer: false,
  // Tabs
  data: [],
  value: "",
  onChange: null,
  selectColor: "primary",
  hoverColor: "primary",
};
AppBarIcons2.propTypes = {
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
  selectColor: PropTypes.oneOf([
    "primary",
    "secondary",
    "warning",
    "danger",
    "success",
    "info",
  ]),
  hoverColor: PropTypes.oneOf([
    "primary",
    "secondary",
    "warning",
    "danger",
    "success",
    "info",
  ]),
};

export default AppBarIcons2;
