// Dependencies
import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
// Styles
import styles from "../../styles/components/selectInputStyle.js";

const useStyles = makeStyles(styles);

function CustomCheckList(props) {
  const {
    list,
    key,
    value,
    onChange,
    checked,
    disabled,
    margin,
    color,
    variant,
  } = props;

  // Styles
  const classes = useStyles();
  const checkListClasses = classNames({
    [classes.checkList]: true,
  });

  return (
    <List dense className={checkListClasses}>
      {list.map((index) => {
        return (
          <ListItem key={`listItem-${index.id}`} button>
            <ListItemText
              id={`listItemText-${index.id}`}
              primary={index[value]}
            />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                onChange={() => onChange(index.id)}
                checked={index.id === checked}
                disabled={index.state === 1 ? false : true}
                inputProps={{ "aria-labelledby": index.id }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}

// PropTypes
CustomCheckList.defaultProps = {
  onChange: null,
  list: [],
  key: "id",
  value: "",
  required: false,
  disabled: false,
  name: "",
  label: "",
  placeholder: "",
  variant: "normal",
  margin: "normal",
  color: "primary",
  hoverColor: "primary",
  error: false,
  success: false,
  white: true,
};

CustomCheckList.propTypes = {
  onChange: PropTypes.func,
  list: PropTypes.array,
  key: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.oneOf(["filled", "outlined", "standard"]),
  margin: PropTypes.oneOf(["dense", "none", "normal"]),
  color: PropTypes.oneOf(["primary", "secondary"]),
  hoverColor: PropTypes.oneOf([
    "black",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
  ]),
  error: PropTypes.bool,
  success: PropTypes.bool,
  white: PropTypes.bool,
};

export default CustomCheckList;
