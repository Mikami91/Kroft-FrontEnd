import {
    drawerDash,
    drawerWidth,
    transition,
    boxShadow,
    defaultFont,
    primaryColor,
    primaryBoxShadow,
    infoColor,
    successColor,
    warningColor,
    dangerColor,
    whiteColor,
    grayColor,
    blackColor,
  } from "../../themes/theme.js";
  
  const sidebarStyle = theme => ({

    content: {
      border: "0",
      borderRadius: "6px",
      color: theme.palette.type === "light" ? "rgba(0, 0, 0, 0.87)" : "#fff",
      // background: theme.palette.type === "light" ? "#fff" : "#424242",
      boxShadow:
        "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      wordWrap: "break-word",
      fontSize: ".875rem",
      transition: "all 300ms linear", 
      width: "100%",
      height: "auto",
      marginTop: "5vh",
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      paddingRight: theme.spacing(0),
      paddingLeft: theme.spacing(0),
    },
    root: {
      flexGrow: 1,
      display: 'flex',
    },
    titleH: {
      width: "100%",
      alignContent: "center",
      textAlign: "center",
      padding: "25px 0",    
    },
    titleV: {
      width: "100%",
      alignContent: "center",
      textAlign: "center",
      padding: "25px 0",   
    },
    drawer: {
      [theme.breakpoints.up('md')]: {
        width: drawerDash,
        flexShrink: 0,
      },
    },
    rootMenu: {
      [theme.breakpoints.down("xs")]: {
        flexGrow: 1,
        marginTop: 0,
        overflow: 'hidden',
      },
      [theme.breakpoints.up("sm")]: {
        flexGrow: 1,
        marginTop: 20,
        overflow: 'hidden',
      },
      [theme.breakpoints.up("md")]: {
        flexGrow: 1,
        marginTop: 15,
        overflow: 'hidden',
      },
      [theme.breakpoints.up("lg")]: {
        flexGrow: 1,
        marginTop: 20,
        overflow: 'hidden',
      },
    },

    buttonNavDash: { 
      height: "63",
      paddingLeft: 5,
      paddingRight: 5,
      display: 'grid', 
      textAlign: 'center', 
      lineHeight: 100,
    },

    drawerPaper: {
      border: "none",
      position: "fixed",
      top: "0",
      bottom: "0",
      left: "0",
      zIndex: 99999,
      ...boxShadow,
      width: drawerDash,
      [theme.breakpoints.up("md")]: {
        width: drawerDash,
        position: "fixed",
        height: "100%"
      },
      [theme.breakpoints.down("sm")]: {
        width: drawerDash,
        ...boxShadow,
        position: "fixed",
        display: "block",
        top: "0",
        height: "100vh",
        right: "0",
        // left: "auto",
        zIndex: "1032",
        visibility: "visible",
        overflowY: "visible",
        borderTop: "none",
        textAlign: "left",
        paddingRight: "0px",
        paddingLeft: "0",
        transform: `translate3d(${drawerDash}px, 0, 0)`,
        ...transition
      }
    },
    drawerPaperRTL: {
      [theme.breakpoints.up("md")]: {
        left: "auto !important",
        right: "0 !important"
      },
      [theme.breakpoints.down("sm")]: {
        left: "0  !important",
        right: "auto !important"
      }
    },
    logo: {
      position: "relative",
      padding: "15px 15px",
      zIndex: "4",
      "&:after": {
        content: '""',
        position: "absolute",
        bottom: "0",
  
        height: "1px",
        right: "15px",
        width: "calc(100% - 30px)",
        backgroundColor: "rgba(" + (grayColor[6]) + ", 0.3)"
      }
    },
    logoLink: {
      ...defaultFont,
      textTransform: "uppercase",
      padding: "5px 0",
      display: "block",
      fontSize: "18px",
      textAlign: "left",
      fontWeight: "400",
      lineHeight: "30px",
      textDecoration: "none",
      backgroundColor: "transparent",
      "&,&:hover": {
        color: whiteColor
      }
    },
    logoLinkRTL: {
      textAlign: "right"
    },
    logoImage: {
      width: "30px",
      display: "inline-block",
      maxHeight: "30px",
      marginLeft: "10px",
      marginRight: "15px"
    },
    img: {
      width: "35px",
      top: "22px",
      position: "absolute",
      verticalAlign: "middle",
      border: "0"
    },
    background: {
      position: "absolute",
      zIndex: "1",
      height: "100%",
      width: "100%",
      display: "block",
      top: "0",
      left: "0",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      "&:after": {
        position: "absolute",
        zIndex: "3",
        width: "100%",
        height: "100%",
        content: '""',
        display: "block",
        background: blackColor,
        opacity: ".8"
      }
    },
    list: {
      marginTop: "20px",
      paddingLeft: "0",
      paddingTop: "0",
      paddingBottom: "0",
      marginBottom: "0",
      listStyle: "none",
      position: "unset"
    },
    item: {
      position: "relative",
      display: "block",
      textDecoration: "none",
      "&:hover,&:focus,&:visited,&": {
        color: whiteColor
      }
    },
    itemLink: {
      width: "auto",
      transition: "all 300ms linear",
      margin: "10px 15px 0",
      borderRadius: "3px",
      position: "relative",
      display: "block",
      padding: "10px 15px",
      backgroundColor: "transparent",
      ...defaultFont
    },
    itemIcon: {
      width: "24px",
      height: "30px",
      fontSize: "24px",
      lineHeight: "30px",
      float: "left",
      marginRight: "15px",
      textAlign: "center",
      verticalAlign: "middle",
      color: "rgba(" + (whiteColor) + ", 0.8)"
    },
    itemIconRTL: {
      marginRight: "3px",
      marginLeft: "15px",
      float: "right"
    },
    itemText: {
      ...defaultFont,
      margin: "0",
      lineHeight: "30px",
      fontSize: "14px",
      color: whiteColor
    },
    itemTextRTL: {
      textAlign: "right"
    },
    whiteFont: {
      color: whiteColor
    },
    purple: {
      backgroundColor: primaryColor[0],
      ...primaryBoxShadow,
      "&:hover,&:focus": {
        backgroundColor: primaryColor[0],
        ...primaryBoxShadow
      }
    },
    blue: {
      backgroundColor: infoColor[0],
      boxShadow:
        "0 12px 20px -10px rgba(" +
        (infoColor[0]) +
        ",.28), 0 4px 20px 0 rgba(" +
        (blackColor) +
        ",.12), 0 7px 8px -5px rgba(" +
        (infoColor[0]) +
        ",.2)",
      "&:hover,&:focus": {
        backgroundColor: infoColor[0],
        boxShadow:
          "0 12px 20px -10px rgba(" +
          (infoColor[0]) +
          ",.28), 0 4px 20px 0 rgba(" +
          (blackColor) +
          ",.12), 0 7px 8px -5px rgba(" +
          (infoColor[0]) +
          ",.2)"
      }
    },
    green: {
      backgroundColor: successColor[0],
      boxShadow:
        "0 12px 20px -10px rgba(" +
        (successColor[0]) +
        ",.28), 0 4px 20px 0 rgba(" +
        (blackColor) +
        ",.12), 0 7px 8px -5px rgba(" +
        (successColor[0]) +
        ",.2)",
      "&:hover,&:focus": {
        backgroundColor: successColor[0],
        boxShadow:
          "0 12px 20px -10px rgba(" +
          (successColor[0]) +
          ",.28), 0 4px 20px 0 rgba(" +
          (blackColor) +
          ",.12), 0 7px 8px -5px rgba(" +
          (successColor[0]) +
          ",.2)"
      }
    },
    orange: {
      backgroundColor: warningColor[0],
      boxShadow:
        "0 12px 20px -10px rgba(" +
        (warningColor[0]) +
        ",.28), 0 4px 20px 0 rgba(" +
        (blackColor) +
        ",.12), 0 7px 8px -5px rgba(" +
        (warningColor[0]) +
        ",.2)",
      "&:hover,&:focus": {
        backgroundColor: warningColor[0],
        boxShadow:
          "0 12px 20px -10px rgba(" +
          (warningColor[0]) +
          ",.28), 0 4px 20px 0 rgba(" +
          (blackColor) +
          ",.12), 0 7px 8px -5px rgba(" +
          (warningColor[0]) +
          ",.2)"
      }
    },
    red: {
      backgroundColor: dangerColor[0],
      boxShadow:
        "0 12px 20px -10px rgba(" +
        (dangerColor[0]) +
        ",.28), 0 4px 20px 0 rgba(" +
        (blackColor) +
        ",.12), 0 7px 8px -5px rgba(" +
        (dangerColor[0]) +
        ",.2)",
      "&:hover,&:focus": {
        backgroundColor: dangerColor[0],
        boxShadow:
          "0 12px 20px -10px rgba(" +
          (dangerColor[0]) +
          ",.28), 0 4px 20px 0 rgba(" +
          (blackColor) +
          ",.12), 0 7px 8px -5px rgba(" +
          (dangerColor[0]) +
          ",.2)"
      }
    },
    sidebarWrapper: {
      position: "relative",
      height: "calc(100vh - 75px)",
      overflow: "auto",
      width: "260px",
      zIndex: "4",
      overflowScrolling: "touch"
    },
    activePro: {
      [theme.breakpoints.up("md")]: {
        position: "absolute",
        width: "100%",
        bottom: "13px"
      }
    }
  });
  
  export default sidebarStyle;
  