import {
    warningCardHeader,
    successCardHeader,
    dangerCardHeader,
    infoCardHeader,
    primaryCardHeader,
    secondaryCardHeader,
    roseCardHeader,
    grayColor
  } from "../../themes/theme.js";
  
  const cardIconStyle = {
    cardIcon: {
      "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
        borderRadius: "3px",
        backgroundColor: grayColor[0],
        padding: "24px",
        marginTop: "-20px",
        marginRight: "15px",
        float: "left"
      }
    },
    cardAvatar: {
      "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
        borderRadius: "50%",
        backgroundColor: grayColor[0],
        padding: "24px",
        marginTop: "-20px",
        marginRight: "15px",
        float: "left"
      }
    },
    warningCardHeader,
    successCardHeader,
    dangerCardHeader,
    infoCardHeader,
    primaryCardHeader,
    secondaryCardHeader,
    roseCardHeader
  };
  
  export default cardIconStyle;
  