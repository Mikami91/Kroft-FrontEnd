/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import MaterialTable from "material-table";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import styles from "../../styles/components/tableStyle.js";
// Icons
import AddBox from "@material-ui/icons/AddBox";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import RefreshIcon from "@material-ui/icons/Refresh";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import PersonAddDisabledIcon from "@material-ui/icons/PersonAddDisabled";

const icons = {
  UserDes: forwardRef((props, ref) => (
    <PersonAddDisabledIcon {...props} ref={ref} />
  )),
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  Refresh: forwardRef((props, ref) => <RefreshIcon {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const useStyles = makeStyles(styles);

export default function CustomTable(props) {
  const classes = useStyles();
  const {
    toolbar,
    search,
    sorting,
    filtering,
    header,
    column,
    data,
    paging,
    padding,
    refresh,
    updates,
    deletes,
    loading
  } = props;
  // console.log(Object.entries(tableData));
  return (
    <div className={classes.tableResponsive}>
      <MaterialTable
        columns={column}
        data={data}
        isLoading={loading}
        icons={icons}
        title=""
        options={{
          loadingType: "overlay",
          header: header,
          toolbarButtonAlignment: "left",
          actionsColumnIndex: -1,
          toolbar: toolbar,
          search: search,
          sorting: sorting,
          filtering: filtering,
          paging: paging,
          padding: padding
        }}
        localization={{
          pagination: {
            labelDisplayedRows: "{from}-{to} de {count}",
            labelRowsSelect: "Filas",
            firstTooltip: "Primera página",
            previousTooltip: "Anterior página",
            nextTooltip: "Siguiente página",
            lastTooltip: "Ultima página"
          },
          header: {
            actions: "Acciones"
          },
          body: {
            emptyDataSourceMessage: "No hay registros que mostrar.",
            filterRow: {
              filterTooltip: "Filtrar"
            },
            editRow: {
              saveTooltip: "Guardar",
              cancelTooltip: "Cancelar",
              deleteText: "¿Estás seguro de que deseas eliminar esta mesa?"
            },
            addTooltip: "Agregar",
            deleteTooltip: "Eliminar",
            editTooltip: "Editar"
          },
          toolbar: {
            searchTooltip: "Buscar",
            searchPlaceholder: "Buscar"
          }
        }}
        editable={{
          onRowUpdate:
            updates !== null
              ? (newData, oldData) =>
                  new Promise(resolve => {
                    updates(newData);
                    resolve();
                  })
              : null,

          onRowDelete:
            deletes !== null
              ? (newData, oldData) =>
                  new Promise(resolve => {
                    deletes(newData.id);
                    resolve();
                  })
              : null
        }}
        actions={
          refresh !== null
            ? [
                {
                  icon: icons.Refresh,
                  tooltip: "Actualizar lista",
                  isFreeAction: true,
                  onClick: () => refresh()
                }
              ]
            : null
        }
      />
    </div>
  );
}

// PropTypes
CustomTable.defaultProps = {
  toolbar: true,
  search: true,
  sorting: true,
  filtering: false,
  header: true,
  column: [],
  data: [],
  paging: true,
  padding: "default",
  refresh: null,
  updates: null,
  deletes: null,
  loading: false
};

CustomTable.propTypes = {
  toolbar: PropTypes.bool,
  search: PropTypes.bool,
  sorting: PropTypes.bool,
  filtering: PropTypes.bool,
  header: PropTypes.bool,
  column: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.arrayOf(PropTypes.object),
  paging: PropTypes.bool,
  padding: PropTypes.oneOf(["default", "dense"]),
  refresh: PropTypes.func,
  updates: PropTypes.func,
  deletes: PropTypes.func,
  loading: PropTypes.bool
};
