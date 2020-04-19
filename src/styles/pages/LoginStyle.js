// Theme
import { container, theme } from "../../themes/theme.js";

const LoginStyle = {
  container: {
    ...container,
    zIndex: "2",
    position: "relative",
    paddingTop: "5vh",
    color: "#FFFFFF",
    paddingBottom: "10px",
  },
  containerSide: {
    ...container,
    zIndex: "2",
    position: "relative",
    color: "#FFFFFF",
    paddingRight: "0px",
    height: "100%",
    paddingTop: "11.5vh",
    paddingBottom: "3.5vh",
  },
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)",
  },
  pageHeader: {
    minHeight: "100vh",
    height: "auto",
    display: "inherit",
    position: "relative",
    margin: "0",
    padding: "0",
    border: "0",
    alignItems: "center",
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)",
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""',
    },
    "& footer li a,& footer li a:hover,& footer li a:active": {
      color: "#FFFFFF",
    },
    "& footer": {
      position: "absolute",
      bottom: "0",
      width: "100%",
    },
  },
  form: {
    margin: "0",
    textAlign: "center",
    paddingTop: theme.spacing(0),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(0),
    paddingLeft: theme.spacing(1),
  },
  pinForm: {
    display: "flex",
    alignItems: "baseline",
    width: "60%",
  },
  cardHeader: {
    width: "auto",
    textAlign: "center",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "-40px",
    padding: "20px 0",
    marginBottom: "15px",
  },
  socialIcons: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
  },
  divider: {
    marginTop: "25px",
    marginBottom: "25px",
    textAlign: "center",
  },
  cardFooter: {
    paddingTop: "0rem",
    border: "0",
    borderRadius: "6px",
    justifyContent: "center !important",
  },
  socialLine: {
    marginTop: "1rem",
    textAlign: "center",
    padding: "0",
  },
  inputIconsColor: {
    color: "#495057",
  },
  cardHeaderLogin: {
    width: "auto",
    textAlign: "center",
    // marginLeft: "20px",
    // marginRight: "20px",
    // marginTop: "-40px",
    // marginBottom: "15px",
    marginLeft: theme.spacing(2.5),
    marginRight: theme.spacing(2.5),
    marginTop: theme.spacing(-5),
    marginBottom: theme.spacing(1.8),
    padding: "15px 0",
  },
  logo: {
    width: "100px",
    height: "50px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: "url(https://source.unsplash.com/random)",
    boxShadow:
      "0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)",
  },
  rootLogin: {
    widht: "100%",
    height: "100vh",
  },
};

export default LoginStyle;
