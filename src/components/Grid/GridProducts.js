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
// Styles
import styles from "../../styles/components/gridStyle";

const useStyles = makeStyles(styles);

function GridProducts(props) {
  const {
    // Redux
    // orders_list, current,
    // props
    data, keyCategory, keySubcategory, filter, imagePath, imagePath2, onClick, color, renderRefresh, orders } = props;

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

  // // Products Orders List
  // let product_orders_list = [];
  // if (current.env_index !== null && current.table_index !== null) {
  //   product_orders_list = orders_list[current.env_index].tables[current.table_index].products;
  // }

  // Search Product ID in Orders list and return his quantity
  const handleQuantity = (product_id) => {
    for (let index = 0; index < orders.length; index++) {
      if (orders[index].product_id === product_id) {
        return orders[index].product_quantity;
      }
    }
  };

  // Find if Product Orders has SubCategory ID
  const found_sub_category_id = (sub_category_id) => {
    let found = orders.some(index => index.sub_category_id === sub_category_id);
    if (found === true) {
      return 1;
    } else {
      return 0;
    }
  }

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
                    // photo={'https://source.unsplash.com/300x300/?food,breakfast'}
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
                      // photo={'https://source.unsplash.com/300x300/?food,breakfast'}
                      name={index.sub_category_name}
                      quantity={found_sub_category_id(index.sub_category_id)}
                      // quantity={index.id}
                      onClick={() =>
                        handleOpenSub(index.sub_category_name, index[keySubcategory])
                      }
                      variant="dot"
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
              orders={orders}
              renderRefresh={renderRefresh}
            />
          }
          renderRefresh={renderRefresh}
          scroll="paper"
          maxWidth="md"
          fullWidth
        />
      </Fragment>
    );
  }, [data, subCategory.open, renderRefresh]);
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
  renderRefresh: null,
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
    orders_list: product.orders,
    current: product.current,
  }
};
export default connect(mapStateToProps, null)(GridProducts);
