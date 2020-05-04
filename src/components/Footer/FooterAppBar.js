// Dependencies
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// @material-ui/Componentes
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Fab from "@material-ui/core/Fab";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

import { makeStyles } from "@material-ui/core/styles";
// Icons
import DeckRoundedIcon from '@material-ui/icons/DeckRounded';
// Styles
import styles from '../../styles/components/footerStyle';

const useStyles = makeStyles(styles);

// Component
const FooterAppBar = (props) => {
    // Props
    const { fabButton, rightButtons, leftButtons, value, onChange, color, position, indicatorColor, textColor, variant, scrollButtons, centered, drawer, children } = props;
    // Styles
    const classes = useStyles();
    const footerClasses = classNames({
        [classes.footerAppBar]: true,
        [classes.footerLogin]: drawer,
    });
    // Render
    return (
        <AppBar position={position} color={color} className={footerClasses} variant="elevation">

            <Toolbar
                variant={variant}
            >

                <div style={{ marginRight: "auto" }}>
                    {rightButtons.map((index, key) => {

                        if (index.disabled === false && index.type === "icon") {
                            return (
                                <Tooltip key={key} placement="top" title={index.text}>
                                    <IconButton edge={index.edge} onClick={index.onClick}>
                                        {<index.icon fontSize={index.size} />}
                                    </IconButton>
                                </Tooltip>
                            );
                        }
                        if (index.disabled === true && index.type === "icon") {
                            return (
                                <IconButton key={key} edge={index.edge} disabled>
                                    {<index.icon fontSize={index.size} />}
                                </IconButton>
                            );
                        } else {
                            return (
                                <Fab key={key} disabled={index.disabled} color={index.color} size="small" aria-label={index.label} onClick={index.onClick} className={classes.fabButton + " " + classes.rightFab} >
                                    <index.icon />
                                </Fab>
                            );
                        }
                    })}
                </div>

                {Object.keys(fabButton).length >= 1 ?
                    <Fab disabled={fabButton.disabled} color={fabButton.color} size="small" aria-label={fabButton.label} onClick={fabButton.onClick} className={classes.fabButtonFloat + " " + classes[fabButton.align + "FabFloat"]} >
                        <fabButton.icon />
                    </Fab> : null
                }



                <div style={{ marginLeft: "auto" }}>
                    {leftButtons.map((index, key) => {

                        if (index.disabled === false && index.type === "icon") {
                            return (
                                <Tooltip key={key} placement="top" title={index.text}>
                                    <IconButton edge={index.edge} onClick={index.onClick}>
                                        {<index.icon fontSize={index.size} />}
                                    </IconButton>
                                </Tooltip>
                            );
                        }
                        if (index.disabled === true && index.type === "icon") {
                            return (
                                <IconButton key={key} edge={index.edge} disabled>
                                    {<index.icon fontSize={index.size} />}
                                </IconButton>
                            );
                        } else {
                            return (
                                <Fab key={key} disabled={index.disabled} color={index.color} size="small" aria-label={index.label} onClick={index.onClick} className={classes.fabButton + " " + classes.leftFab} >
                                    <index.icon />
                                </Fab>
                            );
                        }
                    })}
                </div>

            </Toolbar>

        </AppBar>
    );
};

// PropTypes
FooterAppBar.defaultProps = {
    // AppBar
    position: "fixed",
    color: "primary",
    gutters: false,
    drawer: false,
    // Tabs
    buttons: [],
    value: "",
    onChange: null,
    indicatorColor: "primary",
    textColor: "primary",
    variant: "regular",
    scrollButtons: "off",
    centered: false
};
FooterAppBar.propTypes = {
    // AppBar
    position: PropTypes.oneOf([
        "absolute",
        "fixed",
        "relative",
        "static",
        "sticky",
    ]),
    color: PropTypes.oneOf([
        "default",
        "inherit",
        "primary",
        "secondary",
        "transparent",
    ]),
    disableGutters: PropTypes.bool,
    drawer: PropTypes.bool,
    // Tabs
    buttons: PropTypes.array,
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    onChange: PropTypes.func,
    indicatorColor: PropTypes.oneOfType([
        "inherit",
        "primary",
        "secondary"
    ]),
    textColor: PropTypes.oneOfType([
        "inherit",
        "primary",
        "secondary"
    ]),
    variant: PropTypes.oneOf([
        "regular",
        "dense",
    ]),
    scrollButtons: PropTypes.oneOfType([
        "on",
        "off",
        "auto",
        "desktop"
    ]),
    centered: PropTypes.bool
};

export default FooterAppBar;
