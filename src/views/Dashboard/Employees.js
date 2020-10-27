// Dependencies
import React, { Fragment, useState, useMemo } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
// Core Components
import TabPanel from "../../components/Panel/TabPanel";
import FooterTabBar from "../../components/Footer/FooterTabBar.js";
// Sub-Views
import SubEmployees from "../../layouts/sub-views/Employees";
import Roles from "../../layouts/sub-views/Roles";
// Icons
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import AssignmentIndRoundedIcon from "@material-ui/icons/AssignmentIndRounded";

function Employees(props) {
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
            <SubEmployees />
          </TabPanel>
          <TabPanel sub value={value} index={1}>
            <Roles />
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
              text: "Personal",
              icon: PersonRoundedIcon,
            },
            {
              text: "Roles",
              icon: AssignmentIndRoundedIcon,
            },
          ]}
          tabsColor="secondary"
        />
      </Fragment>
    );
  }, [value]);
}
// PropTypes
Employees.propTypes = {
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  ),
};

export default Employees;
