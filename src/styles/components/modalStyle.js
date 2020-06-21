// Theme
import { theme, primaryColor } from "../../themes/theme.js";

const modalStyle = {
  modal: {
    borderRadius: "6px",
  },
  modalHeader: {
    backgroundColor: primaryColor,
    color: "white",
    borderBottom: "none",
    padding: theme.spacing(2),
    minHeight: "16.43px",
  },
  modalTitle: {
    margin: "0",
    lineHeight: "1.42857143",
  },
  modalCloseButton: {
    // color: "#999999",
    // marginTop: "-12px",
    WebkitAppearance: "none",
    padding: "0",
    cursor: "pointer",
    background: "0 0",
    border: "0",
    fontSize: "inherit",
    opacity: ".9",
    textShadow: "none",
    fontWeight: "700",
    lineHeight: "1",
    float: "right",
  },
  modalClose: {
    width: "24px",
    height: "24px",
    // marginTop: 5,
  },
  modalBody: {
    paddingTop: "24px",
    paddingRight: "24px",
    paddingBottom: "16px",
    paddingLeft: "24px",
    position: "relative",
  },
  modalFooter: {
    padding: "15px",
    textAlign: "right",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    margin: "0",
  },
  modalFooterCenter: {
    marginLeft: "auto",
    marginRight: "auto",
  },

  contentRight: {
    marginLeft: "auto",
    display: "inline-flex",
    alignItems: "center",
    padding: "0px 4px 0px 4px",
  },
  contentCenter: {
    marginRight: "auto",
    marginLetf: "auto",
    display: "inline-flex",
    alignItems: "center",
    padding: "0px 4px 0px 4px",
  },
  contentLeft: {
    marginRight: "auto",
    display: "inline-flex",
    alignItems: "center",
    padding: "0px 4px 0px 4px",
  },
  leftFabFloat: {
    right: "16px",
    margin: "0",
  },
  centerFabFloat: {
    left: 0,
    right: 0,
    margin: "0 auto",
  },
  rightFabFloat: {
    left: "16px",
    margin: "0",
  },
  fabButton: {
    position: "relative",
    zIndex: 1,
    top: 0,
    left: 0,
    right: 0,
    margin: "0 auto",
    width: "35px",
    height: "35px",
    [theme.breakpoints.only("sm")]: {
      width: "40px",
      height: "40px",
    },
    [theme.breakpoints.only("md")]: {
      width: "45px",
      height: "45px",
    },
    [theme.breakpoints.only("lg")]: {
      width: "50px",
      height: "50px",
    },
    [theme.breakpoints.only("xl")]: {
      width: "55px",
      height: "55px",
    },
  },
  leftFab: {
    marginLeft: "16px",
  },
  rightFab: {
    marginRight: "16px",
  },
  icons: {
    width: "1.3rem",
    height: "1.3rem",
    [theme.breakpoints.only("sm")]: {
      width: "1.6rem",
      height: "1.6rem",
    },
    [theme.breakpoints.only("md")]: {
      width: "2rem",
      height: "2rem",
    },
    [theme.breakpoints.only("lg")]: {
      width: "2.3rem",
      height: "2.3rem",
    },
    [theme.breakpoints.only("xl")]: {
      width: "2.6rem",
      height: "2.6rem",
    },
  },
  button: {
      padding: "4px 8px 4px 8px",
  },
  text: {
    color: "#fff",
    margin: "0px 10px 0px 10px",
    overflow: "hiden",
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
  },
};

export default modalStyle;
