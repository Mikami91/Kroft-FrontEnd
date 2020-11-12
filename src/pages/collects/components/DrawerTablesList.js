// Dependencies
import React from "react";
// Conecction to Store
import { connect } from "react-redux";
// Layouts
import DrawerList from "../../../layouts/Drawers/DrawerTablesList.js";

function DrawerTablesList(props) {
  // Props
  const {
    // Local
    open,
    close,
    // Redux
    environments,
    tables,
  } = props;

  return (
    <DrawerList
      direction="right"
      open={open}
      close={close}
      categoryList={environments}
      itemList={tables}
      itemOnClick={close}
      filter="environment_id"
      refresh={[open, environments, tables]}
    />
  );
}
// Connect to Store State
const mapStateToProps = (state) => {
  const { tables, environments } = state;
  return {
    environments: environments.payload,
    tables: tables.payload,
  };
};

export default connect(mapStateToProps, null)(DrawerTablesList);
