import { theme, boxShadow } from "../../themes/theme.js";

const avatarFormStyle = {
  avatar: {
    width: "110px",
    height: "110px",
    borderRadius: "50%",
    objectFit: "cover",
    objectPosition: "center",
    float: "left",
    marginTop: "-20px",
    marginRight: "15px",
    backgroundColor: theme.palette.type === "light" ?   "#fff" : "#424242",
    border: "1px solid" + theme.palette.type === "light" ?   "#fff" : "#424242",
    padding: "0",
    ...boxShadow
    // boxShadow:
    //   "0 16px 38px -12px rgba(" +
    //   (blackColor) +
    //   ", 0.56), 0 4px 25px 0px rgba(" +
    //   (blackColor) +
    //   ", 0.12), 0 8px 10px -5px rgba(" +
    //   (blackColor) +
    //   ", 0.2)",
  },
  right: {
    float: "right",
  },
  square: {
    borderRadius: "6px",
  }
};

export default avatarFormStyle;
