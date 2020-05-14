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

const cardPriceStyle = {
  cardPrice: {
    color: theme.palette.type === "light" ? "#424242" : "#ff9800",
    background: theme.palette.type === "light" ? "#fff" : "#424242",
    boxShadow: theme.palette.type === "light" ? defaultBoxShadow.boxShadow : warningBoxShadow.boxShadow,
    // "&$primaryColor,&$secondaryColor,&$warningColor,&$dangerColor,&$successColor,&$infoColor,&$roseColor": {
    overflow: "hidden",
    position: "absolute",
    padding: 2,
    textAlign: "center",
    borderRadius: "3px",
    // border: "solid 1px",
    width: 40,
    height: 19,
    marginTop: -74,
    marginLeft: -5,
    [theme.breakpoints.only('sm')]: {
      width: 55,
      height: 25,
      marginTop: -100,
      marginLeft: -8,
    },
    [theme.breakpoints.only('md')]: {
      width: 65,
      height: 30,
      marginTop: -110,
      marginLeft: -10,
    },
    [theme.breakpoints.only('lg')]: {
      width: 75,
      height: 35,
      marginTop: -125,
      marginLeft: -13,
    },
    [theme.breakpoints.only('xl')]: {
      width: 80,
      height: 38,
      marginTop: -130,
      marginLeft: -15,
    }
    // }
  },
  cardPrefix: {
    // paddingLeft: theme.spacing(0.7),
    overflow: "hiden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    fontSize: "0.5rem",
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
  cardText: {
    // paddingRight: theme.spacing(0.7),
    overflow: "hiden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    fontSize: "smaller",
    fontWeight: "bold",
    lineHeight: "1.4rem",
    [theme.breakpoints.only('sm')]: {
      fontSize: "small",
      lineHeight: "1.5rem",
    },
    [theme.breakpoints.only('md')]: {
      fontSize: "medium",
      lineHeight: "1.6rem",
    },
    [theme.breakpoints.only('lg')]: {
      fontSize: "larger",
      lineHeight: "1.9rem",
    },
    [theme.breakpoints.only('xl')]: {
      fontSize: "large",
      lineHeight: "2rem",
    }
  },
  cardName: {
    // paddingRight: theme.spacing(0.7),
    overflow: "hiden",
    wordBreak : "break-word",
    whiteSpace: "break-spaces",
    textOverflow: "ellipsis",
    fontSize: "smaller",
    fontWeight: "bold",
    lineHeight: "1rem",
    [theme.breakpoints.only('sm')]: {
      fontSize: "small",
      lineHeight: "1.5rem",
    },
    [theme.breakpoints.only('md')]: {
      fontSize: "medium",
      lineHeight: "1.6rem",
    },
    [theme.breakpoints.only('lg')]: {
      fontSize: "larger",
      lineHeight: "1.9rem",
    },
    [theme.breakpoints.only('xl')]: {
      fontSize: "large",
      lineHeight: "2rem",
    }
  },
  cardPrice2: {
    "&$primaryColor,&$secondaryColor,&$warningColor,&$dangerColor,&$successColor,&$infoColor,&$roseColor": {
      float: "right",
      padding: "10px",
      // position: "absolute",
      marginTop: "-20px",
      borderRadius: "3px",
      width: "1.4rem",
      height: "0.5rem",
      marginRight: "-0.3rem",
      [theme.breakpoints.only('sm')]: {
        width: "1.8rem",
        height: "0.9rem",
        marginRight: "-0.4rem",
      },
      [theme.breakpoints.only('md')]: {
        width: "2.2rem",
        height: "1.4rem",
        marginRight: "-0.5rem",
      },
      [theme.breakpoints.only('lg')]: {
        width: "2.5rem",
        height: "1.8rem",
        marginRight: "-0.6rem",
      },
      [theme.breakpoints.only('xl')]: {
        width: "3rem",
        height: "2.2rem",
        marginRight: "-0.7rem",
      },
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

export default cardPriceStyle;
