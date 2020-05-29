// Dependencies
import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
// @material-ui/Componentes
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
// Core Components
import AvatarTable from "../../components/Avatar/AvatarTable.js";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import CustomTable from "../../components/Table/CustomTable.js";
import CustomBotton from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
// Layouts
import SubcategoryAdd from "../../layouts/Forms/SubcategoryAdd.js";

function Subcategories(props) {
  // TabPanel Swipeables Views
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  return (
    <Fragment>
      <Grid
        container
        //   className={classes.content}
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
          // className={classes.container}
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
          // className={classes.container}
        >
          <Card variant="cardForm">
            <CardHeader color="info" dense>
              <h3>Lista de Subcategorías</h3>
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
                    title: "Imagen",
                    field: "image",
                    editable: "never",
                    sorting: false,
                    // render: rowData => (
                    //     <AvatarTable rowData={rowData} path={path} />
                    // )
                  },
                  { title: "Subcategoría", field: "name", type: "string" },
                  {
                    title: "Categoría",
                    field: "category_id",
                    type: "string" /*lookup: selectListCategories*/,
                  },
                  {
                    title: "Creación",
                    field: "created_at",
                    editable: "never",
                    type: "date",
                  },
                  {
                    title: "Modificación",
                    field: "updated_at",
                    editable: "never",
                    type: "date",
                  },
                ]}
                //   data={EmployeesList}
                //   refresh={userListAction}
                //   updates={userUpdateAction}
                //   deletes={userDeleteAction}
                //   loading={Loading}
              />
            </CardBody>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}

// PropTypes
Subcategories.propTypes = {
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  ),
};

export default Subcategories;
