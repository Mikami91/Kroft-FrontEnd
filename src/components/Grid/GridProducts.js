// Dependencies
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// Core components
import CardProduct from "../../components/Card/CardProduct.js";
// Styles
import styles from "../../styles/components/gridStyle";

const useStyles = makeStyles(styles);

export default function GridProducts(props) {
  const classes = useStyles();
  const { filter, data, color } = props;
  return data.map((index, key) => {
    if (index.id_environment === filter) {
      const gridClasses = classNames({
        [classes.products]: true,
      });

      return (
        <Grid
          key={key}
          item
          xs={4}
          sm={3}
          md={2}
          lg={2}
          xl={2}
          elevation={0}
          className={gridClasses}
        >
          <CardProduct
            // color="success"
            color={color}
            prefix="Bs."
            price={index.id}
            name={index.name}
            quantity={index.id}
          />
        </Grid>
      );
    }
    return null;
  });
}
// Proptypes
GridProducts.defaultProps = {
  filter: "",
  data: [],
  color: "primary",
};
GridProducts.propTypes = {
  filter: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  data: PropTypes.array,
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
