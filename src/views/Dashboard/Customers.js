// Dependencies
import React, { Fragment, useState, useMemo } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
// Core Components
import TabPanel from "../../components/Panel/TabPanel";
import FooterTabBar from "../../components/Footer/FooterTabBar.js";
// Sub-Views
import SubCustomers from "../../layouts/sub-views/Customers";
import Suppliers from "../../layouts/sub-views/Suppliers";
// Icons
import FastfoodRoundedIcon from '@material-ui/icons/FastfoodRounded';
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';

function Customers(props) {
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
            <SubCustomers />
          </TabPanel>
          <TabPanel sub value={value} index={1}>
            <Suppliers />
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
              text: "Proveedores",
              icon: FastfoodRoundedIcon,
            },
            {
              text: "Insumos",
              icon: PeopleRoundedIcon,
            },
          ]}
          tabsColor="secondary"
        />

      </Fragment>
    );
  }, [value]);
}
// PropTypes
Customers.propTypes = {
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  ),
};

export default Customers;
