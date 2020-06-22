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
// Core Components
import CustomText from "../Typography/CustomText";
// Styles
import styles from "../../styles/components/cardProductStyle";
// Assets
import image from "../../assets/img/defaults/product.png";

const useStyles = makeStyles(styles);

export default function CardProduct(props) {
  const classes = useStyles();
  const { photo, name, prefix, price, quantity, onClick, color } = props;
  const cardClasses = classNames({
    [classes.products]: true,
  });
  return (
    <Badge badgeContent={quantity} color={color}>
      <CardActionArea onClick={onClick}>
        <Card className={cardClasses}>
          {/* <div className={classes.cardHeader}> */}
          {/* </div> */}
          <CardMedia
            component="img"
            // height="140"
            className={classes.image}
            image={photo}
            title={name}
            loading="lazy"
          />
          <div className={classes.cardFooter}>
            {/* <h3 className={classes.name}>{name}</h3> */}
            <h3 className={classes.price}>{prefix + " " + price}</h3>
            <CustomText text={name} color="default" adjust={true} />
          </div>
        </Card>
      </CardActionArea>
    </Badge>
  );
}
// Proptypes
CardProduct.defaultProps = {
  photo: image,
  name: "",
  filter: "",
  price: "",
  quantity: 0,
  color: "primary",
};
CardProduct.propTypes = {
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
};
