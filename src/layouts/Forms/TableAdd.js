// Dependencies
import React, { useState } from "react";
// Conecction to Store
import { connect } from "react-redux";
// @material-ui/core components
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import DeleteIcon from "@material-ui/icons/Delete";
// core components
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import CardIconActions from "../../components/Card/CardIconActions.js";
import AvatarForm from "../../components/Avatar/Avatarform.js";
import IconInput from "../../components/CustomInput/IconInput.js";
import SelectInput from "../../components/CustomInput/SelectInput.js";
import NumberInput from "../../components/CustomInput/NumberInput.js";
import CustomBotton from "../../components/CustomButtons/CustomButton.js";
import CustomLoading from "../../components/Loading/CustomLoading.js";
// Functions
import { tableCreate } from "../../functions/cruds/tableFunctions";
// Assets
import image from "../../assets/img/defaults/table.png";

function TableAdd(props) {
  const { fetching, environments } = props;
  // Local State
  const [state, setState] = useState({
    environment_id: "",
    photo: null,
    name: "",
    number: null,
    isUpload: false,
    error: false,
  });
  // Change State for Inputs
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  // Empty State values
  const handleEmpty = (e) => {
    setState({
      environment_id: "",
      photo: null,
      name: "",
      number: null,
      isUpload: false,
      error: false,
    });
  };

  // Changes State for Image
  const handleImage = (e) => {
    setState({
      ...state,
      isUpload: true,
    });
    //e.preventDefault();
    let file = e.target.files[0];
    if (file) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setState({
          ...state,
          photo: reader.result,
          isUpload: false,
        });
      };
      reader.readAsDataURL(file);
      // Empty input file value
      e.target.value = null;
    }
  };

  // Empty State of Image
  const handleEmptyImage = (e) => {
    setState({
      ...state,
      photo: null,
    });
    e.target.value = null;
  };

  // Create function
  const handleCreate = (e) => {
    e.preventDefault();
    tableCreate(state).then((response) => {
      if (typeof response !== "undefined") {
        if (response.success === true) {
          handleEmpty();
        }
      }
    });
  };

  return (
    <form id="table-add" onSubmit={handleCreate}>
      <Card variant="cardForm">
        <CustomLoading
          inside
          color="primary"
          open={state.isUpload || fetching}
        />

        <CardHeader color="success" avatar>
          <AvatarForm
            image={state.photo === null ? image : state.photo}
            alt="Imagen"
            title="Imagen"
            square
          />
          <input
            accept="image/png, image/jpeg, image/jpg"
            id="table-file-create"
            type="file"
            name="image"
            onChange={handleImage}
            style={{ display: "none" }}
          />

          <CardIconActions>
            <IconButton
              edge="start"
              onClick={handleEmptyImage}
              disabled={state.photo === null || state.isUpload ? true : false}
            >
              <label>
                <DeleteIcon />
              </label>
            </IconButton>

            <IconButton
              edge="end"
              disabled={state.isUpload ? true : false}
              onClick={() => {
                document.getElementById("table-file-create").click();
              }}
            >
              <label>
                <AddAPhotoIcon />
              </label>
            </IconButton>
          </CardIconActions>
        </CardHeader>

        <CardBody form>
          <Grid container justify="center" alignItems="flex-start" spacing={2}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              elevation={6}
              square="true"
            >
              <SelectInput
                variant="standard"
                margin="dense"
                color="primary"
                hoverColor="primary"
                disabled={fetching}
                id="environment"
                label="Ambiente"
                name="environment_id"
                onChange={handleChange}
                value={state.environment_id}
                itemList={{
                  data: environments,
                  key: "id",
                  value: "name",
                }}
                required
              />
              <IconInput
                variant={"standard"}
                margin={"dense"}
                color="primary"
                disabled={fetching}
                type="text"
                label={"Mesa"}
                name="name"
                onChange={handleChange}
                value={state.name}
                required
                // icon={<AccountBoxIcon />}
                iconPosition="end"
              />
              <NumberInput
                variant={"standard"}
                margin={"dense"}
                color="primary"
                disabled={fetching}
                label={"Número"}
                name="number"
                value={state.number}
                onChange={handleChange}
                maxLength={3}
                required
              />
            </Grid>
          </Grid>
        </CardBody>

        <CardFooter form>
          <CustomBotton
            form="table-add"
            size="sm"
            type="submit"
            disabled={state.isUpload}
          >
            Agregar
          </CustomBotton>
        </CardFooter>
      </Card>
    </form>
  );
}
const mapStateToProps = (state) => {
  const { tables, environments } = state;
  return {
    fetching: tables.fetching,
    environments: environments.payload,
  };
};

export default connect(mapStateToProps, null)(TableAdd);
