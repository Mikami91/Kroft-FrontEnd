// Dependencies
import React from "react";
// Conecction to Store
import { connect } from "react-redux";
// @material-ui/icons
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
// core components
import CustomModal from "../../../components/Modal/CustomModal.js";
// Layouts
import ChangeTable from "../../../layouts/Forms/ChangeTable.js";
// Hooks
import { useChangeTable } from "../../../hooks/useChangeTable";
// Functions
// Functions
import { tableChange } from "../../../functions/cruds/tableFunctions";

function ModalChangeTable(props) {
  // Props
  const {
    // Local
    open,
    close,
    // Redux
    environments,
    tables,
    tables_fetching,
  } = props;

  // Hooks
  const [
    tableChangeState,
    handleChangeFrom,
    handleChangeTo,
    emptyTableChangeState,
  ] = useChangeTable();

  console.log(open);

  const handleChangeTable = (e) => {
    e.preventDefault();
    tableChange(tableChangeState).then((response) => {
      console.log(response);
      if (typeof response !== "undefined") {
        if (response.success === true) {
          close();
          emptyTableChangeState();
        }
      }
    });
  };

  return (
    <CustomModal
      open={open}
      close={close}
      closeIcon={tables_fetching === true ? false : true}
      title={{
        text: "Cambio de mesas",
        size: "medium",
      }}
      content={
        <ChangeTable
          environments={environments}
          tables={tables}
          state={tableChangeState}
          onChangeFrom={handleChangeFrom}
          onChangeTo={handleChangeTo}
        />
      }
      centerButtons={[
        {
          type: "fab",
          text: "Realizar cambio",
          color: "primary",
          icon: SwapHorizIcon,
          size: "large",
          disabled:
            tableChangeState.from_table && tableChangeState.to_table !== ""
              ? false
              : true,
          onClick: handleChangeTable,
        },
      ]}
      leftButtons={[
        {
          type: "button",
          text:
            tableChangeState.from_table_name +
            " " +
            tableChangeState.from_table_number,
          color: "danger",
          // icon: TableChartIcon,
          edge: "end",
          size: "small",
          variant: "contained",
          disabled: false,
        },
      ]}
      rightButtons={[
        {
          type: "button",
          text:
            tableChangeState.to_table_name +
            " " +
            tableChangeState.to_table_number,
          color: "success",
          // icon: TableChartIcon,
          edge: "start",
          size: "large",
          variant: "contained",
          disabled: false,
        },
      ]}
      renderRefresh={[tableChangeState, tables_fetching]}
      loading={tables_fetching}
      scroll="paper"
      maxWidth="sm"
      fullWidth
    />
  );
}
// Connect to Store State
const mapStateToProps = (state) => {
  const { environments, tables } = state;
  return {
    environments: environments.payload,
    tables: tables.payload,
    tables_fetching: tables.fetching,
  };
};

export default connect(mapStateToProps, null)(ModalChangeTable);
