import {
  defaultFont,
  primaryColor,
  secondaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  whiteColor,
  theme,
} from "../../themes/theme.js";

const typographyStyle = {
  defaultFontStyle: {
    ...defaultFont,
    fontSize: "14px",
  },
  adjustText: {
    color: theme.palette.type === "light" ? "#424242" : "#fff",
    fontWeight: "bold",
    minHeight: "auto",
    fontSize: "0.7rem",
    [theme.breakpoints.only("sm")]: {
      fontSize: "0.8rem",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "1.1rem",
    },
    [theme.breakpoints.only("xl")]: {
      fontSize: "1.2rem",
    },
  },
  defaultHeaderMargins: {
    marginTop: "20px",
    marginBottom: "10px",
  },
  quote: {
    padding: "10px 20px",
    margin: "0 0 20px",
    fontSize: "17.5px",
    borderLeft: "5px solid #eee",
  },
  quoteText: {
    margin: "0 0 10px",
    fontStyle: "italic",
  },
  quoteAuthor: {
    display: "block",
    fontSize: "80%",
    lineHeight: "1.42857143",
    color: "#777",
  },
  mutedText: {
    color: "#777",
  },
  primaryText: {
    color: primaryColor,
  },
  secondaryText: {
    color: secondaryColor,
  },
  infoText: {
    color: infoColor,
  },
  successText: {
    color: successColor,
  },
  warningText: {
    color: warningColor,
  },
  dangerText: {
    color: dangerColor,
  },
  whiteText: {
    color: whiteColor,
  },
  defaultText: {
    color: theme.palette.type === "light" ? "#424242" : "#fff",
  },
  inheritText: {
    color: "inherit",
  },
  margin: {
    marginLeft: "0.2rem",
    marginRight: "0.2rem",
  },
  smallText: {
    fontSize: "65%",
    fontWeight: "400",
    lineHeight: "1",
    color: "#777",
  },
  text: {
    color: "#fff",
    margin: "0px 10px 0px 10px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    fontSize: "smaller",
    fontWeight: "500",
    lineHeight: "1.4rem",
    maxWidth: "0rem",
    [theme.breakpoints.only("sm")]: {
      fontSize: "small",
      lineHeight: "1.5rem",
      maxWidth: "5rem",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "medium",
      lineHeight: "1.6rem",
      maxWidth: "6rem",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "medium",
      lineHeight: "1.9rem",
      maxWidth: "9rem",
    },
    [theme.breakpoints.only("xl")]: {
      fontSize: "larger",
      lineHeight: "2rem",
      maxWidth: "10rem",
    },
  }
};

export default typographyStyle;
