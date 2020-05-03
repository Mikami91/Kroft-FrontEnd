// Theme
import { theme } from '../../themes/theme.js';

const cardBodyStyle = {
  cardBody: {
    // padding: "0.9375rem 1.875rem",
    // flex: "1 1 auto",
    // overflowY: "auto",
    // height: "70vh"
    padding: "5px 20px",
    flex: "1 1 auto",
    WebkitBoxFlex: "1",
    position: "relative"
  }, 
  cardBodyForm: {
    padding: "0px 20px 0px 20px",
    flex: "1 1 auto",
    height: "auto !important", 
    overflowY: "hidden"
  },
  cardBodyStats: {
    padding: "0px 5px 0px 5px",
    flex: "1 1 auto",
    height: "auto",
    overflowY: "auto"
  },
  cardBodyLogin: {
    padding: "0px 5px 0px 5px",
    flex: "1 1 auto",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      overflowY: "auto",
    },
    [theme.breakpoints.up("md")]: {
      height: "auto",
      minHeight: "42.5vh",
      overflowY: "auto",
    }
  },
  cardBodyProfile: {
    marginTop: "15px"
  },
};

export default cardBodyStyle;
