import {
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  secondaryCardHeader
} from "../../themes/theme.js";
const cardHeaderStyle = {
  cardHeader: {
    borderRadius: "3px",
    padding: "1rem 20px 1rem 20px",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "-30px",
    border: "0",
    marginBottom: "0"
  },
  cardHeaderPlain: {
    marginLeft: "0px",
    marginRight: "0px"
  },
  cardHeaderDense: {
    padding: "0.1rem 20px 0.1rem 20px",
    marginTop: "-25px",
    zIndex: 10,
  },
  cardHeaderStats: {
    padding: "15px",
    marginLeft: "0px",
    marginRight: "0px",
    zIndex: 10,


    "& $cardHeaderIcon": {
      textAlign: "right"
    },
    "& h1,& h2,& h3,& h4,& h5,& h6": {
      margin: "0 !important"
    }
  },
  cardHeaderIcon: {
    padding: "15px",
    marginLeft: "0px",
    marginRight: "0px",
    paddingRight: "0px",
    paddingLeft: "0px",
    "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
      background: "transparent",
      boxShadow: "none"
    },
    "& i,& .material-icons": {
      width: "33px",
      height: "33px",
      textAlign: "center",
      lineHeight: "33px"
    },
    "& svg": {
      width: "24px",
      height: "24px",
      textAlign: "center",
      lineHeight: "33px",
      margin: "5px 4px 0px"
    }
  },
  cardHeaderAvatar: {
    // padding: "20px",
    marginTop: "-24px",
    marginRight: "-12px",
    marginBottom: "-30px",
    marginLeft: "0px",

    // paddingRight: "0px",
    // paddingLeft: "0px",
    "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
      background: "transparent",
      boxShadow: "none"
    },
    "& i,& .material-icons": {
      width: "33px",
      height: "33px",
      textAlign: "center",
      lineHeight: "33px"
    },
    "& svg": {
      width: "24px",
      height: "24px",
      textAlign: "center",
      lineHeight: "33px",
      margin: "5px 4px 0px"
    }
  },
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  secondaryCardHeader
};

export default cardHeaderStyle;
