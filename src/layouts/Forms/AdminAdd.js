// Dependencies
import React, { useState } from "react";
import moment from "moment";
import "moment/locale/es";
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
import DateInput from "../../components/CustomInput/DateInput.js";
import NumberInput from "../../components/CustomInput/NumberInput.js";
import CustomBotton from "../../components/CustomButtons/CustomButton.js";
import CustomLoading from "../../components/Loading/CustomLoading.js";
import CustomDivider from "../../components/Divider/CustomDivider.js";
// Functions
import { adminCreate } from "../../functions/cruds/adminFunctions";
// Assets
import image from "../../assets/img/defaults/user.png";
// Configs
moment.locale("es");
moment().format("l");

function AdminAdd(props) {
  const { fetching } = props;
  // Local State
  const [state, setState] = useState({
    // Others
    super_admin_id: localStorage.getItem("admin_id"),
    // Employee
    first_name: "",
    last_name: "",
    birthdate: null,
    gender: "",
    phone: null,
    address: "",
    entry_date: null,
    user: "",
    password: "",
    head_area: false,
    // Salary
    salary_month: null,
    paid_amount: null,
    // Photo
    photo: null,
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
      super_admin_id: localStorage.getItem("admin_id"),
      first_name: "",
      last_name: "",
      birthdate: null,
      gender: "",
      phone: null,
      address: "",
      entry_date: null,
      user: "",
      password: "",
      head_area: false,
      salary_month: null,
      paid_amount: null,
      photo: null,
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
          // photo: {
          //     image: reader.result,
          //     type: file.type,
          //     size: file.size,
          // },
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

  // Register function
  const handleRegister = (e) => {
    e.preventDefault();
    adminCreate(state).then((response) => {
      if (typeof response !== "undefined") {
        if (response.success === true) {
          handleEmpty();
        }
      }
    });
  };
  return (
    <form
      id="admin-add"
      onSubmit={handleRegister}
      encType="multipart/form-data"
    >
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
          />
          <input
            // disabled={state.isUpload || showProgress ? true : false}
            accept="image/png, image/jpeg, image/jpg"
            id="admin-file-create"
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
                document.getElementById("admin-file-create").click();
              }}
            >
              <label>
                <AddAPhotoIcon />
              </label>
            </IconButton>
          </CardIconActions>
        </CardHeader>

        <CardBody form>
          <Grid
            container
            //   className={classes.content}
            justify="center"
            alignItems="flex-start"
            spacing={2}
          >
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
              <CustomDivider
                text="Datos personales"
                color="warning"
                margin="dense"
                bold
              />

              <IconInput
                variant={"standard"}
                margin={"dense"}
                color="primary"
                disabled={fetching}
                type="text"
                label={"Nombre"}
                name="first_name"
                onChange={handleChange}
                value={state.first_name}
                required
                // icon={<AccountBoxIcon />}
                iconPosition="end"
              />
              <IconInput
                variant={"standard"}
                margin={"dense"}
                color="primary"
                disabled={fetching}
                type="text"
                label={"Apellidos"}
                name="last_name"
                onChange={handleChange}
                value={state.last_name}
                required
                // icon={<AccountBoxIcon />}
                iconPosition="end"
              />
              <DateInput
                variant={"standard"}
                margin={"dense"}
                color="primary"
                disabled={fetching}
                type="text"
                label={"Fecha de nacimiento"}
                name="birthdate"
                onChange={handleChange}
                value={state.birthdate}
                minDate={moment().subtract(70, "years").format("YYYY/MM/DD")}
                maxDate={moment().subtract(18, "years").format("YYYY/MM/DD")}
                openTo="year"
                required
              />
              <SelectInput
                variant="standard"
                margin="dense"
                color="primary"
                hoverColor="primary"
                disabled={fetching}
                id="position"
                label="Género"
                name="gender"
                onChange={handleChange}
                value={state.gender}
                itemList={{
                  data: [
                    { id: 0, gender: "Masculino" },
                    { id: 1, gender: "Femenino" },
                  ],
                  key: "id",
                  value: "gender",
                }}
                required
              />

              <CustomDivider
                text="Información"
                color="warning"
                margin="dense"
                bold
              />

              <NumberInput
                variant={"standard"}
                margin={"dense"}
                color="primary"
                disabled={fetching}
                label={"Celular"}
                name="phone"
                value={state.phone}
                onChange={handleChange}
                maxLength={9}
                required
                phone
              />
              <IconInput
                variant={"standard"}
                margin={"dense"}
                color="primary"
                disabled={fetching}
                type="text"
                label={"Dirección"}
                name="address"
                onChange={handleChange}
                value={state.address}
                required
                // icon={<AccountBoxIcon />}
                iconPosition="end"
              />

              <CustomDivider
                text="Perfil"
                color="warning"
                margin="dense"
                bold
              />

              <IconInput
                variant={"standard"}
                margin={"dense"}
                color="primary"
                disabled={fetching}
                type="text"
                label={"Usuario"}
                name="user"
                onChange={handleChange}
                value={state.user}
                required
                // icon={<PersonIcon />}
                iconPosition="end"
              />
              <IconInput
                variant={"standard"}
                margin={"dense"}
                color="primary"
                disabled={fetching}
                type="text"
                label={"Contraseña"}
                name="password"
                onChange={handleChange}
                value={state.password}
                required
                // icon={<LockIcon />}
                iconPosition="end"
              />
            </Grid>

            {/* <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              elevation={6}
              square="true"
            >
              <CustomDivider
                text="Ingreso"
                color="warning"
                margin="dense"
                bold
              />

              <DateInput
                variant={"standard"}
                margin={"dense"}
                color="primary"
                disabled={fetching}
                type="text"
                label={"Fecha de ingreso"}
                name="entry_date"
                onChange={handleChange}
                value={state.entry_date}
                minDate={moment().subtract(30, "years").format("YYYY/MM/DD")}
                maxDate={moment().add(3, "months").format("YYYY/MM/DD")}
                openTo="month"
                required
              />

              <CustomDivider
                text="Salario"
                color="warning"
                margin="dense"
                bold
              />

              <NumberInput
                variant={"standard"}
                margin={"dense"}
                color="primary"
                disabled={fetching}
                label={"Salario"}
                name="paid_amount"
                value={state.paid_amount}
                onChange={handleChange}
                prefix={"Bs"}
                required
              />
              <DateInput
                variant={"standard"}
                margin={"dense"}
                color="primary"
                disabled={fetching}
                type="text"
                label={"Fecha de pago"}
                name="salary_month"
                onChange={handleChange}
                value={state.salary_month}
                minDate={moment().subtract(1, "months").format("YYYY/MM/DD")}
                maxDate={moment().add(1, "months").format("YYYY/MM/DD")}
                format="dd"
                openTo="date"
                views={["date"]}
                autoOk
                required
              />
            </Grid> */}
          </Grid>
        </CardBody>

        <CardFooter form>
          <CustomBotton
            form="admin-add"
            size="sm"
            type="submit"
            disabled={state.isUpload}
          >
            Registrar
          </CustomBotton>
        </CardFooter>
      </Card>
    </form>
  );
}
// Connect to Store State
const mapStateToProps = (state) => {
  const { employee } = state;
  return {
    fetching: employee.fetching,
  };
};

export default connect(mapStateToProps, null)(AdminAdd);
