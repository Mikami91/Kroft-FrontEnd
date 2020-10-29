import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// @material-ui/icons
// core components
import styles from "../../styles/components/cardPriceStyle.js";

const useStyles = makeStyles(styles);

export default function CardBox(props) {
  // Props
  const { data, keyValue, filter, amount, change, income } = props;
  // Styles
  const classes = useStyles();
  const cardIconClasses = classNames({
    // [classes.cardPrice]: true,
    // [classes[color + "Color"]]: color,
  });

  return data.map((index) =>
    index[keyValue] === filter ? (
      <div key={filter}>
        <h2>
          {`${amount.text}: `}{" "}
          <p className={classes[amount.color]}>{`${amount.prefix} ${
            index[amount.field]
          }`}</p>
        </h2>
        <h2>
          {`${change.text}: `}{" "}
          <p className={classes[change.color]}>{`${change.prefix} ${
            index[change.field]
          }`}</p>
        </h2>
        <h2>
          {`${income.text}: `}{" "}
          <p className={classes[income.color]}>{`${income.prefix} ${
            index[income.field]
          }`}</p>
        </h2>
      </div>
    ) : null
  );
}
// PropTypes
CardBox.defaultProps = {
  data: [],
  keyValue: "id",
  filter: null,
  amount: {
    text: "",
    prefix: "",
    field: null,
    color: "warning",
  },
  change: {
    text: "",
    prefix: "",
    field: null,
    color: "warning",
  },
  income: {
    text: "",
    prefix: "",
    field: null,
    color: "warning",
  },
};
CardBox.propTypes = {
  data: PropTypes.array,
  keyValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  filter: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  amount: PropTypes.shape({
    text: PropTypes.string,
    prefix: PropTypes.string,
    field: PropTypes.string,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "warning",
      "success",
      "danger",
      "info",
      "rose",
    ]),
  }),
  change: PropTypes.shape({
    text: PropTypes.string,
    prefix: PropTypes.string,
    field: PropTypes.string,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "warning",
      "success",
      "danger",
      "info",
      "rose",
    ]),
  }),
  income: PropTypes.shape({
    text: PropTypes.string,
    prefix: PropTypes.string,
    field: PropTypes.string,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "warning",
      "success",
      "danger",
      "info",
      "rose",
    ]),
  }),
};
