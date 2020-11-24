// Dependencies
import React from "react";
import SwipeableViews from "react-swipeable-views";
// Conecction to Store
import { connect } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// core components
import TabPanel from "../../../../components/Panel/TabPanel";
import GridProducts from "../../../../components/Grid/GridProducts";
// Styles
import styles from "../../../../styles/components/drawerStyle.js";
// import styles from "../../../../styles/pages/SalesStyle.js";

const useStyles = makeStyles(styles);

function ProductsGrid(props) {
  const {
    // Redux
    categories,
    products,
    // Props
    tabIndex,
    changeTabIndex,
    onClick,
    product_orders_list,
    background,
    global_quantity,
  } = props;

  // Styles
  const classes = useStyles();

  return (
    <div
      className={classes.content}
      style={{ backgroundImage: `url(${background})` }}
    >
      <SwipeableViews index={tabIndex} onChangeIndex={changeTabIndex}>
        {categories.map((index, key) => {
          return (
            <TabPanel key={key} value={tabIndex} index={key}>
              <Grid
                container
                spacing={0}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
              >
                <GridProducts
                  data={products}
                  keyCategory="category_id"
                  keySubcategory="sub_category_id"
                  filter={index.id}
                  imagePath="images/products/"
                  imagePath2="images/sub_categories/"
                  onClick={onClick}
                  color="secondary"
                  orders={product_orders_list}
                  renderRefresh={global_quantity}
                />
              </Grid>
            </TabPanel>
          );
        })}
      </SwipeableViews>
    </div>
  );
}
// Connect to Store State
const mapStateToProps = (state) => {
  const { category, product } = state;
  return {
    categories: category.payload,
    products: product.payload,
  };
};

export default connect(mapStateToProps, null)(ProductsGrid);
