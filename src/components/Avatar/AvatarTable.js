import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
// core components
import styles from "../../styles/components/avatarTableStyle.js";

const useStyles = makeStyles(styles);

export default function AvatarTable(props) {
  const classes = useStyles();
  const { rowData, image, alt, path } = props;
  return (
    // <Tooltip placement="bottom" alt="Imagen">
    <IconButton
      color="inherit"
      className={classes.avatar}
      onClick={() => alert(rowData[alt])}
    >
      <img
        className={classes.img}
        src={path + rowData[image]}
        alt={rowData[alt]}
      />
    </IconButton>
    // </Tooltip>
  );
}

// PropTypes
AvatarTable.defaultProps = {
  rowData: {},
  image: "",
  alt: "",
  path: ""
};

AvatarTable.propTypes = {
  rowData: PropTypes.object,
  image: PropTypes.string,
  alt: PropTypes.string,
  path: PropTypes.string
};
