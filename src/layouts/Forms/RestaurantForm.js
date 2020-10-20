// Dependencies
import React, { useState, useEffect } from "react";
// Conecction to Store
import { connect } from 'react-redux';
// @material-ui/core components
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
// @material-ui/icons
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import DeleteIcon from '@material-ui/icons/Delete';
// core components
import CardImage from "../../components/Card/CardImage";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import CardIconActions from '../../components/Card/CardIconActions.js';
import AvatarForm from '../../components/Avatar/Avatarform.js';
import IconInput from '../../components/CustomInput/IconInput.js';
import CustomBotton from '../../components/CustomButtons/CustomButton.js'
import CustomLoading from '../../components/Loading/CustomLoading.js';
import CustomDivider from '../../components/Divider/CustomDivider.js';
// Functions
import { companyUpdate } from "../../functions/companyFunctions";
// Apis
import { API } from '../../API/index';
// Assets
import image from '../../assets/img/defaults/environment.png';

function RestaurantForm(props) {
    const { company, fetching } = props;
    // Local State
    const [state, setState] = useState({
        super_admin_id: localStorage.getItem("super_admin_id"),
        photo: null,
        photoChange: false,
        name: "",
        description: "",
        isUpload: false,
        error: false,
        is_payload: false
    });

    const current_image = Object.keys(company).length !== 0 ? `${API}images/companies/${company.photo}` : image;

    // Use Effect
    useEffect(() => {
        if (Object.keys(company).length !== 0 && state.is_payload === false) {
            setState({
                ...state,
                name: company.name,
                description: company.description,
                is_payload: true
            });
        }
    }, [state.is_payload, company]);


    // Change State for Inputs
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };
    // Empty State values
    const handleEmpty = (e) => {
        setState({
            ...state,
            photoChange: false,
        });
    };

    // Changes State for Image
    const handleImage = (e) => {
        setState({
            ...state,
            isUpload: true
        });
        //e.preventDefault();
        let file = e.target.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onloadend = () => {
                setState({
                    ...state,
                    photo: reader.result,
                    photoChange: true,
                    isUpload: false
                });
            }
            reader.readAsDataURL(file)
            // Empty input file value
            e.target.value = null;
        }
    };

    // Empty State of Image
    const handleEmptyImage = (e) => {
        setState({
            ...state,
            photo: null,
            photoChange: false,
        });
        e.target.value = null;
    };

    // Create function
    const handleCreate = (e) => {
        e.preventDefault();
        companyUpdate(state).then((response) => {
            if (typeof response !== 'undefined') {
                if (response.success === true) {
                    handleEmpty();
                }
            }
        });
    };

    return (
        <form id="restaurant-form" onSubmit={handleCreate} autoComplete="off">

            {/* <Card variant="cardForm"> */}

            <CustomLoading inside color="primary" margin="normal" open={state.isUpload || fetching} />

            <CardBody form>
                <Grid
                    container
                    justify="center"
                    alignItems="flex-start"
                    spacing={2}
                >
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={4}
                        lg={4}
                        xl={4}
                        elevation={6}
                        square="true"
                    >

                        <CustomDivider text="Nombre" color="warning" margin="normal" bold />

                        <IconInput
                            variant={'standard'}
                            margin={'dense'}
                            color="primary"
                            disabled={fetching}
                            type="text"
                            label={'Retaurante'}
                            name="name"
                            onChange={handleChange}
                            value={state.name}
                            required
                            // icon={<AccountBoxIcon />}
                            iconPosition="end"
                        />

                        <CustomDivider text="Descripción" color="warning" margin="normal" bold />

                        <IconInput
                            variant={'standard'}
                            margin={'normal'}
                            color="primary"
                            disabled={fetching}
                            type="text"
                            label={'Descripción'}
                            name="description"
                            onChange={handleChange}
                            value={state.description}
                            required
                            multiline={true}
                            rows={4}
                            rowsMax={6}
                            // icon={<AccountBoxIcon />}
                            iconPosition="end"
                        />

                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={8}
                        lg={8}
                        xl={8}
                        elevation={6}
                        square="true"
                    >
                        <CustomDivider text="Banner" color="warning" margin="normal" bold />

                        <CardImage
                            variant="cardSide"
                            image={state.photoChange === true ? state.photo : current_image}
                            imageAlt="Banner"
                        />
                        <input
                            // disabled={state.isUpload || showProgress ? true : false}
                            accept="image/png, image/jpeg, image/jpg"
                            id="restaurant-logo-file"
                            type="file"
                            name="image"
                            onChange={handleImage}
                            style={{ display: 'none' }}
                        />

                        <CardIconActions>
                            <IconButton edge="start" onClick={handleEmptyImage} disabled={state.photoChange === true || state.isUpload === true ? false : true}>
                                <label>
                                    <DeleteIcon />
                                </label>
                            </IconButton>

                            <IconButton edge="end" disabled={state.isUpload ? true : false}
                                onClick={() => { document.getElementById("restaurant-logo-file").click() }}
                            >
                                <label>
                                    <AddAPhotoIcon />
                                </label>
                            </IconButton>
                        </CardIconActions>

                    </Grid>

                </Grid>
            </CardBody>

            <CardFooter form>
                <CustomBotton form="restaurant-form" size="sm" type="submit" disabled={state.isUpload} >
                    Guardar
                </CustomBotton>
            </CardFooter>

            {/* </Card> */}
        </form>
    );
};
const mapStateToProps = (state) => {
    const { company } = state;
    return {
        company: company.payload,
        fetching: company.fetching,
    }
};

export default connect(mapStateToProps, null)(RestaurantForm);
