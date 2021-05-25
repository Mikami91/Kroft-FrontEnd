import {
  theme,
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  secondaryCardHeader,
  roseCardHeader,
  grayColor,
} from "../../themes/theme.js";

const cardProductStyle = {
  product: {
    // with: 200,
    // height: 200,
  },
  cardHeader: {
    width: "100%",
    marginTop: "-0.5rem",
    marginRight: "0.5rem",
    marginBottom: "-0.5rem",
    marginLeft: "0.5rem",
    [theme.breakpoints.up("lg")]: {
      marginTop: "-1rem",
    },
    zIndex: 10,
    float: "left",
  },
  price: {
    color: theme.palette.type === "light" ? "#000" : "#ff9800",
    // minHeight: "auto",
    minHeight: "1rem",
    fontSize: "0.8rem",
    textAlign: "left",
    // position: "absolute",
    margin: "auto 0",
    [theme.breakpoints.only("sm")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "1.2rem",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "1.3rem",
    },
    [theme.breakpoints.only("xl")]: {
      fontSize: "1.4rem",
    },
  },
  image: {
    color: "black",
    objectFit: "cover",
    objectPosition: "center",
    width: "100%",
    height: 70,
    margin: "auto",
    borderRadius: "3px",
    alignItems: "center",
    [theme.breakpoints.only("sm")]: {
      width: 130,
      height: 110,
    },
    [theme.breakpoints.only("md")]: {
      width: 150,
      height: 130,
    },
    [theme.breakpoints.only("lg")]: {
      width: 190,
      height: 170,
    },
    [theme.breakpoints.only("xl")]: {
      width: 190,
      height: 170,
    },
  },
  cardFooter: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    wordBreak: "break-word",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    // [theme.breakpoints.up("md")]: {
    //   "-webkit-line-clamp": 2,
    // },
    "-webkit-box-orient": "vertical",
    marginTop: "8px",
    alignItems: "center",
    paddingTop: "0px",
    paddingLeft: "0px",
    paddingRight: "0px",
    paddingBottom: "3px",
    marginLeft: "8px",
    marginRight: "8px",
    width: "auto",
    [theme.breakpoints.only("sm")]: {
      width: 120,
    },
    [theme.breakpoints.only("md")]: {
      width: 140,
    },
    [theme.breakpoints.only("lg")]: {
      width: 170,
    },
    [theme.breakpoints.only("xl")]: {
      width: 180,
    },
  },
  name: {
    color: grayColor[4],
    // display: "inline-flex",
    fontWeight: "500",
    fontSize: "0.6rem",
    lineHeight: "1rem",
    [theme.breakpoints.only("sm")]: {
      fontSize: "0.7rem",
      lineHeight: "1rem",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "0.8rem",
      lineHeight: "1.2rem",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "0.9rem",
      lineHeight: "1.4rem",
    },
    [theme.breakpoints.only("xl")]: {
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },
  },

  cardHeaderIcon: {
    padding: "15px",
    marginLeft: "0px",
    marginRight: "0px",
    paddingRight: "0px",
    paddingLeft: "0px",
    "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
      background: "transparent",
      boxShadow: "none",
    },
    "& i,& .material-icons": {
      width: "33px",
      height: "33px",
      textAlign: "center",
      lineHeight: "33px",
    },
    "& svg": {
      width: "24px",
      height: "24px",
      textAlign: "center",
      lineHeight: "33px",
      margin: "5px 4px 0px",
    },
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
      lineHeight: "1",
    },
    textAlign: "right",
  },

  cardIcon: {
    "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
      borderRadius: "3px",
      backgroundColor: grayColor[0],
      padding: "24px",
      marginTop: "-20px",
      marginRight: "15px",
      float: "left",
    },
  },
  cardAvatar: {
    "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
      borderRadius: "50%",
      backgroundColor: grayColor[0],
      padding: "24px",
      marginTop: "-20px",
      marginRight: "15px",
      float: "left",
    },
  },
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  secondaryCardHeader,
  roseCardHeader,
};

export default cardProductStyle;
