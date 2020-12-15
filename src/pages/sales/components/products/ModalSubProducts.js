// Dependencies
import React, { useMemo } from "react";
import classNames from "classnames";
// Conecction to Store
import { connect } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// Core components
import CustomModal from "../../../../components/Modal/CustomModal.js";
import CardProduct from "../../../../components/Card/CardProduct.js";
// Styles
import styles from "../../../../styles/components/gridStyle";

const useStyles = makeStyles(styles);

function ModalSubProducts(props) {
  const {
    // Redux
    current,
    // props
    subCategory,
    close,
    product_orders_list,
    setProductToOrder,
  } = props;

  // Search Product ID in Orders list and return his quantity
  const handleQuantity = (product_id) => {
    // if (Array.isArray(orders) && orders.length) {
    for (let index = 0; index < product_orders_list.length; index++) {
      if (product_orders_list[index].product_id === product_id) {
        return product_orders_list[index].product_quantity;
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
      <CustomModal
        open={subCategory.open}
        close={close}
        title={{
          text: subCategory.name,
          size: "medium",
        }}
        content={
          <Grid
            container
            spacing={0}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            {subCategory.payload.map((index, key) => {
              if (index.sub_category_id === subCategory.key) {
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
                      color="secondary"
                      prefix="Bs."
                      price={index.price}
                      photo={
                        "https://source.unsplash.com/300x300/?food,breakfast"
                      }
                      // photo={API + imagePath + index.photo}
                      name={index.name}
                      quantity={handleQuantity(index.id)}
                      onClick={() => setProductToOrder(index)}
                      keyi={key}
                    />
                  </Grid>
                );
              }
              return null;
            })}
          </Grid>
        }
        variant="paper"
        maxWidth="md"
        fullWidth
        renderRefresh={[subCategory.open, current.global_quantity]}
      />
    );
  }, [subCategory.open, current.global_quantity]);
}

// Connect to Store State
const mapStateToProps = (state) => {
  const { product } = state;
  return {
    products: product.payload,
    orders_list: product.orders,
    current: product.current,
  };
};
export default connect(mapStateToProps, null)(ModalSubProducts);
