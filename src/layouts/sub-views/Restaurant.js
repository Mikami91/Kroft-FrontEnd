// Dependencies
import React from "react";
import PropTypes from "prop-types";
// Conecction to Store
import { connect } from "react-redux";
// @material-ui/Componentes
import Grid from "@material-ui/core/Grid";
// Core Components
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CustomLoading from "../../components/Loading/CustomLoading.js";
// Layouts
import RestaurantForm from "../Forms/RestaurantForm";

function Restaurant({ environments, fetching, loading }) {
  return (
    <Grid container justify="center" alignItems="flex-start" spacing={3}>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        elevation={6}
        square="true"
      >
        <Card variant="cardForm">
          <CustomLoading inside color="primary" open={loading} />

          <CardHeader color="primary" dense>
            <h3>Acerca del restaurante</h3>
          </CardHeader>
          <CardBody form>
            <RestaurantForm />
          </CardBody>
        </Card>
      </Grid>
    </Grid>
  );
}
// PropTypes
Restaurant.propTypes = {
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  ),
};
// Connect to Store State
const mapStateToProps = (state) => {
  const { environments } = state;
  return {
    environments: environments.payload,
    fetching: environments.fetching,
    loading: environments.loading,
  };
};

export default connect(mapStateToProps, null)(Restaurant);
