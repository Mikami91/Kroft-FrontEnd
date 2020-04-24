// Theme
import { boxShadow } from "../../themes/theme.js";

const cardAvatarStyle = {
  cardAvatar: {
    "&$cardAvatarProfile img": {
      width: "100%",
      height: "auto"
    }
  },
  cardAvatarForm: {
    maxWidth: "130px",
    maxHeight: "130px",
    margin: "-50px 25px 5px",
    borderRadius: "50%",
    overflow: "hidden",
    padding: "0",
    ...boxShadow,
    "&$cardAvatarPlain": {
      marginTop: "0"
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
