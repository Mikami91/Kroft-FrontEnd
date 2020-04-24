import {
    warningCardHeader,
    successCardHeader,
    dangerCardHeader,
    infoCardHeader,
    primaryCardHeader,
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
    warningCardHeader,
    successCardHeader,
    dangerCardHeader,
    infoCardHeader,
    primaryCardHeader,
    roseCardHeader
  };
  
  export default cardIconStyle;
  