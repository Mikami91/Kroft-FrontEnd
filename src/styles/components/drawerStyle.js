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
    content: {
      border: "0",
      borderRadius: "6px",
      color: theme.palette.type === "light" ? "rgba(0, 0, 0, 0.87)" : "#fff",
      // backgroundImage: "url(https://source.unsplash.com/random)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      objectFit: "cover",
      objectPosition: "center",
      // background: theme.palette.type === "light" ? "#fff" : "#424242",
      // boxShadow:
      //   "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
      position: "relative",
      display: "flex",
      flexDirection: "row",
      wordWrap: "break-word",
      fontSize: ".875rem",
      transition: "all 300ms linear",
      width: "auto",
      height: "100vh",
      overflowY: "auto",
      marginTop: "2.5rem",
      marginBottom: "-6rem",
      alignContent: "flex-start",
      paddingTop: 0,
      paddingBottom: "9.5rem",
      paddingRight: 0,
      paddingLeft: 0,
      [theme.breakpoints.only("sm")]: {
        marginTop: "3rem",
      },
      [theme.breakpoints.only("md")]: {
        marginTop: "4rem",
      },
      [theme.breakpoints.only("lg")]: {
        marginTop: "5rem",
      },
      [theme.breakpoints.only("xl")]: {
        marginTop: "5.5rem",
      },
    },
    drawer: {
        width: drawerWidth,
        color: theme.palette.type === "light" ? "rgba(0, 0, 0, 0.87)" : "#fff",
        background: theme.palette.type === "light" ? "#fff" : "#424242",
        // height: "20rem",
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
  