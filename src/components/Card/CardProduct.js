// Dependencies
import React, { useMemo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// Conecction to Store
import { connect } from 'react-redux';
// Actions Creators
import { orders } from '../../redux/actions/creators/productCreator';
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
  const classes = useStyles();
  const {
    // Redux
    orders_list,
    // Props
    photo, name, prefix, price, quantity, onClick, color, variant } = props;
  const cardClasses = classNames({
    [classes.products]: true,
  });

  // Using useMemo hook
  return useMemo(() => {
    return (
      <Badge badgeContent={quantity} color={color} variant={variant} max={99}>
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
  }, [quantity]);
}
// Proptypes
CardProduct.defaultProps = {
  photo: image,
  name: "",
  filter: "",
  price: "",
  quantity: 0,
  color: "primary",
  variant: "standard",
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
  variant: PropTypes.oneOf([
    "standard",
    "dot",
  ]),
};
// Connect to Store State
const mapStateToProps = (state) => {
  const { product } = state;
  return {
    orders_list: product.orders,
  }
};
export default connect(mapStateToProps, null)(CardProduct);
