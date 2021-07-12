// Dependencies
import Grid from "@material-ui/core/Grid";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
// Conecction to Store
import { connect } from "react-redux";
// API
import { API } from "../../API/index";
// Core components
import CardProduct from "../../components/Card/CardProduct.js";
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
    setProductToOrder,
    openSubCategory,
    product_orders_list,
    imagePath,
    imagePath2,
    color,
  } = props;

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

  // Remove duplicate Subcategories in the Products list  
  function removeDuplicates(originalArray, prop) {
    var newArray = [];

    originalArray.map(i => {
      if (i[prop] === null) {
        newArray.push(i);
      } else {
        let exitsID = newArray.some(e => e[prop] === i[prop]);
        if (!exitsID) {
          newArray.push(i);
        }
      }
    })

    return newArray;
  }

  const uniqueArray = removeDuplicates(products, "sub_category_id");


  // Render
  return uniqueArray.map((index, key) => {

    if (index[keyCategory] === filter) {
      return (
        <Grid
          key={key}
          item
          xs={4}
          sm={3}
          md={3}
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
              current_product={index}
              variant={"standard"}
              onClick={() => setProductToOrder(index)}
            />
          ) : (
            <CardProduct
              color={color}
              prefix={""}
              price={""}
              photo={API + imagePath2 + index.sub_category_photo}
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
      );
    }

  });
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
