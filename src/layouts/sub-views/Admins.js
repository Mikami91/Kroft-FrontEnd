// Dependencies
import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
// Conecction to Store
import { connect } from "react-redux";
// @material-ui/Componentes
import Grid from "@material-ui/core/Grid";
// Core Components
import CustomTable from "../../components/Table/CustomTable.js";
import AvatarTable from "../../components/Avatar/AvatarTable";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CustomLoading from "../../components/Loading/CustomLoading.js";
import CustomModal from "../../components/Modal/CustomModal";
// Layouts
import AdminAdd from "../Forms/AdminAdd.js";
import AdminUpdate from "../Forms/AdminUpdate";
// Functions
import { adminShow, adminDelete } from "../../functions/cruds/adminFunctions";
// API
import { API } from "../../API/index";

function Admins({ superadmin, admins, fetching, loading }) {
  const [state, setState] = useState({
    data: {},
    open: false,
  });
  const handleOpen = (rowData) => setState({ data: rowData, open: true });
  const handleClose = () => setState({ data: {}, open: false });
  return (
    <Fragment>
      <Grid container justify="center" alignItems="flex-start" spacing={3}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={5}
          xl={5}
          elevation={6}
          square="true"
        >
          <AdminAdd />
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={7}
          xl={7}
          elevation={6}
          square="true"
        >
          <Card variant="cardForm">
            <CustomLoading inside color="primary" open={loading} />

            <CardHeader color="primary" dense>
              <h3>Lista de Administradores</h3>
            </CardHeader>
            <CardBody form>
              <CustomTable
                column={[
                  {
                    title: "ID",
                    field: "id",
                    type: "numeric",
                    editable: "never",
                  },
                  {
                    title: "Foto",
                    field: "photo",
                    editable: "never",
                    sorting: false,
                    render: (rowData) => (
                      <AvatarTable
                        rowData={rowData}
                        image="photo"
                        alt="id"
                        path={`${API}images/admins/`}
                      />
                    ),
                  },
                  { title: "Nombre", field: "first_name", type: "string" },
                  { title: "Apellidos", field: "last_name", type: "string" },
                  { title: "Celular", field: "phone", type: "numeric" },
                ]}
                data={admins}
                detailPanel={[
                  { title: "Nacimiento", field: "birthdate", type: "string" },
                  {
                    title: "Genero",
                    field: "gender",
                    type: "bool",
                    options: ["Masculino", "Femenino"],
                  },
                  { title: "Dirección", field: "address", type: "string" },
                  { title: "Usuario", field: "user", type: "string" },
                ]}
                refresh={adminShow}
                customUpdate={handleOpen}
                deletes={adminDelete}
              />
            </CardBody>
          </Card>
        </Grid>
      </Grid>

      <CustomModal
        title={{
          text: "Editar Administrador",
          size: "medium",
        }}
        loading={fetching}
        open={state.open}
        close={handleClose}
        content={
          superadmin &&
          Object.keys(superadmin).length > 0 &&
          superadmin.constructor === Object ? (
            <AdminUpdate data={state.data} close={handleClose} />
          ) : null
        }
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
            onClick: handleClose,
          },
          {
            type: "submit",
            size: "medium",
            align: "center",
            text: "Guardar",
            color: "primary",
            variant: "contained",
            // icon: CheckCircleRoundedIcon,
            // iconColor: "secondary",
            html: "admin-update",
          },
        ]}
        renderRefresh={[state.open, state.data]}
        scroll="paper"
      />
    </Fragment>
  );
}
// PropTypes
Admins.propTypes = {
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  ),
};
// Connect to Store State
const mapStateToProps = (state) => {
  const { superadmin, admin } = state;
  return {
    superadmin: superadmin.payload,
    admins: admin.payload,
    fetching: admin.fetching,
    loading: admin.loading,
  };
};

export default connect(mapStateToProps, null)(Admins);
