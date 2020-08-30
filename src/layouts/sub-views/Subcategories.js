// Dependencies
import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
// Conecction to Store
import { connect } from 'react-redux';
// @material-ui/Componentes
import Grid from "@material-ui/core/Grid";
// Core Components
import CustomTable from "../../components/Table/CustomTable.js";
import AvatarTable from "../../components/Avatar/AvatarTable";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CustomLoading from '../../components/Loading/CustomLoading.js';
import CustomModal from '../../components/Modal/CustomModal';
// Layouts
import SubcategoryAdd from "../Forms/SubcategoryAdd.js";
import SubcategoryUpdate from '../Forms/SubcategoryUpdate';
// Functions
import { subcategoryShow, subcategoryDelete } from "../../functions/subcategoryFunctions";
// API
import { API } from '../../API/index';

function Subcategories({ subcategories, fetching, loading }) {
  const [state, setState] = useState({
    data: {},
    open: false
  })
  const handleOpen = (rowData) => setState({ data: rowData, open: true });
  const handleClose = () => setState({ data: {}, open: false });
  return (
    <Fragment>
      <Grid
        container
        justify="center"
        alignItems="flex-start"
        spacing={3}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          xl={4}
          elevation={6}
          square="true"
        >
          <SubcategoryAdd />
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={8}
          xl={8}
          elevation={6}
          square="true"
        >
          <Card variant="cardForm">

            <CustomLoading inside color="primary" open={loading} />

            <CardHeader color="primary" dense>
              <h3>Lista de Subcategorías</h3>
            </CardHeader>
            <CardBody form>
              <CustomTable
                column={[
                  { title: "ID", field: "id", type: "numeric", editable: "never", },
                  {
                    title: "Foto",
                    field: "Photo",
                    editable: "never",
                    sorting: false,
                    render: rowData => (
                      <AvatarTable rowData={rowData} image="photo" alt="id" path={`${API}images/sub_categories/`} />
                    )
                  },
                  { title: "Subategoría", field: "name", type: "string" },
                  { title: "Categoría", field: "category_name", type: "string" },
                  // { title: "Creación", field: "created_at", editable: "never", type: "date", },
                  // { title: "Modificación", field: "updated_at", editable: "never", type: "date", },
                ]}
                data={subcategories}
                refresh={subcategoryShow}
                customUpdate={handleOpen}
                deletes={subcategoryDelete}
              />
            </CardBody>
          </Card>
        </Grid>
      </Grid>

      <CustomModal
        title={{
          text: "Editar subcategoría",
          size: "medium",
        }}
        loading={fetching}
        open={state.open}
        close={handleClose}
        content={<SubcategoryUpdate data={state.data} close={handleClose} />}
        rightButtons={[
          {
            type: "button",
            size: "medium",
            align: "center",
            text: "Cancelar",
            color: "default",
            variant: "text",
            autoAdjust: false,
            margin: true,
            onClick: handleClose
          },
          {
            type: "submit",
            size: "medium",
            align: "center",
            text: "Guardar",
            color: "primary",
            variant: "contained",
            html: "subcategory-update",
          },
        ]}
        renderRefresh={[state.open, state.data]}
        scroll="paper"
      />

    </Fragment>
  );
}
// PropTypes
Subcategories.propTypes = {
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  ),
};
// Connect to Store State
const mapStateToProps = (state) => {
  const { subcategory } = state;
  return {
    subcategories: subcategory.payload,
    fetching: subcategory.fetching,
    loading: subcategory.loading,
  }
};

export default connect(mapStateToProps, null)(Subcategories);
