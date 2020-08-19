/* eslint-disable react/display-name */
import React, { Fragment, useMemo, forwardRef } from "react";
import PropTypes from "prop-types";
import MaterialTable from "material-table";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import CustomLoading from '../Loading/CustomLoading';
import CustomText from '../Typography/CustomText';
// Styles
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
  const {
    toolbar,
    search,
    sorting,
    filtering,
    header,
    column,
    data,
    detailPanel,
    paging,
    padding,
    refresh,
    updates,
    customUpdate,
    deletes,
    loading,
  } = props;
  // Styles
  const classes = useStyles();
  // Using useMemo hook
  return useMemo(() => {
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
            padding: padding,
            selection: false,
            headerStyle: {
              color: '#ff9800',
              fontSize: 'small',
              fontWeight: 'bold',
            }
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
                deleteText: "¿Estás seguro de que deseas eliminar?"
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
                    console.log(newData);
                    resolve();
                  })
                : null,

            onRowDelete:
              deletes !== null
                ? (newData, oldData) =>
                  new Promise(resolve => {
                    deletes({ id: newData.id });
                    resolve();
                  })
                : null,
          }}
          actions={
            [
              refresh !== null ?
                {
                  icon: icons.Refresh,
                  tooltip: "Actualizar lista",
                  isFreeAction: true,
                  onClick: () => refresh()
                }
                : null,
              customUpdate !== null ?
                {
                  icon: icons.Edit,
                  tooltip: "Editar",
                  isFreeAction: false,
                  onClick: (event, rowData) => customUpdate(rowData)
                }
                : null
            ]
          }
          // other props
          components={{
            OverlayLoading: props => (<CustomLoading open={loading} inside />)
          }}
          detailPanel={typeof detailPanel !== 'undefined' && detailPanel.length > 0 ? [
            {
              tooltip: 'Mas información',
              render: rowData => {
                return (
                  <div
                    style={{
                      fontSize: '0.75re',
                      textAlign: 'left',
                      color: 'white',
                      margin: '20px 50px',
                      display: 'inline-grid',
                      // backgroundColor: '#43A047',
                    }}
                  >
                    {
                      detailPanel.map((index, key) =>
                        <div key={key}
                          style={{
                            display: 'flex',
                          }}>
                          <CustomText text={`${index.title}:`} color="warning" />
                          <CustomText
                            text={
                              index.type === "bool" ?
                                rowData[index.field] === 0 ?
                                  index.options[0] :
                                  index.options[1] :
                                rowData[index.field]
                            }
                            margin={true}
                            color="default"
                          />
                        </div>
                      )
                    }
                  </div>
                )
              },
            },
          ] : null}
        />
      </div>
    );
  }, [data, loading]);
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
  detailPanel: [],
  paging: true,
  padding: "default",
  refresh: null,
  updates: null,
  customUpdate: null,
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
  detailPanel: PropTypes.arrayOf(PropTypes.object),
  paging: PropTypes.bool,
  padding: PropTypes.oneOf(["default", "dense"]),
  refresh: PropTypes.func,
  updates: PropTypes.func,
  customUpdate: PropTypes.func,
  deletes: PropTypes.func,
  loading: PropTypes.bool
};
