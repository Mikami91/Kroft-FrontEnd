// Dependencies
import React, { Fragment, useState, useMemo } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
// Conecction to Store
import { connect } from "react-redux";
// Core Components
import TabPanel from "../../components/Panel/TabPanel";
import FooterTabBar from "../../components/Footer/FooterTabBar.js";
// Sub-Views
import SubEmployees from "../../layouts/sub-views/Employees";
import Admins from "../../layouts/sub-views/Admins";
import Roles from "../../layouts/sub-views/Roles";
// Icons
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import AssignmentIndRoundedIcon from "@material-ui/icons/AssignmentIndRounded";

function Employees(props) {
  // Props
  const { superadmin } = props;
  // TabPanel Swipeables Views
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabsList = [
    {
      text: "Personal",
      icon: PersonRoundedIcon,
    },
    {
      text: "Roles",
      icon: AssignmentIndRoundedIcon,
    },
  ];

  const tabAdmins = {
    text: "Administradores",
    icon: AssignmentIndRoundedIcon,
  };

  const isSuper =
    superadmin &&
    Object.keys(superadmin).length > 0 &&
    superadmin.constructor === Object;

  if (isSuper) {
    tabsList.push(tabAdmins);
  }

  console.log(isSuper);

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

          {isSuper ? (
            <TabPanel sub value={value} index={2}>
              <Admins />
            </TabPanel>
          ) : (
            <></>
          )}
        </SwipeableViews>

        <FooterTabBar
          witdh="dash"
          color="inherit"
          variant="dense"
          value={value}
          change={handleChange}
          tabs={tabsList}
          tabsColor="secondary"
        />
      </Fragment>
    );
  }, [superadmin, isSuper, value]);
}
// PropTypes
Employees.propTypes = {
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  ),
};

const mapStateToProps = (state) => {
  const { superadmin } = state;
  return {
    superadmin: superadmin.payload,
  };
};

export default connect(mapStateToProps, null)(Employees);
