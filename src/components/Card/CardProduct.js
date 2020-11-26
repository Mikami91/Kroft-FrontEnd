// Dependencies
import React, { useMemo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// Conecction to Store
import { connect } from "react-redux";
// Actions Creators
import { orders as makeOrder } from "../../redux/actions/creators/productCreator";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import Badge from "@material-ui/core/Badge";
// Core Components
import CustomText from "../Typography/CustomText";
// Styles
import styles from "../../styles/components/cardProductStyle";
// Assets
import image from "../../assets/img/defaults/product.png";

const useStyles = makeStyles(styles);

function CardProduct(props) {
  const {
    // Props
    current_product,
    photo,
    name,
    prefix,
    price,
    quantity,
    color,
    variant,
  } = props;

  console.log(`%c CARD RENDER`, "color: lightgreen; font-size: large");

  // Styles
  const classes = useStyles();
  const cardClasses = classNames({
    [classes.products]: true,
  });

  // Using useMemo hook
  return useMemo(() => {
    return (
      <Badge badgeContent={quantity} color={color} variant={variant} max={99}>
        <CardActionArea onClick={() => makeOrder(current_product)}>
          <Card className={cardClasses}>
            <CardMedia
              component="img"
              height="140"
              className={classes.image}
              image={photo}
              title={name}
              loading="lazy"
            />
            <div className={classes.cardFooter}>
              <h3 className={classes.price}>{prefix + " " + price}</h3>
              <CustomText text={name} color="default" adjust={true} />
            </div>
          </Card>
        </CardActionArea>
      </Badge>
    );
  }, [quantity]);
}
// Proptypes
CardProduct.defaultProps = {
  current_product: null,
  photo: image,
  name: "",
  filter: "",
  price: "",
  quantity: 0,
  color: "primary",
  variant: "standard",
};
CardProduct.propTypes = {
  current_product: PropTypes.object,
  photo: PropTypes.string,
  name: PropTypes.string,
  prefix: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  quantity: PropTypes.number,
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "warning",
    "success",
    "danger",
    "info",
    "rose",
  ]),
  variant: PropTypes.oneOf(["standard", "dot"]),
};

export default connect(null, null)(CardProduct);
