// Dependencies
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link, withRouter } from "react-router-dom";
// @material-ui/Componentes
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Fab from "@material-ui/core/Fab";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";
// Core Components
import DialogButton from "../CustomButtons/DialogButton";
import DialogIcon from "../CustomButtons/DialogIcon";
import DialogFab from "../CustomButtons/DialogFab";
import DialogText from "../Typography/DialogText";
import FloatChip from "../../components/Chip/FloatChip";
// Styles
import styles from "../../styles/components/footerStyle";

const useStyles = makeStyles(styles);

// Childs Components
// function IconChlid(props) {
//   const { index } = props;
//   const classes = useStyles();
//   if (index.disabled) {
//     return (
//       <IconButton edge={index.edge} disabled>
//         <index.icon className={classes.icons} />
//       </IconButton>
//     );
//   } else {
//     return (
//       <Tooltip placement="top" title={index.text}>
//         <IconButton
//           edge={index.edge}
//           color={index.color}
//           onClick={index.onClick}
//         >
//           <index.icon className={classes.icons} />
//         </IconButton>
//       </Tooltip>
//     );
//   }
// }
// function FabChild(props) {
//   const { index, align } = props;
//   const classes = useStyles();
//   if (index.disabled) {
//     return (
//       <Fab
//         disabled
//         color={index.color}
//         // size="small"
//         aria-label={index.label}
//         className={classes.fabButton + " " + classes[align]}
//       >
//         <index.icon className={classes.icons} />
//       </Fab>
//     );
//   } else {
//     return (
//       <Link to="/Kroft-FrontEnd/">
//         <Tooltip placement="top" title={index.text}>
//           <Fab
//             color={index.color}
//             // size="small"
//             aria-label={index.label}
//             onClick={index.onClick}
//             className={classes.fabButton + " " + classes[align]}
//           >
//             <index.icon className={classes.icons} />
//           </Fab>
//         </Tooltip>
//       </Link>
//     );
//   }
// }
// function TextChlid(props) {
//   const { index } = props;
//   const classes = useStyles();
//   return (
//     <Typography className={classes.text} noWrap>
//       {index.text}
//     </Typography>
//   );
// }

// Parent Component
function FooterAppBar(props) {
  // Props
  const {
    witdh,
    floatChip,
    fabButton,
    rightButtons,
    leftButtons,
    color,
    position,
    variant,
    drawer,
  } = props;
  // Styles
  const classes = useStyles();
  const footerClasses = classNames({
    [classes[witdh + "Width"]]: true,
    [classes.footerAppBar]: true,
    [classes.footerLogin]: drawer, 
  });
  // Render
  return (
    <AppBar
      position={position}
      color={color}
      className={footerClasses}
      variant="elevation"
    >
      <Toolbar variant={variant} className={classes.toolbar}>

        {typeof floatChip !== "undefined" ? <div className={classes.floatChip}>
          <FloatChip {...floatChip} />
        </div> : null}

        <div className={classes.contentLeft}>
          {leftButtons.map((index, key) => {
            // Button type
            if (index.type === "button") {
              return <DialogButton key={key} index={index} />;
            }
            // Icon type
            if (index.type === "icon" && typeof index.icon !== "undefined") {
              return <DialogIcon key={key} index={index} />;
            }
            // Fab type
            if (index.type === "fab" && typeof index.icon !== "undefined") {
              return <DialogFab key={key} index={index} align="left" />;
            }
            // Text type
            if (index.type === "text") {
              return <DialogText key={key} index={index} />;
            }
          })}
        </div>

        {Object.keys(fabButton).length >= 1 &&
          typeof fabButton.icon !== "undefined" ? (
            <Fab
              disabled={fabButton.disabled}
              color={fabButton.color}
              // size="small"
              aria-label={fabButton.label}
              onClick={fabButton.onClick}
              className={
                classes.fabButtonFloat +
                " " +
                classes[fabButton.align + "FabFloat"]
              }
            >
              <fabButton.icon className={classes.icons} />
            </Fab>
          ) : null}

        <div className={classes.contentRight}>
          {rightButtons.map((index, key) => {
            // Button type
            if (index.type === "button") {
              return <DialogButton key={key} index={index} />;
            }
            // Icon type
            if (index.type === "icon" && typeof index.icon !== "undefined") {
              return <DialogIcon key={key} index={index} />;
            }
            // Fab type
            if (index.type === "fab" && typeof index.icon !== "undefined") {
              return <DialogFab key={key} index={index} align="right" />;
            }
            // Text type
            if (index.type === "text") {
              return <DialogText key={key} index={index} />;
            }
          })}
        </div>
      </Toolbar>
    </AppBar>
  );
}
// PropTypes
FooterAppBar.defaultProps = {
  // AppBar
  witdh: "full",
  position: "fixed",
  color: "primary",
  // TooolBar
  variant: "regular",
  // Buttons
  fabButton: {},
  rightButtons: [],
  leftButtons: [],
};
FooterAppBar.propTypes = {
  // AppBar
  witdh: PropTypes.oneOf(["full", "dash", "drawer"]),
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
  // TooolBar
  variant: PropTypes.oneOf(["regular", "dense"]),
  // Buttons
  fabButton: PropTypes.shape({
    disabled: PropTypes.bool,
    color: PropTypes.oneOf([
      "default",
      "inherit",
      "primary",
      "secondary",
      "transparent",
    ]),
    label: PropTypes.string,
    float: PropTypes.bool,
    align: PropTypes.oneOf(["right", "center", "left"]),
    icon: PropTypes.object,
    onClick: PropTypes.func,
  }),
  rightButtons: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(["icon", "fab", "text"]),
      text: PropTypes.string,
      color: PropTypes.oneOf([
        "inherit",
        "default",
        "white",
        "warning",
        "success",
        "danger",
        "info",
        "primary",
        "secondary",
      ]),
      icon: PropTypes.object,
      edge: PropTypes.oneOf(["start", "end", false]),
      size: PropTypes.oneOf(["large", "medium", "small", "default"]),
      disabled: PropTypes.bool,
      onClick: PropTypes.func,
    })
  ),
  leftButtons: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(["icon", "fab", "text"]),
      text: PropTypes.string,
      color: PropTypes.oneOf([
        "inherit",
        "default",
        "white",
        "warning",
        "success",
        "danger",
        "info",
        "primary",
        "secondary",
      ]),
      icon: PropTypes.object,
      edge: PropTypes.oneOf(["start", "end", false]),
      size: PropTypes.oneOf(["large", "medium", "small", "default"]),
      disabled: PropTypes.bool,
      onClick: PropTypes.func,
    })
  ),
};

export default FooterAppBar;
