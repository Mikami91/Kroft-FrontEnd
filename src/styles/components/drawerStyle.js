import {
    theme,
    drawerWidth,
    primaryColor,
    secondaryColor,
    warningColor,
    dangerColor,
    successColor,
    infoColor,
    roseColor,
  } from "../../themes/theme.js";
  
  const drawerStyle = {
    drawer: {
        width: drawerWidth,
        color: theme.palette.type === "light" ? "rgba(0, 0, 0, 0.87)" : "#fff",
        background: theme.palette.type === "light" ? "#fff" : "#424242",
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
  
  export default drawerStyle;
  