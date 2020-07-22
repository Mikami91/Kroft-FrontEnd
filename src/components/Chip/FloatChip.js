// Dependencies
import React, { useMemo, createElement } from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
// Style
import styles from "../../styles/components/chipStyle";

const useStyles = makeStyles(styles);

function FloatChip(props) {
    const { primary, secondary, color, type, icon } = props;
    const classes = useStyles();
    const avatarClasses = classNames({
        [classes.avatar]: true,
        [classes[color]]: true,
    });

    // Using useMemo hook
  return useMemo(() => {
    return (
        <div className={classes.chip}>
            <ListItem className={classes.listItem}>
                <ListItemAvatar className={classes.listItemAvatar}>
                    <Avatar className={avatarClasses}>
                        {icon !== null ? createElement(icon) : null}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    className={classes.listItemText}
                    primary={primary}
                    secondary={secondary}
                />
            </ListItem>
        </div>
    );
  }, [primary, secondary]);

};
// PropTypes
FloatChip.defaultProps = {
    primary: "",
    secondary: "",
    color: "primary",
    type: "icon",
    icon: null,
  };
  FloatChip.propTypes = {
    primary: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    secondary: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    type: PropTypes.oneOf([ "icon", "img" ]),
    icon: PropTypes.object,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "danger",
      "rose",
      "gray",
    ]),
  };

export default FloatChip;
