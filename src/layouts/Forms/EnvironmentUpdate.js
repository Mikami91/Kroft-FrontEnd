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
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CardIconActions from '../../components/Card/CardIconActions.js';
import AvatarForm from '../../components/Avatar/Avatarform.js';
import IconInput from '../../components/CustomInput/IconInput.js';
import CustomLoading from '../../components/Loading/CustomLoading.js';
// Functions
import { environmentUpdate } from "../../functions/environmentFunctions";
// Apis
import { API } from '../../API/index';

function EnvironmentUpdate(props) {
    const {
        // Redux 
        fetching,
        // Props
        data,
        close,
    } = props;
    const current_image = typeof data.photo === "undefined" ? null : `${API}images/environments/${data.photo}`;
    // Local State
    const [state, setState] = useState({
        photo: null,
        name: "",
        prefix: "",
        isUpload: false,
        photoChange: false,
        error: false
    });

    useEffect(() => {
        if (Object.keys(data).length > 0) {
            setState({
                ...data,
                photo: null,
                name: data.name,
                prefix: data.prefix,
                isUpload: false,
                photoChange: false,
                error: false,
            });
        }
    }, [data])

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
            photo: null,
            name: "",
            prefix: "",
            isUpload: false,
            photoChange: false,
            error: false
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
                    photoChange: true,
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

    // Update function
    const handleUpdate = (e) => {
        e.preventDefault();
        environmentUpdate(state).then((response) => {
            if (typeof response !== 'undefined') {
                if (response.success === true) {
                    close();
                    handleEmpty();
                }
            }
        });
    };
    return (
        <form id="environment-update" onSubmit={handleUpdate} encType="multipart/form-data" >

            <CustomLoading inside color="primary" open={state.isUpload || fetching} />

            <CardHeader color="success" avatar modal>
                <AvatarForm
                    image={state.photoChange === true ? state.photo : current_image}
                    alt="Imagen"
                    title="Imagen"
                    square
                />
                <input
                    // disabled={state.isUpload || showProgress ? true : false}
                    accept="image/png, image/jpeg, image/jpg"
                    id="environment-file-update"
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
                        onClick={() => { document.getElementById("environment-file-update").click() }}
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
                        <IconInput
                            variant={'standard'}
                            margin={'dense'}
                            color="primary"
                            disabled={fetching}
                            type="text"
                            label={'Ambiente'}
                            name="name"
                            onChange={handleChange}
                            value={state.name}
                            required
                            iconPosition="end"
                        />
                        <IconInput
                            variant={'standard'}
                            margin={'dense'}
                            color="primary"
                            disabled={fetching}
                            type="text"
                            label={'Prefijo'}
                            name="prefix"
                            onChange={handleChange}
                            value={state.prefix}
                            required
                            iconPosition="end"
                        />
                    </Grid>
                </Grid>
            </CardBody>
        </form>
    );
};
// Connect to Store State
const mapStateToProps = (state) => {
    const { environment } = state;
    return {
        fetching: environment.fetching,
    }
};

export default connect(mapStateToProps, null)(EnvironmentUpdate);
