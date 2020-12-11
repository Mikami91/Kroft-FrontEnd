import { theme } from "../../themes/theme.js";

const dialogStyle = {
  dialog: {
    color: theme.palette.type === "light" ? "#424242" : "#fff",
    position: "absolute",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
};

export default dialogStyle;
