// Theme
import { container, theme } from "../../themes/theme.js";

// let width;

// (function () {
//     width = window.innerWidth;

//     window.addEventListener('resize', function () {
//        if (window.innerWidth !== width) {
//           width = window.innerWidth;
//           //  window.location.reload(true);
//        }
//     });
// })();

const cardStyle = {
  card: {
    border: "0",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "6px",
    // color: "rgba(0, 0, 0, 0.87)",
    color: theme.palette.type === "light" ? "rgba(0, 0, 0, 0.87)" : "#fff",
    background: theme.palette.type === "light" ? "#fff" : "#424242",
    width: "100%",
    boxShadow:
      "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
    transition: "all 300ms linear",
    height: "72vh",
  },
  cardLogin: {
    border: "0",
    marginBottom: "15px",
    marginTop: "45px",
    borderRadius: "6px",
    color: theme.palette.type === "light" ? "rgba(0, 0, 0, 0.87)" : "#fff",
    background: theme.palette.type === "light" ? "#fff" : "#424242",
    width: "100%",
    boxShadow:
      "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
    transition: "all 300ms linear",
    minHeight: "64vh",
    maxHeight: "74vh",
  },
  cardSide: {
    border: "0",
    marginBottom: "0px",
    marginTop: "-40px",
    borderRadius: "6px",
    color: theme.palette.type === "light" ? "rgba(0, 0, 0, 0.87)" : "#fff",
    background: theme.palette.type === "light" ? "#fff" : "#424242",
    width: "100%",
    boxShadow:
      "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
    transition: "all 300ms linear",
    height: "100%",

    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  cardDash: {
    border: "0",
    borderRadius: "6px",
    color: theme.palette.type === "light" ? "rgba(0, 0, 0, 0.87)" : "#fff",
    background: theme.palette.type === "light" ? "#fff" : "#424242",
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
    // height: "85vh",
    marginTop: "5vh",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
  },

  cardPlain: {
    background: "transparent",
    boxShadow: "none",
  },
  cardProfile: {
    marginTop: "30px",
    textAlign: "center"
  },
  cardChart: {
    "& p": {
      marginTop: "0px",
      paddingTop: "0px"
    }
  },
  cardCarousel: {
    overflow: "hidden",
  },
};

export default cardStyle;
