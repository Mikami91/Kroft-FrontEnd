// Theme
import { theme } from "../../themes/theme.js";

const cardFooterStyle = {
  cardFooter: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    // padding: "0.9375rem 1.875rem"
  },
  cardFooterLogin: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  }
};

export default cardFooterStyle;
