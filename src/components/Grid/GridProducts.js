// Dependencies
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// Conecction to Store
import { connect } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// Core components
import CardProduct from "../../components/Card/CardProduct.js";
// API
import { API } from "../../API/index";
// Styles
import styles from "../../styles/components/gridStyle";
import { product } from "../../redux/actions/creators/collectCreator.js";

const useStyles = makeStyles(styles);

function GridProducts(props) {
  const {
    // Redux
    products,
    // props
    keyCategory,
    keySubcategory,
    filter,
    setProductToOrder,
    openSubCategory,
    product_orders_list,
    color,
  } = props;

  console.log(`%c GRID RENDER`, "color: lightgreen; font-size: large");

  // Search Product ID in Orders list and return his quantity
  const handleQuantity = (product_id) => {
    for (let index = 0; index < product_orders_list.length; index++) {
      if (product_orders_list[index].product_id === product_id) {
        return product_orders_list[index].product_quantity;
      }
    }
  };

  // Find if Product Orders has SubCategory ID
  const found_sub_category_id = (sub_category_id) =>
    product_orders_list.some(
      (index) => index.sub_category_id === sub_category_id
    )
      ? 1
      : 0;

  // Styles
  const classes = useStyles();
  const gridClasses = classNames({
    [classes.products]: true,
  });

  // Render
  return products.map((index, key) =>
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
        {index[keySubcategory] === null ? (
          <CardProduct
            color={color}
            prefix={"Bs."}
            price={index.price}
            photo={"https://source.unsplash.com/300x300/?food,breakfast"}
            name={index.name}
            quantity={handleQuantity(index.id)}
            current_product={index}
            variant={"standard"}
            onClick={() => setProductToOrder(index)}
          />
        ) : (
          <CardProduct
            color={color}
            prefix={""}
            price={""}
            photo={"https://source.unsplash.com/300x300/?food,breakfast"}
            name={index.sub_category_name}
            quantity={found_sub_category_id(index[keySubcategory])}
            current_product={index}
            variant={"dot"}
            onClick={() =>
              openSubCategory(
                index.sub_category_name,
                index[keySubcategory],
                products
              )
            }
          />
        )}
      </Grid>
    ) : null
  );
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
};

// Connect to Store State
const mapStateToProps = (state) => {
  const { product } = state;
  return {
    products: product.payload,
  };
};
export default connect(mapStateToProps, null)(GridProducts);
