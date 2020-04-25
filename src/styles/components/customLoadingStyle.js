import { theme } from "../../themes/theme.js";
  
  const customLoadingStyle = {
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    grid: {
      display: "grid", 
      textAlign: "center", 
      width: "60%"
    },
    inside: {
        zIndex: 50,
        color: '#fff',
        position: "absolute",
        width: "100%",
        height: "auto",
        borderRadius: 6
    }
  };
  
  export default customLoadingStyle;
  