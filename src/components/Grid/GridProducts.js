// Dependencies
import React, { useMemo } from "react";
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
  const { data, keyData, filter, onClick, color } = props;
  // Using useMemo hook
  return useMemo(() => {
    // Render
    return data.map((index, key) => {
      if (index[keyData] === filter) {
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
              price={index.price}
              photo={index.photo}
              name={index.name}
              quantity={index.id}
              onClick={onClick}

              keyi={key}
            />
          </Grid>
        );
      }
      return null;
    });
  }, [data]);
}
// Proptypes
GridProducts.defaultProps = {
  data: [],
  keyData: "",
  filter: "",
  color: "primary",
};
GridProducts.propTypes = {
  data: PropTypes.array,
  keyData: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  filter: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
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
