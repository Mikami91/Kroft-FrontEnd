// Dependencies
import React, { useState } from "react";
import PropTypes from "prop-types";
// @material-ui/Componentes
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
// Core Components
import CustomAppBar from "../../components/AppBar/CustomAppBar";
import MultiTabs from '../../components/CustomTabs/MultiTabs';
import Tasks from "../../components/Tasks/Tasks.js";
// Variables
import { bugs, website, server } from "../../variables/general.js";
// Icons
import DeckRoundedIcon from '@material-ui/icons/DeckRounded';

const SalesAppBar = ({ style }) => {
  // TabPanel Swipeables Views
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  // Change Desktop and Mobile display
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <CustomAppBar position="fixed" color="primary" variant="regular">
      <MultiTabs
        centered
        title="Tasks:"
        headerColor="primary"
        tabs={[
            {
                tabName: "Bugs",
                tabIcon: DeckRoundedIcon,
                tabContent: (
                    <Tasks
                        checkedIndexes={[0, 3]}
                        tasksIndexes={[0, 1, 2, 3]}
                        tasks={bugs}
                    />
                )
            },
            {
                tabName: "Website",
                tabIcon: DeckRoundedIcon,
                tabContent: (
                    <Tasks
                        checkedIndexes={[0]}
                        tasksIndexes={[0, 1]}
                        tasks={website}
                    />
                )
            },
            {
                tabName: "Server",
                tabIcon: DeckRoundedIcon,
                tabContent: (
                    <Tasks
                        checkedIndexes={[1]}
                        tasksIndexes={[0, 1, 2]}
                        tasks={server}
                    />
                )
            }
        ]}
      />
    </CustomAppBar>
  );
};

// PropTypes
SalesAppBar.propTypes = {
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  ),
};

export default SalesAppBar;
