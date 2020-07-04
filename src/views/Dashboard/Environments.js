// Dependencies
import React, { Fragment, useState, useMemo } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
// Core Components
import TabPanel from "../../components/Panel/TabPanel";
import FooterTabBar from "../../components/Footer/FooterTabBar.js";
// Sub-Views
import SubEnvironments from "../../layouts/sub-views/Environments";
import SubTables from "../../layouts/sub-views/Tables";
// Icons
import DeckRoundedIcon from '@material-ui/icons/DeckRounded';
import TableChartRounded from '@material-ui/icons/TableChartRounded';

function Environments(props) {
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
            <SubEnvironments />
          </TabPanel>
          <TabPanel sub value={value} index={1}>
            <SubTables />
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
              text: "Ambientes",
              icon: DeckRoundedIcon,
            },
            {
              text: "Mesas",
              icon: TableChartRounded,
            },
          ]}
          tabsColor="secondary"
        />

      </Fragment>
    );
  }, [value]);
}
// PropTypes
Environments.propTypes = {
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  ),
};

export default Environments;
