import {
    theme,
    warningCardHeader,
    successCardHeader,
    dangerCardHeader,
    infoCardHeader,
    primaryCardHeader,
    secondaryCardHeader,
    roseCardHeader,
    grayColor
  } from "../../themes/theme.js";
  
  const cardProductStyle = {
    
    cardHeader: {
      width: "100%",
      padding: "0px 8px 0px 8px",
      marginTop: "-0.5rem",
      marginBottom: "-0.5rem",
      zIndex: 10,
      float: "left",
    },
    price: {
      color: theme.palette.type === "light" ? "#424242" : "#ff9800",
      minHeight: "auto",
      fontSize: "0.8rem",
      [theme.breakpoints.only('sm')]: {
        fontSize: "1rem",
      },
      [theme.breakpoints.only('md')]: {
        fontSize: "1.2rem",
      },
      [theme.breakpoints.only('lg')]: {
        fontSize: "1.3rem",
      },
      [theme.breakpoints.only('xl')]: {
        fontSize: "1.4rem",
      }
    },
    image: {
      // background: "brown",
      color: "black",
      width: 65,
      height: 65,
      margin: 'auto',
  		borderRadius: "3px",
      alignItems: 'center',
      [theme.breakpoints.only('sm')]: {
        width: 90,
        height: 90
      },
      [theme.breakpoints.only('md')]: {
        width: 100,
        height: 100
      },
      [theme.breakpoints.only('lg')]: {
        width: 115,
        height: 115
      },
      [theme.breakpoints.only('xl')]: {
        width: 120,
        height: 120
      }
    },
    cardFooter: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      "-webkit-line-clamp": 1,
      [theme.breakpoints.up('md')]: {
        "-webkit-line-clamp": 2,
      },
      "-webkit-box-orient": "vertical",

      // borderTop: "1px solid #eee",
      marginTop: "8px",
      alignItems: "center",
      paddingTop: "0px",
      paddingLeft: "0px",
      paddingRight: "0px",
      paddingBottom: "3px",
      marginLeft: "8px",
      marginRight: "8px",
      width: "auto",
    },
    name: {
      color: grayColor[4],
      // display: "inline-flex",
      fontWeight: "500",
      fontSize: "0.6rem",
      lineHeight: "1rem",
      [theme.breakpoints.only('sm')]: {
        fontSize: "0.7rem",
        lineHeight: "1rem",
      },
      [theme.breakpoints.only('md')]: {
        fontSize: "0.8rem",
        lineHeight: "1.2rem",
      },
      [theme.breakpoints.only('lg')]: {
        fontSize: "0.9rem",
        lineHeight: "1.4rem",
      },
      [theme.breakpoints.only('xl')]: {
        fontSize: "1rem",
        lineHeight: "1.5rem",
      }
    },

    cardHeaderIcon: {
      padding: "15px",
      marginLeft: "0px",
      marginRight: "0px",
      paddingRight: "0px",
      paddingLeft: "0px",
      "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
        background: "transparent",
        boxShadow: "none"
      },
      "& i,& .material-icons": {
        width: "33px",
        height: "33px",
        textAlign: "center",
        lineHeight: "33px"
      },
      "& svg": {
        width: "24px",
        height: "24px",
        textAlign: "center",
        lineHeight: "33px",
        margin: "5px 4px 0px"
      }
    },


    cardTitle: {
      // color: grayColor[2],
      color: "orange",
      marginTop: "0px",
      minHeight: "auto",
      fontWeight: "300",
      fontSize: "25px",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      marginBottom: "3px",
      textDecoration: "none",
      "& small": {
        color: grayColor[1],
        fontWeight: "400",
        lineHeight: "1"
      },
      textAlign: "right"
    },


    cardIcon: {
      "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
        borderRadius: "3px",
        backgroundColor: grayColor[0],
        padding: "24px",
        marginTop: "-20px",
        marginRight: "15px",
        float: "left"
      }
    },
    cardAvatar: {
      "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
        borderRadius: "50%",
        backgroundColor: grayColor[0],
        padding: "24px",
        marginTop: "-20px",
        marginRight: "15px",
        float: "left"
      }
    },
    warningCardHeader,
    successCardHeader,
    dangerCardHeader,
    infoCardHeader,
    primaryCardHeader,
    secondaryCardHeader,
    roseCardHeader
  };
  
  export default cardProductStyle;
  