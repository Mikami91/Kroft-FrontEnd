// Dependencies
import React, { Fragment, useState, useMemo } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
// Core Components
import TabPanel from "../../components/Panel/TabPanel";
import FooterTabBar from "../../components/Footer/FooterTabBar.js";
// Sub-Views
import Boxes from "../../layouts/sub-views/Boxes";
import Payments from "../../layouts/sub-views/Payments";
import Restaurant from "../../layouts/sub-views/Restaurant";
// Icons
import AssignmentIndRoundedIcon from "@material-ui/icons/AssignmentIndRounded";
import PaymentRoundedIcon from "@material-ui/icons/PaymentRounded";
import RestaurantRoundedIcon from "@material-ui/icons/RestaurantRounded";

function Settings(props) {
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
            <Boxes />
          </TabPanel>
          <TabPanel sub value={value} index={1}>
            <Payments />
          </TabPanel>
          <TabPanel sub value={value} index={2}>
            <Restaurant />
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
              text: "Cajas",
              icon: AssignmentIndRoundedIcon,
            },
            {
              text: "Pagos",
              icon: PaymentRoundedIcon,
            },
            {
              text: "Restaurante",
              icon: RestaurantRoundedIcon,
            },
          ]}
          tabsColor="secondary"
        />
      </Fragment>
    );
  }, [value]);
}
// PropTypes
Settings.propTypes = {
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  ),
};

export default Settings;
