// Dependencies
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import Badge from "@material-ui/core/Badge";
// Styles
import styles from "../../styles/components/cardProductStyle";
// Assets
import image from "../../assets/img/defaults/product.png";

const useStyles = makeStyles(styles);

export default function CardProduct(props) {
  const classes = useStyles();
  const { prefix, price, quantity, name, onClick, color } = props;
  const cardClasses = classNames({
    [classes.products]: true,
  });
  return (
    <Badge badgeContent={quantity} color={color}>
      <CardActionArea>
        <Card className={cardClasses}>
          <div className={classes.cardHeader}>
            <h3 className={classes.price}>{prefix + " " + price}</h3>
          </div>
          <CardMedia
            component="img"
            // height="140"
            className={classes.image}
            image={image}
            title={name}
            onClick={onClick}
          />
          <div className={classes.cardFooter}>
            <div className={classes.name}>{"Typography " + name}</div>
          </div>
        </Card>
      </CardActionArea>
    </Badge>
  );
}
// Proptypes
CardProduct.defaultProps = {
  filter: "",
  price: "",
  quantity: 0,
  name: "",
  color: "primary",
};
CardProduct.propTypes = {
  prefix: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  price: PropTypes.number,
  quantity: PropTypes.number,
  name: PropTypes.string,
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "warning",
    "success",
    "danger",
    "info",
    "rose",
  ]),
};
