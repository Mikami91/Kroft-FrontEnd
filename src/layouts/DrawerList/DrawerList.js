// Dependencies
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
// Conecction to Store
import { connect } from "react-redux";
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
// core components
import CustomDrawer from "../../components/Drawer/CustomDrawer.js";
// Icons
import TableChartRoundedIcon from "@material-ui/icons/TableChartRounded";
import KeyboardArrowRightRoundedIcon from "@material-ui/icons/KeyboardArrowRightRounded";
// Styles
import styles from "../../styles/components/drawerStyle.js";
// Actions Creators
// import { dialogProductList } from '../../redux/actions/actionsCreators';

const useStyles = makeStyles(styles);

function DrawerList(props) {
  const {
    direction,
    open,
    close,
    categoryList,
    itemList,
    filter,
    dialogProduct,
    isEmpty,
  } = props;
  const classes = useStyles();
  // Open Table
  const handleOpen = (table) => {
    if (Object.keys(isEmpty).length >= 1) {
      dialogProduct({
        type: "switch",
        isOpen: true,
        isFetch: false,
        environment_id: table.environment_id,
        environment_name: table.environment,
        table_id: table.id,
        table_name: table.name,
        is_busy: table.is_busy,
        is_paid: table.is_paid,
        amount: table.amount,
      });
    } else {
      dialogProduct({
        isOpen: true,
        isFetch: false,
        environment_id: table.environment_id,
        environment_name: table.environment,
        table_id: table.id,
        table_name: table.name,
        is_busy: table.is_busy,
        is_paid: table.is_paid,
        amount: table.amount,
      });
    }
  };

  return (
    <Drawer
      open={open}
      onClose={close}
      variant="temporary"
      anchor={direction}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      <List className={classes.drawer}>
        {categoryList.map((index) => (
          <Fragment key={index.id}>
            <ListItem key={index.name}>
              <ListItemText primary={index.name} />
            </ListItem>

            <Divider component="li" variant="inset" />

            {itemList.map((index2) =>
              index2[filter] === index.id ? (
                <ListItem key={index2.name}>
                  <ListItemAvatar>
                    <Avatar
                      className={
                        index2.state === 0
                          ? classes.success
                          : index2.state === 1
                          ? classes.danger
                          : classes.warning
                      }
                      style={{ color: '#fff' }}
                    >
                      <TableChartRoundedIcon  color="inherit"/>
                    </Avatar>
                  </ListItemAvatar>

                  <ListItemText
                    primary={index2.name}
                    secondary={
                      index2.state === 0
                        ? "Disponible"
                        : index2.state === 1
                        ? "Ocupado"
                        : "Por cobrar"
                    }
                  />

                  <ListItemSecondaryAction>
                    <Tooltip placement="top" title="Ir a Mesa">
                      <IconButton
                        edge="end"
                        aria-label="Ir"
                        onClick={() => handleOpen(index2)}
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
        ))}
      </List>
    </Drawer>
  );
}

// PropTypes
DrawerList.defaultProps = {
  direction: "left",
  open: false,
  close: null,
  categoryList: [],
  itemList: [],
  filter: "id",
  dialogProduct: {},
  isEmpty: {},
};

DrawerList.propTypes = {
  direction: PropTypes.oneOf(["left", "right", "top", "bottom"]),
  open: PropTypes.bool,
  close: PropTypes.func,
  categoryList: PropTypes.array,
  itemList: PropTypes.array,
  filter: PropTypes.string,
  dialogProduct: PropTypes.object,
  isEmpty: PropTypes.object,
};

// // Connect to Store state
// const mapstateToProps = state => {
//   const { table, environment, product } = state;
//   return {
//     ListEnvironments: environment.payload.filter(dataList => dataList.state === 1),
//     ListTables: table.payload,
//     isEmpty: product.dialogProductList.environments,
//     showProgress: table.isFetch || table.isLoading,
//   }
// }

// // Functions to dispatching
// const dialogProduct = (payload) => (dialogProductList(payload));

// // binding an object full of action creators
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ dialogProduct }, dispatch);
// };

// export default connect(null, null)(DrawerList);
export default DrawerList;
