// Theme
import { theme } from "../../themes/theme.js";

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
  cardPlain: {
    background: "transparent",
    boxShadow: "none",
  },
  cardCarousel: {
    overflow: "hidden",
  },
};

export default cardStyle;
