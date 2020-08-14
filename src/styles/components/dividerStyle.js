// Colors
import {
  primaryColor,
  secondaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  whiteColor,
  grayColor,
  roseColor,
} from "../../themes/theme.js";

const dividerStyle = {
  // Aling
  left: {
    textAlign: "left",
  },
  center: {
    textAlign: "center",
  },
  right: {
    textAlign: "right",
  },
  // Margin
  none: {
    margin: 0,
  },
  dense: {
    marginTop: "1rem",
    marginBottom: "-0.5rem",
  },
  normal: {
    marginTop: "2rem",
    marginBottom: "0.5rem",
  },
  // Weight
  bold: {
    fontWeight: "bold",
  },
  // Size
  small: {
    fontSize: "small",
  },
  medium: {
    fontSize: "medium",
  },
  large: {
    fontSize: "large",
  },
  // Color
  primary: {
    color: primaryColor,
  },
  secondary: {
    color: secondaryColor
  },
  info: {
    color: infoColor
  },
  success: {
    color: successColor,
  },
  warning: {
    color: warningColor,
  },
  danger: {
    color: dangerColor,
  },
  rose: {
    color: roseColor,
  },
  white: {
    color: whiteColor,
  },
  gray: {
    color: grayColor[0],
  },
};

export default dividerStyle;
