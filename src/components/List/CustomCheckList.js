// Dependencies
import Checkbox from "@material-ui/core/Checkbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
// Styles
import styles from "../../styles/components/selectInputStyle.js";

const useStyles = makeStyles(styles);

function CustomCheckList(props) {
  const { list, keyValue, value, onChange, checked } = props;

  // Styles
  const classes = useStyles();
  const checkListClasses = classNames({
    [classes.checkList]: true,
  });

  return (
    <List dense className={checkListClasses}>
      {list.map((index) => {
        return (
          <ListItem key={`listItem-${index[keyValue]}`} button>
            <ListItemText
              id={`listItemText-${index[keyValue]}`}
              primary={index[value]}
            />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                onChange={() => onChange(index.id)}
                checked={index[keyValue] === checked}
                disabled={index.state === 1 ? false : true}
                inputProps={{ "aria-labelledby": index[keyValue] }}
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
  keyValue: "id",
  value: "",
};

CustomCheckList.propTypes = {
  onChange: PropTypes.func,
  list: PropTypes.array,
  keyValue: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CustomCheckList;
