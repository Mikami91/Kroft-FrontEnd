// Theme
import { grayColor, theme } from "../../themes/theme.js";

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
    padding: theme.spacing(0),
    // paddingLeft: theme.spacing(5),
    // paddingRight: theme.spacing(5),
    // paddingTop: theme.spacing(1),
    // paddingBottom: theme.spacing(1),
  },
  cardFooterProfile: {
    marginTop: "-15px"
  },
  cardFooterPlain: {
    paddingLeft: "5px",
    paddingRight: "5px",
    backgroundColor: "transparent"
  },
  cardFooterStats: {
    paddingTop: "10px",
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
    borderTop: "1px solid " + grayColor[10],
    marginTop: "20px",
    "& svg": {
      position: "relative",
      top: "4px",
      marginRight: "3px",
      marginLeft: "3px",
      width: "16px",
      height: "16px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      fontSize: "16px",
      position: "relative",
      top: "4px",
      marginRight: "3px",
      marginLeft: "3px"
    }
  },
  cardFooterChart: {
    paddingTop: "10px",
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
    borderTop: "1px solid " + grayColor[10]
  }
};

export default cardFooterStyle;
