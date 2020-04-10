// Theme
import { boxShadow } from "../../themes/theme.js";

const cardAvatarStyle = {
  cardAvatar: {
    "&$cardAvatarProfile img": {
      width: "100%",
      height: "auto"
    }
  },
  cardAvatarProfile: {
    maxWidth: "130px",
    maxHeight: "130px",
    margin: "-50px auto 0",
    borderRadius: "50%",
    overflow: "hidden",
    padding: "0",
    ...boxShadow,
    "&$cardAvatarPlain": {
      marginTop: "0"
    }
  },
  cardAvatarPlain: {}
};

export default cardAvatarStyle;
