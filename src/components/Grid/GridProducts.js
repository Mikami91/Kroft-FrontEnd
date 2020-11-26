// Dependencies
import React, { Fragment, useState, useMemo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// Conecction to Store
import { connect } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// Core components
import CardProduct from "../../components/Card/CardProduct.js";
import CustomModal from "../../components/Modal/CustomModal.js";
import GridSubProducts from "../../components/Grid/GridSubProducts";
// API
import { API } from "../../API/index";
// Styles
import styles from "../../styles/components/gridStyle";

const useStyles = makeStyles(styles);

function GridProducts(props) {
  const {
    // Redux
    products,
    // props
    keyCategory,
    keySubcategory,
    filter,
    imagePath,
    imagePath2,
    onClick,
    color,
    renderRefresh,
    orders,
  } = props;

  console.log(`%c GRID RENDER`, "color: lightgreen; font-size: large");

  // State for Modal Subcategories
  const [subCategory, setSubCategory] = useState({
    open: false,
    name: "",
    key: null,
    current_product: null,
    payload: [],
  });
  const handleOpenSub = (name, key, current_product) =>
    setSubCategory({
      open: true,
      name: name,
      key: key,
      current_product: current_product,
      payload: products.filter((index) => index[keySubcategory] === key),
    });
  const handleCloseSub = () =>
    setSubCategory({
      open: false,
      name: "",
      key: null,
      current_product: null,
      payload: [],
    });

  // // Products Orders List
  // let product_orders_list = [];
  // if (current.env_index !== null && current.table_index !== null) {
  //   product_orders_list = orders_list[current.env_index].tables[current.table_index].products;
  // }

  // Search Product ID in Orders list and return his quantity
  const handleQuantity = (product_id) => {
    for (let index = 0; index < orders.length; index++) {
      if (orders[index].product_id === product_id) {
        console.log(orders[index].product_quantity);
        return orders[index].product_quantity;
      }
    }
  };

  // Find if Product Orders has SubCategory ID
  const found_sub_category_id = (sub_category_id) => {
    let found = orders.some(
      (index) => index.sub_category_id === sub_category_id
    );
    if (found === true) {
      return 1;
    } else {
      return 0;
    }
  };

  // Styles
  const classes = useStyles();
  const gridClasses = classNames({
    [classes.products]: true,
  });

  // Using useMemo hook
  // return useMemo(() => {
    // Render
    return (
      <Fragment>
        {products.map((index, key) =>
          index[keyCategory] === filter ? (
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
              <CardProduct
                color={color}
                prefix={index[keySubcategory] === null ? "Bs." : ""}
                price={index[keySubcategory] === null ? index.price : ""}
                photo={"https://source.unsplash.com/300x300/?food,breakfast"}
                name={index.name}
                quantity={
                  index[keySubcategory] === null
                    ? handleQuantity(index.id)
                    : found_sub_category_id(index[keySubcategory])
                }
                current_product={index}
                variant={index[keySubcategory] === null ? "standard" : "dot"}
              />
            </Grid>
          ) : null
        )}
      </Fragment>
    );
  // }, [products, subCategory.open, renderRefresh]);
}
// Proptypes
GridProducts.defaultProps = {
  products: [],
  keyCategory: "",
  keySubcategory: "",
  filter: "",
  imagePath: "",
  imagePath2: "",
  onClick: null,
  color: "primary",
  renderRefresh: null,
};
GridProducts.propTypes = {
  products: PropTypes.array,
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
  renderRefresh: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.object,
  ]),
};

// Connect to Store State
const mapStateToProps = (state) => {
  const { product } = state;
  return {
    products: product.payload,
    orders_list: product.orders,
    current: product.current,
  };
};
export default connect(mapStateToProps, null)(GridProducts);
