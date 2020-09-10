// Dependencies
import React, { useState } from "react";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
// Icons
import DeckRoundedIcon from "@material-ui/icons/DeckRounded";
import TableChartRoundedIcon from "@material-ui/icons/TableChartRounded";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
// Styles
import styles from "../../styles/components/selectInputStyle.js";

// Make styles
const useStyles = makeStyles(styles);

function ExpansionList(props) {
  const {
    hoverColor,
    categoryList,
    itemList,
    filter,
  } = props;
  const classes = useStyles();
  const listItem = classNames({
    [classes.list]: true,
    [classes[hoverColor + "Hover"]]: true,
  });
  const collapseItem = classNames({
    [classes.collapse]: true,
    [classes.secondaryHover]: true,
  });
  // Local States
  const [open, setOpen] = useState(null);
  const handleClick = (key) => {
    setOpen(key === open ? false : key);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      {categoryList.data.map((index) => {
        return [
          <ListItem
            button
            className={listItem}
            key={index.id + "ListItem"}
            value={index.id}
            onClick={() => handleClick(index.id)}
          >
            <ListItemIcon>
              <DeckRoundedIcon />
            </ListItemIcon>
            <ListItemText primary={index[categoryList.value]} />
            {open === index.id ? <ExpandLess /> : <ExpandMore />}
          </ListItem>,

          itemList.data.map((index2) => {
            if (index2[filter] === index[categoryList.key]) {
              return (
                <Collapse
                  in={open === index.id}
                  timeout="auto"
                  unmountOnExit
                  key={index2.id + "Collapse"}
                  value={index2[itemList.key]}
                >
                  <List component="div" disablePadding>
                    <ListItem
                      button
                      className={collapseItem}
                      onClick={() => alert(index2[itemList.value])}
                    >
                      <ListItemIcon>
                        <TableChartRoundedIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={index2[itemList.value]}
                        secondary={index.name}
                      />
                    </ListItem>
                  </List>
                </Collapse>
              );
            }
            return null;
          }),
        ];
      })}
    </List>
  );
}

export default ExpansionList;
