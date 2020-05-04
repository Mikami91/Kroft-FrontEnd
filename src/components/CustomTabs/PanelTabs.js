// Dependencies
import React from 'react';
import classNames from "classnames";
import PropTypes from "prop-types";
// UI Material Components
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
// Components
import TabPanel from '../../components/Panel/TabPanel';
// Styles
import styles from '../../styles/components/panelTabsStyle';

const useStyles = makeStyles(styles);

// Component
const PanelTabs = (props) => {
    const { value, children } = props;
    const classes = useStyles();
    // const cardTitle = classNames({
    //     [classes.cardTitle]: true,
    //     [classes.cardTitleRTL]: false
    // });
    return (
        // <TabPanel value={value}>
            <Grid
                container
                className={classes.content}
                justify="center"
                alignItems="center"
            >
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    elevation={6}
                    square="true"
                    className={classes.container}
                >
                    {/* {children} */}
                </Grid>
            </Grid>
        // </TabPanel>
    );
};

// PropTypes
PanelTabs.propTypes = {
    children: PropTypes.node,
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

export default PanelTabs;
