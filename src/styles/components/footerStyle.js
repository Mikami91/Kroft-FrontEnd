import { container, primaryColor } from "../../themes/theme.js";

const footerStyle = {
  footerAppBar: {
    top: 'auto',
    bottom: 0,
    position: "fixed",
    // backgroundColor: '#0b463b',
  },
  fabButtonFloat: {
    position: 'absolute',
    zIndex: 1,
    top: -20,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  leftFabFloat: {
    right: "16px",
    margin: '0',

  },
  centerFabFloat: {
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  rightFabFloat: {
    left: "16px",
    margin: '0',
  },
  fabButton: {
    position: 'relative',
    zIndex: 1,
    top: 0,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  leftFab: {
    marginLeft: '16px',

  },
  rightFab: {
    marginRight: '16px',
  },


  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block" 
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right!important"
  },
  footerLogin: {
    padding: 5,
    textAlign: "center",
    display: "flex",
    zIndex: "2",
    position: "relative"
  },
  footer: {
    padding: "0.9375rem 0",
    textAlign: "center",
    display: "flex",
    zIndex: "2",
    position: "relative"
  },
  a: {
    color: primaryColor,
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  footerWhiteFont: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF"
    }
  },
  container,
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px"
  }
};
export default footerStyle;
