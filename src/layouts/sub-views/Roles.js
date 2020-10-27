// Dependencies
import React, { Fragment } from "react";
import PropTypes from "prop-types";
// Conecction to Store
import { connect } from 'react-redux';
// @material-ui/Componentes
import Grid from "@material-ui/core/Grid";
// Core Components
import CustomTable from "../../components/Table/CustomTable.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CustomLoading from '../../components/Loading/CustomLoading.js';
// Functions
import { rolCreate, rolShow, rolUpdate, rolDelete } from "../../functions/rolFunctions";

function Roles({ data, fetching, loading }) {
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
          md={8}
          lg={9}
          xl={9}
          elevation={6}
          square="true"
        >
          <Card variant="cardForm">

            <CustomLoading inside color="primary" open={loading || fetching} />

            <CardHeader color="primary" dense>
              <h3>Roles</h3>
            </CardHeader>
            <CardBody form>
              <CustomTable
                column={[
                  { title: "ID", field: "id", type: "numeric", editable: "never", },
                  { title: "Rol", field: "name", type: "string" }
                ]}
                data={data}
                add={rolCreate}
                refresh={rolShow}
                updates={rolUpdate}
                deletes={rolDelete}
              />
            </CardBody>
          </Card>
        </Grid>
      </Grid>

    </Fragment>
  );
}
// PropTypes
Roles.propTypes = {
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  ),
};
// Connect to Store State
const mapStateToProps = (state) => {
  const { rol } = state;
  return {
    data: rol.payload,
    fetching: rol.fetching,
    loading: rol.loading,
  }
};

export default connect(mapStateToProps, null)(Roles);