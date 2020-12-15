// Dependencies
import React, { useMemo } from "react";
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

const useStyles = makeStyles(styles);

function ListProducts(props) {
  const {
    // Redux
    categories,
    // Props
    tabIndex,
    changeTabIndex,
    product_orders_list,
    background,
    global_quantity,
    isProductOpen,
    setProductToOrder,
    openSubCategory,
  } = props;

  // Styles
  const classes = useStyles();

  // Using useMemo hook
  return useMemo(() => {
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
                    keyCategory="category_id"
                    keySubcategory="sub_category_id"
                    filter={index.id}
                    imagePath="images/products/"
                    imagePath2="images/sub_categories/"
                    color="secondary"
                    product_orders_list={product_orders_list}
                    global_quantity={global_quantity}
                    setProductToOrder={setProductToOrder}
                    openSubCategory={openSubCategory}
                    renderRefresh={isProductOpen}
                  />
                </Grid>
              </TabPanel>
            );
          })}
        </SwipeableViews>
      </div>
    );
  }, [isProductOpen, tabIndex, global_quantity]);
}
// Connect to Store State
const mapStateToProps = (state) => {
  const { category } = state;
  return {
    categories: category.payload,
  };
};

export default connect(mapStateToProps, null)(ListProducts);
