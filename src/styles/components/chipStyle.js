import {
  theme,
  boxShadow,
  primaryColor,
  secondaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
} from "../../themes/theme.js";

const chipStyle = {
  chip: {
    display: 'block',
    justifyContent: 'center',
    flexWrap: 'wrap',
    background: theme.palette.type === "light" ? "#fff" : "#424242",
    width: "fit-content",
    margin: 0,
    padding: 4,
    borderRadius: "25px 7px 7px 25px",
    border: "solid 1px #777",
    ...boxShadow,
  },
  listItem: {
    margin: 0, paddingLeft: 0, paddingTop: 0, paddingBottom: 0,
  },
  listItemText: {
    margin: 0, padding: 0
  },
  listItemAvatar: {
    minWidth: '2.5rem',
    [theme.breakpoints.only('sm')]: {
      minWidth: '2.8rem',
    },
    [theme.breakpoints.only('md')]: {
      minWidth: '3rem',
    },
    [theme.breakpoints.only('lg')]: {
      minWidth: '3.4rem',
    },
    [theme.breakpoints.only('xl')]: {
      minWidth: '3.8rem',
    }
  },
  avatar: {
    color: "#fff",
    width: '30px',
    height: '30px',
    [theme.breakpoints.only('sm')]: {
      width: '35px',
      height: '35px'
    },
    [theme.breakpoints.only('md')]: {
      width: '40px',
      height: '40px'
    },
    [theme.breakpoints.only('lg')]: {
      width: '45px',
      height: '45px'
    },
    [theme.breakpoints.only('xl')]: {
      width: '50px',
      height: '50px'
    }
  },
  primary: {
    backgroundColor: primaryColor
  },
  secondary: {
    backgroundColor: secondaryColor
  },
  warning: {
    backgroundColor: warningColor
  },
  danger: {
    backgroundColor: dangerColor
  },
  success: {
    backgroundColor: successColor
  },
  info: {
    backgroundColor: infoColor
  },
  rose: {
    backgroundColor: roseColor
  },
  gray: {
    backgroundColor: "#6c757d"
  }
};

export default chipStyle;
