import {
  theme,
  drawerDash,
  primaryColor,
  secondaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
} from "../../themes/theme.js";

const appBarStyle = {
  appBar: {
    width: "100%",
    // backgroundColor: '#0b463b',
    top: -1,
  },
  dashAppBar: {
    marginLeft: drawerDash,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerDash}px)`,
    },
    // backgroundColor: '#0b463b',
    top: -1,
  },
  icons: {
    marginRight: "3px"
  },
  primary: {
    backgroundColor: primaryColor
  },
  secondary: {
    backgroundColor: secondaryColor
  },
  warning: {
    backgroundColor: warningColor
  },
  danger: {
    backgroundColor: dangerColor
  },
  success: {
    backgroundColor: successColor
  },
  info: {
    backgroundColor: infoColor
  },
  rose: {
    backgroundColor: roseColor
  },
  gray: {
    backgroundColor: "#6c757d"
  }
};

export default appBarStyle;
