// Dependencies
import React, { useState } from "react";
// Conecction to Store
import { connect } from 'react-redux';
// @material-ui/core components
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
import NumberInput from '../../components/CustomInput/NumberInput.js';
import CustomBotton from '../../components/CustomButtons/CustomButton.js'
import CustomLoading from '../../components/Loading/CustomLoading.js';
import CustomDivider from '../../components/Divider/CustomDivider.js';
// Functions
import { productCreate } from "../../functions/cruds/productFunctions";
// Assets
import image from '../../assets/img/defaults/product.png';

function ProductAdd(props) {
    const { fetching, categories, subcategories, printscategories } = props;
    // Local State
    const [state, setState] = useState({
        print_category_id: "",
        category_id: "",
        sub_category_id: "",
        photo: null,
        name: "",
        price: null,
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
            print_category_id: "",
            category_id: "",
            sub_category_id: "",
            photo: null,
            name: "",
            price: null,
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
                    photo: reader.result,
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
            photo: null
        });
        e.target.value = null;
    };

    // Create function
    const handleCreate = (e) => {
        e.preventDefault();
        productCreate(state).then((response) => {
            if (typeof response !== 'undefined') {
                if (response.success === true) {
                    handleEmpty();
                }
            }
        });
    };

    return (
        <form id="product-add" onSubmit={handleCreate}>
            <Card variant="cardForm">

                <CustomLoading inside color="primary" open={state.isUpload || fetching} />

                <CardHeader color="success" avatar>
                    <AvatarForm
                        image={state.photo === null ? image : state.photo}
                        alt="Imagen"
                        title="Imagen"
                        square
                    />
                    <input
                        accept="image/png, image/jpeg, image/jpg"
                        id="product-file-create"
                        type="file"
                        name="image"
                        onChange={handleImage}
                        style={{ display: 'none' }}
                    />

                    <CardIconActions>
                        <IconButton edge="start" onClick={handleEmptyImage} disabled={state.photo === null || state.isUpload ? true : false}>
                            <label>
                                <DeleteIcon />
                            </label>
                        </IconButton>

                        <IconButton edge="end" disabled={state.isUpload ? true : false}
                            onClick={() => { document.getElementById("product-file-create").click() }}
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

                            <CustomDivider text="Producto" color="warning" margin="dense" bold />

                            <IconInput
                                variant={'standard'} margin={'dense'}
                                color="primary"
                                disabled={fetching}
                                type="text"
                                label={'Nombre'}
                                name="name"
                                onChange={handleChange}
                                value={state.name}
                                required
                                // icon={<AccountBoxIcon />}
                                iconPosition="end"
                            />
                            <NumberInput
                                variant={'standard'}
                                margin={'dense'}
                                color="primary"
                                disabled={fetching}
                                label={'Precio'}
                                name="price"
                                value={state.price}
                                onChange={handleChange}
                                prefix={"Bs"}
                                required
                            />

                        </Grid>

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

                            <CustomDivider text="Categorías" color="warning" margin="dense" bold />

                            <SelectInput
                                variant="standard"
                                margin="dense"
                                color="primary"
                                hoverColor="primary"
                                disabled={fetching}
                                id="category_id"
                                label="Categoría"
                                name="category_id"
                                onChange={handleChange}
                                value={state.category_id}
                                itemList={{
                                    data: categories,
                                    key: "id",
                                    value: "name"
                                }}
                                required
                            />
                            <SelectInput
                                variant="standard"
                                margin="dense"
                                color="primary"
                                hoverColor="primary"
                                disabled={fetching}
                                id="sub_category_id"
                                label="Subcategoría"
                                name="sub_category_id"
                                onChange={handleChange}
                                value={state.sub_category_id}
                                itemList={{
                                    data: subcategories,
                                    key: "id",
                                    value: "name"
                                }}
                                required
                            />

                        </Grid>
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

                            <CustomDivider text="Impresión" color="warning" margin="dense" bold />

                            <SelectInput
                                variant="standard"
                                margin="dense"
                                color="primary"
                                hoverColor="primary"
                                disabled={fetching}
                                id="print_category_id"
                                label="Impresión"
                                name="print_category_id"
                                onChange={handleChange}
                                value={state.print_category_id}
                                itemList={{
                                    data: printscategories,
                                    key: "id",
                                    value: "name"
                                }}
                                required
                            />
                        </Grid>
                    </Grid>
                </CardBody>

                <CardFooter form>
                    <CustomBotton form="product-add" size="sm" type="submit" disabled={state.isUpload} >
                        Agregar
                    </CustomBotton>
                </CardFooter>
            </Card>
        </form>
    );
};
const mapStateToProps = (state) => {
    const { product, category, subcategory, printcategory } = state;
    return {
        fetching: product.fetching,
        categories: category.payload,
        subcategories: subcategory.payload,
        printscategories: printcategory.payload,
    }
};

export default connect(mapStateToProps, null)(ProductAdd);
