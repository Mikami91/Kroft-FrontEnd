import {
  theme,
  primaryColor,
  secondaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  primaryBoxShadow,
  secondaryBoxShadow,
  warningBoxShadow,
  dangerBoxShadow,
  successBoxShadow,
  infoBoxShadow,
  roseBoxShadow,
  defaultBoxShadow,
} from "../../themes/theme.js";

const cardNameStyle = {
  cardName: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 1,
    "-webkit-box-orient": "vertical",
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),

    color: "#bfbfbf",
    background: "#424242",
    position: "absolute",
    borderRadius: "3px",

    width: "120px",
    marginTop: "-10px",
    marginLeft: "8px",
  },
  cardText: {
    fontSize: "0.6rem",
    fontWeight: "bold",
    lineHeight: "1.4rem",
    [theme.breakpoints.only('sm')]: {
      fontSize: "smaller",
      lineHeight: "1.5rem",
    },
    [theme.breakpoints.only('md')]: {
      fontSize: "small",
      lineHeight: "1.6rem",
    },
    [theme.breakpoints.only('lg')]: {
      fontSize: "medium",
      lineHeight: "1.9rem",
    },
    [theme.breakpoints.only('xl')]: {
      fontSize: "larger",
      lineHeight: "2rem",
    }
  },
  primaryColor: {
    color: "#fff",
    background: primaryColor,
    ...primaryBoxShadow,
  },
  secondaryColor: {
    color: "#fff",
    background: secondaryColor,
    ...secondaryBoxShadow,
  },
  warningColor: {
    color: "#fff",
    background: warningColor,
    ...warningBoxShadow,
  },
  dangerColor: {
    color: "#fff",
    background: dangerColor,
    ...dangerBoxShadow,
  },
  successColor: {
    color: "#fff",
    background: successColor,
    ...successBoxShadow,
  },
  infoColor: {
    color: "#fff",
    background: infoColor,
    ...infoBoxShadow,
  },
  roseColor: {
    color: "#fff",
    background: roseColor,
    ...roseBoxShadow,
  },
};

export default cardNameStyle;
