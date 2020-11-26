// Dependencies
import React, { useMemo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// Conecction to Store
import { connect } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// Core components
import CardProduct from "../Card/CardProduct.js";
// API
import { API } from "../../API/index";
// Styles
import styles from "../../styles/components/gridStyle";

const useStyles = makeStyles(styles);

function GridSubProducts(props) {
  const {
    // props
    data,
    keyData,
    filter,
    imagePath,
    onClick,
    color,
    orders,
    current_product,
    renderRefresh,
  } = props;

  // Search Product ID in Orders list and return his quantity
  const handleQuantity = (product_id) => {
    // if (Array.isArray(orders) && orders.length) {
    for (let index = 0; index < orders.length; index++) {
      if (orders[index].product_id === product_id) {
        return orders[index].product_quantity;
      }
    }
    // }
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
      <Grid
        container
        spacing={0}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {data.map((index, key) => {
          if (index[keyData] === filter) {
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
                <CardProduct
                  // color="success"
                  color={color}
                  prefix="Bs."
                  price={index.price}
                  photo={"https://source.unsplash.com/300x300/?food,breakfast"}
                  // photo={API + imagePath + index.photo}
                  name={index.name}
                  quantity={handleQuantity(index.id)}
                  current_product={current_product}
                  // onClick={() => onClick(index)}
                  keyi={key}
                />
              </Grid>
            );
          }
          return null;
        })}
      </Grid>
    );
  }, [data, renderRefresh]);
}
// Proptypes
GridSubProducts.defaultProps = {
  data: [],
  keyData: "",
  filter: "",
  imagePath: "",
  onClick: null,
  color: "primary",
  renderRefresh: null,
};
GridSubProducts.propTypes = {
  data: PropTypes.array,
  keyData: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  filter: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  imagePath: PropTypes.string,
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
// const mapStateToProps = (state) => {
//   const { product } = state;
//   return {
//     orders_list: product.orders,
//     current: product.current,
//   }
// };
export default connect(null, null)(GridSubProducts);
