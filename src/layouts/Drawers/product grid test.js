// Dependencies
import React, { Fragment, useState, useMemo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// Conecction to Store
import { connect } from 'react-redux';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// Core components
import CardProduct from "../../components/Card/CardProduct.js";
import CustomModal from "../../components/Modal/CustomModal.js";
import GridSubProducts from "../../components/Grid/GridSubProducts";
// API
import { API } from '../../API/index';
// Assets
import image from "../../assets/img/defaults/product.png";
// Styles
import styles from "../../styles/components/gridStyle";

const useStyles = makeStyles(styles);

function GridProducts(props) {
  const {
    // Redux
    orders_list, current,
    // props
    data, keyCategory, keySubcategory, filter, imagePath, imagePath2, onClick, color } = props;

  // State for Modal Subcategories
  const [subCategory, setSubCategory] = useState({
    open: false,
    name: "",
    key: null,
    payload: [],
  });
  const handleOpenSub = (name, key) =>
    setSubCategory({
      open: true,
      name: name,
      key: key,
      payload: data.filter((index) => index[keySubcategory] === key),
    });
  const handleCloseSub = () =>
    setSubCategory({
      open: false,
      name: "",
      key: null,
      payload: [],
    });

  // console.time("products_orders");
  const products_orders = useMemo(() => {
    let env_index = orders_list.findIndex(index => index.environment_id === current.environment_id);
    let table_index = orders_list[env_index].tables.findIndex(index => index.table_id === current.table_id);
    let array_list_products = orders_list[env_index].tables[table_index].products;
    return array_list_products;
  }, [orders_list, current]);
  // console.timeEnd("products_orders");


  // Search Product ID in Orders list and return his quantity
  const handleQuantity = (product_id) => {
    // let env_index = orders_list.findIndex(index => index.environment_id === current.environment_id);
    // let table_index = orders_list[env_index].tables.findIndex(index => index.table_id === current.table_id);
    // let array_list_products = orders_list[env_index].tables[table_index].products;

    for (let index = 0; index < products_orders.length; index++) {
      if (products_orders[index].product_id === product_id) {
        return products_orders[index].product_quantity;
      }
    }
  };

  // Styles
  const classes = useStyles();
  const gridClasses = classNames({
    [classes.products]: true,
  });

  // Using useMemo hook
  return useMemo(() => {
    // Render
    return (
      <Fragment>
        {data.map((index, key) => {
          if (index[keyCategory] === filter) {
            return (
              <Grid
                key={key}
                item
                xs={4}
                sm={3}
                md={2}
                lg={2}
                xl={2}
                elevation={0}
                className={gridClasses}
              >
                {index[keySubcategory] === null ? (
                  <CardProduct
                    color={color}
                    prefix={"Bs."}
                    price={index.price}
                    photo={API + imagePath + index.photo}
                    name={index.name}
                    quantity={handleQuantity(index.id)}
                    onClick={() => onClick(index)}
                  />
                ) : (
                    <CardProduct
                      color={color}
                      prefix={""}
                      price={""}
                      photo={API + imagePath2 + index.sub_category_photo}
                      name={index.sub_category_name}
                      quantity={handleQuantity(index.id)}

                      // quantity={index.id}
                      onClick={() =>
                        handleOpenSub(index.sub_category_name, index[keySubcategory])
                      }
                    />
                  )}
              </Grid>
            );
          }
          return null;
        })}

        <CustomModal
          open={subCategory.open}
          close={handleCloseSub}
          title={{
            text: subCategory.name,
            size: "medium",
          }}
          content={
            <GridSubProducts
              data={subCategory.payload}
              keyData="sub_category_id"
              filter={subCategory.key}
              imagePath="images/products/"
              onClick={onClick}
              color="secondary"
            />
          }
          scroll="paper"
          maxWidth="md"
          fullWidth
        />
      </Fragment>
    );
  }, [data, subCategory.open]);
}
// Proptypes
GridProducts.defaultProps = {
  data: [],
  keyCategory: "",
  keySubcategory: "",
  filter: "",
  imagePath: "",
  imagePath2: "",
  onClick: null,
  color: "primary",
};
GridProducts.propTypes = {
  data: PropTypes.array,
  keyCategory: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  keySubcategory: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  filter: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  imagePath: PropTypes.string,
  imagePath2: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "warning",
    "success",
    "danger",
    "info",
    "rose",
  ]),
};

// Connect to Store State
const mapStateToProps = (state) => {
  const { product } = state;
  return {
    orders_list: product.orders,
    current: product.current,
  }
};
export default connect(mapStateToProps, null)(GridProducts);
