// Dependencies
import React, { useState } from "react";
import moment from 'moment';
import 'moment/locale/es';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
// @material-ui/icons
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import DeleteIcon from '@material-ui/icons/Delete';
// core components
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import CardIconActions from '../../components/Card/CardIconActions.js';
import AvatarForm from '../../components/Avatar/Avatarform.js';
import IconInput from '../../components/CustomInput/IconInput.js';
import SelectInput from '../../components/CustomInput/SelectInput.js';
import CustomBotton from '../../components/CustomButtons/Button.js'
import CustomLoading from '../../components/Loading/CustomLoading.js';
// Assets
import image from '../../assets/img/defaults/table.png';
// Varieables
import { data } from '../../variables/JSON.js';
// Styles
import styles from "../../styles/pages/LoginStyle.js";
// Make styles
const useStyles = makeStyles(styles);
// Configs
moment.locale("en");
moment().format('l');

export default function CategoryAdd(props) {
    // Local State
    const [state, setState] = useState({
        file: null,
        name: "",
        print_id: "",
        isUpload: false,
        error: false
    });
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
            file: null,
            name: "",
            print_id: "",
            isUpload: false,
            error: false
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
                    file: {
                        image: reader.result,
                        type: file.type,
                        size: file.size,
                    },
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
            file: null
        });
        e.target.value = null;
    };
    // Register function
    const handleLogin = (e) => {
        e.preventDefault();
        alert("El nombre es: " + state.name + " el prefijo es: " + state.prefix)
        console.log(state);
        // alert(state.salary);
        // handleEmpty();
    };
    const classes = useStyles();
    return (
        <form id="category-add" onSubmit={handleLogin}>
            {/* <p className={classes.divider}>Or Be Classical</p> */}
            <Card variant="cardForm">

                <CustomLoading inside color="secondary" open={state.isUpload} />

                <CardHeader color="success" avatar>
                    <AvatarForm
                        image={state.file === null ? image : state.file.image}
                        alt="Imagen"
                        title="Imagen"
                        square
                    />
                    <input
                        // disabled={state.isUpload || showProgress ? true : false}
                        accept="image/png, image/jpeg, image/jpg"
                        id="category-file"
                        type="file"
                        name="image"
                        onChange={handleImage}
                        style={{ display: 'none' }}
                    />

                    <CardIconActions>
                        <IconButton edge="start" onClick={handleEmptyImage} disabled={state.file === null || state.isUpload ? true : false}>
                            <label>
                                <DeleteIcon />
                            </label>
                        </IconButton>

                        <IconButton edge="end" disabled={state.isUpload ? true : false} 
                            onClick={() => {document.getElementById("category-file").click()}}
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
                            <IconInput
                                variant={'standard'}
                                margin={'dense'}
                                color="primary"
                                // disabled={showProgress}
                                type="text"
                                label={'Categoría'}
                                name="name"
                                onChange={handleChange}
                                value={state.name}
                                required
                                // icon={<AccountBoxIcon />}
                                iconPosition="end"
                            />
                            <SelectInput
                                variant="standard"
                                margin="dense"
                                color="primary"
                                hoverColor="primary"
                                // disabled={showProgress}
                                id="print_id"
                                label="Imprimir en"
                                name="print_id"
                                onChange={handleChange}
                                value={state.print_id}
                                // categoryList={{
                                //     data: data,
                                //     key: "id",
                                //     value: "username"
                                // }}
                                itemList={{
                                    data: data,
                                    key: "id",
                                    value: "website"
                                }}
                                required
                            />
                        </Grid>
                    </Grid>
                </CardBody>

                <CardFooter form>
                    <CustomBotton form="table-add" size="sm" type="submit" disabled={state.isUpload} >
                        Agregar
                    </CustomBotton>
                </CardFooter>
            </Card>
        </form>
    );
};
