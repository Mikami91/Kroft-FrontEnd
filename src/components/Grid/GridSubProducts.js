// Dependencies
import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// Core components
import CardProduct from "../Card/CardProduct.js";
// API
import { API } from '../../API/index';
// Assets
import image from "../../assets/img/defaults/product.png";
// Styles
import styles from "../../styles/components/gridStyle";

const useStyles = makeStyles(styles);

export default function GridSubProducts(props) {
  const { data, keyData, filter, imagePath, onClick, color } = props;
  // Styles
  const classes = useStyles();
  const gridClasses = classNames({
    [classes.products]: true,
  });
  // Using useMemo hook
  return useMemo(() => {
    // Render
    return (
      <Grid
        container
        spacing={0}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {data.map((index, key) => {
          if (index[keyData] === filter) {
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
                  photo={API + imagePath + index.photo}
                  name={index.name}
                  quantity={index.id}
                  onClick={onClick}
                  keyi={key}
                />
              </Grid>
            );
          }
          return null;
        })}
      </Grid>
    );
  }, [data]);
}
// Proptypes
GridSubProducts.defaultProps = {
  data: [],
  keyData: "",
  filter: "",
  imagePath: "",
  onClick: null,
  color: "primary",
};
GridSubProducts.propTypes = {
  data: PropTypes.array,
  keyData: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  filter: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  imagePath: PropTypes.string,
  onClick: PropTypes.func,
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
