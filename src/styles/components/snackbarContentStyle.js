import {
  defaultFont,
  primaryColor,
  secondaryColor,
  dangerColor,
  warningColor,
  successColor,
  infoColor,
  defaultColor,
  primaryBoxShadow,
  secondaryBoxShadow,
  infoBoxShadow,
  successBoxShadow,
  warningBoxShadow,
  dangerBoxShadow,
  boxShadow,
  container
} from "../../themes/theme.js";

const snackbarContentStyle = {
  root: {
    ...defaultFont,
    position: "relative",
    padding: "20px 15px",
    lineHeight: "20px",
    marginBottom: "20px",
    fontSize: "14px",
    backgroundColor: "white",
    color: "#555555",
    borderRadius: "0px",
    maxWidth: "100%",
    minWidth: "auto",
    boxShadow:
      "0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2)"
  },
  contentSnack: {
    padding: "0px 16px",
  },
  info: {
    backgroundColor: infoColor,
    color: "#ffffff",
    ...infoBoxShadow
  },
  success: {
    backgroundColor: successColor,
    color: "#ffffff",
    ...successBoxShadow
  },
  warning: {
    backgroundColor: warningColor,
    color: "#ffffff",
    ...warningBoxShadow
  },
  danger: {
    backgroundColor: dangerColor,
    color: "#ffffff",
    ...dangerBoxShadow
  },
  primary: {
    backgroundColor: primaryColor,
    color: "#ffffff",
    ...primaryBoxShadow
  },
  secondary: {
    backgroundColor: secondaryColor,
    color: "#ffffff",
    ...secondaryBoxShadow
  },
  default: {
    backgroundColor: defaultColor,
    color: "#2c2c2c",
    ...boxShadow
  },
  message: {
    padding: "0",
    fontWeight: "bold",
    display: "block",
    maxWidth: "100%",
    "&,& *": {
      letterSpacing: "normal"
    }
  },
  close: {
    width: "14px",
    height: "14px"
  },
  iconButton: {
    width: "24px",
    height: "24px",
    float: "right",
    fontSize: "1.5rem",
    fontWeight: "500",
    lineHeight: "1",
    position: "absolute",
    right: "-4px",
    top: "0",
    padding: "0"
  },
  icon: {
    display: "block",
    float: "left",
    marginRight: "1.071rem"
  },
  container: {
    ...container,
    position: "relative"
  }
};

export default snackbarContentStyle;
