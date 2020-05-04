// Dependencies
import React from 'react';
import classNames from "classnames";
import PropTypes from "prop-types";
// Conecction to Store
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
// UI Material Components
import Grid from "@material-ui/core/Grid";
import { AppBar, Tab, Tabs, Typography } from "@material-ui/core";
// Containers
import GridContainer from '../../components/Grid/GridContainer';
import PanelTabs from '../../components/CustomTabs/PanelTabs';
// Variables
import { data } from '../../variables/JSON';
// Icons
import DeckRoundedIcon from '@material-ui/icons/DeckRounded';

const url = 'http://kroftserver.test/images/environments/';

// Component
const SalesAppBar = (props) => {
  // Props
  const { data, value, onChange, color, position, indicatorColor, textColor, variant, scrollButtons, centered } = props;
  // Styles

  // Render
  return (
    <AppBar position="fixed" color="inherit" style={{ top: -1 }} >
      {/* <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="inherit"
        textColor="inherit"
        variant={environCount <= 5 ? 'fullWidth' : 'scrollable'}
        scrollButtons={environCount <= 5 ? 'off' : 'auto'}
        centered={environCount <= 5 ? true : false}
      >
        {data.map((index, key) => (

          <Tab
            key={key}
            label={
              <Typography noWrap >{index.name}</Typography>
            }
            icon={<DeckRoundedIcon />}
          />

        ))}

      </Tabs> */}
    </AppBar>
  );
};
// PropTypes
SalesAppBar.propTypes = {
  headerColor: PropTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "secondary",
    "rose"
  ]),
  title: PropTypes.string,
  stats: PropTypes.bool,
  dense: PropTypes.bool,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabName: PropTypes.string.isRequired,
      tabIcon: PropTypes.object,
      tabContent: PropTypes.node.isRequired
    })
  ),
  rtlActive: PropTypes.bool,
  plainTabs: PropTypes.bool
};
export default SalesAppBar;
