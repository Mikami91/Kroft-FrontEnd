// Dependencies
import React, { Fragment, useMemo } from "react";
import PropTypes from "prop-types";
// UI Material Components
import {
  Avatar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  makeStyles,
  Tooltip,
} from "@material-ui/core";
// Icons
import TableChartRoundedIcon from "@material-ui/icons/TableChartRounded";
import KeyboardArrowRightRoundedIcon from "@material-ui/icons/KeyboardArrowRightRounded";
// Styles
import styles from "../../styles/components/drawerStyle.js";

const useStyles = makeStyles(styles);

function DrawerTablesList(props) {
  const {
    direction,
    variant,
    open,
    close,
    categoryList,
    itemList,
    itemOnClick,
    filter,
  } = props;
  const classes = useStyles();

  // Using useMemo hook
  return useMemo(() => {
    // Render
    return (
      <Drawer
        open={open}
        onClose={close}
        variant={variant}
        anchor={direction}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <List className={classes.drawer}>
          {categoryList.map((index) => {
            // Render
            return (
              <Fragment key={index.id}>
                <ListItem key={index.name}>
                  <ListItemText primary={index.name} />
                </ListItem>

                <Divider component="li" variant="inset" />

                {itemList.map((index2) =>
                  index2[filter] === index.id ? (
                    <ListItem key={index2.id}>
                      <ListItemAvatar>
                        <Avatar
                          className={
                            index2.is_busy === 0
                              ? classes.success
                              : index2.is_busy === 1
                                ? classes.danger
                                : classes.warning
                          }
                          style={{ color: "#fff" }}
                        >
                          <TableChartRoundedIcon color="inherit" />
                        </Avatar>
                      </ListItemAvatar>

                      <ListItemText
                        primary={`${index2.name} ${index2.number}`}
                        secondary={
                          index2.is_busy === 0
                            ? "Disponible"
                            : index2.is_busy === 1
                              ? "Ocupado"
                              : "Por cobrar"
                        }
                      />

                      <ListItemSecondaryAction>
                        <Tooltip placement="top" title="Ir a Mesa">
                          <IconButton
                            edge="end"
                            aria-label="Ir"
                            onClick={() => itemOnClick(index2)}
                          >
                            <KeyboardArrowRightRoundedIcon />
                          </IconButton>
                        </Tooltip>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ) : null
                )}
                <Divider component="li" />
              </Fragment>
            );
          })}
        </List>
      </Drawer>
    );
  }, [open]);
}
// PropTypes
DrawerTablesList.defaultProps = {
  direction: "left",
  variant: "temporary",
  open: false,
  close: null,
  categoryList: [],
  itemList: [],
  itemOnClick: null,
  filter: "id",
};
DrawerTablesList.propTypes = {
  direction: PropTypes.oneOf(["left", "right", "top", "bottom"]),
  variant: PropTypes.oneOf(["permanent", "persistent", "temporary"]),
  open: PropTypes.bool,
  close: PropTypes.func,
  categoryList: PropTypes.array,
  itemList: PropTypes.array,
  itemOnClick: PropTypes.func,
  filter: PropTypes.string,
};

export default DrawerTablesList;
