// Dependencies
import React, { Fragment, useMemo } from "react";
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
import ListItemIcon from '@material-ui/core/ListItemIcon';
// core components
import CustomDrawer from "../../components/Drawer/CustomDrawer.js";
// Icons
import TableChartRoundedIcon from "@material-ui/icons/TableChartRounded";
import KeyboardArrowRightRoundedIcon from "@material-ui/icons/KeyboardArrowRightRounded";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
// Styles
import styles from "../../styles/components/drawerStyle.js";
// Actions Creators
// import { dialogProductList } from '../../redux/actions/actionsCreators';

const useStyles = makeStyles(styles);

function DrawerContent(props) {
  const {
    direction,
    variant,
    open,
    close,
    content,
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

  // Render
  return (
    <Drawer
      open={open}
      onClose={close}
      variant={variant}
      anchor={direction}
      className={classes.drawer}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts', 'Inbox', 'Starred', 'Send email', 'Drafts', 'Inbox', 'Starred', 'Send email', 'Drafts' ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      {content}
    </Drawer>
  );
}
// PropTypes
DrawerContent.defaultProps = {
  direction: "left",
  variant: "temporary",
  open: false,
  close: null,
  content: null,
  categoryList: [],
  itemList: [],
  filter: "id",
  dialogProduct: {},
  isEmpty: {},
};
DrawerContent.propTypes = {
  direction: PropTypes.oneOf(["left", "right", "top", "bottom"]),
  variant: PropTypes.oneOf(["permanent", "persistent", "temporary"]),
  open: PropTypes.bool,
  close: PropTypes.func,
  content: PropTypes.object,
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

// export default connect(null, null)(DrawerContent);
export default DrawerContent;
