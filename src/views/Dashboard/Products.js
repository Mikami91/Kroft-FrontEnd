// Dependencies
import React, { Fragment, useState, useMemo } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
// Core Components
import TabPanel from "../../components/Panel/TabPanel";
import FooterTabBar from "../../components/Footer/FooterTabBar.js";
// Sub-Views
import SubProducts from "../../layouts/sub-views/Products";
import Categories from "../../layouts/sub-views/Categories";
import Subcategories from "../../layouts/sub-views/Subcategories";
import PrintsCategories from "../../layouts/sub-views/PrintsCategories";
// Icons
import FastfoodRoundedIcon from "@material-ui/icons/FastfoodRounded";
import CategoryRoundedIcon from "@material-ui/icons/CategoryRounded";
import PrintRoundedIcon from "@material-ui/icons/PrintRounded";

function Products(props) {
  // TabPanel Swipeables Views
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return useMemo(() => {
    return (
      <Fragment>
        <SwipeableViews index={value} onChangeIndex={handleChange}>
          <TabPanel sub value={value} index={0}>
            <SubProducts />
          </TabPanel>
          <TabPanel sub value={value} index={1}>
            <Categories />
          </TabPanel>
          <TabPanel sub value={value} index={2}>
            <Subcategories />
          </TabPanel>
          <TabPanel sub value={value} index={3}>
            <PrintsCategories />
          </TabPanel>
        </SwipeableViews>

        <FooterTabBar
          witdh="dash"
          color="inherit"
          variant="dense"
          value={value}
          change={handleChange}
          tabs={[
            {
              text: "Productos",
              icon: FastfoodRoundedIcon,
            },
            {
              text: "Categorías",
              icon: CategoryRoundedIcon,
            },
            {
              text: "Subcategorías",
              icon: CategoryRoundedIcon,
            },
            {
              text: "Impresiones",
              icon: PrintRoundedIcon,
            },
          ]}
          tabsColor="secondary"
        />
      </Fragment>
    );
  }, [value]);
}
// PropTypes
Products.propTypes = {
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  ),
};

export default Products;
