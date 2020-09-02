// Dependencies
import React, { Fragment, useState, useMemo } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
// Core Components
import TabPanel from "../../components/Panel/TabPanel";
import FooterTabBar from "../../components/Footer/FooterTabBar.js";
// Sub-Views
import PrintsCategories from "../../layouts/sub-views/PrintsCategories";
import CashierReports from "../../layouts/sub-views/CashierReports";
import WaiterReports from "../../layouts/sub-views/WaiterReports";
import EnvironmentReports from "../../layouts/sub-views/EnvironmentReports";
import TableReports from "../../layouts/sub-views/TableReports";
// Icons
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import PrintRoundedIcon from '@material-ui/icons/PrintRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import DeckRoundedIcon from '@material-ui/icons/DeckRounded';
import TableChartRounded from '@material-ui/icons/TableChartRounded';

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
            <PrintsCategories />
          </TabPanel>
          <TabPanel sub value={value} index={1}>
            <CashierReports />
          </TabPanel>
          {/* <TabPanel sub value={value} index={2}>
            <WaiterReports />
          </TabPanel>
          <TabPanel sub value={value} index={3}>
            <EnvironmentReports />
          </TabPanel>
          <TabPanel sub value={value} index={4}>
            <TableReports />
          </TabPanel> */}

        </SwipeableViews>

        <FooterTabBar
          witdh="dash"
          color="inherit"
          variant="dense"
          value={value}
          change={handleChange}
          tabs={[
            {
              text: "Impresiones",
              icon: PrintRoundedIcon,
            },
            {
              text: "Cajeros",
              icon: GroupRoundedIcon,
            },
            // {
            //   text: "Meseros",
            //   icon: GroupRoundedIcon,
            // },
            // {
            //   text: "Ambientes",
            //   icon: DeckRoundedIcon,
            // },
            // {
            //   text: "Mesas",
            //   icon: TableChartRounded,
            // },
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
