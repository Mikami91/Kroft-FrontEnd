import { blackColor } from "../../themes/theme.js";

const avatarTableStyle = {
  avatar: {
    borderRadius: "50%",
    overflow: "hidden",
    padding: "0",
    boxShadow:
      "0 16px 38px -12px rgba(" +
      (blackColor) +
      ", 0.56), 0 4px 25px 0px rgba(" +
      (blackColor) +
      ", 0.12), 0 8px 10px -5px rgba(" +
      (blackColor) +
      ", 0.2)",
  },
  square: {
    borderRadius: 6,
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 6,
    backgroundColor: "#54575e"
  },

};

export default avatarTableStyle;
