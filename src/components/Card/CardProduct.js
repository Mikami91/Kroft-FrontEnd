// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
// Core components
import CardPrice from '../../components/Card/CardPrice.js';
import CardName from '../../components/Card/CardName.js';

// import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardFooter from "../../components/Card/CardFooter.js";
import Tasks from "../../components/Tasks/Tasks.js";
import Danger from "../../components/Typography/Danger.js";
import Warning from "@material-ui/icons/Warning";
import Store from "@material-ui/icons/Store";


// Styles
import styles from '../../styles/components/cardProductStyle';
// Assets
import image from '../../assets/img/defaults/product.png';

const useStyles = makeStyles(styles);

export default function CardProduct(props) {
    const classes = useStyles();
    const { prefix, price, name, color } = props;
    const cardClasses = classNames({
        [classes.products]: true,
    });
    return (

        <CardActionArea>
            <Card className={cardClasses}>
                <div className={classes.cardHeader}>
                    <h3 className={classes.price}>
                        {prefix + " " + price}
                    </h3>
                    {/* <CardPrice
                        color={color}
                        prefix={prefix}
                        text={price}
                    /> */}
                </div> 
                <CardMedia
                    component="img"
                    // height="140"
                    className={classes.image}
                    image={image}
                    title={name}
                //onClick={getKeyByValue(index.id)}
                />
                <div className={classes.cardFooter}>
                    <div className={classes.name}>
                        {"Typography " + name}
                    </div>
                </div>
            </Card>

        </CardActionArea>
    );
}
// Proptypes
CardProduct.defaultProps = {
    filter: "",
    data: [],
    color: "primary"
};
CardProduct.propTypes = {
    filter: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    data: PropTypes.array,
    color: PropTypes.oneOf([
        "primary",
        "secondary",
        "warning",
        "success",
        "danger",
        "info",
        "rose"
    ]),
};
