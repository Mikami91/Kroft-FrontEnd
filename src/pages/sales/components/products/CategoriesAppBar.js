// Dependencies
import React from "react";
// Conecction to Store
import { connect } from "react-redux";
// core components
import AppBarIcons from "../../../../components/AppBar/AppBarIcons.js";

function CategoriesAppBar(props) {
  // Props
  const { categories, tabIndex, changeTabIndex, product_orders_list } = props;

  return (
    <AppBarIcons
      color="inherit"
      selectColor="secondary"
      hoverColor="secondary"
      data={categories}
      imagePath="images/categories/"
      value={tabIndex}
      onChange={changeTabIndex}
      orders={product_orders_list}
    />
  );
}
// Connect to Store State
const mapStateToProps = (state) => {
  const { category } = state;
  return {
    categories: category.payload,
  };
};

export default connect(mapStateToProps, null)(CategoriesAppBar);
